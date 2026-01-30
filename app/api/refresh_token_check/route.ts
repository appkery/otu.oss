import { type NextRequest } from 'next/server';
// @ts-ignore
import { Pool, Client } from 'pg';
export async function GET(request: NextRequest) {
    // const supabase = createClient();
    // const session = await supabase.auth.getSession();
    // const user_id = session?.data?.session?.user.id;
    // if(!user_id){
    //   return new Response(JSON.stringify({ result: false }), {
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }
    const searchParams = request.nextUrl.searchParams;
    const connectionString = process.env.SUPABASE_DATABASE_URL;
    const pool = new Pool({ connectionString });
    // const result = await pool.query('SELECT * from auth.refresh_tokens WHERE token=$1 AND user_id=$2', [searchParams.get('token'), user_id]);
    const result = await pool.query('SELECT * from auth.refresh_tokens WHERE token=$1', [
        searchParams.get('token'),
    ]);
    await pool.end();
    return new Response(JSON.stringify({ result: result.rows }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
