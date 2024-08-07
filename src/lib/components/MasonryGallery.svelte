<script lang="ts">
	import chunkArray from '../../utils/chunk-array';

	export let images;

	const chunkedImages = chunkArray(images, 4);
</script>

<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
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
