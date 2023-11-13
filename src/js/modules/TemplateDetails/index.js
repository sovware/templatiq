import ReactSVG from 'react-inlinesvg';
import { TemplateDetailsStyle, TemplateDetailsHeaderStyle, TemplateDetailsWidgetStyle } from './style';
import TemplateDetailsLayout from './TemplateDetailsLayout';
import Popup from "@components/Popup";

import { useQuery } from '@tanstack/react-query';
import templatesData from '@data/template.json';

import crownIcon from '@icon/crown.svg';
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import fireIcon from "@icon/fire.svg";
import downloadIcon from "@icon/download.svg";
import downloadAltIcon from "@icon/download-alt.svg";
import checkIcon from "@icon/check-alt.svg";
import elementorIcon from "@icon/elementor.svg";
import directoristIcon from "@icon/directorist.svg";

import templateImg1 from "@images/template/details1.svg";

export default function TemplateDetailsModule(props) {
	const { templateSlug } = props;

	const { isLoading, error, data } = useQuery(['templates'], () => templatesData);
	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;

	// Retrive Template Details Data
	const { id, slug, img, title, price, downloadCount, favoriteCount, builders, types, categories, requiredPlugins } = data.filter(template => template.slug == templateSlug)[0];

	let addModal = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
    }

	return (
		<TemplateDetailsLayout>
			<Popup />
			<TemplateDetailsStyle className="templatiq__details">
				<TemplateDetailsHeaderStyle className="templatiq__details__header">
					<div className="templatiq__details__header__info">
						<h2 className="templatiq__details__header__title">{title}</h2>
						<div className="templatiq__details__header__meta">
							{
								downloadCount ? 
								<span className="templatiq__details__header__meta__item">
									<ReactSVG src={ downloadAltIcon } width={16} height={16} />
									Used by {downloadCount} people
								</span> :
								''
							}
							{
								favoriteCount ? 
								<span className="templatiq__details__header__meta__item">
									<ReactSVG src={ heartIcon } width={16} height={16} />
									Loved by {favoriteCount} people
								</span> :
								''
							}
							
						</div>
					</div>
					<div className="templatiq__details__header__action">
						{
							price ? 
							<span className="templatiq__details__header__action__link templatiq-badge templatiq-badge-dark">
								<ReactSVG src={ crownIcon } width={16} height={16} />
								PRO
							</span> :
							''
						}
						<a href="#" className="templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white">
							<ReactSVG src={ heartIcon } width={16} height={16} />
						</a>
						<a href="#" className="templatiq__details__header__action__link live-demo-btn templatiq-btn templatiq-btn-white">
							Live Demo
						</a> 
						{
							price ?
							<a href="#" className="templatiq__details__header__action__link purchase-btn templatiq-btn templatiq-btn-primary">
								<ReactSVG src={ cartIcon } width={16} height={16} />
								Buy this item  ${price}
							</a> :
							<a href="#" className="templatiq__details__header__action__link insert-btn templatiq-btn templatiq-btn-success" onClick={addModal}>
								<ReactSVG src={ downloadIcon } width={16} height={16} />
								Insert
							</a>
						}
						
						
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
						{
							price ? 
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
							</div> :
							''
						}
						
						<div className="templatiq__details__widget__single templatiq__details__widget__quickinfo">
							<div className="templatiq__details__widget__header">
								<h3 className="templatiq__details__widget__title">Quick Information</h3>
							</div>
							<div className="templatiq__details__widget__content">
								<div className="templatiq__details__widget__content__single">
									<span className="templatiq__details__widget__content__title">Template Type:</span>
									{types && types.map((type, index) => (
										<span key={index} className="templatiq__details__widget__content__info">{type.name}</span>
									))}
									
								</div>
								<div className="templatiq__details__widget__content__single">
									<span className="templatiq__details__widget__content__title">Category:</span>
									{categories && categories.map((category, index) => (
										<span key={index} className="templatiq__details__widget__content__info">{category.name}</span>
									))}
								</div>
								<div className="templatiq__details__widget__content__single">
									<span className="templatiq__details__widget__content__title">Builder:</span>
									{builders && builders.map((builder, index) => (
										<span key={index} className="templatiq__details__widget__content__info">{builder.name}</span>
									))}
								</div>

								<div className="templatiq__details__widget__content__single required-plugins">
									<span className="templatiq__details__widget__content__title">Required Plugins:</span>
									<div className="templatiq__details__widget__content__required-plugins">
										{requiredPlugins && requiredPlugins.map((plugin, index) => (
												<a key={index} href={plugin.url} className="templatiq__details__widget__content__required-plugins__link templatiq-tooltip" data-info="Directorist">
												<ReactSVG src={ plugin.icon } width={30} height={30} />
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</TemplateDetailsWidgetStyle>
				</div>
			</TemplateDetailsStyle>
		</TemplateDetailsLayout>
	);
}
