# 모바일 Safe Area 처리 메커니즘

## 개요

React Native WebView 환경에서 Android 네비게이션 바와 iOS Safe Area를 웹앱에서 동적으로 처리하는 메커니즘입니다.

## 핵심 원리

### 1. 네이티브 측 (React Native)

- `useSafeAreaInsets()`로 디바이스의 safe area insets 측정
- Android의 경우 `insets.bottom`이 네비게이션 바 높이
- 측정된 값을 JavaScript로 웹뷰에 주입

### 2. 웹앱 측 (CSS/JavaScript)

- 주입된 JavaScript가 CSS 변수와 클래스를 동적으로 설정
- Android 네비게이션 바 유무에 따른 조건부 스타일링
- DOM 변경 감시를 통한 안정적인 클래스 적용

## 구현 세부사항

### CSS 변수 구조

```css
:root {
    --android-nav-height: [네비게이션바 높이]px;
    --native-bottom-inset: [하단 inset]px;
    --native-top-inset: [상단 inset]px;
    --native-left-inset: [좌측 inset]px;
    --native-right-inset: [우측 inset]px;
}
```

### 조건부 스타일링

```css
/* Android 네비게이션 바가 있는 경우 */
.has-android-nav .native-bottom-inset {
    padding-bottom: var(--android-nav-height);
}

/* Android 네비게이션 바가 없는 경우 */
.no-android-nav .native-bottom-inset {
    padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}
```

### JavaScript 주입 로직

1. **즉시 적용**: DOM이 준비된 경우 바로 스타일 적용
2. **지연 적용**: `readystatechange` 이벤트로 DOM 준비 대기
3. **재적용**: `DOMContentLoaded`, `load` 이벤트에서 재적용
4. **감시**: `MutationObserver`로 클래스 변경 감시 (3초간)

## 사용법

### 웹 컴포넌트에서 사용

```tsx
// 하단 네비게이션 컴포넌트
<motion.div className="native-bottom-inset">{/* 네비게이션 내용 */}</motion.div>
```

### CSS 변수 직접 사용

```css
.my-component {
    padding-bottom: var(--native-bottom-inset);
    margin-top: var(--native-top-inset);
}
```

## 장점

1. **동적 처리**: 디바이스별 safe area를 실시간으로 반영
2. **안정성**: DOM 변경 감시로 클래스 덮어쓰기 문제 해결
3. **유연성**: CSS 변수로 다양한 컴포넌트에서 재사용 가능
4. **성능**: 필요한 경우에만 스타일 재적용

## 주의사항

1. **타이밍**: `injectedJavaScriptBeforeContentLoaded`는 DOM 로딩 전 실행
2. **클래스 충돌**: React 하이드레이션 시 클래스가 덮어써질 수 있음
3. **성능**: MutationObserver는 3초 후 자동 해제로 성능 최적화

## 관련 파일

- **네이티브**: `app/components/AppWebView.tsx`
- **웹앱**: `components/layout/bottom/index.tsx`
- **의존성**: `react-native-safe-area-context`
