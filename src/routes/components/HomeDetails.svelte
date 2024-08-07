<script lang="ts">
	import MasonryGallery from '$lib/components/MasonryGallery.svelte';

	// TODO: replace placeholder images
	const images = [
		{
			src: 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-1'
		},
		{
			src: 'https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-2'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-3'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-4'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-5'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-6'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-7'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-8'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-9'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-10'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-11'
		},
		{
			src: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			alt: 'placeholder-12'
		}
	];
</script>

<section>
	<MasonryGallery {images} />
</section>
