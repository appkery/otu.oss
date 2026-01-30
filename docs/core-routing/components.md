# 컴포넌트 렌더링 메커니즘

## React Router 기반 컴포넌트 시스템

### 섹션별 라우트 구조

각 섹션은 독립적인 라우팅 구조를 가지며, URL 파라미터로 컨텍스트를 파악합니다.

#### Page 섹션 (`components/home2/sections/page/Section.tsx`)

```
/page
├── /              - PageList (목록)
└── /:pageId       - PageDetail (상세, Nested Route)
```

**특징**:

- `PageList`가 항상 마운트된 상태에서 `PageDetail`이 오버레이로 표시
- `useParams()`로 `pageId` 추출
- Nested Route로 뒤로가기 시 자동으로 목록으로 복귀

#### Folder 섹션 (`components/home2/sections/folder/Section.tsx`)

```
/folder
├── /                      - FolderList (폴더 목록)
├── /:folderId             - FolderDetailPageList (폴더 내 페이지 목록)
└── /:folderId/:pageId     - PageDetail (페이지 상세)
```

**특징**:

- 3단계 계층 구조 (목록 → 폴더 → 페이지)
- `folderId` 컨텍스트가 URL로 자동 전달
- 뒤로가기 시 자연스러운 계층 이동

#### Search 섹션 (`components/home2/sections/search/Section.tsx`)

```
/search
├── /                      - SearchList (검색 화면)
├── /:keyword              - SearchList (검색 결과)
└── /:keyword/:pageId      - PageDetail (검색 결과 내 상세)
```

**특징**:

- URL이 단일 진실 소스 (`useParams().keyword`)
- atom/querystring 의존성 제거
- 검색 컨텍스트 유지하며 상세 진입/복귀

### 공통 컴포넌트 재사용

#### PageDetail (`components/home2/shared/PageDetail.tsx`)

모든 섹션에서 공통으로 사용하는 페이지 상세 컴포넌트입니다.

**특징**:

- `useParams()`로 `pageId`, `folderId` 자동 추출
- SwipeableModal로 오버레이 표시
- 수정 감지 및 자동 저장
- `navigate('..')` 상대 경로로 뒤로가기

**사용 예시**:

```typescript
// Page 섹션
<Route path=":pageId" element={<PageDetail />} />

// Folder 섹션
<Route path=":folderId/:pageId" element={<PageDetail />} />

// Search 섹션
<Route path=":keyword/:pageId" element={<PageDetail />} />
```

### URL 파라미터 기반 렌더링

1. **파라미터 추출**:

    ```typescript
    const { pageId, folderId, keyword } = useParams();
    ```

2. **조건부 렌더링**:

    - `pageId` 존재 → PageDetail 표시
    - `folderId` 존재 → 폴더 컨텍스트 전달
    - `keyword` 존재 → 검색 컨텍스트 유지

3. **상대 경로 네비게이션**:
    ```typescript
    navigate('..'); // 상위 경로로 이동
    navigate(`/${folderId}/${pageId}`); // 절대 경로
    ```

### 레거시 시스템과의 차이

| 항목          | 레거시 (Jotai 기반)     | 현재 (React Router)    |
| ------------- | ----------------------- | ---------------------- |
| 상태 소스     | `currentPageState` atom | URL 파라미터           |
| 컨텍스트 전달 | `extraData` 필드        | URL 구조 자체          |
| 뒤로가기      | 커스텀 히스토리 관리    | 브라우저 기본 동작     |
| 컴포넌트 조건 | `currentPage.type` 확인 | React Router `<Route>` |

---

## 레거시 시스템 (Deprecated)

> ⚠️ 레거시 컴포넌트는 점진적으로 React Router 기반으로 마이그레이션 중

**레거시 방식**:

- `currentPagePathToType()` 함수로 URL → 페이지 타입 변환
- `currentPageState` atom 기반 조건부 렌더링
- `components/layout/MainLayout.tsx`의 `watchingPathChange`로 동기화
