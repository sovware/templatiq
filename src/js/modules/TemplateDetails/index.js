import React from 'react';
import ReactSVG from 'react-inlinesvg';
import { TemplateDetailsStyle, TemplateDetailsHeaderStyle, TemplateDetailsWidgetStyle } from './style';

import crownIcon from '@icon/crown.svg';
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import fireIcon from "@icon/fire.svg";
import downloadIcon from "@icon/download-alt.svg";
import checkIcon from "@icon/check-alt.svg";
import elementorIcon from "@icon/elementor.svg";
import directoristIcon from "@icon/directorist.svg";

import templateImg1 from "@images/template/details1.svg";

export default function TemplateDetailsModule() {

	return (
		<TemplateDetailsStyle className="templatiq__details">
			<TemplateDetailsHeaderStyle className="templatiq__details__header">
				<div className="templatiq__details__header__info">
					<h2 className="templatiq__details__header__title">Template Pack Pro</h2>
					<div className="templatiq__details__header__meta">
						<span className="templatiq__details__header__meta__item">
							<ReactSVG src={ downloadIcon } width={16} height={16} />
							Used by 200 people
						</span>
						<span className="templatiq__details__header__meta__item">
							<ReactSVG src={ heartIcon } width={16} height={16} />
							Loved by 250 people
						</span>
					</div>
				</div>
				<div className="templatiq__details__header__action">
					<span className="templatiq__details__header__action__link templatiq-badge templatiq-badge-pro">
						<ReactSVG src={ crownIcon } width={16} height={16} />
						PRO
					</span>
					<a href="#" className="templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white">
						<ReactSVG src={ heartIcon } width={16} height={16} />
					</a>
					<a href="#" className="templatiq__details__header__action__link templatiq-btn templatiq-btn-white">
						Live Demo
					</a>
					<a href="#" className="templatiq__details__header__action__link templatiq-btn templatiq-btn-white">
						<ReactSVG src={ cartIcon } width={16} height={16} />
						Buy this item  $45
					</a>
					<a href="#" className="templatiq__details__header__action__link templatiq-btn templatiq-btn-primary">
						<ReactSVG src={ cartIcon } width={16} height={16} />
						Buy this item  <strong>$45</strong>
					</a>
				</div>
			</TemplateDetailsHeaderStyle>
			<div className="templatiq__details__wrapper">
				<div className="templatiq__details__content">
					<div className="templatiq__details__img">
						<img src={ templateImg1 } alt="Template Pack Pro" />
					</div>
					<div className="templatiq__details__content__single">
						<h3 className="templatiq__details__content__single__title">Overview</h3>
						<p className="templatiq__details__content__single__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.</p>
						<p className="templatiq__details__content__single__desc">eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
					</div>

					<div className="templatiq__details__content__single">
						<h3 className="templatiq__details__content__single__title">Highlights</h3>
						<ul className="templatiq__details__content__single__list">
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
							<li className="templatiq__details__content__single__list__item">
								<ReactSVG src={ checkIcon } width={22} height={22} />
								Fully interactive website
							</li>
						</ul>
					</div>
				</div>
				<TemplateDetailsWidgetStyle className="templatiq__details__widget">
					<div className="templatiq__details__widget__single templatiq__details__widget__subscribe">
						<div className="templatiq__details__widget__subscribe__info">
							<h3 className="templatiq__details__widget__subscribe__title">
								<ReactSVG src={ fireIcon } width={22} height={22} />
								Subscribe & Save BIG
							</h3>
							<span className="templatiq__details__widget__subscribe__desc">Get ultimate access to over 200 Premium templates and <strong>save 60%</strong></span>
						</div>
						<div className="templatiq__details__widget__subscribe__btn">
							<a href="#" className="templatiq__details__widget__subscribe__btn__link templatiq-btn templatiq-btn-warning">
								Get Unlimited Access
							</a>
						</div>
					</div>
					<div className="templatiq__details__widget__single templatiq__details__widget__quickinfo">
						<div className="templatiq__details__widget__header">
							<h3 className="templatiq__details__widget__title">Quick Information</h3>
						</div>
						<div className="templatiq__details__widget__content">
							<div className="templatiq__details__widget__content__single">
								<span className="templatiq__details__widget__content__title">Template Type:</span>
								<span className="templatiq__details__widget__content__info">Demo template type</span>
							</div>
							<div className="templatiq__details__widget__content__single">
								<span className="templatiq__details__widget__content__title">Category:</span>
								<span className="templatiq__details__widget__content__info">Demo category</span>
							</div>
							<div className="templatiq__details__widget__content__single">
								<span className="templatiq__details__widget__content__title">Builder:</span>
								<span className="templatiq__details__widget__content__info">Elementor</span>
							</div>

							<div className="templatiq__details__widget__content__single required-plugins">
								<span className="templatiq__details__widget__content__title">Required Plugins:</span>
								<div className="templatiq__details__widget__content__required-plugins">
									<a href="#" className="templatiq__details__widget__content__required-plugins__link templatiq-tooltip" data-info="Directorist">
										<ReactSVG src={ directoristIcon } width={30} height={30} />
									</a>
									<a href="#" className="templatiq__details__widget__content__required-plugins__link templatiq-tooltip" data-info="Elementor">
										<ReactSVG src={ elementorIcon } width={30} height={30} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</TemplateDetailsWidgetStyle>
			</div>
		</TemplateDetailsStyle>
	);
}
