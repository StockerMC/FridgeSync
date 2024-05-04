<script lang="ts">
	// name, type, quantity, healthy, calories
	import type { ItemType } from "$lib/types";

	export let item: ItemType;
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
