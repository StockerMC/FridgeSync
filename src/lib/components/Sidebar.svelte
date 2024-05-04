<script>
	import { page } from "$app/stores";
	import { AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
</script>

<AppRail>
	<AppRailAnchor href="/dashboard" selected={$page.url.pathname === '/dashboard'} title="tile-1">
		<span>Fridge</span>
	</AppRailAnchor>
	<AppRailAnchor href="/dashboard/stats" selected={$page.url.pathname === '/dashboard/stats'} title="tile-2">
		<span>Stats</span>
	</AppRailAnchor>
	<AppRailAnchor href="/recipes" selected={$page.url.pathname === '/recipes'} title="tile-2">
		<span>Recipes</span>
	</AppRailAnchor>
	<AppRailAnchor href="/groceries" selected={$page.url.pathname === '/groceries'} title="tile-2">
		<span>Groceries</span>
	</AppRailAnchor>
	<AppRailAnchor href="/dashboard/other" selected={$page.url.pathname === '/dashboard/other'} title="tile-3">
		<span>Other</span>
	</AppRailAnchor>
</AppRail>