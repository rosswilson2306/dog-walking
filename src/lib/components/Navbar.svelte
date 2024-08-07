<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import Menu from '$lib/icons/Menu.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';

	export let mainNavLinks;
	export let socialLinks;

	const drawerStore = getDrawerStore();

	const handleToggleMenu = () => {
		if ($drawerStore.open) return drawerStore.close();

		drawerStore.open();
	};

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-filled-secondary' : '';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">LKWalks Dog Services</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- TODO: add social hrefs -->
		<div class="hidden lg:flex">
			<nav class="list-nav">
				<ul class="list flex flex-row">
					{#each mainNavLinks as { href, label }}
						<li class="">
							<span>
								<a {href} class={classesActive(href)}>{label}</a>
							</span>
						</li>
					{/each}
				</ul>
			</nav>
			<ul class="list flex flex-row">
				{#each socialLinks as { href, label }}
					<li class="">
						<span class="w-full">
							<a class="btn btn-sm" {href} target="_blank" rel="noopener noreferrer">
								{#if label === 'Instagram'}<Instagram />{:else}<Facebook />{/if}
							</a>
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<button on:click={handleToggleMenu} type="button" class="lg:hidden" aria-label="Toggle menu">
			<Menu />
		</button>
	</svelte:fragment>
</AppBar>
