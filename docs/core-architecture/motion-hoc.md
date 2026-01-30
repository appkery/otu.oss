# Motion HOC 사용 가이드

## 개요

`withMotionEffects` HOC는 재사용 가능한 Motion 애니메이션 효과를 컴포넌트에 적용할 수 있게 해주는 Higher-Order Component입니다.

## 기본 사용법

### 1. 기본 HOC 사용

```tsx
import { withMotionEffects } from '@/components/common/withMotionEffects';

const MyComponent = ({ children }) => <div className="my-component">{children}</div>;

// Motion 효과 적용
const MotionMyComponent = withMotionEffects(MyComponent, {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
});
```

### 2. 사전 정의된 HOC 사용

```tsx
import {
    withButtonMotion,
    withCardMotion,
    withIconMotion,
    withFadeMotion,
} from '@/components/common/withMotionEffects';

// 버튼 효과
const MotionButton = withButtonMotion(MyButton);

// 카드 효과
const MotionCard = withCardMotion(MyCard);

// 아이콘 효과
const MotionIcon = withIconMotion(MyIcon);

// 페이드 효과
const MotionFadeDiv = withFadeMotion(MyDiv);
```

## 설정 옵션

### MotionEffectsConfig 인터페이스

```tsx
interface MotionEffectsConfig {
    hover?: {
        scale?: number;
        y?: number;
        x?: number;
        rotate?: number;
        opacity?: number;
    };
    tap?: {
        scale?: number;
        y?: number;
        x?: number;
        rotate?: number;
        opacity?: number;
    };
    initial?: {
        opacity?: number;
        y?: number;
        x?: number;
        scale?: number;
        rotate?: number;
    };
    animate?: {
        opacity?: number;
        y?: number;
        x?: number;
        scale?: number;
        rotate?: number;
    };
    transition?: {
        duration?: number;
        ease?: string;
        type?: string;
        stiffness?: number;
        damping?: number;
    };
    disableWhenDisabled?: boolean;
}
```

## 사전 정의된 프리셋

### motionPresets

- `button`: 기본 버튼 효과
- `strongTap`: 강한 탭 효과 (현재 ButtonBase에서 사용)
- `card`: 카드 호버 효과
- `icon`: 아이콘 회전/확대 효과
- `fade`: 페이드인 효과

## 실제 사용 예시

### 1. 커스텀 설정으로 컴포넌트 감싸기

```tsx
const MyListItem = ({ title, description }) => (
    <div className="list-item">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const MotionListItem = withMotionEffects(MyListItem, {
    hover: { x: 10, scale: 1.02 },
    tap: { scale: 0.98 },
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 },
});
```

### 2. Props를 통한 런타임 설정

```tsx
// 컴포넌트 사용 시 모션 설정 변경
<MotionComponent
    motionConfig={{
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    }}
    disabled={false}
>
    콘텐츠
</MotionComponent>
```

### 3. 비활성화 상태 처리

```tsx
// disabled prop이 true일 때 애니메이션 비활성화
<MotionButton disabled={isLoading}>{isLoading ? '로딩 중...' : '클릭하세요'}</MotionButton>
```

## 성능 고려사항

1. **메모이제이션**: 자주 변경되지 않는 컴포넌트에 적용
2. **조건부 적용**: 필요한 곳에만 선택적으로 적용
3. **프리셋 활용**: 사전 정의된 프리셋 우선 사용

## 현재 적용 현황

현재 프로젝트에서 Motion HOC는 필요에 따라 선택적으로 적용하고 있습니다. `ButtonBase` 컴포넌트는 HOC를 사용하지 않고 자체 상태 관리로 인터랙션을 처리합니다.

## 확장 가능성

새로운 애니메이션 프리셋이 필요한 경우 `motionPresets`에 추가하고 해당하는 편의 함수를 만들 수 있습니다.

```tsx
// 새로운 프리셋 추가
export const motionPresets = {
    // ... 기존 프리셋들
    slide: {
        hover: { x: 5 },
        initial: { x: -100 },
        animate: { x: 0 },
    },
};

// 편의 함수 추가
export const withSlideMotion = (component: ComponentType<any>) =>
    withMotionEffects(component, motionPresets.slide);
```
