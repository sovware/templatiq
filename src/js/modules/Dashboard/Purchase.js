import ContentLoading from '@components/ContentLoading';
import InsertTemplate from '@components/InsertTemplate';
import Searchform from '@components/Searchform';
import DashboardLayout from '@layout/DashboardLayout';
import store from '@store/index';
import { select, subscribe } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

import { TemplatePackStyle } from '@root/style';
import { DashboardItemsStyle } from './style';

export default function MyPurchaseModule() {
	const [ loading, setLoading ] = useState( false );
	const [ isEmpty, setIsEmpty ] = useState( false );

	const templateData = select( store ).getTemplates();
	const { purchased,unlocked } = select( store ).getUserInfo();

	const [ purchasedData, setPurchasedData ] = useState( [] );
	const [ purchasedTemplates, setPurchasedTemplates ] = useState( [] );

	const [ searchValue, setSearchValue ] = useState( '' );
	const [ defaultTemplates, setDefaultTemplates ] = useState( [] );
	const [ filteredTemplates, setFilteredTemplates ] = useState( [] );

	const searchFilteredTemplates = () => {
		const newFilteredTemplates = defaultTemplates.filter( ( template ) =>
			template.title.toLowerCase().includes( searchValue.toLowerCase() )
		);

		// Update the state with the filtered templates
		setFilteredTemplates( newFilteredTemplates );

		return newFilteredTemplates;
	};


	const renderPurchasedData = ( totalPurchasedData ) => {
		setLoading( false );
		const purchasedTemplateIds = totalPurchasedData
			.filter(
				( item ) =>
					typeof item === 'object' && ! Array.isArray( item )
			)
			.map( ( obj ) => Object.keys( obj ) )
			.flat()
			.map( Number );

		// Find template data for purchased template_ids
		const purchasedTemplate = templateData.filter( ( template ) =>
			purchasedTemplateIds.includes( template.template_id )
		);

		setPurchasedTemplates( purchasedTemplate );
		setFilteredTemplates( purchasedTemplate );
		setDefaultTemplates( purchasedTemplate );
	}

	useEffect( () => {
		searchFilteredTemplates();
	}, [ searchValue ] );

	useEffect( () => {
		setPurchasedTemplates( filteredTemplates );

		filteredTemplates.length > 0 ? setIsEmpty( false ) : setIsEmpty( true );
	}, [ filteredTemplates ] );

	useEffect( () => {
		setLoading( true );
		const totalPurchasedData = (purchased || [])?.concat(unlocked || []);
		
		purchasedData.length > 0 ? setIsEmpty( true ) : setIsEmpty( false );
		renderPurchasedData(totalPurchasedData);

		// Subscribe to changes in the store's data
		const purchaseSearch = subscribe( () => {
			const searchQuery = select( store ).getSearchQuery();

			setSearchValue( searchQuery );
		} );

		// purchaseSearch when the component is unmounted
		return () => purchaseSearch();
	}, [] );

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard">
				<TemplatePackStyle className="templatiq__content__dashboard">
					<div className="templatiq__content__top">
						<div className="templatiq__content_top__filter">
							<h3 className="templatiq__content__top__filter__title">
								My Purchase
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
									Name
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
								<span className="templatiq__content__dashboard__item__header">
									Downloaded Type
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
								<span className="templatiq__content__dashboard__item__header">
									Downloaded Date
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--insert">
								<span className="templatiq__content__dashboard__item__header">
									Insert
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
										No Purchase Found
									</h3>
									<h3 className="templatiq__content__empty__desc">
										Search Other Templates
									</h3>
								</div>
							) : (
								purchasedTemplates.map( ( item ) => (
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
											<span className="templatiq__content__dashboard__item__text">
												14 May, 2023 7.23pm
											</span>
										</div>

										<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
											<InsertTemplate
												solidIcon
												item={ item }
												innerText={ 'Insert' }
												className={
													'templatiq__content__dashboard__item__btn templatiq-btn templatiq-btn-success'
												}
											/>
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