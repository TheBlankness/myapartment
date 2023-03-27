<script>
	export let form;
	import { page } from '$app/stores';
	let copied = false;
	function copyUrl(url) {
		navigator.clipboard.writeText(url);
		copied = true;
	}
</script>

<form method="post">
	<button type="submit">Make Code</button>
</form>
{#if form}
	<!-- <p>Response data: {JSON.stringify(form.body.data.attributes.code)}</p>
	<h1>{form.body.data.attributes.code}</h1> -->
	<h2>Your new User Shared URL</h2>
	<p>{new URL($page.url).origin + `/register/${form.body.data.attributes.code}`}</p>
	<button
		on:click={() =>
			copyUrl(
				new URL($page.url).origin + `/register/${form ? form.body.data.attributes.code : 'error'}`
			)}>{copied ? 'Copied!' : 'Copy'}</button
	>
{/if}
