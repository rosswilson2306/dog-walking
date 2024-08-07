<script>
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import Menu from '$lib/icons/Menu.svelte';

	const drawerStore = getDrawerStore();

	const handleToggleMenu = () => {
		if ($drawerStore.open) return drawerStore.close();

		drawerStore.open();
	};
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">LKWalks Dog Services</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a class="btn btn-sm variant-ghost-surface" href="/" target="_blank" rel="noreferrer">
			Instagram
		</a>
		<a class="btn btn-sm variant-ghost-surface" href="/" target="_blank" rel="noreferrer">
			Facebook
		</a>
		<button on:click={handleToggleMenu} type="button" class="" aria-label="Toggle menu">
			<Menu />
		</button>
	</svelte:fragment>
</AppBar>
