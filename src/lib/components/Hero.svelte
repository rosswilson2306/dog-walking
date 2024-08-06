<script>
  import dogRunning from '$lib/assets/dog-running.jpg';
  import Heading from '$lib/components/Heading.svelte';
</script>

<section class="relative h-[80vh]">
  <img
    src={dogRunning}
    class="absolute h-full w-full left-0 top-0 cover"
    alt="Dog running"
  />
  <div class="absolute h-full w-full left-0 top-0 cover z-20 bg-black/50"></div>
  <div class="relative z-50 h-full grid place-items-center">
    <div class="flex flex-col items-center">
      <Heading>
        LKWalks
      </Heading>
      <div class="flex gap-4">
        <button type="button" class="btn variant-filled-primary">Services</button>
        <button type="button" class="btn variant-filled-tertiary">Prices</button>
      </div>
    </div>
  </div>
</section>
