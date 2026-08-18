<script module>
	// grebes
	import osp01 from '$lib/images/birds/2026/08/2026-08-17-164848-PR.jpg?enhanced';
	import osp02 from '$lib/images/birds/2026/08/2026-08-17-170311-PR.jpg?enhanced';
	import osp03 from '$lib/images/birds/2026/08/2026-08-17-170744-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: osp01,
				caption: '<strong>Osprey</strong><br/>Lafarge Meadows, Fish Creek PP, Calgary. August, 2026'
			},
			{
				image: osp02,
				caption: '<strong>Osprey</strong><br/>Lafarge Meadows, Fish Creek PP, Calgary. August, 2026'
			},
			{
				image: osp03,
				caption: '<strong>Osprey</strong><br/>Lafarge Meadows, Fish Creek PP, Calgary. August, 2026'
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

	let title = 'Osprey';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.osprey})</div>
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
