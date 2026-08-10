<script>
	import AlbumSlider3 from '$lib/components/AlbumSlider3.svelte';
	import NavigationController from '$lib/components/NavigationController.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import BirdsDropDown from '$lib/components/BirdsDropDown.svelte';
	import { count } from '$lib/data/counts.svelte.js';

	let title = 'Coots';
	let hIndex = $state(0);
	let vIndex = $state(0);

	// american coot
	import c01 from '$lib/images/birds/2026/07/2026-07-13-144412.jpg?enhanced';
	import c02 from '$lib/images/birds/2026/07/2026-07-13-144457-PR.jpg?enhanced';
	import c03 from '$lib/images/birds/2026/07/2026-07-13-144543-PR.jpg?enhanced';
	// import c04 from '$lib/images/birds/2026/07/2026-07-22-163235.jpg?enhanced';
	import c05 from '$lib/images/birds/2026/07/2026-07-22-163242.jpg?enhanced';
	import c06 from '$lib/images/birds/2026/07/2026-07-22-165840.jpg?enhanced';
	import c07 from '$lib/images/birds/2026/07/2026-07-22-170224.jpg?enhanced';
	import c08 from '$lib/images/birds/2026/07/2026-07-22-182600.jpg?enhanced';
	import c09 from '$lib/images/birds/2026/07/2026-07-29-180634-PR.jpg?enhanced';
	import c10 from '$lib/images/birds/2026/07/2026-07-29-182716-PR.jpg?enhanced';
	import c11 from '$lib/images/birds/2026/08/2026-08-07-171239-PR.jpg?enhanced';
	import c12 from '$lib/images/birds/2026/08/2026-08-07-175159-PR.jpg?enhanced';

	const imagesArray = [
		[
			{
				image: c12,
				caption: 'Adult <strong>American Coot</strong>. <br/>Frank Lake, Alberta. August 2026'
			},
			{
				image: c01,
				caption: 'Adult <strong>American Coot</strong>.  <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: c05,
				caption: 'Adult <strong>American Coot</strong>.  <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: c11,
				caption: 'Adult <strong>American Coot</strong>.  <br/>Frank Lake, Alberta. August 2026'
			},
			{
				image: c02,
				caption:
					' <strong>American Coot</strong> chick.  <br/>They leave the nest after one day.<br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: c09,
				caption:
					'Adult <strong>American Coot</strong> and chick.  <br/>Bridlewood Meadows, Calgary, Alberta. July 2026'
			},
			{
				image: c03,
				caption:
					'Adult <strong>American Coot</strong> and juvenile.  <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: c06,
				caption:
					'Adult <strong>American Coots</strong> and juvenile.  <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: c08,
				caption:
					'Adult <strong>American Coot</strong> and juvenile.  <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: c07,
				caption:
					'Juvenile <strong>American Coot</strong>. <br/> Not always the most elegant looking... <br/>Frank Lake, Alberta. July 2026'
			},
			// {
			// 	image: c07,
			// 	caption:
			// 		'<strong>American Coots</strong>. <br/> Not always the prettiest... <br/>Frank Lake, Alberta. July 2026'
			// },
			{
				image: c10,
				caption:
					'<strong>American Coot</strong>. <br/> Not webbed, but lobed feet to aid propulsion <br/>Bridlewood Meadows, Calgary, Alberta. July 2026'
			}
		]
	];

	count.coots = imagesArray.length;
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.coots})</div>
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
