# 공유 페이지 메커니즘

## 페이지 공개/비공개 전환 프로세스

1. **상태 확인 및 초기화**:

    - 페이지 로드 시 `fetchPublishStatus` 함수가 서버에서 직접 페이지의 공개 상태를 확인합니다.
    - 서버에서 가져온 데이터를 기반으로 UI 상태(`isPublished`)를 초기화합니다.

2. **공개 상태 변경 처리 (`updatePagePublicStatus`)**:

    - **서버 우선 업데이트 방식**으로 작동합니다:
        - 먼저 `fetchUserId`로 현재 사용자 ID를 가져옵니다.
        - Supabase 데이터베이스에 직접 `is_public` 상태와 `updated_at`을 업데이트합니다.
    - **멀티레이어 캐시 무효화**:
        - 서비스 워커 캐시: 'share-pages', 'share-api', 'pages-rsc', 'pages' 등의 캐시에서 해당 페이지 관련 요청 삭제
        - HTTP 캐시: 공유 페이지와 API 엔드포인트에 `Cache-Control: no-cache` 헤더로 요청하여 캐시 갱신
        - Next.js 태그 캐시: `/api/share/revalidate?id={page_id}` 엔드포인트 호출로 서버 캐시 태그 무효화
    - **백그라운드 동기화**:
        - `runSync({})` 호출로 WatermelonDB와 서버 간 동기화를 백그라운드에서 실행
        - UI는 서버 응답에 기반하여 즉시 업데이트 (동기화 완료 대기 없음)

3. **UI 피드백 제공**:
    - 상태 변경 중 `animate-pulse`로 시각적 피드백 제공
    - 완료 후 성공 메시지 및 공개 상태 시 링크 복사 옵션 제공

## 공개 페이지 수정 시 캐시 갱신

1. **캐시 갱신 프로세스 (`refreshPublicPageCache`)**:

    - 위치: `components/home/logined/page/CreateUpdate/useCreate.tsx:37`
    - 서비스 워커 캐시('share-pages', 'share-api', 'pages-rsc', 'pages') 정리
    - `/api/share/revalidate?id={page_id}` 호출로 Next.js 태그 캐시 무효화

2. **캐시 갱신 호출**:
    - 공개 상태 변경 시 `updatePagePublicStatus` 내부에서 자동 호출
    - 페이지 수정 후에도 필요 시 외부에서 `refreshPublicPageCache(id)` 직접 호출 가능

## 공유 페이지 렌더링

1. **데이터 페칭**:

    - `/api/share/[id]`가 Supabase에서 페이지 및 사용자 데이터를 가져옵니다 (서비스 롤 사용, RLS 우회).
    - 공개 상태가 아닌 경우 403 반환.

2. **캐싱 전략**:

    - `revalidate: 3600`(1시간) 설정 + `share-page-{id}` 태그로 개별 무효화 지원.

3. **렌더링 및 상호작용**:

    - 서버 컴포넌트에서 렌더링, 클라이언트 상호작용은 분리.

4. **디버깅 및 모니터링**:
    - `shareLogger`로 전체 과정 로깅, 오류 시 상세 정보 기록.

## Revalidate API 인증

`/api/share/revalidate` 엔드포인트는 다음 보안 검증을 수행합니다:

1. **세션 확인**: Supabase 인증 세션 검증
2. **페이지 소유권 검증**: 요청한 사용자가 해당 페이지의 소유자인지 확인
3. **캐시 무효화**: `revalidateTag('share-page-{id}')` 실행

구현 위치: `app/api/share/revalidate/route.ts`
