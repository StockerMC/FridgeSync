<script lang="ts">
	import Item from "$lib/components/Item.svelte";
	import { SvelteComponent, onMount, type ComponentType } from "svelte";

	const toBase64: (file: File) => any = file => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = reject;
	});

	export let data;

	// onMount(() => {
	// 	document.getElementsByTagName('button')[0].addEventListener('click', async () => {
	// 		// @ts-ignore
	// 		let a = document.getElementsByTagName('input')[0].files[0];
	// 		console.log(a)
	// 		// TODO: save image to database
	// 		const data = new FormData();
	// 		// @ts-ignore

	// 		data.append('image', await toBase64(a));
	// 		const response = await fetch(`/api/add-item`, {
	// 			method: 'POST',
	// 			body: data
	// 		})
	// 		console.log(await response.text())
	// 	})
	// });

	import { writable } from "svelte/store";
	import Modal, { bind } from "svelte-simple-modal";
	import Popup from "./Popup.svelte";

	const modal = writable<ComponentType | null>(null);
	const showModal = () => modal.set(bind(Popup, { message: "Surprise" }));

	let searchquery = "";

</script>

<Modal show={$modal}>
	<div class="sm:p-3 ml-16 mr-16 flex=col items-center sm:items-start">
		<h1 class="text-5xl sm:text-7xl pb-12 pt-12 self-center"><span class="gradient-heading text-center self-center">Fridge Contents</span></h1>
		<div class="flex w-full align-center justify-between gap-x-4 sm:gap-0">
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-96">
				<div class="input-group-divider">🔍</div>
				<input type="search" placeholder="Search In Your Fridge:" bind:value={searchquery} />
			</div>
			<button on:click={showModal} type="button" class="btn variant-filled"><span
				class="font-extrabold text-xl pr-1">+</span>Add
			</button>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-6">
			<!-- {#each {length: 7} as _, i}
				<Item item={{name: "testName", type:"testType", calories:1000, healthy:false, quantity: 2}} />
			{/each} -->
			{#each data.fridge.filter((item) => item.name.toLowerCase().includes(searchquery.toLowerCase().trim()) || item.type.toLowerCase().includes(searchquery.toLowerCase().trim())) as item}
				<Item item={item} photo={data.photos?.filter(photo => photo.id == item.id)[0]}>{item.name}</Item>
			{/each}
		</div>
	</div>
</Modal>

<style>
    .gradient-heading {
        @apply bg-clip-text text-transparent box-decoration-clone;
        /* Direction */
        @apply bg-gradient-to-br;
        /* Color Stops */
        @apply from-tertiary-600 via-secondary-800 to-primary-800;
    }
</style>