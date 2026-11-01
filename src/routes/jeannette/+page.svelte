<script module>
	// american coot
	import jem001 from '$lib/images/jeannette/1948ish.jpg';
	import jem002 from '$lib/images/jeannette/1950registration.jpg';
	import jem003 from '$lib/images/jeannette/1952.jpg';
	import jem004 from '$lib/images/jeannette/1953.jpg';
	import jem005 from '$lib/images/jeannette/1953c.jpg';
	import jem006 from '$lib/images/jeannette/1953d.jpg'; // has Nicolas so at least 1958
	import jem007 from '$lib/images/jeannette/1953e.jpg';
	import jem008 from '$lib/images/jeannette/1953f.jpg';

	export const imagesArray = [
		[
			{
				image: jem001,
				caption: '1948, or thereabouts.'
			},
			{
				image: jem002,
				caption: 'Registration, in the UK, 1950.'
			},
			{
				image: jem003,
				caption:
					'The newly born, David Ren&eacute; with his dad, and Jeannette in the background. <br/>1952, Leeds, Yorkshire.'
			},
			{
				image: jem004,
				caption: 'David with Jeannette in 1952/53. Leeds, Yorkshire.'
			},
			{
				image: jem007,
				caption: 'Jeannette/Mummy with Aunty Margaret/Margot and David in 1952/53. Yorkshire.'
			},

			{
				image: jem008,
				caption:
					"David's first visit to his grandparents in Switzerland at around eight months old. <br/>1953, Berne, Switzerland."
			},
			{
				image: jem005,
				caption: 'David in 1953. Austhorpe, Leeds, Yorkshire.'
			},

			/////////////////////////////////////////////////////////////////////////////////////////
			{
				image: jem006,
				caption:
					'David/Dave (holding Nicolas/Nick), Christian/Chris and Dad (Francis/Frank)<br/> in 1958. Austhorpe, Leeds, Yorkshire.'
			}
		]
	];
</script>

<script>
	import Album from '$lib/components/AlbumSliderVertical.svelte';
	import NavigationController from '$lib/components/NavigationController.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	// import BirdsDropDown from '$lib/components/BirdsDropDown.svelte';
	import { count } from '$lib/data/counts.svelte.js';

	let title = 'Jeannette Elisabeth Morgan';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="album-title">{title}</div>
		<Spacer fontSize="clamp(10px, 1.75vw, 20px)" />
		<!-- <BirdsDropDown /> -->
	</div>

	<div class="slider-container"><Album bind:hIndex bind:vIndex {imagesArray} /></div>
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

		margin-block: 1em;
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
	.album-title {
		/* font-size: clamp(12px, 2vw, 20px); */
		margin-top: 0.25em;
		margin-bottom: 2em;
		text-decoration: underline;
		background: pink;
	}
</style>
