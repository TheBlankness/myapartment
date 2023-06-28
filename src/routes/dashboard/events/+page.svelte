<script>
	import { page } from '$app/stores';

	export let data;
	// console.log(data.complaints);
	$: complaints = data.complaints;

	function formatDate(dateString = '') {
		let date = new Date(dateString);
		return date.toLocaleString();
	}
</script>

<h1 class="text-red-300 text-lg">Events</h1>
<a
	class="bg-green-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
	href={`${$page.route.id}/add`}
>
	Add
</a>

<table class="table-auto shadow-inner mt-5">
	<tr>
		<th class="border px-4 py-2">ID</th>
		<th class="border px-4 py-2">Title</th>
		<th class="border px-4 py-2">Description</th>
		<th class="border px-4 py-2">Created At</th>
		<th class="border px-4 py-2">Approval_status</th>
		<th class="border px-4 py-2">View</th>
		<th class="border px-4 py-2">Delete</th>
	</tr>

	{#each complaints as item}
		<tr>
			<td class="border px-4 py-2">{item.id}</td>
			<td class="border px-4 py-2">{item.attributes.Title}</td>
			<td class="border px-4 py-2">{item.attributes.Description}</td>
			<td class="border px-4 py-2">{formatDate(item.attributes.createdAt)}</td>
			<td class="border px-4 py-2">{item.attributes.Approval_status}</td>
			<td class="border px-4 py-2">
				<a
					class="bg-amber-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					href={`${$page.route.id}/${item.id}`}
				>
					View
				</a>
			</td>
			<td class="border px-4 py-2">
				<form method="POST">
					<input type="hidden" name="id" value={item.id} />
					<button
						class="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						formaction="?/delete"
					>
						Delete
					</button>
				</form>
			</td>
		</tr>
	{/each}
</table>
