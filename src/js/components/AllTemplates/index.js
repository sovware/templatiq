import store from '@store/index';
import { select, subscribe } from '@wordpress/data';
import { Suspense, lazy, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import ReactPaginate from 'react-paginate';

import ContentLoading from '@components/ContentLoading';
import { TemplatePackFilterStyle } from '@root/style';

const SingleTemplate = lazy( () => import( '@components/SingleTemplate' ) );

import arrowLeft from '@icon/angle-left.svg';
import arrowRight from '@icon/angle-right.svg';
import crownIcon from '@icon/crown.svg';

export default function AllTemplates( props ) {
	const { templateStatus, templateType } = props;
	const paginatePerPage = 6;

	const [ isEmpty, setIsEmpty ] = useState( false );
	const [ activeTab, setActiveTab ] = useState( 'all' );
	const [ isLoading, setIsLoading ] = useState( false );

	const [ allTemplates, setAllTemplates ] = useState( [] );
	const [ allCategories, setAllCategories ] = useState( [] );
	const [ filteredTemplates, setFilteredTemplates ] = useState( [] );
	const [ defaultTemplates, setDefaultTemplates ] = useState( [] );
	const [ proTemplates, setProTemplates ] = useState( [] );
	const [ freeTemplates, setFreeTemplates ] = useState( [] );
	const [ templatesToDisplay, setTemplatesToDisplay ] = useState( [] );

	const user = select( store ).getUserInfo();
	const { bookmarks } = select( store ).getUserInfo();
	const [ userFav, setUserFav ] = useState( bookmarks );

	const [ searchValue, setSearchValue ] = useState( '' );
	const [ filterValue, setFilterValue ] = useState( [] );

	const [ totalPaginate, setTotalPaginate ] = useState( [] );
	const [ startItemCount, setStartItemCount ] = useState( 0 );
	const [ endItemCount, setEndItemCount ] = useState( paginatePerPage );
	const [ paginationKey, setPaginationKey ] = useState(Date.now());
	const [ forcePage, setForcePage ] = useState( 0 );

	const changeTemplateTab = ( type ) => {
		setActiveTab( type );

		setForcePage( 0 );
		setStartItemCount( 0 );
		setEndItemCount( paginatePerPage );
	};

	const handlePageChange = ( event ) => {
		const selectedPage = event.selected + 1;
		setStartItemCount( selectedPage * paginatePerPage - paginatePerPage );
		setEndItemCount( selectedPage * paginatePerPage );
	};

	const handlePaginateReset = () =>{
		setPaginationKey(Date.now());
		handlePageChange({ selected: 0 });
	}

	const searchFilteredTemplates = () => {
		const newFilteredTemplates =
			filteredTemplates &&
			filteredTemplates.filter( ( template ) =>
				template.title
					.toLowerCase()
					.includes( searchValue.toLowerCase() )
			);

		// Update the state with the filtered templates
		setDefaultTemplates( newFilteredTemplates );
		setProTemplates(
			newFilteredTemplates.filter( ( template ) => template.price > 0 )
		);
		setFreeTemplates(
			newFilteredTemplates.filter( ( template ) => template.price <= 0 )
		);

		handlePaginateReset();
		changeTemplateTab( 'all' )

		return newFilteredTemplates;
	};

	const resetFilteredTemplates = () => {
		setFilteredTemplates( allTemplates );
		setDefaultTemplates( allTemplates );
		setProTemplates(
			allTemplates.filter( ( template ) => template.price > 0 )
		);
		setFreeTemplates(
			allTemplates.filter( ( template ) => template.price <= 0 )
		);
	}

	const filterPluginTemplates = () => {
		// Filter templates based on filterValue
		const newFilteredTemplates = allTemplates.filter( ( template ) => {
			return filterValue.some( ( filter ) => {
				if ( filter.key === 'all' ) {
					let templateType = template.type === 'pack' ? 'packs' : template.type === 'section' ? 'blocks' : template.type === 'page' ? 'pages' : '';
					return templateType === filter.type;
				} else if ( filter.type === 'plugins' ) {
					// Check if any required plugin matches the selected plugin
					return template.required_plugins.some(
						( requiredPlugin ) => requiredPlugin?.slug === filter.key
					);
				} else {
					// Check if the template includes the selected category\
					return template.categories.includes( filter.key );
				}
			} );
		} );

		// Update the state with the filtered templates
		setFilteredTemplates( newFilteredTemplates );
	};

	const checkTemplateType = ( templates ) => {
		let typeChecked = '';
		if ( templates ) {
			user && userFav && templateStatus === 'favorites'
				? ( typeChecked = templates.filter( ( template ) =>
						userFav.includes( template.template_id )
				  ) )
				: ( typeChecked = templates );

			setAllTemplates( typeChecked );
		} else {
			setAllTemplates( templates );
		}
	};

	useEffect( () => {
		const templateData = select( store ).getTemplates();
		const isElementorEditorActive = document.body.classList.contains(
			'elementor-editor-active'
		);

		if ( templateData ) {
			if (!isElementorEditorActive) {
				checkTemplateType( templateData );
			} else {
				checkTemplateType( templateData.filter( ( template ) => template.type !== 'pack' ) );
			}
		}

		const data = select( store ).getLibraryData();
		setAllCategories( data.categories );

		// Subscribe to changes in the store's data
		const storeUpdate = subscribe( () => {
			const isLoading =  select( store ).getIsLoading();
			setIsLoading(isLoading);
			const { bookmarks } = select( store ).getUserInfo();
			const searchQuery = select( store ).getSearchQuery();
			const filterSearch = select( store ).getFilterSearch();
			setUserFav( bookmarks );
			setSearchValue( searchQuery );
			setFilterValue( filterSearch );

			const newLibraryData = select( store ).getLibraryData();
			const newTemplateData = select( store ).getTemplates();

			if ( templateData ) {
				
				if (!isElementorEditorActive) {
					checkTemplateType( newTemplateData );
				} else {
					checkTemplateType( newTemplateData.filter( ( template ) => template.type !== 'pack' ) );
				}
			}

			setAllCategories( newLibraryData.categories );

		} );

		// storeUpdate when the component is unmounted
		return () => storeUpdate();
	}, [ userFav ? userFav : null ] );

	useEffect( () => {
		setDefaultTemplates( allTemplates );
		setFilteredTemplates( allTemplates );
		setProTemplates(
			allTemplates &&
				allTemplates.filter( ( template ) => template.price > 0 )
		);
		setFreeTemplates(
			allTemplates &&
				allTemplates.filter( ( template ) => template.price <= 0 )
		);

		// Initially set the allTemplates to display based on start and end item counts
		setTemplatesToDisplay(
			allTemplates && allTemplates.slice( startItemCount, endItemCount )
		);

		setTotalPaginate( allTemplates && allTemplates.length );
	}, [ allTemplates ] );

	useEffect( () => {
		filterValue && filterValue.length > 0
			? filterPluginTemplates()
			: resetFilteredTemplates();
	}, [ filterValue, userFav ] );

	useEffect( () => {
		searchFilteredTemplates();
	}, [ searchValue ] );

	useEffect( () => {
		setDefaultTemplates( filteredTemplates );
		if ( filteredTemplates ) {
			setProTemplates(
				filteredTemplates.filter( ( template ) => template.price > 0 )
			);
			setFreeTemplates(
				filteredTemplates.filter( ( template ) => template.price <= 0 )
			);

			// Initially set the filteredTemplates to display based on start and end item counts
			setTemplatesToDisplay(
				filteredTemplates.slice( startItemCount, endItemCount )
			);

			setTotalPaginate( filteredTemplates.length );

			if ( filteredTemplates.length ) {
				setIsEmpty( false );
			} else {
				// Delay updating isEmpty to false after .2 second
				const delayTimeoutId = setTimeout( () => {
					setIsEmpty( true );
				}, 200 );

				// Cleanup the delay timeout
				return () => clearTimeout( delayTimeoutId );
			}

			if (searchValue) {
				searchFilteredTemplates();
			}
		}
		handlePaginateReset();
		changeTemplateTab( 'all' )
	}, [ filteredTemplates ] );

	useEffect( () => {
		// templatesToDisplay && templatesToDisplay.length > 0 ? setIsEmpty(false) : setIsEmpty(true);

		if ( templatesToDisplay.length ) {
			setIsEmpty( false );
		} else {
			// Delay updating isEmpty to false after .2 second
			const delayTimeoutId = setTimeout( () => {
				setIsEmpty( true );
			}, 200 );

			// Cleanup the delay timeout
			return () => clearTimeout( delayTimeoutId );
		}
	}, [ templatesToDisplay ] );

	useEffect( () => {
		if ( activeTab === 'all' ) {
			setTemplatesToDisplay(
				defaultTemplates &&
					defaultTemplates.slice( startItemCount, endItemCount )
			);
			setTotalPaginate( defaultTemplates && defaultTemplates.length );
		} else if ( activeTab === 'pro' ) {
			setTemplatesToDisplay(
				proTemplates &&
					proTemplates.slice( startItemCount, endItemCount )
			);
			setTotalPaginate( proTemplates && proTemplates.length );
		} else if ( activeTab === 'free' ) {
			setTemplatesToDisplay(
				freeTemplates &&
					freeTemplates.slice( startItemCount, endItemCount )
			);
			setTotalPaginate( freeTemplates && freeTemplates.length );
		}
	}, [
		activeTab,
		startItemCount,
		endItemCount,
		filteredTemplates,
		proTemplates,
		freeTemplates,
	] );

	return (
		<div className="templatiq__content__tab">
			<div className={`templatiq__content__top ${templateType === "cloud" ?'templatiq__content__top--cloud' : ''}`}>
				<div className="templatiq__content__top__filter">
					<TemplatePackFilterStyle className="templatiq__content__top__filter__wrapper">
						<ul 
							className="templatiq__content__top__filter__tablist"
						>
							<li
								className={`templatiq__content__top__filter__item ${activeTab === 'all' ? 'active' : ''}`}
								onClick={ () => changeTemplateTab( 'all' ) }
							>
								<button className="templatiq__content__top__filter__link">
									<span className="templatiq__content__top__filter__link__text">
										{__( 'All', 'templatiq' )} (
										{ defaultTemplates
											? defaultTemplates.length
											: '0' }
										)
									</span>
								</button>
							</li>
							<li
								className={`templatiq__content__top__filter__item ${activeTab === 'free' ? 'active' : ''}`}
								onClick={ () => changeTemplateTab( 'free' ) }
							>
								<button className="templatiq__content__top__filter__link">
									<span className="templatiq__content__top__filter__link__text">
										{__( 'Free', 'templatiq' )} (
										{ freeTemplates
											? freeTemplates.length
											: '0' }
										)
									</span>
								</button>
							</li>
							<li
								className={`templatiq__content__top__filter__item ${activeTab === 'pro' ? 'active' : ''}`}
								onClick={ () => changeTemplateTab( 'pro' ) }
							>
								<button className="templatiq__content__top__filter__link">
									<span className="templatiq__content__top__filter__link__text">
										<ReactSVG
											src={ crownIcon }
											width={ 12 }
											height={ 12 }
										/>
										{__( 'Pro', 'templatiq' )} (
										{ proTemplates ? proTemplates.length : '0' }
										)
									</span>
								</button>
							</li>
						</ul>
					</TemplatePackFilterStyle>
				</div>
			</div>

			<div className="templatiq__content__wrapper">
				{
					!isLoading ?
					<>
						{ isEmpty ? (
							<div className="templatiq__content__empty">
								<h3 className="templatiq__content__empty__title">
									{__( 'No Template Found', 'templatiq' )}								
								</h3>
								<h3 className="templatiq__content__empty__desc">
									{__( 'Search Other Templates', 'templatiq' )}
								</h3>
							</div>
						) : 
							<div className="templatiq-row templatiq__content__tab-panel">
								{templatesToDisplay &&
									templatesToDisplay.map((template, index) => {
										// Determine the background class based on index
										const backgroundClass = `background-${(index % 6) + 1}`;
										return (
											<div className="templatiq-col-xxl-4 templatiq-col-6" key={index}>
												<Suspense
													fallback={
														<>
															<ContentLoading 
																type="image" 
																style={{ "marginBottom": "20px" }}
															/>
															<ContentLoading />
														</>
													}
												>
													<SingleTemplate
														template_id={template.template_id}
														builder={template.builder}
														type={template.type}
														thumbnail={template.thumbnail}
														slug={template.slug}
														title={template.title}
														price={template.price}
														number_of_downloads={template.number_of_downloads}
														number_of_bookmarks={template.number_of_bookmarks}
														is_directorist_required={template.is_directorist_required}
														directory_page_type={template.directory_page_type}
														required_plugins={template.required_plugins}
														categories={ 
															template.categories.flatMap(category =>
																Object.values(allCategories).flatMap(child =>
																	child[category] ? [child[category]] : []
																)
															)
														}
														preview_link={template.preview_link}
														bgClass={backgroundClass}
													/>
												</Suspense>
											</div>
										);
									})
								}
							</div> 
						}

						{ totalPaginate > paginatePerPage && (
							<ReactPaginate
								key={`${activeTab}-${paginationKey}`}
								breakLabel="..."
								onPageChange={ handlePageChange }
								nextLabel={ <ReactSVG src={ arrowRight } /> }
								previousLabel={ <ReactSVG src={ arrowLeft } /> }
								pageRangeDisplayed={ 3 }
								forcePage={ forcePage }
								pageCount={ Math.ceil(
									totalPaginate / paginatePerPage
								) }
								previousClassName="templatiq-pagination__item"
								previousLinkClassName="templatiq-pagination__link templatiq-pagination__control"
								nextClassName="templatiq-pagination__item"
								nextLinkClassName="templatiq-pagination__link templatiq-pagination__control"
								containerClassName="templatiq-pagination"
								pageClassName="templatiq-pagination__item"
								pageLinkClassName="templatiq-pagination__link"
								activeLinkClassName="templatiq-pagination__active"
								renderOnZeroPageCount={ null }
							/>
						) }
					</> : 
					<ContentLoading type="allTemplate" style={{ "maxHeight": "unset" }} />
				}
			</div>
		</div>
	);
}