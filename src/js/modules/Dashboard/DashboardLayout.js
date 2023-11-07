import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { DashboardStyle, DashboardFilterStyle } from './style';

import searchIcon from '@icon/search.svg';

const DashboardLayout = ({ children }) => {
	return (
		<DashboardStyle className="templatiq__content">
			<div className="templatiq__content__top">
				<div className="templatiq__content__top__filter">
					<h3 className="templatiq__content__top__filter__title">
						Template Pack
					</h3>
					<DashboardFilterStyle className="templatiq__content__top__filter__wrapper">
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link active">All (24)</a>
						</li>
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link active">Free (8)</a>
						</li>
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link active">Pro (16)</a>
						</li>
					</DashboardFilterStyle>
				</div>
				<div className="templatiq__content__top__search">
					<div className="templatiq__content__top__searchbox">
						<button className="templatiq__content__top__searchbox__button">
							<ReactSVG src={ searchIcon } width={18} height={18} />
						</button>
						<input type="text" className="templatiq__content__top__searchbox__input" placeholder="Search Template Pack" />
					</div>
				</div>
			</div>

			<div className="templatiq__content__wrapper">
				{ children }
			</div>
		</DashboardStyle>
	);
}

export default DashboardLayout;
