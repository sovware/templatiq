// import apiFetch from '@wordpress/api-fetch';
import {createReduxStore, register} from '@wordpress/data';

import actions from './actions';

const DEFAULT_STATE = {
	favCounts: {},
};

const store = createReduxStore( 'templatiq-store', {
	reducer( state = DEFAULT_STATE, action ) {
		console.log('reducer: ', {state, action})
		switch ( action.type ) {
			case 'SET_FAV':
				return {
					...state,
					favCounts: {
						...state.favCounts,
						[ action.item ]: action.favCount,
					},
				};
		}

		return state;
	},

	actions,

	selectors: {
		getFav( state, item ) {
			const { favCounts } = state;
			const favCount = favCounts[ item ];

			return favCount;
		},
	},

	controls: {
		FETCH_FROM_API( action ) {
			return apiFetch( { path: action.path } );
		},
	},

	resolvers: {
		*getFav( item ) {
			const path = item;
			const favCount = yield actions.fetchFromAPI( path );
			// const favCount = actions.item;
			console.log('getFav Item: ', {item}, favCount)
			return actions.setFav( item, favCount );
		},
	},
} );

register( store ); 

export default store;