# Analyze GitHub Issue

깃허브 이슈를 분석하고 현황을 파악한 후, 분석 내용을 코드는 최소한으로 하는 간결한 코멘트로 추가하고 적절한 라벨을 붙여주세요.

## 작업 순서

1. **이슈 확인**

    - `gh issue view {issue_number}` 명령어로 이슈 내용 확인
    - 이슈 제목, 설명, 현재 상태 파악

2. **코드 분석**

    - 관련 파일/코드를 찾아서 읽기 (Read, Glob, Grep 도구 사용)
    - 문제의 원인 파악
    - 재현 방법 확인

3. **분석 내용 작성**

    - 문제 증상
    - 원인 파악 (코드 위치 포함)
    - 해결 방안
    - 영향 범위
    - 테스트 권장사항

4. **이슈에 코멘트 추가**

    - `gh issue comment {issue_number} --body "현황 파악 및 분석 내용"`
    - 마크다운 형식으로 작성

5. **라벨 추가**
    - 먼저 `gh label list`로 사용 가능한 라벨 확인
    - 적절한 라벨 선택 (bug, enhancement, design, Priority: High 등)
    - `gh issue edit {issue_number} --add-label "label1,label2"`

## 주의사항

- 반드시 한국어로 작성
- 코드 위치는 파일명:라인번호 형식으로 명시
- 분석이 불확실한 경우 추가 정보 요청
- 라벨은 저장소에 존재하는 것만 사용

## 사용 예시

```
/analyze-issue 919
```

이슈 번호를 인자로 받습니다.
