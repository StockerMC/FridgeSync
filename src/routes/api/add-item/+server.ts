
import type { Database } from "$lib/database-types";
import {openai} from "$lib/openai";
import { supabase } from "$lib/supabaseClient";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { RequestHandler } from "@sveltejs/kit";

async function saveItem(supabase: SupabaseClient<Database>, item: Database['public']['Tables']['fridge']['Insert']) {
    // const supabase = createClientComponentClient()
    const { data, error } = await supabase
        .from('fridge')
        .insert(item)
        .select()
        .single();
    return { data, error };
}


// name, type, quantity, healthy, calories
export const POST: RequestHandler = async ({request}) => {
    const formData = await request.formData();
    const base64_image_url = formData.get('image') as string;
	if (!base64_image_url) {
		return new Response('error');
	}
	console.log('a' + base64_image_url);
	//const base64_image = Buffer.from(image, "base64").toString("base64");
	const result = await openai.chat.completions.create({
		model: "gpt-4-turbo",
		messages: [
			{
				role: "user",
				content: [
					{
						type: "text",
						text: "What food/ingredient is in this image? Answer ONLY in the following format, with \\n meaning to move to a new line: Name\nType"
					},
					{
						type: "image_url",
						image_url: {
							url: base64_image_url
						}
					}
				]
			}
		],
		max_tokens: 30
	});

	const { data, error } = await saveItem(supabase, {
		'name': 'Carrot',
		'type': 'Vegetable'
	});

	console.log(data, error);

	return new Response(
        result.choices[0].message.content,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST',
            }
        }
    );
};