const selectors = {
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

	getSearchQuery(state) {
		const { searchQuery } = state;

		return searchQuery;
	}
};
  
export default selectors;
  