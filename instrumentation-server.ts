// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabaseIntegration } from '@supabase/sentry-js-integration';

// 환경변수로 Sentry 활성화 여부 제어
const ENABLE_SENTRY = process.env.NEXT_PUBLIC_ENABLE_SENTRY === 'true';

if (ENABLE_SENTRY) {
    // Sentry는 개발 환경에서도 초기화
    Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        integrations: [
            supabaseIntegration(SupabaseClient, Sentry, {
                tracing: true, // 성능 추적 활성화
                breadcrumbs: true, // 브레드크럼 활성화 (오류 전 맥락 정보)
                errors: true, // 오류 추적 활성화
            }),

            Sentry.nativeNodeFetchIntegration({
                breadcrumbs: true,
                ignoreOutgoingRequests: (url) => {
                    return url.startsWith(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest`);
                },
            }),
        ],

        tracesSampleRate: 0.1,
        debug: false,
    });
}
