<script module>
	// grebes
	import sh01 from '$lib/images/birds/2026/10/2026-10-03-131215.jpg?enhanced';
	import sh02 from '$lib/images/birds/2026/10/2026-10-07-145344.jpg?enhanced';
	import sh03 from '$lib/images/birds/2026/10/2026-10-07-150036.jpg?enhanced';
	import sh04 from '$lib/images/birds/2026/10/2026-10-07-183209.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: sh01,
				caption:
					'<strong>Northern Shrike</strong><br/>Nimko Lake, Newell County, Alberta. October, 2026'
			},
			{
				image: sh02,
				caption:
					'<strong>Northern Shrike</strong><br/>Kitsum Reservoir, Newell County, Alberta. October, 2026'
			},
			{
				image: sh03,
				caption:
					'<strong>Northern Shrike</strong><br/>Kitsum Reservoir, Newell County, Alberta. October, 2026'
			},
			{
				image: sh04,
				caption:
					'<strong>Northern Shrike</strong><br/>Kitsum Reservoir, Newell County, Alberta. October, 2026'
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

	let title = 'Shrikes';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.herons})</div>
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
