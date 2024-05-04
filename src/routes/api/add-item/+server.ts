
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
	//const base64_image = Buffer.from(image, "base64").toString("base64");
	const result = await openai.chat.completions.create({
		model: "gpt-4-turbo",
		messages: [
			{
				role: "user",
				content: [
					{
						type: "text",
						text: "Given this image of a food/ingredient, you are to fill out this template: title, type, quantity, healthy, calories. They must be comma separated and conform to the template. The title must be the name of the food/ingredient and less than 3 words. Type field MUST be one of the following: Fruits, Vegetables, Grains, Meat, Dairy, Sweets, Beverages, Condiments, Other. Quantity must be a number. Healthy must be 'y' or 'n'. Calories must be a number, the number of calories in one item of an average sized type of that food. Use 'null' if a field is not applicable. An example of a proper response is: Apple, Fruits/Vegetables, y, 95, 1"
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

	const lines = (result.choices[0].message.content as string).split(',').map(s => s.trim());

	const { data, error } = await saveItem(supabase, {
		'name': lines[0],
		'type': lines[1],
		'healthy': lines[2] == 'y',
		'calories': Number.parseInt(lines[3]),
		'quantity': Number.parseInt(lines[4])
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