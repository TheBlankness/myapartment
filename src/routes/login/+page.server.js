/** @type {import('./$types').Actions} */

import axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';
import { redirect } from '@sveltejs/kit';
axios.defaults.baseURL = PUBLIC_API_URL;

export function load({ cookies }) {
	const user = JSON.parse(cookies.get('user') || '{}');
	const jwt = cookies.get('jwt');

	if (jwt) {
		throw redirect(302, '/dashboard');
	}

	// if (!jwt) {
	// 	cookies.set('userid', crypto.randomUUID(), { path: '/' });
	// }

	return {
		user,
		jwt
	};
}

export const actions = {
	default: async ({ request, cookies }) => {
		// TODO log the user in
		const data = await request.formData();
		try {
			const res = await axios.post('/api/auth/local', {
				identifier: data.get('username'),
				password: data.get('password')
			});
			if (res.data) {
				cookies.set('jwt', res.data.jwt);
				cookies.set('user', JSON.stringify(res.data.user));
				throw redirect(302, '/dashboard');
			}
		} catch (e) {
			console.log(e);
		}
	}
};
