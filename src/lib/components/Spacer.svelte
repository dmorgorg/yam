<script>
	// same values as HomeIcon, just a spacer to keep type title centred
	let { fontSize = '4vw', linked = false } = $props();
	import '$lib/styling/app.css';
	import '$lib/fonts.css';
</script>

<div class="home-icon cordelius" style="font-size:{fontSize};">YAMNUSKA</div>

<style lang="scss">
	.home-icon {
		color: white;
		display: inline-block;
		font-weight: bold;
		height: fit-content;
		line-height: 0.75em;
		padding: 0.4em;
	}
	.cordelius {
		font-family: cordelius;
	}
</style>
