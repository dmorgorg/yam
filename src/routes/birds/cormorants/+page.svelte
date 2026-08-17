<script module>
	// american coot
	import c01 from '$lib/images/birds/2026/07/2026-07-31-161848-PR.jpg?enhanced';
	import c02 from '$lib/images/birds/2026/07/2026-07-31-173231-PR.jpg?enhanced';
	import c03 from '$lib/images/birds/2026/08/2026-08-03-165545-PR.jpg?enhanced';
	import c04 from '$lib/images/birds/2026/08/2026-08-12-170626-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: c01,
				caption:
					'Adult <strong>Double-crested Cormorant</strong>. <br/>Inglewood Bird Sanctuary, Calgary, Alberta. July, 2026'
			},
			{
				image: c02,
				caption:
					'<strong>Double-crested Cormorants</strong>. <br/>Inglewood Bird Sanctuary, Calgary, Alberta. July, 2026'
			},
			{
				image: c03,
				caption: '<strong>Double-crested Cormorant</strong>. <br/>Weed Lake, Alberta. August, 2026'
			},
			{
				image: c04,
				caption:
					'<strong>Double-crested Cormorant</strong>. <br/>Harvey Passage, Calgary. August, 2026'
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

	let title = 'Cormorants';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.cormorants})</div>
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
