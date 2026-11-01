<script>
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import favicon from '$lib/assets/camera.png';
	import homeBird from '$lib/images/birds/2026/07/2026-07-31-182041-PR.jpg?enhanced';
	import homeJeannette from '$lib/images/jeannette/1960.jpg?enhanced';
	import '$lib/styling/app.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <div class="outer"> -->
<div class="container">
	<!-- <header>
		<HomeIcon fontSize="3vw" />
	</header> -->
	<div class="top-matter">
		<HomeIcon fontSize="3vw" />
		<!-- <div class="bird-type">Birds...</div> -->
		<!-- <Spacer fontSize="clamp(10px, 1.75vw, 20px)" /> -->
	</div>
	<div class="wrapper">
		<div class="home-page-links-container">
			<a href="/birds">
				<div class="photo-link">
					<enhanced:img src={homeBird} alt="cedar waxwing" />
					Birds...
				</div>
			</a>

			<a href="/jeannette">
				<div class="photo-link">
					<enhanced:img src={homeJeannette} alt="where are you" />
					Jeannette Elisabeth Morgan (n&eacute;e&nbsp;Blanc) 14th&nbsp;July,&nbsp;1932 &ndash; 13th&nbsp;November,&nbsp;2024
				</div>
			</a>
		</div>
	</div>
</div>

<!-- </div> -->

<style>
	/* .outer {
		background: white;
		height: 100%;
		margin: 0;
		padding: 0;
	} */

	header {
		/* background: pink; */
		/* margin-bottom: 1em; */
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.wrapper {
		/* background: pink; */
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.home-page-links-container {
		display: flex;
		justify-content: space-evenly;
		width: 90%;
		margin-inline: auto;
		/* background: yellow; */
		/* margin-top: 4em; */
		/* border: 1px solid pink; */

		a:link,
		a:visited,
		a:active {
			text-decoration: none;
			color: inherit;
		}

		.photo-link {
			font-family: 'text';
			/* font-size: 80%; */
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
