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

<h1 class="text-red-300 text-lg">Tenants</h1>
<a
	class="bg-green-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
	href={`${$page.route.id}/add`}>Add</a
>
<table class="table-auto shadow-inner">
	<tr>
		<th>ID</th>
		<th>Title</th>
		<th>Description</th>
		<th>Created At</th>
		<!-- <th>Updated At</th>
		<th>Published At</th> -->
		<th>Solved?</th>
		<th>View</th>
		<th>Delete</th>
	</tr>

	{#each complaints as item}
		<tr>
			<td>{item.id}</td>
			<td>{item.attributes.Title}</td>
			<td>{item.attributes.Description}</td>
			<td>{formatDate(item.attributes.createdAt)}</td>
			<!-- <td>{formatDate(item.attributes.updatedAt)}</td>
			<td>{formatDate(item.attributes.publishedAt)}</td> -->
			<td>{item.attributes.solved ? 'Yes' : 'No'}</td>
			<td
				><a
					class="bg-amber-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					href={`${$page.route.id}/${item.id}`}>View</a
				></td
			>
			<td
				><form method="POST">
					<input type="hidden" name="id" value={item.id} />
					<button
						class="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						formaction="?/delete"
					>
						<i class="fas fa-heart" />Delete</button
					>
				</form></td
			>
		</tr>
	{/each}
</table>
