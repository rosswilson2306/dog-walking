<script lang="ts">
	import { page } from '$app/stores';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import { twMerge } from 'tailwind-merge';

  export let mainNavLinks;
  export let socialLinks;

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? '!variant-filled-secondary' : '';

</script>

<div class="flex flex-col justify-between h-full p-8">
	<nav class="list-nav w-full">
		<ul class="list">
			{#each mainNavLinks as { href, label }}
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
