import { Metadata } from 'next';
import { createClient } from '@/supabase/utils/server';
import Link from 'next/link';
import SharePageContent from './SharePageContent';
import './style.css';
import { headers } from 'next/headers';
import { publishLogger } from '@/debug/publish';
import { getTranslations } from 'next-intl/server';

const APP_URL = process.env.NEXT_PUBLIC_HOST || 'https://otu.ai';

/*
아래와 같이 스타일을 작업해줘. 
680px를 최대폭으로 센터 정렬

header 영역(제목, 날짜, 이름)을 391px 높이로 지정
title y 191px위치, font-size : 65px, 
날짜, 이름, 링크복사 : font-size: 35px 

footer 영역은 285px로 지정 @page.tsx 
*/

// 공통 데이터 페칭 함수
async function fetchPageData(id: string, caller: string) {
    const cacheKey = `share-page-${id}`;
    publishLogger(`[${caller}] Using cache key ${cacheKey}`);

    const fetchUrl = new URL(
        `/api/share/${id}`,
        `http://${(await headers()).get('host')}`
    ).toString();
    publishLogger(`[${caller}] Fetching from ${fetchUrl}`);

    publishLogger(`[${caller}] fetch start`);
    const response = await fetch(fetchUrl, {
        next: {
            revalidate: 3600,
            tags: [cacheKey],
        },
    });
    publishLogger(`[${caller}] fetch end with status: ${response.status}`);

    // 응답 클론 생성
    const clonedResponse = response.clone();
    const responseData = await clonedResponse.json();

    // 비공개 페이지(403) 또는 찾을 수 없는 페이지(404)의 경우 오류를 던지지 않고 상태 정보 반환
    if (response.status === 403 || response.status === 404) {
        publishLogger(`[${caller}] Page access restricted: ${response.status}`, responseData);
        return {
            isError: true,
            status: response.status,
            message: responseData.error,
        };
    }

    // 그 외 오류의 경우
    if (!response.ok) {
        publishLogger(`[${caller}] Response not OK, status ${response.status}`, responseData);
        throw new Error(responseData.error || '요청하신 페이지를 불러오는 중 문제가 발생했습니다.');
    }

    publishLogger(`[${caller}] Successfully fetched data`, responseData);
    return {
        isError: false,
        ...responseData,
    };
}

// 메타데이터 동적 생성
export async function generateMetadata(props: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const params = await props.params;
    publishLogger(`[generateMetadata] Started for page ${params.id}`);

    try {
        // 번역 함수 불러오기
        const t = await getTranslations('SharePage');
        const data = await fetchPageData(params.id, 'generateMetadata');

        // 비공개 또는 존재하지 않는 페이지인 경우
        if (data.isError) {
            return {
                title: data.status === 403 ? t('error.private') : t('error.title'),
                description: data.message || t('error.description'),
            };
        }

        const { page } = data;

        // 본문에서 메타 설명 추출 (HTML 태그 제거, 150자 제한)
        const description = page.body
            .replace(/<[^>]*>/g, '') // HTML 태그 제거
            .slice(0, 150) // 150자로 제한
            .trim();

        publishLogger(`[generateMetadata] Generated metadata for page ${params.id}`);
        return {
            title: page.title || t('meta.default-title'),
            description: description || t('meta.default-description'),
            openGraph: {
                title: page.title || t('meta.default-title'),
                description: description || t('meta.default-description'),
                type: 'article',
                url: `${APP_URL}/share/${params.id}`,
            },
            twitter: {
                card: 'summary_large_image',
                title: page.title || t('meta.default-title'),
                description: description || t('meta.default-description'),
            },
        };
    } catch (error) {
        // 오류 시에도 번역 함수 불러오기
        const t = await getTranslations('SharePage');
        publishLogger(`[generateMetadata] Error for page ${params.id}`, error);
        console.error('메타데이터 생성 오류:', error);
        return {
            title: t('error.meta-error-title'),
            description: t('error.meta-error-description'),
        };
    }
}

export default async function SharePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const t = await getTranslations('SharePage');
    publishLogger(`[SharePage] Rendering started for page ${params.id}`);

    try {
        const data = await fetchPageData(params.id, 'SharePage');

        // 비공개 또는 존재하지 않는 페이지인 경우
        if (data.isError) {
            // 적절한 메시지를 표시하는 UI 반환
            return (
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold mb-4">
                        {data.status === 403 ? t('error.private') : t('error.title')}
                    </h1>
                    <p className="text-gray-600 mb-6">
                        {data.status === 403
                            ? t('error.private-description')
                            : t('error.description')}
                    </p>
                    <Link href="/" className="text-indigo-600 hover:text-indigo-800">
                        {t('error.home')}
                    </Link>
                </div>
            );
        }

        const { page, user, formattedDate } = data;

        publishLogger(`[SharePage] Creating content component for page ${params.id}`);
        const content = (
            <SharePageContent
                title={page.title}
                body={page.body}
                formattedDate={formattedDate}
                nickname={user.nickname}
                profileImgUrl={user.profile_img_url}
            />
        );
        publishLogger(`[SharePage] Content component created for page ${params.id}`);
        return content;
    } catch (error) {
        publishLogger(`[SharePage] Error rendering page ${params.id}`, error);
        console.error('페이지 데이터 가져오기 오류:', error);
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">{t('error.meta-error-title')}</h1>
                <p className="text-gray-600 mb-6">{t('error.meta-error-description')}</p>
                <Link href="/" className="text-indigo-600 hover:text-indigo-800">
                    {t('error.home')}
                </Link>
            </div>
        );
    }
}
