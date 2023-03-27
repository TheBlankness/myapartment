import axios from 'axios';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
axios.defaults.baseURL = PUBLIC_API_URL;

export async function load({ params }) {
	console.log(params.code);
	let token;
	try {
		const res = await axios.get(`/api/login-codes?filters[code][$eq]=${params.code}`);
		if (res.data) {
			// console.log(res.data.data);
			token = res.data.data[0];
		}
	} catch (e) {
		console.log(e);
	}

	return {
		token
	};
}
export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		try {
			const res = await axios.post(`/api/auth/local/register`, {
				username: data.get('username'),
				email: data.get('email'),
				password: data.get('password')
			});

			if (res.data) {
				console.log(res.data);

				try {
					const res2 = await axios.delete(`/api/login-codes/${data.get('id')}`, {
						headers: {
							Authorization: `Bearer ${res.data.jwt}`
						}
					});

					if (res2.data) {
						console.log(res2.data);
					}
				} catch (e) {
					console.error(e);
				}

				return {
					data: res.data
				};
			}
		} catch (e) {
			console.error(e);
		}
	}
};
