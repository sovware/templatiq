import { dispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

import store from '@store/index';

import { SearchformStyle } from './style';

import closeIcon from '@icon/close.svg';
import searchIcon from '@icon/search.svg';

export default function Searchform() {
	const [ searchQuery, setSearchQuery ] = useState( '' );

	const handleSearchChange = ( e ) => {
		const newSearchQuery = e.target.value;
		setSearchQuery( newSearchQuery );

		// Dispatch the action to update the login status in the store
		dispatch( store ).setSearchQuery( newSearchQuery );
	};

	function handleClearSearch () {
		const newSearchQuery = '';
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
				placeholder={__( "Search", 'templatiq' )}
				value={ searchQuery }
				onChange={ handleSearchChange }
			/>
			{
				searchQuery.length > 0 ?
				<ReactSVG 
					src={ closeIcon } 
					width={ 18 } 
					height={ 18 } 
					className="templatiq__content__top__searchbox__clear"
					onClick={handleClearSearch}
				/> : null
			}

		</SearchformStyle>
	);
}
