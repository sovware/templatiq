import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { SidebarStyle, SidebarCollapseStyle } from './style';

import filterIcon from '@icon/filter.svg';

const Sidebar = () => {
	return (
		<SidebarStyle className="templatiq__sidebar">
			<div className="templatiq__sidebar__filter">
				<h3 className="templatiq__sidebar__filter__title">
					<ReactSVG src={ filterIcon } width={18} height={18} />
					Filter
				</h3>
				<a href="#" className="templatiq__sidebar__filter__clear">Clear</a>
			</div>
			<div className="templatiq__sidebar__wrapper">
				<div className="templatiq__sidebar__nav">
					<a href="#" className="templatiq__sidebar__nav__link active">Plugins</a>
					<a href="#" className="templatiq__sidebar__nav__link">Categories</a>
				</div>
				
				<SidebarCollapseStyle className="templatiq__sidebar__collapse">
					<div className="templatiq__sidebar__collapse__single">
						<h3 className="templatiq__sidebar__collapse__title">Directorist</h3>

						<div className="templatiq__sidebar__collapse__item">
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Pricing Plan</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">WooCommerce Pricing Plans</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Business Directory</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Marketplace</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Claim Listing</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
						</div>
					</div>
					<div className="templatiq__sidebar__collapse__single">
						<h3 className="templatiq__sidebar__collapse__title">WooCommerce</h3>

						<div className="templatiq__sidebar__collapse__item">
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Pricing Plan</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">WooCommerce Pricing Plans</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Business Directory</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Marketplace</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Claim Listing</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
						</div>
					</div>
					<div className="templatiq__sidebar__collapse__single">
						<h3 className="templatiq__sidebar__collapse__title">HelpGent</h3>

						<div className="templatiq__sidebar__collapse__item">
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Pricing Plan</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">WooCommerce Pricing Plans</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Business Directory</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Marketplace</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
							<div className="templatiq__sidebar__collapse__item__single">
								<input type="checkbox" className="templatiq__sidebar__collapse__item__single__checkbox" />
								<label className="templatiq__sidebar__collapse__item__single__label">Claim Listing</label>
								<span className="templatiq__sidebar__collapse__item__single__count">12</span>
							</div>
						</div>
					</div>
				</SidebarCollapseStyle>
			</div>
		</SidebarStyle>
	);
}

export default Sidebar;
