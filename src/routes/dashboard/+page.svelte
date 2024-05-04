<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import { SvelteComponent, onMount, type ComponentType } from 'svelte';

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

	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	import Popup from './Popup.svelte';
	const modal = writable<ComponentType | null>(null);
	const showModal = () => modal.set(bind(Popup, { message: 'Surprise' }));

</script>

<input type="file"/>
<Modal show={$modal}>
	<div class="p-3">
		<div class="flex mb-2">
			<button on:click={showModal} type="button" class="btn variant-filled mr-auto"><span class="font-extrabold text-xl pr-1">+</span>Add</button>
			<button class="btn variant-filled ml-auto">⧩</button>
		</div>
		<div class="grid grid-cols-4 gap-6">
			<!-- {#each {length: 7} as _, i}
				<Item item={{name: "testName", type:"testType", calories:1000, healthy:false, quantity: 2}} />
			{/each} -->
			{#each data.fridge as item}
				<Item item={item}>{item.name}</Item>
			{/each}
		</div>
	</div>
</Modal>
