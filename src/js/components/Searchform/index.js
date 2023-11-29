import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';

import { SearchformStyle } from './style';

import searchIcon from "@icon/search.svg";

export default function Searchform({updateSearchValue}) {
	const [searchQuery, setSearchQuery] = useState('');
	// const [filteredTemplates, setFilteredTemplates] = useState([]);

	const handleSearchChange = (e) => {
		const newSearchQuery = e.target.value;
		setSearchQuery(newSearchQuery);

		// Pass the search value to the parent component
		updateSearchValue(newSearchQuery);
	};

	// useEffect(() => {
	// 	// Filter templates based on searchQuery
	// 	const newFilteredTemplates = templates.filter(template =>
	// 	  template.title.toLowerCase().includes(searchQuery.toLowerCase())
	// 	);
	
	// 	// Update the state with the filtered templates
	// 	setFilteredTemplates(newFilteredTemplates);
	// }, [searchQuery]);

	// console.log('Templates Searchform: ', templates);
	// console.log('filteredTemplates Searchform: ', filteredTemplates);
	
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
