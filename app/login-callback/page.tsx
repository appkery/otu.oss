// app/login-callback/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Loading from '../(ui)/loading';
import '@/app/globals.css';

export default function LoginCallbackPage() {
    const t = useTranslations('auth');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // URL 쿼리 파라미터에서 code를 추출합니다.
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code) {
            // code가 있으면 커스텀 스킴으로 리디렉션합니다.
            const customSchemeUrl = `otuai://login-callback?code=${code}`;
            window.location.href = customSchemeUrl;
        } else {
            // code가 없는 경우 (오류)
            const errorDescription = params.get('error_description') || 'Authentication failed';
            setError(t('callback-error'));

            // 1. 오류를 콘솔에 로깅합니다.
            console.error('Login callback error:', errorDescription);
        }
    }, [t]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                fontSize: '16px',
                fontWeight: 'normal',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            {/* {error ? <>{error}</> : <Loading />} */}
            <Loading />
        </div>
    );
}
