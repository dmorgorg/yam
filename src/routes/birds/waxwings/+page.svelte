<script module>
	// waxwings
	import w01 from '$lib/images/birds/2026/07/2026-07-30-185751-PR.jpg?enhanced';
	import w02 from '$lib/images/birds/2026/07/2026-07-31-181433-PR.jpg?enhanced';
	import w03 from '$lib/images/birds/2026/07/2026-07-31-181837-PR.jpg?enhanced';
	import w04 from '$lib/images/birds/2026/07/2026-07-31-182041-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: w01,
				caption: '<strong>Cedar Waxwing</strong><br/>Big Hill Springs PP, Alberta. July, 2026'
			},
			{
				image: w02,
				caption: '<strong>Cedar Waxwing</strong><br/>Inglewood Bird Sanctuary. July, 2026'
			},
			{
				image: w03,
				caption: '<strong>Cedar Waxwing</strong><br/>Inglewood Bird Sanctuary. July, 2026'
			},
			{
				image: w04,
				caption: '<strong>Cedar Waxwing</strong><br/>Inglewood Bird Sanctuary. July, 2026'
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

	let title = 'Waxwings';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.waxwings})</div>
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
