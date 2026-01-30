# commit

수정된 파일들을 확인하고 각 파일별로 적절한 커밋 메시지를 작성하여 커밋합니다.

## 사용법

```
/commit           # 일반 커밋
/commit 0.5h      # 작업 시간 포함 커밋
/commit 2h        # 작업 시간 포함 커밋
```

## 작업 순서

1. `git status`로 변경된 파일 확인
2. `git diff`로 각 파일의 변경 내용 확인
3. 변경 내용을 분석하여 의미있는 단위로 그룹핑
4. 각 그룹별로 커밋 메시지 작성 및 커밋 실행
5. 인자로 시간(예: "0.5h", "2h")이 전달되면 커밋 메시지 맨 마지막에 추가

## 커밋 메시지 형식

```
<type>: <subject>

<body>
```

### Type 종류

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `refactor`: 코드 리팩토링 (기능 변경 없음)
- `style`: 코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
- `docs`: 문서 수정
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 업무, 패키지 매니저 설정 등

### 커밋 메시지 작성 규칙

- **한국어로 작성**
- subject는 명령형으로 작성 (예: "추가", "수정", "해결")
- subject는 50자 이내
- body는 "무엇을", "왜" 변경했는지 설명
- Claude Code 관련 메시지는 **절대 포함하지 않음**
    - ❌ "🤖 Generated with [Claude Code]"
    - ❌ "Co-Authored-By: Claude"

## 예시

### 일반 커밋

```bash
git commit -m "fix: Chrome 확장 프로그램으로 인한 hydration mismatch 경고 해결

html 태그에 suppressHydrationWarning 속성을 추가하여 브라우저 확장 프로그램이나
Chrome이 추가하는 속성으로 인한 React hydration mismatch 경고를 해결했습니다."
```

### 시간 포함 커밋 (예: /commit 0.1h)

```bash
git commit -m "fix: Chrome 확장 프로그램으로 인한 hydration mismatch 경고 해결

html 태그에 suppressHydrationWarning 속성을 추가하여 브라우저 확장 프로그램이나
Chrome이 추가하는 속성으로 인한 React hydration mismatch 경고를 해결했습니다.

0.1h"
```

## 주의사항

- CLAUDE.md와 .cursor/rules 규칙에 따라 **절대 add, commit 작업을 사용자 명시 없이 수행하지 않음**
- 이 명령어는 사용자가 명시적으로 요청했을 때만 실행
- 커밋 전 반드시 변경 내용을 사용자에게 보고
