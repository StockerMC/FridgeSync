<script lang="ts">
	import type { Tables } from "$lib/database-types";
	
	export let item: Tables<'fridge'>;
</script>

{#if item === null}
	<div class="card p-4 placeholder">
		<header class="card-header placeholder"></header>
		<section class="p-4">
			<p class="placeholder">Type: </p>
			<p class="placeholder">Quantity: </p>
			<p class="placeholder">Calories: </p>
		</section>
	</div>
{:else}
	<div class="card p-4">
		<header class="card-header font-bold text-xl">{item.name}</header>
		<section class="p-4 text-lg">
			<p><span class="font-semibold">Type:</span> {item.type}</p>
			<p><span class="font-semibold">Quantity:</span> {item.quantity}</p>
			<p><span class="font-semibold">Calories:</span> {item.calories}</p>
		</section>
	</div>
{/if}


