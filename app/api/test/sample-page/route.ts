import { NextResponse } from 'next/server';
import { createClient } from '@/supabase/utils/server';
import { seedSamplePageIfNeeded } from '@/functions/sample/seedSamplePageIfNeeded.server';

/**
 * 테스트용 샘플 페이지 생성 엔드포인트
 * 개발 환경에서만 사용 가능
 */
export async function GET() {
    // 개발 환경에서만 허용
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json({ error: 'Only available in development' }, { status: 403 });
    }

    try {
        const supabase = await createClient();

        // 현재 로그인한 사용자 확인
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: '로그인이 필요합니다' }, { status: 401 });
        }

        // 샘플 페이지 생성
        await seedSamplePageIfNeeded(user.id, supabase);

        return NextResponse.json({
            success: true,
            message: '샘플 페이지 생성 시도 완료',
            userId: user.id,
        });
    } catch (error) {
        console.error('샘플 페이지 생성 테스트 실패:', error);
        return NextResponse.json(
            {
                error: '샘플 페이지 생성 실패',
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}
