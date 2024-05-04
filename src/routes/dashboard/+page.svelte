<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	let items = [];
</script>


<div class="p-3">
	<div class="flex mb-2">
		<button type="button" class="btn variant-filled mr-auto"><span class="font-extrabold text-xl pr-1">+</span>add</button>
		<button class="btn variant-filled ml-auto">⧩</button>
	</div>
	<div class="grid grid-cols-4 gap-6">
		{#each {length: 7} as _, i}
			<Item item={{name: "testName", type:"testType", calories:1000, healthy:false, quantity: 2}} />
		{/each}
	</div>
</div>

