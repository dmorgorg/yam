<script>
	import { fade } from 'svelte/transition';
	let { hIndex, vIndex, imagesArray } = $props();
</script>

{#key `${hIndex}-${vIndex}`}
	<div class="wrapper" out:fade={{ duration: 500 }} in:fade={{ duration: 1000, delay: 1000 }}>
		<!-- <div class="media" bind:this={mediaEl}> -->
		<enhanced:img
			src={imagesArray[Number(hIndex)][Number(vIndex)].image}
			sizes="(min-width:1920px) 1800px, (min-width:1080px) 1080px, (min-width:768px) 768px"
			alt=""
		/>
		<div class="caption">
			({hIndex + 1}.{vIndex + 1})
			{@html imagesArray[Number(hIndex)][vIndex].caption}
		</div>
	</div>
{/key}

<!-- </div> -->

<style lang="scss">
	.wrapper {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 80%;
		margin-inline: auto;
		max-height: 80vh;
		padding-top: 0;
		overflow: visible;
	}

	enhanced\:img {
		border: 0.225vw solid black;
		box-shadow: 0 0 0.5em 0.15em grey;
		height: auto;
		margin-inline: auto;
		max-height: 70vh;
		max-width: 100%;
		object-fit: contain;
		width: auto;
		overflow-y: auto;
	}
	.caption {
		font-family: 'text';
		font-size: clamp(10px, 1.25vw, 16px);
		line-height: 1.2;
		margin-top: 0.5em;
		text-align: center;
		max-width: 90%;
	}
</style>
