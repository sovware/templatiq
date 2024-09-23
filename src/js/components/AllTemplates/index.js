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
	const { templateStatus } = props;
	const paginatePerPage = 6;

	const [ isEmpty, setIsEmpty ] = useState( false );
	const [ activeTab, setActiveTab ] = useState( 'all' );

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
				if ( filter.type === 'plugins' ) {
					// Check if any required plugin matches the selected plugin
					return template.required_plugins.some(
						( requiredPlugin ) => requiredPlugin?.slug === filter.key
					);
				} else {
					// Check if the template includes the selected category
					return template.categories.includes( filter.key );
				}
			} );
		} );

		// Update the state with the filtered templates
		setFilteredTemplates( newFilteredTemplates );
	};

	const checkTemplateType = ( templates ) => {
		console.log('checkTemplateType', templates);
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
			const { bookmarks } = select( store ).getUserInfo();
			const searchQuery = select( store ).getSearchQuery();
			const filterSearch = select( store ).getFilterSearch();
			setUserFav( bookmarks );
			setSearchValue( searchQuery );
			setFilterValue( filterSearch );

			const newLibraryData = select( store ).getLibraryData();
			const newTemplateData = select( store ).getTemplates();
			console.log('Updated Data Library', {newLibraryData, newTemplateData});

			if ( templateData ) {
				const chk = [
					{
						"template_id": 135038,
						"slug": "cars-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Car.png",
						"title": "Cars About Page",
						"price": "0.00",
						"number_of_downloads": 1491,
						"number_of_bookmarks": 2,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": false,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/cars\/about-us\/",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The Cars directory template pack is designed for creating versatile car directory websites that adapt to all screen sizes, from large desktops to smartphones. It offers features like a booking system, fast filtering, a modern user dashboard, built-in SEO, multi-directory support, and custom fields. With its advanced customizer, Elementor compatibility, and user-friendly front-page builder, the directory pack ensures a speedy setup and customization process for a seamless start you may want for your next directory website. <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->"
					},
					{
						"template_id": 135036,
						"slug": "restaurants-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Restuarent.png",
						"title": "Restaurants About Page",
						"price": "0.00",
						"number_of_downloads": 1487,
						"number_of_bookmarks": 2,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": false,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/restaurants\/about-us",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The directory template pack provides everything needed to build a scalable directory site, featuring multi-directory capabilities, custom fields, translation support, and advanced search. It is compatible with Elementor, offering free widgets for customization and premium extensions like maps, business hours, booking, and payment gateways. With monetization options such as paid and featured listings, it\u2019s ideal for creating a high-performing, revenue-generating restaurant directory website.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->"
					},
					{
						"template_id": 135033,
						"slug": "realestates-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Realestates.png",
						"title": "RealEstate About Page",
						"price": "0.00",
						"number_of_downloads": 1489,
						"number_of_bookmarks": 2,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": false,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/realestates\/about-us\/",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The RealEstate Directory template is a mobile-responsive WordPress template pack designed for building scalable, feature-rich real estate directories. It integrates with Directorist, offering custom fields, multi-directory support, SEO, translation, and advanced user dashboards, with premium extensions like business hours, maps, social login, and booking. With clean code, personalized listing pages, monetization options, and compatibility with Elementor, it provides high performance, easy customization, and extensive features like CSV import\/export, mapping, and appointment systems for seamless management. <\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->"
					},
					{
						"template_id": 135028,
						"slug": "doctors-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Doctor.png",
						"title": "Doctors About Page",
						"price": "0.00",
						"number_of_downloads": 1487,
						"number_of_bookmarks": 2,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": false,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/doctors\/about-us\/",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The <strong>Doctors Directory Template<\/strong> is a WordPress solution for building hospital or <strong>doctor directory websites<\/strong>, featuring a modern, mobile-responsive design with advanced search, filtering, and booking systems. It includes customizable listings, and monetization options, and integrates with payment gateways like PayPal and Stripe. With built-in SEO, translation support, and GDPR compliance, it offers a flexible, user-friendly platform for managing medical directories.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->"
					},
					{
						"template_id": 135020,
						"slug": "places-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Place.png",
						"title": "Places About Page",
						"price": "0.00",
						"number_of_downloads": 1487,
						"number_of_bookmarks": 2,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": true,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/places\/about-us",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The <strong>Places Directory Template<\/strong> is a powerful, user-friendly solution for creating place listing websites with features like a modern user dashboard, built-in SEO, multi-directory support, and unlimited custom fields. Fully mobile responsive, it integrates with payment gateways like PayPal and Stripe for monetization through paid and featured listings, subscriptions, and more. Customization options, advanced search filters, social login, and live chat enhance user engagement, making it ideal for building versatile and <strong>profitable directory websites<\/strong>.<\/p>\n<!-- \/wp:paragraph -->"
					},
					{
						"template_id": 135018,
						"slug": "services-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Services.png",
						"title": "Services About Page",
						"price": "4.90",
						"number_of_downloads": 0,
						"number_of_bookmarks": 0,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": false,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/services\/about-us\/",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The <strong>Services Directory template<\/strong> is a versatile WordPress tool that connects business owners and customers, enabling two-way interaction for showcasing services and posting needs. It features guest submissions, flexible pricing, advanced search, SEO, maps integration, and customizable elements for easy personalization. With WooCommerce support, GDPR compliance, and translation options, it offers a dynamic platform for global business-customer engagement.<\/p>\n<!-- \/wp:paragraph -->"
					},
					{
						"template_id": 135016,
						"slug": "hotels-about",
						"thumbnail": "https:\/\/templatiq.com\/wp-content\/uploads\/edd\/2024\/09\/Hotel.png",
						"title": "Hotels About Page",
						"price": "0.00",
						"number_of_downloads": 20,
						"number_of_bookmarks": 0,
						"type": "page",
						"builder": "elementor",
						"is_directorist_required": false,
						"directory_page_type": "none",
						"categories": [
							"about-us"
						],
						"required_plugins": [
							{
								"name": "Addonskit for Elementor",
								"slug": "addonskit-for-elementor",
								"init": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"file_name": "addonskit-for-elementor\/addonskit-for-elementor.php",
								"is_pro": false,
								"group": "general"
							},
							{
								"name": "Elementor",
								"slug": "elementor",
								"init": "elementor\/elementor.php",
								"file_name": "elementor\/elementor.php",
								"is_pro": false,
								"group": "general"
							}
						],
						"preview_link": "https:\/\/elementor.templatiq.com\/hotels\/about-us\/",
						"date": "September 11, 2024",
						"description": "<!-- wp:paragraph -->\n<p>The Hotels Directory Template offers a 100% mobile-responsive design and integrates with popular page builders like Elementor, ensuring seamless functionality across devices. Powered by the Directorist plugin, it includes features like unlimited custom fields, advanced search options, and multi-directory support, with premium add-ons such as maps, social login, and booking systems. Monetization options include paid listings, subscription plans, and payment gateways like PayPal and Stripe, providing a comprehensive solution for creating a professional hotel directory.<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><\/p>\n<!-- \/wp:paragraph -->"
					},
				]
				
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
		console.log('All Templates Changed');
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
			<div className="templatiq__content__top">
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
									{__( 'All', 'templatiq' )} (
									{ defaultTemplates
										? defaultTemplates.length
										: '0' }
									)
								</button>
							</li>
							<li
								className={`templatiq__content__top__filter__item ${activeTab === 'free' ? 'active' : ''}`}
								onClick={ () => changeTemplateTab( 'free' ) }
							>
								<button className="templatiq__content__top__filter__link">
									{__( 'Free', 'templatiq' )} (
									{ freeTemplates
										? freeTemplates.length
										: '0' }
									)
								</button>
							</li>
							<li
								className={`templatiq__content__top__filter__item ${activeTab === 'pro' ? 'active' : ''}`}
								onClick={ () => changeTemplateTab( 'pro' ) }
							>
								<button className="templatiq__content__top__filter__link">
									<ReactSVG
										src={ crownIcon }
										width={ 12 }
										height={ 12 }
									/>
									{__( 'Pro', 'templatiq' )} (
									{ proTemplates ? proTemplates.length : '0' }
									)
								</button>
							</li>
						</ul>
					</TemplatePackFilterStyle>
				</div>
			</div>

			<div className="templatiq__content__wrapper">
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
					) : activeTab === 'all' ? (
							<div className="templatiq-row templatiq__content__tab-panel">
								{templatesToDisplay &&
									templatesToDisplay.map((template, index) => {
										// Determine the background class based on index
										const backgroundClass = `background-${(index % 6) + 1}`;
										return (
											<div className="templatiq-col-6" key={index}>
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
						) : activeTab === "free" ? (
							<div className="templatiq-row templatiq__content__tab-panel">
								{ templatesToDisplay &&
									templatesToDisplay.map( ( template, index ) => (
										<div className="templatiq-col-6" key={index}>
											<Suspense
												fallback={
													<>
														<ContentLoading 
															type="image" 
															style={ { "marginBottom": "20px" } }
														/>
														<ContentLoading />
													</>
												}
											>
												<SingleTemplate
													template_id={ template.template_id }
													builder={ template.builder }
													type={ template.type }
													thumbnail={ template.thumbnail }
													slug={ template.slug }
													title={ template.title }
													number_of_downloads={
														template.number_of_downloads
													}
													number_of_bookmarks={
														template.number_of_bookmarks
													}
													is_directorist_required={
														template.is_directorist_required
													}
													directory_page_type={
														template.directory_page_type
													}
													required_plugins={
														template.required_plugins
													}
													categories={ 
														template.categories.flatMap(category =>
															Object.values(allCategories).flatMap(child =>
																child[category] ? [child[category]] : []
															)
														)
													}
													preview_link={
														template.preview_link
													}
												/>
											</Suspense>
										</div>
									) ) 
								}
							</div>
						) : activeTab === "pro" ? (
							<div className="templatiq-row templatiq__content__tab-panel">
								{ templatesToDisplay &&
									templatesToDisplay.map( ( template, index ) => (
										<div className="templatiq-col-6" key={index}>
											<Suspense
												fallback={
													<>
														<ContentLoading 
															type="image" 
															style={ { "marginBottom": "20px" } }
														/>
														<ContentLoading />
													</>
												}
											>
												<SingleTemplate
													template_id={ template.template_id }
													builder={ template.builder }
													type={ template.type }
													thumbnail={ template.thumbnail }
													slug={ template.slug }
													title={ template.title }
													price={ template.price }
													number_of_downloads={
														template.number_of_downloads
													}
													number_of_bookmarks={
														template.number_of_bookmarks
													}
													is_directorist_required={
														template.is_directorist_required
													}
													directory_page_type={
														template.directory_page_type
													}
													required_plugins={
														template.required_plugins
													}
													categories={ 
														template.categories.flatMap(category =>
															Object.values(allCategories).flatMap(child =>
																child[category] ? [child[category]] : []
															)
														)
													}
													preview_link={
														template.preview_link
													}
												/>
											</Suspense>
										</div>
									) ) 
								}
							</div>
						) : null
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
				</>
			</div>
		</div>
	);
}