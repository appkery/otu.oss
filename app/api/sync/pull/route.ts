import { syncLogger } from '@/debug/sync';
import { createClient } from '@/supabase/utils/server';
export const maxDuration = 300;

interface Record {
    created_at: string;
    updated_at: string;
    [key: string]: any; // 기타 모든 페이지 속성들
}

interface PageData {
    id: string;
    title: string;
    body: string;
    is_public: boolean;
    img_url: string | null;
    length: number;
    created_at: string;
    updated_at: string | null;
    last_viewed_at: string | null;
    user_id: string;
    type: string;
    folder_id: string | null;
}

interface FolderData {
    id: string;
    name: string;
    description: string | null;
    thumbnail_url: string | null;
    page_count: number;
    created_at: string;
    updated_at: string | null;
    last_page_added_at: string | null;
    user_id: string;
}

interface AlarmData {
    id: string;
    user_id: string;
    page_id: string;
    next_alarm_time: string | null;
    last_notification_id: string | null;
    sent_count: number;
    created_at: string;
    updated_at: string | null;
}

interface Changes {
    page: {
        created: Record[];
        updated: Record[];
        deleted: string[];
    };
    folder: {
        created: Record[];
        updated: Record[];
        deleted: string[];
    };
    alarm: {
        created: Record[];
        updated: Record[];
        deleted: string[];
    };
}

export async function GET(req: Request) {
    const startTime = Date.now();
    syncLogger('=== GET /api/sync/pull 시작 ===', { timestamp: new Date().toISOString() });

    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (!userData.user || userError) {
        syncLogger('❌ 인증 실패', { userError, hasUser: !!userData.user });
        return new Response('Unauthorized', {
            status: 401,
            statusText: 'Unauthorized',
        });
    }

    const userId = userData.user.id;
    syncLogger('✅ 사용자 인증 성공', { userId: userId.substring(0, 8) + '...' });

    const { searchParams } = new URL(req.url);
    const lastPulledAt = searchParams.get('last_pulled_at');

    syncLogger('📋 요청 파라미터', {
        lastPulledAt,
        searchParamsCount: Array.from(searchParams.keys()).length,
        url: req.url,
    });

    if (lastPulledAt === null || lastPulledAt === 'null') {
        syncLogger('❌ lastPulledAt 값이 유효하지 않음', { lastPulledAt });
        return new Response('Invalid lastPulledAt value', {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    let lastPulledAtTimestamp: number = parseInt(lastPulledAt as string, 10);
    if (isNaN(lastPulledAtTimestamp)) {
        syncLogger('❌ lastPulledAt 파싱 실패', { lastPulledAt, parsed: lastPulledAtTimestamp });
        return new Response('Invalid lastPulledAt value', {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        syncLogger('🔍 Supabase 클라이언트를 사용한 데이터 조회 시작');

        let changes: Changes = {
            page: { created: [], updated: [], deleted: [] },
            folder: { created: [], updated: [], deleted: [] },
            alarm: { created: [], updated: [], deleted: [] },
        };

        // lastPulledAtTimestamp를 Date 객체로 변환
        const lastPulledAtDate = new Date(lastPulledAtTimestamp).toISOString();

        syncLogger('📅 타임스탬프 변환 완료', {
            lastPulledAtTimestamp,
            lastPulledAtDate,
            timeDifferenceHours: (Date.now() - lastPulledAtTimestamp) / (1000 * 60 * 60),
        });

        // 페이지 데이터 가져오기
        const pageQueryStart = Date.now();
        syncLogger('🔎 페이지 데이터 쿼리 시작', {
            userId: userId.substring(0, 8) + '...',
            sinceDate: lastPulledAtDate,
        });

        const { data: pageData, error: pageError } = (await supabase
            .from('page')
            .select(
                'id, title, body, is_public, img_url, length, created_at, updated_at, last_viewed_at, user_id, type, folder_id'
            )
            .eq('user_id', userId)
            .gt('updated_at', lastPulledAtDate)) as { data: PageData[] | null; error: any };

        const pageQueryDuration = Date.now() - pageQueryStart;

        if (pageError) {
            syncLogger('❌ 페이지 데이터 쿼리 에러', {
                error: pageError,
                queryDuration: pageQueryDuration + 'ms',
            });
            throw pageError;
        }

        syncLogger('✅ 페이지 데이터 쿼리 성공', {
            pageDataLength: pageData?.length || 0,
            queryDuration: pageQueryDuration + 'ms',
            avgQueryTime: pageData?.length
                ? (pageQueryDuration / pageData.length).toFixed(2) + 'ms/item'
                : 'N/A',
        });

        // 폴더 데이터 가져오기
        const folderQueryStart = Date.now();
        syncLogger('🔎 폴더 데이터 쿼리 시작', {
            userId: userId.substring(0, 8) + '...',
            sinceDate: lastPulledAtDate,
        });

        const { data: folderData, error: folderError } = (await (supabase as any)
            .from('folder')
            .select(
                'id, name, description, thumbnail_url, page_count, created_at, updated_at, last_page_added_at, user_id'
            )
            .eq('user_id', userId)
            .gt('updated_at', lastPulledAtDate)) as { data: FolderData[] | null; error: any };

        const folderQueryDuration = Date.now() - folderQueryStart;

        if (folderError) {
            syncLogger('❌ 폴더 데이터 쿼리 에러', {
                error: folderError,
                queryDuration: folderQueryDuration + 'ms',
            });
            throw folderError;
        }

        syncLogger('✅ 폴더 데이터 쿼리 성공', {
            folderDataLength: folderData?.length || 0,
            queryDuration: folderQueryDuration + 'ms',
            avgQueryTime: folderData?.length
                ? (folderQueryDuration / folderData.length).toFixed(2) + 'ms/item'
                : 'N/A',
        });

        // 페이지 데이터 처리
        const processStart = Date.now();
        if (pageData && pageData.length > 0) {
            let createdCount = 0;
            let updatedCount = 0;

            for (const item of pageData) {
                const createdAtMs = new Date(item.created_at).getTime();
                const record: Record = {
                    ...(item as any),
                    // 서버 응답은 문자열(ISO)로 통일
                    created_at: item.created_at,
                    updated_at: item.updated_at ? item.updated_at : item.created_at,
                };

                if (createdAtMs > lastPulledAtTimestamp) {
                    changes.page.created.push(record);
                    createdCount++;
                } else {
                    changes.page.updated.push(record);
                    updatedCount++;
                }
            }

            syncLogger('📊 페이지 데이터 분류 완료', {
                totalProcessed: pageData.length,
                createdCount,
                updatedCount,
                processingTime: Date.now() - processStart + 'ms',
            });
        } else {
            syncLogger('ℹ️ 처리할 페이지 데이터 없음');
        }

        // 폴더 데이터 처리
        if (folderData && folderData.length > 0) {
            let folderCreatedCount = 0;
            let folderUpdatedCount = 0;

            for (const item of folderData) {
                const createdAtMs = new Date((item as any).created_at).getTime();
                const record: Record = {
                    ...(item as any),
                    // 서버 응답은 문자열(ISO)로 통일
                    created_at: (item as any).created_at,
                    updated_at: (item as any).updated_at
                        ? (item as any).updated_at
                        : (item as any).created_at,
                    last_page_added_at: (item as any).last_page_added_at || null,
                };

                if (createdAtMs > lastPulledAtTimestamp) {
                    changes.folder.created.push(record);
                    folderCreatedCount++;
                } else {
                    changes.folder.updated.push(record);
                    folderUpdatedCount++;
                }
            }

            syncLogger('📊 폴더 데이터 분류 완료', {
                totalProcessed: folderData.length,
                createdCount: folderCreatedCount,
                updatedCount: folderUpdatedCount,
            });
        } else {
            syncLogger('ℹ️ 처리할 폴더 데이터 없음');
        }

        // 알람 데이터 가져오기
        const alarmQueryStart = Date.now();
        syncLogger('🔔 알람 데이터 쿼리 시작', {
            userId: userId.substring(0, 8) + '...',
            sinceDate: lastPulledAtDate,
        });

        const { data: alarmData, error: alarmError } = (await supabase
            .from('alarm')
            .select(
                'id, user_id, page_id, next_alarm_time, last_notification_id, sent_count, created_at, updated_at'
            )
            .eq('user_id', userId)
            .gt('updated_at', lastPulledAtDate)) as { data: AlarmData[] | null; error: any };

        const alarmQueryDuration = Date.now() - alarmQueryStart;

        if (alarmError) {
            syncLogger('❌ 알람 데이터 쿼리 에러', {
                error: alarmError,
                queryDuration: alarmQueryDuration + 'ms',
            });
            throw alarmError;
        }

        syncLogger('✅ 알람 데이터 쿼리 성공', {
            alarmDataLength: alarmData?.length || 0,
            queryDuration: alarmQueryDuration + 'ms',
            avgQueryTime: alarmData?.length
                ? (alarmQueryDuration / alarmData.length).toFixed(2) + 'ms/item'
                : 'N/A',
        });

        // 알람 데이터 처리
        if (alarmData && alarmData.length > 0) {
            let alarmCreatedCount = 0;
            let alarmUpdatedCount = 0;

            for (const item of alarmData) {
                const createdAtMs = new Date(item.created_at).getTime();
                const record: Record = {
                    ...(item as any),
                    // 서버 응답은 문자열(ISO)로 통일
                    created_at: item.created_at,
                    updated_at: item.updated_at ? item.updated_at : item.created_at,
                    next_alarm_time: item.next_alarm_time, // 문자열 그대로 응답
                };

                if (createdAtMs > lastPulledAtTimestamp) {
                    changes.alarm.created.push(record);
                    alarmCreatedCount++;
                } else {
                    changes.alarm.updated.push(record);
                    alarmUpdatedCount++;
                }
            }

            syncLogger('📊 알람 데이터 분류 완료', {
                totalProcessed: alarmData.length,
                createdCount: alarmCreatedCount,
                updatedCount: alarmUpdatedCount,
            });
        } else {
            syncLogger('ℹ️ 처리할 알람 데이터 없음');
        }

        // 삭제된 페이지 처리
        const deletedQueryStart = Date.now();
        syncLogger('🗑️ 삭제된 페이지 데이터 쿼리 시작');

        const { data: deletedData, error: deletedError } = await supabase
            .from('page_deleted')
            .select('id')
            .eq('user_id', userId)
            .gt('created_at', lastPulledAtDate);

        const deletedQueryDuration = Date.now() - deletedQueryStart;

        if (deletedError) {
            syncLogger('❌ 삭제된 페이지 쿼리 에러', {
                error: deletedError,
                queryDuration: deletedQueryDuration + 'ms',
            });
            throw deletedError;
        }

        if (deletedData && deletedData.length > 0) {
            changes.page.deleted = deletedData.map((item) => item.id);
            syncLogger('✅ 삭제된 페이지 수집 완료', {
                deletedCount: deletedData.length,
                queryDuration: deletedQueryDuration + 'ms',
                deletedIds: deletedData.map((item) => item.id.substring(0, 8) + '...'),
            });
        } else {
            syncLogger('ℹ️ 삭제된 페이지 없음', { queryDuration: deletedQueryDuration + 'ms' });
        }

        // 삭제된 알람 처리
        const deletedAlarmQueryStart = Date.now();
        syncLogger('🗑️ 삭제된 알람 데이터 쿼리 시작');

        const { data: deletedAlarmData, error: deletedAlarmError } = await (supabase as any)
            .from('alarm_deleted')
            .select('id')
            .eq('user_id', userId)
            .gt('created_at', lastPulledAtDate);

        const deletedAlarmQueryDuration = Date.now() - deletedAlarmQueryStart;

        if (deletedAlarmError) {
            syncLogger('❌ 삭제된 알람 쿼리 에러', {
                error: deletedAlarmError,
                queryDuration: deletedAlarmQueryDuration + 'ms',
            });
            throw deletedAlarmError;
        }

        if (deletedAlarmData && deletedAlarmData.length > 0) {
            changes.alarm.deleted = deletedAlarmData.map((item: any) => item.id);
            syncLogger('✅ 삭제된 알람 수집 완료', {
                deletedCount: deletedAlarmData.length,
                queryDuration: deletedAlarmQueryDuration + 'ms',
                deletedIds: deletedAlarmData.map((item: any) => item.id.substring(0, 8) + '...'),
            });
        } else {
            syncLogger('ℹ️ 삭제된 알람 없음', { queryDuration: deletedAlarmQueryDuration + 'ms' });
        }

        // 삭제된 폴더 처리
        const deletedFolderQueryStart = Date.now();
        syncLogger('🗑️ 삭제된 폴더 데이터 쿼리 시작');

        const { data: deletedFolderData, error: deletedFolderError } = await (supabase as any)
            .from('folder_deleted')
            .select('id')
            .eq('user_id', userId)
            .gt('created_at', lastPulledAtDate);

        const deletedFolderQueryDuration = Date.now() - deletedFolderQueryStart;

        if (deletedFolderError) {
            syncLogger('❌ 삭제된 폴더 쿼리 에러', {
                error: deletedFolderError,
                queryDuration: deletedFolderQueryDuration + 'ms',
            });
            throw deletedFolderError;
        }

        if (deletedFolderData && deletedFolderData.length > 0) {
            changes.folder.deleted = deletedFolderData.map((item: any) => item.id);
            syncLogger('✅ 삭제된 폴더 수집 완료', {
                deletedCount: deletedFolderData.length,
                queryDuration: deletedFolderQueryDuration + 'ms',
                deletedIds: deletedFolderData.map((item: any) => item.id.substring(0, 8) + '...'),
            });
        } else {
            syncLogger('ℹ️ 삭제된 폴더 없음', { queryDuration: deletedFolderQueryDuration + 'ms' });
        }

        const timestamp = Date.now();
        const totalCount =
            changes.page.created.length +
            changes.page.updated.length +
            changes.page.deleted.length +
            changes.folder.created.length +
            changes.folder.updated.length +
            changes.folder.deleted.length +
            changes.alarm.created.length +
            changes.alarm.updated.length +
            changes.alarm.deleted.length;
        const totalDuration = timestamp - startTime;

        syncLogger('📈 변경 사항 최종 집계', {
            createdCount: changes.page.created.length,
            updatedCount: changes.page.updated.length,
            deletedCount: changes.page.deleted.length,
            folderCreatedCount: changes.folder.created.length,
            folderUpdatedCount: changes.folder.updated.length,
            folderDeletedCount: changes.folder.deleted.length,
            alarmCreatedCount: changes.alarm.created.length,
            alarmUpdatedCount: changes.alarm.updated.length,
            alarmDeletedCount: changes.alarm.deleted.length,
            totalCount,
            totalDuration: totalDuration + 'ms',
            responseSize: JSON.stringify({ changes, timestamp, totalCount }).length + ' bytes',
        });

        const body = JSON.stringify({ changes, timestamp, totalCount });

        syncLogger('=== GET /api/sync/pull 완료 ===', {
            success: true,
            totalDuration: totalDuration + 'ms',
            responseSize: body.length + ' bytes',
        });

        return new Response(body, {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        const errorDuration = Date.now() - startTime;
        syncLogger('💥 Supabase 쿼리 오류 발생', {
            errorMessage: error.message,
            errorCode: error.code,
            errorDetails: error.details,
            errorHint: error.hint,
            duration: errorDuration + 'ms',
            stack: error.stack?.split('\n').slice(0, 3),
        });
        console.error('Supabase query error:', error);
        const body = JSON.stringify({ error: 'Internal Server Error' });
        return new Response(body, {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    } finally {
        const finalDuration = Date.now() - startTime;
        syncLogger('🏁 GET 요청 처리 완료', {
            totalDuration: finalDuration + 'ms',
            timestamp: new Date().toISOString(),
        });
    }
}
