export default function getUser( rootObject ) {
	const user =
		rootObject?.is_guest === '1'
			? rootObject?.user_guest
			: rootObject?.user;
	if ( ! user ) {
		return null;
	}
	user[ 'isGuest' ] = rootObject?.is_guest;

	if ( user?.ID ) {
		user[ 'id' ] = user[ 'ID' ];
		delete user[ 'ID' ];
	}

	if (
		user?.first_name ||
		user?.first_name === '' ||
		user?.last_name ||
		user?.last_name === ''
	) {
		user[ 'display_name' ] = `${ user?.first_name } ${ user?.last_name }`;
		delete user[ 'first_name' ];
		delete user[ 'last_name' ];
	}

	if ( user?.user_email || user?.user_email === '' ) {
		user[ 'email' ] = user[ 'user_email' ];
		delete user[ 'user_email' ];
	}
	return user;
}
