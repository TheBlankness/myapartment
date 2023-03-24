import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	cookies.delete('user');
	cookies.delete('jwt');

	throw redirect(302, '/login');
}
