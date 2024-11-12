import sanitizeHtmlEntities from '@helper/sanitizeHtmlEntities';
import store from '@store/index';
import { select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { TemplateDetailsWidgetStyle } from './style';

import { useState } from '@wordpress/element';

const TemplateDetailsWidget = ( props ) => {
	const { builder, type, categories, required_plugins } = props.item;

	const { hasAllAccess } = select(store).getUserInfo();
	const allCategories = select(store).getLibraryData()?.categories;

	// Component for individual required plugin
	const RequiredPlugin = ({ plugin }) => {
		const [isImageLoaded, setIsImageLoaded] = useState(false);
	
		return (
			<span
				className={`templatiq__details__widget__content__required-plugins__link templatiq-tooltip ${!isImageLoaded ? 'loading' : ''}`}
				data-info={ plugin?.name }
			>
				<img
					src={ `${ templatiq_obj.assets_url }/svg/icon/${ plugin?.slug }.svg` }
					alt={ plugin?.name }
					width={ 30 }
					height={ 30 }
					onError={(e) => {
						e.target.onerror = null; // prevents looping
						e.target.src = `${templatiq_obj.assets_url}/svg/icon/plug-alt.svg`;
					}}
					onLoad={() => setIsImageLoaded(true)}
				/>
				{
					!isImageLoaded && (
						<span className="image-loader"></span>
					)
				}
			</span>
		);
	};

	// Get category name from slug
	const getCategoryName = (slug) => {
		for (const category in allCategories) {
			if (allCategories[category][slug]) {
				// Return the category name if found
				return allCategories[category][slug];
			}
		}
	
		// Return null or an appropriate message if not found
		return null;
	};

	return (
		<TemplateDetailsWidgetStyle className="templatiq__details__widget">
			{/* { !hasAllAccess ? (
				<div className="templatiq__details__widget__single templatiq__details__widget__subscribe">
					<div className="templatiq__details__widget__subscribe__info">
						<h3 className="templatiq__details__widget__subscribe__title">
							<ReactSVG
								src={ fireIcon }
								width={ 22 }
								height={ 22 }
							/>
							{__( "Subscribe & Save BIG", 'templatiq' )}
						</h3>
						<span className="templatiq__details__widget__subscribe__desc">
							{__( "Get ultimate access to over 200 Premium templates and", 'templatiq' )}
							 <strong>{__( "save 60%", 'templatiq' )}</strong>
						</span>
					</div>
					<div className="templatiq__details__widget__subscribe__btn">
						<a
							href="https://templatiq.com/pricing/"
							target="_blank"
							className="templatiq__details__widget__subscribe__btn__link templatiq-btn templatiq-btn-warning"
						>
							{__( "Get Unlimited Access", 'templatiq' )}
						</a>
					</div>
				</div>
			) : (
				''
			) } */}

			<div className="templatiq__details__widget__single templatiq__details__widget__quickinfo">
				<div className="templatiq__details__widget__header">
					<h3 className="templatiq__details__widget__title">
						{__( "Quick Information", 'templatiq' )}
					</h3>
				</div>
				<div className="templatiq__details__widget__content">
					<div className="templatiq__details__widget__content__single">
						<span className="templatiq__details__widget__content__title">
							{__( "Template Type: ", 'templatiq' )}
						</span>
						{ type && (
							<span className="templatiq__details__widget__content__info">
								{ type }
							</span>
						) }
					</div>
					<div className="templatiq__details__widget__content__single">
						<span className="templatiq__details__widget__content__title">
							{__( "Category: ", 'templatiq' )}
						</span>
						{ categories &&
							categories.map( ( category, index ) => (
								<span
									key={ index }
									className="templatiq__details__widget__content__info"
								>
									{ sanitizeHtmlEntities(getCategoryName(category) || null) }
								</span>
							) ) }
					</div>
					<div className="templatiq__details__widget__content__single">
						<span className="templatiq__details__widget__content__title">
							{__( "Builder: ", 'templatiq' )}
						</span>
						{ builder && (
							<span className="templatiq__details__widget__content__info">
								{ builder }
							</span>
						) }
					</div>

					<div className="templatiq__details__widget__content__single required-plugins">
						<span className="templatiq__details__widget__content__title">
							{__( "Required Plugins: ", 'templatiq' )}
						</span>
						<div className="templatiq__details__widget__content__required-plugins">
							{ required_plugins &&
							required_plugins.map( ( plugin, index ) => (
								<RequiredPlugin key={ index } plugin={ plugin } />
							) ) }
						</div>
					</div>
				</div>
			</div>
		</TemplateDetailsWidgetStyle>
	);
};

export default TemplateDetailsWidget;
