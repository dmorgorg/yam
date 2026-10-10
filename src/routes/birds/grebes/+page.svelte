<script module>
	// grebes
	import g01 from '$lib/images/birds/2026/07/2026-07-29-183328-PR.jpg?enhanced';
	import g02 from '$lib/images/birds/2026/07/2026-07-29-193141-PR.jpg?enhanced';
	import g03 from '$lib/images/birds/2026/07/2026-07-29-193221-PR.jpg?enhanced';
	import g04 from '$lib/images/birds/2026/08/2026-08-17-184236-PR.jpg?enhanced';
	import g05 from '$lib/images/birds/2026/08/2026-08-17-184256-PR.jpg?enhanced';
	import g06 from '$lib/images/birds/2026/09/2026-09-20-142759.jpg?enhanced';
	import g07 from '$lib/images/birds/2026/10/2026-10-02-141123.jpg?enhanced';
	import g08 from '$lib/images/birds/2026/10/2026-10-02-141208.jpg?enhanced';
	import g09 from '$lib/images/birds/2026/10/2026-10-02-160530.jpg?enhanced';
	import g10 from '$lib/images/birds/2026/10/2026-10-02-160542.jpg?enhanced';
	import g11 from '$lib/images/birds/2026/10/2026-10-06-182148.jpg?enhanced';
	import g12 from '$lib/images/birds/2026/10/2026-10-06-183236.jpg?enhanced';
	import g13 from '$lib/images/birds/2026/10/2026-10-06-184409.jpg?enhanced';
	import g14 from '$lib/images/birds/2026/10/2026-10-07-181913.jpg?enhanced';
	import g15 from '$lib/images/birds/2026/10/2026-10-07-181952.jpg?enhanced';
	import g16 from '$lib/images/birds/2026/10/2026-10-08-160720.jpg?enhanced';
	import g17 from '$lib/images/birds/2026/10/2026-10-09-090257.jpg?enhanced';
	import g18 from '$lib/images/birds/2026/10/2026-10-09-091441.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: g06,
				caption:
					'Immature <strong>Horned Grebe</strong><br/>Telford Lake, Leduc County, Alberta. September, 2026'
			}
		],
		[
			{
				image: g04,
				caption:
					'<strong>Pied-billed Grebe</strong><br/>Lafarge Meadows, Fish Creek PP, Calgary. August, 2026'
			},
			{
				image: g05,
				caption:
					'<strong>Pied-billed Grebe</strong><br/>Lafarge Meadows, Fish Creek PP, Calgary. August, 2026'
			},
			{
				image: g16,
				caption:
					'<strong>Pied-billed Grebe</strong><br/>Kinbrook Island Provincial Park, Alberta. October, 2026'
			},
			{
				image: g17,
				caption:
					'<strong>Pied-billed Grebes</strong> with American Coot<br/>Kinbrook Island Provincial Park, Alberta. October, 2026'
			},
			{
				image: g18,
				caption:
					'<strong>Pied-billed Grebes</strong> with American Coot<br/>Kinbrook Island Provincial Park, Alberta. October, 2026'
			}
		],
		[
			{
				image: g01,
				caption:
					'Juvenile <strong>Red-necked Grebe</strong><br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: g02,
				caption:
					'Juvenile <strong>Red-necked Grebe</strong>. <br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: g03,
				caption:
					'<strong>Red-necked Grebe</strong> juveniles. <br/>Bridlewood Wetlands, Calgary. July, 2026'
			},
			{
				image: g07,
				caption:
					'Immature <strong>Red-necked Grebe</strong>. <br/>Timko Lake, Alberta. October, 2026'
			},
			{
				image: g08,
				caption:
					'Immature <strong>Red-necked Grebe</strong>. <br/>Timko Lake, Alberta. October, 2026'
			},
			{
				image: g14,
				caption:
					'<strong>Red-necked Grebe</strong>. <br/>Kitsim Reservoir nr. Brooks, Alberta. October, 2026'
			}
		],
		[
			{
				image: g09,
				caption: '<strong>Western Grebe</strong><br/>Scots Lake, Alberta. October, 2026.'
			},
			{
				image: g10,
				caption: '<strong>Western Grebe</strong><br/>Scots Lake, Alberta. October, 2026.'
			},
			{
				image: g12,
				caption:
					'Immature <strong>Western Grebe</strong><br/>Kitsim Reservoir nr. Brooks, Alberta. October, 2026.'
			},
			{
				image: g11,
				caption:
					'<strong>Western Grebe</strong><br/>Kitsim Reservoir nr. Brooks, Alberta. October, 2026.'
			},
			{
				image: g13,
				caption:
					'<strong>Western Grebe</strong><br/>Kitsim Reservoir nr. Brooks, Alberta. October, 2026.'
			},
			{
				image: g15,
				caption:
					'<strong>Western Grebe</strong><br/>Kitsim Reservoir nr. Brooks, Alberta. October, 2026.'
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

	let title = 'Grebes';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.grebes})</div>
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
