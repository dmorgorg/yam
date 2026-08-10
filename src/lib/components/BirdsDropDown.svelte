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
				<a href="/birds/types/blackbirds">Blackbirds, etc.</a>
			</li>
			<li>
				<a href="/birds/types/coots">Coots ({count.coots})</a>
			</li>
			<li>
				<a href="/birds/types/cormorants">Cormorants ({count.cormorants})</a>
			</li>
			<li>
				<a href="/birds/types/ducks">Ducks</a>
			</li>
			<li>
				<a href="/birds/types/eagles">Eagles, Hawks and Kites</a>
			</li>
			<li>
				<a href="/birds/types/egrets">Egrets and Herons ({count.egrets})</a>
			</li>
			<li>
				<a href="/birds/types/finches">Finches</a>
			</li>
			<li>
				<a href="/birds/types/grebes">Grebes</a>
			</li>
			<li>
				<a href="/birds/types/ibises">Ibises</a>
			</li>
			<li>
				<a href="/birds/types/kingfishers">King<span class="fi">fi</span>shers</a>
			</li>
			<li>
				<a href="/birds/types/owls">Owls</a>
			</li>
			<li>
				<a href="/birds/types/pelicans">Pelicans</a>
			</li>
			<li>
				<a href="/birds/types/plovers">Plovers</a>
			</li>
			<li>
				<a href="/birds/types/sandpipers">Sandpipers, etc.</a>
			</li>
			<li>
				<a href="/birds/types/stilts">Stilts and Avocets ({count.stilts})</a>
			</li>
			<li>
				<a href="/birds/types/terns">Terns and Gulls</a>
			</li>
			<li>
				<a href="/birds/types/waxwings">Waxwings</a>
			</li>
			<li>
				<a href="/birds/types/woodpeckers">Woodpeckers</a>
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
