const pageModules = import.meta.glob('/src/routes/birds/*/+page.svelte', { eager: true });

export const count = $state(
	Object.fromEntries(
		Object.entries(pageModules).map(([path, mod]) => [
			path.match(/birds\/([^/]+)\/\+page\.svelte$/)[1],
			mod.imagesArray.length
		])
	)
);
