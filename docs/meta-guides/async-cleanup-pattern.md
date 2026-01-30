# useEffect에서 비동기 작업 취소하기

## 문제 상황

`useEffect` 내부에서 비동기 작업(API 호출 등)을 수행할 때, 컴포넌트가 unmount되거나 의존성이 변경되어 effect가 재실행되면 문제가 발생할 수 있습니다.

### 문제가 되는 코드

```tsx
useEffect(() => {
    const fetchData = async () => {
        const data = await api.getData();
        setData(data); // ⚠️ 컴포넌트가 이미 unmount되었을 수 있음
    };

    fetchData();
}, [dependency]);
```

**문제점:**

- 컴포넌트가 unmount된 후에도 상태 업데이트가 시도됨
- React 경고 발생: "Can't perform a React state update on an unmounted component"
- 불필요한 상태 업데이트로 인한 성능 저하

## 해결 방법: isCancelled 패턴

`isCancelled` 플래그를 사용하여 비동기 작업 완료 후 상태 업데이트를 방지합니다.

### 올바른 코드

```tsx
useEffect(() => {
    if (!shouldFetch) return;

    let isCancelled = false;

    const fetchData = async () => {
        try {
            const data = await api.getData();

            // 상태 업데이트 전에 취소 여부 확인
            if (!isCancelled) {
                setData(data);
            }
        } catch (error) {
            if (!isCancelled) {
                setError(error);
            }
        }
    };

    fetchData();

    // cleanup 함수: effect가 재실행되거나 unmount될 때 호출됨
    return () => {
        isCancelled = true;
    };
}, [shouldFetch]);
```

## 동작 원리

1.  **Effect 실행 시**: `isCancelled = false`로 초기화
2.  **비동기 작업 시작**: API 호출 등
3.  **Cleanup 실행 시**: `isCancelled = true`로 설정
    - 컴포넌트 unmount
    - 의존성 변경으로 effect 재실행
4.  **비동기 작업 완료 시**: `isCancelled` 확인 후 상태 업데이트 여부 결정

## 실제 사용 예시

```tsx
useEffect(
    function fetchUsageAndProfile() {
        if (!open) return;

        let isCancelled = false;

        const fetchUsage = async () => {
            try {
                const { data, error } = await supabase
                    .from('usage')
                    .select('*')
                    .eq('user_id', userId)
                    .maybeSingle();

                if (!isCancelled) {
                    setUsageInfo(data ?? null);
                }
            } catch (error) {
                if (!isCancelled) {
                    // 에러 처리
                }
            }
        };

        fetchUsage();

        return () => {
            isCancelled = true;
        };
    },
    [open]
);
```

## 주의사항

1.  **모든 상태 업데이트 전에 확인**: 비동기 작업 완료 후 모든 `setState` 호출 전에 `!isCancelled` 체크
2.  **에러 처리에도 적용**: `catch` 블록 내부의 상태 업데이트도 보호
3.  **중첩된 비동기 작업**: 여러 개의 비동기 작업이 있을 경우 각각 확인 필요

## 언제 사용해야 하나?

- ✅ `useEffect` 내부에서 비동기 작업 수행 시
- ✅ 컴포넌트가 자주 mount/unmount될 수 있는 경우
- ✅ 의존성이 자주 변경될 수 있는 경우
- ✅ 사용자 상호작용으로 인해 빠르게 상태가 변경될 수 있는 경우

## 대안: AbortController

더 복잡한 경우 `AbortController`를 사용하여 실제 요청을 취소할 수도 있습니다:

```tsx
useEffect(() => {
    const controller = new AbortController();

    fetch('/api/data', { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => setData(data));

    return () => {
        controller.abort(); // 실제 네트워크 요청 취소
    };
}, []);
```

하지만 대부분의 경우 `isCancelled` 패턴으로 충분합니다.
