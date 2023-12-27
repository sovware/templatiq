import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { dispatch } from '@wordpress/data';

import store from '@store/index';

import { SearchformStyle } from './style';

import searchIcon from '@icon/search.svg';

export default function Searchform() {
	const [ searchQuery, setSearchQuery ] = useState( '' );

	const handleSearchChange = ( e ) => {
		const newSearchQuery = e.target.value;
		setSearchQuery( newSearchQuery );

		// Dispatch the action to update the login status in the store
		dispatch( store ).setSearchQuery( newSearchQuery );
	};

	useEffect( () => {
		// Dispatch the action to update the query Value in the store
		dispatch( store ).setSearchQuery( '' );
	}, [] );

	return (
		<SearchformStyle className="templatiq__content__top__searchbox">
			<button className="templatiq__content__top__searchbox__button">
				<ReactSVG src={ searchIcon } width={ 18 } height={ 18 } />
			</button>
			<input
				type="text"
				className="templatiq__content__top__searchbox__input"
				placeholder="Search "
				value={ searchQuery }
				onChange={ handleSearchChange }
			/>
		</SearchformStyle>
	);
}
