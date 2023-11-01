import apiFetch from '@wordpress/api-fetch';

export default async function deleteData( path, data ) {
	return await apiFetch( { path: path, method: 'DELETE', data } ).then(
		( res ) => res
	);
}
