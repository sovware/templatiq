const actions = {
    setFav(item, favCount) {
		return {
			type: 'SET_FAV',
			item,
			favCount,
		};
    },
  
    setUserInfo(userInfo) {
		console.log('Set User Info: ', userInfo)
        return {
			type: 'SET_USER_INFO',
			userInfo,
        };
    },
  
    logOut() {
		console.log('LogOut Called ')
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
  
    fetchFromAPI(path) {
		return {
			type: 'FETCH_FROM_API',
			path,
		};
    },
};
  
export default actions;
  