<script lang="ts">
	import '../app.postcss';
	import { initializeStores, AppShell, Drawer } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import DrawerContent from '$lib/components/DrawerContent.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Drawer zIndex="z-[100]">
	<DrawerContent />
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
		<a class="logo-item" href="/">
			<span>(icon)</span>
			<span>Skeleton</span>
		</a>
		<a class="logo-item" href="/">
			<span>(icon)</span>
			<span>Skeleton</span>
		</a>
		<a class="logo-item" href="/">
			<span>(icon)</span>
			<span>Skeleton</span>
		</a>
	</div>
</AppShell>
