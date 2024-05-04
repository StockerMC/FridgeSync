<script lang="ts">
	import type { Tables } from "$lib/database-types";
	import Modal, { bind } from "svelte-simple-modal";
	import { writable } from "svelte/store";
	import EditItem from "$lib/components/EditItem.svelte";
	import type { ComponentType } from "svelte";
	import { invalidateAll } from "$app/navigation";

	interface PhotoData {
		url: string,
		id: number
	}
	export let item: Tables<'fridge'>;
	export let photo: PhotoData | undefined;
	const modal = writable<ComponentType | null>(null);
	const showModal = () => modal.set(bind(EditItem, { item: item }));
</script>

{#if item === null}
	<div class="card p-4 card-hover">
		<div class="p-4 space-y-4">
			<div class="placeholder animate-pulse" />
			<div class="grid grid-cols-2 gap-8">
				<div class="placeholder animate-pulse" />
				<div class="placeholder animate-pulse" />
			</div>
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder animate-pulse" />
				<div class="placeholder animate-pulse" />
				<div class="placeholder animate-pulse" />
				<div class="placeholder animate-pulse" />
			</div>
		</div>
	</div>
{:else}
	<Modal show={$modal}>
		<div class="card card-hover overflow-hidden">
			<header>
				<img src={photo ? photo.url : ''} draggable="false" class="bg-black/50 w-full aspect-[21/9] object-cover" alt="" />
			</header>
			<header class="card-header font-bold text-xl flex justify-between">
				<a href="/nutrition/{item.name}">
					{item.name}
				</a>
				<div class="grid grid-cols-2 gap-2">
					<button on:click={showModal}><img src="/edit.png" alt="Edit" class="w-4 h-4"></button>
					<button class="" on:click={async () => {
						const response = await fetch('/api/delete-item?id=' + item.id.toString(), {method: 'POST'});
						invalidateAll();
					}}><img src="/delete.png" alt="Del" class="w-4 h-4"></button>
				</div>
			</header>

			<section class="p-4 text-lg">

				<p><span class="font-semibold">Type:</span> {item.type}</p>
				<p><span class="font-semibold">Quantity:</span> {item.quantity || 1}</p>
				<p><span class="font-semibold">Calories:</span> {item.calories}</p>
				<p><span class="font-semibold">Healthy:</span> {item.healthy ? 'Yes' : 'No'}</p>
			</section>
		</div>
	</Modal>
{/if}

