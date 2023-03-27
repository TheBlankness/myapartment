/** @type {import('./$types').Actions} */
import axios from 'axios';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
axios.defaults.baseURL = PUBLIC_API_URL;

function generateUUID() {
	const array = new Uint8Array(16);
	crypto.getRandomValues(array);
	array[6] = (array[6] & 0x0f) | 0x40;
	array[8] = (array[8] & 0x3f) | 0x80;
	return [...array].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		let user_cookie = cookies.get('user');
		let user;
		console.log(user_cookie);
		if (user_cookie !== undefined) {
			user = JSON.parse(user_cookie);
		} else return;
		console.log(user.id);

		try {
			const res = await axios.post(
				`/api/login-codes`,
				{
					data: {
						code: generateUUID(),
						owner: user.id.toString()
					}
				},
				{
					headers: {
						Authorization: `Bearer ${cookies.get('jwt')}`
					}
				}
			);

			if (res.data) {
				console.log(res.data);
			}
			return { body: res.data };
		} catch (e) {
			console.error(e);
		}
	}
};
