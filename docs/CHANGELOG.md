# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.5.201](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.200...v0.5.201) (2025-09-22)

### Bug Fixes

- handleBackClick 함수 추가 및 welcome 페이지에서 뒤로가기 버튼 표시 조건 수정 ([cd31223](https://github.com/opentutorials-org/otu.ai.web/commit/cd31223badc53f2abbae42ea85c55ef4e4fc8609))
- welcome 페이지 뒤로가기 버튼 표시 문제 해결 ([20465d7](https://github.com/opentutorials-org/otu.ai.web/commit/20465d793329f4dcec16c4cfa0ccf980f2adecdd))

### [0.5.200](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.199...v0.5.200) (2025-09-22)

### Bug Fixes

- main 브랜치가 자동으로 디플로이 되도록 처리했기 때문에 npx vercel --yes --prod 는 제거 ([a640789](https://github.com/opentutorials-org/otu.ai.web/commit/a640789a1fa7f74e6f9ffa4520f43211d3310b61))

### [0.5.199](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.198...v0.5.199) (2025-09-21)

### Features

- super user 등록 및 알람 등록 시드 생성 ([09d534d](https://github.com/opentutorials-org/otu.ai.web/commit/09d534d0247fc9caebeda3ff8049dd633d13da65))
- 로그아웃 후 리디렉션 타이밍 조정 ([2d79d06](https://github.com/opentutorials-org/otu.ai.web/commit/2d79d06986d39e5d14ab18680ab3bdbce7e797b7))

### Bug Fixes

- **assetlinks:** sha256_cert_fingerprints 에 복수의 값을 추가할 수 있게 개선 ([f65055d](https://github.com/opentutorials-org/otu.ai.web/commit/f65055df126b4f8725d7b5f269e68b2b9fa4c1e3))
- **Login:** await 누락으로 인한 로그인 불능 해결 ([ec26339](https://github.com/opentutorials-org/otu.ai.web/commit/ec26339c9fc391ad2308fa2ab06a3bf60471c2bd))
- pageDetail에서 y 스크롤은 항상 보이게 처리해서 화면이 덜컹거리지 않게 처리함. ([699c526](https://github.com/opentutorials-org/otu.ai.web/commit/699c526a3d53add8c280edfc79f2a67a8fa0afa7))

### [0.5.198](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.197...v0.5.198) (2025-09-20)

### Features

- Add initial db.json file with sample posts, comments, and profile data ([c42ff05](https://github.com/opentutorials-org/otu.ai.web/commit/c42ff05e7a95746a24999aadacecf2fe7b140593))
- **bottom:** 폴더 디테일 페이지 리스트에서 다중 선택을 했을 때 선택 오퍼레이션 메뉴가 나타나도록 처리 ([adec7f2](https://github.com/opentutorials-org/otu.ai.web/commit/adec7f2ebe19854f8c55de95b015c68353039d55))
- Container/Presentation 패턴 적용 및 코드 정리 ([aadabab](https://github.com/opentutorials-org/otu.ai.web/commit/aadabab249553238c8031734cb277bae980e9686))
- **db:** process_alarms_atomically에서 랜덤 시드 제거 및 충돌 허용 정책 적용 ([e6bd5bf](https://github.com/opentutorials-org/otu.ai.web/commit/e6bd5bf7528e451ce3d7e803e8281849e424275f))
- **EditorContent:** 페이지 삭제 후 리디렉션 되도록 처리 ([5a61712](https://github.com/opentutorials-org/otu.ai.web/commit/5a6171253746b547be4b2210b40c4787e1fb8a77))
- **EditorContent:** 폴더에서 페이지를 만들면 해당 폴더 소속으로 지정 되도록 개선 ([3f72df0](https://github.com/opentutorials-org/otu.ai.web/commit/3f72df05a306d9a0ae77b1401a756c2e2eff7fc7))
- **FolderDetailPageList:** 폴더 디테일 페이지 리스트 정렬 시 키가 일치하지 않아서 정렬이 안되는 문제 처리 ([4d73642](https://github.com/opentutorials-org/otu.ai.web/commit/4d7364214aef95c176c52f4e6cf79befc002aeda))
- **FolderDetail:** 폴더 디테일 페이지 리스트 내에서 폴더 삭제 및 폴더명 수정 기능 추가 ([0789c97](https://github.com/opentutorials-org/otu.ai.web/commit/0789c97475f08e33962f9811e9712b1188392ddc))
- **FolderGrid:** 폴더 추가 버튼에 (새폴더 레이블 추가) ([4ab3e42](https://github.com/opentutorials-org/otu.ai.web/commit/4ab3e42111a39a7b4dcb0b7f7b4a7cefd9f86f39))
- HOC 및 useNavigation 훅 통합으로 네비게이션 개선 ([94d0fd9](https://github.com/opentutorials-org/otu.ai.web/commit/94d0fd9ac8acd6ea98ab777a60b7955a00e01892))
- home2 라우트 통합 및 레거시 코드 제거 ([4cd3de1](https://github.com/opentutorials-org/otu.ai.web/commit/4cd3de1e44f2d0f18e6f63e99e67dac769180c0a))
- home2 라우팅 구조 및 섹션 컴포넌트 스켈레톤 추가 ([ebe442c](https://github.com/opentutorials-org/otu.ai.web/commit/ebe442caefcfb4adf397a70d095f95a715559b5b))
- home2 라우팅 인프라 구축 완료 및 기본 구조 설정 ([93e867c](https://github.com/opentutorials-org/otu.ai.web/commit/93e867cc9f7e99ec442132c05488b4840661f0f3))
- home2 리팩토링 및 다이얼로그 전환 작업 목록 업데이트 ([b3133cf](https://github.com/opentutorials-org/otu.ai.web/commit/b3133cfa19e4d1433b5e3467d8f32fc3087d7058))
- home2 리팩토링 및 다이얼로그 전환 작업 목록 업데이트 ([5caed8f](https://github.com/opentutorials-org/otu.ai.web/commit/5caed8ff0d5ba69b89b7e158f67dc7749cf3d88c))
- MUI SwipeableDrawer 및 HOC 패턴 구현 ([00d5fc8](https://github.com/opentutorials-org/otu.ai.web/commit/00d5fc807892e032d8cfc89244023e6bb456dab0))
- mui 컴포넌트의 모든 r값을 3px로 통일 함 ([0b586ee](https://github.com/opentutorials-org/otu.ai.web/commit/0b586eeee3503457e1e42e36509dcb0fb1ca6b4f))
- Navigation Utils 마이그레이션 및 헤더 영역 통합 ([7aa5088](https://github.com/opentutorials-org/otu.ai.web/commit/7aa5088e2a5571717c42844b654c04ae1c9165e5))
- **navigation:** 글쓰기 이동시 rrd를 이용하도록 변경 ([6e544ee](https://github.com/opentutorials-org/otu.ai.web/commit/6e544ee343586707e1d4577683404d9b1e6e85ae))
- pageDetail 이 닫힐 때 즉시 저장하도록 개선 ([51a0f13](https://github.com/opentutorials-org/otu.ai.web/commit/51a0f13692bc811878ef73c05fe976832c5c2390))
- pageDetail 컴포넌트 포팅 및 레이아웃 개선 ([61617dd](https://github.com/opentutorials-org/otu.ai.web/commit/61617dd88de91c86bf75d760366f22e0e571d06b))
- PageDetail 컴포넌트에서 CreateUpdate 통합 및 Control 기능 추가 ([359f41e](https://github.com/opentutorials-org/otu.ai.web/commit/359f41ec8833b574d0487220079b73e8c1197a9c))
- Phase 2 섹션 컴포넌트 스켈레톤 생성 완료 ([6ed2eef](https://github.com/opentutorials-org/otu.ai.web/commit/6ed2eef192fe1495363f99055173ddc472db4715))
- react-router-dom 및 관련 타입 패키지 추가 ([f236892](https://github.com/opentutorials-org/otu.ai.web/commit/f2368925e2a5b38ef8ec87159b1bd890b82f2b5c))
- RRD 도입으로 라우팅 및 성능 최적화 문서화 ([3430cee](https://github.com/opentutorials-org/otu.ai.web/commit/3430cee4c2904c91fefb44c45c5724e3ad76f339))
- RRD 도입으로 라우팅 및 성능 최적화 문서화 ([331c44e](https://github.com/opentutorials-org/otu.ai.web/commit/331c44ea61895458c59ce363647a8a8478377be9))
- **Search:** 검색 기능을 React Router Dom 방식으로 변경 ([83fc64b](https://github.com/opentutorials-org/otu.ai.web/commit/83fc64b0668b13149e4a167e742f1387a6372bc5))
- **selection:** RRD 기반으로 URL 상태 전환 및 레거시 의존 제거 ([576428e](https://github.com/opentutorials-org/otu.ai.web/commit/576428e2a671c15100f956ea5c8805bfcbd3268c))
- SwipeableModal 개선 및 최적화 ([eb8f5fe](https://github.com/opentutorials-org/otu.ai.web/commit/eb8f5fe638adeb9f22292126acad5de883c91cd2))
- SwipeableModal 및 Top 컴포넌트 개선 ([43c53d6](https://github.com/opentutorials-org/otu.ai.web/commit/43c53d656e98b5a696eeebd2183c5137404a3674))
- 구독 페이지를 전역 모달 방식으로 변경 ([2b94ad5](https://github.com/opentutorials-org/otu.ai.web/commit/2b94ad517be016d892eb8bf57bdffee916262aa8))
- 구독 화면을 RRD 독립 섹션으로 분리하고 프로필 메뉴 진입 경로 수정 ([1ef1f3d](https://github.com/opentutorials-org/otu.ai.web/commit/1ef1f3d60f2edc63793fd479e0c8cc12299e56fd))
- 라우트 기반 다이얼로그 처리 및 애니메이션 통합 완료 ([2816708](https://github.com/opentutorials-org/otu.ai.web/commit/2816708dfe99f54b2732997695c42559de9608f4))
- 레이아웃 구조 통일 및 TopControls 개선 ([7f2ef21](https://github.com/opentutorials-org/otu.ai.web/commit/7f2ef21f8441893e563eac2054a990daa0fb6e23))
- 리마인더 섹션 컴포넌트 개선 및 기능 추가 ([ef1db0f](https://github.com/opentutorials-org/otu.ai.web/commit/ef1db0f0dc385c9d912bbb0f0fe4157e9b905964))
- 무한 스크롤 기능 구현 및 로깅 시스템 개선 ([b4b3737](https://github.com/opentutorials-org/otu.ai.web/commit/b4b3737082fb6812b02c128069b88d848f6ce01b))
- 미들웨어 리디렉션 경로 변경 및 홈 레이아웃 개선 ([3516584](https://github.com/opentutorials-org/otu.ai.web/commit/3516584e0b1e454a876e953724f1631c29b721fd))
- 미들웨어 리디렉션 로직 개선 및 todo.md 업데이트 ([f5ca311](https://github.com/opentutorials-org/otu.ai.web/commit/f5ca3113dc2f285c485bcd6783f99ec116459d0c))
- 반응형 레이아웃 개선 및 z-index 상수화 ([2a83585](https://github.com/opentutorials-org/otu.ai.web/commit/2a83585046a6ab4acafaea5a39bc296d8139a6ce))
- 섹션별 포팅 작업 및 상태 관리 개선 ([18c9988](https://github.com/opentutorials-org/otu.ai.web/commit/18c9988ec8cfffc6165554aed1a65f1e357d358f))
- 채팅 입력창 Select 드롭다운 메뉴 위치 개선 ([e1767b5](https://github.com/opentutorials-org/otu.ai.web/commit/e1767b51f43036fa4735d03609011d68daf2bedb))
- 페이지 생성 및 편집 기능 추가 ([21abbe5](https://github.com/opentutorials-org/otu.ai.web/commit/21abbe52ad965997d0d26e549c11225d5664d6d7))
- 페이지 섹션 및 라우팅 구조 개선 ([5ca5191](https://github.com/opentutorials-org/otu.ai.web/commit/5ca519146dc29334b35eb2b69315276b11dcd7b4))
- 폴더 상세 모달 구현 및 구조 변경 ([df5bcea](https://github.com/opentutorials-org/otu.ai.web/commit/df5bcea1983093323148a5eee7031e889e5e896b))
- 폴더 섹션 컴포넌트 개선 및 기능 추가 ([6e1c36d](https://github.com/opentutorials-org/otu.ai.web/commit/6e1c36db49b1ff147a23f1a6753174fcb53d7455))
- 폴더, 페이지, 리마인더 섹션의 라우팅 구조 및 컴포넌트 구성 업데이트 ([4cb7644](https://github.com/opentutorials-org/otu.ai.web/commit/4cb7644015308ecfaa94b34ec35f949c6b5837a7))
- 홈 상단 컨트롤 통합 및 뷰 모드 토글 컴포넌트 추가 ([8781d02](https://github.com/opentutorials-org/otu.ai.web/commit/8781d0222c7a735a19b020eda4f09136d636ec35))

### Bug Fixes

- add margin-top to SwipeableModal for safe area insets ([c19424e](https://github.com/opentutorials-org/otu.ai.web/commit/c19424e28d2fd684d1cd0149f2c9d268972bf373))
- adjust margin and padding for safe area insets in SwipeableModal and MainLayout ([2037bb7](https://github.com/opentutorials-org/otu.ai.web/commit/2037bb7a8f78c0c40ed2219542bc8be3d2c9c5f3))
- **ChatHOC:** 채팅 창 툴팁이 가려지는 문제 해결 ([ce1fe83](https://github.com/opentutorials-org/otu.ai.web/commit/ce1fe83db32d9ad97650f5e1352a9cb51ad71133))
- createUpdate와 작별 ([5231c4c](https://github.com/opentutorials-org/otu.ai.web/commit/5231c4c4174c928727438abc3ae58d94d7b7b75a))
- dialog의 상하 여백에 --native-safety-inset 적용 ([927f479](https://github.com/opentutorials-org/otu.ai.web/commit/927f4792ee99c967c88e93b97d7830be316fbfa1))
- disableEnforceFocus: true 를 지정해서 채팅에서 입력이 안되는 문제 해결, disableAutoFocus: false를 지정해서 ESC로 다이얼로그를 닫을 수 있도록 처리 ([4524c66](https://github.com/opentutorials-org/otu.ai.web/commit/4524c660b18d00b340971580dc4da21f980dd09c))
- **FolderDetailPageList:** 폴더 상세 페이지 리스트의 폴더 아이콘 텍스트 색상 제거 ([833a042](https://github.com/opentutorials-org/otu.ai.web/commit/833a042c55e45b6683e8a1f12ed563c67c3d00e4))
- **FolderDetail:** 폴더명 수정 텍스트 필드 크기 조정 ([754ec45](https://github.com/opentutorials-org/otu.ai.web/commit/754ec450deb13fcff79854519fe5025f90659cf1))
- in app에서 작동할 때 native에서 입력해준 값을 기준으로 하단 메뉴의 safe-inset-bottom을 설정하도록 개선 ([0dd1804](https://github.com/opentutorials-org/otu.ai.web/commit/0dd1804815102e0645673662832979a1c784941d))
- paddingBottom: 'var(--native-bottom-inset, env(safe-area-inset-bottom))' 를 적용해서 native에서 전달한 하단 버튼의 위치를 정확하게 처리함. ([8da6b10](https://github.com/opentutorials-org/otu.ai.web/commit/8da6b10b910094ed75776d324e892643ccd65e84))
- pageDetail을 닫았을 떄 목록이 다시 랜더링되는 문제 해결 ([67dcac6](https://github.com/opentutorials-org/otu.ai.web/commit/67dcac63210d3ccadf0d62ffef81a8046a107c12))
- path를 바탕으로 검색 기능이 작동하도록 처리 ([bbe563c](https://github.com/opentutorials-org/otu.ai.web/commit/bbe563c3f2eafa2d732976122cdf1541c64ce822))
- push 에서 중복이 발생했을 때는 throw를 건너뛰고 업데이트로직을 실행함. ([ed461d0](https://github.com/opentutorials-org/otu.ai.web/commit/ed461d04830b60ccef45963740e1d456d024b7a7))
- redirection_to 주소 오류 수정 ([44f38bc](https://github.com/opentutorials-org/otu.ai.web/commit/44f38bcbd38f5953594b2b3d57f4677fbcfe70e9))
- **RelatedItem:** 추가 스크롤 초기화 기능으로 사용자 경험 개선 ([632679f](https://github.com/opentutorials-org/otu.ai.web/commit/632679f1c13fa1be50586836371baaf637279574))
- rrd로 전환을 위한 todo 작성 ([df1967b](https://github.com/opentutorials-org/otu.ai.web/commit/df1967ba71d44544941c7918fa702d15ba2657be))
- rrd로 전환을 위한 todo 작성 ([672c9bd](https://github.com/opentutorials-org/otu.ai.web/commit/672c9bd8fec0aa77c83fece82b6d7eeedb8ff3dc))
- SideArticleLayout를 BrowserRouter 하위로 이동해서 SideArticleLayout안(LoginedMenu)에서도 RRD의 navigate API를 사용 가능하게 함. ([14da2f1](https://github.com/opentutorials-org/otu.ai.web/commit/14da2f185b2187e25e09f7173ea70595180660e6))
- SwipeableModal 닫기 버튼에 safety inset 적용 ([5d7e990](https://github.com/opentutorials-org/otu.ai.web/commit/5d7e990f140c03e62d99a87b070a30c20a00be39))
- SwipeableModal 스타일 수정 및 닫기 버튼 위치 조정 ([91766c2](https://github.com/opentutorials-org/otu.ai.web/commit/91766c2c04b064af1c8dc6ad76d337e6b1252eaf))
- **SwipeableModal:** swipeableModal 의 배경색에 그라데이션 제거 ([2c39d03](https://github.com/opentutorials-org/otu.ai.web/commit/2c39d032993110a9a02dbb46599cfc85c368767c))
- SwipeableModal의 닫기 버튼을 680px를 기준으로 적정 위치에 존재하게 처리 ([d4942b4](https://github.com/opentutorials-org/otu.ai.web/commit/d4942b47db2976c4664224654c989692da74eed2))
- useDeepLinkWebview를 rrd 의 범위 안에서 동작하도록 위치 이동 외 ([1407a6d](https://github.com/opentutorials-org/otu.ai.web/commit/1407a6df309593d8dcd8c6b9703412302d6e7eea))
- 각종 스타일 조정 ([8c21147](https://github.com/opentutorials-org/otu.ai.web/commit/8c21147ad0040f865f15f1cac69c7ffb993bedc9))
- 개인정보보호, 서비스 약관 모바일 여백 조정 ([265106c](https://github.com/opentutorials-org/otu.ai.web/commit/265106c323d4173650f9cbc3f16813275105c952))
- 검색어가 없을 때 검색 결과를 0으로 처리 ([25a3ea9](https://github.com/opentutorials-org/otu.ai.web/commit/25a3ea99db02755fa4843a1b6d9344ad6cee2da3))
- 검색조건이 변경되었을 때 기존에 로딩된 항목을 초기화 하도록 key 이용 ([47ab22f](https://github.com/opentutorials-org/otu.ai.web/commit/47ab22fe0d6c5b58632e23aa1c9d2f1747be08c2))
- 관련글 링크 오동작 수리 ([ff521e8](https://github.com/opentutorials-org/otu.ai.web/commit/ff521e87088339ece2d0c1d152765426db8f2947))
- 관련글에서 페이지 이동되지 않는 문제 해결 ([7a23e0c](https://github.com/opentutorials-org/otu.ai.web/commit/7a23e0c42cb293ec13ccf5a49a5d1ca3822e9807))
- 구독상태 체크시 즉각 체크 중임을 알리도록 개선 ([69d11d4](https://github.com/opentutorials-org/otu.ai.web/commit/69d11d4a31ec03436fbc4b4f5728454b875f7e2f))
- 글쓰기 여백 조정 ([6853856](https://github.com/opentutorials-org/otu.ai.web/commit/6853856e8055d30b87d4c6eb4361cb07662fd2d0))
- 네이티브 로그인 브릿지 후 동기화 미시작 문제 수정 ([75daff8](https://github.com/opentutorials-org/otu.ai.web/commit/75daff8141f251ec1ac539420cb24549ce2352cc))
- 로고 위치 미세 조정 ([9dde2bb](https://github.com/opentutorials-org/otu.ai.web/commit/9dde2bb65336572132207a4de925351809c4f939))
- 로그인 상태에서 존재하지 않는 페이지로 이동하면 /home/page로 이동 ([018ddc0](https://github.com/opentutorials-org/otu.ai.web/commit/018ddc0802ddb0aacc22e618568d189acaf293c3))
- 모바일에서 인증을 위해서 login-callback 으로 접근했을 때 이를 otuai:login-callback#accessToken, refreshToken으로 리디렉션 처리 함 ([dbbde50](https://github.com/opentutorials-org/otu.ai.web/commit/dbbde50f10a4cf19bc2d2fd7f215376e34aab219))
- 슈퍼유저가 아니면 ContentTypeSwitcher UI가 아예 노출되지 않도록 처리 ([6a29721](https://github.com/opentutorials-org/otu.ai.web/commit/6a297218a1e48d6574b9048f31f18512a64073e8))
- 알림 on/off 후 리스트에 반영되지 않는 문제 해결 ([c78c17f](https://github.com/opentutorials-org/otu.ai.web/commit/c78c17f75c99a4219ff8f7c9e62e82588f79d7ae))
- 업로드 후 네비게이션 및 캡션 저장 문제 해결 ([43fe399](https://github.com/opentutorials-org/otu.ai.web/commit/43fe3995faa1c7bca4adb161a48240f4f04dd01c))
- 엑세스 토큰을 직접 추출하는 방식은 보안상 불리하기 때문에 code를 넘기는 방식으로 변경 ([9b8db34](https://github.com/opentutorials-org/otu.ai.web/commit/9b8db34fd99802f454631966890a9980e878226f))
- 인증 과정에서 refreshToken을 이용해서 재인증 후 리디렉션 ([a6fa736](https://github.com/opentutorials-org/otu.ai.web/commit/a6fa736ef4726df650b079444382e6bb6ce5e82c))
- 채팅창의 하단 패팅 개선 ([345ca44](https://github.com/opentutorials-org/otu.ai.web/commit/345ca446b60db9a428223d619376d4a70437a869))
- 컨텐트 타입 스위쳐 깜박임 문제 해결 ([3b32354](https://github.com/opentutorials-org/otu.ai.web/commit/3b3235449fa02ff0758cd77df31e079475198d82))
- 페이지 리스트의 pageSize를 10 -> 50으로 상향 ([586a83d](https://github.com/opentutorials-org/otu.ai.web/commit/586a83d7e997f3ff84c6e4039d1814c1c11ada54))
- 페이지 버튼들 에니메이션 제거 ([d252f1f](https://github.com/opentutorials-org/otu.ai.web/commit/d252f1fa0241eba0f0ef6cb4c8530b0f427f8a88))
- 페이지 전환 시 모달이 열리지 않는 문제 수정 ([3260315](https://github.com/opentutorials-org/otu.ai.web/commit/3260315d8f8dcdf8ca04784fa09da0b576ecd486))
- 하단에 여백을 추가해서 하단 메뉴가 가리지 않도록 임시 처방 ([074e174](https://github.com/opentutorials-org/otu.ai.web/commit/074e1748a3a93f801aaff19ffa4d85fe4538cce1))

### [0.5.197](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.196...v0.5.197) (2025-08-24)

### Features

- Add spacing below similar notes list ([535c12f](https://github.com/opentutorials-org/otu.ai.web/commit/535c12f813adde1aeb1c84b5ae66706a9a2f68c4))
- Linkify URLs in page titles ([3a92b9f](https://github.com/opentutorials-org/otu.ai.web/commit/3a92b9f375ea77cd9b0f4e99381bb4ec994efcb7))
- 테스트 영역의 커서 아이콘을 텍스트로 변경 외 1 ([548094f](https://github.com/opentutorials-org/otu.ai.web/commit/548094fdd36e01216d3dce2d2491a878fc152b9b))

### Bug Fixes

- 제목의 텍스트를 breal-all로 줄바꿈 처리 외 1 ([eff0e0d](https://github.com/opentutorials-org/otu.ai.web/commit/eff0e0dd954f7e63ba7d0f4bdcdb9f65476cf997))

### [0.5.196](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.195...v0.5.196) (2025-08-22)

### [0.5.195](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.194...v0.5.195) (2025-08-22)

### Features

- 다중 선택 모드 디자인 변경 ([97e4f08](https://github.com/opentutorials-org/otu.ai.web/commit/97e4f08230e79b1890265f91e9202e78e914b40f))
- 다중 선택 모드에서 클릭 이벤트 처리 추가 ([4e055c4](https://github.com/opentutorials-org/otu.ai.web/commit/4e055c46021db76057b80aa4f49f16edc1dfdf3f))

### [0.5.194](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.193...v0.5.194) (2025-08-22)

### Features

- 이메일 로그인 기능 활성화 여부를 환경변수로 제어 ([0d307d1](https://github.com/opentutorials-org/otu.ai.web/commit/0d307d16de1f7c68c178cfb278e62e6eb9c65209))
- 최초 동기화 시 max(updated_at) 추적 및 최종 타임스탬프 결정 로직 추가 ([b842cb4](https://github.com/opentutorials-org/otu.ai.web/commit/b842cb40f028a7a4658f4a5885f64cf164335966))
- 페이지, 폴더, 리마인더 리스트 진입시 싱크 되도록 처리 ([882f8f5](https://github.com/opentutorials-org/otu.ai.web/commit/882f8f5b962d08dec7f772ba2e6503048bf6da19))

### Bug Fixes

- 초기 동기화 시 리마인더 데이터의 날짜 처리 로직 개선 ([a2adebc](https://github.com/opentutorials-org/otu.ai.web/commit/a2adebc48fd1a12082b936c4b09865ede35831e1))
- 최초 동기화 시 최종 타임스탬프 결정 로직에 1ms 오프셋 추가 ([b808853](https://github.com/opentutorials-org/otu.ai.web/commit/b80885322135f59e2ab095e553a8fc055a2bbaa1))
- 최초 동기화 이후에 증분 동기화 시 동기화가 끝났음에도 일부 데이터를 다시 가져오는 문제 ([55df917](https://github.com/opentutorials-org/otu.ai.web/commit/55df917958168b59c5c650046e54de5a86ecea40))

### [0.5.193](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.192...v0.5.193) (2025-08-21)

### Features

- FullscreenModal을 열었을 때 피크 부조 문제처리 ([3d8c783](https://github.com/opentutorials-org/otu.ai.web/commit/3d8c783f746c92d75fad9b83624eb72d1dcb89aa))

### [0.5.192](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.191...v0.5.192) (2025-08-21)

### [0.5.191](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.190...v0.5.191) (2025-08-20)

### Features

- 리마인더 페이지에 이미지 URL 추가 및 표시 개선 ([e0a00cb](https://github.com/opentutorials-org/otu.ai.web/commit/e0a00cb20bddcfb04369a4a451bf494d36186d7b))

### [0.5.190](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.189...v0.5.190) (2025-08-20)

### [0.5.189](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.188...v0.5.189) (2025-08-20)

### [0.5.188](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.187...v0.5.188) (2025-08-20)

### Features

- 알람 리스트에서 페이지를 열고 닫았을 때 스크롤 상태가 사라지는 문제 해결 ([837d812](https://github.com/opentutorials-org/otu.ai.web/commit/837d81254dfaa3d473010e1d594dc888d6d4b0f9))

### Bug Fixes

- 폴더 디테일에서 페이지를 열었을 때 빠른 메모 사라지지 않게 처리 ([94092e4](https://github.com/opentutorials-org/otu.ai.web/commit/94092e4d12364a5b2385caf50a30bc0f7731228d))
- 폴더 리스트에서 폴더 디테일을 열고 닫았을 때 스크롤 초기화 문제 해결 ([52c09cb](https://github.com/opentutorials-org/otu.ai.web/commit/52c09cbc5063e0babced4f22d720f452c640f07b))

### [0.5.187](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.186...v0.5.187) (2025-08-18)

### [0.5.186](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.185...v0.5.186) (2025-08-18)

### Features

- 알람 처리 함수에 오류 이유 반환 기능 추가 ([133c438](https://github.com/opentutorials-org/otu.ai.web/commit/133c438e2dc7f2fac022d3d76fd19c71df81eda3))

### Bug Fixes

- reminder 데이터베이스 실패 시 원자적으로 처리하기 위한 기본 코드 생성 ([4972cc5](https://github.com/opentutorials-org/otu.ai.web/commit/4972cc505a290e16ce676381c6080e9e184128b4))
- supabase db push 명령어 수정 ([737c19d](https://github.com/opentutorials-org/otu.ai.web/commit/737c19dff36bc865934b3ac3625c93467e11aa7a))

### [0.5.185](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.184...v0.5.185) (2025-08-18)

### Features

- **tests:** 상단 주석을 이용해서 테스트 파일의 실행환경을 구분할 수 있도록 변경 ([dc8fc54](https://github.com/opentutorials-org/otu.ai.web/commit/dc8fc54539250d8c0fc44dcd83822036d20c2edf))
- 알람 간격 256일 상한 제한 및 관련 문서 업데이트 ([5632381](https://github.com/opentutorials-org/otu.ai.web/commit/56323817f09025282304f6b9d0656bb36f51494c))
- 알람 과거 시간 보정 로직 수정 및 테스트 케이스 업데이트 ([9f7d507](https://github.com/opentutorials-org/otu.ai.web/commit/9f7d507088f9e691914b1a41fb1e0321689fbf4e))

### Bug Fixes

- 데이터베이스 싱크 오류 수정 및 db dump ([fec898f](https://github.com/opentutorials-org/otu.ai.web/commit/fec898fcd93c48a05c8b80bdb6fc221c29297f9e))
- 리마인더 티커는 next_alarm_time이 null이라도 조회되도록 변경 ([3bdedf4](https://github.com/opentutorials-org/otu.ai.web/commit/3bdedf4346dbfdb08b173ce6691def740dc788ed))

### [0.5.184](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.183...v0.5.184) (2025-08-16)

### [0.5.183](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.182...v0.5.183) (2025-08-16)

### Features

- MUI Lab 추가 및 CircleIcon 컴포넌트 스타일 개선 ([14014dc](https://github.com/opentutorials-org/otu.ai.web/commit/14014dc153be8c29ae3f0876d45303cb642f175d))
- 다중 선택 기능 추가 및 알림 끄기 기능 구현 ([122c954](https://github.com/opentutorials-org/otu.ai.web/commit/122c954523b1088a88991cdda4f6469c2962a759))
- 리마인더 기능을 위한 타입 정의 및 상태 관리 추가 ([c1e7cfe](https://github.com/opentutorials-org/otu.ai.web/commit/c1e7cfecb39f95fa7b4986554ab5dbb01e705ac2))
- 리마인더 라우터 처리 완성 및 URL 동기화 구현 ([da82265](https://github.com/opentutorials-org/otu.ai.web/commit/da8226558293ecae5f49c13e778219870ced0bed))
- 리마인더 리스트 훅 및 페이지네이션 기능 추가 ([e67803b](https://github.com/opentutorials-org/otu.ai.web/commit/e67803b7ffc305613655633c478a678b792a3c3c))
- 리마인더 모드 및 관련 기능 추가 ([3d14f40](https://github.com/opentutorials-org/otu.ai.web/commit/3d14f403ec0323dff646be0e563c846192153f2a))
- 리마인더 모드에서 페이지 상세보기 후 복귀 기능 구현 ([12ed824](https://github.com/opentutorials-org/otu.ai.web/commit/12ed8247c8e718ec00b486bd64e6ba27f23801c4))
- 리마인더 티커 컴포넌트 및 훅 구현 ([6742e21](https://github.com/opentutorials-org/otu.ai.web/commit/6742e219ff69fbba030d9b2daa417652536a5968))
- 리마인더 페이지 리스트 컴포넌트 생성 및 스타일 추가 ([e465297](https://github.com/opentutorials-org/otu.ai.web/commit/e465297eb09e7fa0cd714199e62a3b2e4d4738bf))
- 리마인더 페이지 리스트에 무한 스크롤 기능 추가 ([504aed6](https://github.com/opentutorials-org/otu.ai.web/commit/504aed66c7b21108e04c953e6f120111c740d84a))
- 메커니즘 문서 추가 및 기존 문서 삭제 ([3e260fd](https://github.com/opentutorials-org/otu.ai.web/commit/3e260fd98d1de1ee35ce07b4c72e992984b6e563))
- 사용자 접속시 RevenueCat 동기화 로직 임시 비활성화 ([1aff2df](https://github.com/opentutorials-org/otu.ai.web/commit/1aff2dfdc2eaa57c3aecec4ac458b256622f0b0f))
- 알람 상태 확인 기능 추가 및 UI 개선 ([a120abf](https://github.com/opentutorials-org/otu.ai.web/commit/a120abf54e9ae57c99559a8c70834b4b1f3afe75))
- 폴더가 없을 때 폴더 생성 후 자동 지정하도록 폴더 버튼 동작 개선 ([9694357](https://github.com/opentutorials-org/otu.ai.web/commit/9694357d1191f24ea03b6a339c25e4c167e72b70))

### Bug Fixes

- **consent:** MUI DialogTitle/DialogContent를 HTML 요소로 대체하여 빌드 오류 해결 ([742b8d2](https://github.com/opentutorials-org/otu.ai.web/commit/742b8d27c53cc21ea34b27979d1b6988cb5d141e))
- ReminderPageList UI 개선 및 상태 표시 업데이트 ([8e16265](https://github.com/opentutorials-org/otu.ai.web/commit/8e16265f3bcd2ef0b9b1e6c066457e10afb7aeeb))
- ReminderPageList에서 TimelineItem의 key 속성 개선 ([332dbb3](https://github.com/opentutorials-org/otu.ai.web/commit/332dbb3a4009a0d8e6491d651a9e2f4c225d9be1))
- 개선된 OneSignal 알람 삭제 오류 처리 및 로깅 추가 ([72227ef](https://github.com/opentutorials-org/otu.ai.web/commit/72227ef54e2aaf897d8e5d0208598cea9afcef06))
- 리마인더 리스트에서 중복 데이터 필터링 및 키 값 개선 ([92a0dfa](https://github.com/opentutorials-org/otu.ai.web/commit/92a0dfaba4d9f8593146a3e6da6c500a56429b89))
- 리마인더 리스트의 즉각적인 갱신 처리 개선 ([034e892](https://github.com/opentutorials-org/otu.ai.web/commit/034e8926076ab60981339b89fc9234fc8d11d422))
- 리마인더 리스트의 페이지 로드 수 증가 ([f67bc9e](https://github.com/opentutorials-org/otu.ai.web/commit/f67bc9eafcaf9f8d51b32a970312c0830795601d))
- 리마인드 리스트에서 에니메이션 기능 제거 ([efe7049](https://github.com/opentutorials-org/otu.ai.web/commit/efe7049e9e37a8083b4cecf0a2913826267275ab))
- 불필요한 텍스트 제거 ([b1d1e4d](https://github.com/opentutorials-org/otu.ai.web/commit/b1d1e4db37a9133aa69be2e5286cba2f303374a1))
- 알림 리스트 이동 버튼 상태 업데이트 및 메시지 추가 ([5d42242](https://github.com/opentutorials-org/otu.ai.web/commit/5d42242c4b8a7e683d58ff1e61d80958029dc1b0))
- 알림 리스트 작업 종료 ([5a0b426](https://github.com/opentutorials-org/otu.ai.web/commit/5a0b4267831e0d2e8acc8089030976feb5457dbb))
- 테스트 환경 및 설정 개선 ([4016af2](https://github.com/opentutorials-org/otu.ai.web/commit/4016af29636cbac01889c08eeebc2b3892e5a384))
- 폴더 리스트, 디테일, 페이지 리스트 에니메이션 제거 ([e7c0d41](https://github.com/opentutorials-org/otu.ai.web/commit/e7c0d416577617add9556f0b867fdef82da5bed4))
- 폴더, 리마인더 리스트 보기를 해도 빠른 메모가 사라지지 않게 처리 ([9db6215](https://github.com/opentutorials-org/otu.ai.web/commit/9db62158ea77569690010d560ccd7a0e35852ebc))

### [0.5.182](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.181...v0.5.182) (2025-08-13)

### Features

- withdraw API에 로그 추가 및 package-lock.json 업데이트 ([a3c83d7](https://github.com/opentutorials-org/otu.ai.web/commit/a3c83d79f947d0f3baf11cb7592773b281fd0e7a))
- withdraw API에서 사용자 페이지 조회 시 이미지 URL이 없는 페이지 제외 ([a3bfdba](https://github.com/opentutorials-org/otu.ai.web/commit/a3bfdbabdacf9201102f27e0d5cab6b8405f6d5f))
- 탈퇴 시 uploadcare 파일 삭제 기능 구현 ([#803](https://github.com/opentutorials-org/otu.ai.web/issues/803)) ([8d5fb75](https://github.com/opentutorials-org/otu.ai.web/commit/8d5fb75a89e2acda627d56143c2823ebbdc7e509))
- 탈퇴시 page.img_url을 조건에 추가하면서 발생한 테스트 문제 해결 ([2a604e1](https://github.com/opentutorials-org/otu.ai.web/commit/2a604e1fd44168008454b366b9b53c2cb3a37bad))

### Bug Fixes

- vitest 제거 ([929ad67](https://github.com/opentutorials-org/otu.ai.web/commit/929ad676fe4ec53f5caaf983daf99db654972c00))
- 탈퇴 시 onesignal로 전송된 예약을 취소 ([949052c](https://github.com/opentutorials-org/otu.ai.web/commit/949052c134311e436ccc466bd7366164ae0027af))

### [0.5.181](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.180...v0.5.181) (2025-08-10)

### [0.5.180](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.179...v0.5.180) (2025-08-10)

### Features

- HTML 태그 제거 및 줄바꿈 처리 기능 추가 ([868b1dd](https://github.com/opentutorials-org/otu.ai.web/commit/868b1dd9438452e457a995e8e6aa0b0b0ee436af))

### [0.5.179](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.178...v0.5.179) (2025-08-10)

### Features

- ContentList에 ContentListMessage 컴포넌트 추가 및 불필요한 코드 제거 ([881925c](https://github.com/opentutorials-org/otu.ai.web/commit/881925cc85ebdf1b08df426699f5f159c71a69c1))
- delayedRefreshContentList 및 관련 로깅 기능 추가 ([3c2bcaf](https://github.com/opentutorials-org/otu.ai.web/commit/3c2bcaf9f2dfbf48fdfffbf48d73ded5e46ed4f8))
- sync 완료 시 컨텐츠 리프레시 기능 추가 ([6ebf72a](https://github.com/opentutorials-org/otu.ai.web/commit/6ebf72a6faef3e2506c774e9e9b7c608597524cc))

### [0.5.178](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.177...v0.5.178) (2025-08-10)

### Features

- 로그인 및 리다이렉트 기능 개선 ([94e9a7e](https://github.com/opentutorials-org/otu.ai.web/commit/94e9a7eb3c9012e120958c54ef712f1cf073caf6))

### [0.5.177](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.176...v0.5.177) (2025-08-10)

### Features

- 리마인더 도움말 기능 추가 ([22f075d](https://github.com/opentutorials-org/otu.ai.web/commit/22f075d389aa2a2ff831919c6cde35ca3b994688))

### [0.5.176](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.175...v0.5.176) (2025-08-10)

### [0.5.175](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.174...v0.5.175) (2025-08-10)

### Features

- HTML 태그 제거 로직 개선 및 html-to-text 라이브러리 추가 ([61c33bc](https://github.com/opentutorials-org/otu.ai.web/commit/61c33bcd84b2a25b843621963edca9a4838efcbe))

### Bug Fixes

- 제목이나 본문이 없으면 heading을 생략하고 content로 내용을 몰아주기 ([9bd0f41](https://github.com/opentutorials-org/otu.ai.web/commit/9bd0f414a579535dc4dd782194574398c45fa728))
- 한글이 깨진 주석 제거 ([8de67b4](https://github.com/opentutorials-org/otu.ai.web/commit/8de67b47bec88d03f2f551ea50e25a2669658166))

### [0.5.174](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.173...v0.5.174) (2025-08-10)

### Features

- sync/push에서 알람 삭제 시 OneSignal 예약 취소(p-map 10) 추가 + 최초(즉시) 전송은 last_notification_id 저장 스킵 ([e18b62f](https://github.com/opentutorials-org/otu.ai.web/commit/e18b62f69105d7995f274990cadbac6ab884b529))

### [0.5.173](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.172...v0.5.173) (2025-08-08)

### Features

- alarm 테이블에 id 컬럼을 추가해서 watermelondb를 지원할 수 있도록 개선하고, 추후에 하나의 page가 여러개의 alarm을 갖을 수 있도록 page_id를 primary key에서 일반 키로 변경 ([4e73d68](https://github.com/opentutorials-org/otu.ai.web/commit/4e73d68c3cc69de16fa2f3078826c37053440ab3))
- alarm을 pull / push로 처리할 수 있도록 pull과 push에서 이를 받는 메커니즘을 도입 ([9bd7c3f](https://github.com/opentutorials-org/otu.ai.web/commit/9bd7c3f43a35b651c65f61b86cafe77b41f8617e))
- OneSignal 알림 배치 업데이트 기능 및 통합 테스트 추가 ([ecd9146](https://github.com/opentutorials-org/otu.ai.web/commit/ecd9146b44652816766abfaa563edb89d943df57))
- WatermelonDB 알람 테이블 및 스키마 추가 ([56a1185](https://github.com/opentutorials-org/otu.ai.web/commit/56a11857d6da3de93015e0910b2bf5c67c5d516d))
- WIP 알림 전송 시 중복 전송이 안되도록 처리 ([801f1f7](https://github.com/opentutorials-org/otu.ai.web/commit/801f1f75a65dc465cfb998397e54ca5446a3d58f))
- 데이터베이스 타입에 알람 삭제 관련 필드 및 테이블 추가 ([05e0daa](https://github.com/opentutorials-org/otu.ai.web/commit/05e0daa6c209d3bc68bec07998f2201758b667c3))
- 리마인더 메시지 내용 추출 로직 테스트 간소화 ([43a3164](https://github.com/opentutorials-org/otu.ai.web/commit/43a316412b91666991c0200c3138180102b56105))
- 알람 데이터 관리 개선을 위한 새로운 쿼리 로직 추가 ([7ef75d2](https://github.com/opentutorials-org/otu.ai.web/commit/7ef75d2c74f64cb38d2c8095b07dbc66de3dbf11))
- 알람 동기화 시스템 구현 완료 ([971d192](https://github.com/opentutorials-org/otu.ai.web/commit/971d1924a0dc1d3ba15ac1ae8b1b7c437dc1811c))
- 알람 삭제 처리 로직 추가 및 통계 집계 개선 ([f67a6a8](https://github.com/opentutorials-org/otu.ai.web/commit/f67a6a8fd4f4fb8ee7a0f1337106ca766e841e71))
- 알람 생성 시 고유 ID 추가 ([a08dfdf](https://github.com/opentutorials-org/otu.ai.web/commit/a08dfdf18469e19f894cea6f92d62fd45abcd996))
- 알람에서 title, body, start_time 필드 제거 및 page 테이블과의 JOIN 방식으로 변경 ([03a1b83](https://github.com/opentutorials-org/otu.ai.web/commit/03a1b83ecbfa40d602858773195067e9645dea80))
- 알림 메시지에서 HTML 태그 제거 및 uploadcare URL 지원 추가 ([75395a9](https://github.com/opentutorials-org/otu.ai.web/commit/75395a9806fa65ef4917fb9253e2a864914bd682))
- 첫 번째 페이지에서 알람 데이터 조회 기능 추가 ([d1d84a9](https://github.com/opentutorials-org/otu.ai.web/commit/d1d84a93fd95f3963763bedae2736c6bef6a2efc))

### Bug Fixes

- OneSignal 30일 제약 고려한 알람 처리 조건 수정 ([92ae4ac](https://github.com/opentutorials-org/otu.ai.web/commit/92ae4ac9f13a39290704732311bfd77b527aa0a4))
- OneSignal iOS 첨부 사양 준수 및 테스트 업데이트 ([7aa8143](https://github.com/opentutorials-org/otu.ai.web/commit/7aa8143be36e0a8261387e1561f0e60eab53b69f))
- 리마인드 테스트를 중간에 중단시키는 코드 제거 ([c823105](https://github.com/opentutorials-org/otu.ai.web/commit/c823105d5368ce48f8b39ebbb5e6c5906634b23b))
- 알람 워터멜론 디비화 todo 리스트 정리 ([4da62d6](https://github.com/opentutorials-org/otu.ai.web/commit/4da62d6b45695a4eac72914181130122146666d7))
- 커서의 도커 실행 지침 추가 ([00bf4c7](https://github.com/opentutorials-org/otu.ai.web/commit/00bf4c79af2ed72a2eeab3755f9ad8b676f83483))

### [0.5.172](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.171...v0.5.172) (2025-08-07)

### Features

- add db-sync script for local database management ([2925ee0](https://github.com/opentutorials-org/otu.ai.web/commit/2925ee0c7032d7ad115d1d459a04348c37bfdf57))
- Sentry 통합을 통한 오류 로깅 및 컨텍스트 추가 ([68e0e8b](https://github.com/opentutorials-org/otu.ai.web/commit/68e0e8bd57b1a66a215a91e1bee07fbe7d73d5ba))
- 알람 시간 충돌 해결 로직을 함수로 분리 및 데이터베이스 타입 정의 업데이트 ([d7fb143](https://github.com/opentutorials-org/otu.ai.web/commit/d7fb1435c787d3e9e37c07c277b9ac530c1a8017))

### Bug Fixes

- page.length 의 데이터 타입을 더 큰 길이로 변경 ([a8744e9](https://github.com/opentutorials-org/otu.ai.web/commit/a8744e9b1080f1a825b9c657dc35478079da46a4))
- 자동 제목 생성 문제 해결 ([4a48590](https://github.com/opentutorials-org/otu.ai.web/commit/4a48590f8e9dd4922920db73fb772694e1e882d5))

### [0.5.171](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.170...v0.5.171) (2025-08-03)

### Features

- 알림 페이로드 생성 및 전송 로직 개선 ([1d39919](https://github.com/opentutorials-org/otu.ai.web/commit/1d39919d16ad2c7a7dea2c2e7ccd655d413487dd))

### [0.5.170](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.169...v0.5.170) (2025-08-02)

### Features

- Add blinking cursor and auto-focus to memo input ([ab341a5](https://github.com/opentutorials-org/otu.ai.web/commit/ab341a5939ad196a36300eec984805977facf7c7))
- alarm 테이블에 processed_at 컬럼 추가 및 인덱스 생성 ([0a028a5](https://github.com/opentutorials-org/otu.ai.web/commit/0a028a5efcbb185892360adcc759b54b29bb3a82))
- dump.sql 업데이트 ([cef1ab0](https://github.com/opentutorials-org/otu.ai.web/commit/cef1ab05eda91adfeddc9ac28f1c13bce9f7c2f6))
- OneSignal 알람 처리 로직 개선 및 Sentry 에러 추적 추가 ([b8c2209](https://github.com/opentutorials-org/otu.ai.web/commit/b8c22092401cedc1d431400951b121794d308f53))
- 알람 시스템 중복 처리 방지 및 6시간 락 정책 적용 ([9262fc6](https://github.com/opentutorials-org/otu.ai.web/commit/9262fc60060e14f88238ada1939007c6ceb54609))
- 알람 처리 로직 개선 및 Sentry 에러 추적 추가 ([bc2868d](https://github.com/opentutorials-org/otu.ai.web/commit/bc2868d8a36839ae5fc2ae2756aed208e32c5097))
- 알람 처리 로직 개선 및 헬퍼 함수 추가 ([b97ecd3](https://github.com/opentutorials-org/otu.ai.web/commit/b97ecd3319222e506af18668c15b2ced5b3d32b3))
- 추가 알람 처리 실패 시나리오를 위한 OneSignal API 목업 함수 추가 및 테스트 케이스 작성 ([0fb4734](https://github.com/opentutorials-org/otu.ai.web/commit/0fb4734b97877dccbc8103ec20a8a55d8ee59947))

### Bug Fixes

- .npmrc 제거 ([ca69fe5](https://github.com/opentutorials-org/otu.ai.web/commit/ca69fe5afdc7474e70747125173870335397b6be))
- alarm 테이블의 processed_at 컬럼 추가 시 중복 방지 및 인덱스 생성 최적화 ([996eb6a](https://github.com/opentutorials-org/otu.ai.web/commit/996eb6ad595029078b9a5c4d4169f1a0ba70318e))
- Jest ES 모듈 오류 해결 및 알람 처리 성능 개선 ([6b08001](https://github.com/opentutorials-org/otu.ai.web/commit/6b0800101e5a42514b3d9e01d9d87a6f11223935))
- PostgreSQL 랜덤 함수 결정론적 동작 보장 및 테스트 시나리오 주석 정정 ([0cbcec0](https://github.com/opentutorials-org/otu.ai.web/commit/0cbcec0c56c09ad522e5004bf45f273986a0f17d))
- 디버그 목적 테이블 제거 ([84b5b80](https://github.com/opentutorials-org/otu.ai.web/commit/84b5b80abf3669516a710c0ba94bac24f0f7a307))
- 불필요한 alarm_debug_log 테이블 삭제 ([ff91051](https://github.com/opentutorials-org/otu.ai.web/commit/ff91051dd992171654a81383f170fb592653f429))
- 불필요한 설정 제거 ([b2bb333](https://github.com/opentutorials-org/otu.ai.web/commit/b2bb333fc29f78d440ddb2f9bfa850ba1c666a77))
- 원시그널 처리 로직 개선 및 테스트 작성 ([a1c5cd6](https://github.com/opentutorials-org/otu.ai.web/commit/a1c5cd60997ac9ab0707838cb7ea47f7ebae4624))

### [0.5.169](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.168...v0.5.169) (2025-07-31)

### [0.5.168](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.167...v0.5.168) (2025-07-30)

### Features

- 과거 알람 시간 처리 로직 개선 및 테스트 추가 ([14743ae](https://github.com/opentutorials-org/otu.ai.web/commit/14743aedda965d4a56d478b597050f69e240728f))

### [0.5.167](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.166...v0.5.167) (2025-07-30)

### Features

- createUpdate 에디터에서 공유 기능 주석처리 ([e1b4d1a](https://github.com/opentutorials-org/otu.ai.web/commit/e1b4d1a3e316d6965f3b8c72702974388ebbceeb))
- createUpdate에서 폴더를 클릭하면 folder detail로 이동하도록 개선 ([1c4ec4a](https://github.com/opentutorials-org/otu.ai.web/commit/1c4ec4ad701100f49901a2eefb0cd64b599a8d7a))
- **database:** alarm, folder, folder_delete에 대한 typescript type 추가 ([576f699](https://github.com/opentutorials-org/otu.ai.web/commit/576f699983887848f83f97c5d674454b5ad0d329))
- dump 업데이트 ([6148faf](https://github.com/opentutorials-org/otu.ai.web/commit/6148fafeaff1c763f1a85a2f9df5d34137a5f512))
- E2E 테스트 시나리오 업데이트 및 새로운 케이스 추가 ([08c18e1](https://github.com/opentutorials-org/otu.ai.web/commit/08c18e176c9ec41e4ccbf0c1115be764b177528b))
- E2E 테스트에 Math.random() 목업 추가 및 시나리오 개선 ([6db1fc6](https://github.com/opentutorials-org/otu.ai.web/commit/6db1fc6a0282c32a8ed462edce9d72b88ed231c8))
- FolderDetail 헤더 및 컨트롤 영역 구현 - 폴더명, 정렬, 선택 모드 추가 ([8cc9c7a](https://github.com/opentutorials-org/otu.ai.web/commit/8cc9c7ab775f305f6ed761bab75de3733849e23a))
- **folder:** 폴더 콘텐츠 정렬 및 보기 모드 UI 개선 ([f0bc5fd](https://github.com/opentutorials-org/otu.ai.web/commit/f0bc5fd702249ffe9a4fe4b13f995fee913506cb))
- FullscreenModal에 zIndex 속성 추가 및 FolderDetail, CreateUpdate에서 적용 ([966b24c](https://github.com/opentutorials-org/otu.ai.web/commit/966b24c04305fa658ab293244bc10ecc3001477e))
- Jotai DevTools 동적 로드 및 환경 변수 설정 추가 ([33c871d](https://github.com/opentutorials-org/otu.ai.web/commit/33c871d1eb946313042280868da228f3b6892b2b))
- next_alarm_time null 허용 ([18d19b1](https://github.com/opentutorials-org/otu.ai.web/commit/18d19b194ce834eba339f6aa4c07fa2b8f852a26))
- oauth 인증 과정에서 return URL을 확인하기 위해서 로그 추가 ([4f1b19f](https://github.com/opentutorials-org/otu.ai.web/commit/4f1b19f5305b62986c0557e6597fce50a5fb2f79))
- OneSignal 알림 처리 로직 개선 및 주석 추가 ([5ba68ce](https://github.com/opentutorials-org/otu.ai.web/commit/5ba68ce2a92ffaeb6f206b707e4b57f76d62e3de))
- PageSearchDialog UI 프레임워크 변경 및 검색 성능 개선 ([9499591](https://github.com/opentutorials-org/otu.ai.web/commit/9499591baec1dabd8cb2561b39f9c1c6df68ed0b))
- Supabase 클라이언트 변경 및 GET/POST 메서드에서 서비스 역할 사용 ([4e2f6a8](https://github.com/opentutorials-org/otu.ai.web/commit/4e2f6a8d15550e6250590599c3e61a96db86839e))
- **supabase:** add script to generate database types from local database ([7090d12](https://github.com/opentutorials-org/otu.ai.web/commit/7090d12b49b34f21e808428ff87184deb8f21878))
- superuser 전용 리마인더 기능 추가 ([db3a005](https://github.com/opentutorials-org/otu.ai.web/commit/db3a0057ecd0d0ee3a9bf0a0b45c121904b74f12))
- **sync:** 폴더 동기화 및 관련 API/클라이언트 로직 추가 ([54b7692](https://github.com/opentutorials-org/otu.ai.web/commit/54b769284ecdc55534496f34b26912b3cbab1cac))
- WatermelonDB 폴더 시스템 마이그레이션 추가 ([c299fdd](https://github.com/opentutorials-org/otu.ai.web/commit/c299fdd00a195d5c3bec8003871f08283893226c))
- **watermelondb:** Turbopack 환경 대응을 위한 데코레이터 대체 로직 추가 ([eee73ae](https://github.com/opentutorials-org/otu.ai.web/commit/eee73ae941eed2e28f6d77108665d38f5abcbbf1))
- 간단메모 영역 UI 전환 애니메이션 구현 ([4213b43](https://github.com/opentutorials-org/otu.ai.web/commit/4213b431e28580abfa9348abceb52c089ec9f5fd))
- 그리드/리스트 뷰에서 폴더명 표시 기능 구현 ([cd897cb](https://github.com/opentutorials-org/otu.ai.web/commit/cd897cb0b5a23c8951947fe8c4a056aba5fe19d4))
- 다국어 지원 및 프론트엔드 로그 개선 ([7077a7f](https://github.com/opentutorials-org/otu.ai.web/commit/7077a7f48674a3a1c175227a5bceb00fdc21daa9))
- 다중 선택 모드 리셋 기능 추가 ([ad3e0d0](https://github.com/opentutorials-org/otu.ai.web/commit/ad3e0d061124758202a752f57032c2250b871f98))
- 다중 선택 삭제 확인 메시지 추가 및 다국어 지원 ([6f998b9](https://github.com/opentutorials-org/otu.ai.web/commit/6f998b91b195471fce8aa7d55ad5316e71d2dc9f))
- 로그인 컴포넌트에서 환경에 따라 URL 반환 로직 추가 ([62ca09a](https://github.com/opentutorials-org/otu.ai.web/commit/62ca09af1c74467b38932bb56ac675c91f9d8367))
- 모달 높이 동적 계산 및 하단 메뉴 고려 기능 추가 ([53d543c](https://github.com/opentutorials-org/otu.ai.web/commit/53d543cbdca59197edd906a0c83582aa0e2e2d27))
- 사용자 수면 시간 설정 추가 및 알람 시간 조정 로직 개선 ([24411cc](https://github.com/opentutorials-org/otu.ai.web/commit/24411cc1dd7a0e13cc7beafe3ead2ee61ca67eaf))
- 사용자 수면 시간 설정 추가 및 알람 시간 조정 로직 개선 ([17239cc](https://github.com/opentutorials-org/otu.ai.web/commit/17239ccdf70e901e883c567097e893811ed8fa23))
- 사용자 시간대 기반 알람 기능 추가 ([2dccf1f](https://github.com/opentutorials-org/otu.ai.web/commit/2dccf1f948da0ad4d8c22f768d6c1ac7c981742c))
- 사용자 접속시 RevenueCat 동기화 로직 임시 비활성화 ([d284a87](https://github.com/opentutorials-org/otu.ai.web/commit/d284a87b9d27dae76dc52f077cb70a06f68d6f99))
- 사용자 접속시 RevenueCat 동기화 로직 임시 비활성화 ([6e15b57](https://github.com/opentutorials-org/otu.ai.web/commit/6e15b57b0e390a66570f805e19deff1b23e0399b))
- 수면시간 정책 변경 및 경계값 테스트 추가 ([2e21eab](https://github.com/opentutorials-org/otu.ai.web/commit/2e21eab42a20ef1131c845fdf615d05a4a14b984))
- 슈퍼 유저에게만 폴더 기능을 노출함 ([5149f62](https://github.com/opentutorials-org/otu.ai.web/commit/5149f629dbc02672ffd074d172ef21a57cbb00d9))
- 슈퍼유저만 폴더 기능이 노출되도록 변경 ([9d3bab8](https://github.com/opentutorials-org/otu.ai.web/commit/9d3bab84564879261eb86cff6171ddcc1f01e48b))
- 아이콘 변경 및 UI 개선 ([1c1ea45](https://github.com/opentutorials-org/otu.ai.web/commit/1c1ea4593464ac25ed08e12da547cb7787e900e3))
- 아이콘 변경 및 UI 일관성 향상 ([6e3fe4e](https://github.com/opentutorials-org/otu.ai.web/commit/6e3fe4e32cab2e0d93bb171bae6e014f924e9211))
- 아이콘 업데이트 및 UI 개선 ([ed11bd8](https://github.com/opentutorials-org/otu.ai.web/commit/ed11bd848616819d082e781adee53418243eff3c))
- 알람 갱신 API에 GET 메서드 추가 및 알람 시간 계산 로직 개선 ([96c634b](https://github.com/opentutorials-org/otu.ai.web/commit/96c634bade564e2be0eff662273050ebdd37feef))
- 알람 갱신 로직 개선 및 디버깅 강화 ([2d0a788](https://github.com/opentutorials-org/otu.ai.web/commit/2d0a788dc369b1fb6b97540b952b5a4a7882e3d3))
- 알람 갱신 로직 일괄 설정 적용 및 주석 개선 ([f8b18a8](https://github.com/opentutorials-org/otu.ai.web/commit/f8b18a8e34e3bc1c908790e7f1751b09ec61f6ad))
- 알람 기능 슈퍼유저 체크 로직 개선 ([bea9d3b](https://github.com/opentutorials-org/otu.ai.web/commit/bea9d3b56ec2ec80cf74b1eae043ed1bfe20f357))
- 알람 승수 간격 테스트 로직 개선 및 환경별 테스트 데이터 분리 ([514247d](https://github.com/opentutorials-org/otu.ai.web/commit/514247d57548fc4e927230d85e0b84857ec34ed1))
- 알람 시간 계산 로직 및 주석 개선 ([190e0cd](https://github.com/opentutorials-org/otu.ai.web/commit/190e0cd12e6f295d02db24b48319370ec145e0f2))
- 알람 정책 문서 업데이트 및 충돌 해결 알고리즘 개선 ([471dd06](https://github.com/opentutorials-org/otu.ai.web/commit/471dd0650276592d75c6e6e4d55381afc1f72123))
- 인증 상태 변경 시 자동 페이지 리다이렉트 및 로깅 기능 추가 ([3b14637](https://github.com/opentutorials-org/otu.ai.web/commit/3b1463764650ab5a4b85370264d2cb60786de254))
- 자동 업데이트 및 페이지-폴더 관계 관리 개선 ([5392247](https://github.com/opentutorials-org/otu.ai.web/commit/5392247920e377246efb4d4e76f3e7e43257a5ec))
- 페이지 검색 다이얼로그에 페이지 제외 기능 및 상태 관리 추가 ([f0580ee](https://github.com/opentutorials-org/otu.ai.web/commit/f0580ee02b6fe23074da1c60dd8fe7c1c35c95b7))
- 폴더 UI 다국어 처리 구현 ([1c5b1da](https://github.com/opentutorials-org/otu.ai.web/commit/1c5b1dafc442ce666145fc6f823e699181272836))
- 폴더 관리 UI 개선 ([1459700](https://github.com/opentutorials-org/otu.ai.web/commit/1459700c4fbfb051bd1b97446435c07438d26656))
- 폴더 관리 다이얼로그에 "지정안함" 항목 추가 및 선택 해제 기능 구현 ([af4f1b1](https://github.com/opentutorials-org/otu.ai.web/commit/af4f1b1bc726ce032be3e38e199b4945be262124))
- 폴더 기능 추가 - 페이지 그룹핑 시스템 구현 ([f89c326](https://github.com/opentutorials-org/otu.ai.web/commit/f89c326d0236b58378504aec5f286b87578e5dba))
- 폴더 다중 삭제 기능 구현 및 WatermelonDB 안정성 강화 ([46b3f22](https://github.com/opentutorials-org/otu.ai.web/commit/46b3f221ed4942812d26a0e47080cbcc73c6fed8))
- 폴더 다중 페이지 동기화 및 새로고침 최적화 ([1242efc](https://github.com/opentutorials-org/otu.ai.web/commit/1242efcf1755cd3d2ef5cddfbafb0440242358c5))
- 폴더 디테일 네비게이션에 return 파라미터 추가 ([e13f2a2](https://github.com/opentutorials-org/otu.ai.web/commit/e13f2a2b8e5cf2a8e96efa8608dd91d8f5570787))
- 폴더 디테일 모달 열림 시 폴더 리스트 유지 및 렌더링 최적화 ([e5e1e66](https://github.com/opentutorials-org/otu.ai.web/commit/e5e1e66e5ff09166000cd640c72b43fc9c35f459))
- 폴더 디테일 페이지에 페이지 생성 버튼 추가 및 빈 폴더 UX 개선 ([02357af](https://github.com/opentutorials-org/otu.ai.web/commit/02357afad8bf14b732f4aabe987657ae7050adb6))
- 폴더 모드 URL 기반 라우팅 시스템 구현 ([c213838](https://github.com/opentutorials-org/otu.ai.web/commit/c2138385cf9bcec6491ce054fa624e602a62fbc7))
- 폴더 모드 기능 추가 및 UI 개선 ([c2f4a07](https://github.com/opentutorials-org/otu.ai.web/commit/c2f4a07cf788ae054fe8d2e237846bb75e183c31))
- 폴더 목록 UI 개선 - 아이콘 제거 및 다중선택 표시자 정렬 향상 ([c215639](https://github.com/opentutorials-org/otu.ai.web/commit/c2156392e985ad3624392a8977184e1d35d7603e))
- 폴더 목록과 읽기 페이지 폴더 버튼 동작 구분 ([e6e94a5](https://github.com/opentutorials-org/otu.ai.web/commit/e6e94a54c041d09c00a04b72288a8474f788893a))
- 폴더 목록에 폴더 선택 안내문 추가 ([c0f202d](https://github.com/opentutorials-org/otu.ai.web/commit/c0f202d922117a6201f220b9bd86e9af828dcb22))
- 폴더 변경 시 UI 즉시 반영을 위한 리프레시 시드 패턴 적용 ([a0c8f13](https://github.com/opentutorials-org/otu.ai.web/commit/a0c8f134ca2f78059308c0ba722b3d8058233ee0))
- 폴더 삭제 UX 개선 및 WatermelonDB 환경 UX 가이드 추가 ([e3cbc42](https://github.com/opentutorials-org/otu.ai.web/commit/e3cbc42a13ab87a92d8cc89b671038d6ca0576b0))
- 폴더 상세 페이지 UI 개선 - 페이지 추가 버튼 위치 변경 ([b7ea973](https://github.com/opentutorials-org/otu.ai.web/commit/b7ea97382929591f2361b437e0246624d64f71f6))
- 폴더 상세 페이지에서 다중 페이지 제거 기능 추가 ([f90eaad](https://github.com/opentutorials-org/otu.ai.web/commit/f90eaadfb20568574b5a0dbae8727bf5fd283395))
- 폴더 상세에서 페이지 열 때 URL에 ?folder=폴더ID 쿼리 추가 ([fb5d2ab](https://github.com/opentutorials-org/otu.ai.web/commit/fb5d2abf7142b49ead0d07f90da05a66cbf97ace))
- 폴더 생성 기능 추가 및 UI 개선 ([71d990e](https://github.com/opentutorials-org/otu.ai.web/commit/71d990e7f8b501d428f87070db8fee1d8858158e))
- 폴더 생성 다이얼로그 분리 및 폴더 관리 UI 개선 ([0f8e1ab](https://github.com/opentutorials-org/otu.ai.web/commit/0f8e1ab97ac8108aee783882511e0cd90e1bd930))
- 폴더 생성 시 UI 개선 - 가운데 정렬된 입력 폼 ([19f22dc](https://github.com/opentutorials-org/otu.ai.web/commit/19f22dcd59590b560c6abca221c941c1a11eb92f))
- 폴더 시스템 구현 - 1:N 관계로 페이지 그룹핑 기능 추가 ([f8c3968](https://github.com/opentutorials-org/otu.ai.web/commit/f8c396834f538e9426d7f2c06879083c2b184a61))
- 폴더 시스템 완전 개선 - 정렬, 타이밍, UI ([4b6bfc6](https://github.com/opentutorials-org/otu.ai.web/commit/4b6bfc6abbf9adef672521bd6c51307c37267ec4))
- 폴더 시스템 완전 구현 및 UI 개선 ([4442614](https://github.com/opentutorials-org/otu.ai.web/commit/44426145810dc69ae63d5e939be9c5761cd1682c))
- 폴더 정보 실시간 동기화 최적화 완료 ([02e62a9](https://github.com/opentutorials-org/otu.ai.web/commit/02e62a91af0cf8e267b103e227c81b1c279c1514))
- 폴더 제목 인라인 수정 기능 및 일관된 UX 개선 ([03aa4b8](https://github.com/opentutorials-org/otu.ai.web/commit/03aa4b82447cb3399496cc4276a3c8e3b48f1b80))
- 폴더 추가 다이얼로그 이중 모드 지원 ([4f41eb3](https://github.com/opentutorials-org/otu.ai.web/commit/4f41eb3fe83ed0db785c7d7ea3ce055345d12a1b))
- 프로필 설정에 타임존 선택 기능 및 자동 감지 기능 추가 ([345a486](https://github.com/opentutorials-org/otu.ai.web/commit/345a48665f960721f11b09d53604abfa50de3962))
- 홈 페이지 폴더 시스템 완성 및 UI 일관성 개선 ([89d7b8f](https://github.com/opentutorials-org/otu.ai.web/commit/89d7b8f6347a5ab35f18a0029345d21d3f4c27e4))

### Bug Fixes

- '생성된 폴더가 없습니다' 메������ ������ ��������� ������ ([89a64f0](https://github.com/opentutorials-org/otu.ai.web/commit/89a64f0150ec9fbd507f41a932e16e6f79f1ecd1))
- /home에서 페이지에 표시된 폴더명을 클릭했을 때 폴더 디테일을 닫으면 다시 /home으로 이동되도록 개선 ([55ea03d](https://github.com/opentutorials-org/otu.ai.web/commit/55ea03da55d29d21889cad8b8fb197ba6cf93a20))
- api/onesignal -> api/reminder 경로 변경 ([427ddc4](https://github.com/opentutorials-org/otu.ai.web/commit/427ddc4dd970f0da1d5a584fc8840dbe7ecaa311))
- contentList 상단 버튼, top 영역의 버튼 위치 세부조정 ([abfa647](https://github.com/opentutorials-org/otu.ai.web/commit/abfa64763db71385e720e1ecb48f5ed904ca2f7e))
- E2E 테스트 시나리오에서 불필요한 주석 제거 및 충돌 회피 로직 개선 ([8c33dd1](https://github.com/opentutorials-org/otu.ai.web/commit/8c33dd1c1813b2506b077fad38e9a04d7fe7034d))
- fetch_limit 파라미터를 받아서 처리하도록 개선 ([8471ba0](https://github.com/opentutorials-org/otu.ai.web/commit/8471ba0ec5632508e8366dafd064fae47c2dba36))
- FolderContent 스크롤 영역 구조 개선으로 pull-to-dismiss 동작 안정화 ([b508523](https://github.com/opentutorials-org/otu.ai.web/commit/b508523a3fa2b7012cf184592c10fe33f7f64a02))
- FolderContent 텍스트 필드 스타일 수정 ([dbfc280](https://github.com/opentutorials-org/otu.ai.web/commit/dbfc280dc3f6557d68a9a94159d9489d6c0d9b78))
- folderDetail에서는 하단 메뉴가 나타나도록 개선 ([d6cfd09](https://github.com/opentutorials-org/otu.ai.web/commit/d6cfd09c0ea18782faecb44238605024b8564b32))
- FolderList 파싱 에러 수정 및 구조 통일 ([1a53fcd](https://github.com/opentutorials-org/otu.ai.web/commit/1a53fcd4fe0d6afde3ee875df36c70f5db656bf3))
- Log TRANSFER events instead of reporting as errors ([ccb4707](https://github.com/opentutorials-org/otu.ai.web/commit/ccb4707ce7d424acf801e34e35fee0290257a84a))
- nextjs 15.3.3 -> 15.3.5 ([f679b3a](https://github.com/opentutorials-org/otu.ai.web/commit/f679b3a536fed3696a3b9ecbc85cb00593aff2b3))
- PageSearchDialog 컴포넌트에서 Combobox의 as 속성을 div로 변경 ([57145a4](https://github.com/opentutorials-org/otu.ai.web/commit/57145a428dc377bde970f34f95b68e6e1162cbd4))
- pull-to-dismiss 스크롤 동작 정밀도 개선 ([eaf766d](https://github.com/opentutorials-org/otu.ai.web/commit/eaf766d3310a529e011b0a2821e58de7e9431b42))
- ToggleButton 배경색을 다크모드에 맞게 수정 ([7088dd9](https://github.com/opentutorials-org/otu.ai.web/commit/7088dd997a165b42170117bf4e8463521872a8a5))
- TypeScript 타입 에러 해결 ([5c6942d](https://github.com/opentutorials-org/otu.ai.web/commit/5c6942dab592004e2f3153c2a1772bedcc1b3cfe))
- 강조된 경고 메시지 및 다국어 텍스트 처리 개선 ([bbd4c22](https://github.com/opentutorials-org/otu.ai.web/commit/bbd4c22ed5e04c53616e7f0f2256758e8746c054))
- 개발환경에서만 renew-alarm get에 접근가능하도록 변경 ([1baa303](https://github.com/opentutorials-org/otu.ai.web/commit/1baa30312fac17cd3938bc9cf7a1cbf19bbda0c1))
- 검색 결과 레이블 x 여백 조정 ([e74ed7e](https://github.com/opentutorials-org/otu.ai.web/commit/e74ed7ec7a6ee08709a6ae30b6bc8003e8d5cdd0))
- 검색 페이지에서 FolderDetail이 표시되는 문제 수정 ([992993f](https://github.com/opentutorials-org/otu.ai.web/commit/992993f100f51707378e8f4a2ba6449958750bf9))
- 그리드 뷰의 선택 체크 박스 위치 및 크기 미세 조정 ([8380492](https://github.com/opentutorials-org/otu.ai.web/commit/8380492c1b1a91f324b87e7eb7b4c22fd67a2315))
- 날짜 자동 줄바꿈 ([d299817](https://github.com/opentutorials-org/otu.ai.web/commit/d299817225b92b3ae68d19a285c931bc8df06fef))
- 누락된 alarm.sent_count 추가 ([61c6964](https://github.com/opentutorials-org/otu.ai.web/commit/61c69648e083831ea265341fb549e53912518b91))
- 다중 선택 기능의 텍스트 크기 조정 ([e83657a](https://github.com/opentutorials-org/otu.ai.web/commit/e83657a5ba29da5c9029985adb0f266b98f25bb9))
- 다중선택 모드에서 폴더 추가 시 선택 모드가 해제되는 문제 수정 ([199f399](https://github.com/opentutorials-org/otu.ai.web/commit/199f399863cc2e17c8871d9add30092733da6516))
- 다중선택 후 폴더 이동 시 자동 네비게이션 제거 ([7470115](https://github.com/opentutorials-org/otu.ai.web/commit/7470115fce5ad1314b3c8ecebf00a7aa06f1e24e))
- 다크모드 배경 색상 수정 ([c7d13af](https://github.com/opentutorials-org/otu.ai.web/commit/c7d13af941cd3b727fdb193353f72f97e6f99225))
- 다크모드 색상 디자인 개선 ([83ebd08](https://github.com/opentutorials-org/otu.ai.web/commit/83ebd087177915e3d93018cfa3fb08184a07fe1b))
- 데이터 로드 실패 시 에러 처리 추가 ([c53f168](https://github.com/opentutorials-org/otu.ai.web/commit/c53f168899963998d2247941a39622ee878a45e6))
- 동기화 로딩 메시지 번역 오류 ������ ([a141e5a](https://github.com/opentutorials-org/otu.ai.web/commit/a141e5aa1bd6d0cf797fa62bdaddb27a24d05b62))
- 로고 위치 조정 ([e914d74](https://github.com/opentutorials-org/otu.ai.web/commit/e914d74a7fd853c8c6acd11a449222fd30b378c8))
- 로그아웃 상태에서 /home/page/PAGE_ID 로 접근했을 때 /welcome로 리디렉션하도록 처리 ([55d28e9](https://github.com/opentutorials-org/otu.ai.web/commit/55d28e9c6348f8a20159167b615bf85d206764f7))
- 로그인 시 페이지 목록에서 폴더명이 표시되지 않는 문제 해결 ([f73bb9c](https://github.com/opentutorials-org/otu.ai.web/commit/f73bb9ce81b03133ffa24c82a4012367fd99b675))
- 리마인더 superClient 일원화 및 rest client 테스트 추가 ([d5695ea](https://github.com/opentutorials-org/otu.ai.web/commit/d5695eac9e939d30a187c5b5d8ce1be2ff64cef2))
- 리마인더 인터별 변경 및 로그 개선 ([c804318](https://github.com/opentutorials-org/otu.ai.web/commit/c804318732e9361658bad2112bf347e6d5db93f7))
- 리마인더 테스트 개선 ([c7c9afd](https://github.com/opentutorials-org/otu.ai.web/commit/c7c9afd7af1772d8ad717062d8bbdf786d8728e3))
- 리마인더 테스트 충돌 회피를 1->2개로 늘림 ([5f077fc](https://github.com/opentutorials-org/otu.ai.web/commit/5f077fcca779db4e3224a22fd54925d64d62fb3a))
- 리마인더를 켤 때 타임존 활성화 ([0512d50](https://github.com/opentutorials-org/otu.ai.web/commit/0512d504898719242cdd9dc1822bd33e8c8d9d40))
- 뷰모드 상단 여백과 정렬 왼쪽 여백 조정 ([ee4fc95](https://github.com/opentutorials-org/otu.ai.web/commit/ee4fc95b25547e5c730326358b63b1451093936e))
- 뷰타입 위치 변경 ([f96b52b](https://github.com/opentutorials-org/otu.ai.web/commit/f96b52bedb6a60dc63db2cd8c74ad347e1ed4e51))
- 사용하지 않는 코드 제거 ([ee4ee6d](https://github.com/opentutorials-org/otu.ai.web/commit/ee4ee6dc4f9da885a4b4a2c309cd07c7905f779c))
- 새 페이지 저장 시 부적절한 "다른 탭에서 삭제된 페이지" 메시지 제거 ([777feaf](https://github.com/opentutorials-org/otu.ai.web/commit/777feaf5ac04a2d8c762adcc64a994b95fd786be))
- 수면시간 회피 로직의 시간대 변환 방식 개선 ([c0df964](https://github.com/opentutorials-org/otu.ai.web/commit/c0df96420ac9865ebd227d7c7ebb1877c8707bc9))
- 시스템에 저장된 시간대가 목록에 없다면 자동으로 해당 시간대가 목록에 나타나도록 개선 ([2a021d1](https://github.com/opentutorials-org/otu.ai.web/commit/2a021d1858085d01cb05edfa418676f6c95231ef))
- 안쓰는 테이블 삭제 ([a004444](https://github.com/opentutorials-org/otu.ai.web/commit/a0044448dd96872fd3a9b64a8406b323dc27ef8c))
- 안쓰는 환경 제거 ([e6f537c](https://github.com/opentutorials-org/otu.ai.web/commit/e6f537cb8fd893d08944c981a9ecdd4ab98fb0d1))
- 알람 처리 지연 시 파라미터가 0이면 지연을 실행하지 않도록 개선 ([8a4b134](https://github.com/opentutorials-org/otu.ai.web/commit/8a4b1346875028810c7061a2f520e6d776bfc679))
- 알람 테이블의 title, body 컬럼 NULL 허용 및 불필요한 마이그레이션 파일 정리 ([0962e7e](https://github.com/opentutorials-org/otu.ai.web/commit/0962e7edb3172bb81bab4af495ae68c178ab78e6))
- 앞으로 해야 할 일을 todo로 기록해둠. ([320d70c](https://github.com/opentutorials-org/otu.ai.web/commit/320d70c668df16fc851baa3301f190e7f3edcb77))
- 앞으로 해야 할 일을 todo로 기록해둠. ([99b2fa5](https://github.com/opentutorials-org/otu.ai.web/commit/99b2fa599aff0105f4d270a1cdbf3f6871d6270d))
- 업로더를 dynamic loading, suspense ([e3f7efc](https://github.com/opentutorials-org/otu.ai.web/commit/e3f7efce26abca94f4d489beb61096fb0d6a1173))
- 업로더를 dynamic loading, suspense ([1e6ddeb](https://github.com/opentutorials-org/otu.ai.web/commit/1e6ddeb3081b9d9af591613ad475a0d6cb2967ec))
- 여러개의 리마인더 갱신 경합을 줄이기 위해서 실행 지연 기능추가 ([b81a40f](https://github.com/opentutorials-org/otu.ai.web/commit/b81a40f1f87c559fcbb20325a5ae03e5d72699a8))
- 잘못된 copy & paste 제거 ([443be6a](https://github.com/opentutorials-org/otu.ai.web/commit/443be6a38863a5265f5708b258e3439a4a031c9b))
- 정렬 ui 수직 가운데 정렬 ([6affff7](https://github.com/opentutorials-org/otu.ai.web/commit/6affff76bbfeecef208f5ea03c2f4eb4b8c4d6ec))
- 최초 동기화 시 로딩 메시지를 ������������ ��������������� ������ ([99d4b5b](https://github.com/opentutorials-org/otu.ai.web/commit/99d4b5bbb428043d8cc2910e9eb6ef4bf6d95ec4))
- 최초 리마인더 등록시 next_alarm_time을 null로 지정하도록 변경 ([595bde8](https://github.com/opentutorials-org/otu.ai.web/commit/595bde8c132a531c2fedf3f3aec73839a3e5a979))
- 테스트 시나리오 예상 시간 오류가 있어서 해결 ([1479d44](https://github.com/opentutorials-org/otu.ai.web/commit/1479d446bf398b21e7945b8bfdf7ae7212f28bf6))
- 페이지/폴더 전환버튼, 다중선택 버튼, 뷰모드 버튼 크기 키움 ([a2b5502](https://github.com/opentutorials-org/otu.ai.web/commit/a2b5502b87a92a117cf9eead97d935e6e8b569a5))
- 페이지가 적용될 폴더를 선택하면 즉시 다이얼로그가 닫히도록 개선 ([c877d31](https://github.com/opentutorials-org/otu.ai.web/commit/c877d318443aaa2f02b9f968eb5ae3af2f739423))
- 페이지네이션 범위 계산 오류 수정 ([0e9b11d](https://github.com/opentutorials-org/otu.ai.web/commit/0e9b11d0c63508837ad42c3ecb6bd00be5b1ee5a))
- 폴더 관리 시 UI 갱신 문제 완전 해결 ([3eaa658](https://github.com/opentutorials-org/otu.ai.web/commit/3eaa6587f9f97a59f833ab7a0f2587ae5de36bd3))
- 폴더 관리자 수정 시 수직 위치가 달라지지 않도록 처리 ([78ee502](https://github.com/opentutorials-org/otu.ai.web/commit/78ee50241b13c41d1ed10bc1a6a5ce3256ab34ab))
- 폴더 내 페이지 닫기 시 폴더 디테일로 돌아가도록 수정 ([b748c88](https://github.com/opentutorials-org/otu.ai.web/commit/b748c88b0047b9e7355d887db73dc92f50696422))
- 폴더 동기화/지정 로직에 상세 로그 및 Sentry 연동, 타입 오류 해결 ([d97cd6d](https://github.com/opentutorials-org/otu.ai.web/commit/d97cd6d99a5645a32be6bd7d0b80d54aa07197b3))
- 폴더 디테일 페이지 닫기 시 폴더 리스트로 돌아가도록 수정 ([ca4e7f9](https://github.com/opentutorials-org/otu.ai.web/commit/ca4e7f93282e22199790f5f0bcfd7b214d9992c6))
- 폴더 명이 길면 말줄임 ([73bd8e7](https://github.com/opentutorials-org/otu.ai.web/commit/73bd8e7a74d007d73435e2988c94c79242f96394))
- 폴더 목록의 기본 아이콘 변경 ([cb2a310](https://github.com/opentutorials-org/otu.ai.web/commit/cb2a310b49e6e05c2e13a47b27ccc186080a2f52))
- 폴더 목록이 refreshSeedAfterContentUpdate에 반응하도록 개선 ([b8a42b3](https://github.com/opentutorials-org/otu.ai.web/commit/b8a42b3d91ff5629443c33e642b314b16c5fa087))
- 폴더 삭제 시 관련 페이지 연결 해제 및 삭제된 폴더 참조 정리 ([2158025](https://github.com/opentutorials-org/otu.ai.web/commit/215802566e8b560111e2902458e8078be777cb9d))
- 폴더 상세 메뉴 위치 조정 ([820ad41](https://github.com/opentutorials-org/otu.ai.web/commit/820ad41760d2c2be4e478ae852dc09f6ed3a91aa))
- 폴더 상세 페이지에서 다중선택 모드 버튼 표시 문제 완전 해결 ([bdb934e](https://github.com/opentutorials-org/otu.ai.web/commit/bdb934e1d6758a60afdfc31a00d12a26c1419f65))
- 폴더 생성 관련 다이얼로그 디자인 개선 ([40aa236](https://github.com/opentutorials-org/otu.ai.web/commit/40aa236d37e6c82091824f77b8417783bfdccbdd))
- 폴더 이름 입력 및 수정 시 안전성 개선 ([fc4866a](https://github.com/opentutorials-org/otu.ai.web/commit/fc4866af66b0f1703c3b64a3d24c7181e1137a1c))
- 폴더 이름 편집 시 undefined 에러 해결 ([b1d3ff7](https://github.com/opentutorials-org/otu.ai.web/commit/b1d3ff712521c492afb7a33c19bd962a50c994d9))
- 폴더 페이지 수 타이밍 이슈 해결 ([3a5196b](https://github.com/opentutorials-org/otu.ai.web/commit/3a5196b73ff9b484f3aa9cdb4bdaf880f80634ea))
- 폴더관리 다이얼로그 무한 루프 문제 해결 ([bf24fa1](https://github.com/opentutorials-org/otu.ai.web/commit/bf24fa170b31dd6cb0c019b0f919d9026c0c4277))

### [0.5.166](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.165...v0.5.166) (2025-06-29)

### Bug Fixes

- Supabase 토큰 조각 점진적 파싱으로 UTF-8 오류 해결 ([e7c9c3f](https://github.com/opentutorials-org/otu.ai.web/commit/e7c9c3fe9fba8a225d341748480ad9d6a0771c9c))

### [0.5.165](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.164...v0.5.165) (2025-06-29)

### Features

- Supabase UTF-8 오류 추적을 위한 단계별 미들웨어 로깅 시스템 강화 ([45b4b68](https://github.com/opentutorials-org/otu.ai.web/commit/45b4b689fe09c7ad9311018b9810ca1bcedbd965)), closes [#67](https://github.com/opentutorials-org/otu.ai.web/issues/67)

### [0.5.164](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.163...v0.5.164) (2025-06-29)

### [0.5.163](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.162...v0.5.163) (2025-06-29)

### [0.5.162](https://github.com/opentutorials-org/otu.ai.web/compare/v0.5.161...v0.5.162) (2025-06-29)

### Features

- cursor bga의 docker 환경 활성화를 위한 설정 ([e30f054](https://github.com/opentutorials-org/otu.ai.web/commit/e30f05464f3b75364d74cc6fd9c3243bdfed8c70))

### Bug Fixes

- Supabase 클라이언트를 통한 데이터 조회 및 로깅 개선 ([a9fe7f9](https://github.com/opentutorials-org/otu.ai.web/commit/a9fe7f93a3e336b73c088592a7f955716d5768cd))
- 빌드 과정에서 로그 출력되지 않게 처리 ([b20101b](https://github.com/opentutorials-org/otu.ai.web/commit/b20101b2d79ed372e7d53d53251134295460cafe))
- 페이지네이션 범위 계산 오류 수정 ([3db5ad1](https://github.com/opentutorials-org/otu.ai.web/commit/3db5ad1532465b1e8b4f39d57a3202520b8c78b7))

### [0.5.161](https://github.com/egoing/opentutorials-2/compare/v0.5.160...v0.5.161) (2025-06-25)

### Features

- RevenueCat 환불 처리 완전 구현 및 문서 정리 ([2b43430](https://github.com/egoing/opentutorials-2/commit/2b434304bd838d39f5af96a4df7a5edc01007519))

### [0.5.160](https://github.com/egoing/opentutorials-2/compare/v0.5.159...v0.5.160) (2025-06-24)

### Features

- REFUND_REVERSED 웹훅 이벤트 처리 추가 ([760910b](https://github.com/egoing/opentutorials-2/commit/760910b671f1fb9b0d2bac23c1fc9086816f7045))
- 결제 실패 상태에서 무료 사용자 전환 기능 추가 ([dbe10b7](https://github.com/egoing/opentutorials-2/commit/dbe10b7c8267fddf50064b40cf66d623cbd69ac3))
- 결제 실패 시 자동 리디렉션으로 사용자 경험 개선 ([fcb3e03](https://github.com/egoing/opentutorials-2/commit/fcb3e03a51b2728646ff4d8962c6a5e717f4847e))
- 사용자 홈 접속시 RevenueCat 구독상태 실시간 동기화 추가 ([841b6f7](https://github.com/egoing/opentutorials-2/commit/841b6f73f801aeb2b384f672a56a7449ddfa00ba))

### Bug Fixes

- 결제 관련 모달들을 모바일에서 전체화면으로 표시되도록 개선 ([3e69ad4](https://github.com/egoing/opentutorials-2/commit/3e69ad49623bf0bf2d7050183a9148f686f7e556))
- 결제 페이지 서비스 약관/개인정보 보호정책 모달 스크롤 문제 해결 ([44ece9c](https://github.com/egoing/opentutorials-2/commit/44ece9ccfb463caff19d1b53a6a06c8ccc26a78e))
- 고객 연락 이메일 help@opentutorials.org로 변경 ([7a405df](https://github.com/egoing/opentutorials-2/commit/7a405df513ab7bf465aa90d94c3f96dac21e9bb2))
- 구독 취소 상태일 때 구독 취소 버튼 숨김 처리 ([7040103](https://github.com/egoing/opentutorials-2/commit/70401033fc1376f03594908b22cf06d55c7e860c))

### [0.5.159](https://github.com/egoing/opentutorials-2/compare/v0.5.158...v0.5.159) (2025-06-14)

### Bug Fixes

- 로그아웃 상태에서는 로그아웃 버튼을 노출하지 않기 ([57127b6](https://github.com/egoing/opentutorials-2/commit/57127b67b046d4e0358badbd34c5e9f3f7e8e400))

### [0.5.158](https://github.com/egoing/opentutorials-2/compare/v0.5.157...v0.5.158) (2025-06-14)

### Bug Fixes

- 불필요한 오류 메시지 제거 0.1h ([1f7b0f2](https://github.com/egoing/opentutorials-2/commit/1f7b0f26814f4ec594193faf9c31b9c81dcb215d))

### [0.5.157](https://github.com/egoing/opentutorials-2/compare/v0.5.156...v0.5.157) (2025-06-14)

### Features

- 미들웨어에서 오류가 있을 때 오류 페이지로 이동하도록 처리 ([a23496f](https://github.com/egoing/opentutorials-2/commit/a23496f58b11acaef637b28597512721fb54728c))

### Bug Fixes

- 불필요한 쿠키 조회 제거 ([0532d23](https://github.com/egoing/opentutorials-2/commit/0532d23488b2a22953338cfeb23ca7cab96cdec1))

### [0.5.156](https://github.com/egoing/opentutorials-2/compare/v0.5.155...v0.5.156) (2025-06-13)

### Bug Fixes

- 결제 취소 후 다시 결제 버튼 클릭해서 실행할 수 있도록 개선 ([0eb89a4](https://github.com/egoing/opentutorials-2/commit/0eb89a4de6ae0ff6dee0314c3099c19ce8890442))
- 구독 정보 실패 메시지 개선 및 오류 발생 가능성에 대한 추가 설명 ([ccfd3b4](https://github.com/egoing/opentutorials-2/commit/ccfd3b4fe5c96ebe66a4a8fe26f7ada8d074fcd4))
- 웹 결제 취소 시에 경고창이 뜨지 않도록 개선 ([054b687](https://github.com/egoing/opentutorials-2/commit/054b687c0dc6a0aa1c439c95297a7459d51c72a3))

### [0.5.155](https://github.com/egoing/opentutorials-2/compare/v0.5.154...v0.5.155) (2025-06-12)

### Features

- 보안 관련 프롬프트 상수 추가 및 OCR 처리 개선 ([8ce90a3](https://github.com/egoing/opentutorials-2/commit/8ce90a35dd9bce82e6e496cf514af67c5ab1c4f2))

### Bug Fixes

- OCR 결과의 줄바꿈 및 공백 처리 개선 ([dbede27](https://github.com/egoing/opentutorials-2/commit/dbede271b34008fed405afab450fc8c23ebb8551))
- 같은 페이지인 경우는 에디터를 직접 고치고, 아닌 경우 데이터베이스를 고치도록 개선 ([a326208](https://github.com/egoing/opentutorials-2/commit/a3262084a67697d5ceed7809d516f79e15929ad7))
- 기본 사진 프롬프트 개선 ([437948e](https://github.com/egoing/opentutorials-2/commit/437948e013602a2f1caad6668b5e98a7f92179a1))
- 사진 프롬프트 기본 값을 변경 ([6ba5a1f](https://github.com/egoing/opentutorials-2/commit/6ba5a1fa6d1f1ad0b99b583ccee149c436ea63ca))

### [0.5.154](https://github.com/egoing/opentutorials-2/compare/v0.5.153...v0.5.154) (2025-06-11)

### Features

- BlockNote 포괄적 블록 ID 추적 시스템 구현 ([4704f24](https://github.com/egoing/opentutorials-2/commit/4704f24e9cdf8ceb79de30edbb30391076625e56))

### Bug Fixes

- blocknote 이미지 크기 조절 시 블록 ID 오류 해결 ([e478389](https://github.com/egoing/opentutorials-2/commit/e47838987c73d111a43e39f501d2f19c0f0cb975))
- BlockNote 타입 에러 수정 - url 프로퍼티 안전 접근 ([61eca7b](https://github.com/egoing/opentutorials-2/commit/61eca7b67a8c892b6b4514c2d8e2d4b633cd34a0))
- BlockNote 타입 에러 수정 - url 프로퍼티 안전 접근 ([2b02c54](https://github.com/egoing/opentutorials-2/commit/2b02c54f565c3d87b18ec8c9a1362717e3fb48f3))
- 클로저 문제 해결을 위한 editorContext 참조 패턴 개선 ([aa17e1d](https://github.com/egoing/opentutorials-2/commit/aa17e1d5e739ccafeebf22e2746b062b33e7b6ad))

### [0.5.153](https://github.com/egoing/opentutorials-2/compare/v0.5.152...v0.5.153) (2025-06-11)

### Bug Fixes

- 답장이 있을 때 사용자에게 인터컴 런처가 보이게 처리 ([df296ee](https://github.com/egoing/opentutorials-2/commit/df296eed6337042f3aaca8aeb583097ebf7f90ba))

### [0.5.152](https://github.com/egoing/opentutorials-2/compare/v0.5.151...v0.5.152) (2025-06-10)

### Bug Fixes

- 편집창에서 수정 전 휴지통 버튼만 활성화되는 문제 수정 ([f09c4db](https://github.com/egoing/opentutorials-2/commit/f09c4dbcfbd6a2d261c0cabacd307e52a9c13440))

### [0.5.151](https://github.com/egoing/opentutorials-2/compare/v0.5.150...v0.5.151) (2025-06-10)

### Bug Fixes

- 하단 네비게이션 채팅 버튼 중복 실행 문제 해결 ([83fbf70](https://github.com/egoing/opentutorials-2/commit/83fbf7016418ef4366c8eefcfa2d2b3bf22524af))

### [0.5.150](https://github.com/egoing/opentutorials-2/compare/v0.5.149...v0.5.150) (2025-06-10)

### Bug Fixes

- lightbox 제거 및 package-lock.json 재생성 ([480ec99](https://github.com/egoing/opentutorials-2/commit/480ec996675feb5423a92cf20146bf6edf108402))
- withMotionEffects HOC에서 onClick prop 전달 누락 수정 ([852322d](https://github.com/egoing/opentutorials-2/commit/852322d96080495c9c603141d4ea483411bfb7ef))
- 데스탑에서는 관련글을 즉시 열도록 개선 ([d628ed8](https://github.com/egoing/opentutorials-2/commit/d628ed8aeac9089bc3b2d162f0d645ef9fbb8d29))
- 복사 붙여넣기 기능을 사용할 때 과거 정보가 붙여넣기 되는 문제 해결 ([3fab810](https://github.com/egoing/opentutorials-2/commit/3fab81068489dd2e4e9ef017e1ad5e842d9cedeb))
- 복사 시 BlockNote image 텍스트 제거 ([879976e](https://github.com/egoing/opentutorials-2/commit/879976ea43ecef8ad44080f76a787106a46daf66))

### [0.5.149](https://github.com/egoing/opentutorials-2/compare/v0.5.148...v0.5.149) (2025-06-08)

### Bug Fixes

- HeaderArea에서 존재하지 않는 번역 키 제거 ([49dff5a](https://github.com/egoing/opentutorials-2/commit/49dff5a1f8463a9779d89c005a5d8655fa4ae918))
- TypeScript 빌드 에러 수정 ([b36c87e](https://github.com/egoing/opentutorials-2/commit/b36c87e643a384d23510a314d6034aeca99c6ff9))
- 데스크탑에서 페이지가 느리게 닫히는 문제가 있어서 페이지 모션은 데탑 한정 motion.dev를 조건부로 사용 안함. ([bd58071](https://github.com/egoing/opentutorials-2/commit/bd580710cda7b43d6232e2f94dd8b790ae4219cd))
- 저장, 채팅 버튼의 위치를 잘못잡는 문제 수정 ([7c7b8fb](https://github.com/egoing/opentutorials-2/commit/7c7b8fb553630f81fc5a581fb3fc0b230e47eea4))
- 프로필 이미지를 avata로 변경해서 정확한 원으로 표시되도록 개선 ([293fc25](https://github.com/egoing/opentutorials-2/commit/293fc250356664aee55daa48f117ac6931746db1))

### [0.5.148](https://github.com/egoing/opentutorials-2/compare/v0.5.147...v0.5.148) (2025-06-07)

### Bug Fixes

- 리마인더 아이폰 재노출 ([35d55a6](https://github.com/egoing/opentutorials-2/commit/35d55a69cc5355319dc4ce5336b99485ca6a698f))

### [0.5.147](https://github.com/egoing/opentutorials-2/compare/v0.5.146...v0.5.147) (2025-06-07)

### Bug Fixes

- Control 컴포넌트 렌더링 및 위치 설정 문제 해결 ([4c485e1](https://github.com/egoing/opentutorials-2/commit/4c485e150fb570bf22982897fefc715df63a368f))
- 채팅창이 열렸을 때 뒤의 컨텐츠 영역을 사용할 수 있게 개선 ([1501f1b](https://github.com/egoing/opentutorials-2/commit/1501f1b25e06f8877661263aefd446d4c67e446f))

### [0.5.146](https://github.com/egoing/opentutorials-2/compare/v0.5.145...v0.5.146) (2025-06-07)

### Bug Fixes

- 검색범위가 채팅창 아래로 내려가는 문제 해결 ([98741b4](https://github.com/egoing/opentutorials-2/commit/98741b437572cf87f62f04cc490a4711a01df2f8))

### [0.5.145](https://github.com/egoing/opentutorials-2/compare/v0.5.144...v0.5.145) (2025-06-07)

### Bug Fixes

- 관련글 클릭시 페이지가 닫히고 다시 열리도록 개선 ([66ad4b0](https://github.com/egoing/opentutorials-2/commit/66ad4b0ccdecf2a31e4b7309a1c5f972984e37cf))
- 로그인 메뉴가 열릴 때 blur 효과 제거 ([21c056a](https://github.com/egoing/opentutorials-2/commit/21c056a881f1a95c64221674d45bbbff48d4f2e4))
- 자동 링크 기능 부활 ([db88947](https://github.com/egoing/opentutorials-2/commit/db88947cbaa57e525eafb14df7099c8782ac17f3))

### [0.5.144](https://github.com/egoing/opentutorials-2/compare/v0.5.143...v0.5.144) (2025-06-07)

### Features

- Control 컴포넌트 위치 계산 로직 개선 및 애니메이션 추가 ([d884fde](https://github.com/egoing/opentutorials-2/commit/d884fde208e4ce40841ba8fad70e3cc7a60ef2cc))
- CreateUpdate 컴포넌트에 pull-to-dismiss 훅 통합 ([a2602a4](https://github.com/egoing/opentutorials-2/commit/a2602a4cdadb6894b2f3a9710288b4b869b497ad))
- hide reminder settings in development mode ([4b1a4d0](https://github.com/egoing/opentutorials-2/commit/4b1a4d0dee6701117071270c197c1297c4708391))
- Production 환경에서 알람/리마인더 API 실행 차단 ([644426a](https://github.com/egoing/opentutorials-2/commit/644426aefc9345693e09ad8eb817f863b2047902))
- pull-to-dismiss 시 자동 저장 기능 추가 ([4121cbe](https://github.com/egoing/opentutorials-2/commit/4121cbe66332b2de4c3b14a32fac4eac87c41c63))
- 모바일 Pull-to-Dismiss 기능 개선 및 애니메이션 최적화 ([9757884](https://github.com/egoing/opentutorials-2/commit/97578849128f67cd3ca662ac9c04eac7ca640e49))
- 모바일 pull-to-refresh 및 overscroll bouncing 완전 차단 ([2c87166](https://github.com/egoing/opentutorials-2/commit/2c87166942f8d8071a91cc34f9ca24ccb9650ad9))
- 페이지 상단 그림자 효과 및 애니메이션 추가 ([a610067](https://github.com/egoing/opentutorials-2/commit/a610067569b90596619ab9715d75ded0499f5d0d))

### Bug Fixes

- bottom menu를 LoginedMain 으로 이동 ([7db7b5d](https://github.com/egoing/opentutorials-2/commit/7db7b5d85d094483fe022b193f883e7229414cee))
- bottom menu를 LoginedMain 으로 이동 ([d704be8](https://github.com/egoing/opentutorials-2/commit/d704be8de55ede5db43bfe4f6ddf499b7a1d98e1))
- useMemo로 리랜더링 방지 ([2bab0ac](https://github.com/egoing/opentutorials-2/commit/2bab0ac63b455540117c9db82c7e9d559ea2c8ed))
- 검색 페이지 진입시 검색어 표시 길이 제한 ([90b59af](https://github.com/egoing/opentutorials-2/commit/90b59af6b396952490341cb59642887bdff45347))
- 닫힐 때 빠르게 닫히도록 개선 ([b3f518a](https://github.com/egoing/opentutorials-2/commit/b3f518a4f5adc8c572e0bdc7f135d55fca26a96d))
- 수정된 'use client' 문법 및 알람 발송 최대 횟수 조건 변경 ([d0b286c](https://github.com/egoing/opentutorials-2/commit/d0b286c824d578aba0f9f7784364d81909b32a4c))
- 알람 발송 최대 횟수를 4에서 10으로 변경 및 HTML 콘텐츠 정리 기능 추가 ([4a3a39c](https://github.com/egoing/opentutorials-2/commit/4a3a39c679cde253fb82a51219650f1e5bfd52f6))
- 채팅 on/off에 에니메이션 효과 부여 ([9bb7f13](https://github.com/egoing/opentutorials-2/commit/9bb7f1332ea92a349869556de5550edbf264eb1b))
- 프로필 버튼을 왼쪽에 붙임 ([ec80e2b](https://github.com/egoing/opentutorials-2/commit/ec80e2b736bf0ab372df91b8d2f05cb519df86ea))

### [0.5.143](https://github.com/egoing/opentutorials-2/compare/v0.5.142...v0.5.143) (2025-06-06)

### Features

- **editor:** 페이지 전환 시 자동 저장 로직 및 로깅 기능 추가 ([0ac9fb6](https://github.com/egoing/opentutorials-2/commit/0ac9fb616b84857342f0987bb119cebc819e84ec))

### Bug Fixes

- 리마인더를 개발환경에서만 활성화하는 코드 작성 ([d2eab72](https://github.com/egoing/opentutorials-2/commit/d2eab725a2c154d499a5d81336b2f2deae76ba76))
- 모든 props를 전달 받을 수 있도록 개선 ([d7892f0](https://github.com/egoing/opentutorials-2/commit/d7892f0cc242b987976632620e5eb7877d040b94))
- 불필요한 페이지 스크롤 리스토어 제거 ([55f650a](https://github.com/egoing/opentutorials-2/commit/55f650a151c5c21b814023629628af8b3d4b9e30))
- 프론트엔드 로그에 디버깅을 위한 추가 정보 포함 ([f7405f1](https://github.com/egoing/opentutorials-2/commit/f7405f12df12b11ce33ec2b3021c2c0adfab1567))

### [0.5.142](https://github.com/egoing/opentutorials-2/compare/v0.5.141...v0.5.142) (2025-06-05)

### Bug Fixes

- withMotionEffects HOC에서 disabled prop 전달 누락 문제 해결 ([fe587b1](https://github.com/egoing/opentutorials-2/commit/fe587b1281709e1ff872819751cf4d80f1017458))

### [0.5.141](https://github.com/egoing/opentutorials-2/compare/v0.5.140...v0.5.141) (2025-06-05)

### Bug Fixes

- 발행 후 새페이지에 진입했을 때 여전히 발행됨으로 표시되는 문제 처리 ([0b4ba43](https://github.com/egoing/opentutorials-2/commit/0b4ba432ecae610f0a2d2f31497a501929b1fe58))

### [0.5.140](https://github.com/egoing/opentutorials-2/compare/v0.5.139...v0.5.140) (2025-06-05)

### [0.5.139](https://github.com/egoing/opentutorials-2/compare/v0.5.138...v0.5.139) (2025-06-05)

### Bug Fixes

- 관련글을 통해서 링크를 클릭했을 때 하단 메뉴가 나타나는 문제 해결 ([d9125a5](https://github.com/egoing/opentutorials-2/commit/d9125a53019650eeef14260411606e0a96773a63))
- 페이지가 열렸을 스크롤을 최상단으로 이동 ([70109d5](https://github.com/egoing/opentutorials-2/commit/70109d5dfb94da3cf679f85952282ec7b1539dab))

### [0.5.138](https://github.com/egoing/opentutorials-2/compare/v0.5.137...v0.5.138) (2025-06-05)

### Bug Fixes

- 뒤로가기 버튼 옆 검색어 표시 위치 수정 ([f93a323](https://github.com/egoing/opentutorials-2/commit/f93a323b04b33f38c9dd308ff6f5100839888335))

### [0.5.137](https://github.com/egoing/opentutorials-2/compare/v0.5.136...v0.5.137) (2025-06-05)

### Bug Fixes

- Safari 클릭 이벤트 문제 해결을 위한 이중 안전장치 추가 ([86e56af](https://github.com/egoing/opentutorials-2/commit/86e56af96a5e8663ae6a5eb54b00453d25b68fdd))

### [0.5.136](https://github.com/egoing/opentutorials-2/compare/v0.5.135...v0.5.136) (2025-06-05)

### Bug Fixes

- 자동 저장 하기 전의 내용이 자동 저장 후 사라지는 문제가 있어서 관련 코드 비활성화 ([1d6b22a](https://github.com/egoing/opentutorials-2/commit/1d6b22a3edad9e0ebf451ff904a2eea9fbaf1cda))

### [0.5.135](https://github.com/egoing/opentutorials-2/compare/v0.5.134...v0.5.135) (2025-06-05)

### Features

- PWA 자동 설치 권유 프롬프트만 차단 ([07f2543](https://github.com/egoing/opentutorials-2/commit/07f2543370dc3dc09156680a42de3db6d5bcc41d))
- 검색 페이지에서 상단 아이콘을 로고로 변경 ([895ea5a](https://github.com/egoing/opentutorials-2/commit/895ea5ab235ca5327eb4d78d1870ea425e1fee5f))
- 데스크탑 환경에서 CreateUpdate 애니메이션 비활성화 ([1de3736](https://github.com/egoing/opentutorials-2/commit/1de37363cf1af758947cc38e9dac54059669e3d1))
- 페이지를 열었을 떄 튀어나오는 효과 적용 ([388ee98](https://github.com/egoing/opentutorials-2/commit/388ee98bcc959c68bc20bdcbe58f1deefd3e7b18))

### Bug Fixes

- SSR 호환성 개선 및 데스크탑 애니메이션 비활성화 ([8ae27a0](https://github.com/egoing/opentutorials-2/commit/8ae27a0d2bca490ac8f9d77f83c430411b6aaaf5))
- 누락된 isInEditor 추가 ([d5d2e90](https://github.com/egoing/opentutorials-2/commit/d5d2e905e0f7f0b132f6afa64c0b558b9e65fff6))
- 모바일 환경에서 CreateUpdate 컴포넌트가 Top 영역을 덮는 문제 해결 ([0cbca37](https://github.com/egoing/opentutorials-2/commit/0cbca37d768e781d12af2497129ffc60b1700177))
- 아직 첫글이 없을 경우 Hello, World!가 출력 되도록 변경 ([edb57ca](https://github.com/egoing/opentutorials-2/commit/edb57cad644d53774abc3be651c35f17531d479e))
- 최초동기화 완료후 바로 목록을 리프래쉬 처리 ([02c2e10](https://github.com/egoing/opentutorials-2/commit/02c2e107062f29c7e772edeab3f1ccd458490982))
- 홈 버튼 클릭시 리스트 최상단으로 즉시 이동 ([7653c25](https://github.com/egoing/opentutorials-2/commit/7653c25eb18b43e703ebb857fd1cbf4f35fe46ab))

### [0.5.134](https://github.com/egoing/opentutorials-2/compare/v0.5.133...v0.5.134) (2025-06-05)

### Bug Fixes

- 자동 저장 시 중복 저장 방지 ([c7a93f6](https://github.com/egoing/opentutorials-2/commit/c7a93f6bd2407c0bb925dd65918923bc93989b1a))
- 자동저장 시 에디터 포커스 및 커서 위치 초기화 문제 해결 ([5d4b712](https://github.com/egoing/opentutorials-2/commit/5d4b712b59f312f1c9bb514e87df741ba55e6824))
- 포커스가 사라지는 문제의 원인 중 하나로 저장 시에 불필요하게 페이지 전환을 시도함. ([16881ec](https://github.com/egoing/opentutorials-2/commit/16881ec764d6ac899d0ddef004a02c193fa01bf9))

### [0.5.133](https://github.com/egoing/opentutorials-2/compare/v0.5.132...v0.5.133) (2025-06-04)

### [0.5.132](https://github.com/egoing/opentutorials-2/compare/v0.5.131...v0.5.132) (2025-06-04)

### Features

- AI 이미지 캡셔닝 비용 최적화 - 조건부 고해상도 처리 시스템 도입 ([9ea7ab9](https://github.com/egoing/opentutorials-2/commit/9ea7ab982373b2d2ed39449c0aa1edb34920b991))
- layout 컴포넌트에서 조건부 lazy loading 최적화 ([d55b184](https://github.com/egoing/opentutorials-2/commit/d55b1840bf99a8f08a0f25a90b854b41dc355b2c))
- OneSignal 알람 갱신 로직 추가 및 기존 코드 정리 ([f232cb5](https://github.com/egoing/opentutorials-2/commit/f232cb5b835ac6f64adab22287f0e1f57e1a928d))
- OneSignal 알람 예약 기능 추가 ([647f040](https://github.com/egoing/opentutorials-2/commit/647f040cacbd06258cb7b451c14b32964f1ba1cd))
- OpenAI Function Calling을 최신 Tools API로 마이그레이션 ([53e5d6a](https://github.com/egoing/opentutorials-2/commit/53e5d6af19fe24c239451a5f15aac5fe221cad2a))
- 모바일에서 BlockNote 자동 포커스 방지 기능 추가 ([abbd986](https://github.com/egoing/opentutorials-2/commit/abbd986127004324e52251a32b7dc01eb05e571c))
- 알람 등록 로직 개선 및 API 연동 추가 ([36cceca](https://github.com/egoing/opentutorials-2/commit/36cceca0481725c4e240e5c3c55972217ecb2d8a))
- 알람 등록 로직 개선 및 사용자 인증 처리 추가 ([a8f99c2](https://github.com/egoing/opentutorials-2/commit/a8f99c226e3ce8cafd883166045486e727612a5f))
- 알람 등록 로직 개선 및 재시도 메커니즘 추가 ([021b366](https://github.com/egoing/opentutorials-2/commit/021b366bd3b911da5e1dc5233186972340711afd))
- 알람 등록 및 롤백 로직 개선 ([611a45c](https://github.com/egoing/opentutorials-2/commit/611a45ce80de3c5a29e9858de44543aa44fc1c00))
- 알람 시스템 개선 및 사용자 시간대 지원 추가 ([9616798](https://github.com/egoing/opentutorials-2/commit/961679844891ffe6777a4adb7728223bea907454))
- 알람 시스템에 제목, 본문 및 사용자 시간대 추가 ([97d86da](https://github.com/egoing/opentutorials-2/commit/97d86da3f1fadad4f8c8267e26a246aa7c658573))
- 알람 재시도 로직 최대 시도 횟수 변경 및 사용자 ID 가져오기 방식 수정 ([897c4b2](https://github.com/egoing/opentutorials-2/commit/897c4b23c79641e138bad9c1bfb108add5a2b341))
- 지연 로딩을 위한 dynamic 함수 사용 및 코드 스플리팅 가이드 추가 ([ef8a3ff](https://github.com/egoing/opentutorials-2/commit/ef8a3ff2851ef31fde457272f1aeb3fd84b9bc66))
- 캡션 API에 상세 로깅 추가 및 FileUploader abort 로직 수정 ([bf9bafe](https://github.com/egoing/opentutorials-2/commit/bf9bafe0e5f4c810afcaf543213d2e1bccea2073))
- 크론 타이머 및 알람 처리 로직 추가 ([a4ed683](https://github.com/egoing/opentutorials-2/commit/a4ed683134731df9679d2d95c02cfbb05e09c30e))
- 파일 업로더에서 현재 페이지 편집 시 에디터 직접 업데이트 구현 ([fd73abc](https://github.com/egoing/opentutorials-2/commit/fd73abcae177d570dbfbd7117ca2d582ba539128))
- 하단 네비게이션 버튼에 Motion 애니메이션 효과 적용 ([0c73206](https://github.com/egoing/opentutorials-2/commit/0c73206308f000a1c16094c1b968fd8140215a5a))

### Bug Fixes

- AI 제목 생성 API의 JSON 파싱 오류 수정 ([bb21b00](https://github.com/egoing/opentutorials-2/commit/bb21b00c77c9c55add7ebe913817d603af575f97))
- AI 제목 생성 중복 호출 방지 및 경쟁 상태 해결 ([693222c](https://github.com/egoing/opentutorials-2/commit/693222c9fe707ab9eea55059072e451a3e645753))
- alarm 테이블에 title, body 컬럼 추가 ([35c5c15](https://github.com/egoing/opentutorials-2/commit/35c5c15c71dfada9495d3b14ec9d71d4588e7aa0))
- correct variable naming and enhance error handling in alarm renewal process ([8304049](https://github.com/egoing/opentutorials-2/commit/8304049d62e7b783848c09e9f101cf9914d4a531))
- correct variable naming in OneSignal notification handling ([b639f49](https://github.com/egoing/opentutorials-2/commit/b639f4993e313b687d0e0bb65125020204d14a37))
- improve alarm handling and retry logic for database updates ([97b73a6](https://github.com/egoing/opentutorials-2/commit/97b73a64b0b9787a3575d570c8adfd4b73776f01))
- OneSignal 알림 처리 및 데이터베이스 업데이트 로직 개선 ([734f351](https://github.com/egoing/opentutorials-2/commit/734f35163c0bcc1847ea1b9b4c72116cb161f73d))
- package.json 의존성 및 스크립트 업데이트 ([4000b68](https://github.com/egoing/opentutorials-2/commit/4000b685dfdd859bc6420cbe92b72fd1d36418d5))
- test2@opentutorials.org 추가 ([88f7747](https://github.com/egoing/opentutorials-2/commit/88f7747938e3de3926d4f247b1c9efade2957d09))
- test2@opentutorials.org, test3@opentutorials.org 유저 추가 ([f8a5711](https://github.com/egoing/opentutorials-2/commit/f8a5711bb51abdfd1747fda3b9a92daae526ea10))
- test2@opentutorials.org, test3@opentutorials.org 유저 추가 ([f580905](https://github.com/egoing/opentutorials-2/commit/f58090582122eb5f7eccf7a5546fae5e70ac4bc7))
- 그리드 레이아웃 overflow 문제 수정 ([186ff1e](https://github.com/egoing/opentutorials-2/commit/186ff1e05439589c4fc0a8c78540de087429f553))
- 누락된 패키지 설치 ([b5151b6](https://github.com/egoing/opentutorials-2/commit/b5151b6c1de278b7fe421c99b9dad8e78354d8eb))
- 리마인더 구현 설계 문서 ([5860235](https://github.com/egoing/opentutorials-2/commit/5860235a919f21de8dce401cf0e69661c2c0f95a))
- 리스트에 motion.dev 효과 적용 ([064c4e5](https://github.com/egoing/opentutorials-2/commit/064c4e5668b260be9b38dc85c7603b12bc90e10e))
- 목록의 에니메이션 효과 개선 ([914230b](https://github.com/egoing/opentutorials-2/commit/914230bc99cb0d2c5a77b9913bb1d416154e6911))
- 불법적인 export 제거 ([b6b220a](https://github.com/egoing/opentutorials-2/commit/b6b220aaf5575d36b1153dafaf0c07e361e50199))
- 상단 글로벌 메뉴가 사라지는 문제 근본적으로 해결 ([1e03c22](https://github.com/egoing/opentutorials-2/commit/1e03c22e710ce30799480f4965f2e7076922e1d2))
- 알람 기능에서 본문 변경사항이 실시간 반영되지 않는 문제 해결 ([36008c0](https://github.com/egoing/opentutorials-2/commit/36008c05ee454a787b9df807be589975f2581040))
- 알람 테이블 스키마 수정 - send-count, 추가 ([2599592](https://github.com/egoing/opentutorials-2/commit/25995926ea1a4ac1116b6d15b4975ff1616ef2aa))
- 알람 테이블 스키마에서 send-count 필드 추가 ([d39fd32](https://github.com/egoing/opentutorials-2/commit/d39fd326eac056ea3e8d9bcd6c4dac4ffc5d1d36))
- 알람(reminder) 기능의 DB 스키마 일치성 문제 수정 ([9f02efb](https://github.com/egoing/opentutorials-2/commit/9f02efb16d494d119ac4f3d80327390b053659f2))
- 업로드케어가 업로드 끝나고 사라지면서 모든 UI가 작동되지 않는 문제해결 ([f7c2ca7](https://github.com/egoing/opentutorials-2/commit/f7c2ca7778d79bdb7581431627e5ec2dac004585))
- 에디터 초기화 중 불필요한 이벤트 처리 방지 및 상태 관리 개선 ([f97e05f](https://github.com/egoing/opentutorials-2/commit/f97e05f0a6f71316ad2d787b48d52b9e03993be6))
- 이미지 업로드 시 figure 태그 제거 ([94e16d9](https://github.com/egoing/opentutorials-2/commit/94e16d9324467e272c6c7fbe4bf1f8ef689d4b2b))
- 저장, 채팅 버튼에 에니메이션 추가 ([3e66bb6](https://github.com/egoing/opentutorials-2/commit/3e66bb6b2fd3d02902304ace83802656e4908057))
- 페이지가 열릴 때 채팅버튼이 위로 올라오도록 개선 ([198800c](https://github.com/egoing/opentutorials-2/commit/198800cb8b93a476a55da7a27091bf0aeec7ca47))
- 프로덕션 환경에서만 알람 설정이 안보이게 처리 ([1941721](https://github.com/egoing/opentutorials-2/commit/1941721eb834af28607bcc0b6f4de70aefed72ad))
- 프로파일 설정에서 사용자 ID 기반 프로파일링 활성화 ([cc762bb](https://github.com/egoing/opentutorials-2/commit/cc762bbfa0c069c0cc01606f52b51a59bec99483))

### [0.5.131](https://github.com/egoing/opentutorials-2/compare/v0.5.130...v0.5.131) (2025-06-02)

### Bug Fixes

- 화면 껌벅임을 줄이기 위해서 visibility를 이용 ([e9f5363](https://github.com/egoing/opentutorials-2/commit/e9f5363c1f0067e493c1f3efec70924d181372a7))

### [0.5.130](https://github.com/egoing/opentutorials-2/compare/v0.5.129...v0.5.130) (2025-06-02)

### Bug Fixes

- refactor: Safari 메뉴 렌더링 수정 로직 단순화 ([9c1d322](https://github.com/egoing/opentutorials-2/commit/9c1d322f322359fc83ca10cc302a26b0594d1038))

### [0.5.129](https://github.com/egoing/opentutorials-2/compare/v0.5.128...v0.5.129) (2025-06-02)

### Bug Fixes

- Safari iOS에서 top 메뉴 리프레시 로직 개선 ([9b49dce](https://github.com/egoing/opentutorials-2/commit/9b49dceeb7b6c69185f33ce16501ea5ec982b684))

### [0.5.128](https://github.com/egoing/opentutorials-2/compare/v0.5.127...v0.5.128) (2025-06-02)

### Bug Fixes

- 다크 모드에서 사이드 메뉴가 안보이는 문제 처리 ([7421e05](https://github.com/egoing/opentutorials-2/commit/7421e05da6fb0a8e320231a00b3181c90f6729e2))
- 로그 개선 ([94669cb](https://github.com/egoing/opentutorials-2/commit/94669cb461de2d6c221b2d3ec5ba5beb0951afc6))
- 사이드 메뉴 디자인 개선 ([52bddaf](https://github.com/egoing/opentutorials-2/commit/52bddaf7aef1283db6246f17c6b3c8f0cd7a6015))
- 읽기 화면에서 상단 네비게이션이 안보이면 리프래쉬를 하도록 처리 ([2da3c5a](https://github.com/egoing/opentutorials-2/commit/2da3c5ac6b3c70993b88f9644e17de4cc8727978))

### [0.5.127](https://github.com/egoing/opentutorials-2/compare/v0.5.126...v0.5.127) (2025-06-01)

### Bug Fixes

- ai 확장 기능이 아직 불안정하기 때문에 일단 비활성화 ([ae49e6d](https://github.com/egoing/opentutorials-2/commit/ae49e6deb29d8149804cbbe4125f59060c2d307d))

### [0.5.126](https://github.com/egoing/opentutorials-2/compare/v0.5.125...v0.5.126) (2025-06-01)

### Features

- AI 기능 조건부 활성화 시스템 구현 ([c1909f5](https://github.com/egoing/opentutorials-2/commit/c1909f58f20583dac97d1258fb903732ba876113))

### Bug Fixes

- 안드로이드 새계정을 위한 상품 등록 ([2e999ab](https://github.com/egoing/opentutorials-2/commit/2e999ab8f6b123ae997098e7787179c417d3e7ba))

### [0.5.125](https://github.com/egoing/opentutorials-2/compare/v0.5.124...v0.5.125) (2025-06-01)

### [0.5.124](https://github.com/egoing/opentutorials-2/compare/v0.5.123...v0.5.124) (2025-06-01)

### Features

- BlockNote 에디터에 AI 기능 통합 ([be605ca](https://github.com/egoing/opentutorials-2/commit/be605ca2cff8eb8bee81592494de38a1df0e7f75))

### Bug Fixes

- slashMenu 컬럼수 조정 ([3161049](https://github.com/egoing/opentutorials-2/commit/31610497876bee29d1ac93c40176ce89281af389))
- 로그 주도 개발을 위한 프롬프트 추가 ([f946b00](https://github.com/egoing/opentutorials-2/commit/f946b001dc728df9e9b4ccd242784097e22c145c))
- 안쓰는 코드 제거 ([a76e1ab](https://github.com/egoing/opentutorials-2/commit/a76e1ab0c714d14324d0f2d03e06401344d8f0b1))
- 편집 + 버튼 크기 줄이기 ([b4824aa](https://github.com/egoing/opentutorials-2/commit/b4824aacd35652b5246a9bebf6a02411f9b85c67))

### [0.5.123](https://github.com/egoing/opentutorials-2/compare/v0.5.122...v0.5.123) (2025-06-01)

### Features

- 편집화면 최소 높이 상향 조정 ([713f7ba](https://github.com/egoing/opentutorials-2/commit/713f7ba81c12fd29b1c5e2cb457339275cb51331))

### Bug Fixes

- blocknote sidemenu의 색상을 더 안정적으로 고정 ([7a85429](https://github.com/egoing/opentutorials-2/commit/7a85429f825df162c531c7a7ae053d895fa828f0))

### [0.5.122](https://github.com/egoing/opentutorials-2/compare/v0.5.121...v0.5.122) (2025-06-01)

### Bug Fixes

- Vercel 빌드 환경에서 발생하는 TypeScript 타입 추론 오류 해결 ([a3570be](https://github.com/egoing/opentutorials-2/commit/a3570be07f646070af1fdfe3f6da621cbd4eb28d))

### [0.5.121](https://github.com/egoing/opentutorials-2/compare/v0.5.120...v0.5.121) (2025-06-01)

### Bug Fixes

- 누락된 axios 추가 ([585d50a](https://github.com/egoing/opentutorials-2/commit/585d50aa4ceed7092d03fb98f098744bb9fa6ba4))
- 제목 변경 시 자동저장이 트리거되지 않는 문제 해결 ([cd45dc4](https://github.com/egoing/opentutorials-2/commit/cd45dc4e2d2537359cfe3cf750a5022c3af64629))

### [0.5.120](https://github.com/egoing/opentutorials-2/compare/v0.5.119...v0.5.120) (2025-05-31)

### Bug Fixes

- 불필요한 파일 제거 ([6bfe90d](https://github.com/egoing/opentutorials-2/commit/6bfe90d7e054ce41855fcf429b5849d2b480a765))

### [0.5.119](https://github.com/egoing/opentutorials-2/compare/v0.5.118...v0.5.119) (2025-05-31)

### Features

- BlockNote 에디터 인용 기능 제거 ([96da1d1](https://github.com/egoing/opentutorials-2/commit/96da1d1a7dc6ee1e845a2e3a0411b805fb103a95))
- **payments:** RevenueCat 결제 시스템 개선 및 로깅 강화 ([f539cea](https://github.com/egoing/opentutorials-2/commit/f539cea48ff099272b3937a47d3c7bfc3a3783ac))

### Bug Fixes

- 결제 수단 변경은 ios, android 에선 플랫폼 와이드한 설정이기 때문에 구현 간소화를 위해서 일단 버튼을 배제 ([a248710](https://github.com/egoing/opentutorials-2/commit/a24871041afb7ccb3607514eae32b91705a25bb9))
- 결제처 번역 개선 ([33ebd58](https://github.com/egoing/opentutorials-2/commit/33ebd5816f71855057d4164abdda8325d3347e66))
- 구독상태를 상위 컴포넌트에서 호출해서 중복 실행을 막음 ([4dc473d](https://github.com/egoing/opentutorials-2/commit/4dc473d5b4f7f831197e0ddac757d04a9b439218))
- 슬래쉬 메뉴를 좌우로 펼쳐지게 개선 ([af31e20](https://github.com/egoing/opentutorials-2/commit/af31e2061b148ca231899b11a624a4815041858b))
- 슬래시 메뉴 선택 상태 스타일 개선 ([ffe9258](https://github.com/egoing/opentutorials-2/commit/ffe9258b76e151bbfcb743401e79e820caa3bb71))
- 중복되는 단체명 제거 ([5a6c838](https://github.com/egoing/opentutorials-2/commit/5a6c838d39187a34d9b16b66594c668f99af28c9))
- 홈화면 스타일 조정 ([fe08df4](https://github.com/egoing/opentutorials-2/commit/fe08df47bda178da21ee9feb920a34ce53502851))

### [0.5.118](https://github.com/egoing/opentutorials-2/compare/v0.5.117...v0.5.118) (2025-05-31)

### Bug Fixes

- ios에서 공개 페이지 링크가 열리지 않는 문제 해결 ([90c57f6](https://github.com/egoing/opentutorials-2/commit/90c57f630094f2c8266d95544c6fb6b71bbad201))

### [0.5.117](https://github.com/egoing/opentutorials-2/compare/v0.5.116...v0.5.117) (2025-05-31)

### Features

- ..본문 형식 지원 ([cae47f4](https://github.com/egoing/opentutorials-2/commit/cae47f4a99b38afccfd3d64abd1669c5175a1e50))

### [0.5.116](https://github.com/egoing/opentutorials-2/compare/v0.5.115...v0.5.116) (2025-05-31)

### Bug Fixes

- 자동저장 debounce 시스템 완전 재구축로 throttle 문제 해결 ([9a44ed9](https://github.com/egoing/opentutorials-2/commit/9a44ed93c0a6214a3b4c57e6abc77f303f06d96e))

### [0.5.115](https://github.com/egoing/opentutorials-2/compare/v0.5.114...v0.5.115) (2025-05-31)

### Bug Fixes

- 안드로이드에서 포맷을 지정하고 입력 후 엔터를 쳤을 때 내용이 삭제되는 문제를 해결하기 위해서 패치한 버전을 임시로 포함시킴 ([6bfd1bd](https://github.com/egoing/opentutorials-2/commit/6bfd1bd81ae03e4e3c0222d00fe2b57e9c9b40ea))

### [0.5.114](https://github.com/egoing/opentutorials-2/compare/v0.5.113...v0.5.114) (2025-05-30)

### Bug Fixes

- 저장 버튼 색상 변경 ([92e9fb8](https://github.com/egoing/opentutorials-2/commit/92e9fb808dd81b6b09de29619599bb48bafe69fc))

### [0.5.113](https://github.com/egoing/opentutorials-2/compare/v0.5.112...v0.5.113) (2025-05-30)

### Features

- **layout:** 편집기에서 하단 메뉴 숨김 처리 ([d8178bb](https://github.com/egoing/opentutorials-2/commit/d8178bb17d5e1b36e5ffe278f4200fd1f309ade5))
- **ui:** 레이아웃 구조 개선 및 UI 요소 위치 조정 ([fadd0d3](https://github.com/egoing/opentutorials-2/commit/fadd0d3ea6a39e34125b2f5f6d2667efba2a3e08))
- 개발환경 다중 도메인 지원 설정 추가 ([adb4341](https://github.com/egoing/opentutorials-2/commit/adb43418c765147cbc327bd1be814fc777d991a0))
- 다국어 처리 구조 개선 - props 전달 방식에서 개별 컴포넌트 처리 방식으로 변경 ([b4b17a7](https://github.com/egoing/opentutorials-2/commit/b4b17a7092250ef13a153cac824887bf68e741e1))
- 빠른 네비게이션 시스템 구현을 통한 페이지 전환 성능 최적화 ([aaf309f](https://github.com/egoing/opentutorials-2/commit/aaf309fcdf6e7a207c9224031ec463bd16b6746a))
- 편집 화면에 AI 채팅 바로가기 버튼 추가 ([1512fe9](https://github.com/egoing/opentutorials-2/commit/1512fe9b746d73e10848c041907c8bfdc3b3502c))

### Bug Fixes

- dynamic import를 일반 import로 변경하여 Next.js 15 SSR 오류 해결 ([b5f98ca](https://github.com/egoing/opentutorials-2/commit/b5f98ca23554ab488fac25ecd2dcfa0ba864941f))
- LoginedMain을 ssr:false로 처리하도록 개선 ([7e8dbf6](https://github.com/egoing/opentutorials-2/commit/7e8dbf609f7204fae87517f363171e1c1d3c4934))
- middleware.ts에서 내부 경로 제외 정규 표현식에 src/packages 추가 ([715d841](https://github.com/egoing/opentutorials-2/commit/715d841bac2c965cfdf1853822d1152fcaa7a497))
- middleware.ts에서 내부 경로를 제외하는 정규 표현식 업데이트 ([2454245](https://github.com/egoing/opentutorials-2/commit/2454245dfbc94841d013f838ba7905b23a141403))
- **Page:** verifyByLast 비교 로직의 null 안전성 보강 ([f39812e](https://github.com/egoing/opentutorials-2/commit/f39812ef9ae44151eee9be0f96c70e3abc8f3095))
- Safari에서 Top menu가 랜더링이 안되거나, 화면밖으로 삐져나가는 문제가 있어서 이를 강제로 업데이트 ([8c73e54](https://github.com/egoing/opentutorials-2/commit/8c73e54c827c32a74c643a94f9ab0b8b584e0286))
- Setting 컴포넌트 SSR 오류 해결 ([d93d64e](https://github.com/egoing/opentutorials-2/commit/d93d64e44e2eb410bf87086d9918d993dd0b46a4))
- Setting 컴포넌트 이중 dynamic import 제거로 SSR 오류 해결 ([0a5a84a](https://github.com/egoing/opentutorials-2/commit/0a5a84a89a481db620a6eec8cfa0ef2223f2a987))
- verifyByLast 함수의 null 안전성 보강 ([565945b](https://github.com/egoing/opentutorials-2/commit/565945bebbc2ef94e0c377cec9582e1fcb94e723))
- 메뉴가 열리면 저장 버튼이 사라지게 처리 ([069f10c](https://github.com/egoing/opentutorials-2/commit/069f10c42fd9b5a5dad74c826d6852df5254cac2))
- 불필요한 미들웨어 처리 제거 ([a5ba6c5](https://github.com/egoing/opentutorials-2/commit/a5ba6c539bfce13adf83e6153f930e5070148bf0))
- 불필요한 미들웨어 호출 제거 ([daa95e1](https://github.com/egoing/opentutorials-2/commit/daa95e16e1b7e9bdcab0c331dc2b432c5081b463))
- 샌트리 디버그 옵션 제거 ([5a8a549](https://github.com/egoing/opentutorials-2/commit/5a8a5490bd1c50817a31b7f9015fc94cdff7cf6a))
- 생성, 편집 모두 하단의 네비게이션 바 없앰 ([8df3451](https://github.com/egoing/opentutorials-2/commit/8df3451c0a34bbfbcefa702c98e98eb19ab906a9))
- 설정 컴포넌트 ssr 기능 비활성화 ([cdc040e](https://github.com/egoing/opentutorials-2/commit/cdc040e0bef59ad9bd661ba6a95288fbad5e8499))
- 안드로이드 키보드 오버레이 모드 비활성화 ([b14230f](https://github.com/egoing/opentutorials-2/commit/b14230f6fddccee6485429d685a2ca3e854498ae))
- 안쓰는 코드 제거 ([e93dde9](https://github.com/egoing/opentutorials-2/commit/e93dde92efdd3f1b7d4ff4d74160fa11af2bda3f))
- 에디터 열기 시 렌더링 문제 해결 및 CSS 최적화 속성 제거 ([3e2b81e](https://github.com/egoing/opentutorials-2/commit/3e2b81e4d45dfb75fcc83a44e92a364cdb1febcc))
- 저장 버튼 위치 조정 ([46b5f69](https://github.com/egoing/opentutorials-2/commit/46b5f69e3687cb1d6803a95ec488e546f5de1a59))
- 저장, 채팅 기능 투명도를 없앰 ([7de5ad8](https://github.com/egoing/opentutorials-2/commit/7de5ad8d98f6762b5dc48506f1087ef311943652))
- 제목만 저장했을 때 저장 버튼이 사라지는 문제 해결 ([653abd9](https://github.com/egoing/opentutorials-2/commit/653abd96935a83022b80f76d721d7e61174aac54))

### [0.5.112](https://github.com/egoing/opentutorials-2/compare/v0.5.111...v0.5.112) (2025-05-25)

### Bug Fixes

- blocknote placeholder의 레이블이 너무 흐리게 표시되는 문제 해결 ([039ef3a](https://github.com/egoing/opentutorials-2/commit/039ef3a294eee7a943315e4dc619e4125d320ead))

### [0.5.111](https://github.com/egoing/opentutorials-2/compare/v0.5.110...v0.5.111) (2025-05-25)

### Features

- add dev:turbo script for enhanced development workflow ([8cf3a37](https://github.com/egoing/opentutorials-2/commit/8cf3a37804451818e40440ea8e625ca919b0ef77))

### Bug Fixes

- blocknote placeholder 0.5로 투명도 상향 ([36644cc](https://github.com/egoing/opentutorials-2/commit/36644cc835bb138115da5c5852b26c58fa50c652))
- 채팅 상단 버튼 레이블 길이 줄임 ([de48356](https://github.com/egoing/opentutorials-2/commit/de4835642271b171e5e5a9d9af9d942f98466068))
- 편집화면에서 최초 저장 시 플레이스홀더 '제목'이 사라지는 문제 수정 ([ab71474](https://github.com/egoing/opentutorials-2/commit/ab71474ca5a7af7be667770e50a4c43642a49b8a))

### [0.5.110](https://github.com/egoing/opentutorials-2/compare/v0.5.109...v0.5.110) (2025-05-25)

### Features

- 자동 저장 기능 구현 ([b77a24b](https://github.com/egoing/opentutorials-2/commit/b77a24bb09ede6015245aa17ede309c9ca6ad784))
- 편집기에서 100글자 이상 시 자동 임베딩 처리 구현 ([07e3468](https://github.com/egoing/opentutorials-2/commit/07e3468698bf8e9e0fc42a9f65c5bee0dc0d5c9f))

### Bug Fixes

- blocknote의 placeholder를 좀 더 투명하게 처리 ([79128fa](https://github.com/egoing/opentutorials-2/commit/79128fa76d6ce3918533e77ac01bac2d7e47019c))
- sentry client 활성화 ([6373f15](https://github.com/egoing/opentutorials-2/commit/6373f1556badfce542f3266c25bd1bb8013221c7))
- 불필요한 파일 제거 ([a9f8784](https://github.com/egoing/opentutorials-2/commit/a9f8784019e7d474c227f878211dc8b5db83adec))

### [0.5.109](https://github.com/egoing/opentutorials-2/compare/v0.5.108...v0.5.109) (2025-05-24)

### Bug Fixes

- 편집창 하단에 공간을 추가해서 모바일 환경에서 키보드가 편집화면을 가리지 않도록 처리 ([0c78fb7](https://github.com/egoing/opentutorials-2/commit/0c78fb79fbe837ba10e99ec7dd684daea5bbef2d))

### [0.5.108](https://github.com/egoing/opentutorials-2/compare/v0.5.107...v0.5.108) (2025-05-24)

### Bug Fixes

- watermelondb의 loki 자동 저장 기능을 재활성화. ([7ef9c03](https://github.com/egoing/opentutorials-2/commit/7ef9c03d76ba61d93e91c9ff1e5d093cfa6b0956))

### [0.5.107](https://github.com/egoing/opentutorials-2/compare/v0.5.106...v0.5.107) (2025-05-23)

### Bug Fixes

- 자동 제목 기능에서 제목을 가급적 생성해주도록 개선 ([39e7d0f](https://github.com/egoing/opentutorials-2/commit/39e7d0f1c8156f4f96358dd3cd823d013fc11612))
- 편집 화면에서 좌우로 스크롤 되지 않도록 처리 ([b324391](https://github.com/egoing/opentutorials-2/commit/b32439143b04cdad073aa300cb599a77c4e221c4))

### [0.5.106](https://github.com/egoing/opentutorials-2/compare/v0.5.105...v0.5.106) (2025-05-21)

### Bug Fixes

- 센트리가 safari에서 프리징을 유발하고 있을 가능성이 있어서 임시로 비활성화 함. ([945a0ff](https://github.com/egoing/opentutorials-2/commit/945a0ffed964762a45c9fed60cf41077c0a4e669))

### [0.5.105](https://github.com/egoing/opentutorials-2/compare/v0.5.104...v0.5.105) (2025-05-20)

### Features

- **ai:** 자동 제목 생성 기능 개선 및 목록 새로고침 로직 추가 ([0e5646d](https://github.com/egoing/opentutorials-2/commit/0e5646d1211ba70626080f196b395935c9b3f229))

### [0.5.104](https://github.com/egoing/opentutorials-2/compare/v0.5.103...v0.5.104) (2025-05-20)

### Bug Fixes

- 무료 사용자 한도 초과를 10초 후에 표시 ([9b0cd99](https://github.com/egoing/opentutorials-2/commit/9b0cd99519fdf84af899d99614b9874e49dc860d))

### [0.5.103](https://github.com/egoing/opentutorials-2/compare/v0.5.102...v0.5.103) (2025-05-20)

### Features

- BlockNote 에디터에서 figure 태그를 img 태그로 자동 변환 ([b21c053](https://github.com/egoing/opentutorials-2/commit/b21c0535fb35e64398c399f465fb125955319c50))
- 무료 사용량 초과 안내 및 프로필 클릭 결제 이동 UX 개선 ([58163ff](https://github.com/egoing/opentutorials-2/commit/58163ffc16add0ea336ab1e7564ab4a78ae03e9b))

### Bug Fixes

- 맞춤법 검사 기능 비활성화 ([c52fce9](https://github.com/egoing/opentutorials-2/commit/c52fce9b6add8a00480c2152ce7a44d264cf8351))
- 본문 수정 내용이 다음 진입 때 반영되지 않는 문제 처리 ([89e858f](https://github.com/egoing/opentutorials-2/commit/89e858f82a8d02de75c88a934fc0337467173b83))
- 자동 제목 생성 시 마땅치 않으면 '제목없음' ([dfd0c7c](https://github.com/egoing/opentutorials-2/commit/dfd0c7c4bd19b9768f6c38e9d34caf9d9a24f311))

### [0.5.102](https://github.com/egoing/opentutorials-2/compare/v0.5.101...v0.5.102) (2025-05-20)

### [0.5.101](https://github.com/egoing/opentutorials-2/compare/v0.5.100...v0.5.101) (2025-05-20)

### Bug Fixes

- 소스맵을 노출되도록 처리 ([c711d82](https://github.com/egoing/opentutorials-2/commit/c711d82498bf3c97ce276150ed37cad357ed495d))

### [0.5.100](https://github.com/egoing/opentutorials-2/compare/v0.5.99...v0.5.100) (2025-05-20)

### Bug Fixes

- deploy 시에 dev도 push 되도록 처리 ([c2bc8ab](https://github.com/egoing/opentutorials-2/commit/c2bc8abb1d8df4a67858a8afc9d76ccc64ecbf60))

### [0.5.99](https://github.com/egoing/opentutorials-2/compare/v0.5.98...v0.5.99) (2025-05-20)

### Bug Fixes

- 로그인 풀림 체크 로직이 프리징을 유발할 가능성이 있어서 주석처리 함 ([e3ce369](https://github.com/egoing/opentutorials-2/commit/e3ce369c1fd1aef9da6eb85e4720b25fe6d5bc25))

### [0.5.98](https://github.com/egoing/opentutorials-2/compare/v0.5.96...v0.5.98) (2025-05-20)

### [0.5.96](https://github.com/egoing/opentutorials-2/compare/v0.5.95...v0.5.96) (2025-05-19)

### Bug Fixes

- hotjar 제거 ([25890a0](https://github.com/egoing/opentutorials-2/commit/25890a02e7887497f66f7b53ec91580b27230276))

### [0.5.95](https://github.com/egoing/opentutorials-2/compare/v0.5.94...v0.5.95) (2025-05-19)

### Features

- 무료 사용량 초과 메시지 다시 보지 않기 기능 추가 ([f8fa387](https://github.com/egoing/opentutorials-2/commit/f8fa38741a12677af1c859c1dd39a6d3b5cc7477))
- 파일 업로더 로깅 기능 강화 및 에디터 컨텍스트 관리 개선 ([273552a](https://github.com/egoing/opentutorials-2/commit/273552a3d4e90b819f7741e484f1c39ce0dc23bb))

### Bug Fixes

- BlockNoteEditor HTML 파싱 예외 처리 기능 추가 ([03fdbda](https://github.com/egoing/opentutorials-2/commit/03fdbda0e6f8e0081c01ae53332dae10fe59a498))
- navigator.storage.estimate API 지원 여부 검증 로직 추가 ([417fb8c](https://github.com/egoing/opentutorials-2/commit/417fb8c23ecc31309018fb7081b1d49acea37bff))
- uploader 테마에 따라서 색상이 변경되도록 개선 ([32aec0a](https://github.com/egoing/opentutorials-2/commit/32aec0a576eca698ef0cce628f40c2109a4c964e))
- 검색 결과에서 상세보기 페이지 뒤로가기 버튼 동작 개선 ([f12b820](https://github.com/egoing/opentutorials-2/commit/f12b820933dbca0b9c015ae05b93a7b054b7e8e7))
- 동기화 로직 개선 및 디버그 로그 강화 ([55c3eae](https://github.com/egoing/opentutorials-2/commit/55c3eae4134e6f1f953014f2c7d7b744ae341f5d))
- 로딩 스패너를 제거해서 번잡스러움을 줄임 ([ab0fc48](https://github.com/egoing/opentutorials-2/commit/ab0fc48ab7a9cfd8da66fc844eb70745454cd98b))
- 사용량 관련 공지시 backdrop 클릭으로 닫힘 방지 ([c948cc1](https://github.com/egoing/opentutorials-2/commit/c948cc17b65b31d205d465eb577b68ab34cbee23))
- 사용량 제한 메시지 내의 시간 표시 형식을 지역 중립적인 형식으로 변경 ([c711b0a](https://github.com/egoing/opentutorials-2/commit/c711b0ad0b022d00a1d2d719b323d4e0ac3a60a1))
- 안드로이드 기기에서 붙여넣기 기능 개선 ([f8fa679](https://github.com/egoing/opentutorials-2/commit/f8fa6791dccc41dad3e2304964e0caf5e97cd26d))
- 업그레이드 독려 다국어 개선 ([4e1cd89](https://github.com/egoing/opentutorials-2/commit/4e1cd89f711125477a0b89524197a1cc6b1aacaa))
- 저장 버튼의 투명도 조정 ([2bf7cba](https://github.com/egoing/opentutorials-2/commit/2bf7cba253511fcebd5d017a4efe60e9d5eeff17))

### [0.5.94](https://github.com/egoing/opentutorials-2/compare/v0.5.93...v0.5.94) (2025-05-17)

### Bug Fixes

- document is not defined 오류 완전히 해결 ([e6bc0d7](https://github.com/egoing/opentutorials-2/commit/e6bc0d7bf2881d160d2928884936b98740c08390))
- 페이지 공개 상태 확인 시 데이터 없음 처리 추가 ([8e0e047](https://github.com/egoing/opentutorials-2/commit/8e0e0473842556a471d60e850422b076c8b03143))
- 편집 화면의 버튼(공유, 삭제등)이 생성 모드 일 때 비활성화되도록 개선 ([ad5b830](https://github.com/egoing/opentutorials-2/commit/ad5b8306d1c50c0972973e68d683968ec2400ce9))

### [0.5.93](https://github.com/egoing/opentutorials-2/compare/v0.5.92...v0.5.93) (2025-05-16)

### Bug Fixes

- 공유 페이지 캐시 재검토 및 재검증 주기 변경 ([f3dac85](https://github.com/egoing/opentutorials-2/commit/f3dac85d27d9b3dac938a76479cbb5db4d842aab))

### [0.5.92](https://github.com/egoing/opentutorials-2/compare/v0.5.91...v0.5.92) (2025-05-16)

### [0.5.91](https://github.com/egoing/opentutorials-2/compare/v0.5.90...v0.5.91) (2025-05-16)

### Features

- **share:** 페이지 공유 기능 개선 및 로깅 강화 ([d807847](https://github.com/egoing/opentutorials-2/commit/d8078475af8386113902b2f8a66f820713aa4aea))

### Bug Fixes

- 공유 페이지 오류 처리 개선 및 다국어 지원 강화 ([7a2218a](https://github.com/egoing/opentutorials-2/commit/7a2218a9bf690262544d66430281e80f212188f7))
- 업로더 로딩 스피너 개선 ([b2c06a6](https://github.com/egoing/opentutorials-2/commit/b2c06a6735ed180f74005655069927f4d67e529e))

### [0.5.90](https://github.com/egoing/opentutorials-2/compare/v0.5.89...v0.5.90) (2025-05-16)

### Bug Fixes

- FileUploader 컴포넌트의 조건부 렌더링 로직 제거 ([b27b605](https://github.com/egoing/opentutorials-2/commit/b27b6059b616aa5cfe2ddb8c272454b161f3a807))
- 자동 제목 생성 기능 제거 및 즉각적인 제목 설정 방식 도입 ([50be29e](https://github.com/egoing/opentutorials-2/commit/50be29e720cceb0a6838f38df4998adfe369140d))

### [0.5.89](https://github.com/egoing/opentutorials-2/compare/v0.5.88...v0.5.89) (2025-05-15)

### [0.5.88](https://github.com/egoing/opentutorials-2/compare/v0.5.87...v0.5.88) (2025-05-15)

### [0.5.87](https://github.com/egoing/opentutorials-2/compare/v0.5.86...v0.5.87) (2025-05-15)

### Features

- node -> bun으로 교체 ([bea7a6c](https://github.com/egoing/opentutorials-2/commit/bea7a6cc52f6c636d2e98d7f935f22db0cea19c4))
- **watermelondb:** 0.28.0으로 업그레이드 및 모델 타입 명시 개선 ([8f25512](https://github.com/egoing/opentutorials-2/commit/8f25512285d13de1c55ab610974ab8423b6175d7))
- 동기화 처리 개선을 위한 debounce 옵션 변경 ([3484160](https://github.com/egoing/opentutorials-2/commit/3484160e65d326eedbb19191c3906eb3ce8ec366))
- 미들웨어 API 호출 방식 개선 ([ac203e4](https://github.com/egoing/opentutorials-2/commit/ac203e487f615b8c022530461eed347607483089))

### Bug Fixes

- AI 제목 생성 프롬프트 개선 ([4c4f776](https://github.com/egoing/opentutorials-2/commit/4c4f776982fb9468104dd0848cf5c1dacf330b8f))
- bun으로 개발환경 구축하는 방법 readme.md에 반영 ([5a9ff95](https://github.com/egoing/opentutorials-2/commit/5a9ff9586cd0819ff0f879675f7fffa08a33c9b0))
- turbopack 도입 ([cdeaeb1](https://github.com/egoing/opentutorials-2/commit/cdeaeb1c2a5d73802b517eddea615eb870329b0b))
- 저장 버튼의 z-index를 채팅 창 아래로 이동 ([0569702](https://github.com/egoing/opentutorials-2/commit/0569702d0f77cd8f952eab96dbdc3c6daaac7b06))
- 채팅 UI는 항상 로드 되도록 처리 ([f799944](https://github.com/egoing/opentutorials-2/commit/f799944033ef040ef1492f0a008c6586dd838160))

### [0.5.86](https://github.com/egoing/opentutorials-2/compare/v0.5.85...v0.5.86) (2025-05-12)

### Features

- **uploader:** 글로벌 이벤트 및 Jotai 컨텍스트로 에디터 삽입 모드 지원 추가 ([7fe5f37](https://github.com/egoing/opentutorials-2/commit/7fe5f3734231ecaede4b430c7a798d8c325500a8))

### [0.5.85](https://github.com/egoing/opentutorials-2/compare/v0.5.84...v0.5.85) (2025-05-12)

### Bug Fixes

- blocknote 0.29.1 -> 3.0 업그레이드 ([0a2350f](https://github.com/egoing/opentutorials-2/commit/0a2350fd9103638e7e4786b946d6da742146c480))
- 저장 버튼이 활성화가 안되는 문제 처리 ([371be9e](https://github.com/egoing/opentutorials-2/commit/371be9eccf5ce6659d6abd116272ad4b72ebfd21))
- 코드 하이라이터 기능 추가 ([f0c15a7](https://github.com/egoing/opentutorials-2/commit/f0c15a741ff4dbae42a7b0ac8f8ad3057e34cf15))

### [0.5.84](https://github.com/egoing/opentutorials-2/compare/v0.5.83...v0.5.84) (2025-05-12)

### [0.5.83](https://github.com/egoing/opentutorials-2/compare/v0.5.82...v0.5.83) (2025-05-12)

### Features

- bun 도입 ([ac2ae6d](https://github.com/egoing/opentutorials-2/commit/ac2ae6d750addcca0a9a72abf19daada178ef32b))
- 동기화 함수의 중복 호출 처리 방식 개선 ([68540bd](https://github.com/egoing/opentutorials-2/commit/68540bd0408093f98cd5952dd68552a8b52d7a84))

### Bug Fixes

- 'use server' 파일에서 기본 내보내기 문제 해결 ([c9b06e5](https://github.com/egoing/opentutorials-2/commit/c9b06e56b73d763b0e59bf139ab0cad171424643))
- API 호출 시 발생하는 사용량 계산 오류 수정 ([3dc44fe](https://github.com/egoing/opentutorials-2/commit/3dc44fe06457e858a9299da9680e2bd359cee7b0))
- bun 사용법 반영 ([d76a81c](https://github.com/egoing/opentutorials-2/commit/d76a81c028e23053f6bc8f72a074d76a4ff524bc))
- Grid 컴포넌트에서 중복된 selectionIcon JSX 제거 ([fa531b5](https://github.com/egoing/opentutorials-2/commit/fa531b5fef1b1b06a006902e225fd46f6b9ce5d5))
- Next.js 15 호환성 문제 해결 ([4ec9eae](https://github.com/egoing/opentutorials-2/commit/4ec9eaef559207baa5f704f245671fa2cd0f0756))
- Next.js 15 호환성 문제 해결 ([63654ae](https://github.com/egoing/opentutorials-2/commit/63654ae564f3bfe06f4ea4a0eb56fd4a38565300))
- 강제 디버깅 제거 ([48a7976](https://github.com/egoing/opentutorials-2/commit/48a79763a25fe5f774e2fba2c49089be3bcf4019))
- 리마인더 기능은 당분간 비활성화 ([b164053](https://github.com/egoing/opentutorials-2/commit/b1640536d99430a6d7c3fd99a1ade576a8d4f335))
- 쓰지 않는 모듈 제거 ([d6413a3](https://github.com/egoing/opentutorials-2/commit/d6413a3c6855149ad33cf05f8ce20b21e147a566))

### [0.5.82](https://github.com/egoing/opentutorials-2/compare/v0.5.81...v0.5.82) (2025-05-11)

### Bug Fixes

- iOS Safari에서 BlockNote 메뉴 드롭다운 표시 문제 해결 ([fdeb6a6](https://github.com/egoing/opentutorials-2/commit/fdeb6a63427ff4d69953f596136b306cd7ae8cc4))

### [0.5.81](https://github.com/egoing/opentutorials-2/compare/v0.5.80...v0.5.81) (2025-05-11)

### Features

- 버튼 텍스트 다국어 처리 및 용어 통일 ([412f369](https://github.com/egoing/opentutorials-2/commit/412f36905ba92306453bb9f19b374716da5cec42))

### Bug Fixes

- 사진 뒤에 공백을 추가해서 가상 키보드가 켜지는 문제 회피 ([cf4fd2c](https://github.com/egoing/opentutorials-2/commit/cf4fd2c1e56fac37033407b6c32f4aae4c0a38ce))

### [0.5.80](https://github.com/egoing/opentutorials-2/compare/v0.5.79...v0.5.80) (2025-05-10)

### Features

- 간단메모 연속 입력 제한 기능 개선 ([fbbc3ba](https://github.com/egoing/opentutorials-2/commit/fbbc3ba868a9d173bf549c637788a0aac06cf02e))
- 프로필 변경 후 발행 시 프로필 설정창 자동 닫힘 구현 ([565cb27](https://github.com/egoing/opentutorials-2/commit/565cb2776c136bdc53e92eeaf3d671023057206b))

### [0.5.79](https://github.com/egoing/opentutorials-2/compare/v0.5.78...v0.5.79) (2025-05-10)

### Features

- 최초 동기화 완료 시 리로드하여 데이터 정합성 보장 ([f59bfd9](https://github.com/egoing/opentutorials-2/commit/f59bfd96e997718aa6bd3fa1deb5359ccdcc0fec))

### Bug Fixes

- 그리드 목록의 제목이 선택 가능하게 변경 ([6a1459a](https://github.com/egoing/opentutorials-2/commit/6a1459a1526b4f5168f345fa46a1777428f65ab5))

### [0.5.78](https://github.com/egoing/opentutorials-2/compare/v0.5.77...v0.5.78) (2025-05-09)

### Features

- 상단 헤더 UI 개선 및 safe-area-inset 적용 ([c24ab36](https://github.com/egoing/opentutorials-2/commit/c24ab36bf2698553c59d93409ce04ac6d5b2347c))

### Bug Fixes

- 뒤로가기 버튼 아이콘 변경 ([aed214b](https://github.com/egoing/opentutorials-2/commit/aed214be1ac151c14da321b3bef8d7792925d39c))
- 모바일에서 상단 박스 테두리 제거 ([859c095](https://github.com/egoing/opentutorials-2/commit/859c095242d0c6c63b5b0067867c7026d659d2bb))
- 본문 버튼과 날짜를 같은 행에 배치 ([887dcf9](https://github.com/egoing/opentutorials-2/commit/887dcf9d35cfa35fa2c03ceb382b9f4be4c9f9ee))
- 제목과 하단 메뉴 구분선을 더 흐리게 처리 ([7e9ef36](https://github.com/egoing/opentutorials-2/commit/7e9ef36ad24d130c6ceff861b3da5a773ae7c639))

### [0.5.77](https://github.com/egoing/opentutorials-2/compare/v0.5.76...v0.5.77) (2025-05-09)

### [0.5.76](https://github.com/egoing/opentutorials-2/compare/v0.5.75...v0.5.76) (2025-05-09)

### Features

- 검색어 레이블 위치 변경 및 표시 조건 개선 ([c989952](https://github.com/egoing/opentutorials-2/commit/c9899523ef4e4a566f9982710c428ec33630bc9e))
- 편집/검색 모드일 때 뒤로가기 버튼 추가 ([5dc37c0](https://github.com/egoing/opentutorials-2/commit/5dc37c083a253bb2065983b7bf4a2ec3decdf544))

### Bug Fixes

- 검색 조건이 홈 이동 시 초기화되지 않는 문제 해결 ([d0330ad](https://github.com/egoing/opentutorials-2/commit/d0330ad56cc1892793a5aab06e936f549d745855))
- 배포 스크립트 이름 변경 ([58ec6a2](https://github.com/egoing/opentutorials-2/commit/58ec6a26f266c9d7883d4056ccbc6807490b4881))
- 페이지 전환 시 isModified 상태 관리 개선 ([2ceea1c](https://github.com/egoing/opentutorials-2/commit/2ceea1cc033bed3a4f9af2a150964971e2c555aa))

### [0.5.75](https://github.com/egoing/opentutorials-2/compare/v0.5.74...v0.5.75) (2025-05-09)

### Features

- loading 관련 코드 제거 ([411e095](https://github.com/egoing/opentutorials-2/commit/411e0952245b8ce9276f1294f6e366f38b8ef6aa))
- LoginedMain의 contents 상태를 immer로 교체 ([72b0955](https://github.com/egoing/opentutorials-2/commit/72b095576b40ce5b7dea5c7dc23e814e50333c34))
- pagination 상태에 immer 적용 ([082ba87](https://github.com/egoing/opentutorials-2/commit/082ba87aa75b87d8f0d2e7af9873eee5d3abc34a))

### Bug Fixes

- currentPage 관련된 상태를 immer로 변경 ([cecb033](https://github.com/egoing/opentutorials-2/commit/cecb033957002ef7c1ea7afa23f93934b3661a85))
- determineContentsAndPaginationPolicy 에서 currentContents 제거 ([0c3da78](https://github.com/egoing/opentutorials-2/commit/0c3da787cc1e7509be880f9c6869f36b890df3a4))
- LoginedMainComponent에서 finally 블록 추가 ([83bdeb3](https://github.com/egoing/opentutorials-2/commit/83bdeb38ab9f27ac1a170c9fb8ff7b721c88ee50))
- vercel speed insight 관련 코드 제거 ([5d0e214](https://github.com/egoing/opentutorials-2/commit/5d0e2145e0cf5c23739e744390271594e0c709d8))
- 안쓰는 함수 제거 ([54269a5](https://github.com/egoing/opentutorials-2/commit/54269a5ee0f78ea8a374fbd72ca229c51914ddab))

### [0.5.74](https://github.com/egoing/opentutorials-2/compare/v0.5.73...v0.5.74) (2025-05-08)

### [0.5.73](https://github.com/egoing/opentutorials-2/compare/v0.5.72...v0.5.73) (2025-05-08)

### [0.5.72](https://github.com/egoing/opentutorials-2/compare/v0.5.71...v0.5.72) (2025-05-08)

### Features

- 컴포넌트 렌더링 최적화 ([4214922](https://github.com/egoing/opentutorials-2/commit/42149222afc89043ce8dba9af79a042dffdab52a))

### Bug Fixes

- ContentList 랜더링 상태 확인 로직 추가 ([108c0ea](https://github.com/egoing/opentutorials-2/commit/108c0ea4b508064ce1b1e6fa7ced990a30ef3dd4))
- LoginedMain 컴포넌트의 무한 루프 방지를 위한 코드 구조 개선 ([f1e3a8e](https://github.com/egoing/opentutorials-2/commit/f1e3a8e6a5f059e66847a1ef57069515f1f7ab0f))

### [0.5.71](https://github.com/egoing/opentutorials-2/compare/v0.5.70...v0.5.71) (2025-05-08)

### Features

- 로그 출력 시 색상 정보 제거 및 텍스트 기반 가독성 개선 ([74facf3](https://github.com/egoing/opentutorials-2/commit/74facf3f5c96cfc1aae679331fba671ae82fb8ca))

### [0.5.70](https://github.com/egoing/opentutorials-2/compare/v0.5.69...v0.5.70) (2025-05-08)

### Bug Fixes

- 연속 호출 감지 로직 강화 ([95b8190](https://github.com/egoing/opentutorials-2/commit/95b8190c6c9612d16ed9f470fc23896d4acc38f7))

### [0.5.69](https://github.com/egoing/opentutorials-2/compare/v0.5.68...v0.5.69) (2025-05-08)

### Features

- **haptic:** 크로스 플랫폼 햅틱 피드백 유틸 추가 및 사용법 업데이트 ([4382a45](https://github.com/egoing/opentutorials-2/commit/4382a45ae2bdcfafc072d8395e18e9755d04dfd3))
- 함수 연속 호출 감지 및 센트리 리포팅 유틸리티 추가 ([0ca1b3b](https://github.com/egoing/opentutorials-2/commit/0ca1b3b6ddc62ad5b65373ba33d0126e5c1ccdd7))

### Bug Fixes

- createUpdate는 항상 사용하는 로직이기 때문에 suspense가 필요 없음 ([a820e22](https://github.com/egoing/opentutorials-2/commit/a820e22a18c24420456f694af6b9a9fdb3286c05))
- 랜더링 이슈를 파악하기 위해서 참조 변경과 내용 변경을 구분해서 출력하도록 개선 ([c2a5985](https://github.com/egoing/opentutorials-2/commit/c2a59858e32e0918150c75eaec09b666d14897d3))
- 사용하지 않는 코드 제거 ([b33d9a9](https://github.com/egoing/opentutorials-2/commit/b33d9a9d9c3ebd8c25caca3303e1b1c1ee6bede4))

### [0.5.68](https://github.com/egoing/opentutorials-2/compare/v0.5.67...v0.5.68) (2025-05-07)

### Features

- 렌더링 로그 성능 최적화 ([0847e18](https://github.com/egoing/opentutorials-2/commit/0847e186313c3249bec8dca42cbb63a359f421d1))

### Bug Fixes

- enhancedRenderLogger 주석추가 ([9b568c4](https://github.com/egoing/opentutorials-2/commit/9b568c43ab7dee1751a3edae39b794d08066e931))
- sentry trace 빈도 낮추기 ([2844e36](https://github.com/egoing/opentutorials-2/commit/2844e36f2ff8c165c50da7667215d04ab511b745))
- 랜더링 시에 어떤 부분이 달라졌는지 확인할 수 있는 로그 추가 ([5ecd28e](https://github.com/egoing/opentutorials-2/commit/5ecd28e75b716acc2fb32223177f82ed9eda803e))
- 안드로이드에서 편집 화면을 빠져나갈 때 가상 키보드가 잠깐 실행되서 레이아웃이 깨지고 추가적인 자원을 사용하는 문제 해결 ([6c55c8b](https://github.com/egoing/opentutorials-2/commit/6c55c8b4d4bab72d044ab82b93a9d9582cce370b))
- 인터콤 스크립트가 고객센터를 클릭했을 때 다운로드 되도록 개선 ([215c1ce](https://github.com/egoing/opentutorials-2/commit/215c1cee86946d99ea09967e1092c6061ef015a8))

### [0.5.67](https://github.com/egoing/opentutorials-2/compare/v0.5.66...v0.5.67) (2025-05-05)

### Bug Fixes

- 저장 없이 페이지를 나가려고 할 때 응이라고 하면 isModifed를 false로 지정해서 이후 리로드 차단 방지 ([ab3059c](https://github.com/egoing/opentutorials-2/commit/ab3059cc29757797407e407b1d7b6481d229c6f6))

### [0.5.66](https://github.com/egoing/opentutorials-2/compare/v0.5.65...v0.5.66) (2025-05-05)

### [0.5.65](https://github.com/egoing/opentutorials-2/compare/v0.5.64...v0.5.65) (2025-05-05)

### Bug Fixes

- hidden 제거 ([1d679ac](https://github.com/egoing/opentutorials-2/commit/1d679ac09988405330f6448df051408158a4c6f0))
- 그리드, 하단 네비게이션 클릭시 작아지는 물리 효과 추가 ([5f8a92d](https://github.com/egoing/opentutorials-2/commit/5f8a92d1eaec4d193da26f5976e6c22438a5238a))
- 인터콤 관련 중복 로직 제거 ([e660086](https://github.com/egoing/opentutorials-2/commit/e6600865a19c5d30a11cf7713b9de209b8a03383))
- 편집 모드로 접근할 때 잠시 쓰지 않은 상태로 변경되는 문제 처리 ([7c15275](https://github.com/egoing/opentutorials-2/commit/7c1527518725569b56828d6afc6f4a2461a7a154))
- 편집중인 사용자 이탈 방지 기능 추가 및 개선 ([db25eaa](https://github.com/egoing/opentutorials-2/commit/db25eaaa2d6ad6e7b836a993f2cf89eb16253745))
- 홈 화면의 버튼들 눌림 효과 적용 ([91f6cfd](https://github.com/egoing/opentutorials-2/commit/91f6cfd1a86746f6078edb5080ad517d04e3fd78))

### [0.5.64](https://github.com/egoing/opentutorials-2/compare/v0.5.63...v0.5.64) (2025-05-04)

### [0.5.63](https://github.com/egoing/opentutorials-2/compare/v0.5.62...v0.5.63) (2025-05-04)

### Features

- 안드로이드 다운 이슈의 원인을 파악하기 위해서 pwa를 당분간 비활성화 ([5199be1](https://github.com/egoing/opentutorials-2/commit/5199be19b47223c321c57f2b9850117ba80ac3de))

### Bug Fixes

- 알람 스케줄 백엔드 임시 폐쇄 ([3cc0108](https://github.com/egoing/opentutorials-2/commit/3cc0108aecd64957886c29894cdce028a620225f))

### [0.5.62](https://github.com/egoing/opentutorials-2/compare/v0.5.61...v0.5.62) (2025-05-04)

### Bug Fixes

- 본문 내의 테이블 hr 태그 스타일 및 수평 스크롤 개선 ([5826656](https://github.com/egoing/opentutorials-2/commit/58266566e091aa4da50ddec60d1ad1e6101014a6))
- 본문과 채팅의 표 스타일 개선 ([e79af30](https://github.com/egoing/opentutorials-2/commit/e79af300a01ea31f0393f530942da02baf789f44))
- 본문이 변경 되었는데 다시 돌아왔을 때 예전 정보를 보여주는 문제 처리 ([11a8e0e](https://github.com/egoing/opentutorials-2/commit/11a8e0e25000b8c113fa129fb87f44a19b9dec26))
- 에디터 이미지 라운드 제거 ([6b44a4a](https://github.com/egoing/opentutorials-2/commit/6b44a4aa689058e143db7817200166752e5f1770))
- 하단 메인 메뉴 버튼 수직 가운데로 정렬 ([bd48e1b](https://github.com/egoing/opentutorials-2/commit/bd48e1bce35f83f196e2d1dde3c6ee0130280673))

### [0.5.61](https://github.com/egoing/opentutorials-2/compare/v0.5.60...v0.5.61) (2025-05-04)

### Bug Fixes

- fileUploader 랜더링 함수 내에서 다른 컴포넌트의 랜더링을 유발하는 코드를 제거 ([0a50bbf](https://github.com/egoing/opentutorials-2/commit/0a50bbf1547f080db27c069893a90c0f30f74359))
- 이미지 업로드 후 done을 하면 컴포넌트가 unmount 되면서 fetch가 중지되는데 마운트 후에는 언마운트 되지 않도록 처리해서 fetch가 중지되지 않게 개선 ([8ebf69d](https://github.com/egoing/opentutorials-2/commit/8ebf69d478831ac9a96ef4301317091262b56f1f))
- 파일 업로드 후 자동 제목을 생성할 때 로딩 에니메이션이 실행되도록 처리 ([2cdea9f](https://github.com/egoing/opentutorials-2/commit/2cdea9fb8cc68940131ad96bcd102aa9354ccc12))

### [0.5.60](https://github.com/egoing/opentutorials-2/compare/v0.5.59...v0.5.60) (2025-05-04)

### Bug Fixes

- 에디터를 사전에 로딩해서 로딩 시간 줄임 ([76386cb](https://github.com/egoing/opentutorials-2/commit/76386cb4ab3d457f13a4810c41d152a7e48c4ad0))

### [0.5.59](https://github.com/egoing/opentutorials-2/compare/v0.5.58...v0.5.59) (2025-05-04)

### [0.5.58](https://github.com/egoing/opentutorials-2/compare/v0.5.57...v0.5.58) (2025-05-04)

### Bug Fixes

- 디버거 모드가 켜졌을 때 웹페이지를 리로드 ([90944b9](https://github.com/egoing/opentutorials-2/commit/90944b9451b638d8427220d348afd9062024029b))
- 코드블록이 프리징의 원인으로 추정 되서 기능 비활성화 ([911e4dc](https://github.com/egoing/opentutorials-2/commit/911e4dc7644d31f8a68955af7c227747f18feac6))

### [0.5.57](https://github.com/egoing/opentutorials-2/compare/v0.5.56...v0.5.57) (2025-05-04)

### Bug Fixes

- fps 모니터링 기능 추가 ([b800e4e](https://github.com/egoing/opentutorials-2/commit/b800e4eea61e293b65e66147a944c31ff729ebc2))

### [0.5.56](https://github.com/egoing/opentutorials-2/compare/v0.5.55...v0.5.56) (2025-05-03)

### Bug Fixes

- 버전을 복수로 체크하는 문제 해결 및 강제 캐쉬 스토리지 갱신 로직 추가 ([599c337](https://github.com/egoing/opentutorials-2/commit/599c33706a4cfcc668d146f47d050e66d6965ee2))

### [0.5.55](https://github.com/egoing/opentutorials-2/compare/v0.5.54...v0.5.55) (2025-05-03)

### Bug Fixes

- 캐쉬를 삭제할때 모두 삭제하도록 처리 ([5386051](https://github.com/egoing/opentutorials-2/commit/53860512009203a9b563a115aa51fa6d33b25ed9))

### [0.5.54](https://github.com/egoing/opentutorials-2/compare/v0.5.53...v0.5.54) (2025-05-03)

### Bug Fixes

- service worker 작동 테스트 ([b4b0347](https://github.com/egoing/opentutorials-2/commit/b4b0347f011794ec4d553afcf624527db134b131))

### [0.5.53](https://github.com/egoing/opentutorials-2/compare/v0.5.52...v0.5.53) (2025-05-03)

### Features

- layout 컴포넌트에서 조건부 lazy loading 최적화 ([46f336c](https://github.com/egoing/opentutorials-2/commit/46f336c22d0855c6c5b9f1e64b0787bc75463af2))
- Sentry 프로파일링 샘플러 추가 및 캐시 최대 연령 변경 ([1e01fd2](https://github.com/egoing/opentutorials-2/commit/1e01fd21b34b22117502b0aea5cbdf8a997627ad))

### Bug Fixes

- 5번 클릭시 캐쉬 삭제 ([62d0548](https://github.com/egoing/opentutorials-2/commit/62d0548e90140916a706b40efcc428326a1aa99a))
- 로그아웃 상태에서 화면에 표시되지 않는 로그인 버튼 고침 ([429e15d](https://github.com/egoing/opentutorials-2/commit/429e15d62e630eb3ce23496603967f17ce506937))
- 버전 체크 엔드포인트 캐쉬를 금지시켜서 버전 정보를 잘못 가져오는 문제 방지 ([ce954ba](https://github.com/egoing/opentutorials-2/commit/ce954ba760410ea42102cae87fb64f850ffbadcb))
- 불필요한 캐쉬를 제거하고, 누락된 캐쉬추가 ([b6d2c97](https://github.com/egoing/opentutorials-2/commit/b6d2c97e3c36f1251a81368057f33fda48ff7ca2))
- 썸네일 원본 URL에 preview가 이미 들어가 있어서 중복해서 preview가 추가 되는 문제 제거 ([1f2a85d](https://github.com/egoing/opentutorials-2/commit/1f2a85ddf080df210a015be7a0e77899fc721f13))
- 업로더가 실행이 안되는 문제 해결 ([cf7dbd7](https://github.com/egoing/opentutorials-2/commit/cf7dbd7ce0e36ca563d4f22332fac713d5f29fff))
- 업로더를 dynamic loading, suspense ([bd31ba5](https://github.com/egoing/opentutorials-2/commit/bd31ba50dc98b5d954bbd3ca03fc207a940ccade))
- 이미지 업로더를 취소 한 후에 다시 업로더 버튼이 작동하지 않는 문제 해결 ([abb1205](https://github.com/egoing/opentutorials-2/commit/abb1205bb9478828b0d5e14d983d2780085c99c2))
- 이미지 업로드 시 figure 태그 제거 ([890b934](https://github.com/egoing/opentutorials-2/commit/890b9349911a99a206880da4d2b4f9369a17c8a7))
- 저장 버튼을 body 레벨로 이동 ([a28b370](https://github.com/egoing/opentutorials-2/commit/a28b370ad14f1693669ad71fbcea8366e8d80007))
- 정사각형 이미지 레이아웃 시프트 문제 해결 ([381c631](https://github.com/egoing/opentutorials-2/commit/381c631558342fd6fb49531d234cd87d8673e5cf))
- 채팅 컴포넌트를 dyanmic, suspense로 변환 ([488b8da](https://github.com/egoing/opentutorials-2/commit/488b8daf577c012218686da9a28c505b04285270))
- 해쉬 리소스는 http 캐쉬를 이용하도록 sw 캐쉬에서 제거 ([3acf87d](https://github.com/egoing/opentutorials-2/commit/3acf87de62fa5b7dbdba6872dfb8fc2daf0a7f88))

### [0.5.52](https://github.com/egoing/opentutorials-2/compare/v0.5.51...v0.5.52) (2025-05-01)

### Bug Fixes

- 프로파일 설정 켜기 ([4740133](https://github.com/egoing/opentutorials-2/commit/47401335fc5465d1a0484cbb0b203a37da49fcf4))

### [0.5.51](https://github.com/egoing/opentutorials-2/compare/v0.5.50...v0.5.51) (2025-05-01)

### Bug Fixes

- 브라우저 성능 측정 켬 ([3408f53](https://github.com/egoing/opentutorials-2/commit/3408f532378eb421a4889f7b6f24e5359964b51d))

### [0.5.50](https://github.com/egoing/opentutorials-2/compare/v0.5.49...v0.5.50) (2025-05-01)

### Features

- Sentry 프로파일링 샘플러 추가 및 캐시 최대 연령 변경 ([6861416](https://github.com/egoing/opentutorials-2/commit/6861416f0d9a8dd4d179ad4accf600c1f9ae71b9))

### [0.5.49](https://github.com/egoing/opentutorials-2/compare/v0.5.48...v0.5.49) (2025-04-29)

### [0.5.48](https://github.com/egoing/opentutorials-2/compare/v0.5.47...v0.5.48) (2025-04-28)

### [0.5.47](https://github.com/egoing/opentutorials-2/compare/v0.5.46...v0.5.47) (2025-04-28)

### Bug Fixes

- 수정된 한국어 메시지에서 간단한 메모 안내 문구 변경 ([a7e4224](https://github.com/egoing/opentutorials-2/commit/a7e4224c7f97bfdc66caedd6e858712594792a38))

### [0.5.46](https://github.com/egoing/opentutorials-2/compare/v0.5.45...v0.5.46) (2025-04-28)

### Bug Fixes

- db dump 갱신 ([8846909](https://github.com/egoing/opentutorials-2/commit/884690931be69cc52fe99b308b20a37d5689e492))
- 탈퇴가 안되는 오류 해결 및 삭제 데이터 확대 ([8fecf52](https://github.com/egoing/opentutorials-2/commit/8fecf52d95ba772ba9bc032a562dcd200fcbdacf))

### [0.5.45](https://github.com/egoing/opentutorials-2/compare/v0.5.44...v0.5.45) (2025-04-27)

### Bug Fixes

- 읽기에서 빠르게 빠져나가면 저장이 안되었다고 출력되는 오류 해결 ([bbdb23e](https://github.com/egoing/opentutorials-2/commit/bbdb23eb1515834686a61f2dc9bd3e19c825cc11))

### [0.5.44](https://github.com/egoing/opentutorials-2/compare/v0.5.43...v0.5.44) (2025-04-27)

### Bug Fixes

- confirmDialog의 텍스트가 작으면 가운데 정렬, 크면 왼쪽 정렬 ([313aed7](https://github.com/egoing/opentutorials-2/commit/313aed7119eca71aeae71b42a97397e9dd74e21f))
- 캐쉬 스토리지 전체 삭제 관련 메시지 개선 ([43f3d16](https://github.com/egoing/opentutorials-2/commit/43f3d169f350af159ab8beea0238ca7e7e420da5))

### [0.5.43](https://github.com/egoing/opentutorials-2/compare/v0.5.42...v0.5.43) (2025-04-26)

### Bug Fixes

- action button 리팩토링 및 크기 조정 ([f9aa6c0](https://github.com/egoing/opentutorials-2/commit/f9aa6c06f0538cf9a9bc1e0bab927dae92d999f0))
- menu, dialog의 배경색 조정 ([1f63a9a](https://github.com/egoing/opentutorials-2/commit/1f63a9acb76342816cf3287022a06bed4322d4b3))
- 언어설정이 변경 되었을 때 고객센터도 변경 ([e1ef175](https://github.com/egoing/opentutorials-2/commit/e1ef175f578f81e6d7c1971946752b3e0890acdc))

### [0.5.42](https://github.com/egoing/opentutorials-2/compare/v0.5.41...v0.5.42) (2025-04-26)

### Features

- 강제로 캐쉬 스토리지를 삭제하는 기능을 추가 ([6f96190](https://github.com/egoing/opentutorials-2/commit/6f96190f1d55084f3a3a967702f1e1d44d8d7396))

### Bug Fixes

- 버전 갱신 테스트 ([140a0b4](https://github.com/egoing/opentutorials-2/commit/140a0b4384f180946db9dfecf200c6b13d959592))
- 쓰로틀링 로직을 포커스 이벤트에만 적용하도록 수정 ([9dfd998](https://github.com/egoing/opentutorials-2/commit/9dfd9988c481d11b54c8aa0b18e3207fc21182f5))

### [0.5.41](https://github.com/egoing/opentutorials-2/compare/v0.5.40...v0.5.41) (2025-04-25)

### Bug Fixes

- 복사 개선 ([fa08e0d](https://github.com/egoing/opentutorials-2/commit/fa08e0d980a738d9f9d0ba7e64488aff8b8c1f60)), closes [#798](https://github.com/egoing/opentutorials-2/issues/798)

### [0.5.40](https://github.com/egoing/opentutorials-2/compare/v0.5.39...v0.5.40) (2025-04-25)

### Bug Fixes

- 대화저장 기능 포맷 새로운 UI에 맞게 개선 ([3a75439](https://github.com/egoing/opentutorials-2/commit/3a754391b09a46cbb79fd7e2fa69996e1cf2931f))
- 버튼이 confirmDialog에 올라타는 문제 해결 ([64d7189](https://github.com/egoing/opentutorials-2/commit/64d7189d9b461370dfc4c747b50b119108ccc106))
- 이미지 업로드 후 제목과 본문을 업데이트 하는 기능 추가 ([fbe4e08](https://github.com/egoing/opentutorials-2/commit/fbe4e086f8d851991454024f414b9e25cd8f2148))
- 채팅 저장 레이블 변경 ([2d7e9c8](https://github.com/egoing/opentutorials-2/commit/2d7e9c8e7dfde2c401fc87d0c09711bf9712415e))
- 채팅을 저장 할 때 마크다운인 경우 html 변환해서 처리 ([82afd65](https://github.com/egoing/opentutorials-2/commit/82afd6562792e4ce42b043c388e4ef330b935980))
- CreatePageBtn에서 타이틀 생성 실패 시 예외 처리 추가 ([50395c7](https://github.com/egoing/opentutorials-2/commit/50395c7330a99def1f8cec160f6acb7909fcf96d))

### [0.5.39](https://github.com/egoing/opentutorials-2/compare/v0.5.38...v0.5.39) (2025-04-24)

### Bug Fixes

- blocknote 컨텍스트 메뉴가 중복해서 표시되는 문제 해결 ([96a6b30](https://github.com/egoing/opentutorials-2/commit/96a6b30434ed23035b4ca89d36e625cb52a43e22))

### [0.5.38](https://github.com/egoing/opentutorials-2/compare/v0.5.37...v0.5.38) (2025-04-24)

### Bug Fixes

- 로깅이 너무 많아서 줄임 ([d63b694](https://github.com/egoing/opentutorials-2/commit/d63b6944d57851bb762f684544152910603ac4f5))

### [0.5.37](https://github.com/egoing/opentutorials-2/compare/v0.5.36...v0.5.37) (2025-04-24)

### [0.5.36](https://github.com/egoing/opentutorials-2/compare/v0.5.35...v0.5.36) (2025-04-24)

### Bug Fixes

- 생성 버튼을 눌렀을 때 /edit/로 이동하는 것을 /page/로 이동하도록 변경 ([c2fc6fa](https://github.com/egoing/opentutorials-2/commit/c2fc6fa2a160e3e0ce1131b38f8baa3ac3654cf4))
- 입력 도움말이 사라진 문제 해결 ([53f8cc7](https://github.com/egoing/opentutorials-2/commit/53f8cc7fe76849b895d5e2bb1b821368fe559a08))
- 저장 없이 나갈 때 경고 다국어 처리 문제 해결 ([7b38610](https://github.com/egoing/opentutorials-2/commit/7b3861003820724291da8ddb6bb905a6c0264bf8))
- 커서 색상이 테마에 맞게 변경되지 않는 문제 ([8bd8862](https://github.com/egoing/opentutorials-2/commit/8bd8862e554a2ecad137660153f3b23478c022a6))

### [0.5.35](https://github.com/egoing/opentutorials-2/compare/v0.5.34...v0.5.35) (2025-04-23)

### Bug Fixes

- 저장 버튼이 하단 메뉴 위에 올라타는 문제 해결 ([a437dba](https://github.com/egoing/opentutorials-2/commit/a437dba3a3cefe9015cc65a23459a5a089c0b661))

### [0.5.34](https://github.com/egoing/opentutorials-2/compare/v0.5.33...v0.5.34) (2025-04-23)

### Bug Fixes

- 모바일에서 한쪽에 치우치는 문제 해결 ([48dc812](https://github.com/egoing/opentutorials-2/commit/48dc812003ac3f97c639d93835ce2d1a3d7e868f))

### [0.5.33](https://github.com/egoing/opentutorials-2/compare/v0.5.32...v0.5.33) (2025-04-23)

### [0.5.32](https://github.com/egoing/opentutorials-2/compare/v0.5.31...v0.5.32) (2025-04-23)

### Features

- 데이터베이스 초기화 및 로깅 기능 추가 ([53c4a57](https://github.com/egoing/opentutorials-2/commit/53c4a57bedf6514d129c6c34d6d2ca24ae85809d))

### [0.5.31](https://github.com/egoing/opentutorials-2/compare/v0.5.30...v0.5.31) (2025-04-23)

### Features

- user_info 데이터 조회 방식 개선 및 세션 로드 최적화 ([0ced242](https://github.com/egoing/opentutorials-2/commit/0ced242b464332531a911f2371d86378372001b1))

### [0.5.30](https://github.com/egoing/opentutorials-2/compare/v0.5.29...v0.5.30) (2025-04-23)

### Bug Fixes

- 프로덕션 환경에서만 Speed Insights 활성화 ([cfc42e5](https://github.com/egoing/opentutorials-2/commit/cfc42e52a447abc2fb6b1394e05554984dadd92e))
- Amplitude 이벤트 추적을 프로덕션 환경에서만 활성화 ([6aa84c0](https://github.com/egoing/opentutorials-2/commit/6aa84c00d84364690bfe773d8573c520fb96e267))
- Google Analytics 프로덕션 환경에서만 활성화 ([428d592](https://github.com/egoing/opentutorials-2/commit/428d59270395890669ec6ce74acf565919dc293a))

### [0.5.29](https://github.com/egoing/opentutorials-2/compare/v0.5.28...v0.5.29) (2025-04-23)

### Features

- Amplitude 통합 구현 및 개선 ([abf3302](https://github.com/egoing/opentutorials-2/commit/abf330294cfe8d73b3e70684cbf61479064e5f41))

### [0.5.28](https://github.com/egoing/opentutorials-2/compare/v0.5.27...v0.5.28) (2025-04-23)

### Features

- 사진 프롬프트에 대한 설명 추가 ([c4f88bb](https://github.com/egoing/opentutorials-2/commit/c4f88bbbc9404750f791ebd7a12064f5717fb48c))

### [0.5.27](https://github.com/egoing/opentutorials-2/compare/v0.5.26...v0.5.27) (2025-04-23)

### [0.5.26](https://github.com/egoing/opentutorials-2/compare/v0.5.25...v0.5.26) (2025-04-23)

### Bug Fixes

- prompt 개선 ([fa0048d](https://github.com/egoing/opentutorials-2/commit/fa0048d38cca36686a456829765c28474d4786b0))

### [0.5.25](https://github.com/egoing/opentutorials-2/compare/v0.5.24...v0.5.25) (2025-04-23)

### Bug Fixes

- 리마인더 기능은 준비 중으로 표시 ([1b36c13](https://github.com/egoing/opentutorials-2/commit/1b36c13a42aa40a6c4757ae0fe8c22dc1368f7e5))

### [0.5.24](https://github.com/egoing/opentutorials-2/compare/v0.5.23...v0.5.24) (2025-04-23)

### Features

- /home/edit/[id] => /home/page/[id]로 변경 ([e5a1357](https://github.com/egoing/opentutorials-2/commit/e5a1357368e66c20324327daae01b27d8ae3b60c))
- 발행에 성공했을 때 발행 다이얼로그가 뜨도록 개선 ([4acc127](https://github.com/egoing/opentutorials-2/commit/4acc127badacdf9f48d879529a6b4b33684e2531))

### Bug Fixes

- 공유 페이지 폭을 편집창과 일치시킴 ([22fc231](https://github.com/egoing/opentutorials-2/commit/22fc231e378b606b6086838743428878dfed1e23))
- 공유 페이지 폰트 크기 조정 ([55b3e96](https://github.com/egoing/opentutorials-2/commit/55b3e96dbca3bccad5ada7ae5adce8b7505e3056))
- 에디터와 공유 페이지 디자인을 일치시킴 ([b935423](https://github.com/egoing/opentutorials-2/commit/b9354233a714a180edfbbad9c28050bec682b6d0))
- 읽기/쓰기 통합에 따라서 PAGE_READ로 접근해도 createUpdate 페이지가 표시되도록 개선 ([fd9b936](https://github.com/egoing/opentutorials-2/commit/fd9b93605bd015b18f108f9b334c9c098221c290))
- 편집 버튼 크기 줄이고, 간격 조정 ([2efaba6](https://github.com/egoing/opentutorials-2/commit/2efaba64ae74f9df531fea052009bfa6a456c361))
- 편집기의 들여쓰기 가이드 제거 ([ec8ff1c](https://github.com/egoing/opentutorials-2/commit/ec8ff1c48d2b72620b24f8a1382027e7167e550a))
- BlockNote 에디터 스타일 수정 및 fallback 복원 ([43864cd](https://github.com/egoing/opentutorials-2/commit/43864cdd1237aa378731872bb006d38b46ea5b6d))
- BlockNoteWrapper에 사이드 메뉴 숨김 기능 추가 및 스타일 조정 ([95f2fbe](https://github.com/egoing/opentutorials-2/commit/95f2fbe194cbf9fe6c5da1a3f30e0f0955fa6148))
- copy & paste로 이미지 업로드 기능 추가 ([b2ff9e7](https://github.com/egoing/opentutorials-2/commit/b2ff9e7876fdf81ecc2922e643c28d202b2b5f1d))

### [0.5.23](https://github.com/egoing/opentutorials-2/compare/v0.5.22...v0.5.23) (2025-04-22)

### Features

- /home/page/[id] 로 접근했을 때 해당 게시글이 공개글이라면 /share/[id]로 리디렉션 하도록 개선 ([f43aef0](https://github.com/egoing/opentutorials-2/commit/f43aef092781ee91a545d8dd47d73c8dda05c806))
- 목록을 클릭했을 때 /edit로 이동하도록 변경 ([a171c03](https://github.com/egoing/opentutorials-2/commit/a171c0305aeae451f7f6d1205cc8240f4fb96068))
- 타입 정의 향상을 위한 @types/html-to-text 추가 ([0e34081](https://github.com/egoing/opentutorials-2/commit/0e3408134f926db3360380a753f4786f5f4e9760))
- create 모드에서 버튼 비활성화 및 안내 기능 추가 ([9030029](https://github.com/egoing/opentutorials-2/commit/903002977ea6498f4a413878bdfcf73a9e67c18a))

### Bug Fixes

- 29.1로 업그레이드 하기 위해서 locale 기능 임시 제거 ([906b1ff](https://github.com/egoing/opentutorials-2/commit/906b1ff7c3431dab68d57ee45cc04b8ff80c4446))
- 공개했음에도 저장을 하면 다시 비공개가 되는 문제 해결 ([0928e74](https://github.com/egoing/opentutorials-2/commit/0928e74ed90cd43c5574ceddf9dc2d953585703d))
- 공유 페이지는 경량화된 에디터 랩퍼를 이용해서 출력 ([b4398e9](https://github.com/egoing/opentutorials-2/commit/b4398e9434723dc7835a21bbddd69950a6060934))
- 모바일에서는 blocknote의 사이드 메뉴가 왼쪽에 기본 포지션으로 표시되게 처리하고 오른쪽 여백은 줄여서 편집 영역을 확보 ([abbe3ce](https://github.com/egoing/opentutorials-2/commit/abbe3ceb33285f9a65a91afb1c47a34c9db3decf))
- 번역 파일 정렬 ([ed84311](https://github.com/egoing/opentutorials-2/commit/ed8431151687b047abda728a63cbabfea920a83a))
- 본문을 백업할 때 debounce 백업이 제대로 작동하지 않았던 문제 해결 ([052e758](https://github.com/egoing/opentutorials-2/commit/052e7580385bdb6d321d8d5dd74d0ec9bf1b75ef))
- 생성 시에는 발생하던 페이지 정보를 찾을 수 없음니다 오류 제거 ([7d509a2](https://github.com/egoing/opentutorials-2/commit/7d509a27165dee5b4474510811ee1c724a196aa1))
- 에디터 리팩토링 과정에서 번역 문제 해결 ([9ea97ea](https://github.com/egoing/opentutorials-2/commit/9ea97ea4ce6c72fe4edf3c69738071ab9bfcf1cf))
- 정적 css를 이용해서 blocknote 스타일 지정 ([802b75c](https://github.com/egoing/opentutorials-2/commit/802b75c4d317546ea694b9f335d6aa8a21477a0c))
- 페이지 발행 관련 기능 개선 및 버그 수정 ([044ed83](https://github.com/egoing/opentutorials-2/commit/044ed8301bdb4f97244ad82e2d958ec164999a4a))
- 편집 화면 버튼 위치 조정 ([e1999a9](https://github.com/egoing/opentutorials-2/commit/e1999a99ce214008d54e63d2266f0e315f4b1e20))
- blockeditor의 locale 적용해서 한글/영문 지원 ([c83d996](https://github.com/egoing/opentutorials-2/commit/c83d99660570385e6276db25970c5247c5d44a3a))
- blockeditor의 sidemenu로 인한 패딩을 상쇄 ([8eb11a6](https://github.com/egoing/opentutorials-2/commit/8eb11a634fa29bf7a9fa44aacce5e46312153cdd))
- BlockNote 에디터 onChange 이벤트 핸들러 타입 오류 수정 ([7feaf63](https://github.com/egoing/opentutorials-2/commit/7feaf631ea87c20dee13c4ad596740b3eb09fc9e))
- blocknote의 컨텍스트 메뉴에서 라이트 모드에서 텍스트의 색상이 잘 안보이는 문제 해결 ([24c914f](https://github.com/egoing/opentutorials-2/commit/24c914fcd140999caba6fe2d3263ece1ffcca9c3))
- en, ko 간에 동기화 ([2cb9c4f](https://github.com/egoing/opentutorials-2/commit/2cb9c4f28311cc04d5156858aec38436e41c8fa3))
- en.json, ko.json 번역 내용 동기화 ([262b5b2](https://github.com/egoing/opentutorials-2/commit/262b5b22fa91ce99613df7f6c37a354c6c6096c6))
- sync 함수에서 페이지 변경 사항 처리 개선 ([bc0a2a3](https://github.com/egoing/opentutorials-2/commit/bc0a2a329b01a642b47ca5c234f2095a0ab09401))

### [0.5.22](https://github.com/egoing/opentutorials-2/compare/v0.5.21...v0.5.22) (2025-04-22)

### [0.5.21](https://github.com/egoing/opentutorials-2/compare/v0.5.20...v0.5.21) (2025-04-21)

### Bug Fixes

- API 검색 함수에 user_id 필터링 추가 (현재 비활성화된 기능) ([33913c6](https://github.com/egoing/opentutorials-2/commit/33913c630f62684cdc39b6500a051b1451cf45eb))
- PublishButton 컴포넌트의 번역 함수 수정 ([1a5706d](https://github.com/egoing/opentutorials-2/commit/1a5706d993e4cd2a85b4be0bbccb7c956c4ea508))

### [0.5.20](https://github.com/egoing/opentutorials-2/compare/v0.5.19...v0.5.20) (2025-04-16)

### Features

- 서비스 워커 캐싱 전략 개선으로 share 페이지 갱신 문제 해결 ([d54b7ac](https://github.com/egoing/opentutorials-2/commit/d54b7ac6586526c070e80deb043e778b49132dcc))

### [0.5.19](https://github.com/egoing/opentutorials-2/compare/v0.5.18...v0.5.19) (2025-04-16)

### Bug Fixes

- 공유 페이지 갱신 안되는 문제 해결을 위해서 저장 직후 백그라운드에서 접속하도록 개선 ([c4457d1](https://github.com/egoing/opentutorials-2/commit/c4457d1b290b04d3cfeea4a98a50b98496aa501e))
- 불필요한 로그 출력 제거 및 공유 페이지 캐시 갱신 로직 개선 ([65d3151](https://github.com/egoing/opentutorials-2/commit/65d31512a99142d9dc3bfdde48fe7cd5ba3ba7da))

### [0.5.18](https://github.com/egoing/opentutorials-2/compare/v0.5.17...v0.5.18) (2025-04-16)

### Bug Fixes

- 공유 페이지 캐시 갱신 로직 추가 ([806da7f](https://github.com/egoing/opentutorials-2/commit/806da7f95389a6963d8ddee630048dc57c4170c9))

### [0.5.17](https://github.com/egoing/opentutorials-2/compare/v0.5.16...v0.5.17) (2025-04-16)

### [0.5.16](https://github.com/egoing/opentutorials-2/compare/v0.5.15...v0.5.16) (2025-04-16)

### Bug Fixes

- 공유 페이지의 데이터가 2번 리로드 해야 갱신이 되는 문제 처리 ([b2a5821](https://github.com/egoing/opentutorials-2/commit/b2a5821d4a61397513166b0536406549cae16bb0))

### [0.5.15](https://github.com/egoing/opentutorials-2/compare/v0.5.14...v0.5.15) (2025-04-16)

### [0.5.14](https://github.com/egoing/opentutorials-2/compare/v0.5.13...v0.5.14) (2025-04-15)

### Bug Fixes

- 수정된 배포 스크립트로 git push 순서 변경 ([614556b](https://github.com/egoing/opentutorials-2/commit/614556b54971e52bf1bb1d57b47a69330d937a47))

### [0.5.13](https://github.com/egoing/opentutorials-2/compare/v0.5.12...v0.5.13) (2025-04-15)

### [0.5.12](https://github.com/egoing/opentutorials-2/compare/v0.5.11...v0.5.12) (2025-04-15)

### Bug Fixes

- 공유 페이지에서 캐쉬가 갱신되지 않는 문제 처리 ([491380f](https://github.com/egoing/opentutorials-2/commit/491380f06b0d54b19c1b31a840a202f32e020a23))
- is_public가 갱신되지 않았던 문제 처리 ([b2dab07](https://github.com/egoing/opentutorials-2/commit/b2dab07a68c76a5d9af0cbeac3db7deb0005a05f))

### [0.5.11](https://github.com/egoing/opentutorials-2/compare/v0.5.10...v0.5.11) (2025-04-15)

### Features

- 공유 기능 기본 골격 구현 ([f54184d](https://github.com/egoing/opentutorials-2/commit/f54184d60cc27943a1040eb0f5ca656eaf7d11ef))
- 공유 페이지 RLS 우회 API 엔드포인트 구현 ([d0166a0](https://github.com/egoing/opentutorials-2/commit/d0166a0d6454efae71f0ef0b3c3f06548681df14))
- 발행 다이얼로그 UI 개선 ([d60367e](https://github.com/egoing/opentutorials-2/commit/d60367e791d9f27eff1f9d5f05935257430bc995))
- 본문이 없는 경우 화면 가운데 위치해서 몰입도를 높임. ([978103d](https://github.com/egoing/opentutorials-2/commit/978103d5f9086d030ac7c00ef7c9b56631e88e4f))
- 프로필 이미지 UI 갱신 기능 개선 ([09b47b7](https://github.com/egoing/opentutorials-2/commit/09b47b7922d0a46bfacaabc6cbfba34f92ed4c7c))
- UI 개선 및 기능 최적화 ([505b49f](https://github.com/egoing/opentutorials-2/commit/505b49f52a11b34be8fc06925a13429854de5600))
- URL 복사 기능 및 스낵바 알림 추가 ([08da6fe](https://github.com/egoing/opentutorials-2/commit/08da6fe5c0e84a551d671964956cb64169af7737))

### Bug Fixes

- 공유 url을 ORIGIN/share/ID 형식으로 변경 ([79bd4fd](https://github.com/egoing/opentutorials-2/commit/79bd4fd7c6b2781acc50e494262aeabef6981141))

### [0.5.10](https://github.com/egoing/opentutorials-2/compare/v0.5.9...v0.5.10) (2025-04-14)

### Bug Fixes

- typescript type 오류 해결 ([be27ae1](https://github.com/egoing/opentutorials-2/commit/be27ae1b59a3c12e4f46221ce7b2b60f5a13aa42))

### [0.5.9](https://github.com/egoing/opentutorials-2/compare/v0.5.8...v0.5.9) (2025-04-14)

### [0.5.8](https://github.com/egoing/opentutorials-2/compare/v0.5.7...v0.5.8) (2025-04-14)

### [0.5.7](https://github.com/egoing/opentutorials-2/compare/v0.5.6...v0.5.7) (2025-04-13)

### Bug Fixes

- 로그인 메뉴 UI 개선 및 요소 가시성 조정 ([6fb4411](https://github.com/egoing/opentutorials-2/commit/6fb44111acdd538e95ce56fbe7e4a35df1466e27))

### [0.5.6](https://github.com/egoing/opentutorials-2/compare/v0.5.5...v0.5.6) (2025-04-13)

### Bug Fixes

- dev에서 standard-version을 실행하고 main과 병합하도록 순서를 변경 0.1h ([06f7d04](https://github.com/egoing/opentutorials-2/commit/06f7d04396b5b1a8ecac4a5783c8dba958c1a37d))

### [0.5.5](https://github.com/egoing/opentutorials-2/compare/v0.5.4...v0.5.5) (2025-04-13)

### Features

- 리마인더를 켠 후에 사용법을 안내하기 위한 링크를 추가 0.1h ([66a2a06](https://github.com/egoing/opentutorials-2/commit/66a2a061cb3da8bf328d6daa0fcb3b14c4321ae4))
- 알림 즉시 테스트 기능 개선 및 안전장치 추가 ([cc14013](https://github.com/egoing/opentutorials-2/commit/cc140138ccd88fcf9afdc1e76e430d039892c6c6))

### Bug Fixes

- 사용자 인증 함수의 타입 오류 수정 0.1h ([99b0cfd](https://github.com/egoing/opentutorials-2/commit/99b0cfd9bd9dd0228fa28bc442cf3e8c49bc9e8f))
- 알림 메시지에서 HTML 태그 제거 기능 추가 ([a199778](https://github.com/egoing/opentutorials-2/commit/a199778004b4fa617d033602796254c0743b29ae))
- iOS 웹뷰에서 인터콤 메신저 프레임 아일랜드 바 대응 ([2f40ff5](https://github.com/egoing/opentutorials-2/commit/2f40ff51081e38226ca6e563b3c80c507d0e4848))
- rpc(get_alarm)을 호출할 때 캐쉬로 인해서 데이터를 못 읽어오는 문제 해결 0.1h ([3864f31](https://github.com/egoing/opentutorials-2/commit/3864f318caf7e41982553e05137a9618b2fb3235))

### [0.5.4](https://github.com/egoing/opentutorials-2/compare/v0.5.3...v0.5.4) (2025-04-12)

### Features

- 사용량 초과에 따른 구독 관리 기능 추가 및 개선 ([40a9894](https://github.com/egoing/opentutorials-2/commit/40a9894ca30464aab9187b396ac92f43d3849cf3))
- 이미지 링크로 래핑하는 기능 추가 및 URL 패턴 검증 개선 0.5h ([ab75dbe](https://github.com/egoing/opentutorials-2/commit/ab75dbe8a777c45099853cda1ed04ecff9587aec))
- Add Google Analytics tracking code using script tag ([e8861a5](https://github.com/egoing/opentutorials-2/commit/e8861a5c7d30cdecc1336d2d328ab94ded7b0979))
- Drop usage_id column and change user_id to primary key in usage table ([b877c1e](https://github.com/egoing/opentutorials-2/commit/b877c1e99c811084b4fe85a10bc3cd95c183f7fe))
- increase LIMIT for pulling all data to 500 ([80d4267](https://github.com/egoing/opentutorials-2/commit/80d426749e7d431a304e6cf2241816b2b6d89aa2))
- Insert user_info record on callback route ([66a8640](https://github.com/egoing/opentutorials-2/commit/66a86409812e05a445610b5756b2ea969f7e725b))
- RevenueCat 구독 정보 조회 및 취소 API 개선 ([6d803d6](https://github.com/egoing/opentutorials-2/commit/6d803d639e718e4b204d80cbd652e88596495779))
- URL 패턴 검증 개선 및 불필요한 옵션 제거 0.3h ([bc81a0d](https://github.com/egoing/opentutorials-2/commit/bc81a0d62dfbc4694cd14801b9ad5120bf6648c2))

### Bug Fixes

- 개선된 페이지 업데이트 로직으로 동기화 시 기존 페이지 처리 방식 수정 0.1h ([e47af6f](https://github.com/egoing/opentutorials-2/commit/e47af6f93aeaf7f2bf89724a3409d415bf61252b))
- 미사용 코드 제거 ([b404560](https://github.com/egoing/opentutorials-2/commit/b40456049063873b91fee4e20c12b7b66488c501))
- 배포시 standard-version을 이용해서 변경사항을 CHANGELOG.md에 기록하도록 개선 0.1h ([02bebcd](https://github.com/egoing/opentutorials-2/commit/02bebcd10a5ac8401e8ea1a59c911020bfb52ad1))
- IndexedDB 트랜잭션 오류 해결 ("Failed to execute 'abort' on 'IDBTransaction'") ([23c0092](https://github.com/egoing/opentutorials-2/commit/23c009268bdeb48ef0cdebfff83e18fddb3688f9))
- update existing pages during sync ([bbb828e](https://github.com/egoing/opentutorials-2/commit/bbb828ec1917d71abd2085108ad060721139a61e))
