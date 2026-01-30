import type { RuntimeCaching } from 'serwist';
import {
    CacheFirst,
    ExpirationPlugin,
    NetworkFirst,
    NetworkOnly,
    RangeRequestsPlugin,
    StaleWhileRevalidate,
} from 'serwist';

export const PAGES_CACHE_NAME = {
    rscPrefetch: 'pages-rsc-prefetch',
    rsc: 'pages-rsc',
    html: 'pages',
    share: 'share-pages',
} as const;

const isPwaDisabled = process.env.NEXT_PUBLIC_PWA_DISABLED !== 'false';

const THIRTY_DAYS = 30 * 24 * 60 * 60; // 30일(초)
const WEEK_DAYS = 7 * 24 * 60 * 60; // 7일(초)
const ONE_DAY = 24 * 60 * 60; // 1일(초)
const FIVE_MINUTES = 5 * 60; // 5분(초)

/**
 * The default, recommended list of caching strategies for applications
 * built with Next.js.
 *
 * @see https://serwist.pages.dev/docs/next/worker-exports#default-cache
 */
export const customCache: RuntimeCaching[] = isPwaDisabled
    ? [
          {
              matcher: /.*/i,
              handler: new NetworkOnly(),
          },
      ]
    : [
          // sw 보다 http 캐쉬가 기본적으로 더 빠르고, 오프라인 기능은 잠정 보류 할 것이기 때문에 주석처리
          //   {
          //       matcher: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
          //       handler: new CacheFirst({
          //           cacheName: 'google-fonts-webfonts',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 4,
          //                   maxAgeSeconds: THIRTY_DAYS,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
          //       handler: new StaleWhileRevalidate({
          //           cacheName: 'google-fonts-stylesheets',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 4,
          //                   maxAgeSeconds: THIRTY_DAYS,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
          //       handler: new StaleWhileRevalidate({
          //           cacheName: 'static-font-assets',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 4,
          //                   maxAgeSeconds: THIRTY_DAYS,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
          //       handler: new StaleWhileRevalidate({
          //           cacheName: 'static-image-assets',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 100,
          //                   maxAgeSeconds: WEEK_DAYS,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /\.(?:js)$/i,
          //       handler: new StaleWhileRevalidate({
          //           cacheName: 'static-js-assets',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 48,
          //                   maxAgeSeconds: ONE_DAY,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /\.(?:css|less)$/i,
          //       handler: new StaleWhileRevalidate({
          //           cacheName: 'static-style-assets',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 32,
          //                   maxAgeSeconds: ONE_DAY,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /\/_next\/data\/.+\/.+\.json$/i,
          //       handler: new NetworkFirst({
          //           cacheName: 'next-data',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 32,
          //                   maxAgeSeconds: ONE_DAY,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: /\.(?:json|xml|csv)$/i,
          //       handler: new NetworkFirst({
          //           cacheName: 'static-data-assets',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 32,
          //                   maxAgeSeconds: ONE_DAY,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //       }),
          //   },
          //   {
          //       matcher: ({ sameOrigin, url: { pathname } }) => {
          //           // Exclude /api/auth/callback/* to fix OAuth workflow in Safari without having
          //           // an impact on other environments
          //           // The above route is the default for next-auth, you may need to change it if
          //           // your OAuth workflow has a different callback route.
          //           // Issue: https://github.com/shadowwalker/next-pwa/issues/131#issuecomment-821894809
          //           // TODO(ducanhgh): Investigate Auth.js's "/api/auth/*" failing when we allow them
          //           // to be cached (the current behaviour).
          //           if (!sameOrigin || pathname.startsWith('/auth/v1')) {
          //               return false;
          //           }

          //           if (pathname.startsWith('/api/check/version')) {
          //               return false;
          //           }

          //           if (pathname.startsWith('/api/share/')) {
          //               return false;
          //           }

          //           if (pathname.startsWith('/api/')) {
          //               return true;
          //           }

          //           return false;
          //       },
          //       method: 'GET',
          //       handler: new NetworkFirst({
          //           cacheName: 'apis',
          //           plugins: [
          //               new ExpirationPlugin({
          //                   maxEntries: 16,
          //                   maxAgeSeconds: ONE_DAY,
          //                   maxAgeFrom: 'last-fetched',
          //               }),
          //           ],
          //           networkTimeoutSeconds: 10, // fallback to cache if API does not response within 10 seconds
          //       }),
          //   },
          {
              matcher: ({ request, url: { pathname }, sameOrigin }) =>
                  request.headers.get('RSC') === '1' &&
                  request.headers.get('Next-Router-Prefetch') === '1' &&
                  sameOrigin &&
                  !pathname.startsWith('/api/'),
              handler: new StaleWhileRevalidate({
                  cacheName: PAGES_CACHE_NAME.rscPrefetch,
                  plugins: [
                      new ExpirationPlugin({
                          maxEntries: 32,
                          maxAgeSeconds: WEEK_DAYS,
                      }),
                  ],
              }),
          },
          {
              matcher: ({ request, url: { pathname }, sameOrigin }) =>
                  request.headers.get('RSC') === '1' && sameOrigin && !pathname.startsWith('/api/'),
              handler: new StaleWhileRevalidate({
                  cacheName: PAGES_CACHE_NAME.rsc,
                  plugins: [
                      new ExpirationPlugin({
                          maxEntries: 32,
                          maxAgeSeconds: WEEK_DAYS,
                      }),
                  ],
              }),
          },
      ];
