import store from '@store/index';
import { select } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InsertProModal = ( { item, onClose, onLoginClick } ) => {
	const { isLoggedIn } = select(store).getUserInfo();

	const { template_id } = item;
	
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
						Liked This Template?
					</h2>
					<p className="templatiq__modal__desc">
						This is a premium template. Get access to this premium template.
					</p>
					<a 
						href={`https://templatiq.com/checkout?edd_action=add_to_cart&download_id=${template_id}`} target='_blank'
						className="templatiq-btn templatiq-btn-warning templatiq-btn-full semi-bold"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16.417" height="16.5" viewBox="1063.75 119.75 16.417 16.5">
							<path d="M1065.75 119.756c.1.008.24.028.39.096.2.09.37.234.48.415.09.139.13.274.15.372.02.083.03.177.04.255 0 .005.01.01.01.015l.26 1.841h11.71c.11 0 .23 0 .34.009.12.011.3.038.48.144.23.134.41.346.5.597.07.199.06.381.05.501-.01.107-.04.227-.06.332l-1 5.257c-.06.325-.11.609-.18.843-.06.248-.15.49-.31.718a2.2 2.2 0 0 1-.94.783c-.26.112-.51.154-.77.173-.24.018-.53.018-.86.018h-6.47c-.35 0-.65 0-.9-.019a2.297 2.297 0 0 1-.8-.186 2.26 2.26 0 0 1-.96-.839c-.15-.243-.23-.5-.29-.762a10.8 10.8 0 0 1-.14-.893l-.79-5.822-.34-2.354h-.85a.753.753 0 0 1-.75-.75c0-.414.34-.75.75-.75h1c.07 0 .17 0 .25.006Zm1.54 4.494.67 4.947c.05.38.09.622.13.806.03.175.07.24.09.274.07.122.19.219.32.28.03.016.1.039.28.053.19.014.43.015.82.015h6.41c.37 0 .6 0 .78-.014.17-.012.24-.034.27-.05a.75.75 0 0 0 .32-.261c.02-.032.05-.093.1-.257.04-.173.09-.401.15-.759l.96-5.034h-11.3Zm.96 10.5a1.5 1.5 0 1 1 2.999-.001 1.5 1.5 0 0 1-2.999.001Zm6 0a1.5 1.5 0 1 1 2.999-.001 1.5 1.5 0 0 1-2.999.001Z" fill="#0b0d15" fill-rule="evenodd" data-name="Path 1659"/>
						</svg>
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
