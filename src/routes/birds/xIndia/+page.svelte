<script module>
	// american coot
	import e01 from '$lib/images/birds/2010s/2012-10-17-094843-PR.jpg?enhanced';
	import e02 from '$lib/images/birds/2010s/2012-10-17-095021.jpg?enhanced';
	import e03 from '$lib/images/birds/2010s/2012-11-08-131928-PR.jpg?enhanced';
	import e04 from '$lib/images/birds/2010s/2012-11-09-113119-PR.jpg?enhanced';
	import e05 from '$lib/images/birds/2010s/2012-11-27-102436-PR.jpg?enhanced';
	import e06 from '$lib/images/birds/2010s/2012-11-27-102445-PR-1.jpg?enhanced';
	import e07 from '$lib/images/birds/2010s/2012-11-14-125335-PR.jpg?enhanced';
	import c04 from '$lib/images/birds/2010s/2012-11-12-083930-PR.jpg?enhanced';
	import k01 from '$lib/images/birds/2010s/2012-11-12-082245-PR.jpg?enhanced';
	import k02 from '$lib/images/birds/2010s/2012-11-12-082216-PR.jpg?enhanced';
	import k03 from '$lib/images/birds/2010s/2012-11-12-082319-PR.jpg?enhanced';
	import india01 from '$lib/images/birds/2010s/2012-11-11-095231-PR.jpg?enhanced';
	import india02 from '$lib/images/birds/2010s/2012-11-11-095425-PR.jpg?enhanced';
	import s01 from '$lib/images/birds/2010s/2012-10-11-083129-PR.jpg?enhanced';
	import s02 from '$lib/images/birds/2010s/2012-10-11-083113-PR.jpg?enhanced';
	import s03 from '$lib/images/birds/2010s/2012-10-11-083227-PR.jpg?enhanced';
	import s04 from '$lib/images/birds/2010s/2012-10-11-130627-PR.jpg?enhanced';

	export const imagesArray = [
		[
			{
				image: c04,
				caption: '<strong>Little Cormorant</strong>. <br/>Odisha, India. November, 2012.'
			}
		],
		[
			{
				image: e07,
				caption:
					'Non-breeding <strong>Little Egrets</strong> and an Indian Pond-Heron. <br/>Odisha, India. October, 2012'
			}
		],
		[
			{
				image: e01,
				caption: 'Non-breeding <strong>Medium Egret</strong>. <br/>Odisha, India. October, 2012'
			},
			{
				image: e02,
				caption: 'Non-breeding <strong>Medium Egrets</strong>. <br/>Odisha, India. July, 2026'
			}
		],
		[
			{
				image: e04,
				caption: '<strong>Great Egret</strong>. <br/>Odisha, India. November, 2012'
			}
		],
		[
			{
				image: e05,
				caption: '<strong>Eastern Cattle-Egret</strong>. <br/>Odisha, India. November, 2012'
			},
			{
				image: e06,
				caption: '<strong>Eastern Cattle-Egret</strong>. <br/>Odisha, India. November, 2012'
			},
			{
				image: e03,
				caption: '<strong>Eastern Cattle-Egret</strong>. <br/>Odisha, India. November, 2012'
			}
		],
		[
			{
				image: india01,
				caption: '<strong>White-throated Kingfisher</strong><br/>Odisha, India. November, 2012.'
			},
			{
				image: india02,
				caption: '<strong>White-throated Kingfisher</strong><br/>Odisha, India. November, 2012.'
			}
		],

		[
			{
				image: k01,
				caption: '<strong>Brahminy Kite</strong><br/>Odisha, India. November, 2012.'
			},
			{
				image: k02,
				caption: '<strong>Brahminy Kite</strong><br/>Odisha, India. November, 2012.'
			},
			{
				image: k03,
				caption: '<strong>Brahminy Kite</strong><br/>Odisha, India. November, 2012.'
			}
		],
		[
			{
				image: s01,
				caption: '<strong>Asian Openbill</strong> <br/>West Bengal, India. October, 2012.'
			},
			{
				image: s02,
				caption:
					'<strong>Asian Openbill</strong> and a young one <br/>West Bengal, India. October, 2012.'
			},
			{
				image: s03,
				caption: 'Juvenile <strong>Asian Openbill</strong> <br/>West Bengal, India. October, 2012.'
			},
			{
				image: s04,
				caption: '<strong>Asian Openbill</strong>s <br/>West Bengal, India. October, 2012.'
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

	let title = 'India';
	let hIndex = $state(0);
	let vIndex = $state(0);
</script>

<div class="container">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">{title} ({count.xIndia})</div>
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
