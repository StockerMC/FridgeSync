<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import { onMount } from 'svelte';

	export let data;

	import { writable } from 'svelte/store';

	const recipe = writable('');
	let recipeValue = '';

	recipe.subscribe((value) => recipeValue = value)

	onMount(() => {
		const prompt = document.getElementById('recipePrompt')?.textContent;
		const submit = document.getElementById('recipeSubmit');
		const ingredients = data.fridge.map((item) => {
			return item.name;
		});
		console.log(ingredients)
		submit?.addEventListener('click', async () => {
			const response = await fetch(`/api/fetch-recipe?ingredients="` + ingredients + '"'+ (prompt ? `&prompt=${prompt}` : ''), {
				method: 'POST',
			});
			
		const reader = response.body!.pipeThrough(new TextDecoderStream()).getReader();
		while (true) {
			const { value, done } = await reader.read();
			console.log("resp", done, value);
			if (done) break;
			recipe.set(recipeValue + value);
		}
		})
	})

</script>

<div class="p-3">
	<div class="flex mb-2">
		<button class="btn variant-filled ml-auto">⧩</button>
	</div>
	<div class="grid grid-cols-4 gap-6 mt-6">
		<!-- {#each {length: 7} as _, i}
			<Item item={{name: "testName", type:"testType", calories:1000, healthy:false, quantity: 2}} />
		{/each} -->
		{#each data.fridge as item}
			<Item item={item}>{item.name}</Item>
		{/each}
	</div>
	<input class="input w-96 mt-4 mb-4" type="text" id="recipePrompt" placeholder="Enter Recipe...">
	<h2>What meals are you planning to make this week?</h2>
	<button type="submit" id="recipeSubmit">Find a recipe!</button>
	<p>{$recipe}</p>
</div>
