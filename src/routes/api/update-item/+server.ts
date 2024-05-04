
import type { Database } from "$lib/database-types";
import { supabase } from "$lib/supabaseClient";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { RequestHandler } from "@sveltejs/kit";

async function updateItem(supabase: SupabaseClient<Database>, item: Database['public']['Tables']['fridge']['Insert'], id: number) {
    // const supabase = createClientComponentClient()
    const { data, error } = await supabase
        .from('fridge')
        .update(item)
		.eq('id', id)
        .select()
        .single();
    return { data, error };
}


// name, type, quantity, healthy, calories
export const POST: RequestHandler = async ({request}) => {
    const { searchParams } = new URL(request.url);
	const quantity = Number.parseInt(searchParams.get('quantity') || '1');
	const type = searchParams.get('type') || 'Other';
	const calories = Number.parseInt(searchParams.get('calories') || '53');
	const name = searchParams.get('name') || '';
	const id = Number.parseInt(searchParams.get('id') || '-1');
    
	const { data, error } = await updateItem(supabase, {
		quantity, type, calories, name
	}, id);

	console.log(data, error);

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