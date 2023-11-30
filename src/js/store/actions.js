const actions = {
    setFav(item, favCount) {
		return {
			type: 'SET_FAV',
			item,
			favCount,
		};
    },
  
    setUserInfo(userInfo) {
        return {
			type: 'SET_USER_INFO',
			userInfo,
        };
    },
  
    logOut() {
        return {
			type: 'LOG_OUT',
        };
    },
  
    toggleTemplateStatus(item, activeStatus) {
		return {
			type: 'TOGGLE_TEMPLATE_STATUS',
			item,
			activeStatus,
		};
    },
  
    setSearchQuery(searchQuery) {
		return {
			type: 'SET_SEARCH_QUERY',
			searchQuery,
		};
    },
  
    setFilterSearch(filterSearch) {
		console.log('filterSearch Action: ', filterSearch)
		return {
			type: 'SET_FILTER_SEARCH',
			filterSearch,
		};
    },
};
  
export default actions;
  