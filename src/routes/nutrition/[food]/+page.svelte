<script lang="ts">
	export let data;

	const formatNutrient = (nutrient: string) => {
		nutrient = nutrient.replaceAll("_", " ");
		return nutrient.charAt(0).toUpperCase() + nutrient.slice(1).toLowerCase();
	}

	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}
</script>

<div class="p-32">
	<h1 class="text-center text-4xl pb-8">Nutrition For 1 Serving Of {capitalize(data.pathname.slice(11))}</h1>
	<div class="table-container">
		<table class="table table-hover">
			<thead>
			<tr>
				<th>Nutrient</th>
				<th>Amount</th>
			</tr>
			</thead>
			<tbody>
			{#each Object.entries(data.nutrition.items[0]) as [nutrient, num]}
				{#if nutrient !== "name"}
					<tr>
						<td>{formatNutrient(nutrient)}</td>
						<td>{num}</td>
					</tr>
				{/if}
			{/each}
			</tbody>
		</table>
	</div>
</div>