// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
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
            // Supabase 통합 추가
            supabaseIntegration(SupabaseClient, Sentry, {
                tracing: true, // 성능 추적 활성화
                breadcrumbs: true, // 브레드크럼 활성화
                errors: true, // 오류 추적 활성화
            }),

            // Edge 관련 요청에서 Supabase와 중복되는 스팬 제거
            Sentry.winterCGFetchIntegration({
                breadcrumbs: true, // 브레드크럼 활성화
                shouldCreateSpanForRequest: (url) => {
                    return !url.startsWith(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest`);
                },
            }),
        ],

        // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
        tracesSampleRate: 1,

        // Setting this option to true will print useful information to the console while you're setting up Sentry.
        debug: false, // 설정 시 유용한 정보 출력 (프로덕션에서는 false로 변경 가능)
    });
}
