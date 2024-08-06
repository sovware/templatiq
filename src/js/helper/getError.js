import { __ } from '@wordpress/i18n';

export default function getErrorMessage( code ) {
	let errorMessage = '';
	switch ( code ) {
		case 404:
			errorMessage = __( 'Resource not found', 'helpgent' );
			break;
		case 400:
			errorMessage = __( 'Invalid Request', 'helpgent' );
			break;
		case 422:
			errorMessage = __( 'Invalid data', 'helpgent' );
			break;
		case 500:
			errorMessage = __( 'Internal server error', 'helpgent' );
			break;
		default:
			errorMessage = __( 'Technical error', 'helpgent' );
			break;
	}
	return errorMessage;
}
