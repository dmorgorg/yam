<script>
	let { fontSize = '4vw', linked = false } = $props();
	import '$lib/styling/app.css';
	import '$lib/fonts.css';
</script>

{#if linked}
	<a href="/">
		<div class="home-icon cordelius" style="font-size:{fontSize};">
			<div>YAMNUSKA</div>
			<div class="dotCA"><span class="dot f-75">dot </span>&nbsp;<span> CA</span></div>
		</div>
	</a>
{:else}
	<div class="home-icon cordelius" style="font-size:{fontSize};">
		<div>YAMNUSKA</div>
		<div class="dotCA"><span class="dot f-75">dot </span>&nbsp;<span> CA</span></div>
	</div>
{/if}

<style lang="scss">
	.home-icon {
		background-color: black;
		color: white;
		display: inline-block;
		font-weight: bold;
		line-height: 0.75em;
		padding: 0.4em;

		.f-75 {
			font-size: 75%;
		}
		.dot {
			color: gray;
			margin-block: 5%;
		}
		.dotCA {
			margin-top: 0.25em;
		}
	}
	.cordelius {
		font-family: cordelius;
	}
</style>
