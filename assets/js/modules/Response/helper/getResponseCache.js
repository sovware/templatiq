export default function getResponseCache( responseId, key, responseState ) {
	if ( ! responseState.responseCache[ responseId ] ) {
		return;
	}
	return responseState.responseCache[ responseId ][ key ];
}
