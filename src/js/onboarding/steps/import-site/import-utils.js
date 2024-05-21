import { __ } from '@wordpress/i18n';
const { themeStatus, nonce } = starterTemplates;

export const getDemo = async ( id, dispatch ) => {
	const generateData = new FormData();
	generateData.append( 'action', 'templatiq-sites-api-request' );
	generateData.append( 'template_id', id );
	generateData.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

	await fetch( ajaxurl, {
		method: 'post',
		body: generateData,
	} )
		.then( ( response ) => response.json() )
		.then( ( response ) => {
			
			console.log('getDemo response : ',  response );

			if ( response.success ) {
				starterTemplates.previewUrl = response.data[ 'templatiq-site-url' ];

				dispatch( {
					type: 'set',
					templateId: id,
					templateResponse: response.data,
					importErrorMessages: {},
					importErrorResponse: [],
					importError: false,
				} );

			} else {
				let errorMessages = {};

				if ( undefined !== response.data.response_code ) {
					const code = response.data.code.toString();
					switch ( code ) {
						case '401':
						case '404':
							errorMessages = {
								primaryText:
									templatiqSitesVars.server_import_primary_error,
								secondaryText: '',
								errorCode: code,
								errorText: response.data.message,
								solutionText: '',
								tryAgain: true,
							};
							break;
						case '500':
							errorMessages = {
								primaryText:
									templatiqSitesVars.server_import_primary_error,
								secondaryText: '',
								errorCode: code,
								errorText: response.data.message,
								solutionText:
									templatiqSitesVars.ajax_request_failed_secondary,
								tryAgain: true,
							};
							break;

						case 'WP_Error':
							errorMessages = {
								primaryText:
									templatiqSitesVars.client_import_primary_error,
								secondaryText: '',
								errorCode: code,
								errorText: response.data.message,
								solutionText: '',
								tryAgain: true,
							};
							break;

						case 'Cloudflare':
							errorMessages = {
								primaryText:
									templatiqSitesVars.cloudflare_import_primary_error,
								secondaryText: '',
								errorCode: code,
								errorText: response.data.message,
								solutionText: '',
								tryAgain: true,
							};
							break;

						default:
							errorMessages = {
								primaryText: __(
									'Fetching related demo failed.',
									'templatiq-sites'
								),
								secondaryText: '',
								errorCode: '',
								errorText: response.data,
								solutionText:
									templatiqSitesVars.ajax_request_failed_secondary,
								tryAgain: false,
							};
							break;
					}
					dispatch( {
						type: 'set',
						importError: true,
						importErrorMessages: errorMessages,
						importErrorResponse: response.data,
						templateResponse: null,
						currentIndex: currentIndex + 3,
					} );
				}
			}
		} )
		.catch( ( error ) => {
			dispatch( {
				type: 'set',
				importError: true,
				importErrorMessages: {
					primaryText: __(
						'Fetching related demo failed.',
						'templatiq-sites'
					),
					secondaryText: templatiqSitesVars.ajax_request_failed_secondary,
					errorCode: '',
					errorText: error,
					solutionText: '',
					tryAgain: false,
				},
			} );
		} );
};

// Test
export const checkRequiredPlugins = async ( dispatch ) => {
	// const [ {}, dispatch ] = storedState;

	const reqPlugins = new FormData();
	reqPlugins.append( 'action', 'templatiq-required-plugins' );
	reqPlugins.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

	await fetch( ajaxurl, {
		method: 'post',
		body: reqPlugins,
	} )
		.then( ( response ) => response.json() )
		.then( ( response ) => {
			if ( response.success ) {
				const rPlugins = response.data?.required_plugins;
				const notInstalledPlugin = rPlugins.notinstalled || '';
				const notActivePlugins = rPlugins.inactive || '';
				dispatch( {
					type: 'set',
					requiredPlugins: response.data,
					notInstalledList: notInstalledPlugin,
					notActivatedList: notActivePlugins,
				} );
			}
		} );
};

export const installOneDirectory = ( storedState ) => {
	const [ { importPercent }, dispatch ] = storedState;
	const themeSlug = 'onedirectory';
	let percentage = importPercent;

	if ( 'not-installed' === themeStatus ) {
		// if (
		// 	wp.updates.shouldRequestFilesystemCredentials && ! wp.updates.ajaxLocked
		// ) {
		// 	wp.updates.requestFilesystemCredentials();
		// }

		percentage += 5;
		dispatch( {
			type: 'set',
			importPercent: percentage,
			importStatus: __( 'Installing OneDirectory Theme…', 'templatiq-sites' ),
		} );

		wp.updates.installTheme( {
			slug: themeSlug,
			ajax_nonce: templatiqSitesVars._ajax_nonce,
		} );

		// eslint-disable-next-line no-undef
		jQuery( document ).on(
			'wp-theme-install-success',
			function ( event, response ) {
				dispatch( {
					type: 'set',
					themeStatus: response,
					importStatus: __( 'OneDirectory Theme Installed.', 'templatiq-sites' ),
				} );
			}
		);
	}

	if ( 'installed-but-inactive' === themeStatus ) {
		// WordPress adds "Activate" button after waiting for 1000ms. So we will run our activation after that.
		setTimeout( function () {
			const data = new FormData();
			data.append( 'action', 'templatiq-sites-activate-theme' );
			data.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );

			fetch( ajaxurl, {
				method: 'post',
				body: data,
			} )
				.then( ( response ) => response.json() )
				.then( ( response ) => {
					if ( response.success ) {
						dispatch( {
							type: 'set',
							themeStatus: response,
							importStatus: __(
								'Templatiq Theme Installed.',
								'templatiq-sites'
							),
						} );
					} else {
						dispatch( {
							type: 'set',
							importError: true,
							importErrorMessages: {
								primaryText: __(
									'Templatiq theme installation failed.',
									'templatiq-sites'
								),
								secondaryText: '',
								errorCode: '',
								errorText: response.data,
								solutionText: '',
								tryAgain: true,
							},
						} );
					}
				} )
				.catch( ( error ) => {
					/* eslint-disable-next-line no-console -- We are displaying errors in the console. */
					console.error( error );
				} );
		}, 3000 );
	}

	if ( 'installed-and-active' === themeStatus ) {
		dispatch( {
			type: 'set',
			themeStatus: true,
		} );
	}
};

export const setSiteLogo = async ( logo ) => {
	if ( '' === logo.id ) {
		return;
	}
	const data = new FormData();
	data.append( 'action', 'templatiq_sites_set_site_data' );
	data.append( 'param', 'site-logo' );
	data.append( 'logo', logo.id );
	data.append( 'logo-width', logo.width );
	data.append( 'security', nonce );

	await fetch( ajaxurl, {
		method: 'post',
		body: data,
	} );

	console.log( 'Logo set', logo.id );
};

export const setColorPalettes = async ( palette ) => {
	if ( ! palette ) {
		return;
	}

	const data = new FormData();
	data.append( 'action', 'templatiq_sites_set_site_data' );
	data.append( 'param', 'site-colors' );
	data.append( 'palette', palette );
	data.append( 'security', nonce );

	await fetch( ajaxurl, {
		method: 'post',
		body: data,
	} );

	console.log( 'setColorPalettes', palette );
};

export const saveTypography = async ( selectedValue ) => {
	const data = new FormData();
	data.append( 'action', 'templatiq_sites_set_site_data' );
	data.append( 'param', 'site-typography' );
	data.append( 'typography', JSON.stringify( selectedValue ) );
	data.append( 'security', nonce );

	await fetch( ajaxurl, {
		method: 'post',
		body: data,
	} );

	console.log( 'saveTypography' );
};

export const importPersonaWise = async ( selectedValues ) => {
	console.log('Test importPersonaWise', selectedValues);
	const data = new FormData();
	data.append( 'action', 'templatiq_sites_import_content' );
	data.append( 'import_data', JSON.stringify( selectedValues ) );
	data.append( 'security', nonce );

	await fetch( ajaxurl, {
		method: 'post',
		body: data,
	} );

	console.log( 'importPersonaWise' );
};

export const divideIntoChunks = ( chunkSize, inputArray ) => {
	const values = Object.keys( inputArray );
	const final = [];
	let counter = 0;
	let portion = {};

	for ( const key in inputArray ) {
		if ( counter !== 0 && counter % chunkSize === 0 ) {
			final.push( portion );
			portion = {};
		}
		portion[ key ] = inputArray[ values[ counter ] ];
		counter++;
	}
	final.push( portion );

	console.log( 'divideIntoChunks' );

	return final;
};

export const checkFileSystemPermissions = async ( dispatch ) => {
	try {
		const formData = new FormData();
		formData.append( 'action', 'templatiq-sites-filesystem-permission' );
		formData.append( '_ajax_nonce', templatiqSitesVars._ajax_nonce );
		const response = await fetch( templatiqSitesVars.ajaxurl, {
			method: 'POST',
			body: formData,
		} );
		const data = await response.json();

		dispatch( {
			type: 'set',
			fileSystemPermissions: data.data,
		} );
	} catch ( error ) {
		/* eslint-disable-next-line no-console -- We are displaying errors in the console. */
		console.error( error );
	}
};