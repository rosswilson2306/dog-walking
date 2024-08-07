<script>
	import Hero from '$lib/components/Hero.svelte';
	import HomeDetails from './components/HomeDetails.svelte';
</script>

<Hero />
<div class="container py-32 mx-auto flex justify-center items-center">
	<div class="space-y-4 text-center flex flex-col items-center">
		<HomeDetails />
	</div>
</div>
