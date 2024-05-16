import store from '@store/index';
import { select } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InsertProModal = ( { item, onClose, onLoginClick } ) => {
	const { isLoggedIn } = select(store).getUserInfo();

	const { purchase_url } = item;
	
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
						This is a premium template. Get access to this premium template.
					</p>
					<a 
						href={purchase_url}
						className="templatiq-btn templatiq-btn-warning templatiq-btn-full semi-bold"
					>
						Buy This Item
					</a>

					{
						!isLoggedIn && (
							<div className="templatiq__modal__pro-auth">
								<p className="templatiq__modal__desc">
									Already a Premium Member?
								</p>
								<button
									onClick={ onLoginClick }
									className="templatiq-btn templatiq-btn-full"
								>
									Login
								</button>
							</div>
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
