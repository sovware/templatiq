const actions = {
    setFav(item, favCount) {
      return {
        type: 'SET_FAV',
        item,
        favCount,
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
  