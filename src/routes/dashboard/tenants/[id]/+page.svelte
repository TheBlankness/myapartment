<script>
	import { page } from '$app/stores';
	export let data;

	let isEditing = false;

	function toggleEditing() {
		isEditing = !isEditing;
	}
</script>

<!-- {JSON.stringify($page, null, 2)} -->

<h1>View Complaint {$page.params.id}</h1>

<!-- if not in editing mode -->

{#if !isEditing}
	<h3>Title : {data.complaints.attributes.Title}</h3>

	<h4>Description : {data.complaints.attributes.Description}</h4>
{/if}

<!-- if in editing mode -->
{#if isEditing}
	<form method="POST" action="?/edit">
		<input name="id" value={$page.params.id} type="hidden" />
		<h3>Title</h3>
		<div class="mb-3 pt-0">
			<input
				class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
				name="Title"
				value={data.complaints.attributes.Title}
			/>
		</div>
		<h3>Description</h3>
		<div class="mb-3 pt-0">
			<input
				class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
				name="Description"
				value={data.complaints.attributes.Description}
			/>
		</div>

		<button
			class="bg-green-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
			type="submit">Save</button
		>
	</form>
{/if}

<button
	class="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
	on:click={toggleEditing}>{isEditing ? 'Cancel' : 'Edit'}</button
>
<a
	class="bg-green-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
	href={`${$page.route?.id?.replace(/\/\[id\]/, '') ?? '/dashboard'}`}>Go Back</a
>
