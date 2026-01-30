## z-index 계층 메커니즘 (변경사항 범위)

이 문서는 현재 변경된 컴포넌트 범위에서 사용되는 z-index 계층 구조를 정의합니다. 전역 일괄 변경이 아닌, 이번 수정 대상 파일에 한정합니다.

### 원칙

- 하드코딩된 z-index 숫자를 금지하고 `contants.ts`의 `Z_INDEX` 상수를 사용합니다.
- 새로운 계층이 필요하면 `contants.ts`에 추가 후 사용합니다.
- MUI 기본 포털 계층(Modal/Drawer 등)은 기본값을 우선 사용하고, 충돌 시에만 상수를 부여합니다.

### 계층 정의 (`contants.ts`)

- CONFIRM_DIALOG = 1500: 확인 다이얼로그
- SNACKBAR = 1400: MUI Snackbar
- CHAT_DRAWER = 1240: 채팅 드로어(우측)
- CONTROL_FLOATING = 1230: 에디터 우측 하단 컨트롤 컨테이너
- PAGE_DETAIL_MODAL = 1220: 페이지 상세 모달
- BOTTOM_BAR_BASE = 1210: 기본 하단 바
- FOLDER_DETAIL_PAGE_LIST_MODAL = 1200: 폴더 상세 페이지 리스트 모달
- MODAL_BASE = 1200: 공통 SwipeableModal 기본값

### 적용 파일 및 매핑

- components/Chat/index.tsx → CHAT_DRAWER
- components/home2/shared/SwipeableModal.tsx → MODAL_BASE
- components/home2/shared/PageDetail.tsx → PAGE_DETAIL_MODAL
- components/common/scene/Control/index.tsx → CONTROL_FLOATING
- components/layout/bottom/index.tsx → BOTTOM_BAR_BASE
- components/common/ConfirmDialog/index.tsx → CONFIRM_DIALOG
- components/common/Snackbar/index.tsx → SNACKBAR

### 예외(현상 유지)

- MuiTooltip popper(10000), Chat Input Select 메뉴(99999)는 기존 의도(최상위 노출) 유지.
