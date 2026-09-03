<script module>
	// american coot
	import s01 from '$lib/images/birds/2026/07/2026-07-22-164146.jpg?enhanced';
	import s03 from '$lib/images/birds/2026/07/2026-07-22-165105.jpg?enhanced';
	import s02 from '$lib/images/birds/2026/07/2026-07-22-164934.jpg?enhanced';
	import s05 from '$lib/images/birds/2026/07/2026-07-22-165919.jpg?enhanced';
	import s04 from '$lib/images/birds/2026/07/2026-07-22-170138.jpg?enhanced';
	import s06 from '$lib/images/birds/2026/07/2026-07-22-163630.jpg?enhanced';
	import s07 from '$lib/images/birds/2026/07/2026-07-22-163720.jpg?enhanced';
	import s08 from '$lib/images/birds/2026/08/2026-08-03-165506-PR.jpg?enhanced';
	import s09 from '$lib/images/birds/2026/08/2026-08-06-172158-PR.jpg?enhanced';
	import s10 from '$lib/images/birds/2026/08/2026-08-06-172155-PR.jpg?enhanced';
	import s11 from '$lib/images/birds/2026/08/2026-08-06-173524-PR.jpg?enhanced';
	import s12 from '$lib/images/birds/2026/08/2026-08-06-181032-PR.jpg?enhanced';
	import s13 from '$lib/images/birds/2026/08/2026-08-14-180944-PR.jpg?enhanced';
	import s14 from '$lib/images/birds/2026/08/2026-08-14-174651-PR.jpg?enhanced';
	import s15 from '$lib/images/birds/2026/08/2026-08-14-174454-PR.jpg?enhanced';
	import s16 from '$lib/images/birds/2026/08/2026-08-14-174430-PR.jpg?enhanced';
	import s17 from '$lib/images/birds/2026/08/2026-08-12-162826-PR.jpg?enhanced';
	import s18 from '$lib/images/birds/2026/08/2026-08-31-184500-PR.jpg?enhanced';
	import s19 from '$lib/images/birds/2026/08/2026-08-29-181514-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: s07,
				caption: "Juvenile <strong>Wilson's Phalarope</strong>. <br/>Frank Lake, Alberta. July 2026"
			},
			{
				image: s05,
				caption:
					"Juvenile <strong>Wilson's Phalaropes</strong>. <br/>Frank Lake, Alberta. July 2026"
			},
			{
				image: s06,
				caption: "Juvenile <strong>Wilson's Phalarope</strong>. <br/>Frank Lake, Alberta. July 2026"
			},
			{
				image: s04,
				caption: "Juvenile <strong>Wilson's Phalarope</strong>. <br/>Frank Lake, Alberta. July 2026"
			}
		],
		[
			{
				image: s14,
				caption: '<strong>Least Sandpiper</strong>. <br/>Weed Lake, Alberta. August 2026'
			},
			{
				image: s15,
				caption: '<strong>Least Sandpiper</strong>. <br/>Weed Lake, Alberta. August 2026'
			},
			{
				image: s16,
				caption: '<strong>Least Sandpiper</strong>. <br/>Weed Lake, Alberta. August 2026'
			}
		],
		[
			{
				image: s17,
				caption:
					'<strong>Solitary Sandpiper</strong>. <br/>Pearce Estate Park, Calgary. August 2026'
			}
		],
		[
			{
				image: s09,
				caption: '<strong>Spotted Sandpiper</strong>. <br/>Weed Lake, Alberta. August 2026'
			},
			{
				image: s10,
				caption: '<strong>Spotted Sandpiper</strong>. <br/>Weed Lake, Alberta. August 2026'
			},
			{
				image: s13,
				caption: '<strong>Spotted Sandpiper</strong>. <br/>Weed Lake, Alberta. August 2026'
			}
		],
		[
			{
				image: s01,
				caption: '<strong>Willet</strong>. <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: s02,
				caption: '<strong>Willet</strong>. <br/>Frank Lake, Alberta. July 2026'
			},
			{
				image: s03,
				caption:
					"<strong>Willet</strong> (and a juvenile <strong>Wilson's Phalarope</strong>). <br/>Frank Lake, Alberta. July 2026"
			},
			{
				image: s08,
				caption: '<strong>Willet</strong> <br/>Weed Lake, Alberta. August 2026'
			}
		],

		[
			{
				image: s11,
				caption: '<strong>Greater Yellowlegs</strong>. <br/>Weed Lake, Alberta. August, 2026'
			},
			{
				image: s12,
				caption: '<strong>Greater Yellowlegs</strong>. <br/>Weed Lake, Alberta. August, 2026'
			},
			{
				image: s18,
				caption:
					'<strong>Greater Yellowlegs</strong>. <br/>Three Hills, Alberta (finishers.villain.tourists). August, 2026'
			}
		],
		[
			{
				image: s19,
				caption:
					'<strong>Lesser Yellowlegs</strong>. <br/>Three Hills, Alberta (finishers.villain.tourists). August, 2026'
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

	let title = 'Sandpipers';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title}, etc. ({count.sandpipers})</div>
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
