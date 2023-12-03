// import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, register } from '@wordpress/data';
import actions from './actions';
import selectors from './selectors';

const DEFAULT_STATE = {
	userInfo: {
		loggedIn: '',
		userName: '',
		userEmail: '',
		bookmarks: [],
		userDisplayName: '',
	},
	allTemplates: [],
	searchQuery: '',
	filterData: [],
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
		console.log('Initial State: ', state)
		switch (action.type) {
			case 'SET_TEMPLATES':
				const templateState = {
					...state,
					templates: action.templates,
				};
		
				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(templateState));

				console.log('Template State: ', templateState)
		
				return templateState;

			case 'SET_BOOKMARK':
				const favState = {
					...state,
					userInfo: {
						...state.userInfo,
						bookmarks: action.bookmark,
					}
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

			case 'SET_SEARCH_QUERY':
				const searchData = {
					...state,
					searchQuery: action.searchQuery,
				};

				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(searchData));
		
				return searchData;

			case 'SET_FILTER_SEARCH':
				const filterData = {
					...state,
					filterSearch: action.filterSearch,
				};

				// Save state to localStorage whenever it changes
				localStorage.setItem('templatiq-stores', JSON.stringify(filterData));
		
				return filterData;

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

	selectors,
});



register(store);

export default store;
