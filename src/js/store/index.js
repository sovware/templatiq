import apiFetch from '@wordpress/api-fetch';
import {createReduxStore, register} from '@wordpress/data';

// console.log( 'apiFetch', apiFetch );
// console.log( 'register', register );
// console.log( 'createReduxStore', createReduxStore );

const DEFAULT_STATE = {
	favCounts: {},
};

const actions = {
	setFav( item, favCount ) {
		console.log('setFav: ', {item, favCount})
		return {
			type: 'SET_FAV',
			item,
			favCount,
		};
	},

    fetchFromAPI( path ) {
        return {
            type: 'FETCH_FROM_API',
            path,
        };
    },

};


const store = createReduxStore( 'my-shop', {
	reducer( state = DEFAULT_STATE, action ) {
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
			const path = '/wp/v2/favCounts/' + item;
			// const favCount = yield actions.fetchFromAPI( path );
			const favCount = actions.item;
			return actions.setFav( item, favCount );
		},
	},
} );

register( store ); 

export default store;