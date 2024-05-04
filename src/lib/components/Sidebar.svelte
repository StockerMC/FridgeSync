<script>
	import { page } from "$app/stores";
	import { AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
</script>

<AppRail>
	<AppRailAnchor href="/dashboard" selected={$page.url.pathname === '/dashboard'} title="tile-1">
		<span class="text-lg">Fridge</span>
	</AppRailAnchor>
	<AppRailAnchor href="/dashboard/stats" selected={$page.url.pathname === '/dashboard/stats'} title="tile-2">
		<span class="text-lg">Stats</span>
	</AppRailAnchor>
	<AppRailAnchor href="/recipes" selected={$page.url.pathname === '/recipes'} title="tile-2">
		<span class="text-lg">Recipes</span>
	</AppRailAnchor>
	<AppRailAnchor href="/groceries" selected={$page.url.pathname === '/groceries'} title="tile-2">
		<span class="text-md">Groceries</span>
	</AppRailAnchor>
</AppRail>