import ReactSVG from 'react-inlinesvg';

import checkIcon from '@icon/check-alt.svg';


const TemplateDetailsContent = ( props ) => {
	const { thumbnail } = props.item;

	return (
		<div className="templatiq__details__content">
			<div className="templatiq__details__img">
				<img
					src={ thumbnail }
					alt="Template Pack Pro"
				/>
			</div>
			<div className="templatiq__details__content__single">
				<h3 className="templatiq__details__content__single__title">
					Overview
				</h3>
				<p className="templatiq__details__content__single__desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo con. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatu.
				</p>
				<p className="templatiq__details__content__single__desc">
					eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex
					ea commodo con
				</p>
			</div>

			<div className="templatiq__details__content__single">
				<h3 className="templatiq__details__content__single__title">
					Highlights
				</h3>
				<ul className="templatiq__details__content__single__list">
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
					<li className="templatiq__details__content__single__list__item">
						<ReactSVG
							src={ checkIcon }
							width={ 22 }
							height={ 22 }
						/>
						Fully interactive website
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TemplateDetailsContent;
