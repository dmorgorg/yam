<script>
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import favicon from '$lib/assets/camera.png';
	import homeBird from '$lib/images/birds/2026-07-31-182041-PR.jpg?enhanced';
	import homeJeannette from '$lib/images/jeannette/1960.jpg?enhanced';
	import '$lib/styling/app.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="outer">
	<div class="container">
		<HomeIcon />
		<div class="home-page-links">
			<a href="/birds">
				<div class="photo-link">
					<enhanced:img src={homeBird} alt="where are you" />
					A few bird photos...
				</div>
			</a>

			<a href="/jeannette">
				<div class="photo-link">
					<enhanced:img src={homeJeannette} alt="where are you" />
					Jeannette Morgan (n&eacute;e&nbsp;Blanc)
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	.outer {
		background: white;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	.container {
		height: 100vh;
	}
	.home-page-links {
		display: flex;
		justify-content: space-evenly;
		width: 90%;
		margin-inline: auto;
		margin-top: 4em;

		a:link,
		a:visited,
		a:active {
			text-decoration: none;
			color: inherit;
		}

		.photo-link {
			font-family: 'text';
			/* margin-inline: 20px; */
			font-size: 80%;

			/* background: pink; */
			text-align: center;
			width: 25vw;
		}
	}

	enhanced\:img {
		box-shadow: 2px 2px 15px 5px #999;
		height: auto;
		width: 100%;
		border: 2px solid black;
	}
</style>
