export default function clearResponseCache(
	responseId,
	key,
	responseState,
	setResponseState
) {
	const newResponseCache = {
		...responseState.responseCache,
	};
	if ( ! newResponseCache[ responseId ][ key ] || null ) {
		return;
	}

	delete newResponseCache[ responseId ][ key ];

	setResponseState( {
		...responseState,
		responseCache: newResponseCache,
	} );
}
