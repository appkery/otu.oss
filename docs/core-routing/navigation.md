# 네비게이션 메커니즘

## React Router DOM 기반 네비게이션 시스템

### 기본 구조

1. **React Router 설정**:

    - `components/home2/router/ClientRouter.tsx`에서 `BrowserRouter` 설정
    - basename: `/home` (모든 라우트는 `/home` 하위)
    - 클라이언트 사이드 라우팅으로 빠른 페이지 전환

2. **라우트 구조**:

    ```
    /home (basename)
    ├── /page/*          - 페이지 목록 및 상세
    ├── /folder/*        - 폴더 목록 및 상세
    ├── /search/*        - 검색 결과 및 상세
    ├── /reminder/*      - 리마인더 목록 및 상세
    └── * (fallback)     - /page로 리디렉션
    ```

3. **섹션별 독립 라우팅**:
    - 각 섹션은 독립된 Section 컴포넌트에서 내부 라우팅 처리
    - Lazy Loading으로 코드 스플리팅 최적화
    - 공통 레이아웃(`CommonLayout`)으로 상단 컨트롤 공유

### 네비게이션 훅 (`hooks/useNavigation.ts`)

React Router DOM의 `useNavigate`, `useLocation`을 래핑한 커스텀 훅입니다.

**주요 함수**:

- `navigate(path)`: 기본 네비게이션
- `goBack()`: 계층적 뒤로가기 (URL 세그먼트 제거)
- `getCurrentSection()`: 현재 섹션 파악 ('page', 'folder', 'reminder', 'search')
- `navigateToPageEdit(pageId, folderId?)`: 페이지 편집으로 이동
- `navigateToFolderDetail(folderId)`: 폴더 상세로 이동
- `navigateToReminderPage(pageId)`: 리마인더 페이지로 이동

**예시**:

```typescript
const { navigate, goBack, getCurrentSection } = useNavigation();

// 페이지 상세로 이동
navigate(`/page/${pageId}`);

// 폴더 내 페이지로 이동
navigate(`/folder/${folderId}/${pageId}`);

// 계층적 뒤로가기
goBack(); // /folder/123/abc → /folder/123
```

### URL을 단일 진실 소스로 사용

1. **상태 관리 단순화**:

    - URL 파라미터(`useParams`)로 현재 컨텍스트 파악
    - Jotai atom 의존성 제거
    - 뒤로가기/앞으로가기 자동 지원

2. **검색 기능**:
    - URL: `/home/search/:keyword` (목록)
    - URL: `/home/search/:keyword/:pageId` (상세)
    - 키워드는 URL에서만 추출하여 예측 가능성 향상

### 성능 최적화

1. **클라이언트 사이드 라우팅**:

    - 서버 요청 없이 즉시 페이지 전환
    - SPA처럼 빠른 네비게이션
    - 컴포넌트 상태 유지

2. **코드 스플리팅**:

    - 각 섹션별 Lazy Loading
    - 필요한 코드만 동적 로드
    - 초기 번들 크기 최소화

3. **공통 레이아웃 공유**:
    - 상단 컨트롤 재렌더링 방지
    - 레이아웃 변경 없이 콘텐츠만 교체

---

## 레거시 시스템 (Deprecated)

> ⚠️ `utils/navigation.ts`의 함수들은 모두 `@deprecated` 처리됨
> 새 코드는 `hooks/useNavigation.ts` 사용 권장

**레거시 방식**:

- `navigateWithState()`: history.pushState + Jotai atom 직접 조작
- 서버 라운드트립 회피를 위한 커스텀 구현
- 점진적으로 React Router DOM으로 마이그레이션 중
