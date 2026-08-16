<script module>
	// grebes
	import f01 from '$lib/images/birds/2025/2025-02-09-115712-PR.jpg?enhanced';
	import f02 from '$lib/images/birds/2025/2025-02-09-115718-PR.jpg?enhanced';
	import f03 from '$lib/images/birds/2025/2025-02-09-115748-PR.jpg?enhanced';
	import f04 from '$lib/images/birds/2025/2025-02-09-115811-PR.jpg?enhanced';
	import f05 from '$lib/images/birds/2026/07/2026-07-31-181733-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: f05,
				caption:
					'<strong>American Goldfinch</strong><br/> Inglewood Bird Sanctuary, Calgary. February, 2025'
			}
		],

		[
			{
				image: f01,
				caption: 'Adult male <strong>Redpoll</strong><br/> Calgary. February, 2025'
			},
			{
				image: f02,
				caption: 'Adult male <strong>Redpoll</strong><br/> Calgary. February, 2025'
			},
			{
				image: f03,
				caption: 'Female or immature <strong>Redpoll</strong><br/> Calgary. February, 2025'
			},
			{
				image: f04,
				caption: 'Female or immature <strong>Redpolls</strong><br/> Calgary. February, 2025'
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

	let title = 'Finches';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.finches})</div>
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
