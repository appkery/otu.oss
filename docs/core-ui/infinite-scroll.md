# 무한 스크롤 (Infinite Scroll) 메커니즘

## 개요

페이지 목록에서 사용자가 스크롤을 내릴 때 자동으로 다음 페이지를 로딩하는 기능입니다.

## 구현 방식

### 1. 커스텀 훅: `useCustomInfiniteScroll`

- **위치**: `hooks/useCustomInfiniteScroll.tsx`
- **기능**: Intersection Observer를 사용한 무한 스크롤 로직
- **장점**: 라이브러리 의존성 없음, 완전한 제어 가능, 안정적

#### 주요 옵션

```tsx
interface UseCustomInfiniteScrollOptions {
    hasNextPage: boolean; // 다음 페이지 존재 여부
    loading: boolean; // 현재 로딩 상태
    onLoadMore: () => void; // 다음 페이지 로딩 함수
    disabled?: boolean; // 비활성화 여부
    rootMargin?: string; // 트리거 여백 (기본: '100px')
    threshold?: number; // 감지 임계값 (기본: 0.1)
}
```

#### 동작 원리

1. **센트리 요소 감시**: `sentryRef`로 지정된 DOM 요소를 Intersection Observer로 감시
2. **뷰포트 진입 감지**: 센트리가 화면에 나타나기 100px 전에 미리 감지
3. **자동 로딩 트리거**: 조건 충족 시 `onLoadMore` 함수 자동 호출
4. **중복 방지**: `loading` 상태일 때 추가 호출 차단

### 2. UI 컴포넌트: `InfiniteScrollSentry`

- **위치**: `components/common/InfiniteScrollSentry/index.tsx`
- **기능**: 재사용 가능한 무한 스크롤 센트리 UI
- **특징**: 로딩 상태 표시, 수동 클릭 지원, 커스터마이징 가능

#### 사용법

```tsx
<InfiniteScrollSentry
    sentryRef={sentryRef}
    hasNextPage={hasNextPage}
    loading={loading}
    onManualLoad={loadMore}
    loadingText="로딩 중..."
    loadMoreText="더 보기"
/>
```

## 사용 예시

### 기본 사용법

```tsx
import { useCustomInfiniteScroll } from '@/hooks/useCustomInfiniteScroll';
import InfiniteScrollSentry from '@/components/common/InfiniteScrollSentry';

function MyComponent() {
    const { sentryRef } = useCustomInfiniteScroll({
        hasNextPage,
        loading,
        onLoadMore: loadMore,
        disabled: !!error,
    });

    return (
        <div>
            {/* 컨텐츠 목록 */}
            <InfiniteScrollSentry
                sentryRef={sentryRef}
                hasNextPage={hasNextPage}
                loading={loading}
                onManualLoad={loadMore}
            />
        </div>
    );
}
```

### 고급 설정

```tsx
const { sentryRef } = useCustomInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore: loadMore,
    rootMargin: '200px', // 더 일찍 트리거
    threshold: 0.5, // 더 민감하게 감지
});
```

## 장점

### 1. **안정성**

- 라이브러리 버그나 호환성 문제 없음
- 브라우저별 동작 차이 최소화
- 예측 가능한 동작

### 2. **성능**

- 불필요한 리렌더링 방지
- 메모리 누수 방지 (Observer 자동 정리)
- 최적화된 감지 로직

### 3. **유연성**

- 완전한 커스터마이징 가능
- 프로젝트 요구사항에 맞는 조정
- 디버깅 및 로깅 통합

### 4. **재사용성**

- 여러 컴포넌트에서 동일한 로직 사용
- 일관된 사용자 경험
- 유지보수 용이성

## 주의사항

### 1. **의존성 배열**

- `useEffect`의 의존성 배열에 `onLoadMore` 포함 필요
- 함수가 변경될 때 Observer 재설정

### 2. **메모리 관리**

- 컴포넌트 언마운트 시 Observer 자동 정리
- `useRef` 사용으로 불필요한 리렌더링 방지

### 3. **상태 관리**

- `loading` 상태로 중복 호출 방지
- `hasNextPage`로 무한 루프 방지

## 기존 라이브러리와의 차이점

| 항목         | react-infinite-scroll-hook | useCustomInfiniteScroll |
| ------------ | -------------------------- | ----------------------- |
| 의존성       | 외부 라이브러리            | 내장 구현               |
| 제어         | 제한적                     | 완전한 제어             |
| 안정성       | 라이브러리 품질에 의존     | 프로젝트 품질에 의존    |
| 커스터마이징 | 제한적                     | 무제한                  |
| 번들 크기    | 추가                       | 없음                    |

## 마이그레이션 가이드

### 기존 라이브러리에서 전환

```tsx
// 이전 (react-infinite-scroll-hook)
const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
});

// 현재 (useCustomInfiniteScroll)
const { sentryRef } = useCustomInfiniteScroll({
    hasNextPage,
    loading,
    onLoadMore: loadMore,
    disabled: !!error,
});
```

### UI 컴포넌트 교체

```tsx
// 이전
<div ref={sentryRef}>로딩...</div>

// 현재
<InfiniteScrollSentry
    sentryRef={sentryRef}
    hasNextPage={hasNextPage}
    loading={loading}
    onManualLoad={loadMore}
/>
```
