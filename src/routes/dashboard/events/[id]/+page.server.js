/** @type {import('./$types').Actions} */
import axios from 'axios';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';
axios.defaults.baseURL = PUBLIC_API_URL;

export async function load({ cookies, params }) {
	const user = JSON.parse(cookies.get('user') || '{}');
	const jwt = cookies.get('jwt');
	let id = params.id;
	let complaints;
	// if not logged in
	if (!jwt) {
		throw redirect(302, '/login');
	}

	// check if user role
	if (user.UserType === 'Landlord') {
		// console.log('data');
		// console.log(user);
		try {
			const res = await axios.get(`/api/events/${id}`, {
				headers: {
					Authorization: `Bearer ${cookies.get('jwt')}`
				}
			});
			if (res.data) {
				// console.log(res.data.data);
				complaints = res.data.data;
			}
		} catch (e) {
			console.log(e);
		}
	}

	return {
		complaints
	};
}

export const actions = {
	edit: async ({ request, cookies }) => {
		const data = await request.formData();
		console.log(`Bearer ${cookies.get('jwt')}`);
		try {
			const res = await axios.put(
				`/api/events/${data.get('id')}`,
				{
					data: {
						Title: data.get('Title'),
						Description: data.get('Description')
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
		} catch (e) {
			console.error(e);
		}
	}
};
