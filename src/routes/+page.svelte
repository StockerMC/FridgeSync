<script lang="ts">
	import fridge from "$lib/images/fridge.png";
	import pattern from "$lib/images/pattern.png";
	import pattern2 from "$lib/images/pattern2.png";

	const scrollIntoView = ({ target }: any) => {
		const el = document.querySelector(target.getAttribute("href"));
		if (!el) return;
		el.scrollIntoView({
			behavior: "smooth"
		});
	};
</script>

<div class="p-24 flex">
	<div class="pt-24 pl-24 flex flex-col gap-32">
		<!--TODO: Change this-->
		<h1 class="text-7xl gradient-heading font-extrabold leading-normal">FridgeSync: Instant Inventory!</h1>
		<div class="flex gap-12">
			<button type="button" class="btn variant-filled">
				<a href="/dashboard">Get Started</a>
			</button>
			<button type="button" class="btn variant-ghost">
				<a href="#about" on:click|preventDefault={scrollIntoView}>Learn More</a>
			</button>
		</div>
	</div>
	<div>
		<img alt="fridge" src={fridge} draggable="false">
	</div>
</div>
<div class="p-24 pt-36 flex gap-8" id="about">
	<!--Todo improve this-->
	<div class="card card-hover overflow-hidden">
		<header>
			<img src={pattern} draggable="false" class="bg-black/50 w-full aspect-[21/9]" alt="pattern" />
		</header>
		<div class="p-4">
			<h1 class="text-4xl pb-4" data-toc-ignore>About Us</h1>
			<h1 class="text-xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi
				cumque consequatur tempore
				sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
			</h1>
		</div>
	</div>
	<div class="card card-hover overflow-hidden">
		<header>
			<img src={pattern2} draggable="false" class="bg-black/50 w-full aspect-[21/9]" alt="pattern" />
		</header>
		<div class="p-4">
			<h1 class="text-4xl pb-4" data-toc-ignore>Our Features</h1>
			<h1 class="text-xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi
				cumque consequatur tempore
				sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
			</h1>
		</div>
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