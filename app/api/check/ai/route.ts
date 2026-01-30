/**
 * AI 기능 설정 상태를 반환하는 API
 * 클라이언트에서 AI 기능 활성화 여부를 확인하여 UI에 반영할 수 있습니다.
 */

import { isAIEnabled, canUseAI, canUseEmbeddings } from '@/functions/ai/config';

export async function GET() {
    const status = {
        enabled: isAIEnabled(),
        canUseChat: canUseAI(),
        canUseEmbeddings: canUseEmbeddings(),
    };

    return new Response(JSON.stringify(status), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=60', // 1분간 캐시
        },
    });
}
