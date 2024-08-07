<script>
	import Hero from '$lib/components/Hero.svelte';
	import HomeDetails from './components/HomeDetails.svelte';
</script>

<Hero />
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<HomeDetails />
	</div>
</div>
