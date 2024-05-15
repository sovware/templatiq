import store from '@store/index';
import { select } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InsertProModal = ( { item, onClose } ) => {
	console.log('InsertProModal', item);

	const { isLoggedIn } = select(store).getUserInfo();
	
	let closeInsertTemplateModal = ( e ) => {
		e.preventDefault();
		let templatiqRoot = document.querySelector( '.templatiq' );

		templatiqRoot &&
			templatiqRoot.classList.remove( 'templatiq-overlay-enable' );

		onClose();
	};

	return (
		<>
			<InsertTemplateModalStyle
				className="templatiq__modal templatiq__modal--pro"
			>	
				<div className="templatiq__modal__content">
					<h2 className="templatiq__modal__title">
						Liked This Template
					</h2>
					<p className="templatiq__modal__desc">
						This is Pro template. Get access to this template.
					</p>
					<a href="#"
						className="templatiq-btn templatiq-btn-warning"
					>
						Buy This Item
					</a>

					{
						!isLoggedIn && (
							<>
								<p className="templatiq__modal__desc">
									Already a Premium Member?
								</p>
								<a 
									href="/signin"
									className="templatiq-btn"
								>
									Login
								</a>
							</>
						)
					}
				</div>
				<button
					className="templatiq__modal__cancel__button"
					onClick={ closeInsertTemplateModal }
				>
					<ReactSVG src={ closeIcon } width={ 20 } height={ 20 } />
				</button>
			</InsertTemplateModalStyle>
		</>
	);
};

export default InsertProModal;
