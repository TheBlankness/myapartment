<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import axios from 'axios';

	export async function handleLogin() {
		try {
			var body = new FormData();
			body.append('identifier', 'test@email.com');
			body.append('password', 'test123');
			const fetchResponse = await fetch('https://myapartment.lawcloud.page/api/auth/local', {
				method: 'POST',
				body: body
			});
			const data = await fetchResponse.json();
			console.log(data);
		} catch (e) {
			console.error(e);
		}

		// axios
		// 	.post(
		// 		PUBLIC_API_URL + '/auth/local',
		// 		{
		// 			identifier: 'test@email.com',
		// 			password: 'test123'
		// 		},
		// 		{
		// 			headers: {
		// 				'access-control-allow-credentials': true,
		// 				'Access-Control-Allow-Origin': 'https://apartment.lawcloud.page',
		// 			}
		// 		}
		// 	)
		// 	.then((response) => {
		// 		console.log('User profile', response.data.user);
		// 		console.log('User token', response.data.jwt);
		// 		// goto('/dashboard');
		// 	})
		// 	.catch((error) => {
		// 		console.log('An error occurred:', error.response);
		// 	});
	}

	// export async function googleLogin() {
	// 	const response = await fetch('https://api-apartment.lawcloud.page/strapi-google-auth/init');
	// 	let data = await response.json();
	// 	console.log(data.url);
	// 	goto(data.url, { replaceState: true });
	// }

	// google login cant get it to work
	// onMount(async () => {
	// 	try {
	// 		const code = $page.url.searchParams.get('code');
	// 		console.log(code);
	// 		if (code === null) return;
	// 		const data = await axios.post(
	// 			PUBLIC_API_URL + '/strapi-google-auth/user-profile',
	// 			{ code },
	// 			{
	// 				headers: {
	// 					'Content-Type': 'application/x-www-form-urlencoded'
	// 				}
	// 			}
	// 		);
	// 		console.log(data.data.data.token);

	// 		// const complaints = await axios.get('https://api-apartment.lawcloud.page/api/complaints', {
	// 		// 	headers: {
	// 		// 		Authorization: `Bearer ${data.token}`,
	// 		// 	}
	// 		// });

	// 		// console.log(complaints);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// });
</script>

<div class="p-5">
	<div class="flex flex-row rounded-sm">
		<div class="flex flex-col w-1/2">
			<h1>Login here</h1>
			<!-- <button on:click={googleLogin}>Google Login</button> -->
			<label for="username">Username</label>
			<input name="username" placeholder="username" type="text" />
			<label for="password">Password</label>
			<input name="password" placeholder="password" type="password" />
			<button on:click={handleLogin}>Submit</button>
		</div>
		<div class="w-1/2">
			<img
				alt="apartments"
				src="https://cdn.discordapp.com/attachments/811231774327177326/1082703095072563280/image.png"
				class=""
			/>
		</div>
	</div>
</div>
