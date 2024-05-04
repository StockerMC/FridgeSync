<script lang="ts">
	import { scale } from "svelte/transition";
	import { page } from "$app/stores";
	import "../app.postcss";
	import { AppShell, AppBar } from "@skeletonlabs/skeleton";

	// Highlight JS
	import hljs from "highlight.js/lib/core";
	import "highlight.js/styles/github-dark.css";
	import { storeHighlightJs } from "@skeletonlabs/skeleton";
	import xml from "highlight.js/lib/languages/xml"; // for HTML
	import css from "highlight.js/lib/languages/css";
	import javascript from "highlight.js/lib/languages/javascript";
	import typescript from "highlight.js/lib/languages/typescript";

	hljs.registerLanguage("xml", xml); // for HTML
	hljs.registerLanguage("css", css);
	hljs.registerLanguage("javascript", javascript);
	hljs.registerLanguage("typescript", typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
	import { storePopup } from "@skeletonlabs/skeleton";
	import Sidebar from "$lib/components/Sidebar.svelte";

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	export let data;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!--Todo maybe change this-->
				<strong class="text-xl">
					<a href="/">FridgeSync</a>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/dashboard"
				>
					Dashboard
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/dashboard/stats"
				>
					Stats
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/recipes"
				>
					Recipes
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if $page.url.pathname.includes("dashboard") || $page.url.pathname.includes("recipes")}
			<Sidebar />
		{/if}
	</svelte:fragment>
	<!-- Page Route Content -->

	{#key data.pathname}
		<div transition:scale>
			<slot />
		</div>
	{/key}
</AppShell>
