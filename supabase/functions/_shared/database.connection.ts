import postgres from 'postgres';
let connectionString;
const SUPABASE_DB_URL = Deno.env.get('SUPABASE_DB_URL');
if (SUPABASE_DB_URL) {
    connectionString = SUPABASE_DB_URL;
} else {
    throw new Error(
        '.env에 SUPABASE_DB_URL 설정이 누락 되었습니다. .env.template 파일을 참고해주세요.'
    );
}
const params = {};
export const sql = postgres(connectionString, params);
