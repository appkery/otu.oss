/** @jest-environment node */
/**
 * Sync API 데이터베이스 테스트
 * 실제 Supabase 데이터베이스 작업만 테스트
 */

import { createSuperClient } from '@/supabase/utils/super';
import { testLogger } from '@/debug/test';

// 테스트용 데이터 ID (실제 UUID 형식) - 실행 시마다 고유한 ID 생성
const TEST_RUN_ID = Date.now().toString();
const TEST_USER_ID = `550e8400-e29b-41d4-a716-${TEST_RUN_ID.slice(-12).padStart(12, '0')}`;
const TEST_USER_EMAIL = `sync-test-${TEST_RUN_ID}@test.com`;
const TEST_FOLDER_ID = '550e8400-e29b-41d4-a716-446655440001';
const TEST_PAGE_1_ID = '550e8400-e29b-41d4-a716-446655440002';
const TEST_PAGE_2_ID = '550e8400-e29b-41d4-a716-446655440003';
const TEST_ALARM_1_ID = '550e8400-e29b-41d4-a716-446655440004';
const TEST_ALARM_2_ID = '550e8400-e29b-41d4-a716-446655440005';

// 시간 설정 (2024-01-01 기준)
const BASE_DATE = '2024-01-01';
const FOLDER_UPDATED_AT = new Date(`${BASE_DATE}T10:00:00.000Z`);
const PAGE_1_UPDATED_AT = new Date(`${BASE_DATE}T11:00:00.000Z`);
const PAGE_2_UPDATED_AT = new Date(`${BASE_DATE}T13:00:00.000Z`);
const ALARM_1_UPDATED_AT = new Date(`${BASE_DATE}T11:30:00.000Z`);
const ALARM_2_UPDATED_AT = new Date(`${BASE_DATE}T13:30:00.000Z`);

// 통합 테스트는 실제 Supabase를 사용하므로 조건부 실행
const skipDatabaseTests = process.env.SKIP_DATABASE_TESTS === 'true';

// 테스트 사용자 관리 함수들
let actualTestUserId: string | null = null;

async function createTestUser(supabase: any) {
    const { data, error } = await supabase.auth.admin.createUser({
        email: TEST_USER_EMAIL,
        password: 'test-password-123',
        email_confirm: true,
    });

    if (error) {
        throw new Error(`테스트 사용자 생성 실패: ${error.message}`);
    }

    actualTestUserId = data.user?.id;
    return data;
}

async function deleteTestUser(supabase: any) {
    if (!actualTestUserId) return;

    try {
        const { error } = await supabase.auth.admin.deleteUser(actualTestUserId, true); // shouldSoftDelete = true
        if (error) {
            testLogger(`테스트 사용자 삭제 실패: ${error.message}`);
        }

        // 삭제 후 잠시 대기 (Supabase 내부 정리 시간)
        await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
        testLogger('테스트 사용자 삭제 중 오류:', error);
    }
}

describe('Sync API 데이터베이스 테스트', () => {
    let supabase: any;
    let last_page_added_at_에_의해서_변경된_updated_at: string | number | Date | null = null;
    let last_page_added_at_에_의해서_변경된_updated_at_더하기_30분_후 = null;

    beforeEach(async () => {
        if (skipDatabaseTests) {
            testLogger('데이터베이스 테스트 건너뛰기 (SKIP_DATABASE_TESTS=true)');
            return;
        }

        supabase = createSuperClient();

        // 테스트 사용자 생성 (고유한 이메일 사용)
        testLogger('🔧 테스트 사용자 생성 중...');
        try {
            await createTestUser(supabase);
        } catch (error) {
            testLogger('테스트 사용자 생성 실패, 기존 사용자 사용:', error);
        }

        // 테스트 시작 전 기존 테스트 데이터만 정리
        await cleanupTestData();

        // 1. 폴더 생성
        const { error: folderError } = await supabase.from('folder').insert({
            id: TEST_FOLDER_ID,
            name: 'Test Folder',
            description: 'Test folder description',
            thumbnail_url: null,
            page_count: 2,
            created_at: FOLDER_UPDATED_AT.toISOString(),
            updated_at: FOLDER_UPDATED_AT.toISOString(),
            last_page_added_at: PAGE_2_UPDATED_AT.toISOString(),
            user_id: actualTestUserId,
        });

        // 2. 페이지들 생성
        const { error: page1Error } = await supabase.from('page').insert({
            id: TEST_PAGE_1_ID,
            title: 'Test Page 1',
            body: 'This is test page 1 content',
            is_public: false,
            img_url: null,
            length: 25,
            type: 'text',
            folder_id: TEST_FOLDER_ID,
            created_at: PAGE_1_UPDATED_AT.toISOString(),
            updated_at: PAGE_1_UPDATED_AT.toISOString(),
            last_viewed_at: PAGE_1_UPDATED_AT.toISOString(),
            user_id: actualTestUserId,
        });

        const { error: page2Error } = await supabase.from('page').insert({
            id: TEST_PAGE_2_ID,
            title: 'Test Page 2',
            body: 'This is test page 2 content',
            is_public: false,
            img_url: null,
            length: 25,
            type: 'text',
            folder_id: TEST_FOLDER_ID,
            created_at: PAGE_2_UPDATED_AT.toISOString(),
            updated_at: PAGE_2_UPDATED_AT.toISOString(),
            last_viewed_at: PAGE_2_UPDATED_AT.toISOString(),
            user_id: actualTestUserId,
        });

        // 페이지들이 폴더에 배정된 후 실제로 갱신된 폴더의 updated_at 시간 저장
        const { data: folderAfterPageAssignment } = await supabase
            .from('folder')
            .select('updated_at, last_page_added_at')
            .eq('id', TEST_FOLDER_ID)
            .single();

        last_page_added_at_에_의해서_변경된_updated_at = folderAfterPageAssignment.updated_at;
        last_page_added_at_에_의해서_변경된_updated_at_더하기_30분_후 = new Date(
            new Date(folderAfterPageAssignment.updated_at).getTime() + 30 * 60 * 1000
        );

        testLogger('📊 폴더 시간 정보 (페이지 배정 후):');
        testLogger('  updated_at:', folderAfterPageAssignment.updated_at);
        testLogger('  last_page_added_at:', folderAfterPageAssignment.last_page_added_at);

        // 3. 알람들 생성
        const { error: alarm1Error } = await supabase.from('alarm').insert({
            id: TEST_ALARM_1_ID,
            user_id: actualTestUserId,
            next_alarm_time: new Date(
                ALARM_1_UPDATED_AT.getTime() + 24 * 60 * 60 * 1000
            ).toISOString(),
            page_id: TEST_PAGE_1_ID,
            last_notification_id: null,
            sent_count: 1,
            created_at: last_page_added_at_에_의해서_변경된_updated_at_더하기_30분_후.toISOString(),
            updated_at: last_page_added_at_에_의해서_변경된_updated_at_더하기_30분_후.toISOString(),
        });

        const { error: alarm2Error } = await supabase.from('alarm').insert({
            id: TEST_ALARM_2_ID,
            user_id: actualTestUserId,
            next_alarm_time: new Date(
                ALARM_2_UPDATED_AT.getTime() + 24 * 60 * 60 * 1000
            ).toISOString(),
            page_id: TEST_PAGE_2_ID,
            last_notification_id: null,
            sent_count: 1,
            created_at: last_page_added_at_에_의해서_변경된_updated_at_더하기_30분_후.toISOString(),
            updated_at: last_page_added_at_에_의해서_변경된_updated_at_더하기_30분_후.toISOString(),
        });
    });

    afterEach(async () => {
        if (!skipDatabaseTests) {
            // 테스트 후 정리 (사용자는 삭제하지 않고 테스트 데이터만 정리)
            await cleanupTestData();
            // 참고: 테스트 사용자는 다른 테스트에서도 재사용할 수 있도록 삭제하지 않음
            // 필요시 deleteTestUser(supabase)를 호출하여 수동 삭제 가능
        }
    });

    if (skipDatabaseTests) {
        test.skip('데이터베이스 테스트 건너뛰기', () => {});
        return;
    }

    describe('2. 시간별 필터링 쿼리 테스트', () => {
        const testCases = [
            {
                name: 'last_pulled_at = 09:59 => all',
                lastPulledAt: new Date(`${BASE_DATE}T09:59:00.000Z`),
                expectedPages: 2,
                expectedFolders: 1,
                expectedAlarms: 2,
            },
            {
                name: 'last_pulled_at = 10:01 => page1,2, alarm 1,2',
                lastPulledAt: new Date(`${BASE_DATE}T10:01:00.000Z`),
                expectedPages: 2,
                expectedFolders: 1,
                expectedAlarms: 2,
            },
            {
                name: 'last_pulled_at = 11:01 => page2, alarm 1,2',
                lastPulledAt: new Date(`${BASE_DATE}T11:01:00.000Z`),
                expectedPages: 1,
                expectedFolders: 1,
                expectedAlarms: 2,
            },
            {
                name: 'last_pulled_at = 11:31 => page 2, alarm 2',
                lastPulledAt: new Date(`${BASE_DATE}T11:31:00.000Z`),
                expectedPages: 1,
                expectedFolders: 1,
                expectedAlarms: 2,
            },
            {
                name: 'last_pulled_at = 13:01 => alarm 2',
                lastPulledAt: new Date(`${BASE_DATE}T13:01:00.000Z`),
                expectedPages: 0,
                expectedFolders: 1,
                expectedAlarms: 2,
            },
            {
                name: 'last_pulled_at`이 페이지가 추가된 직후에 갱신된 last_page_added_at 보다 1초 전 인 경우',
                lastPulledAt: 'LAST_PAGE_ADDED_AT_MINUS_1_SECOND',
                expectedPages: 0,
                expectedFolders: 1,
                expectedAlarms: 2,
            },
            {
                name: 'last_pulled_at`이 페이지가 추가된 직후에 갱신된 last_page_added_at 보다 1초 후 인 경우',
                lastPulledAt: 'LAST_PAGE_ADDED_AT_PLUS_1_SECOND',
                expectedPages: 0,
                expectedFolders: 0,
                expectedAlarms: 2,
            },
        ];

        testCases.forEach(
            ({ name, lastPulledAt, expectedPages, expectedFolders, expectedAlarms }) => {
                test(name, async () => {
                    let pulledAt = lastPulledAt;
                    if (
                        last_page_added_at_에_의해서_변경된_updated_at &&
                        pulledAt === 'LAST_PAGE_ADDED_AT_MINUS_1_SECOND'
                    ) {
                        pulledAt = new Date(
                            new Date(last_page_added_at_에_의해서_변경된_updated_at).getTime() -
                                1000
                        );
                    } else if (
                        last_page_added_at_에_의해서_변경된_updated_at &&
                        pulledAt === 'LAST_PAGE_ADDED_AT_PLUS_1_SECOND'
                    ) {
                        pulledAt = new Date(
                            new Date(last_page_added_at_에_의해서_변경된_updated_at).getTime() +
                                1000
                        );
                    }
                    const lastPulledAtDate = (
                        pulledAt instanceof Date ? pulledAt : new Date(pulledAt)
                    ).toISOString();

                    // 페이지 조회
                    const { data: pages } = await supabase
                        .from('page')
                        .select('*')
                        .eq('user_id', actualTestUserId)
                        .gte('updated_at', lastPulledAtDate);

                    // 폴더 조회
                    const { data: folders } = await supabase
                        .from('folder')
                        .select('*')
                        .eq('user_id', actualTestUserId)
                        .gte('updated_at', lastPulledAtDate);

                    // 알람 조회
                    const { data: alarms } = await supabase
                        .from('alarm')
                        .select('*')
                        .eq('user_id', actualTestUserId)
                        .gte('updated_at', lastPulledAtDate);

                    expect(pages?.length || 0).toBe(expectedPages);
                    expect(folders?.length || 0).toBe(expectedFolders);
                    expect(alarms?.length || 0).toBe(expectedAlarms);
                });
            }
        );
    });

    describe('3. 페이지네이션 테스트', () => {
        test('LIMIT=1로 페이지별 조회', async () => {
            // 첫 번째 페이지 (LIMIT=1)
            const { data: firstPage } = await supabase
                .from('page')
                .select('*')
                .eq('user_id', actualTestUserId)
                .order('created_at', { ascending: true })
                .order('id', { ascending: true })
                .limit(1);

            expect(firstPage).toHaveLength(1);

            // 두 번째 페이지 (커서 기반)
            if (firstPage && firstPage.length > 0) {
                const lastItem = firstPage[firstPage.length - 1];
                const { data: secondPage } = await supabase
                    .from('page')
                    .select('*')
                    .eq('user_id', actualTestUserId)
                    .gt('created_at', lastItem.created_at)
                    .order('created_at', { ascending: true })
                    .order('id', { ascending: true })
                    .limit(1);

                expect(secondPage?.length || 0).toBe(1);

                // 두 페이지의 아이템이 다른지 확인
                if (secondPage && secondPage.length > 0) {
                    expect(secondPage[0].id).not.toBe(firstPage[0].id);
                }
            }
        });
    });

    describe('4. 삭제 및 삭제 추적 테스트', () => {
        test('데이터 삭제 후 삭제 추적 확인', async () => {
            // 알람 삭제 (트리거로 alarm_deleted에 자동 기록됨)
            const { error: alarmDeleteError } = await supabase
                .from('alarm')
                .delete()
                .eq('id', TEST_ALARM_1_ID);

            expect(alarmDeleteError).toBeNull();

            // 삭제 추적 확인
            const { data: deletedAlarms } = await supabase
                .from('alarm_deleted')
                .select('*')
                .eq('id', TEST_ALARM_1_ID);

            expect(deletedAlarms?.length || 0).toBeGreaterThan(0);

            // 페이지 삭제
            const { error: pageDeleteError } = await supabase
                .from('page')
                .delete()
                .eq('id', TEST_PAGE_1_ID);

            expect(pageDeleteError).toBeNull();

            // 삭제 추적 확인
            const { data: deletedPages } = await supabase
                .from('page_deleted')
                .select('*')
                .eq('id', TEST_PAGE_1_ID);

            expect(deletedPages?.length || 0).toBeGreaterThan(0);

            // folder 삭제
            const { error: folderDeleteError } = await supabase
                .from('folder')
                .delete()
                .eq('id', TEST_FOLDER_ID);

            expect(folderDeleteError).toBeNull();

            // 삭제 추적 확인
            const { data: deletedFolders } = await supabase
                .from('folder_deleted')
                .select('*')
                .eq('id', TEST_FOLDER_ID);

            expect(deletedFolders?.length || 0).toBeGreaterThan(0);
        });
    });

    // 테스트 데이터 정리 함수
    async function cleanupTestData() {
        if (skipDatabaseTests || !supabase) {
            return;
        }

        try {
            // 알람 삭제 (외래키 제약 때문에 먼저 삭제)
            await supabase.from('alarm').delete().in('id', [TEST_ALARM_1_ID, TEST_ALARM_2_ID]);

            // 페이지 삭제
            await supabase.from('page').delete().in('id', [TEST_PAGE_1_ID, TEST_PAGE_2_ID]);

            // 폴더 삭제
            await supabase.from('folder').delete().eq('id', TEST_FOLDER_ID);

            // 삭제 기록 테이블도 정리
            await supabase.from('page_deleted').delete().in('id', [TEST_PAGE_1_ID, TEST_PAGE_2_ID]);

            await supabase
                .from('alarm_deleted')
                .delete()
                .in('id', [TEST_ALARM_1_ID, TEST_ALARM_2_ID]);

            await supabase.from('folder_deleted').delete().eq('id', TEST_FOLDER_ID);
        } catch (error) {
            testLogger('테스트 데이터 정리 중 오류:', error);
        }
    }
});
