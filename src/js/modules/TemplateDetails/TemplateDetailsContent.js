import checkIcon from '@icon/check-alt.svg';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';


const TemplateDetailsContent = ( props ) => {
	const { thumbnail, description } = props.item;

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
				<div 
					className="templatiq__details__content__single__description"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
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
