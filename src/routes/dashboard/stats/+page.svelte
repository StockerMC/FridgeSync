<script lang="ts">
	import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";
	import { browser } from "$app/environment";

	export let data;

	let numItems = 0;

	const typeCount: Record<string, number> = {
		"fruit": 0,
		"vegetable": 0,
		"meat": 0,
		"dairy": 0,
		"grains": 0,
		"sweets": 0,
		"beverages": 0,
		"condiments": 0,
		"other": 0
	};

	const typeColours: Record<string, string> = {
		"condiments": "#B5B3FE",
		"vegetable": "#B9E5FD",
		"meat": "#ECD5ED",
		"dairy": "#55C8DF",
		"grains": "#BB5C9B",
		"sweets": "#BAB9FA",
		"beverages": "#FDE7B2",
		"fruit": "#F64455",
		"other": "rgb(255,255,255)"
	};

	for (const item of data.fridge) {
		numItems += item.quantity ?? 1;
		typeCount[item.type.toLowerCase().trim()] += item.quantity ?? 1;
	}

	console.log(typeCount);

	const typeData: ConicStop[] = [];
	let currentPos = 0;
	for (const [type, count] of Object.entries(typeCount)) {
		typeData.push({
			label: type,
			color: typeColours[type.toLowerCase().trim()],
			start: currentPos,
			end: currentPos + count / numItems * 100
		});
		currentPos += count / numItems * 100;
	}
</script>

<div class="p-24 flex gap-8">
	<div class="p-8 card card-hover overflow-hidden w-full">
		{#if browser}
			<ConicGradient width="w-64" stops={typeData} legend>Type Distribution</ConicGradient>
		{:else}
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		{/if}
	</div>
	<div class="p-8 card card-hover overflow-hidden w-full">
		{#if browser}
			<ConicGradient width="w-64" stops={typeData} legend>Type Distribution</ConicGradient>
		{:else}
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		{/if}
	</div>
</div>