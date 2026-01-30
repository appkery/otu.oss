import { NextResponse } from 'next/server';
import { createSuperClient } from '@/supabase/utils/super';
import { publishLogger } from '@/debug/publish';

export const revalidate = 300;

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    publishLogger(`API route: GET request for page ${params.id}`);
    try {
        // 서비스 롤을 사용한 Supabase 클라이언트 생성 (RLS 우회)
        const supabase = await createSuperClient();
        publishLogger(`API route: Created super client for page ${params.id}`);

        // 페이지 데이터 가져오기
        publishLogger(`API route: Fetching page data ${params.id}`);
        const { data: pageData, error } = await supabase
            .from('page')
            .select('id, title, body, created_at, updated_at, user_id, img_url, is_public')
            .eq('id', params.id)
            .single();

        // 에러 처리 또는 데이터가 없는 경우
        if (error || !pageData) {
            publishLogger(`API route: Page not found for ${params.id}`, error);
            return NextResponse.json({ error: '페이지를 찾을 수 없습니다.' }, { status: 404 });
        }

        // 비공개 페이지인 경우
        if (!pageData.is_public) {
            publishLogger(`API route: Page ${params.id} is private`);
            return NextResponse.json({ error: '비공개 페이지입니다.' }, { status: 403 });
        }

        // 작성자 정보 가져오기 (서비스 롤로 RLS 우회)
        // 보안을 위해 필요한 필드만 조회
        publishLogger(`API route: Fetching user data for page ${params.id}`);
        const { data: userData, error: userError } = await supabase
            .from('user_info')
            .select('nickname, profile_img_url')
            .eq('user_id', pageData.user_id)
            .single();

        if (userError) {
            publishLogger(`API route: Error fetching user data for page ${params.id}`, userError);
        }

        // 날짜 포맷팅
        const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
        };

        // 응답 데이터 구성 (민감하지 않은 정보만 포함)
        const responseData = {
            page: {
                id: pageData.id,
                title: pageData.title,
                body: pageData.body,
                created_at: pageData.created_at,
                img_url: pageData.img_url,
            },
            user: userData
                ? { nickname: userData.nickname, profile_img_url: userData.profile_img_url }
                : { nickname: '익명', profile_img_url: null },
            formattedDate: formatDate(pageData.created_at),
        };

        publishLogger(`API route: Successfully processed data for page ${params.id}`);
        return NextResponse.json(responseData);
    } catch (error) {
        publishLogger(`API route: Server error for page ${params.id}`, error);
        console.error('Share API 오류:', error);
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
