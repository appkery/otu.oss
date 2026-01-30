# 리마인더 무한 스크롤 디버깅 가이드

## 문제 상황

scrollSentry가 노출되어도 자동으로 로딩이 실행되지 않음

## 디버깅 단계

### 1. 브라우저 콘솔에서 로그 활성화

```javascript
localStorage.debug = 'reminder';
```

### 2. 확인해야 할 로그들

- "리마인더 리스트 렌더링" - hasMore, loading, sentryRef 값 확인
- "무한 스크롤 onLoadMore 호출됨" - 이 로그가 나타나는지 확인
- "리마인더 데이터 로드 시작" - 실제 데이터 로드가 시작되는지 확인

### 3. 가능한 원인들

#### 원인 1: IntersectionObserver가 제대로 작동하지 않음

- scrollSentry 요소가 viewport에 보이는지 확인
- 브라우저 개발자 도구에서 요소 검사

#### 원인 2: hasMore가 false로 설정됨

- 첫 페이지 로드 후 hasMore 값 확인
- pageSize가 1로 설정되어 있으므로, 리마인더가 1개만 있어도 hasMore가 true여야 함

#### 원인 3: loading 상태가 계속 true

- 로딩이 완료되지 않아 다음 페이지를 로드하지 못하는 경우

### 4. 테스트 방법

1. /home/reminder 페이지로 이동
2. 브라우저 콘솔 열기
3. 위의 디버그 명령어 실행
4. 페이지 새로고침
5. 스크롤을 내려서 scrollSentry가 화면에 나타나도록 함
6. 콘솔 로그 확인

### 5. 예상되는 정상 동작

1. 첫 페이지 로드 시 1개의 리마인더 표시
2. 스크롤을 내리면 "loading..." 텍스트가 보임
3. "무한 스크롤 onLoadMore 호출됨" 로그 출력
4. 다음 리마인더 1개가 추가로 로드됨
