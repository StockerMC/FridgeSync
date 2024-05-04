<script lang="ts">
	import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";

	export let data;

	let numItems = 0;

	const typeCount: Record<string, number> = {
		"fruit": 0,
		"vegetable": 0,
		"meat": 0,
		"dairy": 0,
		"grain": 0,
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
		"grain": "#BB5C9B",
		"sweets": "#BAB9FA",
		"beverages": "#FDE7B2",
		"fruit": "#F64455",
		"other": "rgb(255,255,255)"
	};

	for (const item of data.fridge) {
		numItems += item.quantity ?? 1;
		typeCount[item.type.toLowerCase().trim()] += item.quantity ?? 1;
	}

	const typeData: ConicStop[] = [];
	let currentPos = 0;
	for (const [type, count] of Object.entries(typeCount)) {
		typeData.push({
			label: type,
			color: typeColours[type.toLowerCase().trim()],
			start: currentPos,
			end: currentPos + Math.round(count / numItems * 100)
		});
		console.log(typeData);
		currentPos += Math.round(count / numItems * 100);
	}

	let healthyCount = 0;
	let unHealthyCount = 0;

	for (const item of data.fridge) {
		if (item.healthy) {
			healthyCount += item.quantity ?? 1;
		} else {
			unHealthyCount += item.quantity ?? 1;
		}
	}

	const healthyData: ConicStop[] = [
		{
			label: "Healthy",
			color: "#8fff88",
			start: 0,
			end: Math.round(healthyCount / numItems * 100)
		},
		{
			label: "Unhealthy",
			color: "#F64455",
			start: Math.round(healthyCount / numItems * 100),
			end: 100
		}
	];
</script>

<div class="p-24 flex gap-8">
	<div class="p-8 card card-hover overflow-hidden w-full">
		<ConicGradient width="w-64" stops={typeData} legend>Type Distribution</ConicGradient>
	</div>
	<div class="p-8 card card-hover overflow-hidden w-full">
		<ConicGradient width="w-64" stops={healthyData} legend>Healthiness Distribution</ConicGradient>
	</div>
</div>