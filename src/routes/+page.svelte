<script lang="ts">
	import fridge from "$lib/images/fridge.png";
</script>

<div class="p-24 flex">
	<div class="pt-24 pl-24 flex flex-col gap-32">
		<!--TODO: Change this-->
		<h1 class="text-7xl gradient-heading font-extrabold leading-normal">FridgeSync: Instant Inventory!</h1>
		<div class="flex gap-12">
			<button type="button" class="btn variant-filled">Get Started</button>
			<button type="button" class="btn variant-ghost">Learn More</button>
		</div>
	</div>
	<div>
		<img alt="fridge" src={fridge} draggable="false">
	</div>
</div>

<style>
    .gradient-heading {
        @apply bg-clip-text text-transparent box-decoration-clone;
        /* Direction */
        @apply bg-gradient-to-br;
        /* Color Stops */
        @apply from-primary-600 via-secondary-400 to-primary-400;
    }
</style>