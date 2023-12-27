import ReactSVG from 'react-inlinesvg';
import { TemplateDetailsWidgetStyle } from './style';

import fireIcon from '@icon/fire.svg';

const TemplateDetailsWidget = ( props ) => {
	const { price, builder, type, categories, required_plugins } = props.item;

	return (
		<TemplateDetailsWidgetStyle className="templatiq__details__widget">
			{ price ? (
				<div className="templatiq__details__widget__single templatiq__details__widget__subscribe">
					<div className="templatiq__details__widget__subscribe__info">
						<h3 className="templatiq__details__widget__subscribe__title">
							<ReactSVG
								src={ fireIcon }
								width={ 22 }
								height={ 22 }
							/>
							Subscribe & Save BIG
						</h3>
						<span className="templatiq__details__widget__subscribe__desc">
							Get ultimate access to over 200 Premium templates
							and <strong>save 60%</strong>
						</span>
					</div>
					<div className="templatiq__details__widget__subscribe__btn">
						<a
							href="#"
							className="templatiq__details__widget__subscribe__btn__link templatiq-btn templatiq-btn-warning"
						>
							Get Unlimited Access
						</a>
					</div>
				</div>
			) : (
				''
			) }

			<div className="templatiq__details__widget__single templatiq__details__widget__quickinfo">
				<div className="templatiq__details__widget__header">
					<h3 className="templatiq__details__widget__title">
						Quick Information
					</h3>
				</div>
				<div className="templatiq__details__widget__content">
					<div className="templatiq__details__widget__content__single">
						<span className="templatiq__details__widget__content__title">
							Template Type:
						</span>
						{ type && (
							<span className="templatiq__details__widget__content__info">
								{ type }
							</span>
						) }
					</div>
					<div className="templatiq__details__widget__content__single">
						<span className="templatiq__details__widget__content__title">
							Category:
						</span>
						{ categories &&
							categories.map( ( category, index ) => (
								<span
									key={ index }
									className="templatiq__details__widget__content__info"
								>
									{ category }
								</span>
							) ) }
					</div>
					<div className="templatiq__details__widget__content__single">
						<span className="templatiq__details__widget__content__title">
							Builder:
						</span>
						{ builder && (
							<span className="templatiq__details__widget__content__info">
								{ builder }
							</span>
						) }
					</div>

					<div className="templatiq__details__widget__content__single required-plugins">
						<span className="templatiq__details__widget__content__title">
							Required Plugins:
						</span>
						<div className="templatiq__details__widget__content__required-plugins">
							{ required_plugins &&
								required_plugins.map( ( plugin, index ) => {
									return (
										<a
											key={ index }
											href="#"
											className="templatiq__details__widget__content__required-plugins__link templatiq-tooltip"
											data-info={ plugin.name }
										>
											<img
												src={ `${ template_market_obj.assets_url }/svg/icon/${ plugin.slug }.svg` }
												alt={ plugin.name }
											/>
										</a>
									);
								} ) }
						</div>
					</div>
				</div>
			</div>
		</TemplateDetailsWidgetStyle>
	);
};

export default TemplateDetailsWidget;
