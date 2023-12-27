import { useState, useEffect } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import ReactSVG from 'react-inlinesvg';
import { select, dispatch, subscribe } from '@wordpress/data';

import store from '@store/index';
import { SidebarStyle, SidebarItemStyle } from './style';

import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentLoading from '@components/ContentLoading';

import filterIcon from '@icon/filter.svg';

const Sidebar = () => {
	const location = useLocation();
	const pathType = location.pathname.split( '/' ).pop();

	const templateType =
		pathType == 'pages'
			? 'page'
			: pathType == 'blocks'
			? 'section'
			: 'pack';

	const [ loading, setLoading ] = useState( false );
	const [ libraryData, setLibraryData ] = useState( false );
	const [ categories, setCategories ] = useState( [] );
	const [ plugins, setPlugins ] = useState( [] );
	const [ pluginGroups, setPluginGroups ] = useState( [] );

	const [ countCategories, setCountCategories ] = useState();
	const [ countPlugins, setCountPlugins ] = useState();

	const [ selectedFilters, setSelectedFilters ] = useState( [] );

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
		setCategories( data.categories );
		setPlugins( data.plugins );
		setPluginGroups( data.plugins_groups );

		// Filter templates based on type
		const templatesOfType = data.templates.filter(
			( template ) => template.type === templateType
		);

		// Count for categories based on templates of the specific type
		const categoryCount = {};
		templatesOfType.forEach( ( template ) => {
			template.categories.forEach( ( category ) => {
				if ( categoryCount[ category ] ) {
					categoryCount[ category ]++;
				} else {
					categoryCount[ category ] = 1;
				}
			} );
		} );
		setCountCategories( categoryCount );

		// Count for plugin maps based on templates of the specific type
		const pluginCount = {};
		Object.keys( data.plugins ).forEach( ( plugin ) => {
			pluginCount[ plugin ] = templatesOfType.filter( ( template ) =>
				template.required_plugins.some(
					( reqPlugin ) => reqPlugin.slug === plugin
				)
			).length;
		} );
		setCountPlugins( pluginCount );
	}

	// Group plugins by their group
	const groupedPlugins = {};
	Object.keys( plugins ).forEach( ( plugin ) => {
		const group = plugins[ plugin ].group;
		if ( ! groupedPlugins[ group ] ) {
			groupedPlugins[ group ] = [];
		}
		groupedPlugins[ group ].push( plugin );
	} );

	useEffect( () => {
		setLoading( true );
		const data = select( store ).getLibraryData();

		if ( libraryData ) {
			setLoading( false );
			getSidebarData( data );
			setLibraryData( data );
		} else {
			console.log( 'No Data Found' );
		}

		// Clear Stored Filters
		dispatch( store ).setFilterSearch( [] );

		// Subscribe to changes in the store's data
		const storeUpdate = subscribe( () => {
			const data = select( store ).getLibraryData();
			if ( data ) {
				setLoading( false );
				getSidebarData( data );
				setLibraryData( data );
			}
		} );

		// storeUpdate when the component is unmounted
		return () => storeUpdate();
	}, [] );

	return (
		<SidebarStyle className="templatiq__sidebar">
			{ loading ? (
				<ContentLoading style={ { margin: 0, width: '256px' } } />
			) : (
				<>
					<div className="templatiq__sidebar__top">
						<h3 className="templatiq__sidebar__top__title">
							<ReactSVG
								src={ filterIcon }
								width={ 18 }
								height={ 18 }
							/>
							Filter
						</h3>
						<button
							href="#"
							className="templatiq__sidebar__top__clear"
							onClick={ clearFilters }
							disabled={ selectedFilters.length === 0 }
						>
							Clear
						</button>
					</div>
					<div className="templatiq__sidebar__wrapper">
						<Tabs>
							<TabList className="templatiq__sidebar__nav">
								<Tab className="templatiq__sidebar__nav__item">
									<button className="templatiq__sidebar__nav__link">
										Plugins
									</button>
								</Tab>
								<Tab className="templatiq__sidebar__nav__item">
									<button className="templatiq__sidebar__nav__link">
										Categories
									</button>
								</Tab>
							</TabList>
							<TabPanel>
								<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__plugins">
									<Accordion
										transition
										transitionTimeout={ 250 }
										className="templatiq__sidebar__accordion"
									>
										{ Object.keys( groupedPlugins ).map(
											( group, index ) => (
												<AccordionItem
													key={ group }
													header={
														pluginGroups[ group ]
													}
													className="templatiq__sidebar__accordion__single"
													initialEntered={
														index === 0
													} // Set initialEntered to true for the first item
												>
													<div className="templatiq__sidebar__accordion__item">
														{ groupedPlugins[
															group
														].map(
															( pluginKey ) => (
																<div
																	key={
																		pluginKey
																	}
																	className="templatiq__sidebar__filter__single templatiq__checkbox"
																>
																	<input
																		type="checkbox"
																		id={
																			pluginKey
																		}
																		className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input"
																		onChange={ () =>
																			handleFilter(
																				pluginKey,
																				'plugins'
																			)
																		}
																		checked={ selectedFilters.some(
																			(
																				filter
																			) =>
																				filter.key ===
																					pluginKey &&
																				filter.type ===
																					'plugins'
																		) }
																	/>
																	<label
																		htmlFor={
																			pluginKey
																		}
																		className="templatiq__sidebar__filter__single__label templatiq__checkbox__label"
																	>
																		{
																			libraryData
																				.plugins[
																				pluginKey
																			]
																				.name
																		}
																	</label>
																	<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">
																		{ countPlugins[
																			pluginKey
																		] || 0 }
																	</span>
																</div>
															)
														) }
													</div>
												</AccordionItem>
											)
										) }
									</Accordion>
								</SidebarItemStyle>
							</TabPanel>
							<TabPanel>
								<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__categories">
									<div className="templatiq__sidebar__categories__wrapper">
										{ Object.keys( categories ).map(
											( categoryKey ) => (
												<div className="templatiq__sidebar__filter__single templatiq__checkbox">
													<input
														type="checkbox"
														id={ categoryKey }
														className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input"
														onChange={ () =>
															handleFilter(
																categoryKey,
																'categories'
															)
														}
														checked={ selectedFilters.some(
															( filter ) =>
																filter.key ===
																	categoryKey &&
																filter.type ===
																	'categories'
														) }
													/>
													<label
														for={ categoryKey }
														className="templatiq__sidebar__filter__single__label templatiq__checkbox__label"
													>
														{
															categories[
																categoryKey
															]
														}
													</label>
													<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">
														{ countCategories[
															categoryKey
														] || 0 }
													</span>
												</div>
											)
										) }
									</div>
								</SidebarItemStyle>
							</TabPanel>
						</Tabs>
					</div>
				</>
			) }
		</SidebarStyle>
	);
};

export default Sidebar;
