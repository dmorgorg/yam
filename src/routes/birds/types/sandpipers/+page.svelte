<script>
	import AlbumSlider3 from '$lib/components/AlbumSlider3.svelte';
	import NavigationController from '$lib/components/NavigationController.svelte';
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import BirdsDropDown from '$lib/components/BirdsDropDown.svelte';

	let title = 'Coots';
	let hIndex = $state(0);
	let vIndex = $state(0);

	// american coot
	import coot01 from '$lib/images/birds/2026/07/2026-07-13-144412.jpg?enhanced';
	import coot02 from '$lib/images/birds/2026/07/2026-07-13-144243.jpg?enhanced';
	import coot03 from '$lib/images/birds/2026/07/2026-07-13-144252.jpg?enhanced';
	import coot04 from '$lib/images/birds/2026/07/2026-07-13-144457.jpg?enhanced';
	import coot05 from '$lib/images/birds/2026/07/2026-07-13-144541.jpg?enhanced';
	import coot06 from '$lib/images/birds/2026/07/2026-07-22-170224.jpg?enhanced';
	import coot07 from '$lib/images/birds/2026/07/2026-07-29-180634-PR.jpg?enhanced';

	const imagesArray = [
		[
			{
				image: coot01,
				caption:
					'Adult <strong>American Coot</strong>. <br/>The coot is not a duck, and does not have webbed feet. <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: coot02,
				caption: 'American Coot chick. <br/> Frank Lake, Alberta. July 2026'
			},
			{
				image: coot03,
				caption: 'American Coot and juvenile. <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: coot04,
				caption: 'American Coot and juvenile. <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: coot05,
				caption: 'Juvenile American Coot. <br/> Frank Lake, Alberta. July 2026'
			},
			{
				image: coot06,
				caption:
					'The somewhat unattractive juvenile American Coot. <br/> Frank Lake, Alberta. July 2026'
			},
			{
				image: coot07,
				caption:
					'Adult American Coot and chick. <br/> Bridlewood Wetlands, Calgary, Alberta. July 2026'
			}
		]
	];
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title}</div>
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
