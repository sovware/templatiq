export const isObject = ( value ) =>
	value && typeof value === 'object' && ! Array.isArray( value );

export function getPercentage( done, total ) {
	if ( total < done ) {
		return 0;
	}

	const r = done / total;

	if ( isNaN( r ) ) {
		return 0;
	}

	return r * 100;
}

export function prettySize( bytes ) {
	const sizeInKB = bytes / 1024;

	const isFloat = ( n ) => {
		return Number( n ) === n && n % 1 !== 0;
	};

	if ( sizeInKB < 1024 ) {
		const size = isFloat( sizeInKB ) ? sizeInKB.toFixed( 2 ) : sizeInKB;
		return `${ size } KB`;
	}

	const sizeInMB = sizeInKB / 1024;

	if ( sizeInMB < 1024 ) {
		const size = isFloat( sizeInMB ) ? sizeInMB.toFixed( 2 ) : sizeInKB;
		return `${ size } MB`;
	}

	const sizeInGB = sizeInMB / 1024;

	const size = isFloat( sizeInGB ) ? sizeInGB.toFixed( 2 ) : sizeInGB;
	return `${ size } GB`;
}

export function findObjectItem( path, data, defaultValue ) {
	if ( ! isObject( data ) ) {
		return defaultValue;
	}

	const pathList = path.split( '.' );

	let targetItem = data;

	for ( const pathKey of pathList ) {
		if ( ! targetItem.hasOwnProperty( pathKey ) ) {
			return defaultValue;
		}

		targetItem = targetItem[ pathKey ];
	}

	return targetItem;
}

export function isActiveMigration( migrationStatus ) {
	const status = findObjectItem( 'status', migrationStatus, 'idle' );
	return [ 'pending', 'running' ].includes( status );
}

export async function fetchData( option ) {
	const errorMessage = 'Oparation Failed, please try again.';
	const defaultOption = { url: '', method: 'GET' };
	option = option ? { ...defaultOption, ...option } : defaultOption;

	const url = option.url;
	delete option.url;

	try {
		const response = await fetch( url, option );
		const data = await response.json();

		if ( ! response.ok ) {
			return { success: false, message: errorMessage, data };
		}

		return { success: true, message: '', data };
	} catch ( error ) {
		return { success: false, message: errorMessage };
	}
}
