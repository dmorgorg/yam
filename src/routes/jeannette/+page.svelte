<script>
	const imageModules = import.meta.glob('$lib/images/jeannette/*.jpg', {
		eager: true,
		query: {
			enhanced: true
		}
	});
</script>

<div class="wrapper">
	{#each Object.entries(imageModules) as [_path, module]}
		<enhanced:img src={module.default} alt="some alt text" class="image" />
	{/each}
</div>

<style>
	.wrapper {
		width: 90%;
		margin-inline: auto;
	}
	.image {
		width: 100%;
		height: auto;
		margin-block: 1rem;
	}
</style>
