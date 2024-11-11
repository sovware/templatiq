import { dispatch, select, subscribe } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

import store from '@store/index';
import { SidebarItemStyle, SidebarStyle } from './style';

import ContentLoading from '@components/ContentLoading';

import filterIcon from '@icon/filter.svg';

const Sidebar = (props) => {
	const { type } = props;

	const [ loading, setLoading ] = useState( false );
	const [ isLoading, setIsLoading ] = useState( false );

	const [ filterGroups, setFilterGroups ] = useState( {} );
	const [expandedGroups, setExpandedGroups] = useState({});

	const [ selectedFilters, setSelectedFilters ] = useState( [] );
	const [ editorEnabled, setEditorEnabled ] = useState( false );

	const currentBuilder = templatiq_obj.builder;

	// Handle Filter
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

	// Clear Filter
	const clearFilters = ( e ) => {
		e && e.preventDefault();
		setSelectedFilters( [] );

		// Dispatch the action to update the filter search in the store
		dispatch( store ).setFilterSearch( [] );
	};

	// Get Sidebar Data
	function getSidebarData( data ) {
		// Function to count templates for each item
		const countTemplatesByItem = (item, type) => {
			let allTemplates = null;
			const isElementorEditorActive = document.body.classList.contains('elementor-editor-active');

			if(isElementorEditorActive) {
				allTemplates = data.templates.filter( ( template ) => template.type !== 'pack' )
			} else {
				allTemplates = data.templates;
			}
			return allTemplates.filter(template => {
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
			})).filter(item => item.count > 0);

		const getPluginItems = (groupValue) => 
			Object.keys(groupValue || {}).map(key => ({
				key,
				title: groupValue[key].name, 
				count: countTemplatesByItem(key, 'plugins')
			})).filter(item => item.count > 0);

		const newGroupedCategories = {};
		
		// Filter categories with at least one non-zero item
		data.categories && Object.entries(data.categories).forEach(([groupKey, groupValue]) => {
			const filteredItems = getCategoryItems(groupKey, groupValue);
			if (filteredItems.length > 0) {
				newGroupedCategories[groupKey] = filteredItems;
			}
		});
	
		// Filter plugins with at least one non-zero item
		const filteredPlugins = getPluginItems(data.plugins);
		if (filteredPlugins.length > 0) {
			newGroupedCategories.plugins = filteredPlugins;
		}

		setFilterGroups(newGroupedCategories);
	}

	// Handle See More
	const handleSeeMore = (group) => {
		setExpandedGroups((prev) => ({ ...prev, [group]: true }));
	};

	// Handle See Less
	const handleShowLess = (group) => {
		setExpandedGroups((prev) => ({ ...prev, [group]: false }));
	};

	// Sanitize HTML Entities
	function sanitizeHtmlEntities(text) {
		return text
			.replace(/&#8211;/g, '–')
			.replace(/&amp;/g, '&');
	}

	useEffect(() => {
		clearFilters();
	}, [currentBuilder	]);

	useEffect( () => {
		setLoading( true );
		// Check if the 'elementor-editor-active' class is present on the body element
		const isElementorEditorActive = document.body.classList.contains('elementor-editor-active');
		
		setEditorEnabled( isElementorEditorActive );
		
		const data = select( store ).getLibraryData();

		if ( data ) {
			setLoading( false );
			getSidebarData( data );
		}

		// Clear Stored Filters
		dispatch( store ).setFilterSearch( [] );

		// Subscribe to changes in the store's data
		const storeUpdate = subscribe( () => {
			const isLoading =  select( store ).getIsLoading();
			setIsLoading(isLoading);
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
		<SidebarStyle className={`templatiq__sidebar ${type === "cloud" ? 'templatiq__sidebar--cloud' : ''}`}>
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
						{
							!isLoading ?
							<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__plugins">
								<div
									className="templatiq__sidebar__accordion"
								>
									{Object.keys(filterGroups).map((group, key) => (
										!(group === 'packs' && editorEnabled) ?
											<div
												key={key}
												className="templatiq__sidebar__accordion__single"
											>
												<h3 className="templatiq__sidebar__accordion__heading">
													{
														group === 'packs' ? __('Full Site', 'templatiq') :
														group.charAt(0).toUpperCase() + group.slice(1)
													}
												</h3>

												<div className="templatiq__sidebar__accordion__item">
												{filterGroups[group]
													.slice(0, (expandedGroups[group] ? filterGroups[group].length : 5))
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
															{sanitizeHtmlEntities(item.title)}
														</label>
														<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">
															{item.count}
														</span>
													</div>
												))}
												{filterGroups[group].length > 5 && (
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
											</div> : null
									))}
								</div>
							</SidebarItemStyle> :
							<ContentLoading type="sidebar" style={{ "maxHeight": "unset", padding: "0 20px" }} />
						}
					</div>
				</>
			) }
		</SidebarStyle>
	);
};

export default Sidebar;
