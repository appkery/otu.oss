# Sample Page Seed 메커니즘

## 개요

신규 사용자에게 언어별 샘플 페이지를 자동으로 생성하는 시스템입니다.

### 실행 흐름

1. **호출 시점**: 모든 인증 경로(OAuth, 이메일, 모바일)에서 `handleNewUserSetup` 실행
2. **신규 사용자 판별**: `addUsageRecordIfNotExists`로 usage 레코드 확인
3. **샘플 생성**: 신규 사용자인 경우 `seedSamplePageIfNeeded` 호출
4. **로케일 결정**: `getUserLocale()`로 쿠키 → 브라우저 헤더 → 기본값 순 확인
5. **콘텐츠 로드**: `next-intl`의 `sample` 네임스페이스에서 언어별 제목/본문 로드

### 파일 위치

- `functions/sample/handleNewUserSetup.server.ts` - 통합 진입점
- `functions/sample/seedSamplePageIfNeeded.server.ts` - 샘플 페이지 생성 로직

## 멱등성 보장

- 사용자 ID를 `sha256` 해싱 후 ULID 알파벳으로 매핑한 `createDeterministicSamplePageId`를 사용하여 항상 동일한 26자 ID를 생성한다.
- 동일 ID 삽입 시 Supabase가 `23505`를 반환하면 정상 흐름으로 간주하고 조용히 종료한다(중복 페이지 없음).

## 콘텐츠 구성

- BlockNote 호환을 위해 본문 HTML의 블록 태그에 `data-block-id`를 부여한다 (`ulid()` 기반).
- 번역 키가 추가되면 `messages/{locale}.json`에서 자동으로 반영되며, 키가 누락되면 Sentry로만 보고되고 사용자 흐름은 계속된다.

## 로깅 & 디버깅

- `/debug/sample.ts`의 `sampleLogger`로 시작/로케일/ID/성공·스킵 이벤트를 기록한다.
- 서버: `DEBUG='sample' npm run dev`
- 클라이언트: `localStorage.debug = 'sample'` 또는 다중 추적이 필요하면 `localStorage.debug = 'sample,sync'`
