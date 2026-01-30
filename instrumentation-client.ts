// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { captureRouterTransitionStart } from '@sentry/nextjs';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabaseIntegration } from '@supabase/sentry-js-integration';

// 환경변수로 Sentry 활성화 여부 제어
const ENABLE_SENTRY = process.env.NEXT_PUBLIC_ENABLE_SENTRY === 'true';

if (ENABLE_SENTRY) {
    // Sentry는 개발 환경에서도 초기화
    Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        // Adjust this value in production, or use tracesSampler for greater control
        tracesSampleRate: 0.05,

        // Setting this option to true will print useful information to the console while you're setting up Sentry.
        debug: false,

        replaysOnErrorSampleRate: 0,
        maxBreadcrumbs: 150,
        // This sets the sample rate to be 10%. You may want this to be 100% while
        // in development and sample at a lower rate in production
        replaysSessionSampleRate: 0,
        // profile
        profilesSampler: (context) => {
            // 특정 사용자 ID 목록
            const allowedUserIds = [
                '671e13db-492e-4779-a39e-a9f4cd89c245',
                'f0821b42-3534-40a5-9ff0-90452b0e704c',
            ];

            // context에서 사용자 ID 가져오기
            const userId = context.user?.id;

            // 특정 사용자일 경우 100% 프로파일링
            if (userId && allowedUserIds.includes(userId)) {
                return 1.0; // 100% 샘플링
            }

            return 0.01;
        },

        integrations: [
            supabaseIntegration(SupabaseClient, Sentry, {
                tracing: false,
                breadcrumbs: true,
                errors: true,
            }),

            Sentry.browserTracingIntegration({
                shouldCreateSpanForRequest: (url) => {
                    return !url.startsWith(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest`);
                },
            }),

            // Sentry.replayIntegration({
            //     maskAllText: true,
            //     blockAllMedia: true,
            // }),

            // Sentry.feedbackIntegration({
            //     colorScheme: 'system',
            //     showBranding: true,
            //     autoInject: false,
            //     showName: false,
            //     formTitle: '버그 리포팅',
            //     messageLabel: '증상',
            //     messagePlaceholder: '버그나 개선사항을 발견했다면 이곳에 입력해주세요.',
            //     submitButtonLabel: '전송',
            //     cancelButtonLabel: '취소',
            //     themeDark: {
            //         background: '#1f1f1f',
            //     },
            //     successMessageText: '의견 주셔서 감사합니다. 빠른 시일 내에 확인하겠습니다.',
            //     enableScreenshot: false,
            // }),
        ],

        // Optional: 오류 발생 시 보고 대화 상자 표시 설정
        // beforeSend(event, hint) {
        //   if ((process.env.NODE_ENV === 'development') && event.exception && event.event_id) {
        //     Sentry.showReportDialog({
        //       eventId: event.event_id,
        //       lang: "ko",
        //       title: "죄송합니다. 오류가 발생했습니다",
        //       subtitle: "개발팀에 문제가 전달 되었습니다. 좀 더 자세한 내용을 입력해주시면 더 빠른 해결이 가능합니다.",
        //       subtitle2: "",
        //       labelComments: "문제에 대한 자세한 설명",
        //       labelSubmit: "전송",
        //       showBranding: false,
        //       successMessage: "의견 주셔서 감사합니다. 빠른 시일 내에 확인하겠습니다.",
        //     });
        //   }
        //   return event;
        // },
    });
}

// Sentry가 비활성화되어 있을 때는 빈 함수를 내보냄
export const onRouterTransitionStart = ENABLE_SENTRY ? captureRouterTransitionStart : () => {};
