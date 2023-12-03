const selectors = {
	getTemplates(state) {
		const { templates } = state;

		return templates;
	},

	getUserInfo(state) {
		const { userInfo } = state;

		return userInfo;
	},

	getSearchQuery(state) {
		const { searchQuery } = state;

		return searchQuery;
	},

	getFilterSearch(state) {
		const { filterSearch } = state;

		return filterSearch;
	}
};
  
export default selectors;
  