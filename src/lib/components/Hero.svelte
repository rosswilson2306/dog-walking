<script>
	import dogRunning from '$lib/assets/dog-running.jpg';
	import Heading from '$lib/components/Heading.svelte';
</script>

<section class="relative h-[calc(100vh-4rem)]">
	<img
		src={dogRunning}
		class="absolute h-full w-full left-0 top-0 object-cover"
		alt="Dog running"
	/>
	<div class="absolute h-full w-full left-0 top-0 cover z-20 bg-black/30"></div>
	<div class="relative z-50 h-full grid place-items-center">
		<div class="h-full w-full flex justify-center flex-col items-center px-4 md:items-start md:px-20 xl:px-48">
			<Heading classes="text-white">LKWalks</Heading>
			<p class="max-w-96 mb-4 text-center md:text-left text-white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam
			</p>
			<div class="flex gap-4">
				<button type="button" class="btn variant-filled-primary">Services</button>
				<button type="button" class="btn variant-filled-tertiary">Prices</button>
			</div>
		</div>
	</div>
</section>
