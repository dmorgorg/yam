<script>
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import '$lib/styling/app.css';

	// import { count } from '$lib/data/counts.svelte.js';

	import blackbird from '$lib/images/birds/2026/07/2026-07-29-181927-PR.jpg?enhanced';
	import coot from '$lib/images/birds/2026/07/2026-07-29-180634-PR.jpg?enhanced';
	import cormorant from '$lib/images/birds/2026/08/2026-08-03-165547-PR.jpg?enhanced';
	import duck from '$lib/images/birds/2026/07/2026-07-31-164350-PR.jpg?enhanced';
	import kite from '$lib/images/birds/2010s/2012-11-12-082245-PR.jpg?enhanced';
	import egret from '$lib/images/birds/2010s/2012-10-17-094843-PR.jpg?enhanced';
	import finch from '$lib/images/birds/2026/07/2026-07-31-181733-PR.jpg?enhanced';
	import ibis from '$lib/images/birds/2026/07/2026-07-22-170847.jpg?enhanced';
	import kingfisher from '$lib/images/birds/2010s/2012-11-11-095231-PR.jpg?enhanced';
	import owl from '$lib/images/birds/2010s/2020-07-26-145608-1.jpg?enhanced';
	import pelican from '$lib/images/birds/2026/07/2026-07-29-182931-PR.jpg?enhanced';
	import sandpiper from '$lib/images/birds/2026/07/2026-07-22-164146-1.jpg?enhanced';
	import stilt from '$lib/images/birds/2026/08/2026-08-03-164608-PR.jpg?enhanced';
	import stork from '$lib/images/birds/2010s/2012-10-11-083129-PR.jpg?enhanced';
	import tern from '$lib/images/birds/2026/08/2026-08-03-165914-PR.jpg?enhanced';
	import waxwing from '$lib/images/birds/2026/07/2026-07-31-181837-PR.jpg?enhanced';
	import woodpecker from '$lib/images/birds/2026/07/2026-07-09-181356-PR.jpg?enhanced';
</script>

<div class="outer">
	<div class="container">
		<HomeIcon linked="true" />
		<div class="home-page-links">
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={blackbird} alt="cormorant" />
					Blackbirds and allies (2)
				</div>
			</a>
			<a href="/birds/types/coots">
				<div class="photo-link">
					<enhanced:img src={coot} alt="coot" />
					Coots (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={cormorant} alt="cormorant" />
					Cormorants (2)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={duck} alt="wood duck" />
					Ducks and Geese(wood duck) (2)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={kite} alt="kite" />
					Eagles, Hawks and Kites (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={egret} alt="egret" />
					Egrets and Herons (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={finch} alt="finch" />
					Finches (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={ibis} alt="ibis" />
					Ibises (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={kingfisher} alt="kingfisher" />
					Kingfishers (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={owl} alt="owl" />
					Owls - great horned (1)
				</div>
			</a>
			<a href="/birds/types/cormorants">
				<div class="photo-link">
					<enhanced:img src={pelican} alt="pelican" />
					Pelicans(1)
				</div>
			</a>
			<a href="/birds/types/sandpipers">
				<div class="photo-link">
					<enhanced:img src={sandpiper} alt="sandpiper" />
					Sandpipers(willet) (2)
				</div>
			</a>
			<a href="/birds/types/sandpipers">
				<div class="photo-link">
					<enhanced:img src={stilt} alt="stilt" />
					Stilts (1)
				</div>
			</a>
			<a href="/birds/types/sandpipers">
				<div class="photo-link">
					<enhanced:img src={stork} alt="stork" />
					Storks (1)
				</div>
			</a>
			<a href="/birds/types/sandpipers">
				<div class="photo-link">
					<enhanced:img src={tern} alt="tern" />
					Terns and Gulls (1)
				</div>
			</a>
			<a href="/birds/types/sandpipers">
				<div class="photo-link">
					<enhanced:img src={waxwing} alt="waxwing" />
					Waxwings (1)
				</div>
			</a>
			<a href="/birds/types/sandpipers">
				<div class="photo-link">
					<enhanced:img src={woodpecker} alt="woodpecker" />
					Woodpeckers (1)
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
		overflow: hidden;
	}
	.home-page-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		width: 90%;
		margin-inline: auto;
		margin-top: 5em;
		gap: 1em;

		a:link,
		a:visited,
		a:active {
			text-decoration: none;
			color: inherit;
		}

		.photo-link {
			font-family: 'text';
			font-size: 80%;
			margin-bottom: 2em;
			text-align: center;
			width: 15em;
			max-width: 16em;
		}
	}

	enhanced\:img {
		box-shadow: 2px 2px 15px 5px #999;
		height: auto;
		width: 100%;
		border: 2px solid black;
	}
</style>
