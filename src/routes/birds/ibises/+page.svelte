<script module>
	// american coot
	import ib01 from '$lib/images/birds/2026/07/2026-07-13-153349-PR.jpg?enhanced';
	import ib02 from '$lib/images/birds/2026/07/2026-07-22-170608.jpg?enhanced';
	import ib03 from '$lib/images/birds/2026/07/2026-07-22-170837.jpg?enhanced';
	import ib04 from '$lib/images/birds/2024/2024-02-09-220408-PR.jpg?enhanced';
	import ib05 from '$lib/images/birds/2024/2024-02-09-220430-PR.jpg?enhanced';
	import ib06 from '$lib/images/birds/2024/2024-02-09-220520-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: ib04,
				caption: '<strong>Black-headed Ibis</strong> <br/>Sri Lanka. February, 2024'
			},
			{
				image: ib05,
				caption: '<strong>Black-headed Ibis</strong> <br/>Sri Lanka. February, 2024'
			},
			{
				image: ib06,
				caption: '<strong>Black-headed Ibises</strong> <br/>Sri Lanka. February, 2024'
			}
		],
		[
			{
				image: ib01,
				caption: '<strong>White-faced Ibis</strong> <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: ib02,
				caption: '<strong>White-faced Ibis</strong> <br/>Frank Lake, Alberta. July, 2026'
			},
			{
				image: ib03,
				caption: '<strong>White-faced Ibises</strong> <br/>Frank Lake, Alberta. July, 2026'
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

	let title = 'Ibises';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.ibises})</div>
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
