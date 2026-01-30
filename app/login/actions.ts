'use server';

import { createClient } from '@/supabase/utils/server';
import { handleNewUserSetup } from '@/functions/sample/handleNewUserSetup.server';

/**
 * 신규 사용자 초기 설정 서버 액션
 *
 * @param userId 사용자 ID
 */
export async function handleNewUserSetupAction(userId: string): Promise<void> {
    const supabase = await createClient();
    await handleNewUserSetup(userId, supabase, 'email-login');
}
