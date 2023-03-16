<script>
	import { page } from '$app/stores';
	import { PUBLIC_WEB_PREFIX } from '$env/static/public';

	let tennantlist = [
		{ label: 'Overview', slug: '' },
		{ label: 'Make Complaint', slug: '/complaints' },
		{ label: 'Rent Event Space', slug: '/events' },
		{ label: 'Tennant Out-form', slug: '/out-forms' },
		{ label: 'Request Maintenance', slug: '/maintenances' },
		{ label: 'Pay Bills', slug: '/bills' }
	];
	console.log($page.url.pathname);
</script>

<div class="flex flex-col sm:flex-row">
	<div class="p-7 flex flex-col">
		<h2>MyApartment</h2>
		<h2>Management</h2>

		{#each tennantlist as tennant}
			<a
				class={`/dashboard${tennant.slug}` === $page.url.pathname
					? 'p-2 my-2 border bg-red-300 shadow-inner'
					: 'p-2 my-2 border bg-red-200 shadow-inner'}
				href="{PUBLIC_WEB_PREFIX}/dashboard{tennant.slug}"
			>
				{tennant.label}
			</a>
		{/each}
	</div>
	<div><slot /></div>
</div>
