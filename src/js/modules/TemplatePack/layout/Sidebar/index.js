import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { SidebarStyle, SidebarItemStyle } from './style';

import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import filterIcon from '@icon/filter.svg';

const Sidebar = () => {
	return (
		<SidebarStyle className="templatiq__sidebar">
			<div className="templatiq__sidebar__top">
				<h3 className="templatiq__sidebar__top__title">
					<ReactSVG src={ filterIcon } width={18} height={18} />
					Filter
				</h3>
				<a href="#" className="templatiq__sidebar__top__clear">Clear</a>
			</div>
			<div className="templatiq__sidebar__wrapper">
				<Tabs>
					<TabList className="templatiq__sidebar__nav">
						<Tab className="templatiq__sidebar__nav__item">
							<a href="#" className="templatiq__sidebar__nav__link">Plugins</a>
						</Tab>
						<Tab className="templatiq__sidebar__nav__item">
							<a href="#" className="templatiq__sidebar__nav__link">Categories</a>
						</Tab>
					</TabList>
					<TabPanel>
						<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__plugins">
							<Accordion transition transitionTimeout={250} className="templatiq__sidebar__accordion">
								<AccordionItem initialEntered header="Directorist" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" id="1" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label for="1" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input id="2" type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label for="2" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input id="3" type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label for="3" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
								<AccordionItem header="WooCommerce" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
								<AccordionItem header="HelpGent" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
								<AccordionItem header="Legal Pages" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
							</Accordion>
						</SidebarItemStyle>
					</TabPanel>
					<TabPanel>
						<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__categories">
							<div className="templatiq__sidebar__categories__wrapper">
								<div className="templatiq__sidebar__filter__single templatiq__checkbox">
									<input type="checkbox" id="directorist" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
									<label for="directorist" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Directorist</label>
									<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
								</div>
								<div className="templatiq__sidebar__filter__single templatiq__checkbox">
									<input type="checkbox" id="woocommerce" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
									<label for="woocommerce" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce</label>
									<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
								</div>
								<div className="templatiq__sidebar__filter__single templatiq__checkbox">
									<input type="checkbox" id="helpgent" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
									<label for="helpgent" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">HelpGent</label>
									<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
								</div>
								<div className="templatiq__sidebar__filter__single templatiq__checkbox">
									<input type="checkbox" id="legal_pages" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
									<label for="legal_pages" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Legal Pages</label>
									<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
								</div>
							</div>
						</SidebarItemStyle>
					</TabPanel>
				</Tabs>
			</div>
		</SidebarStyle>
	);
}

export default Sidebar;
