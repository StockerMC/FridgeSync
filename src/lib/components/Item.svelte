<script lang="ts">
	import type { Tables } from "$lib/database-types";
	import Modal, { bind } from "svelte-simple-modal";
	import { writable } from "svelte/store";
	import EditItem from "$lib/components/EditItem.svelte";
	import type { ComponentType } from "svelte";

	export let item: Tables<'fridge'>;
	const modal = writable<ComponentType | null>(null);
	const showModal = () => modal.set(bind(EditItem, { item: item }));
</script>

{#if item === null}
	<div class="card p-4">
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
		<div class="card p-4">
			<header class="card-header font-bold text-xl">{item.name}</header>
			<section class="p-4 text-lg">
				<p><span class="font-semibold">Type:</span> {item.type}</p>
				<p><span class="font-semibold">Quantity:</span> {item.quantity}</p>
				<p><span class="font-semibold">Calories:</span> {item.calories}</p>
			</section>
		</div>
	</Modal>
{/if}

