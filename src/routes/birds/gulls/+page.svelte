<script module>
	// american coot
	import g01 from '$lib/images/birds/2026/07/2026-07-22-164955.jpg?enhanced';
	import g02 from '$lib/images/birds/2026/07/2026-07-22-165002.jpg?enhanced';
	import g03 from '$lib/images/birds/2026/08/2026-08-03-165914-PR.jpg?enhanced';
	import g04 from '$lib/images/birds/2026/08/2026-08-14-192242-PR.jpg?enhanced';
	import g05 from '$lib/images/birds/2026/08/2026-08-14-192247-PR.jpg?enhanced';
	import g06 from '$lib/images/birds/2026/08/2026-08-12-171404-PR.jpg?enhanced';
	import g07 from '$lib/images/birds/2026/08/2026-08-12-165851-PR.jpg?enhanced';
	import g08 from '$lib/images/birds/2026/08/2026-08-12-165231-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: g01,
				caption: "Juvenile <strong>Bonaparte's Gull</strong> <br/>Frank Lake, Alberta. July, 2026"
			},
			{
				image: g02,
				caption: "Juvenile <strong>Bonaparte's Gull</strong> <br/>Frank Lake, Alberta. July, 2026"
			}
		],
		[
			{
				image: g04,
				caption: "<strong>Franklin's Gulls</strong> <br/>Calgary, Alberta. August, 2026"
			},
			{
				image: g05,
				caption: "<strong>Franklin's Gulls</strong> <br/>Calgary, Alberta. August, 2026"
			}
		],
		[
			{
				image: g06,
				caption: '<strong>Ring-billed Gull</strong> <br/>Harvey Passage, Calgary. August, 2026'
			},
			{
				image: g07,
				caption: '<strong>Ring-billed Gull</strong> <br/>Harvey Passage, Calgary. August, 2026'
			},
			{
				image: g08,
				caption:
					'Non-breeding adult <strong>Ring-billed Gull</strong> <br/>Harvey Passage, Calgary. August, 2026'
			}
		],
		[
			{
				image: g03,
				caption:
					'<strong>Caspian Tern</strong> (Apparently rare.)<br/>Weed Lake, Alberta. August, 2026'
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

	let title = 'Gulls and Terns';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.gulls})</div>
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
