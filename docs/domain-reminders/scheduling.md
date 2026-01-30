# 리마인더 알람 스케줄링

## CRON 실행

### 엔드포인트

- **경로**: `/api/reminder/renew-alarms`
- **실행 주기**: 매분 2회 (0초/5초 지연)
- **동시성 제어**: 고정 지연으로 CRON 인스턴스 간 충돌 방지
- **인증**: Production/Preview는 `Bearer ${CRON_SECRET}` 필수

### 배치 처리

- **기본 크기**: 100개
- **최대 크기**: 1,000개
- **동적 조절**: URL 파라미터 `fetch_limit`으로 조정 가능

## 알람 조회 조건

다음 조건을 만족하는 알람을 조회합니다:

```sql
-- 최초 구독 알람
(sent_count = 1) OR
-- 현재부터 12시간 이후까지의 알람
(next_alarm_time + INTERVAL '12 hours' > p_current_time)
```

**특징**:

- **좀비 데이터 구제**: 13시간 이상 된 과거 알람도 처리하여 정상 사이클로 복귀
- **재처리 방지**: 처리된 알람은 24시간 후로 예약되어 12시간 범위를 벗어남
- **최초 알람 보장**: `sent_count = 1`인 알람은 시간과 무관하게 항상 조회
- **처리 우선순위**: `ORDER BY next_alarm_time ASC NULLS LAST`

## 발송 정책

### 시간대 제한

- **허용 시간**: 사용자 시간대 기준 09:00-21:00만 발송
- **수면 시간 회피**: 야간 시간대는 자동으로 다음 09:00으로 연기

### 지수 백오프 (Progressive Interval)

기본 공식: `24시간 × 2^(sent_count-1)`

| sent_count | 계산 | 간격         |
| ---------- | ---- | ------------ |
| 1          | 2^0  | 1일          |
| 2          | 2^1  | 2일          |
| 3          | 2^2  | 4일          |
| 4          | 2^3  | 8일          |
| 7          | 2^6  | 64일         |
| 8          | 2^7  | 128일        |
| 9          | 2^8  | 256일 (최대) |
| 10+        | -    | 256일 (제한) |

**sent_count는 계속 증가하지만 실제 간격은 256일에서 고정됩니다.**

## 간격 제한 메커니즘

### 다단계 안전장치

`calculate_progressive_interval` 함수에서 처리:

1. **base_time 보정**: 1년 이상 미래인 경우 현재 시간으로 보정
2. **승수 간격 계산**: `2^(sent_count-1)` 일 (최대 256일)
3. **결과 검증**: 계산 결과가 1년 초과 시 현재 + 256일로 제한
4. **overflow 보호**: 계산 중 오류 발생 시 현재 + 256일로 안전하게 복구

### 장점

- **사용자 경험**: 너무 먼 미래의 알람으로 인한 혼란 방지
- **시스템 안정성**: 타임스탬프 overflow 방지, 극단적인 날짜 계산 차단
- **데이터 무결성**: sent_count는 계속 증가하여 통계 활용 가능

### 적용 시점

- **마이그레이션**: `20251031000000_fix_timestamp_overflow_in_calculate_progressive_interval.sql`
- **영향 함수**: `calculate_progressive_interval`, `process_alarms_atomically`

## 처리 순서

1. **알람 조회**: 조건에 맞는 알람 배치 조회 (DB 락 획득)
2. **과거 시간 보정**: `next_alarm_time < 현재시간`인 경우 현재시간으로 보정
3. **승수 간격 계산**: `calculate_progressive_interval` 함수 호출
4. **수면 시간 조정**: `adjust_for_sleep_time` 함수로 허용 시간대 보정
5. **충돌 해결**: 동일 사용자의 다른 알람과 시간 중복 방지 (최대 50회 재시도, 랜덤 시간 추가)
6. **DB 업데이트**: `sent_count` 증가, `next_alarm_time` 갱신
7. **푸시 알림 발송**: 푸시 알림 전송 (idempotency-key 사용)
8. **알림 ID 저장**: 성공한 알람의 `last_notification_id` 배치 업데이트

## 성능 최적화

### DB 함수 통합

- **함수명**: `process_alarms_atomically`
- **장점**: 네트워크 왕복 최소화 (401회 → 1회), 원자적 업데이트 보장

### 타임존 통합

- 서브쿼리로 사용자 타임존과 페이지 정보 동시 조회
- JOIN을 통한 개별 SELECT 최적화

### 동시성

- **p-map 동시성**: 10
- **DB 락**: `FOR UPDATE SKIP LOCKED`로 충돌 방지
