import { createContext, useContext, useState } from '@wordpress/element';
const TagStateContext = createContext();

export const useTagState = () => useContext( TagStateContext );

export const TagStateProvider = ( { children } ) => {
	const tagStateObject = {
		tagSearchText: '',
		currentPage: 1,
	};
	const [ tagState, setTagState ] = useState( tagStateObject );

	return (
		<TagStateContext.Provider value={ { tagState, setTagState } }>
			{ children }
		</TagStateContext.Provider>
	);
};
