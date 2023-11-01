const utils = {
	isJOSN: ( data ) => {
		return data && typeof data === 'object' && ! Array.isArray( data );
	},
	isObject: ( data ) => {
		return data && typeof data === 'object';
	},
	maybeObject: ( data ) => {
		try {
			const jsonData = JSON.parse( data );
			if ( jsonData && typeof jsonData === 'object' ) {
				return jsonData;
			}
			return data;
		} catch ( _ ) {
			return data;
		}
	},
	jsonToQueryString: ( json ) => {
		return (
			'?' +
			Object.keys( json )
				.map( function ( key ) {
					return (
						encodeURIComponent( key ) +
						'=' +
						encodeURIComponent( json[ key ] )
					);
				} )
				.join( '&' )
		);
	},
	sanitizeURL: ( path ) => path.replace( /^\/*/, '' ).replace( /\/*$/, '' ),
};

export default function dataFetch( path, config ) {
	const defaultConfig = {
		method: 'get',
		baseURL: '',
		headers: null,
		params: null,
		data: null,
		onUploadProgress: null,
		signal: null,
	};

	config = utils.isJOSN( config ) ? { ...defaultConfig, ...config } : {};
	path = config.baseURL
		? `${ utils.sanitizeURL( config.baseURL ) }/${ path }`
		: path;

	if ( utils.isJOSN( config.params ) ) {
		path = path + utils.jsonToQueryString( config.params );
	}

	let ajaxRequest = new XMLHttpRequest();

	// `onUploadProgress` allows handling of progress events for uploads
	if ( typeof config.onUploadProgress === 'function' ) {
		ajaxRequest.upload.addEventListener( 'progress', ( progressEvent ) => {
			progressEvent.progress =
				( progressEvent.loaded / progressEvent.total ) * 100;
			config.onUploadProgress( progressEvent );
		} );
	}

	ajaxRequest.open( config.method.toUpperCase(), path );

	// Set Headers
	if ( utils.isJOSN( config.headers ) ) {
		for ( const key in config.headers ) {
			ajaxRequest.setRequestHeader( key, config.headers[ key ] );
		}
	}

	if ( config.signal ) {
		config.signal.addEventListener( 'abort', () => ajaxRequest.abort() );
	}

	ajaxRequest.send( config.data );

	return new Promise( ( resolve, reject ) => {
		ajaxRequest.onload = () => {
			const data = utils.maybeObject( ajaxRequest.response );

			if ( ajaxRequest.status === 200 ) {
				resolve( data );
			} else {
				reject(
					utils.isObject( data )
						? data
						: {
								success: false,
								rejected: false,
								message: 'Oparation failed',
						  }
				);
			}
		};

		ajaxRequest.onerror = () => {
			const data = utils.maybeObject( ajaxRequest.response );
			reject(
				utils.isObject( data )
					? data
					: {
							success: false,
							cancelled: false,
							message: 'Oparation failed',
					  }
			);
		};

		ajaxRequest.onabort = () => {
			reject( {
				success: false,
				cancelled: true,
				message: 'Oparation canceled',
			} );
		};
	} );
}
