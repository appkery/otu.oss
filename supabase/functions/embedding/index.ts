// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { SupabaseVectorStore } from 'https://esm.sh/langchain@0.0.163/vectorstores/supabase';
import { OpenAIEmbeddings } from 'https://esm.sh/langchain@0.0.163/embeddings/openai';
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }
    // ref : https://supabase.com/docs/guides/functions/auth
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');
    const OPEN_AI_KEY = Deno.env.get('OPEN_AI_KEY');

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

    const { id, type, mode } = await req.json();

    const embedFn = new OpenAIEmbeddings({
        openAIApiKey: OPEN_AI_KEY,
    });
    if (mode === 'create' || mode === 'update') {
        let vectorStore;
        if (mode === 'create') {
            const { data: content, error } = await supabaseClient
                .from(type)
                .select('*')
                .eq('id', id)
                .single();

            vectorStore = await SupabaseVectorStore.fromTexts(
                [`<title>${content.title}</title><body>${content.body}</body>`],
                [{ type: type, id: id, title: content.title }],
                new OpenAIEmbeddings({
                    openAIApiKey: OPEN_AI_KEY,
                }),
                {
                    client: supabaseClient,
                    tableName: 'documents',
                    queryName: 'match_documents',
                }
            );
        } else if (mode === 'update') {
            const { data: content, error } = await supabaseClient
                .from(type)
                .select('*')
                .eq('id', id)
                .single();

            const { data: deleteDataResult, error: deleteErrorResult } = await supabaseClient
                .from('documents')
                .delete()
                .eq('metadata->id', id);

            vectorStore = await SupabaseVectorStore.fromTexts(
                [`<title>${content.title}</title><body>${content.body}</body>`],
                [{ type: type, id: id, title: content.title }],
                embedFn,
                {
                    client: supabaseClient,
                    tableName: 'documents',
                    queryName: 'match_documents',
                }
            );
        }
    } else if (mode === 'delete') {
        const { data: deleteDataResult, error: deleteErrorResult } = await supabaseClient
            .from('documents')
            .delete()
            .eq('metadata->id', id);
    }

    return new Response(JSON.stringify({ message: 'ok' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/embedding' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
