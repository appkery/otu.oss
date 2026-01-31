import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/utils/server';
import { authLogger } from '@/debug/auth';
import { cookies } from 'next/headers';
import { handleNewUserSetup } from '@/functions/sample/handleNewUserSetup.server';

export async function POST(request: Request) {
    try {
        const supabase = await createClient();
        const body = await request.json().catch(() => ({}));
        const refresh_token = body?.refresh_token as string | undefined;

        if (!refresh_token) {
            return NextResponse.json(
                { ok: false, error: 'missing_refresh_token' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase.auth.refreshSession({ refresh_token });
        authLogger('native-bridge:setSession', { ok: !error, user: data?.user?.id });

        if (error) {
            console.error('Native bridge error:', error);
            return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
        }

        // 신규 사용자 설정 (usage 레코드 추가 + 샘플 페이지 생성)
        if (data?.user?.id) {
            await handleNewUserSetup(data.user.id, supabase, 'native-bridge');
        }

        // 로그인 후 동기화가 즉시 동작하도록 클라이언트에서 읽는 쿠키를 설정한다.
        // - OTUID, SESSION_USER_ID_FOR_CHECK_SYNC: 사용자 식별/검증용(디버그 및 일부 가드 로직)
        try {
            // const cookieStore = await cookies();
            // 쿠키 설정 로직 제거됨
        } catch (cookieErr) {
            console.error('Native bridge error:', cookieErr);
            authLogger('native-bridge:failed to set cookies', cookieErr);
        }

        return new NextResponse(null, { status: 204 });
    } catch (e: any) {
        console.error('Native bridge error:', e);
        return NextResponse.json({ ok: false, error: e?.message || 'unknown' }, { status: 500 });
    }
}
