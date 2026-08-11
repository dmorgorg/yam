<script>
	import AlbumSlider3 from '$lib/components/AlbumSlider3.svelte';
	import NavigationController from '$lib/components/NavigationController.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import BirdsDropDown from '$lib/components/BirdsDropDown.svelte';
	import { count } from '$lib/data/counts.svelte.js';

	let title = 'Stilts and Avocets';
	let hIndex = $state(0);
	let vIndex = $state(0);

	// american coot
	import s01 from '$lib/images/birds/2026/08/2026-08-03-164608-PR.jpg?enhanced';
	import s02 from '$lib/images/birds/2026/08/2026-08-07-170550-PR.jpg?enhanced';
	import s03 from '$lib/images/birds/2026/08/2026-08-06-165118-PR.jpg?enhanced';
	import s04 from '$lib/images/birds/2026/08/2026-08-06-165313-PR.jpg?enhanced';
	import s05 from '$lib/images/birds/2026/08/2026-08-06-165333-PR.jpg?enhanced';

	const imagesArray = [
		[
			{
				image: s01,
				caption: '<strong>Black-necked Stilts</strong>. <br/>Weed Lake, Alberta. August, 2026'
			},
			{
				image: s02,
				caption: '<strong>Black-necked Stilt</strong>. <br/>Frank Lake, Alberta. August, 2026'
			}
		],
		[
			{
				image: s03,
				caption: '<strong>American Avocet</strong>. <br/>Weed Lake, Alberta. August, 2026.'
			},
			{
				image: s05,
				caption: '<strong>American Avocet</strong>. <br/>Weed Lake, Alberta. August, 2026.'
			},
			{
				image: s04,
				caption:
					'<strong>American Avocets</strong> with young. <br/>Weed Lake, Alberta. August, 2026.'
			}
		]
	];

	count.stilts = imagesArray.length;
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
