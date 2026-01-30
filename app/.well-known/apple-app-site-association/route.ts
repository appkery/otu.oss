import { NextResponse } from 'next/server';

if (!process.env.NEXT_PUBLIC_ANDROID_sha256_cert_fingerprints) {
    console.error(
        'NEXT_PUBLIC_ANDROID_sha256_cert_fingerprints 값이 존재하지 않습니다. .env.template 파일을 참고하세요.'
    );
}

export async function GET() {
    return NextResponse.json([
        {
            applinks: {
                apps: [],
                details: [
                    {
                        appID: 'opentutorials.org.opnentutorials.aiotu',
                        paths: ['/*'],
                    },
                ],
            },
        },
    ]);
}
