<script lang="ts">
	import type { Tables } from "$lib/database-types";
	import Modal, { bind } from "svelte-simple-modal";
	import { writable } from "svelte/store";
	import EditItem from "$lib/components/EditItem.svelte";
	import type { ComponentType } from "svelte";

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
			<header class="card-header font-bold text-xl">
				<a href="/nutrition/{item.name}">
					{item.name}
				</a>
			</header>
			<section class="p-4 text-lg">
				<button class="btn variant-ghost mb-4" on:click={showModal}>Edit</button>
				<p><span class="font-semibold">Type:</span> {item.type}</p>
				<p><span class="font-semibold">Quantity:</span> {item.quantity}</p>
				<p><span class="font-semibold">Calories:</span> {item.calories}</p>
			</section>
		</div>
	</Modal>
{/if}

