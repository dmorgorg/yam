<script module>
	// sparrows
	import s01 from '$lib/images/birds/2026/09/2026-09-28-180810.jpg?enhanced';
	import s02 from '$lib/images/birds/2026/09/2026-09-28-180730.jpg?enhanced';
	import s03 from '$lib/images/birds/2026/09/2026-09-28-180821.jpg?enhanced';
	import s04 from '$lib/images/birds/2026/09/2026-09-28-180828.jpg?enhanced';
	import s05 from '$lib/images/birds/2026/10/2026-10-01-165013.jpg?enhanced';
	import s06 from '$lib/images/birds/2026/10/2026-10-01-165049.jpg?enhanced';
	import s07 from '$lib/images/birds/2026/10/2026-10-01-164934.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: s01,
				caption:
					'<strong>White-crowned Sparrow</strong>. <br/>Dinosaur Provincial Park. September, 2026'
			},

			{
				image: s02,
				caption:
					'<strong>White-crowned Sparrow</strong>. <br/>Dinosaur Provincial Park. September, 2026'
			},
			// {
			// 	image: s03,
			// 	caption:
			// 		'<strong>White-crowned Sparrow</strong>. <br/>Dinosaur Provincial Park. September, 2026'
			// },
			{
				image: s04,
				caption:
					'<strong>White-crowned Sparrow</strong>, immature. <br/>Dinosaur Provincial Park. September, 2026'
			},
			{
				image: s05,
				caption:
					'<strong>White-crowned Sparrow</strong>. <br/>Dinosaur Provincial Park. October, 2026'
			},
			{
				image: s06,
				caption:
					'<strong>White-crowned Sparrow</strong>. <br/>Dinosaur Provincial Park. October, 2026'
			},
			{
				image: s07,
				caption:
					'<strong>White-crowned Sparrow</strong>, well-hidden. <br/>Dinosaur Provincial Park. October, 2026'
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

	let title = 'Sparrows and friends';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.sparrows})</div>
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
		margin-top: 0.25em;
		text-decoration: underline;
	}
</style>
