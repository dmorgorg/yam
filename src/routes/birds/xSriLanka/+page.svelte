<script module>
	import sl03 from '$lib/images/birds/2024/2024-01-19-032700-PR.jpg?enhanced';
	// import sl04 from '$lib/images/birds/2024/2024-01-19-032757-PR.jpg?enhanced';
	import sl05 from '$lib/images/birds/2024/2024-01-19-033722-PR.jpg?enhanced';
	import sl06 from '$lib/images/birds/2024/2024-01-19-033832-PR.jpg?enhanced';
	import sl07 from '$lib/images/birds/2024/2024-01-19-032635-PR.jpg?enhanced';
	import sl08 from '$lib/images/birds/2024/2024-01-19-032548-PR.jpg?enhanced';
	import ib04 from '$lib/images/birds/2024/2024-02-09-220408-PR.jpg?enhanced';
	import ib05 from '$lib/images/birds/2024/2024-02-09-220430-PR.jpg?enhanced';
	import ib06 from '$lib/images/birds/2024/2024-02-09-220520-PR.jpg?enhanced';
	import e08 from '$lib/images/birds/2024/2024-02-09-011119-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: e08,
				caption: '<strong>Indian Pond Heron</strong>. <br/>Sri Lanka. February, 2024'
			}
		],
		[
			{
				image: ib06,
				caption: '<strong>Black-headed Ibises</strong> <br/>Sri Lanka. February, 2024'
			},
			{
				image: ib04,
				caption: '<strong>Black-headed Ibis</strong> <br/>Sri Lanka. February, 2024'
			},
			{
				image: ib05,
				caption: '<strong>Black-headed Ibis</strong> <br/>Sri Lanka. February, 2024'
			}
		],
		[
			{
				image: sl08,
				caption:
					'Adult <strong>Scaly-breasted Munias</strong><br/> Columbo, Sri Lanka. January, 2024.'
			},
			{
				image: sl07,
				caption:
					'<strong>Scaly-breasted Munias</strong>, left (immature) and right (adult). <br/> Columbo, Sri Lanka. January, 2024.'
			}
		],
		[
			{
				image: sl07,
				caption:
					'<strong>White-rumped Munia</strong> centre. <br/> Columbo, Sri Lanka. January, 2024.'
			}
		],
		[
			{
				image: sl03,
				caption: '<strong>Rose-ringed Parakeet</strong><br/>Columbo, Sri Lanka. January 2024'
			},

			{
				image: sl05,
				caption: '<strong>Rose-ringed Parakeet</strong><br/>Columbo, Sri Lanka. January 2024'
			},
			{
				image: sl06,
				caption: '<strong>Rose-ringed Parakeet</strong><br/>Columbo, Sri Lanka. January 2024'
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

	let title = 'Sri Lanka';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.xSriLanka})</div>
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
