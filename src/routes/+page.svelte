<script lang="ts">
	import fridge from "$lib/images/fridge.png";
</script>

<div class="p-24 flex">
	<div class="pt-24 pl-24 flex flex-col gap-32">
		<!--TODO: Change this-->
		<h1 class="text-7xl gradient-heading font-extrabold leading-normal">FridgeSync: Instant Inventory!</h1>
		<div class="flex gap-12">
			<button type="button" class="btn variant-filled">
				<a href="/dashboard">Get Started</a>
			</button>
			<button type="button" class="btn variant-ghost">Learn More</button>
		</div>
	</div>
	<div>
		<img alt="fridge" src={fridge} draggable="false">
	</div>
</div>
<div class="p-24">
	<h1 class="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, distinctio dolor dolorem error
		fugit impedit in
		labore pariatur tempora vero! Accusantium ad adipisci aliquam est itaque. Architecto corporis dicta dignissimos
		doloribus ea eius et eum labore laborum libero molestias obcaecati odit, porro quaerat quisquam reprehenderit
		unde veniam voluptatibus? Alias amet assumenda distinctio dolor doloremque eos ex fugit iure magni molestias,
		nam nisi nostrum perferendis rerum sequi tenetur unde voluptas. Exercitationem illum saepe tempore ut. Accusamus
		consectetur deleniti dicta, dolore dolores eligendi et in laboriosam laborum laudantium nam natus nesciunt
		officiis pariatur praesentium provident quis rem reprehenderit, sed tenetur vitae voluptatum.</h1>
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