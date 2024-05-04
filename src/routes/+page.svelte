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
		<h1 class="text-7xl gradient-heading font-extrabold leading-normal">FridgeSync: Cooking Up Convenience!</h1>
		<div class="flex gap-12">
			<button type="button" class="btn variant-filled">
				<a href="/dashboard" class="text-2xl p-2">Get Started</a>
			</button>
			<button type="button" class="btn variant-ghost">
				<a href="#about" on:click|preventDefault={scrollIntoView} class="text-2xl p-2">Learn More</a>
			</button>
		</div>
	</div>
	<div>
		<img alt="fridge" src={fridge} draggable="false">
	</div>
</div>
<br>
<br>
<br>
<br>
<div class="p-24 pt-36 flex gap-8" id="about">
	<!--Todo improve this-->
	<div class="card card-hover overflow-hidden w-1/2">
		<header>
			<img src={pattern} draggable="false" class="bg-black/50 w-full aspect-[21/9]" alt="pattern" />
		</header>
		<div class="p-4">
			<h1 class="text-4xl pb-4" data-toc-ignore>About Us</h1>
			<h1 class="text-xl">
				Scan items before they enter your fridge, access them from anywhere. The ultimate solution for
				hassle-free kitchen management. Simplify your routines and say goodbye to food waste with ease!
				<br>
				<br>
				FridgeSync addresses common kitchen challenges, including food waste from overlooked expiration dates,
				unaffordable groceries, disorganization leading to repetitive purchases, and time-consuming meal
				planning
				<br>
				<br>
				Struggles with inefficient grocery shopping experiences, limited access to nutritional information, and
				difficulties coordinating with family members. FridgeSync aims to solve these issues with its seamless
				solutions.
				<br>
				<br>
				FridgeSync offers a comprehensive solution, allowing users to scan items for quick identification, store
				data in a centralized database, and access their fridge contents from anywhere. Our app empowers users
				to make smarter meal decisions, save time, and minimize food waste.
			</h1>
		</div>
	</div>
	<div class="card card-hover overflow-hidden w-1/2">
		<header>
			<img src={pattern2} draggable="false" class="bg-black/50 w-full aspect-[21/9]" alt="pattern" />
		</header>
		<div class="p-4">
			<h1 class="text-4xl pb-4" data-toc-ignore>Our Features</h1>
			<ul class="list-disc pl-4 text-xl space-y-6 font-bold">
				<li>Scan items before they enter your fridge or pantry</li>
				<li>Access your fridge contents from anywhere</li>
				<li>View photos of your food at any time</li>
				<li>Plan meals based on what you have</li>
				<li>Generate a shopping list based on your fridge contents</li>
				<li>Get recipe suggestions based on your items</li>
				<li>View nutrition information of items in your fridge</li>
				<li>View stats about items in your fridge</li>
			</ul>
		</div>
	</div>
</div>

<style>
    .gradient-heading {
        @apply bg-clip-text text-transparent box-decoration-clone;
        /* Direction */
        @apply bg-gradient-to-br;
        /* Color Stops */
        @apply from-tertiary-600 via-secondary-800 to-primary-800;
    }
</style>