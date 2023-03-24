<script>
	export let data;
	console.log(data);
</script>

<div class="p-5">
	<form method="POST" class="flex flex-row rounded-sm">
		<div class="flex flex-col w-1/2">
			<h1>Login here</h1>
			<!-- <button on:click={googleLogin}>Google Login</button> -->
			<label for="username">Username</label>
			<input name="username" placeholder="username" type="text" />
			<label for="password">Password</label>
			<input name="password" placeholder="password" type="password" />
			<button type="submit">Submit</button>
		</div>
		<div class="w-1/2">
			<img
				alt="apartments"
				src="https://cdn.discordapp.com/attachments/811231774327177326/1082703095072563280/image.png"
				class=""
			/>
		</div>
	</form>
</div>
