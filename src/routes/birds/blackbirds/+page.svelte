<script module>
	// american coot
	import bb01 from '$lib/images/birds/2026/07/2026-07-13-145838-PR.jpg?enhanced';
	import bb02 from '$lib/images/birds/2026/07/2026-07-22-171219.jpg?enhanced';
	import bb03 from '$lib/images/birds/2026/07/2026-07-22-171239.jpg?enhanced';
	import bb04 from '$lib/images/birds/2026/07/2026-07-13-150819-PR.jpg?enhanced';
	import bb05 from '$lib/images/birds/2026/07/2026-07-29-181919-PR.jpg?enhanced';
	import bb06 from '$lib/images/birds/2026/07/2026-07-29-181845-PR.jpg?enhanced';
	import bb07 from '$lib/images/birds/2026/07/2026-07-13-150723-PR.jpg?enhanced';
	import bb08 from '$lib/images/birds/2026/08/2026-08-17-154239-PR.jpg?enhanced';
	import bb09 from '$lib/images/birds/2026/08/2026-08-17-154334-PR.jpg?enhanced';
	import bb10 from '$lib/images/birds/2026/09/2026-09-29-154604.jpg?enhanced';
	import bb11 from '$lib/images/birds/2026/09/2026-09-29-170102.jpg?enhanced';
	import bb12 from '$lib/images/birds/2026/09/2026-09-29-170107.jpg?enhanced';
	import bb13 from '$lib/images/birds/2026/09/2026-09-30-161910.jpg?enhanced';
	import bb14 from '$lib/images/birds/2026/09/2026-09-30-163550.jpg?enhanced';
	import bb15 from '$lib/images/birds/2026/09/2026-09-30-164508.jpg?enhanced';
	import bb16 from '$lib/images/birds/2026/10/2026-10-03-135156.jpg?enhanced';
	import bb17 from '$lib/images/birds/2026/10/2026-10-03-135501.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: bb04,
				caption: '<strong>Red-winged Blackbird</strong>. <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: bb07,
				caption: '<strong>Red-winged Blackbird</strong>. <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: bb05,
				caption:
					'<strong>Red-winged Blackbird</strong>. <br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: bb06,
				caption:
					'<strong>Red-winged Blackbird</strong>. <br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: bb08,
				caption:
					'Female <strong>Red-winged Blackbird</strong>. <br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: bb09,
				caption:
					'Female <strong>Red-winged Blackbird</strong>. <br/>Lafarge Meadows, Calgary. August, 2026'
			},
			{
				image: bb16,
				caption: '<strong>Red-winged Blackbird</strong>. <br/>Brooks, Alberta. October, 2026'
			},
			{
				image: bb17,
				caption: '<strong>Red-winged Blackbirds</strong>. <br/>Brooks, Alberta. October, 2026'
			}
		],
		[
			{
				image: bb01,
				caption: '<strong>Yellow-headed Blackbird</strong>. <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: bb02,
				caption: '<strong>Yellow-headed Blackbird</strong>. <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: bb03,
				caption: '<strong>Yellow-headed Blackbird</strong>. <br/>Frank Lake, Alberta. July, 2026'
			}
		],
		[
			{
				image: bb10,
				caption: '<strong>Western Meadowlark</strong>. <br/>Brooks, Alberta. September, 2026.'
			},
			{
				image: bb11,
				caption: '<strong>Western Meadowlark</strong>. <br/>Brooks, Alberta. September, 2026.'
			},
			{
				image: bb12,
				caption: '<strong>Western Meadowlark</strong>. <br/>Brooks, Alberta. September, 2026.'
			},
			{
				image: bb13,
				caption: '<strong>Western Meadowlark</strong>. <br/>Brooks, Alberta. September, 2026.'
			},
			{
				image: bb14,
				caption: '<strong>Western Meadowlark</strong>. <br/>Brooks, Alberta. September, 2026.'
			},
			{
				image: bb15,
				caption: '<strong>Western Meadowlark</strong>. <br/>Brooks, Alberta. September, 2026.'
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

	let title = 'Blackbirds, etc.';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.blackbirds})</div>
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
