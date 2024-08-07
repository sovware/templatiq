import ReactSVG from 'react-inlinesvg';
import { __ } from '@wordpress/i18n';
import checkIcon from '@icon/check-alt.svg';


const TemplateDetailsContent = ( props ) => {
	const { thumbnail } = props.item;

	return (
		<div className="templatiq__details__content">
			<div className="templatiq__details__img">
				<img
					src={ thumbnail }
					alt={__( "Template Pack Pro", 'templatiq' )}
				/>
			</div>
			<div className="templatiq__details__content__single">
				<h3 className="templatiq__details__content__single__title">
					{__( "Overview", 'templatiq' )}
				</h3>
				<p className="templatiq__details__content__single__desc">
					{__( "Using this ready template you'll be able to design your website in no time, This offers exclusive dynamic design, which makes it an excellent choice to create fascinating websites.", 'templatiq' )}
				</p>
				<p className="templatiq__details__content__single__desc">
					{__( "Display engaging and attractive landing pages to draw visitors' attention.", 'templatiq' )}
				</p>
			</div>

			<div className="templatiq__details__content__single">
				<h3 className="templatiq__details__content__single__title">
					{__( "Highlights", 'templatiq' )}
				</h3>
				<ul className="templatiq__details__content__single__list">
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						{__( "Fully interactive website", 'templatiq' )}
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						{__( "Attractive Customizable Elements", 'templatiq' )}
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						{__( "100% Responsive On All Devices", 'templatiq' )}
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						{__( "Cross-Browser Compatibility", 'templatiq' )}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TemplateDetailsContent;
