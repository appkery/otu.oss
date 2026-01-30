// 이 파일은 버전 정보를 반환하는 API 엔드포인트를 정의합니다.

if (
    process.env.NEXT_PUBLIC_PWA_DISABLED === 'false' &&
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA === undefined
) {
    console.error(
        'NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA가 정의되지 않았습니다. 이 데이터는 클라이언트와 서버의 Service Worker 버전을 비교하는 데 사용됩니다. iOS WebKit에서는 Service Worker가 정상적으로 동작하지 않는 경우가 있어, 클라이언트와 서버 버전이 다를 경우 새로고침을 유도하기 위해 필요합니다. 서비스 워커를 사용하지 않는 개발서버에서는 이 메시지를 무시하십시오. '
    );
}

export async function GET(req: Request) {
    const commitId = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'unknown';
    return new Response(commitId, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-store', // 네트워크 캐쉬를 못하게 설정
        },
    });
}
