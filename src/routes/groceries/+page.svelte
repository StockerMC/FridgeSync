<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import { onMount } from 'svelte';

	export let data;

	import { writable } from 'svelte/store';


	const recipe = writable("");
	let recipeValue = "";
	let recipePrompt: HTMLInputElement;
	recipe.subscribe((value) => recipeValue = value);
	const search = async () => {
		recipeValue="";
		recipe.set("");
		let prompt: string = recipePrompt.value;
		// console.log(prompt);
		if (!prompt) return;
		const ingredients = data.fridge.map((item) => {
			return item.name;
		});
		// console.log(`/api/fetch-recipe?ingredients="` + ingredients + "\"" + `&prompt=${prompt}`);
		const response = await fetch(`/api/fetch-groceries?ingredients="` + ingredients + "\"" + `&prompt=${prompt}`, {
			method: "POST"
		});
		// console.log("fowiejfoew");

		const reader = response.body!.pipeThrough(new TextDecoderStream()).getReader();
		while (true) {
			const { value, done } = await reader.read();
			console.log("resp", done, value);
			if (done) break;
			recipe.set(recipeValue + value);
		}
	};

</script>

<div class="p-3">
	<div class="flex flex-col items-center">
		<h1 class="text-6xl gradient-heading font-extrabold leading-normal p-10">Grocery Recommendations</h1>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-[70%] mb-8">
			<div class="input-group-shim">🔍</div>
			<input type="search" placeholder="What will you be cooking this week?"
				   bind:this={recipePrompt} />
			<button class="variant-filled-tertiary submit-button" on:click={search}>Submit</button>
		</div>
		{#if recipeValue}
			<div class="variant-filled-surface rounded-3xl p-6 m-12">
				<p>{@html $recipe}</p>
			</div>
		{/if}
	</div>
	<div class="grid grid-cols-4 gap-6 mt-6">
		<!-- {#each {length: 7} as _, i}
			<Item item={{name: "testName", type:"testType", calories:1000, healthy:false, quantity: 2}} />
		{/each} -->
		{#each data.fridge as item}
			<Item item={item} photo={data.photos?.filter(photo => photo.id == item.id)[0]}>{item.name}</Item>
		{/each}
	</div>
</div>
