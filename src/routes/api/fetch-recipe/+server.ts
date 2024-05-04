
import {openai} from "$lib/openai";
import type { RequestHandler } from "@sveltejs/kit";

// name, type, quantity, healthy, calories
export const POST: RequestHandler = async ({request}) => {
    const { searchParams } = new URL(request.url);
    const ingredients = searchParams.get('ingredients') || '';

	const prompt = searchParams.get('prompt') || '';
	//const base64_image = Buffer.from(image, "base64").toString("base64");
	const result = await openai.chat.completions.create({
		model: "gpt-4-turbo",
		messages: [
			{
				role: "user",
				content: [
					{
						type: "text",
						text: "Given the following ingredients (plus some more simple ingredients only if necessary), come up with a homemade recipe: " + ingredients + (prompt ? ". This is an idea/prompt from the user the recipe is for: " + prompt : '')
					},
				]
			}
		],
		max_tokens: 200,
        stream: true
	});

	// let response = "";
	const stream = new ReadableStream({
		async start(controller) {
			for await (const chunk of result) {
				// response += chunk.choices[0]?.delta?.content || "";
				controller.enqueue(chunk.choices[0]?.delta?.content || "");
			}
			controller.close();
		}
	});

	return new Response(stream, { headers: {
        "Content-Type": "text/event-stream",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
    }});

	// return new Response(
    //     result.choices[0].message.content,
    //     {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET, POST',
    //         }
    //     }
    // );
};