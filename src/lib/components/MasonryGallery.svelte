<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import chunkArray from '../../utils/chunk-array';

	export let images;
	export let classes = '';

	const chunkedImages = chunkArray(images, 4);
</script>

<section class={twMerge('grid grid-cols-2 md:grid-cols-4 gap-2', classes)}>
	{#each chunkedImages as chunk}
		<div class="grid gap-4">
			{#each chunk as { src, alt }}
				<div>
					<img class="h-auto max-w-full rounded-lg" {src} {alt} />
				</div>
			{/each}
		</div>
	{/each}
</section>
