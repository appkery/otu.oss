## 회원가입/인증 콜백 시 사용자 언어별 샘플 페이지 제공 – 작업 목록

### 설계 요약 (의사결정 제안)

- **언어 결정**: 서버 `getUserLocale()`(쿠키/헤더 기반) 우선, 없으면 기본값. 필요 시 클라이언트 `getClientLocale()`로 폴백.
- **콘텐츠 획득(권장)**: `messages/{locale}.json`에 `sample.title`, `sample.body` 키 추가해 i18n으로 로드. 키가 없으면 안전 폴백(예: `ko 샘플`/`ko 본문`).
- **중복 방지**: 회원가입에서만 1회 실행 + 결정적 ID(예: `hash(user_id+':sample')`)로 INSERT 시 충돌 무시(ON CONFLICT DO NOTHING)로 멱등성 보장.
- **구동 시점**: 회원가입/인증 콜백(`app/auth/callback/route.ts`)에서 사용자 확인 후 즉시 1회 실행. 이후 동기화로 클라이언트 반영.

### 구현 체크리스트

- [x] 콜백 훅 지점 연결: `app/auth/callback/route.ts`에서 `addUsageRecordIfNotExists` 이후 usage가 존재하지 않다면 회원가입으로 간주하고 `seedSamplePageIfNeeded(user.id)` 호출 (2025-11-07 GPT-5 Codex: `handleNewUserSetup` 경로 재검토, 호출 구조 확인)
- [x] 유틸 구현(서버): `functions/sample/seedSamplePageIfNeeded.server.ts` (2025-11-07 GPT-5 Codex: 결정적 ID 생성 로직 보완 및 테스트 추가)
    - [x] 현재 로케일 결정: 서버 `getUserLocale()` 우선, 폴백 고려 (2025-11-07 GPT-5 Codex: 기존 구현 동작 확인)
    - [x] 샘플 콘텐츠 로딩: `messages/*`의 `sample.title`/`sample.body` → 없으면 하드코딩 매핑 폴백 (2025-11-07 GPT-5 Codex: 번역 로딩 경로 검증)
    - [x] 중복 방지: 신규 사용자 분기 + 결정적 ID 삽입(ON CONFLICT DO NOTHING)으로 멱등 처리 (2025-11-07 GPT-5 Codex: `createDeterministicSamplePageId` 도입으로 중복 페이지 생성 방지)
- [x] 페이지 생성: 서버 DB(Supabase) 측에 샘플 1회 생성 → 첫 동기화 시 클라이언트 반영 (2025-11-07 GPT-5 Codex: Supabase insert 체인 테스트로 검증)
    - [x] 로깅: `debug/sample.ts` 추가 후 흐름의 시작/종료/스킵 사유 로깅 (2025-11-07 GPT-5 Codex: sampleLogger 이벤트 목록 재확인)
- [x] i18n 리소스: `messages/ko.json`, `messages/en.json` 등에 `sample.title`, `sample.body` 키 추가 (2025-11-07 GPT-5 Codex: 기존 키 존재 여부 점검)
- [x] 로깅 가이드: 활성화 예시(`localStorage.debug = 'sample,sync'`) 문서화 (2025-11-07 GPT-5 Codex: `/docs/prompts/mechanism/sample-seed.md`에 가이드 추가)
- [x] 문서: `/docs/prompts/functionality.md` 기능 요약 추가, `/docs/prompts/mechanism/sample-seed.md` 동작 메커니즘 정리 (2025-11-07 GPT-5 Codex: 파일 추가/갱신)
- [x] 코딩 스타일 점검: 필요 시 `/docs/prompts/coding-style.md` 보강 (2025-11-07 GPT-5 Codex: 기존 가이드 준수 여부 확인, 추가 변경 사항 없음)
- [x] 타입체크: `npm run type-check` 및 타입 보완 (2025-11-07 GPT-5 Codex: `tsc --noEmit` 실행)

### 참고 구현 메모

- 시딩은 회원가입/인증 콜백에서 1회만 실행. 결정적 ID + ON CONFLICT DO NOTHING으로 멱등성 보장. 이후 로그인/재접속에서는 재시딩하지 않음(트리거 없음). 사용자가 샘플을 삭제해도 재생성되지 않음.
- 샘플 내용은 최소 요구사항에 따라 `제목: ko 샘플, 본문: ko 본문` 등 간단 값으로 시작하고, i18n 키로 점진 전환.
