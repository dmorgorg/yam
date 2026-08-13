<script module>
	// american coot
	import p01 from '$lib/images/birds/2026/07/2026-07-13-150619-PR.jpg?enhanced';
	import p02 from '$lib/images/birds/2026/07/2026-07-13-145801-PR.jpg?enhanced';
	import p03 from '$lib/images/birds/2026/07/2026-07-29-183053-PR.jpg?enhanced';
	import p04 from '$lib/images/birds/2026/07/2026-07-29-182931-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: p01,
				caption:
					'<strong>American White Pelican</strong> and gulls <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: p02,
				caption:
					'<strong>American White Pelicans</strong> and gulls <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: p03,
				caption:
					'<strong>American White Pelican</strong> incoming! <br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: p04,
				caption:
					'<strong>American White Pelicans</strong><br/>Bridlewood Wetlands, Calgary. July, 2026'
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

	let title = 'Pelicans';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.pelicans})</div>
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
