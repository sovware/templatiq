import { __ } from '@wordpress/i18n';

export default function getErrorMessage( code ) {
	let errorMessage = '';
	switch ( code ) {
		case 404:
			errorMessage = __( 'Resource not found', 'templatiq' );
			break;
		case 400:
			errorMessage = __( 'Invalid Request', 'templatiq' );
			break;
		case 422:
			errorMessage = __( 'Invalid data', 'templatiq' );
			break;
		case 500:
			errorMessage = __( 'Internal server error', 'templatiq' );
			break;
		default:
			errorMessage = __( 'Technical error', 'templatiq' );
			break;
	}
	return errorMessage;
}
