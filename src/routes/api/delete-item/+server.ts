
import type { Database } from "$lib/database-types";
import { supabase } from "$lib/supabaseClient";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { RequestHandler } from "@sveltejs/kit";

async function deleteItem(supabase: SupabaseClient<Database>, id: number) {
    // const supabase = createClientComponentClient()
    const { data, error } = await supabase
    .from('fridge')
    .delete()
    .eq('id', id);

    await supabase
        .storage
        .from('fridge')
        .remove([`${id}.png`]);
    return { data, error };
}


// name, type, quantity, healthy, calories
export const POST: RequestHandler = async ({request}) => {
    const { searchParams } = new URL(request.url);
	const id = Number.parseInt(searchParams.get('id') || '-1');
    
    console.log('TEST');
	const { data, error } = await deleteItem(supabase, id);

	return new Response(
        'Good',
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
            }
        }
    );
};