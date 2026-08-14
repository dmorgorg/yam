<script>
	import { slide } from 'svelte/transition';
	import { count } from '$lib/data/counts.svelte.js';
	let displayContent = $state(false);
	let borderColor = $state('red');
	function toggleDisplay() {
		displayContent = !displayContent;
		borderColor = displayContent ? 'red' : 'blue';
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="dropDown cordelius">
	<div class="title" onclick={toggleDisplay}>
		<span>
			{@html displayContent ? '&#9650;' : '&#9660;'}
		</span>
		Species:
	</div>
	{#if displayContent}
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<ul
			class="list"
			transition:slide={{ duration: 1000, axis: 'y' }}
			onclick={() => {
				displayContent = false;
			}}
		>
			<li>
				<a href="/birds/blackbirds">Blackbirds, etc. ({count.blackbirds})</a>
			</li>
			<li>
				<a href="/birds/coots">Coots ({count.coots})</a>
			</li>
			<li>
				<a href="/birds/cormorants">Cormorants ({count.cormorants})</a>
			</li>
			<li>
				<a href="/birds/ducks">Ducks ({count.ducks})</a>
			</li>
			<li>
				<a href="/birds/eagles">Eagles, Hawks and Kites ({count.eagles})</a>
			</li>
			<li>
				<a href="/birds/egrets">Egrets and Herons ({count.egrets})</a>
			</li>
			<li>
				<a href="/birds/finches">Finches ({count.finches})</a>
			</li>
			<li>
				<a href="/birds/grebes">Grebes ({count.grebes})</a>
			</li>
			<li>
				<a href="/birds/gulls">Gulls and Terns ({count.gulls})</a>
			</li>
			<li>
				<a href="/birds/ibises">Ibises ({count.ibises})</a>
			</li>
			<li>
				<a href="/birds/kingfishers">King<span class="fi">fi</span>shers ({count.kingfishers})</a>
			</li>
			<li>
				<a href="/birds/owls">Owls ({count.owls})</a>
			</li>
			<li>
				<a href="/birds/parakeets">Parakeets ({count.parakeets})</a>
			</li>
			<li>
				<a href="/birds/pelicans">Pelicans ({count.pelicans})</a>
			</li>
			<li>
				<a href="/birds/plovers">Plovers ({count.plovers})</a>
			</li>
			<li>
				<a href="/birds/sandpipers">Sandpipers, etc. ({count.sandpipers})</a>
			</li>
			<li>
				<a href="/birds/stilts">Stilts and Avocets ({count.stilts})</a>
			</li>

			<li>
				<a href="/birds/waxwings">Waxwings ({count.waxwings})</a>
			</li>
			<li>
				<a href="/birds/woodpeckers">Woodpeckers ({count.woodpeckers})</a>
			</li>
		</ul>
	{/if}
</div>

<style lang="scss">
	.cordelius {
		font-family: cordelius;
		font-weight: bold;
	}
	.dropDown {
		cursor: pointer;
		position: absolute;
		font-size: clamp(12px, 1.25vw, 20px);
		padding-inline: 0.5em;
		padding-block: 0.5em;
		padding-left: 0;
		right: 0.75em;
		border-bottom-left-radius: 0.5vw;
		text-align: right;
		background: white;
	}

	.title {
		cursor: pointer;
		font-size: 125%;
	}
	.accentFont {
		font-family: 'text';
	}
	.fi {
		font-family: 'candara';
	}

	.list {
		background: white;
		margin: 0;
		padding-block: 0.5em;
		padding-left: 1em;
		list-style-type: none;
		text-align: right;
	}
	li {
		margin-block: 0.5em;
	}
	a {
		&:visited,
		&:link,
		&:active {
			color: grey;
		}
	}
	strike {
		color: red;
	}
</style>
