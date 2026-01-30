// // Follow this setup guide to integrate the Deno language server with your editor:
// // https://deno.land/manual/getting_started/setup_your_environment
// // This enables autocomplete, go to definition, etc.

// import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
// import { SupabaseVectorStore } from 'https://esm.sh/langchain@0.0.163/vectorstores/supabase';
// import { OpenAIEmbeddings } from 'https://esm.sh/langchain@0.0.163/embeddings/openai';
// import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';

// serve(async (req) => {
//     const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
//     const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');
//     const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
//     const OPEN_AI_KEY = Deno.env.get('OPEN_AI_KEY');
//     const supabaseClient = createClient(
//         // Supabase API URL - env var exported by default.
//         SUPABASE_URL,
//         // Supabase API ANON KEY - env var exported by default.
//         SUPABASE_SERVICE_ROLE_KEY
//         // Create client with Auth context of the user that called the function.
//         // This way your row-level-security (RLS) policies are applied.
//     );

//     const { data: content, error } = await supabaseClient.from('page').select('*').limit(1000);

//     const embedFn = new OpenAIEmbeddings({
//         openAIApiKey: OPEN_AI_KEY,
//     });
//     content.forEach(async (item) => {
//         const origin = `<title>${item.title}</title><body>${item.body}</body>`;
//         const converted = await embedFn.embedDocuments([origin]);
//         const { data: embedData, error: embedError } = await supabaseClient
//             .from('documents')
//             .insert([
//                 {
//                     content: origin,
//                     embedding: converted[0],
//                     metadata: {
//                         id: item.id,
//                         type: 'page',
//                         title: item.title,
//                     },
//                     user_id: item.user_id,
//                 },
//             ]);
//     });
//     return new Response(JSON.stringify('ok'), {
//         headers: { 'Content-Type': 'application/json' },
//     });
// });

// // To invoke:
// // curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
// //   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
// //   --header 'Content-Type: application/json' \
// //   --data '{"name":"Functions"}'
