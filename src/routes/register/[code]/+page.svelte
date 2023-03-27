<script>
	export let data;
	export let form;

	import { page } from '$app/stores';
</script>

{#if data && data.token && data.token.attributes && data.token.attributes.code === $page.params.code}
	<h1 class="text-center text-2xl md:text-4xl mb-4 md:mb-0 md:mr-4 mx-auto p-4 pb-10">
		Register Here
	</h1>

	<div class="flex flex-col md:flex-row items-center justify-center border p-4">
		<form method="POST" class="bg-white p-6 rounded-lg shadow-md">
			<input name="id" type="hidden" value={data.token.id} />
			<div class="mb-4">
				<label class="block text-gray-700 font-medium mb-2">
					Username
					<input name="username" type="text" class="border border-gray-300 p-2 w-full rounded-md" />
				</label>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 font-medium mb-2">
					Email
					<input name="email" type="email" class="border border-gray-300 p-2 w-full rounded-md" />
				</label>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 font-medium mb-2">
					Password
					<input
						name="password"
						type="password"
						class="border border-gray-300 p-2 w-full rounded-md"
						minlength="6"
					/>
				</label>
			</div>
			<button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register</button
			>
		</form>
		<img
			src="https://cdn.discordapp.com/attachments/811231774327177326/1082703095072563280/image.png"
			alt="Apartment"
			class="w-full md:w-auto md:h-48 object-cover object-center rounded-md"
		/>
	</div>
{:else}
	<h1 class="text-center text-2xl md:text-4xl mb-4 md:mb-0 md:mr-4 mx-auto p-4 pb-10">
		Invalid Token
	</h1>
{/if}
