<script>
	export let data;
	console.log(data);
</script>

<div class="p-5 border-black-400 border-solid rounded">
	<form method="POST" class="flex flex-col md:flex-row">
		<div class="flex flex-col justify-center w-full md:w-1/2 p-4 border-solid border-grey pr-6">
			<div class="max-w-2xl justify-center pl-4">
				<div class="flex flex-col">
					<h1 class="text-2xl font-bold mb-4">Login here</h1>
					<!-- <button on:click={googleLogin}>Google Login</button> -->
					<label for="username" class="mb-2">Username</label>
					<input
						name="username"
						placeholder="Username"
						type="text"
						class="border rounded-md px-3 py-2 mb-2"
					/>
					<label for="password" class="mb-2">Password</label>
					<input
						name="password"
						placeholder="Password"
						type="password"
						class="border rounded-md px-3 py-2 mb-4"
					/>
					<button
						type="submit"
						class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<img
				alt="apartments"
				src="https://cdn.discordapp.com/attachments/811231774327177326/1082703095072563280/image.png"
				class="w-full"
			/>
		</div>
	</form>
</div>
