/*
테스트 방법 : [AUTH_TOKEN] 웹에서 로그인 한 사용자가 서버와 통신하는 request에서 authorization header에 넣어줘야함
curl --request POST 'http://localhost:54321/functions/v1/function-content' \
  --header 'Authorization: Bearer [AUTH_TOKEN]' \
  --header 'Content-Type: application/json'
*/

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import errorResponse, { successResponse } from '../_shared/response.ts';
import { sql } from '../_shared/database.connection.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

async function printReadableStream(stream) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
    }
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');
    const supabaseClient = createClient(
        // Supabase API URL - env var exported by default.
        SUPABASE_URL,
        // Supabase API ANON KEY - env var exported by default.
        SUPABASE_ANON_KEY,
        // Create client with Auth context of the user that called the function.
        // This way your row-level-security (RLS) policies are applied.
        {
            global: {
                headers: {
                    Authorization: req.headers.get('Authorization') || undefined,
                },
            },
        }
    );
    const {
        data: { user },
    } = await supabaseClient.auth.getUser();

    const params = await req.json();

    const select = params?.select?.split(',') || ['*'];
    const order = params.order || 'created_at desc';
    const [orderBy, orderDirection] = order.split(' ');
    const range = params?.range?.split(',') || [0, 19];
    const [rangeStart, rangeEnd] = range;
    const limit = Number(rangeEnd) - Number(rangeStart) + 1;

    if (limit > 100) {
        return errorResponse(
            {
                message: '한번에 너무 많은 데이터를 요청하셨습니다.',
            },
            new Error('한번에 너무 많은 데이터를 요청하셨습니다.')
        );
    }

    let user_id;
    if (user) {
        user_id = user.id;
    } else {
        throw new Error('사용자가 존재하지 않습니다');
    }
    let orderSQL;
    if (orderDirection === 'desc') {
        orderSQL = sql`ORDER BY ${sql(orderBy)} desc`;
    } else {
        orderSQL = sql`ORDER BY ${sql(orderBy)} asc`;
    }
    const keyword = params?.keyword;
    let keywordsSQL = sql``;
    if (keyword) {
        keywordsSQL = sql` AND (title || ' ' || body) &@~ ${keyword}`;
    }

    const start = params?.start;
    let startSQL = sql``;
    if (start) {
        startSQL = sql` AND created_at >= ${start}`;
    }

    const end = params?.end;
    let endSQL = sql``;
    if (end) {
        endSQL = sql` AND created_at <= ${end}`;
    }

    const query = sql`
    SELECT id,title,created_at
      FROM page
      WHERE user_id = ${user_id}
      ${keywordsSQL}
      ${startSQL}
      ${endSQL}
      ${orderSQL}
      LIMIT ${limit}
      OFFSET ${rangeStart}
  `;
    const page = await query;

    const pageCount = await sql`
      SELECT COUNT(*)
      FROM page
      WHERE user_id = ${user_id}
      ${keywordsSQL}
      ${startSQL}
      ${endSQL}
    `;

    return successResponse({
        message: 'success',
        data: page,
        meta: { count: pageCount[0].count },
    });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

/*
  const refreshContents2 = async () => {
    setLoading(true);
    if (user === null) return;

    // Base URL for your Supabase instance
    const baseUrl = `/api/content/${cType}`;

    const params: any = {};

    params.select = "id,title,is_public,child_count,parent_count,created_at";

    if (searchMethod.keyword) {
      params.keyword = searchMethod.keyword;

      // if (sort.length > 0) {
      //   queryParams += `&order=${sort[0].field} ${sort[0].sort?.toLowerCase()}`;
      // }
      params.order = `${sort[0].field} ${sort[0].sort?.toLowerCase()}`;

      if (pagination) {
        const rangeStart = pagination.page * pagination.pageSize;
        const rangeEnd = rangeStart + pagination.pageSize - 1;
        // queryParams += `&range=${rangeStart},${rangeEnd}`;
        params.range = `${rangeStart},${rangeEnd}`;
      }

      //위와 같을 때 start, end를 url 파라미터로 생성
      if (searchMethod.start) {
        // queryParams += `&start=${searchMethod.start}`;
        params.start = searchMethod.start;
      }
      if (searchMethod.end) {
        // queryParams += `&end=${searchMethod.end}`;
        params.end = searchMethod.end;
      }

      const { data, error } = await supabase.functions.invoke(
        "function-content",
        { body: params }
      );
      setContents({ data: data.data, count: data.meta.count });
    } else {
      let query = supabase
        .from("page")
        .select("id,title,is_public,child_count,parent_count,created_at", {
          count: "estimated",
        });
      if (pagination) {
        const rangeStart = pagination.page * pagination.pageSize;
        const rangeEnd = rangeStart + pagination.pageSize - 1;
        query.range(rangeStart, rangeEnd);
      }
      if (searchMethod.start) {
        query.gt("created_at", searchMethod.start);
      }
      if (searchMethod.end) {
        query.lt("created_at", searchMethod.end);
      }
      const { data, error, count } = await query;
      if (data) {
        setContents({ data, count });
      }
    }
    setLoading(false);
  };
*/
