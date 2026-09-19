<script module>
	// cranes
	import c01 from '$lib/images/birds/2026/09/2026-09-01-184805-PR-1.jpg?enhanced';
	import c02 from '$lib/images/birds/2026/09/2026-09-01-153454-PR.jpg?enhanced';
	import c03 from '$lib/images/birds/2026/09/2026-09-01-153515-PR.jpg?enhanced';
	import c04 from '$lib/images/birds/2026/09/2026-09-01-155254-PR.jpg?enhanced';
	import c05 from '$lib/images/birds/2026/09/2026-09-01-160403-PR.jpg?enhanced';
	import c06 from '$lib/images/birds/2026/09/2026-09-01-172911-PR.jpg?enhanced';
	import c07 from '$lib/images/birds/2026/09/2026-09-01-172932-PR.jpg?enhanced';
	import c08 from '$lib/images/birds/2026/09/2026-09-01-174150-PR.jpg?enhanced';
	import c09 from '$lib/images/birds/2026/09/2026-09-11-141920-PR.jpg?enhanced';
	import c10 from '$lib/images/birds/2026/09/2026-09-11-142216-PR.jpg?enhanced';
	import c11 from '$lib/images/birds/2026/09/2026-09-11-142259-PR.jpg?enhanced';
	import c12 from '$lib/images/birds/2026/09/2026-09-11-144435-PR.jpg?enhanced';
	import c13 from '$lib/images/birds/2026/09/2026-09-11-144443-1-PR.jpg?enhanced';
	import c14 from '$lib/images/birds/2026/09/2026-09-11-145321-PR.jpg?enhanced';
	import c15 from '$lib/images/birds/2026/09/2026-09-12-164932-1-PR.jpg?enhanced';
	import c16 from '$lib/images/birds/2026/09/2026-09-14-162510-1-PR.jpg?enhanced';
	import c17 from '$lib/images/birds/2026/09/2026-09-14-162704-1-PR.jpg?enhanced';
	import c18 from '$lib/images/birds/2026/09/2026-09-14-162941-1-PR.jpg?enhanced';
	import c19 from '$lib/images/birds/2026/09/2026-09-14-172958-1-PR.jpg?enhanced';
	import c20 from '$lib/images/birds/2026/09/2026-09-12-183312-1-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: c01,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c02,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c03,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c05,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c04,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c06,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c07,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			},
			{
				image: c08,
				caption: '<strong>Sandhill Cranes</strong>. <br/>Central Alberta, Alberta. September, 2026'
			}
		],
		[
			{
				image: c09,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c10,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c11,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c12,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c13,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c14,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c15,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c16,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c17,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c18,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c19,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
			},
			{
				image: c20,
				caption: '<strong>Whooping Cranes</strong>. <br/>Stettler County, Alberta. September, 2026'
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

	let title = 'Cranes';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.cranes})</div>
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
