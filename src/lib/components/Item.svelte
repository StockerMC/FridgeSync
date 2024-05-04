<script lang="ts">
	import type { Tables } from "$lib/database-types";
	
	export let item: Tables<'fridge'>;
</script>

<div class="card p-4">
	<header class="card-header">{item.name}</header>
	<section class="p-4">
		<p>Type: {item.type}</p>
		<p>Quantity: {item.quantity}</p>
		<p>Healthy: {item.healthy ? 'Yes' : 'No'}</p>
		<p>Calories: {item.calories}</p>
	</section>
</div>
