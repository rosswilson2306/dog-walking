<script lang="ts">
	import MasonryGallery from '$lib/components/MasonryGallery.svelte';
	import dogRunning from '$lib/assets/dog-running.jpg';
	import deja from '$lib/assets/deja.jpeg';
	import trees from '$lib/assets/trees.jpeg';
	import profileTrees from '$lib/assets/profile-trees.jpeg';
	import Heading from '$lib/components/Heading.svelte';

	// TODO: replace placeholder images
	const images = [
		{ src: dogRunning, alt: 'placeholder-1' },
		{ src: deja, alt: 'placeholder-2' },
		{ src: trees, alt: 'placeholder-3' },
		{ src: profileTrees, alt: 'placeholder-4' },
		{ src: deja, alt: 'placeholder-5' },
		{ src: trees, alt: 'placeholder-6' },
		{ src: dogRunning, alt: 'placeholder-7' },
		{ src: deja, alt: 'placeholder-8' },
		{ src: profileTrees, alt: 'placeholder-9' },
		{ src: deja, alt: 'placeholder-10' },
		{ src: dogRunning, alt: 'placeholder-11' },
		{ src: trees, alt: 'placeholder-12' }
	];
</script>

<section class="flex flex-col md:flex-row gap-8 px-8">
	<MasonryGallery {images} classes="flex-1" />
	<div class="flex flex-col justify-center items-center w-full flex-1">
		<Heading>Lorem ipsum</Heading>
		<p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
	</div>
</section>
