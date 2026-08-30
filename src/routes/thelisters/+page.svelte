<script module>
	// grebes

	import elopement_1004 from '$lib/images/listers/Elopement-1004.jpg?enhanced';
	import elopement_1008 from '$lib/images/listers/Elopement-1008.jpg?enhanced';
	import elopement_1011 from '$lib/images/listers/Elopement-1011.jpg?enhanced';
	import elopement_1016 from '$lib/images/listers/Elopement-1016.jpg?enhanced';
	import elopement_1020 from '$lib/images/listers/Elopement-1020.jpg?enhanced';
	import elopement_1024 from '$lib/images/listers/Elopement-1024.jpg?enhanced';
	import elopement_1027 from '$lib/images/listers/Elopement-1027.jpg?enhanced';
	import elopement_1034 from '$lib/images/listers/Elopement-1034.jpg?enhanced';
	import elopement_1049 from '$lib/images/listers/Elopement-1049.jpg?enhanced';
	import elopement_1056 from '$lib/images/listers/Elopement-1056.jpg?enhanced';
	import elopement_1058 from '$lib/images/listers/Elopement-1058.jpg?enhanced';
	import elopement_2107 from '$lib/images/listers/Elopement-2107.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: elopement_1004,
				caption: 'Elopement-1004.jpg'
			}
		],
		[
			{
				image: elopement_1008,
				caption: 'Elopement-1008.jpg'
			}
		],
		[
			{
				image: elopement_1011,
				caption: 'Elopement-1011.jpg'
			}
		],
		[
			{
				image: elopement_1016,
				caption: 'Elopement-1016.jpg'
			}
		],
		[
			{
				image: elopement_1020,
				caption: 'Elopement-1020.jpg'
			}
		],
		[
			{
				image: elopement_1024,
				caption: 'Elopement-1024.jpg'
			}
		],
		[
			{
				image: elopement_1027,
				caption: 'Elopement-1027.jpg'
			}
		],
		[
			{
				image: elopement_1034,
				caption: 'Elopement-1034.jpg'
			}
		],
		[
			{
				image: elopement_1049,
				caption: 'Elopement-1049.jpg'
			}
		],
		[
			{
				image: elopement_1056,
				caption: 'Elopement-1056.jpg'
			}
		],
		[
			{
				image: elopement_1058,
				caption: 'Elopement-1058.jpg'
			}
		],
		[
			{
				image: elopement_2107,
				caption: 'Elopement-2107.jpg'
			}
		]
	];
</script>

<script>
	import AlbumSliderHorizontal from '$lib/components/AlbumSliderHorizontal.svelte';
	import NavigationController from '$lib/components/NavigationController.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	// import BirdsDropDown from '$lib/components/BirdsDropDown.svelte';
	// import { count } from '$lib/data/counts.svelte.js';

	let title = "Andrea and Peter's Special Day";
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title}</div>
		<Spacer fontSize="clamp(10px, 1.75vw, 20px)" />
		<!-- <BirdsDropDown /> -->
	</div>

	<div class="slider-container">
		<AlbumSliderHorizontal bind:hIndex bind:vIndex {imagesArray} />
	</div>
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
