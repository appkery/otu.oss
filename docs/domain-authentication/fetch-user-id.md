# 사용자 인증: fetchUserId

> 현재 로그인된 사용자 ID를 안전하게 가져오는 유틸리티 함수

**위치**: `supabase/utils/client.ts`

## 개요

`fetchUserId`는 Supabase 세션에서 사용자 ID를 가져오는 표준화된 방법입니다. 단순히 ID를 반환하는 것을 넘어 Sentry 통합, 상세한 에러 처리를 포함합니다.

### 핵심 특징

- **Sentry Breadcrumb**: 자동 로깅으로 에러 추적 용이
- **호출 맥락 추적**: 어디서 호출되었는지 파악
- **쿠키/Storage 상태**: 디버깅을 위한 환경 정보 수집
- **에러 타입 분류**: 상황별 명확한 에러 메시지

## 기본 사용법

```typescript
import { fetchUserId } from '@/supabase/utils/client';

// context 매개변수로 호출 위치 명시
const userId = await fetchUserId('ComponentName');
```

**context 매개변수**:

- 호출하는 컴포넌트나 함수의 이름
- Sentry 로그에서 빠르게 위치 파악 가능
- 예: `'MyComponent'`, `'usePageData hook'`, `'API route'`

## 내부 동작

### 1. 호출 맥락 수집

함수가 어디서 호출되었는지 추적합니다.

- 호출 스택 분석
- URL 정보 (브라우저 환경)
- 타임스탬프

### 2. Sentry Breadcrumb 추가

```typescript
Sentry.addBreadcrumb({
    category: 'auth',
    message: 'fetchUserId 함수 호출',
    level: 'info',
    data: { context, url, timestamp },
});
```

### 3. 세션 조회 및 검증

```
세션 조회 → 세션 존재? → 유저 정보 존재? → 유저 ID 반환
                ↓                  ↓
              에러             에러
```

**검증 단계**:

1. `getSession()` 호출
2. 세션 존재 확인
3. 세션 내 user 객체 확인
4. user.id 반환

### 4. 에러 발생 시

에러가 발생하면 추가 컨텍스트와 함께 Sentry에 보고합니다.

- 쿠키 정보
- LocalStorage 키 목록
- 호출 위치
- 타임스탬프

## 에러 타입

| 에러 메시지                           | 원인                     | Sentry 수준 |
| ------------------------------------- | ------------------------ | ----------- |
| `Session error: [message]`            | Supabase 세션 조회 실패  | Breadcrumb  |
| `No active session found`             | 로그아웃 상태, 쿠키 만료 | Exception   |
| `No user associated with the session` | 세션은 있지만 user 누락  | Exception   |

## 사용 시나리오

### 컴포넌트에서

```typescript
function PageEditor() {
    useEffect(() => {
        async function loadUser() {
            try {
                const id = await fetchUserId('PageEditor');
                // ID 사용
            } catch (error) {
                // 에러 처리 (예: 로그인 페이지로 이동)
            }
        }
        loadUser();
    }, []);
}
```

### API 라우트에서

```typescript
export async function GET(req: Request) {
    try {
        const userId = await fetchUserId('API: GET /api/pages');
        // API 로직
    } catch (error) {
        return new Response('Unauthorized', { status: 401 });
    }
}
```

### 커스텀 훅에서

```typescript
function useAuth() {
    useEffect(() => {
        async function loadAuth() {
            try {
                const id = await fetchUserId('useAuth hook');
                setUserId(id);
            } catch (error) {
                console.error('Auth error:', error);
            }
        }
        loadAuth();
    }, []);
}
```

## 디버깅

### Sentry에서 확인

1. **Breadcrumb 추적**:

    - Issues > 이슈 선택 > Breadcrumbs 탭
    - `fetchUserId 함수 호출` 검색
    - 호출 시각, URL, context 확인

2. **Extra 정보 확인**:
    - 세션 없음/유저 없음 에러 시
    - Extra 탭에서 cookies, localStorageKeys 확인

### 일반적인 문제

#### "No active session found"

**원인**:

- 사용자가 로그아웃
- 세션 쿠키 만료
- 쿠키 삭제됨

**해결**:

1. Sentry Extra에서 `cookies` 확인
2. `sb-*-auth-token` 쿠키 존재 여부 확인
3. 없으면 로그인 페이지로 리디렉션

#### "No user associated with the session"

**원인**:

- 세션은 있지만 user 객체가 null
- Supabase 내부 오류 가능

**해결**:

1. LocalStorage 확인
2. 로그아웃 후 재로그인
3. 문제 지속 시 Supabase 로그 확인

#### Context가 'unknown'으로 표시

**원인**: context 매개변수 누락

**해결**:

```typescript
// ❌ 나쁜 예
await fetchUserId();

// ✅ 좋은 예
await fetchUserId('MyComponent');
```

## 권장사항

### DO ✅

- **항상 context 전달**:

    ```typescript
    await fetchUserId('ComponentName');
    ```

- **try-catch로 에러 처리**:

    ```typescript
    try {
        const userId = await fetchUserId('MyComponent');
    } catch (error) {
        // 에러 처리
    }
    ```

- **에러 타입별 분기**:
    ```typescript
    if (error.message === 'No active session found') {
        // 로그인 페이지로
    }
    ```

### DON'T ❌

- **supabase.auth.getUser() 직접 호출 금지**

    - Sentry 추적 없음
    - 에러 처리 불완전

- **context 매개변수 생략 금지**

    - 디버깅 어려움

- **에러 무시 금지**:
    ```typescript
    // ❌ 절대 금지
    await fetchUserId('MyComponent').catch(() => null);
    ```

## 관련 문서

- [Supabase 토큰 조각 최적화](./supabase-token-fragments.md)
- [기능 명세 - 사용자 관리](../meta-guides/functionality.md#사용자-관리)
