# 📚 프로젝트 문서

> OTU 프로젝트의 기술 문서 모음입니다.

## 🎯 핵심 가이드

시작하기 전에 반드시 읽어야 할 문서:

- **[기능 명세](./meta-guides/functionality.md)** ⭐ - 전체 기능 목록 및 상세 설명
- **[CLAUDE.md](../CLAUDE.md)** ⭐ - 프로젝트 규칙, 코딩 스타일, 아키텍처 가이드

## 📂 문서 구조

문서는 **카테고리 prefix**로 구분되어 자동으로 그룹핑됩니다:

| Prefix       | 의미                        | 예시                                    |
| ------------ | --------------------------- | --------------------------------------- |
| **meta-**    | 메타 문서, 개발 가이드      | meta-guides                             |
| **domain-**  | 독립 비즈니스 도메인/시스템 | domain-authentication, domain-reminders |
| **feature-** | 사용자 대면 기능            | feature-editor, feature-chat            |
| **core-**    | 핵심 기술/메커니즘          | core-data, core-ui, core-routing        |
| (없음)       | 특수 폴더                   | test, archive                           |

---

## 📘 메타 문서 (meta-guides/)

프로젝트 개발을 위한 핵심 가이드 문서입니다.

> **참고**: 코딩 스타일 및 프로젝트 규칙은 [CLAUDE.md](../CLAUDE.md)를 참고하세요.

### [기능 명세](./meta-guides/functionality.md) ⭐

**읽어야 할 때**: 전체 기능 파악, 특정 기능 개발 시

전체 애플리케이션 기능 목록 및 상세 설명

- 사용자 관리 및 인증
- 편집 기능 (BlockNote, AI 통합)
- 폴더 시스템 및 검색
- 알람/리마인더 시스템

---

## 🏢 도메인 시스템 (domain-\*)

독립적인 비즈니스 도메인 및 시스템 문서입니다.

### domain-authentication/ - 인증 시스템

Supabase Auth 기반의 사용자 인증 및 토큰 관리

#### [사용자 ID 관리](./domain-authentication/fetch-user-id.md)

**읽어야 할 때**: 인증 구현, 사용자 ID 조회 필요 시

- 서버/클라이언트 환경별 인증 처리
- 사용자 ID 조회 패턴
- 에러 핸들링 및 권한 검증
- `fetchUserId()` 함수 사용법

#### [Supabase 토큰 프래그먼트](./domain-authentication/supabase-token-fragments.md)

**읽어야 할 때**: OAuth 리디렉션, 토큰 처리 최적화 시

- Supabase 인증 토큰의 URL 프래그먼트 처리
- 토큰 전달 메커니즘
- OAuth 리디렉션 플로우
- 멀티 호스트 환경 대응

**관련 문서**: [기능 명세 - 사용자 관리](./meta-guides/functionality.md)

---

### domain-reminders/ - 리마인더 시스템

DB 기반의 알람 시스템 (푸시 알림 기능은 오픈소스 버전에서 비활성화)

#### 읽는 순서

1. [core.md](./domain-reminders/core.md) - 시스템 개요
2. [scheduling.md](./domain-reminders/scheduling.md) - 스케줄링 및 CRON

#### [알람 시스템 핵심 구조](./domain-reminders/core.md)

**읽어야 할 때**: 리마인더 시스템 이해, 알람 구현 시

- 알람 시스템 아키텍처
- 데이터베이스 스키마
- 알람 생성 및 전송 플로우

#### [스케줄링 및 CRON](./domain-reminders/scheduling.md)

**읽어야 할 때**: CRON 작업, 스케줄링 구현 시

- Vercel CRON 설정
- 스케줄링 알고리즘
- 배치 처리
- 타임존 처리
- 지수 백오프 (Progressive Interval)
- 동시성 제어
- 알람 조회 조건

**관련 문서**: [기능 명세 - 리마인더](./meta-guides/functionality.md#리마인더reminders)

---

## 🎨 기능 (feature-\*)

사용자 대면 기능 문서입니다.

### feature-editor/ - 에디터 기능

BlockNote 기반의 리치 텍스트 에디터

#### [자동 저장 및 임베딩](./feature-editor/autosave.md)

**읽어야 할 때**: 에디터 구현, 자동저장 로직 수정 시

에디터의 자동 저장 및 임베딩 생성 메커니즘

- 실시간 자동저장 (3초 debounce)
- HTML 변환 최적화 (중복 방지)
- 임베딩 생성 및 동기화
- 저장 상태 표시 및 에러 처리
- 저장 실패 시 자동 재시도 (최대 3회)
- 자동 제목 생성 (100자 이상 시 AI 기반)

**핵심 기능**:

- BlockNote XL-AI 확장을 통한 AI 통합
- Cmd/Ctrl+S 단축키 지원
- 파일 업로드 및 이미지 처리

**관련 문서**: [기능 명세 - 편집 기능](./meta-guides/functionality.md)

---

### feature-chat/ - AI 채팅 기능

OpenAI 기반의 AI 채팅 및 참조 문서 관리

#### [RAG 모드 및 참조 문서 필터링](./feature-chat/rag-modes.md)

**읽어야 할 때**: AI 채팅 구현, RAG 모드 이해, 참조 문서 선택 기능 시

AI 채팅의 RAG 모드와 참조 문서 필터링 메커니즘

- **RAG 모드**:
    - 자동 모드 (Auto): 임베딩 기반 자동 문서 선택
    - 수동 모드 (Manual): 사용자가 직접 문서 선택
- 참조 문서 선택 UI
- 검색 및 필터링
- 선택된 문서 관리
- AI 컨텍스트 구성
- OpenAI GPT-4o 모델 통합

**핵심 기능**:

- 편집 화면 내 AI 채팅 접근
- Vercel AI Gateway를 통한 API 호출
- 참조 문서 기반 응답 생성

#### [임베딩 생성 및 Vector DB](./feature-chat/embeddings.md)

**읽어야 할 때**: 임베딩 시스템 이해, Vector 검색 구현 시

임베딩 생성 및 Vector 데이터베이스 관리

- **임베딩 생성**: text-embedding-3-small 모델
- **Vector DB**: Supabase pgvector 확장
- **유사도 검색**: 코사인 유사도 기반
- 자동 저장 시 임베딩 생성
- HTML 변환 최적화

**관련 문서**:

- [기능 명세 - AI 통합](./meta-guides/functionality.md)
- [자동 저장](./feature-editor/autosave.md)
- [채팅 레이아웃](./core-ui/chat-layout.md)

---

## ⚙️ 핵심 메커니즘 (core-\*)

시스템의 핵심 기술 및 메커니즘 문서입니다.

### core-data/ - 데이터 관리

WatermelonDB 기반의 로컬 데이터 관리 및 동기화

#### [데이터 동기화](./core-data/sync.md)

**읽어야 할 때**: 동기화 시스템 이해, 동기화 이슈 디버깅 시

WatermelonDB와 Supabase 간의 양방향 동기화 메커니즘

- **Pull 동기화**: 서버 → 클라이언트
    - 증분 동기화 (gt 연산자로 중복 방지)
    - 페이지네이션 처리
    - 로컬 DB 업데이트
- **Push 동기화**: 클라이언트 → 서버
    - 변경 사항 감지
    - 배치 업로드
    - 충돌 해결
- **동시성 제어**
    - 대기열 방식으로 순차 처리
    - Race condition 방지
    - 동시 동기화 차단
- **라우트 진입 동기화**
    - 특정 페이지 진입 시 자동 트리거
    - 백그라운드 동기화

**핵심 개념**:

- 오프라인 우선 (Offline-First)
- 증분 동기화 (Incremental Sync)
- 낙관적 UI (Optimistic UI)

**관련 문서**:

- [기능 명세 - 데이터 동기화](./meta-guides/functionality.md#데이터-동기화)
- [CLAUDE.md - WatermelonDB 동기화](../CLAUDE.md#watermelondb-동기화)

#### [샘플 시드 생성](./core-data/sample-seed.md)

**읽어야 할 때**: 신규 사용자 온보딩, 샘플 데이터 구현 시

신규 사용자를 위한 샘플 페이지 자동 생성

- 최초 로그인 시 샘플 데이터 생성
- 사용자 로케일별 콘텐츠 (한국어/영어)
- 멱등 처리로 중복 방지
- BlockNote 블록 ID 포함
- 다국어 지원

**관련 문서**: [기능 명세 - 신규 사용자 온보딩](./meta-guides/functionality.md)

#### [폴더 시스템](./core-data/folders.md)

**읽어야 할 때**: 폴더 기능 구현, 페이지 그룹핑 시

페이지 그룹핑을 위한 폴더 시스템

- 폴더 생성, 수정, 삭제
- 페이지와 폴더 간 관계 관리
- 폴더 트리 구조
- 오프라인 우선 설계
- WatermelonDB 아키텍처
- 폴더 및 페이지 자동 업데이트

**데이터 구조**:

- `folders` 테이블: 폴더 정보
- `pages` 테이블: folder_id 외래키
- 계층 구조 지원

**관련 문서**: [기능 명세 - 폴더 시스템](./meta-guides/functionality.md)

#### [콘텐츠 목록 갱신](./core-data/content-list-refresh.md)

**읽어야 할 때**: 목록 갱신 최적화, 성능 개선 시

페이지 저장/삭제 시 목록을 효율적으로 갱신하는 메커니즘

- **외과수술적 업데이트**: 변경된 1개 항목만 처리
- **성능 개선**: DB 쿼리 94% 감소, 렌더링 98% 감소
- **스크롤 유지**: React key props 활용
- **하위 호환성**: 기존 전체 갱신 방식과 공존

**핵심 기술**:

- Jotai atom으로 pageId와 action 전달
- WatermelonDB 단일 항목 조회
- React immer로 배열 외과수술적 수정
- useEffect 의존성 분리 (검색/정렬 vs 콘텐츠 갱신)

**관련 문서**:

- [에디터 리팩토링 계획](../plans/editor-refactoring.md)
- [성능 최적화](../core-architecture/performance.md)

---

### core-routing/ - 라우팅 시스템

React Router DOM 기반의 빠른 페이지 전환

#### [네비게이션 메커니즘](./core-routing/navigation.md)

**읽어야 할 때**: 페이지 전환 구현, 라우팅 최적화 시

빠른 페이지 전환 시스템 (레거시 Jotai 기반)

- **기본 원리**
    - Next.js router.push 우회
    - history.pushState + Jotai 상태 직접 사용
    - 서버 라운드트립 없는 즉시 전환
- **네비게이션 유틸리티**
    - `navigateWithState`: 기본 네비게이션
    - `navigateToHome`: 홈 이동
    - `navigateToSearch`: 검색 페이지
    - `navigateToPageEdit`: 페이지 편집
    - `navigateToDraw`: 그리기 페이지
- **상태 동기화**
    - 브라우저 히스토리와 앱 상태 동기화
    - extraData로 컨텍스트 정보 유지
    - 뒤로가기/앞으로가기 지원
- **성능 이점**
    - 즉시 반응
    - 컴포넌트 상태 유지
    - 네트워크 지연 없음

**적용 범위**: 하단 네비게이션, 상단 네비게이션, 콘텐츠 목록, 에디터

#### [라우팅 컴포넌트](./core-routing/components.md)

**읽어야 할 때**: React Router 구조 이해, URL 기반 상태 관리 시

React Router 기반의 URL 중심 라우팅 구조

- URL을 단일 진실 소스(Source of Truth)로 사용
- Lazy Loading 및 코드 스플리팅
- 섹션별 독립적인 라우팅
- 보호된 경로 처리 (비로그인 시 리디렉션)
- `useNavigate`, `useLocation`, `useParams` 활용

**하위 호환성**: 레거시 Jotai 기반 시스템과 공존

**관련 문서**: [기능 명세 - 네비게이션](./meta-guides/functionality.md)

---

### core-ui/ - UI 시스템

애플리케이션의 UI/UX 및 레이아웃 메커니즘

#### [테마 시스템](./core-ui/theme.md)

**읽어야 할 때**: 테마 구현, 다크모드 지원 시

gray/white/black 테마 전환 메커니즘

- **3가지 테마 모드**: gray, white, black
- **상태 관리**: Jotai `themeModeState`
- **HTML 클래스**: RootLayoutProvider에서 적용
- **CSS 변수**: globals.css에서 테마별 매핑
- **하위 호환성**: html.light → gray, html.dark → black
- **Native 브릿지**: WebViewCommunicator 동기화
- **MUI 통합**: black 테마에서만 dark palette 사용

**테마 전환 플로우**:

1. 사용자가 프로필 메뉴 클릭
2. gray → white → black → gray 순환
3. themeModeState 업데이트 (localStorage 자동 저장)
4. HTML 클래스 업데이트, CSS 변수 즉시 반영
5. 네이티브 앱에 알림

- 다크모드 판별: `isDarkModeAtom` (themeModeState === 'black')

**테스트**: `localStorage.debug = 'menu,theme'`

#### [z-index 관리](./core-ui/z-index.md)

**읽어야 할 때**: 레이어 계층 구현, z-index 충돌 해결 시

레이어 계층 관리 규칙

- z-index 값 정의 및 우선순위
- 모달, 드롭다운, 툴팁 등의 계층
- 충돌 방지 규칙
- 일관성 유지 가이드

#### [모바일 Safe Area](./core-ui/safe-area.md)

**읽어야 할 때**: 모바일 레이아웃, Safe Area 대응 시

모바일 기기의 Safe Area 처리

- iOS/Android Safe Area 대응
- 노치, 홈 인디케이터 영역 처리
- 반응형 레이아웃 적용
- CSS env() 변수 활용
- PWA 환경 고려

#### [무한 스크롤](./core-ui/infinite-scroll.md)

**읽어야 할 때**: 리스트 구현, 페이지네이션 최적화 시

리스트의 무한 스크롤 구현

- 페이지네이션 없는 연속 로딩
- 스크롤 위치 기반 자동 로드
- 성능 최적화 (가상 스크롤)
- Intersection Observer 활용
- 로딩 상태 관리

#### [채팅 레이아웃](./core-ui/chat-layout.md)

**읽어야 할 때**: 채팅 UI 구현, 반응형 디자인 시

채팅 UI의 반응형 레이아웃

- 데스크톱/모바일 별 레이아웃
- 채팅 패널 토글
- 반응형 크기 조정
- 에디터와 채팅 통합
- Material-UI 활용

**관련 문서**: [Motion HOC](./core-architecture/motion-hoc.md)

---

### core-architecture/ - 아키텍처 패턴

애플리케이션의 핵심 아키텍처 패턴 및 공유 메커니즘

#### [성능 최적화](./core-architecture/performance.md)

**읽어야 할 때**: 성능 문제 해결, 최적화 전략 수립 시

애플리케이션 성능 최적화 전략

- **React 최적화**
    - Memoization (useMemo, useCallback, React.memo)
    - Virtualization (react-window, react-virtuoso)
    - Code Splitting (React.lazy, dynamic import)
- **데이터 최적화**
    - WatermelonDB 쿼리 최적화
    - 배치 처리 (PostgreSQL 함수)
    - 디바운스 및 쓰로틀링
- **번들 최적화**
    - Next.js dynamic import
    - React Router lazy loading
    - 청크 크기 제어
- **모니터링**
    - Vercel Speed Insights
    - Core Web Vitals 추적
    - 성능 메트릭 수집

**관련 문서**:

- [데이터 동기화](./core-data/sync.md)
- [무한 스크롤](./core-ui/infinite-scroll.md)

#### [Motion HOC 패턴](./core-architecture/motion-hoc.md)

**읽어야 할 때**: 모달/다이얼로그 구현, 애니메이션 추가 시

모달/다이얼로그 공통 로직 추상화 패턴

- **Higher-Order Component (HOC) 패턴**
    - 공통 로직 재사용
    - Props 주입 패턴
    - 래퍼 컴포넌트 생성
- **Framer Motion 통합**
    - 애니메이션 설정
    - Enter/Exit 애니메이션
    - Backdrop 처리
- **상태 관리**
    - 열림/닫힘 상태
    - 애니메이션 상태
    - 포커스 관리
- **재사용 가능한 UI 패턴**
    - 일관된 애니메이션
    - 접근성 지원
    - 키보드 네비게이션

**사용 예시**: 모달, 다이얼로그, 드로어, 팝오버

#### [페이지 공유 메커니즘](./core-architecture/sharing.md)

**읽어야 할 때**: 페이지 공유 기능 구현, 권한 관리 시

페이지 공유 메커니즘

- 공개 링크 생성
- 권한 관리 (읽기 전용)
- 공유 페이지 접근 제어
- SEO 최적화
- URL 파라미터 처리
- 비로그인 사용자 접근

**공유 플로우**:

1. 사용자가 공유 활성화
2. 고유 공유 ID 생성
3. 공개 URL 생성
4. 비로그인 사용자도 접근 가능
5. 편집 권한 없음

**관련 문서**: [기능 명세 - 페이지 공유](./meta-guides/functionality.md)

---

## 🧪 테스트 (test/)

테스트 문서 및 가이드

### [테스트 상태](./test/test-status.md)

**읽어야 할 때**: 전체 테스트 현황 파악 시

프로젝트 전체 테스트 현황

- 단위 테스트 현황
- API 테스트 현황
- 커버리지 정보
- 테스트 작성 우선순위

---

## 🗂️ 디렉토리 구조

```
docs/
├── README.md                         (이 파일)
├── CHANGELOG.md                      (버전 히스토리)
│
├── meta-guides/                      (메타 문서)
│   ├── functionality.md              ⭐ 기능 명세
│   └── async-cleanup-pattern.md
│
├── domain-authentication/            (인증)
│   ├── fetch-user-id.md
│   └── supabase-token-fragments.md
│
├── domain-reminders/                 (리마인더)
│   ├── core.md
│   ├── scheduling.md
│   └── alarm-policy.md
│
├── feature-editor/                   (에디터)
│   └── autosave.md
│
├── feature-chat/                     (AI 채팅)
│   ├── rag-modes.md
│   └── embeddings.md
│
├── core-data/                        (데이터)
│   ├── sync.md
│   ├── sample-seed.md
│   ├── folders.md
│   └── content-list-refresh.md
│
├── core-routing/                     (라우팅)
│   ├── navigation.md
│   └── components.md
│
├── core-ui/                          (UI)
│   ├── theme.md
│   ├── z-index.md
│   ├── safe-area.md
│   ├── infinite-scroll.md
│   └── chat-layout.md
│
├── core-architecture/                (아키텍처)
│   ├── performance.md
│   ├── motion-hoc.md
│   └── sharing.md
│
├── test/                             (테스트)
│   ├── test-status.md
│   ├── pgtap-testing.md
│   └── reminder-infinite-scroll-debug.md
│
└── archive/                          (아카이브)
    └── 2024/                         (완료된 작업)
```

**총 10개 폴더, 27개 마크다운 파일** (아카이브 제외 시)

---

## 📖 읽는 순서

### 신규 개발자

1. **[CLAUDE.md](../CLAUDE.md)** - 프로젝트 규칙, 코딩 스타일 이해
2. **[기능 명세](./meta-guides/functionality.md)** - 전체 기능 파악
3. **[데이터 동기화](./core-data/sync.md)** - 핵심 아키텍처 이해
4. 작업할 기능 관련 문서 탐색

### 특정 기능 개발

#### 인증 관련

1. [기능 명세 - 사용자 관리](./meta-guides/functionality.md)
2. [사용자 ID 관리](./domain-authentication/fetch-user-id.md)
3. [Supabase 토큰](./domain-authentication/supabase-token-fragments.md)

#### 리마인더 관련

1. [기능 명세 - 리마인더](./meta-guides/functionality.md#리마인더)
2. domain-reminders/ 폴더의 읽는 순서 참고 (위 섹션)

#### 에디터 관련

1. [기능 명세 - 편집 기능](./meta-guides/functionality.md)
2. [자동 저장](./feature-editor/autosave.md)

#### 데이터 동기화 관련

1. [데이터 동기화](./core-data/sync.md)
2. [성능 최적화](./core-architecture/performance.md)

### 버그 디버깅

1. 해당 기능의 문서 확인
2. 관련 메커니즘 문서 읽기
3. [테스트 문서](./test/) 참고
4. 시스템별 디버깅 가이드 활용 (예: [리마인더 스케줄링](./domain-reminders/scheduling.md))

---

## 🔍 빠른 찾기

### 주제별 문서 찾기

| 주제              | 문서                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| 인증/로그인       | [domain-authentication/](./domain-authentication/)                                                                   |
| 알람/리마인더     | [domain-reminders/](./domain-reminders/)                                                                             |
| 에디터            | [feature-editor/autosave.md](./feature-editor/autosave.md)                                                           |
| AI 채팅           | [feature-chat/rag-modes.md](./feature-chat/rag-modes.md), [feature-chat/embeddings.md](./feature-chat/embeddings.md) |
| 데이터 동기화     | [core-data/sync.md](./core-data/sync.md)                                                                             |
| 폴더 시스템       | [core-data/folders.md](./core-data/folders.md)                                                                       |
| 라우팅/네비게이션 | [core-routing/](./core-routing/)                                                                                     |
| 테마/다크모드     | [core-ui/theme.md](./core-ui/theme.md)                                                                               |
| 모바일 UI         | [core-ui/safe-area.md](./core-ui/safe-area.md)                                                                       |
| 성능 최적화       | [core-architecture/performance.md](./core-architecture/performance.md)                                               |
| HOC 패턴          | [core-architecture/motion-hoc.md](./core-architecture/motion-hoc.md)                                                 |
| 페이지 공유       | [core-architecture/sharing.md](./core-architecture/sharing.md)                                                       |
| 테스트            | [test/](./test/)                                                                                                     |

---

## 📝 문서 작성 가이드

새 문서를 작성할 때:

### 카테고리 선택

적절한 prefix 폴더에 배치:

- **비즈니스 도메인** → domain-\* (예: domain-notifications/)
- **사용자 기능** → feature-\* (예: feature-calendar/)
- **기술 메커니즘** → core-\* (예: core-caching/)

### 작성 원칙

- ✅ **개념과 메커니즘 중심** 설명
- ✅ 시스템 아키텍처 및 데이터 흐름
- ✅ 사용 시나리오와 예시
- ✅ "읽어야 할 때" 섹션 포함
- ❌ 코드 구현 세부사항 과다
- ❌ 긴 코드 스니펫 (간단한 것만)
- ❌ 함수 시그니처 나열

### 문서 구조 예시

```markdown
# 문서 제목

**읽어야 할 때**: [사용 상황 설명]

[개요 및 목적]

## 핵심 개념

[주요 개념 설명]

## 동작 방식

[시스템 동작 설명]

## 사용 예시

[실제 사용 시나리오]

## 관련 문서

- [관련 문서 링크]
```

---

## 🗄️ 아카이브

완료된 작업 문서와 과거 자료는 [archive/](./archive/) 디렉토리에 보관됩니다.

- **날짜별 폴더 구조** (예: archive/2024/)
- **삭제하지 않고 보존**하여 히스토리 추적 가능
- 참고 자료로 활용

---

## 💡 Prefix 시스템의 장점

1. **자동 그룹핑**: 파일 탐색기에서 알파벳 순으로 카테고리별 자동 정렬
2. **명확한 분류**: 폴더명만 봐도 문서의 성격 즉시 파악
3. **탐색 효율성**: 관련 문서를 한눈에 찾을 수 있음
4. **확장성**: 새 문서 추가 시 분류 규칙이 명확함
5. **일관성**: 모든 폴더가 동일한 명명 규칙 사용

### 알파벳 정렬 순서

```
archive/           (특수)
core-*            (핵심 메커니즘 - 4개 폴더)
domain-*          (도메인 시스템 - 2개 폴더)
feature-*         (기능 - 2개 폴더)
meta-*            (메타 문서 - 1개 폴더)
test/             (특수)
```

→ 카테고리별로 자연스럽게 그룹핑됨!

---

## 📊 문서 통계

| 카테고리     | 폴더 수 | 파일 수 | 특징              |
| ------------ | ------- | ------- | ----------------- |
| **meta-**    | 1       | 2       | 핵심 가이드       |
| **domain-**  | 2       | 5       | 비즈니스 시스템   |
| **feature-** | 2       | 3       | 사용자 기능       |
| **core-**    | 4       | 13      | 기술 메커니즘     |
| **test**     | 1       | 3       | 테스트            |
| **archive**  | 1       | 1       | 아카이브          |
| **루트**     | -       | 2       | README, CHANGELOG |
| **총계**     | **10**  | **27**  | -                 |

---

**마지막 업데이트**: 2026-01-24
**문서 버전**: 2.3 (중복 문서 통합 및 CLAUDE.md 단일화)
