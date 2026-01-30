import { NextResponse } from 'next/server';

if (!process.env.NEXT_PUBLIC_ANDROID_sha256_cert_fingerprints) {
    console.error(
        'NEXT_PUBLIC_ANDROID_sha256_cert_fingerprints 값이 존재하지 않습니다. .env.template 파일을 참고하세요.'
    );
}

export async function GET() {
    const fingerprints = process.env.NEXT_PUBLIC_ANDROID_sha256_cert_fingerprints || '';

    const sha256CertFingerprints = fingerprints.split(',').map((fp) => fp.trim());

    return NextResponse.json([
        {
            relation: ['delegate_permission/common.handle_all_urls'],
            target: {
                namespace: 'android_app',
                package_name: 'ai.otu.android',
                sha256_cert_fingerprints: sha256CertFingerprints,
            },
        },
    ]);
}
