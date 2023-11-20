// import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, register } from '@wordpress/data';
import actions from './actions';

const DEFAULT_STATE = {
	userInfo: {
		loggedIn: '',
		userName: '',
		userEmail: '',
		userDisplayName: '',
	},
	favCounts: {},
	templateStatus: {},
};

// Load state from localStorage on store initialization
const loadStateFromStorage = () => {
	try {
		const storedState = localStorage.getItem('templatiq-stores');
		return storedState ? JSON.parse(storedState) : DEFAULT_STATE;
	} catch (error) {
		console.error('Error parsing stored state:', error);
		return DEFAULT_STATE;
	}
};
  

const store = createReduxStore('templatiq-stores', {
	reducer(state = loadStateFromStorage(), action) {
		// console.log('Initial State: ', state)
		switch (action.type) {
			case 'SET_FAV':
				const favState = {
					...state,
					favCounts: {
						...state.favCounts,
						[action.item]: action.favCount,
					},
				};
		
				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(favState));
		
				return favState;

			case 'TOGGLE_TEMPLATE_STATUS':
				const favStatus = {
					...state,
					templateStatus: {
						...state.templateStatus,
						[action.item]: action.activeStatus,
					},
				};
		
				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(favStatus));
		
				return favStatus;

			case 'SET_USER_INFO':
				const userData = {
					...state,
					userInfo: action.userInfo,
				};

				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(userData));
		
				return userData;

			case 'LOG_OUT':
				const updatedState = {
					...state,
					userInfo: {
						isLoggedIn: false,
						userName: '',
						userEmail: '',
						userDisplayName: '',
					},
				};
			
				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(updatedState));
		
				return updatedState;
		}
	
		return state;
	},

	actions,

	selectors: {
		getFav(state, item) {
			const { favCounts } = state;
			const favCount = favCounts[item];

			return favCount;
		},

		getTemplateStatus(state, item) {
			const { templateStatus } = state;
			const activeStatus = templateStatus[item];

			return activeStatus;
		},

		getUserInfo(state) {
			const { userInfo } = state;

			return userInfo;
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

			return actions.setFav( item, favCount );
		},
	},
});



register(store);

export default store;
