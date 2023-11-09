import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { SearchBoxStyle } from '../../style';
import { TemplatePackStyle, TemplatePackFilterStyle } from './style';
import SingleTemplate from './components/SingleTemplate';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ReactPaginate from 'react-paginate';


import searchIcon from '@icon/search.svg';
import crownIcon from '@icon/crown.svg';
import arrowLeft from '@icon/angle-left.svg';
import arrowRight from '@icon/angle-right.svg';
import elementorIcon from "@icon/elementor.svg";
import directoristIcon from "@icon/directorist.svg";

import templateImg1 from "@images/template/1.svg";
import templateImg2 from "@images/template/2.svg";
import templateImg3 from "@images/template/3.svg";

export default function TemplatePackModule() {

	let handlePageClick = ( data ) => {
		return data;
	}
	return (
		<TemplatePackStyle className="templatiq__content">
			<Tabs className="templatiq__content__tab">
				<div className="templatiq__content__top">
					<div className="templatiq__content__top__filter">
						<h3 className="templatiq__content__top__filter__title">
							Template Pack
						</h3>
						<TemplatePackFilterStyle className="templatiq__content__top__filter__wrapper">
							<TabList className="templatiq__content__top__filter__tablist">
								<Tab className="templatiq__content__top__filter__item">
									<a href="#" className="templatiq__content__top__filter__link">All (24)</a>
								</Tab>
								<Tab className="templatiq__content__top__filter__item">
									<a href="#" className="templatiq__content__top__filter__link">Free (8)</a>
								</Tab>
								<Tab className="templatiq__content__top__filter__item">
									<a href="#" className="templatiq__content__top__filter__link">
										<ReactSVG src={crownIcon} width={12} height={12} />
										Pro (16)
									</a>
								</Tab>
							</TabList>
						</TemplatePackFilterStyle>
					</div>
					<div className="templatiq__content__top__search">
						<SearchBoxStyle className="templatiq__content__top__searchbox">
							<button className="templatiq__content__top__searchbox__button">
								<ReactSVG src={ searchIcon } width={18} height={18} />
							</button>
							<input type="text" className="templatiq__content__top__searchbox__input" placeholder="Search " />
						</SearchBoxStyle>
					</div>
				</div>

				<div className="templatiq__content__wrapper">
					<TabPanel className="templatiq__content__tab-panel">
						<SingleTemplate 
							img = {templateImg1} 
							title = 'DDoctors' 
							price = '20' 
							downloadCount = '24' 
							favoriteCount = '52' 
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						
						/>
						<SingleTemplate 
							img = {templateImg2} 
							title = 'DHotels' 
							price = '25' 
							downloadCount = '35' 
							favoriteCount = '63'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg3} 
							title = 'DClassified' 
							price = '32' 
							downloadCount = '28' 
							favoriteCount = '39' 
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg2} 
							title = 'Onelisting' 
							price = '' 
							downloadCount = '27' 
							favoriteCount = '42'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg1} 
							title = 'DCourse' 
							price = '' 
							downloadCount = '17' 
							favoriteCount = '12'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg3} 
							title = 'dList' 
							price = '' 
							downloadCount = '22' 
							favoriteCount = '32'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
					</TabPanel>
					<TabPanel className="templatiq__content__tab-panel">
						<SingleTemplate 
							img = {templateImg1} 
							title = 'Onelisting' 
							price = '' 
							downloadCount = '27' 
							favoriteCount = '42'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg2} 
							title = 'DCourse' 
							price = '' 
							downloadCount = '17' 
							favoriteCount = '12'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg3} 
							title = 'dList' 
							price = '' 
							downloadCount = '22' 
							favoriteCount = '32'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
					</TabPanel>
					<TabPanel className="templatiq__content__tab-panel">
						<SingleTemplate 
							img = {templateImg1} 
							title = 'DDoctors' 
							price = '20' 
							downloadCount = '24' 
							favoriteCount = '52' 
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						
						/>
						<SingleTemplate 
							img = {templateImg2} 
							title = 'DHotels' 
							price = '25' 
							downloadCount = '35' 
							favoriteCount = '63'
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
						<SingleTemplate 
							img = {templateImg3} 
							title = 'DClassified' 
							price = '32' 
							downloadCount = '28' 
							favoriteCount = '39' 
							requiredPlugins = {[
								{
									name: 'Directorist',
									icon: directoristIcon,
									url: '#'
								},
								{
									name: 'Elementor',
									icon: elementorIcon,
									url: '#'
								}
							]}
							categories = {[
								{
									name: 'Directorist Core',
									url: '#'
								},
								{
									name: 'Pricing Plan',
									url: '#'
								}
							]}
						/>
					</TabPanel>
					<ReactPaginate
						breakLabel="..."
						onPageChange={ handlePageClick }
						nextLabel={ <ReactSVG src={ arrowRight } /> }
						previousLabel={ <ReactSVG src={ arrowLeft } /> }
						pageRangeDisplayed={ 3 }
						pageCount={ 10 }
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
				</div>
			</Tabs>
		</TemplatePackStyle>
	);
}
