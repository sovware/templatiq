import { fetchData } from '../../helpers/utility';

export async function validateCredential( { hostname, username, password } ) {
	return {
		success: true,
		message: '',
	};

	if ( ! hostname && ! username && ! password ) {
		return {
			success: false,
			message: 'Invalid Credential',
		};
	}

	const option = {
		method: 'GET',
		url: `//${ hostname }/${ username }/`,
		headers: {
			AccessKey: password,
		},
	};

	const response = await fetchData( option );

	if ( ! response.success ) {
		const message =
			response.data && response.data.Message
				? response.data.Message
				: response.message;
		response.message = message;
	}

	return response;
}
