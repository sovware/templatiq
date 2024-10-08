import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';

export const whiteLabelEnabled = () => {
	return templatiqSitesVars.isWhiteLabeled ? true : false;
};

export const getWhileLabelName = () => {
	return templatiqSitesVars.whiteLabelName;
};

export const getWhiteLabelAuthorUrl = () => {
	return templatiqSitesVars.whiteLabelUrl;
};

export const isPro = () => {
	return templatiqSitesVars.isPro;
};

export const getProUrl = () => {
	return templatiqSitesVars.getProURL;
};

export const sendPostMessage = ( data ) => {
	const frame = document.getElementById( 'templatiq-library-preview' );

	if ( ! frame ) {
		return;
	}
	
	frame.contentWindow.postMessage(
		{
			call: 'starterTemplatePreviewDispatch',
			value: data,
		},
		'*'
	);
};

export const getDataUri = ( url, callback ) => {
	const image = new Image();

	image.onload = function () {
		const canvas = document.createElement( 'canvas' );
		canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
		canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

		canvas.getContext( '2d' ).drawImage( this, 0, 0 );

		// ... or get as Data URI
		callback( canvas.toDataURL( 'image/png' ) );
	};

	image.src = url;
};

export const storeCurrentState = ( currentState ) => {
	try {
		localStorage.setItem(
			'templatiq-library-onboarding',
			JSON.stringify( currentState )
		);
	} catch ( err ) {
		return false;
	}
};

export const getStoredState = () => {
	return JSON.parse( localStorage.getItem( 'templatiq-library-onboarding' ) );
};

export const getDefaultColorPalette = ( demo ) => {
	let defaultPaletteValues = [];

	if ( demo && 'templatiq-site-customizer-data' in demo ) {
		const customizerData = demo[ 'templatiq-site-customizer-data' ] || '';
		if ( customizerData ) {
			const globalPalette =
				customizerData[ 'templatiq-settings' ][ 'global-color-palette' ]
					.palette || [];

			if ( globalPalette ) {
				defaultPaletteValues = [
					{
						slug: 'default',
						title: __( 'DEFAULT COLORS', 'templatiq-sites' ),
						colors: globalPalette,
					},
				];
			}
		}
	}
	return defaultPaletteValues;
};

export const getDefaultTypography = ( demo ) => {
	let defaultTypography = {};

	if ( demo && 'templatiq-site-customizer-data' in demo ) {
		const customizerData = demo[ 'templatiq-site-customizer-data' ] || '';
		if ( customizerData ) {
			const customizerSettings = customizerData[ 'templatiq-settings' ] || [];
			const headingFontFamily =
				customizerSettings[ 'headings-font-family' ];

			defaultTypography = {
				default: true,
				'body-font-family': customizerSettings[ 'body-font-family' ],
				'body-font-variant': customizerSettings[ 'body-font-variant' ],
				'body-font-weight': customizerSettings[ 'body-font-weight' ],
				'font-size-body': customizerSettings[ 'font-size-body' ],
				'body-line-height': customizerSettings[ 'body-line-height' ],
				'headings-font-family': headingFontFamily,
				'headings-font-weight':
					customizerSettings[ 'headings-font-weight' ],
				'headings-line-height':
					customizerSettings[ 'headings-line-height' ],
				'headings-font-variant':
					customizerSettings[ 'headings-font-variant' ],
			};
		}
	}
	return defaultTypography;
};

export const getHeadingFonts = ( demo ) => {
	const headingFonts = {};

	const headingsTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];

	if ( demo && 'templatiq-site-customizer-data' in demo ) {
		const customizerData = demo[ 'templatiq-site-customizer-data' ] || '';
		if ( customizerData ) {
			const customizerSettings = customizerData[ 'templatiq-settings' ] || [];

			headingsTags.forEach( ( tag ) => {
				headingFonts[ 'font-family-' + tag ] =
					customizerSettings[ `font-family-${ tag }` ];
				headingFonts[ 'font-weight-' + tag ] =
					customizerSettings[ `font-weight-${ tag }` ];
				headingFonts[ 'text-transform-' + tag ] =
					customizerSettings[ `text-transform-${ tag }` ];
				headingFonts[ 'line-height-' + tag ] =
					customizerSettings[ `line-height-${ tag }` ];
			} );
		}
	}
	return headingFonts;
};

export const getColorScheme = ( demo ) => {
	let colorScheme = 'light';

	if (
		demo &&
		'templatiq-site-color-scheme' in demo &&
		'' !== demo[ 'templatiq-site-color-scheme' ]
	) {
		colorScheme = demo[ 'templatiq-site-color-scheme' ];
	}
	return colorScheme;
};

export const getAllSites = () => {
	return templatiqSitesVars.all_sites;
};

export const getSupportLink = ( templateId, subject ) => {
	return `${ starterTemplates.supportLink }&template-id=${ templateId }&subject=${ subject }`;
};

export const getGridItem = ( site ) => {
	let imageUrl = site[ 'thumbnail-image-url' ] || '';
	if ( '' === imageUrl && false === whiteLabelEnabled() ) {
		if ( templatiqSitesVars.default_page_builder === 'fse' ) {
			imageUrl = `${ starterTemplates.imageDir }spectra-placeholder.png`;
		} else {
			imageUrl = `${ starterTemplates.imageDir }placeholder.png`;
		}
	}

	return {
		id: site.id,
		image: imageUrl,
		title: decodeEntities( site.title ),
		badge:
			'free' !== site[ 'templatiq-sites-type' ]
				? __( 'Premium', 'templatiq-sites' )
				: '',
		...site,
	};
};

export const getTotalTime = ( value ) => {
	const hours = Math.floor( value / 60 / 60 );
	const minutes = Math.floor( value / 60 ) - hours * 60;
	const seconds = value % 60;

	if ( minutes ) {
		return minutes + '.' + seconds;
	}

	return '0.' + seconds;
};
