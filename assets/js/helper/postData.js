import apiFetch from '@wordpress/api-fetch';

export default async function postData( path, data, config ) {
	config = config ? config : {};

	return await apiFetch( { path: path, method: 'POST', data, ...config } )
		.then( ( res ) => res )
		.catch( ( error ) => {
			throw error;
		} );
}
