<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  import Menu from '$lib/icons/Menu.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">LKWalks Dog Services</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/"
					target="_blank"
					rel="noreferrer"
				>
          Instagram
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/"
					target="_blank"
					rel="noreferrer"
				>
          Facebook
				</a>
        <button type="button" class="" aria-label="Toggle menu">
          <Menu />
        </button>
			</svelte:fragment>
		</AppBar>
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
