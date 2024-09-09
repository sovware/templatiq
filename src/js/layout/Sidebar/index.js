import { dispatch, select, subscribe } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

import store from '@store/index';
import { SidebarItemStyle, SidebarStyle } from './style';

import ContentLoading from '@components/ContentLoading';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import filterIcon from '@icon/filter.svg';

const Sidebar = () => {
	const [ loading, setLoading ] = useState( false );

	const [ filterGroups, setFilterGroups ] = useState( {} );
	const [expandedGroups, setExpandedGroups] = useState({});

	const [ selectedFilters, setSelectedFilters ] = useState( [] );
	const [ elementorEditorEnabled, setElementorEditorEnabled ] = useState( false );

	const handleFilter = ( key, type ) => {
		// Copy the existing selectedFilters array to avoid mutating state directly
		const updatedSelectedFilters = [ ...selectedFilters ];

		// Find the index of the selected item in the selectedFilters array
		const index = updatedSelectedFilters.findIndex(
			( filter ) => filter.key === key && filter.type === type
		);

		if ( index !== -1 ) {
			// If the item is already selected, remove it from the array
			updatedSelectedFilters.splice( index, 1 );
		} else {
			// If the item is not selected, add it to the array
			updatedSelectedFilters.push( { key, type } );
		}

		// Update the state with the new selectedFilters array
		setSelectedFilters( updatedSelectedFilters );

		// Dispatch the action to update the filter search in the store
		dispatch( store ).setFilterSearch( updatedSelectedFilters );
	};

	const clearFilters = ( e ) => {
		e.preventDefault();
		setSelectedFilters( [] );

		// Dispatch the action to update the filter search in the store
		dispatch( store ).setFilterSearch( [] );
	};

	function getSidebarData( data ) {
		// Function to count templates for each item
		const countTemplatesByItem = (item, type) => {
			return data.templates.filter(template => {
				if (type === 'plugins') {
					return template.required_plugins.some(p => p.slug === item);
				}
				return template.categories.includes(item);
			}).length;
		};

		// getCategoryItems & getPluginItems functions
		const getCategoryItems = (groupKey, groupValue) => 
			Object.keys(groupValue || {}).map(key => ({
				key,
				title: groupValue[key], 
				count: countTemplatesByItem(key, groupKey)
			}));

		const getPluginItems = (groupValue) => 
			Object.keys(groupValue || {}).map(key => ({
				key,
				title: groupValue[key].name, 
				count: countTemplatesByItem(key, 'plugins')
			}));

		const newGroupedCategories = {};

		// Initialize categories and plugins in the newGroupedCategories object
		Object.entries(data.categories).forEach(([groupKey, groupValue]) => {
			newGroupedCategories[groupKey] = getCategoryItems(groupKey, groupValue);
		});

		newGroupedCategories.plugins = getPluginItems(data.plugins);

		setFilterGroups(newGroupedCategories);
	}

	const handleSeeMore = (group) => {
		setExpandedGroups((prev) => ({ ...prev, [group]: true }));
	};

	const handleShowLess = (group) => {
		setExpandedGroups((prev) => ({ ...prev, [group]: false }));
	};

	useEffect( () => {
		setLoading( true );
		// Check if the 'elementor-editor-active' class is present on the body element
		const isElementorEditorActive = document.body.classList.contains('elementor-editor-active');

		// Set the state variable based on the presence of Elementor Editor
		setElementorEditorEnabled( isElementorEditorActive );
		
		const data = select( store ).getLibraryData();

		if ( data ) {
			setLoading( false );
			getSidebarData( data );
		}

		// Clear Stored Filters
		dispatch( store ).setFilterSearch( [] );

		// Subscribe to changes in the store's data
		const storeUpdate = subscribe( () => {
			const data = select( store ).getLibraryData();
			if ( data ) {
				setLoading( false );
				getSidebarData( data );
			}
		} );

		// storeUpdate when the component is unmounted
		return () => storeUpdate();
	}, [] );

	return (
		<SidebarStyle className="templatiq__sidebar">
			{ loading ? (
				<>
					<ContentLoading style={ { padding:'30px' } } />
					<ContentLoading style={ { padding:'30px' } } />
					<ContentLoading style={ { padding:'30px' } } />
					<ContentLoading style={ { padding:'30px' } } />
				</>
			) : (
				<>
					<div className="templatiq__sidebar__top">
						<h3 className="templatiq__sidebar__top__title">
							<ReactSVG
								src={ filterIcon }
								width={ 18 }
								height={ 18 }
							/>
							{__( 'Filter', 'templatiq' )}
						</h3>
						<button
							href="#"
							className="templatiq__sidebar__top__clear"
							onClick={ clearFilters }
							disabled={ selectedFilters.length === 0 }
						>
							{__( 'Reset', 'templatiq' )}
						</button>
					</div>
					<div className="templatiq__sidebar__wrapper">	
						<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__plugins">
							<Accordion
								allowMultiple
								transition
								transitionTimeout={250}
								className="templatiq__sidebar__accordion"
							>
								{Object.keys(filterGroups).map((group) => (
									!(group === 'packs' && elementorEditorEnabled) ?
										<AccordionItem
											initialEntered
											key={group}
											header={group.charAt(0).toUpperCase() + group.slice(1)}
											className="templatiq__sidebar__accordion__single"
										>
											<div className="templatiq__sidebar__accordion__item">
											{filterGroups[group]
												.slice(0, (expandedGroups[group] ? filterGroups[group].length : 2))
												.map((item, itemIndex) => (
												<div
													key={item.key || itemIndex}
													className="templatiq__sidebar__filter__single templatiq__checkbox"
												>
													<input
														type="checkbox"
														id={item.key || itemIndex}
														className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input"
														onChange={() => handleFilter(item.key, group)}
														checked={selectedFilters.some(
															(filter) => filter.key === item.key && filter.type === group
														)}
													/>
													<label
														htmlFor={item.key || itemIndex}
														className="templatiq__sidebar__filter__single__label templatiq__checkbox__label"
													>
														{item.title}
													</label>
													<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">
														{item.count}
													</span>
												</div>
											))}
											{filterGroups[group].length > 2 && (
												<>
												{expandedGroups[group] ? (
													<button 
														className="more"
														aria-expanded="true"
														onClick={() => handleShowLess(group)}
													>
														Show Less
													</button>
												) : (
													<button 
														className="more"
														onClick={() => handleSeeMore(group)}
													>
														See More
													</button>
												)}
												</>
											)}
											</div>
										</AccordionItem> : null
								))}
							</Accordion>
						</SidebarItemStyle>
					</div>
				</>
			) }
		</SidebarStyle>
	);
};

export default Sidebar;
