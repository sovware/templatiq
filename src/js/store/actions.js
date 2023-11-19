

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

export default actions;