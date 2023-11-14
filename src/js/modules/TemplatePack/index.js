import ReactSVG from 'react-inlinesvg';
import { TemplatePackStyle, TemplatePackFilterStyle } from '@root/style';
import Popup from "@components/Popup";
import AppLayout from "@layout/AppLayout";
import Searchform from "@components/Searchform";
import SingleTemplate from "@components/SingleTemplate";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ReactPaginate from 'react-paginate';
import { useQuery } from '@tanstack/react-query';
import templatesData from '../../data/template.json';


import searchIcon from '@icon/search.svg';
import crownIcon from '@icon/crown.svg';
import arrowLeft from '@icon/angle-left.svg';
import arrowRight from '@icon/angle-right.svg';

import templateImg1 from "@images/template/1.svg";

export default function TemplatePackModule() {

	let total = 6;
	let perPage = 4;

	let handlePageClick = ( data ) => {
		return data;
	}

	const { isLoading, error, data } = useQuery(['templates'], () => fetch('http://templatemarket.local/wp-json/templatiq/template/library').then(res =>
		res.json()
	));
	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;

	let allTemplates = data.templates;

	let proTemplates = allTemplates.filter(template => template.price > 0);
	let freeTemplates = allTemplates.filter(template => template.price <= 0);

	return (
		<AppLayout>
			<TemplatePackStyle className="templatiq__content">
				<Popup />
				<Tabs className="templatiq__content__tab">
					<div className="templatiq__content__top">
						<div className="templatiq__content__top__filter">
							<h3 className="templatiq__content__top__filter__title">
								Template Pack
							</h3>
							<TemplatePackFilterStyle className="templatiq__content__top__filter__wrapper">
								<TabList className="templatiq__content__top__filter__tablist">
									<Tab className="templatiq__content__top__filter__item">
										<a href="#" className="templatiq__content__top__filter__link">All ({allTemplates.length})</a>
									</Tab>
									<Tab className="templatiq__content__top__filter__item">
										<a href="#" className="templatiq__content__top__filter__link">Free ({freeTemplates.length})</a>
									</Tab>
									<Tab className="templatiq__content__top__filter__item">
										<a href="#" className="templatiq__content__top__filter__link">
											<ReactSVG src={crownIcon} width={12} height={12} />
											Pro ({proTemplates.length})
										</a>
									</Tab>
								</TabList>
							</TemplatePackFilterStyle>
						</div>
						<div className="templatiq__content__top__search">
							<Searchform />
						</div>
					</div>

					<div className="templatiq__content__wrapper">
						<TabPanel className="templatiq__content__tab-panel">
						{allTemplates
							.map(template => (
								<SingleTemplate 
									img = {template.thumbnail} 
									slug = {template.slug}
									title = {template.title} 
									price = {template.price} 
									downloadCount = {template.number_of_downloads} 
									favoriteCount = {template.number_of_bookmarks} 
									requiredPlugins = {template.required_plugins}
									categories = {template.categories}
									purchaseURL = {template.purchase_url}
									previewURL = {template.preview_link}
								/>
							))
						}
						</TabPanel>
						<TabPanel className="templatiq__content__tab-panel">
						{freeTemplates
							.map(template => (
								<SingleTemplate 
									img = {template.thumbnail} 
									slug = {template.slug}
									title = {template.title} 
									downloadCount = {template.number_of_downloads} 
									favoriteCount = {template.number_of_bookmarks} 
									requiredPlugins = {template.required_plugins}
									categories = {template.categories}
									purchaseURL = {template.purchase_url}
									previewURL = {template.preview_link}
								/>
							))
						}
						</TabPanel>
						<TabPanel className="templatiq__content__tab-panel">
						{proTemplates
							.map(template => (
								<SingleTemplate 
									img = {template.thumbnail} 
									slug = {template.slug}
									title = {template.title} 
									price = {template.price} 
									downloadCount = {template.number_of_downloads} 
									favoriteCount = {template.number_of_bookmarks} 
									requiredPlugins = {template.required_plugins}
									categories = {template.categories}
									purchaseURL = {template.purchase_url}
									previewURL = {template.preview_link}
								/>
							))
						}
						</TabPanel>

						{ total > perPage && (
							<ReactPaginate
								breakLabel="..."
								onPageChange={ handlePageClick }
								nextLabel={ <ReactSVG src={ arrowRight } /> }
								previousLabel={ <ReactSVG src={ arrowLeft } /> }
								pageRangeDisplayed={ 3 }
								pageCount={ Math.ceil( total / perPage ) }
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
					</div>
				</Tabs>
			</TemplatePackStyle>
		</AppLayout>
	);
}
