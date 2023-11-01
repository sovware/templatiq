/**
 *
 * @param {*} responseId
 * @param {*} key
 * @param {*} value
 * @param {*} responseState
 * @param {*} setResponseState
 */

export default function updateResponseCache(
	responseId,
	key,
	value,
	responseState,
	setResponseState
) {
	setResponseState( {
		...responseState,
		responseCache: {
			...responseState.responseCache,
			[ responseId ]: {
				...responseState.responseCache[ responseId ],
				[ key ]: value,
			},
		},
	} );
}
