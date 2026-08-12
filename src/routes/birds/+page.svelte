<script>
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import '$lib/styling/app.css';

	import { count } from '$lib/data/counts.svelte.js';

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
	import plover from '$lib/images/birds/2026/08/2026-08-07-171909-PR.jpg?enhanced';
	import sandpiper from '$lib/images/birds/2026/07/2026-07-22-164146-1.jpg?enhanced';
	import stilt from '$lib/images/birds/2026/08/2026-08-03-164608-PR.jpg?enhanced';
	import stork from '$lib/images/birds/2010s/2012-10-11-083129-PR.jpg?enhanced';
	import tern from '$lib/images/birds/2026/08/2026-08-03-165914-PR.jpg?enhanced';
	import waxwing from '$lib/images/birds/2026/07/2026-07-31-181837-PR.jpg?enhanced';
	import woodpecker from '$lib/images/birds/2026/07/2026-07-09-181356-PR.jpg?enhanced';
</script>

<div class="outer">
	<div class="top-matter">
		<HomeIcon fontSize="clamp(10px, 1.75vw, 20px)" linked="true" />
		<div class="bird-type">Bird Species</div>
		<Spacer fontSize="clamp(10px, 1.75vw, 20px)" />
	</div>
	<div class="home-page-links">
		<a href="/birds/blackbirds">
			<div class="photo-link">
				<enhanced:img src={blackbird} alt="blackbirds" />
				Blackbirds, etc. ({count.blackbirds})
			</div>
		</a>
		<a href="/birds/coots">
			<div class="photo-link">
				<enhanced:img src={coot} alt="coot" />
				Coots ({count.coots})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={cormorant} alt="cormorant" />
				Cormorants ({count.cormorants})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={duck} alt="wood duck" />
				Ducks and Geese(wood duck) ({count.ducks})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={kite} alt="kite" />
				Eagles, Hawks and Kites ({count.eagles})
			</div>
		</a>
		<a href="/birds/egrets">
			<div class="photo-link">
				<enhanced:img src={egret} alt="egret" />
				Egrets and Herons ({count.egrets})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={finch} alt="finch" />
				Finches ({count.finches})
			</div>
		</a>
		<a href="/birds/gulls">
			<div class="photo-link">
				<enhanced:img src={tern} alt="tern" />
				Gulls and Terns ({count.gulls})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={ibis} alt="ibis" />
				Ibises ({count.ibises})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={kingfisher} alt="kingfisher" />
				Kingfishers ({count.kingfishers})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={owl} alt="owl" />
				Owls - great horned ({count.owls})
			</div>
		</a>
		<a href="/birds/cormorants">
			<div class="photo-link">
				<enhanced:img src={pelican} alt="pelican" />
				Pelicans ({count.pelicans})
			</div>
		</a>
		<a href="/birds/plovers">
			<div class="photo-link">
				<enhanced:img src={plover} alt="plover" />
				Plovers ({count.plovers})
			</div>
		</a>
		<a href="/birds/sandpipers">
			<div class="photo-link">
				<enhanced:img src={sandpiper} alt="sandpiper" />
				Sandpipers ({count.sandpipers})
			</div>
		</a>
		<a href="/birds/stilts">
			<div class="photo-link">
				<enhanced:img src={stilt} alt="stilt" />
				Stilts ({count.stilts})
			</div>
		</a>
		<a href="/birds/sandpipers">
			<div class="photo-link">
				<enhanced:img src={stork} alt="stork" />
				Storks ({count.storks})
			</div>
		</a>

		<a href="/birds/sandpipers">
			<div class="photo-link">
				<enhanced:img src={waxwing} alt="waxwing" />
				Waxwings ({count.waxwings})
			</div>
		</a>
		<a href="/birds/woodpeckers">
			<div class="photo-link">
				<enhanced:img src={woodpecker} alt="woodpecker" />
				Woodpeckers ({count.woodpeckers})
			</div>
		</a>
	</div>
</div>

<style>
	.outer {
		background: white;
		height: 100%;
		margin: 0;
		padding: 0;
		/* border: 3px solid green; */
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
	.bird-type {
		margin-top: 0.25em;
		text-decoration: underline;
	}
	.home-page-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		/* background: pink; */
		width: 90%;
		margin-inline: auto;
		margin-top: 3em;
		gap: 1em;
		/* border: 3px solid green; */

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
