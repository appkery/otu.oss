# pgTAP 데이터베이스 함수 테스트 가이드

## 개요

pgTAP은 PostgreSQL 데이터베이스 함수와 쿼리를 테스트하기 위한 전문적인 테스트 프레임워크입니다. 이 프로젝트에서는 `get_dynamic_pages_chunk` 함수의 동작을 검증하기 위해 pgTAP을 사용합니다.

## 테스트 파일 구조

```
test/
  └── db/                                 # 데이터베이스 테스트 폴더
      └── test_rpc_dynamic_chunk.pgtap.sql  # pgTAP 형식 테스트
```

## 테스트 실행 방법

### 1. 자동 실행 - 모든 pgTAP 테스트 실행

`test/db` 폴더의 모든 `.pgtap.sql` 파일을 자동으로 찾아서 실행합니다:

```bash
npm run test:db
```

이 명령어는 `test/db` 폴더를 재귀적으로 탐색하여 모든 `.pgtap.sql` 파일을 찾아 순차적으로 실행합니다.

**출력 예시:**

```
🧪 실행 중: test/db/test_rpc_dynamic_chunk.pgtap.sql
BEGIN
CREATE EXTENSION
CREATE EXTENSION
 plan
------
 1..9
(1 row)

ok 1 - 함수 get_dynamic_pages_chunk가 존재해야 함
ok 2 - 용량 제한 테스트: 1.2MB 데이터 조회 시 3개 페이지 반환
ok 3 - 용량 제한 테스트: 남은 데이터가 있으므로 hasMore는 true
...
ok 9 - 빈 결과 테스트: hasMore는 false
finish
ROLLBACK
```

### 2. 개별 테스트 파일 실행

특정 테스트 파일만 실행하려면 직접 실행:

```bash
# Docker 환경
docker exec -i supabase_db_new-opentutorials psql -U postgres -d postgres < test/db/test_rpc_dynamic_chunk.pgtap.sql

# 로컬 PostgreSQL 환경
psql -d postgres -f test/db/test_rpc_dynamic_chunk.pgtap.sql
```

## 테스트 파일 작성 가이드

### 기본 구조

pgTAP 테스트 파일은 다음 구조를 따릅니다:

```sql
BEGIN;

-- pgTAP 확장 활성화 (이미 설치되어 있음)
CREATE EXTENSION IF NOT EXISTS pgtap;
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 테스트 계획 수 설정
SELECT plan(9);

-- 테스트 사용자 설정 (인증이 필요한 경우)
DO $$
DECLARE
    v_user_id uuid := '00000000-0000-0000-0000-000000000000';
BEGIN
    PERFORM set_config('request.jwt.claim.sub', v_user_id::text, true);
    PERFORM set_config('request.jwt.claims', json_build_object('sub', v_user_id)::text, true);
    -- auth.users에 테스트 사용자 생성
    BEGIN
        INSERT INTO auth.users (id, email) VALUES (v_user_id, 'test@example.com');
    EXCEPTION WHEN OTHERS THEN
        NULL;
    END;
END $$;

-- 테스트 데이터 생성
DO $$
BEGIN
    -- 테스트 데이터 삽입
END $$;

-- 테스트 케이스들
SELECT is(...);
SELECT ok(...);

-- 테스트 완료
SELECT finish();

ROLLBACK;
```

**주의사항:**

- 테스트 파일에서 함수를 정의하거나 재정의하지 않습니다. 마이그레이션 파일에 정의된 함수를 그대로 사용합니다.
- `DROP FUNCTION`을 사용하지 않습니다.

### JSON 반환값 테스트

함수가 JSON을 반환하는 경우, JSON 연산자를 사용하여 테스트합니다:

```sql
-- JSON 배열 길이 확인
SELECT is(
    (SELECT json_array_length(get_dynamic_pages_chunk(...)->'pages')),
    3,
    '3개 페이지 반환 확인'
);

-- JSON 객체의 boolean 값 확인
SELECT is(
    (SELECT (get_dynamic_pages_chunk(...)->>'hasMore')::boolean),
    true,
    'hasMore가 true인지 확인'
);

-- JSON 배열의 특정 요소 접근
SELECT is(
    (SELECT (get_dynamic_pages_chunk(...)->'pages'->0->>'id')),
    'expected-id',
    '첫 번째 페이지 ID 확인'
);
```

### 인증 테스트

Supabase의 `auth.uid()`를 사용하는 함수를 테스트할 때는 JWT 클레임을 설정해야 합니다:

```sql
-- 인증 컨텍스트 설정
PERFORM set_config('request.jwt.claim.sub', v_user_id::text, true);
PERFORM set_config('request.jwt.claims', json_build_object('sub', v_user_id)::text, true);

-- 인증 실패 테스트
DO $$
DECLARE
    v_error_occurred boolean := false;
BEGIN
    -- 인증 컨텍스트 제거
    PERFORM set_config('request.jwt.claim.sub', NULL, true);
    PERFORM set_config('request.jwt.claims', NULL, true);

    BEGIN
        PERFORM public.function_name(...);
    EXCEPTION WHEN OTHERS THEN
        IF SQLERRM LIKE '%Not authenticated%' THEN
            v_error_occurred := true;
        END IF;
    END;

    IF NOT v_error_occurred THEN
        RAISE EXCEPTION '인증 실패 테스트 실패';
    END IF;
END $$;
```

## 테스트 결과 해석

### 성공적인 테스트 출력 예시

```
BEGIN
CREATE EXTENSION
CREATE EXTENSION
 plan
------
 1..9
(1 row)

                   has_function
---------------------------------------------------
 ok 1 - 함수 get_dynamic_pages_chunk가 존재해야 함
(1 row)

                              is
---------------------------------------------------------------
 ok 2 - 용량 제한 테스트: 1.2MB 데이터 조회 시 3개 페이지 반환
(1 row)

                               is
----------------------------------------------------------------
 ok 3 - 용량 제한 테스트: 남은 데이터가 있으므로 hasMore는 true
(1 row)
...
 finish
--------
(0 rows)

ROLLBACK
```

### 실패한 테스트 출력 예시

```
BEGIN
CREATE EXTENSION
CREATE EXTENSION
plan
9
ok 1 - 함수 get_dynamic_pages_chunk가 존재해야 함
not ok 2 - 용량 제한 테스트: 1.2MB 데이터 조회 시 3개 페이지 반환
# Failed test 2: "용량 제한 테스트: 1.2MB 데이터 조회 시 3개 페이지 반환"
#         have: 2
#         want: 3
...
```

## 테스트 케이스 설명 (get_dynamic_pages_chunk 예시)

### TEST 1: 함수 존재 확인

- `has_function()`을 사용하여 함수가 올바른 시그니처로 존재하는지 확인

### TEST 2: 용량 제한 테스트

- 함수는 각 행을 반환하기 전 누적 크기를 체크합니다
- A(400KB) + B(400KB) = 800KB (ok)
- C(400KB) 추가 시 1.2MB > 1MB 이지만, 현재 행 C는 포함하고 멈춤
- 따라서 3개 페이지(A, B, C)가 반환됨

### TEST 3: 용량 제한 시 hasMore 확인

- A, B, C 이후에 D, E, F, G, H가 남아있으므로 hasMore는 true여야 함
- JSON 반환값의 `hasMore` 필드를 확인

### TEST 4: 개수 제한 테스트

- `max_limit=3`일 때 3개 페이지만 반환되는지 확인
- `created_at ASC, id ASC` 순서로 정렬하여 반환

### TEST 5: 개수 제한 시 hasMore 확인

- A, B, C 이후 D...가 있으므로 hasMore는 true

### TEST 6: 커서 연속성 테스트

- B 페이지 이후 조회 시 C 페이지만 반환되는지 확인
- JSON 배열의 첫 번째 요소(`->'pages'->0->>'id'`)로 확인

### TEST 7: 인증 실패 테스트

- 인증 컨텍스트가 없을 때 `Not authenticated` 예외가 발생하는지 확인

### TEST 8-9: 빈 결과 테스트

- 존재하지 않는 커서로 조회 시 빈 결과가 반환되는지 확인
- `hasMore`가 false인지 확인

## pgTAP 주요 함수

### 테스트 계획

- `plan(n)`: 테스트 계획 수 설정 (테스트 시작 전에 호출)
- `finish()`: 테스트 완료 (모든 테스트 후 호출)

### 조건 검증

- `ok(condition, description)`: 조건이 true인지 확인
- `not_ok(condition, description)`: 조건이 false인지 확인

### 값 비교

- `is(actual, expected, description)`: 두 값이 같은지 확인
- `isnt(actual, expected, description)`: 두 값이 다른지 확인
- `matches(actual, pattern, description)`: 패턴 매칭 확인 (정규식)

### 함수/객체 검증

- `has_function(schema, function_name, args, description)`: 함수 존재 확인
- `has_table(schema, table_name, description)`: 테이블 존재 확인
- `has_column(schema, table, column, description)`: 컬럼 존재 확인

### 예외 검증

- `throws_ok(code, exception_pattern, description)`: 예외 발생 확인

### JSON 검증

- `json_array_length(json)`: JSON 배열의 길이 반환
- `json_extract_path_text(json, path)`: JSON 경로에서 텍스트 추출

## 베스트 프랙티스

### 1. 트랜잭션 사용

모든 테스트는 `BEGIN;`과 `ROLLBACK;`으로 감싸서 데이터베이스 상태를 변경하지 않도록 합니다.

### 2. 테스트 데이터 격리

각 테스트는 독립적으로 실행될 수 있도록 고유한 테스트 데이터를 사용합니다.

### 3. 명확한 테스트 설명

각 테스트 케이스에 명확한 설명을 추가하여 실패 시 원인을 쉽게 파악할 수 있도록 합니다.

### 4. 테스트 계획 수 관리

`plan(n)`의 숫자는 실제 테스트 케이스 수와 일치해야 합니다. 테스트를 추가/제거할 때마다 업데이트해야 합니다.

## 참고 자료

- [pgTAP 공식 문서](https://pgtap.org/)
- [TAP 프로토콜](https://testanything.org/)
- [PostgreSQL 확장 개발 가이드](https://www.postgresql.org/docs/current/extend.html)
- [PostgreSQL JSON 함수](https://www.postgresql.org/docs/current/functions-json.html)
