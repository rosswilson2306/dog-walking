<script lang="ts">
	import { page } from '$app/stores';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import { twMerge } from 'tailwind-merge';

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-filled-secondary' : '';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/prices', label: 'Prices' },
		{ href: '/contact', label: 'Contact' }
	];

	const socialLinks = [
		{ href: '/', label: 'Instagram' },
		{ href: '/', label: 'Facebook' }
	];
</script>

<div class="flex flex-col justify-between h-full p-8">
	<nav class="list-nav w-full">
		<ul class="list">
			{#each links as { href, label }}
				<li class="w-full">
					<span class="w-full">
						<a {href} class={twMerge('w-full', classesActive(href))}>{label}</a>
					</span>
				</li>
			{/each}
		</ul>
	</nav>
	<div>
		<hr />
		<ul class="list w-full pt-4">
			{#each socialLinks as { href, label }}
				<li class="w-full py-2">
					<span>
						{#if label === 'Instagram'}<Instagram />{:else}<Facebook />{/if}
					</span>
					<span class="w-full">
						<a {href} class="w-full" target="_blank" rel="noopener noreferrer">{label}</a>
					</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
