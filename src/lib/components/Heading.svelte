<script>
	import { twMerge } from 'tailwind-merge';

	export let classes = '';
</script>

<h1 class={twMerge('text-center text-4xl mb-4 tracking-wider', classes)}>
	<slot></slot>
</h1>
