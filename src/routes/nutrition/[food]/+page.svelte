<script lang="ts">
	export let data;

	const formatNutrient = (nutrient: string) => {
		nutrient = nutrient.replaceAll("_", " ").replaceAll("%20", " ");
		return nutrient.charAt(0).toUpperCase() + nutrient.slice(1).toLowerCase();
	}

	const titleCase = (str: string) => {
		return str.toLowerCase().split(' ').map(function(word) {
			return word.replace(word[0], word[0].toUpperCase());
		}).join(' ');
	}
</script>

<div class="p-32">
	<h1 class="text-center text-4xl pb-8">Nutrition For 1 Serving Of {titleCase(data.pathname.slice(11)).replaceAll("%20", " ")}</h1>
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