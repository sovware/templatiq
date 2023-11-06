import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { TemplatePackStyle, TemplatePackFilterStyle } from './style';

import searchIcon from '@icon/search.svg';

const TemplatePackLayout = ({ children }) => {
	return (
		<TemplatePackStyle className="templatiq__content">
			<div className="templatiq__content__top">
				<div className="templatiq__content__top__filter">
					<h3 className="templatiq__content__top__filter__title">
						Template Pack
					</h3>
					<TemplatePackFilterStyle className="templatiq__content__top__filter__wrapper">
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link active">All (24)</a>
						</li>
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link active">Free (8)</a>
						</li>
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link active">Pro (16)</a>
						</li>
					</TemplatePackFilterStyle>
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
		</TemplatePackStyle>
	);
}

export default TemplatePackLayout;
