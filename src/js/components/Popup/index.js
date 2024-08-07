import ReactSVG from 'react-inlinesvg';
import { PopupStyle } from './style';
import { __ } from '@wordpress/i18n';

import closeIcon from '@icon/close.svg';

const Popup = ( props ) => {
	let closePopupModal = () => {
		let templatiqRoot = document.querySelector( '.templatiq' );
		let templatiqModalOpen = document.querySelector( '.body.modal-open' );

		templatiqRoot &&
			templatiqRoot.classList.remove( 'templatiq-overlay-enable' );
		templatiqModalOpen &&
			templatiqModalOpen.classList.remove( 'modal-open' );
	};

	const handlePopUpForm = async ( e ) => {
		e.preventDefault();
	};

	return (
		<PopupStyle className="templatiq__modal">
			<form
				className="templatiq__modal__form"
				onSubmit={ handlePopUpForm }
			>
				<div className="templatiq__modal__content">
					<div className="">
						<h2 className="templatiq__modal__title">
							{__( 'Required Plugins', 'templatiq' )}
						</h2>
						<p className="templatiq__modal__desc">
							{__( 'To import this item you need to install all the Plugin listed below.', 'templatiq' )}
						</p>
						<p className="templatiq__modal__desc">
							<strong>{__( 'Note:', 'templatiq' )}</strong> {__( 'Make sure you have manually installed & activated the Pro Plugin listed above.', 'templatiq' )}
						</p>
					</div>
				</div>
			</form>

			<button
				className="templatiq__modal__cancel__button"
				onClick={ closePopupModal }
			>
				<ReactSVG src={ closeIcon } width={ 20 } height={ 20 } />
			</button>
		</PopupStyle>
	);
};

export default Popup;
