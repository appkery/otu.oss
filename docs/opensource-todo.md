# 오픈소스 배포 남은 작업

> 이 문서는 오픈소스 배포를 위해 남은 작업 목록입니다.

## ✅ 완료된 작업

- [x] 결제 기능 제거 (RevenueCat) - #1331
- [x] 측정 도구 제거 (Amplitude) - #1332
- [x] 푸시 알림 제거 (OneSignal) - b5e98321
- [x] 결제 관련 코드 정리 - #1330
- [x] 문서에서 OneSignal 참조 제거 - #1333
- [x] LICENSE 파일 생성 (MIT)
- [x] CONTRIBUTING.md 작성
- [x] CODE_OF_CONDUCT.md 작성
- [x] Sentry 선택적 활성화 (`NEXT_PUBLIC_ENABLE_SENTRY`)
- [x] AI 기능 선택적 활성화 (`ENABLE_AI`)
- [x] 환경변수 템플릿 정리 (`.env.template`)
- [x] Issue/PR 템플릿 구성 (`.github/`)
- [x] CI/CD 워크플로우 추가 (`.github/workflows/ci.yml`) - #1337
- [x] 테스트 통과 확인 (`npm test`) - 171개 테스트 통과
- [x] 타입 체크 통과 (`npm run type-check`)
- [x] 빌드 성공 확인 (`npm run build`)

## ⏳ 남은 작업

### 1. 결제 관련 DB 스키마 제거 (마이그레이션 적용)

**우선순위**: 낮음 (새 저장소에서 진행)

마이그레이션 파일은 이미 작성됨:

- `supabase/migrations/20260124000000_remove_payment_related_schema.sql`

**제거 대상**:
| 종류 | 항목 |
|------|------|
| 테이블 | `order`, `subscriptions`, `usage`, `usage_audit`, `product_payment_type`, `prouduct_payment_type_price` |
| 함수 | `set_quota`, `increment_quota`, `log_usage_changes` |
| ENUM | `currency`, `order_status`, `payment_cycle`, `pg`, `subscription_status`, `subscription_plan`, `subscription_active_status`, `store_type` |

**적용 방법**:

```bash
npx supabase db push
```

**주의**: 프로덕션 DB에는 적용하지 않음. 새 저장소의 로컬/개발 환경에서만 적용.

---

### 2. 새로운 저장소 생성

**우선순위**: 최종 단계

현재 저장소의 git history에 민감 정보가 있을 수 있으므로, 정리된 코드를 새 저장소에 초기 커밋으로 시작.

**절차**:

1. 새 GitHub 저장소 생성
2. 현재 브랜치의 최신 코드를 새 저장소에 복사 (git history 제외)
3. 민감 파일 제외 확인 (아래 "복사 제외 항목" 참조)
4. README.md의 TODO 주석 위치에 새 저장소 URL 업데이트
5. 초기 커밋 생성
6. GitHub에 푸시
7. `.github/workflows/main.yml` 파일 삭제 (Airtable 연동 - 내부 전용)

---

### 3. (선택) Airtable 워크플로우 정리

**우선순위**: 낮음

`.github/workflows/main.yml`은 내부 프로젝트 관리용(Airtable 연동)입니다.
**오픈소스 저장소에서는 반드시 삭제**하세요.

---

## 📦 새 저장소 복사 시 제외 항목

새 저장소로 코드를 복사할 때 아래 항목은 **반드시 제외**해야 합니다.
(`.gitignore`와 일치하도록 구성됨)

### 환경 변수 및 민감 정보

```
.env
.env*.local
.env.dev
.env.real
.env.test
.env.backup
.envrc
.env.sentry-build-plugin
.sentryclirc
```

### 빌드/캐시 결과물

```
node_modules/
.next/
/out/
/build/
/coverage/
*.tsbuildinfo
next-env.d.ts
```

### IDE/에디터 설정

```
.idea/
.vscode/
.DS_Store
```

### 테스트 결과물

```
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
playwright/.auth/
```

### 기타

```
.vercel/
certificates/
supabase/ddl/
*.deprecated.*
*.orig
log.log
analyze/nodejs.html
public/sw*
public/swe-worker*
.claude/settings.local.json
copilot-instructions.md
db.ts
```

### rsync 명령어 예시

```bash
rsync -av --progress \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.env' \
  --exclude='.env*.local' \
  --exclude='.env.dev' \
  --exclude='.env.real' \
  --exclude='.env.test' \
  --exclude='.env.backup' \
  --exclude='.envrc' \
  --exclude='.env.sentry-build-plugin' \
  --exclude='.sentryclirc' \
  --exclude='.vercel' \
  --exclude='.idea' \
  --exclude='.vscode' \
  --exclude='.DS_Store' \
  --exclude='*.tsbuildinfo' \
  --exclude='next-env.d.ts' \
  --exclude='test-results' \
  --exclude='playwright-report' \
  --exclude='blob-report' \
  --exclude='playwright/.cache' \
  --exclude='playwright/.auth' \
  --exclude='coverage' \
  --exclude='out' \
  --exclude='build' \
  --exclude='supabase/ddl' \
  --exclude='*.deprecated.*' \
  --exclude='*.orig' \
  --exclude='log.log' \
  --exclude='analyze/nodejs.html' \
  --exclude='public/sw*' \
  --exclude='public/swe-worker*' \
  --exclude='.claude/settings.local.json' \
  --exclude='copilot-instructions.md' \
  --exclude='db.ts' \
  --exclude='certificates' \
  ./ /path/to/new-repo/
```

---

## 📝 README.md 업데이트 완료

새 저장소 URL (`opentutorials-org/otu.oss`)로 업데이트 완료:

1. **README.md** ✅

    - GitHub 배지 URL
    - AI 에이전트 프롬프트 raw URL
    - git clone URL
    - GitHub Issues URL

2. **docs/installation.md** ✅

    - git clone URL

3. **CONTRIBUTING.md** ✅
    - GitHub Issues URL
    - 포크/클론 URL
    - 버그 리포트 템플릿 URL
    - 기능 요청 템플릿 URL
    - Discussions URL

---

## 📋 체크리스트

새 저장소 생성 전 최종 확인:

- [x] CI/CD 워크플로우 추가됨 (`.github/workflows/ci.yml`)
- [ ] DB 마이그레이션 적용됨 (로컬 환경)
- [x] `.env.template` 최신 상태 확인
- [x] README.md 오픈소스 배포용 검토 (URL 업데이트 완료: `otu.oss`)
- [x] 민감 정보 노출 없음 확인 (`.env.template`에 예시 값만 포함)
- [x] 모든 테스트 통과 (`npm test`) - 171개 테스트 통과
- [x] 타입 체크 통과 (`npm run type-check`)
- [x] 빌드 성공 (`npm run build`)

새 저장소 복사 후 확인:

- [ ] `.github/workflows/main.yml` 삭제됨 (Airtable 워크플로우)
- [ ] 민감 파일이 복사되지 않았는지 확인
- [ ] 새 저장소에서 `npm install && npm test` 실행 확인
- [ ] 새 저장소에서 `npm run build` 성공 확인

---

_마지막 업데이트: 2026-01-30_
