import { defaultCache } from '@serwist/next/worker';
import type { PrecacheEntry, SerwistGlobalConfig } from 'serwist';
import { Serwist } from 'serwist';
import { customCache } from './customCache';
import { swLogger } from '@/debug/sw';
import { captureException } from '@sentry/nextjs';

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.

declare global {
    interface WorkerGlobalScope extends SerwistGlobalConfig {
        __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
    }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
    precacheEntries: self.__SW_MANIFEST,
    precacheOptions: {
        cleanupOutdatedCaches: true,
        cleanURLs: false,
        directoryIndex: null,
        fallbackToNetwork: true,
        ignoreURLParametersMatching: [/.*/],
    },
    skipWaiting: true,
    navigationPreload: true,
    clientsClaim: true,
    runtimeCaching: customCache,
    offlineAnalyticsConfig: false,
    disableDevLogs: true,
    fallbacks: {
        entries: [
            {
                matcher({ request }) {
                    return request.destination === 'document' && request.url !== '/home';
                },
                url: '/~fallback',
            },
        ],
    },
});

swLogger('Service Worker 시작');

// PWA 설치 프롬프트 차단
self.addEventListener('beforeinstallprompt', (event) => {
    swLogger('PWA 설치 프롬프트 차단');
    event.preventDefault();
    return false;
});

self.addEventListener('install', (event) => {
    swLogger('install 절차 시작');
    serwist.handleInstall(event);
});
async function reloadClients() {
    try {
        const clients = await self.clients.matchAll({ type: 'window' });
        clients.forEach((client) => {
            client.postMessage({ type: 'RELOAD_REQUEST' });
            // if (client.focused) {
            //     swLogger('현재 탭을 리로드 합니다.');
            //     client.navigate(client.url).catch((error) => {
            //         swLogger(`탭 리로드 실패: ${error.message}`);
            //     });
            // } else {
            //     swLogger('다른 탭을 리로드 요청합니다.');
            //     client.postMessage({ type: 'RELOAD_REQUEST' });
            // }
        });
    } catch (error) {
        swLogger(`클라이언트 처리 중 에러 발생: ${(error as Error).message}`);
        captureException(error);
    }
}

self.addEventListener('activate', async (event) => {
    swLogger('activate 절차 시작');
    await serwist.handleActivate(event);
});

self.addEventListener('fetch', (event) => {
    swLogger('fetch 이벤트를 받았습니다:', event.request.url);
    serwist.handleFetch(event);
});

self.addEventListener('message', (event) => {
    swLogger('메시지 이벤트를 받았습니다:', event.data);
    serwist.handleCache(event);
});

serwist.addEventListeners();
