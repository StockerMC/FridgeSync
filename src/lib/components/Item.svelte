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
			<p class="placeholder">Healthy: </p>
			<p class="placeholder">Calories: </p>
		</section>
	</div>
{:else}
	<div class="card p-4">
		<header class="card-header">{item.name}</header>
		<section class="p-4">
			<p>Type: {item.type}</p>
			<p>Quantity: {item.quantity}</p>
			<p>Healthy: {item.healthy ? 'Yes' : 'No'}</p>
			<p>Calories: {item.calories}</p>
		</section>
	</div>
{/if}


