import type { PageServerLoad } from "./$types";
import { SECRET_NUTRITION_API_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
	const food = params.food;

	try {
		const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=1 serving of ${food}`, {
			headers: {
				"X-Api-Key": SECRET_NUTRITION_API_KEY
			}
		});

		if (!response.ok) {
			error(response.status, response.statusText);
		}

		const data = await response.json();
		return {
			nutrition: data
		};

	} catch (error) {
		console.log("Request failed:", error);
	}
};