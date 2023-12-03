const actions = {
    setLibraryData(data) {
		return {
			type: 'SET_LIBRARY',
			data,
		};
    },

    setTemplates(templates) {
		return {
			type: 'SET_TEMPLATES',
			templates,
		};
    },

    setBookmark(bookmark) {
		return {
			type: 'SET_BOOKMARK',
			bookmark,
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
		return {
			type: 'SET_FILTER_SEARCH',
			filterSearch,
		};
    },
};
  
export default actions;
  