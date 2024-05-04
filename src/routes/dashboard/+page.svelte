<script>
    export let data;
</script>

<ul>
	<li>
		test
	</li>
	{#each data.fridge as item}
		<li>{item.name}</li>
	{/each}
</ul>