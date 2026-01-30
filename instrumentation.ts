// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

// 환경변수로 Sentry 활성화 여부 제어
const ENABLE_SENTRY = process.env.NEXT_PUBLIC_ENABLE_SENTRY === 'true';

export function register() {
    if (!ENABLE_SENTRY) {
        return;
    }

    // Sentry는 개발 환경에서도 초기화
    Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

        // Adjust this value in production, or use tracesSampler for greater control
        tracesSampleRate: 0.01,

        // Setting this option to true will print useful information to the console while you're setting up Sentry.
        debug: false,
    });
}

// Sentry가 비활성화된 경우 빈 함수 사용
export const onRequestError = ENABLE_SENTRY ? Sentry.captureRequestError : () => {};
