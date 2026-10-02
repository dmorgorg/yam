<script module>
	// storks
	import thrush01 from '$lib/images/birds/2026/10/2026-10-01-165710.jpg?enhanced';
	import thrush02 from '$lib/images/birds/2026/10/2026-10-01-165704.jpg?enhanced';
	import thrush03 from '$lib/images/birds/2026/10/2026-10-01-153341.jpg?enhanced';
	import thrush04 from '$lib/images/birds/2026/09/2026-09-28-180836.jpg?enhanced';
	import thrush05 from '$lib/images/birds/2026/09/2026-09-28-180838.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: thrush01,
				caption:
					'<strong>Mountain Bluebird</strong> <br/>Dinosaur Provincial Park, Alberta. October, 2026.'
			},
			{
				image: thrush02,
				caption:
					'<strong>Mountain Bluebird</strong> <br/>Dinosaur Provincial Park, Alberta. October, 2026.'
			},
			{
				image: thrush03,
				caption:
					'<strong>Mountain Bluebird</strong> <br/>Dinosaur Provincial Park, Alberta. October, 2026.'
			},
			{
				image: thrush04,
				caption:
					'<strong>Mountain Bluebird</strong> <br/>Dinosaur Provincial Park, Alberta. September, 2026.'
			},
			{
				image: thrush05,
				caption:
					'<strong>Mountain Bluebird</strong> <br/>Dinosaur Provincial Park, Alberta. September, 2026.'
			}
		]
	];
</script>

<script>
	import AlbumSlider3 from '$lib/components/AlbumSlider3.svelte';
	import NavigationController from '$lib/components/NavigationController.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import BirdsDropDown from '$lib/components/BirdsDropDown.svelte';
	import { count } from '$lib/data/counts.svelte.js';

	let title = 'Thrushes and friends';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.thrushes})</div>
		<Spacer fontSize="clamp(10px, 1.75vw, 20px)" />
		<BirdsDropDown />
	</div>

	<div class="slider-container"><AlbumSlider3 bind:hIndex bind:vIndex {imagesArray} /></div>
</div>

<div class="nav-controller">
	<NavigationController bind:hIndex bind:vIndex {imagesArray} />
</div>

<style>
	.container {
		height: 100vh;
		overflow: hidden;
	}
	.slider-container {
		overflow-y: visible;

		margin-bottom: 2em;
		padding-bottom: 5em;
	}
	.top-matter {
		display: flex;
		font-family: cordelius;
		font-size: 175%;
		font-weight: bold;
		height: 2em;
		justify-content: space-between;
		min-height: 2rem;
		padding: 0.25em;
		text-align: left;
	}
	.nav-controller {
		position: absolute;
		bottom: 0em;
		right: 0.75em;
	}
	.bird-type {
		font-size: clamp(12px, 2vw, 20px);
		margin-top: 0.25em;
		text-decoration: underline;
	}
</style>
