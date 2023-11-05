import { MB_IN_BYTES, KB_IN_BYTES } from '../constants';

export const isObject = ( value ) =>
	value && typeof value === 'object' && ! Array.isArray( value );

export function getMaxUploadSize() {
	return 5 * MB_IN_BYTES;
}

export function getFormattedMaxSize( rawSize ) {
	const size =
		rawSize < MB_IN_BYTES
			? `${ ( rawSize / KB_IN_BYTES ).toFixed( 2 ) } KB`
			: `${ ( rawSize / MB_IN_BYTES ).toFixed( 2 ) } MB`;

	return size;
}

export function getFormattedSize( rawSize ) {
	const isFloat = ( value ) => Number( value ) === value && value % 1 !== 0;
	const formatNumber = ( value ) =>
		isFloat( value ) ? value.toFixed( 2 ) : value;

	const size =
		rawSize < MB_IN_BYTES
			? `${ formatNumber( rawSize / KB_IN_BYTES ) } KB`
			: `${ formatNumber( rawSize / MB_IN_BYTES ) } MB`;

	return size;
}

export function getPassedTime( date ) {
	const givenDate = new Date( date );

	const currentDate = new Date();

	// Calculate the time difference in milliseconds
	const timeDifference = currentDate - givenDate;

	// Define units in seconds and their corresponding names
	const units = [
		{ value: 86400, name: 'day' },
		{ value: 3600, name: 'hour' },
		{ value: 60, name: 'minute' },
		{ value: 1, name: 'second' },
	];

	// Find the appropriate unit for formatting
	let output = '';
	for ( const unit of units ) {
		if ( timeDifference >= unit.value * 1000 ) {
			const unitCount = Math.floor(
				timeDifference / ( unit.value * 1000 )
			);
			output = `${ unitCount } ${ unit.name }${
				unitCount !== 1 ? 's' : ''
			}`;
			break;
		}
	}

	return output;
}

export function formatDate( date ) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const dateParts = date.split( ' ' );
	const [ datePart, timePart ] = dateParts;
	const [ year, month, day ] = datePart.split( '-' );
	const [ hour, minute ] = timePart.split( ':' );

	const formattedDate = `${ parseInt( day ) } ${
		months[ parseInt( month ) - 1 ]
	} ${ year.slice( -2 ) } @ ${ hour }:${ minute }`;
	return formattedDate;
}

export function generateFileNameFromBlob( blob ) {
	if ( ! blob instanceof Blob ) {
		return '';
	}

	const matchExt = blob.type.match( /^\w+\/([^;]+)/ );
	const ext = matchExt ? matchExt[ 1 ] : '';

	if ( ! ext ) {
		return '';
	}

	return Date.now() + '.' + ext;
}
const extensionsInStandardObject = {};
export function isSelectedExtensionValid( fileExtension, uploadedMimeType ) {
	return extensionsInStandardObject[ fileExtension ] === uploadedMimeType;
}

export function getAcceptedExtensions() {
	const supportedExtensions =
		template-market_localization.supported_file_extensions || [];

	Object.entries( supportedExtensions ).forEach(
		( [ extString, mimeType ] ) => {
			const exts = extString.split( '|' );
			exts.forEach( ( ext ) => {
				extensionsInStandardObject[ ext ] = mimeType;
			} );
		}
	);
	return Object.keys( extensionsInStandardObject )
		.map( ( ext ) => `.${ ext }` )
		.join( ',' );
}

export function findObjectItem( path, data, defaultValue ) {
	if ( typeof path !== 'string' ) {
		return defaultValue;
	}

	if ( ! path ) {
		return defaultValue;
	}

	if ( ! isObject( data ) ) {
		return defaultValue;
	}

	const pathList = path.split( '.' );
	let targetItem = data;

	for ( const key of pathList ) {
		if ( ! isObject( targetItem ) ) {
			return defaultValue;
		}

		if ( ! targetItem.hasOwnProperty( key ) ) {
			return defaultValue;
		}

		targetItem = targetItem[ key ];
	}

	return targetItem;
}

export function safeUpdateObjectItem( path, data, value ) {
	if ( typeof path !== 'string' ) {
		return data;
	}

	if ( ! path ) {
		return data;
	}

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	if ( ! isObject( data ) ) {
		return data;
	}

	const pathList = path.split( '.' );
	const lastKey = pathList.splice( pathList.length - 1, 1 )[ 0 ];

	let currentDataItem = data;

	for ( const key of pathList ) {
		if ( ! isObject( currentDataItem ) ) {
			return data;
		}

		if ( ! currentDataItem.hasOwnProperty( key ) ) {
			currentDataItem[ key ] = {};
		}

		currentDataItem = currentDataItem[ key ];
	}

	if ( ! isObject( currentDataItem ) ) {
		return data;
	}

	currentDataItem[ lastKey ] = value;
	return data;
}

export function updateGlobalState( key, value, merge ) {
	if ( ! window.templateMarketGlobalState ) {
		window.templateMarketGlobalState = {};
	}

	if (
		typeof merge === 'boolean' &&
		merge &&
		isObject( value ) &&
		isObject( window.templateMarketGlobalState[ key ] )
	) {
		const newValue = {
			...window.templateMarketGlobalState[ key ],
			...value,
		};

		window.templateMarketGlobalState[ key ] = newValue;
		return window.templateMarketGlobalState[ key ];
	}

	window.templateMarketGlobalState[ key ] = value;
	return window.templateMarketGlobalState[ key ];
}

export function getGlobalState( key, defaultValue ) {
	if ( ! window.templateMarketGlobalState ) {
		window.templateMarketGlobalState = {};
	}

	if ( typeof key === 'undefined' ) {
		return window.templateMarketGlobalState;
	}

	if ( ! window.templateMarketGlobalState.hasOwnProperty( key ) ) {
		return defaultValue;
	}

	return window.templateMarketGlobalState[ key ];
}
