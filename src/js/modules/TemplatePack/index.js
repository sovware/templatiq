import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { SearchBoxStyle } from '../../style';
import { TemplatePackStyle, TemplatePackFilterStyle } from './style';
import SingleTemplate from './components/SingleTemplate';

import searchIcon from '@icon/search.svg';
import crownIcon from '@icon/crown.svg';

export default function TemplatePackModule() {
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
							<a href="#" className="templatiq__content__top__filter__link">Free (8)</a>
						</li>
						<li className="templatiq__content__top__filter__item">
							<a href="#" className="templatiq__content__top__filter__link">
								<ReactSVG src={crownIcon} width={12} height={12} />
								Pro (16)</a>
						</li>
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
				<SingleTemplate />
				<SingleTemplate />
				<SingleTemplate />
				<SingleTemplate />
				<SingleTemplate />
				<SingleTemplate />
			</div>
		</TemplatePackStyle>
	);
}
