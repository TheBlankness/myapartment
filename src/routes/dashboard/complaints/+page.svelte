<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	$: complaints = [];

	export async function fetchComplaints() {
		try {
			// var body = new FormData();
			// body.append('identifier', 'test@email.com');
			// body.append('password', 'test123');
			const fetchResponse = await fetch('https://api-apartment.lawcloud.page/api/complaints', {
				method: 'GET'
			});
			const data = await fetchResponse.json();
			complaints = data.data;
			console.log(data);
		} catch (e) {
			console.error(e);
		}
	}

	onMount(() => {
		fetchComplaints();
	});

	export async function deleteComplaint(id) {
		console.log(id);
		axios.delete(`https://api-apartment.lawcloud.page/api/complaints/${id}`).then(() => {
			fetchComplaints();
		});
		// try {
		// 	// var body = new FormData();
		// 	// body.append('identifier', 'test@email.com');
		// 	// body.append('password', 'test123');
		// 	const fetchResponse = await fetch(`http://192.168.68.111:1338/api/complaints/${id}`, {
		// 		method: 'DELETE'
		// 	});
		// 	const data = await fetchResponse.json();
		// 	console.log(data);
		// } catch (e) {
		// 	console.error(e);
		// }
	}

	function formatDate(dateString) {
		let date = new Date(dateString);
		return date.toLocaleString();
	}
</script>

<h1>complaints</h1>

<table class="table-auto">
	<tr>
		<th>ID</th>
		<th>Title</th>
		<th>Description</th>
		<th>Created At</th>
		<!-- <th>Updated At</th>
		<th>Published At</th> -->
		<th>Solved?</th>
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
			<td><button on:click={deleteComplaint(item.id)}>Delete</button></td>
		</tr>
	{/each}
</table>
