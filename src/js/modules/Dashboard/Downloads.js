import { useState, useEffect } from '@wordpress/element';
import { select, subscribe } from '@wordpress/data';
import DashboardLayout from '@layout/DashboardLayout';
import ContentLoading from '@components/ContentLoading';
import Searchform from '@components/Searchform';
import store from '@store/index';
import { __ } from '@wordpress/i18n';

import { TemplatePackStyle } from '@root/style';
import { DashboardItemsStyle } from './style';

export default function MyDownloadsModule() {
	const [ loading, setLoading ] = useState( false );
	const [ isEmpty, setIsEmpty ] = useState( false );

	const templateData = select( store ).getTemplates();
	const { downloads } = select( store ).getUserInfo();

	const [ downloadedData, setDownloadedData ] = useState( [] );
	const [ defaultTemplates, setDefaultTemplates ] = useState( [] );
	const [ downloadedTemplates, setDownloadedTemplates ] = useState( [] );

	const [ searchValue, setSearchValue ] = useState( '' );
	const [ filteredTemplates, setFilteredTemplates ] = useState( [] );

	const searchFilteredTemplates = () => {
		const newFilteredTemplates = defaultTemplates.filter( ( template ) =>
			template.title.toLowerCase().includes( searchValue.toLowerCase() )
		);

		// Update the state with the filtered templates
		setFilteredTemplates( newFilteredTemplates );

		return newFilteredTemplates;
	};

	useEffect( () => {
		setLoading( true );
		downloadedData.length > 0 ? setIsEmpty( true ) : setIsEmpty( false );

		// Subscribe to changes in the store's data
		const downloadSearch = subscribe( () => {
			const searchQuery = select( store ).getSearchQuery();

			setSearchValue( searchQuery );
		} );

		// purchaseSearch when the component is unmounted
		return () => downloadSearch();
	}, [] );

	useEffect( () => {
		if ( downloads ) {
			setDownloadedData( downloads );
			setLoading( false );

			const downloadedTemplateIds = downloadedData
				.filter(
					( item ) =>
						typeof item === 'object' && ! Array.isArray( item )
				)
				.map( ( obj ) => Object.keys( obj ) )
				.flat()
				.map( Number );

			// Find template data for downloaded template_ids
			const downloadedTemplate = templateData.filter( ( template ) =>
				downloadedTemplateIds.includes( template.template_id )
			);

			setDownloadedTemplates( downloadedTemplate );
			setFilteredTemplates( downloadedTemplate );
			setDefaultTemplates( downloadedTemplate );
		}
	}, [ downloadedData ] );

	useEffect( () => {
		searchFilteredTemplates();
	}, [ searchValue ] );

	useEffect( () => {
		setDownloadedTemplates( filteredTemplates );

		filteredTemplates.length > 0 ? setIsEmpty( false ) : setIsEmpty( true );
	}, [ filteredTemplates ] );

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard">
				<TemplatePackStyle className="templatiq__content__dashboard">
					<div className="templatiq__content__top">
						<div className="templatiq__content_top__filter">
							<h3 className="templatiq__content__top__filter__title">
								{__( 'My Downloads', 'templatiq' )}
							</h3>
						</div>
						<div className="templatiq__content__top__search">
							<Searchform />
						</div>
					</div>
					<DashboardItemsStyle className="templatiq__content__dashboard__downloads">
						<div className="templatiq__content__dashboard__header">
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
								<span className="templatiq__content__dashboard__item__header">
									{__( 'Name', 'templatiq' )}
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
								<span className="templatiq__content__dashboard__item__header">
									{__( 'Downloaded Type', 'templatiq' )}
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
								<span className="templatiq__content__dashboard__item__header">
									{__( 'Downloaded Date', 'templatiq' )}
								</span>
							</div>
						</div>
						<div className="templatiq__content__dashboard__items">
							{ loading ? (
								<ContentLoading
									style={ { margin: 0, minHeight: 'unset' } }
								/>
							) : isEmpty ? (
								<div className="templatiq__content__empty">
									<h3 className="templatiq__content__empty__title">
										{__( 'No Downloads Found', 'templatiq' )}
									</h3>
									<h3 className="templatiq__content__empty__desc">
										{__( 'Search Other Templates', 'templatiq' )}
									</h3>
								</div>
							) : (
								downloadedTemplates.map( ( item ) => (
									<div className="templatiq__content__dashboard__single">
										<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
											<img
												src={ item.thumbnail }
												alt={ item.title }
												className="templatiq__content__dashboard__item__img"
											/>
											<span className="templatiq__content__dashboard__item__title">
												{ item.title }
											</span>
										</div>
										<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
											<span className="templatiq__content__dashboard__item__text">
												{ item.type }
											</span>
										</div>
										<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
											<span className="templatiq__content__dashboard__item__text"> </span>
										</div>
									</div>
								) )
							) }
						</div>
					</DashboardItemsStyle>
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
