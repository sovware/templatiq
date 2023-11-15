import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';

import { SearchformStyle } from './style';

import searchIcon from "@icon/search.svg";

export default function Searchform() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
		console.log('Search Query: ', e.target.value, searchQuery);
		// onFilterChange({ categories: selectedCategories, searchQuery: e.target.value });
	};
	
	return (
		<SearchformStyle className="templatiq__content__top__searchbox">
			<button className="templatiq__content__top__searchbox__button">
				<ReactSVG src={ searchIcon } width={18} height={18} />
			</button>
			<input 
				type="text" 
				className="templatiq__content__top__searchbox__input" 
				placeholder="Search "
				value={searchQuery} 
				onChange={handleSearchChange}
			/>
		</SearchformStyle>
	);
}
