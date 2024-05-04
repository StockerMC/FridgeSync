
import {openai} from "$lib/openai";
import type { RequestHandler } from "@sveltejs/kit";

// name, type, quantity, healthy, calories
export const POST: RequestHandler = async ({request}) => {
	//let { image } = await request.json();
	//const base64_image = Buffer.from(image, "base64").toString("base64");
	const result = await openai.chat.completions.create({
		model: "gpt-4-turbo",
		messages: [
			{
				role: "user",
				content: [
					{
						type: "text",
						text: "What’s in this image?"
					},
					/*{
						type: "image_url",
						image_url: {
							url: `data:image/jpeg;base64, ${base64_image}`
						}
					}*/
				]
			}
		],
		max_tokens: 30
	});
	return new Response(JSON.stringify(result), {});
}