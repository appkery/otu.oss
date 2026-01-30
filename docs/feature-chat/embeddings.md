# 임베딩 생성 및 Vector DB

## 개요

페이지 내용을 벡터 임베딩으로 변환하여 Vector DB에 저장하고, AI 채팅에서 유사도 검색에 활용합니다. 이 문서는 임베딩 생성 프로세스와 Vector DB 구조를 설명합니다.

## Vector DB 구조

### documents 테이블

페이지 내용을 벡터 임베딩으로 변환하여 저장하는 테이블입니다.

**주요 컬럼**:

- `id`: 문서 ID (bigint)
- `content`: 원본 텍스트 (청크 단위로 분할됨)
- `metadata`: 메타데이터 (jsonb)
    - `type`: 문서 타입 (예: "page")
    - `title`: 페이지 제목
- `embedding`: 벡터 임베딩 (vector 타입, 1024차원)
- `page_id`: 페이지 ID (text)
- `user_id`: 사용자 ID
- `is_public`: 공개 여부 (boolean)

**인덱스**:

- HNSW (Hierarchical Navigable Small World) 인덱스로 고속 유사도 검색 지원

## 임베딩 생성 프로세스

### 1. 트리거: 페이지 생성/수정

**트리거 시점**:

- 페이지 생성
- 페이지 본문 수정
- 페이지 제목 수정

**동작**: `job_queue` 테이블에 EMBEDDING 작업 추가

```typescript
{
  job_name: 'EMBEDDING',
  payload: page_id,
  user_id: user_id,
  scheduled_time: 현재 시간,
  status: 'PENDING'
}
```

### 2. 스케줄러: 작업 처리

**API 엔드포인트**: `/api/ai/embedding-scheduler`

**실행 방식**:

- CRON: 매분 실행 (프로덕션)
- 수동: `/api/ai/embedding-scheduler?user_id={userId}` (개발 중 즉시 실행)

**처리 흐름**:

1. `job_queue`에서 PENDING 또는 RUNNING 작업 조회
2. 각 작업을 병렬 처리 (최대 100개 동시 처리)
3. 작업 상태를 RUNNING으로 업데이트
4. 임베딩 생성 프로세스 실행
5. 성공 시 작업 삭제, 실패 시 재시도 (30-60분 후)

### 3. 텍스트 분할 (Chunking)

**라이브러리**: `RecursiveCharacterTextSplitter` (LangChain)

**설정**:

- `chunkSize`: 600자 (`RAG_SEARCH_MIN_LENGTH_THRESHOLD`)
- `chunkOverlap`: 1자 (청크 간 최소 중복)

**분할 전 전처리**:

```typescript
// HTML을 플레인 텍스트로 변환 (링크, 이미지 제외)
const pageContent = `<h1>${content.title}</h1>${htmlToPlainText(content.body)}`;
```

**분할 결과**: 페이지가 여러 개의 Document로 분할됨

### 4. 임베딩 생성

**API 제공자**: Cohere

- **엔드포인트**: `https://api.cohere.ai/v1/embed`
- **모델**: `embed-multilingual-v3.0`
- **차원**: 1024
- **타입**:
    - `search_document`: 문서 저장용 (documents 테이블)
    - `search_query`: 검색 쿼리용 (similaritySearch API)

**요청 구조**:

```typescript
{
  model: 'embed-multilingual-v3.0',
  texts: [text],
  truncate: 'NONE',
  input_type: 'search_document'  // 문서 저장 시
}
```

**응답 구조**:

```typescript
{
  texts: string[],
  embeddings: number[][],  // 1024차원 벡터
  meta: {
    billed_units: {
      input_tokens: number
    }
  }
}
```

### 5. DB 저장

**저장 전 기존 문서 삭제**:

```typescript
// 같은 page_id의 기존 임베딩 모두 삭제
await supabase.from('documents').delete().eq('page_id', page_id);
```

**새 문서 삽입**: 청크별로 개별 레코드 삽입

```typescript
await supabase.from('documents').insert({
    content: origin, // 원본 텍스트
    embedding: converted, // 1024차원 벡터
    metadata: { type, title },
    page_id: id,
    user_id: user_id,
});
```

## Similarity 검색 메커니즘

### PostgreSQL 함수: match_documents

**함수 시그니처**:

```sql
CREATE FUNCTION match_documents(
  query_embedding vector,
  match_threshold double precision,
  match_count integer,
  input_page_id text DEFAULT NULL
)
RETURNS TABLE(
  id bigint,
  content text,
  metadata jsonb,
  similarity double precision,
  page_id text
)
```

**함수 로직**:

```sql
SELECT
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) AS similarity,
    documents.page_id
FROM documents
WHERE
    1 - (documents.embedding <=> query_embedding) > match_threshold AND
    (input_page_id IS NULL OR documents.page_id = input_page_id)
ORDER BY similarity DESC
LIMIT match_count;
```

**핵심 요소**:

- **Cosine Similarity**: `<=>` 연산자 (pgvector 확장)
    - `1 - (embedding <=> query_embedding)` = 코사인 유사도
- **Threshold 필터링**: 유사도 0.55 이상만 반환
- **Page ID 필터링**: `current` 모드에서는 특정 페이지만 검색
- **정렬**: 유사도 내림차순
- **개수 제한**: 최대 10개

**성능 최적화**:

- HNSW 인덱스로 고속 근사 검색
- Edge Runtime 지원 (저지연 응답)

## 주요 특징

### 다국어 지원

- Cohere의 `embed-multilingual-v3.0` 모델로 한국어/영어 동시 지원

### 증분 업데이트

- 페이지 수정 시 해당 페이지의 임베딩만 재생성
- 전체 문서 재생성 불필요

### 배치 처리

- 최대 100개 작업 동시 처리 (`p-map` 라이브러리)
- 작업 실패 시 자동 재시도 (30-60분 후)

### 페이지 삭제 시 자동 정리

- 페이지 삭제 시 관련 임베딩 자동 삭제 (CASCADE)

## 관련 파일

### API 라우트

- **스케줄러**: `app/api/ai/embedding-scheduler/route.ts`
    - 임베딩 생성 프로세스
    - job_queue 관리
- **검색**: `app/api/ai/similaritySearch/route.tsx`
    - 벡터 유사도 검색

### 유틸리티

- **임베딩 생성**: `functions/ai.js`
    - `createEmbeddingUsingCohere()` 함수
- **상수**: `functions/constants.ts`
    - `RAG_SEARCH_MIN_LENGTH_THRESHOLD` (600)

### 데이터베이스

- **테이블**: Supabase `documents`, `job_queue`
- **함수**: PostgreSQL `match_documents`
- **마이그레이션**: `supabase/migrations/`
    - `*_add_page_id_to_match_documents.sql`
    - `*_add_hnsw_index_to_documents.sql`

## 디버깅

### 로거

- **임베딩**: `embeddingLogger` (`@/debug/embedding`)
- **CRON**: `cronLogger` (`@/debug/cron`)

### 모니터링

- Sentry CheckIn으로 CRON 작업 모니터링
- 작업 실패 시 Sentry 에러 리포트

### 테스트

- 수동 실행: `/api/ai/embedding-scheduler?user_id={userId}`
- 로컬 디버깅: `localStorage.debug = 'embedding'`

## 관련 문서

- [RAG 모드](./rag-modes.md): 임베딩 검색을 활용하는 RAG 기능
