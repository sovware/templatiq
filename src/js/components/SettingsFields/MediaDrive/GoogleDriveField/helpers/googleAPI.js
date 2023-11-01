import { fetchData } from '../../helpers/utility';

export async function maybeUpdateAccessToken( token, onRefreshToken ) {
	const isExpired = await isAccessTokenExpired( token.accessToken );

	if ( isExpired ) {
		return await refreshAccessToken( token.refreshToken, onRefreshToken );
	}

	return token.accessToken;
}

export async function isAccessTokenExpired( accessToken ) {
	const option = {
		url: `https://www.googleapis.com/oauth2/v1/tokeninfo/?access_token=${ accessToken }`,
		method: 'POST',
	};

	const response = await fetchData( option );
	return ! response.success;
}

export async function refreshAccessToken( refreshToken, onRefreshToken ) {
	const response = await getNewAccessToken( refreshToken );

	if ( ! response.success ) {
		return null;
	}

	onRefreshToken( response.data );

	return response.data.access_token;
}

export async function getNewAccessToken( refreshToken ) {
	const option = {
		url: `https://app.helpgent.com/wp-json/helpgent-admin/v1/google-drive/refresh-access-token?refresh_token=${ refreshToken }`,
		method: 'POST',
	};

	return await fetchData( option );
}

export async function revokeAccount( refreshToken ) {
	const option = {
		url: `https://accounts.google.com/o/oauth2/revoke?token=${ refreshToken }`,
		method: 'POST',
	};

	return await fetchData( option );
}

export async function getAccountInfo( accessToken, fields ) {
	fields = fields ? fields : 'storageQuota,user';
	const option = {
		url: `https://www.googleapis.com/drive/v3/about?fields=${ fields }`,
		headers: {
			Authorization: `Bearer ${ accessToken }`,
		},
	};

	return await fetchData( option );
}

export function getAuthorizationURL() {
	const redirect_uri = 'https://app.helpgent.com/google-drive-authorization';
	const client_id =
		'583599415060-i7gja28t1gkvk21pjvvft41b4b0hvnqe.apps.googleusercontent.com';
	const scope = 'https://www.googleapis.com/auth/drive.file';
	const response_type = 'code';
	const access_type = 'offline';

	return `https://accounts.google.com/o/oauth2/auth?scope=${ scope }&response_type=${ response_type }&access_type=${ access_type }&redirect_uri=${ redirect_uri }&client_id=${ client_id }`;
}
