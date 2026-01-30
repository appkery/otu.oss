## Chat Responsive Layout

### 개요

- 목표: 채팅이 열렸을 때 화면 폭에 따라 본문과 채팅을 나란히(>=680px) 배치하고, 그 미만에서는 기존 오버레이로 유지.

### 구현 요약

- 소스: `components/layout/MainLayout.tsx`
- 상태:
    - `chatOpenState` (채팅 열림 여부)
    - `drawerWidthState` (채팅 드로어 폭)
- 로직:
    - 루트 컨테이너(`#root`)에 `paddingRight`를 동적으로 적용
    - 조건: `chatOpen && window.innerWidth >= 680`
    - 값: `calc(env(safe-area-inset-right) + ${drawerWidth}px)`
    - 그렇지 않은 경우: 기존 `env(safe-area-inset-right)` 유지
- 드로어는 고정(fixed) 우측 배치이며 `hideBackdrop=true`로 배경과 겹치지 않도록 본문에 패딩을 부여해 시각적으로 나란히 보이게 함.

### 로깅

- 네임스페이스: `layout:chat`
- 활성화: 브라우저 콘솔에서 `localStorage.debug = 'layout:chat'`
- 로그 위치: `debug/layout.ts`

### 영향 범위 및 테스트

```text
[반드시]
- 데스크톱(>=680px): 채팅 열기 시 본문 우측이 드로어 폭만큼 줄어들어 컨텐츠가 겹치지 않는지 확인
- 모바일(<680px): 채팅 열기 시 기존 오버레이 동작 유지 확인
- 안전영역(iOS): 상/하/좌/우 safe-area 패딩이 유지되는지 확인

[가급적]
- 드로어 폭 조절(drawerWidth 변경 시): 우측 패딩이 동일 폭으로 반영되는지 확인
- 다크/라이트 모드에서 시각적 충돌(경계, 그림자) 없는지 확인

[참고]
- 로그: `localStorage.debug='layout:chat'` 후 채팅 열기/닫기, 리사이즈 시 로그 확인
- z-index 충돌: `Z_INDEX.CHAT_DRAWER`와 Top/Bottom/Modal 계층 충돌 없음 확인
```
