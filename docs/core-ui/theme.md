# 테마 메커니즘 (gray/white/black)

- 상태: `src/lib/jotai.ts`의 `themeModeState`에 `'gray' | 'white' | 'black'` 저장
- HTML 클래스: `app/RootLayoutProvider.tsx`에서 `<html class="[themeMode]">` 적용
- CSS 변수: `app/globals.css`에서 테마별로 `--bg-color`, `--text-color` 등에 매핑
- 하위 호환성: `html.light` → gray 매핑, `html.dark` → black 매핑
- Native 브릿지: `WebViewCommunicator`가 `{ darkMode: 'dark'|'light' }` 전송 (black=dark)
- MUI: `MuiThemeProvider`/`ChatThemeProvider`는 `themeMode === 'black'`일 때만 dark palette 사용

시스템 테마 자동 감지:

- **themeMode localStorage가 없을 때** (사용자가 테마를 선택한 적 없음):
    - 시스템 테마를 자동으로 감지하고 실시간으로 추적합니다.
    - `window.matchMedia('(prefers-color-scheme: dark)')`로 시스템 테마 확인
    - 시스템이 다크모드면 `black` 테마, 라이트모드면 `gray` 테마로 자동 설정
    - 운영체제에서 테마를 변경하면 앱의 테마도 즉시 변경됩니다.
- **themeMode localStorage가 있을 때** (사용자가 테마를 선택함):
    - 프로필 메뉴에서 테마를 선택하면 `themeMode`가 localStorage에 저장됩니다.
    - 이후로는 시스템 테마 변경과 무관하게 사용자의 선택을 항상 따릅니다.
    - 다음 방문 시에도 저장된 테마가 유지됩니다.
- 구현 위치:
    - `app/RootLayoutProvider.tsx`의 `initializeTheme` effect: 초기화
    - `app/RootLayoutProvider.tsx`의 `trackSystemThemeChanges` effect: 시스템 테마 실시간 추적
    - `src/components/layout/LoginedMenu.tsx`의 `applyTheme` 함수: 테마 저장 (atomWithStorage 자동 저장)

테마 전환 플로우:

1. 사용자가 프로필 메뉴에서 테마 항목 클릭
2. `src/components/layout/LoginedMenu.tsx`에서 테마 순환: gray → white → black → gray
3. `themeModeState` 업데이트 (localStorage에 자동 저장됨)
4. Root effect가 `<html>` 클래스 업데이트, CSS 변수가 즉시 색상 반영
5. WebViewCommunicator가 네이티브에 알림

다크모드 판별:

- `isDarkModeAtom`: `themeModeState === 'black'`으로 파생된 읽기 전용 atom
- 컴포넌트에서 다크모드 여부 확인 시 `isDarkModeAtom` 사용

테스트 참고사항:

- `localStorage.debug = 'theme'`로 설정하여 테마 로그 확인
- `<html>` 클래스 변경 및 CSS 변수 적용 검증
- black 테마에서 MUI palette 모드 전환 확인
- localStorage를 비우고 재접속하여 시스템 테마 자동 감지 확인
