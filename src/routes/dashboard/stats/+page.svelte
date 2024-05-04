<script lang="ts">
	import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";

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
	}

	const typeColours: Record<string, string> = {
		"fruit": "rgba(255,0,0,1)",
		"vegetable": "rgba(0,255,0,1)",
		"meat": "rgba(0,0,255,1)",
		"dairy": "rgba(255,255,0,1)",
		"grains": "rgba(0,255,255,1)",
		"sweets": "rgba(255,0,255,1)",
		"beverages": "rgba(255,255,255,1)",
		"condiments": "rgba(0,0,0,1)",
		"other": "rgba(128,128,128,1)"
	}

	for (const item of data.fridge) {
		numItems += item.quantity ?? 1;
		typeCount[item.type.toLowerCase().trim()] += item.quantity ?? 1;
	}

	console.log(typeCount);

	const typeData: ConicStop[] = []
	let currentPos = 0;
	for (const [type, count] of Object.entries(typeCount)) {
		typeData.push({
			label: type,
			color: typeColours[type.toLowerCase().trim()],
			start: currentPos,
			end: currentPos + count / numItems * 100,
		});
		currentPos += count / numItems * 100;
	}
</script>

<div class="p-24 flex gap-8">
	<div class="p-8 card card-hover overflow-hidden w-full">
		<ConicGradient stops={typeData} legend>Type Distribution</ConicGradient>
	</div>
	<div class="p-8 card card-hover overflow-hidden w-full">
		<ConicGradient stops={typeData} legend>Type Distribution</ConicGradient>
	</div>
</div>