import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InsertFullsiteModal = ( { item, onClose } ) => {
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
				className="templatiq__modal templatiq__modal--install"
			>
				<div className="templatiq__modal__content">
					<div className="templatiq__modal__icon templatiq__modal__icon--warning">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_457_540)"><path d="M12 3.06766C12 2.40317 11.4594 1.86264 10.795 1.86264C10.1305 1.86264 9.58997 2.40317 9.58997 3.06766C9.58997 3.61594 9.61278 4.33792 9.16941 4.66046L8.70365 4.9993C8.219 5.35188 7.53519 5.20188 7.24262 4.67881L7.01772 4.27675C6.7391 3.77861 7.00523 3.12326 7.14059 2.56878C7.16295 2.47719 7.1748 2.38153 7.1748 2.28314C7.1748 1.61865 6.63428 1.07812 5.96979 1.07812C5.3053 1.07812 4.76477 1.61865 4.76477 2.28314C4.76477 2.39417 4.77986 2.50174 4.80809 2.6039C4.95811 3.1467 5.23419 3.78222 4.97543 4.2824L4.80172 4.61819C4.51816 5.16632 3.81066 5.32929 3.31588 4.96046L2.82316 4.59317C2.37951 4.26245 2.41013 3.53404 2.41013 2.98068C2.41013 2.31619 1.8696 1.77567 1.20511 1.77567C0.540527 1.77567 0 2.31619 0 2.98068C0 3.33173 0.150933 3.64809 0.391293 3.86846C0.666239 4.12054 0.977007 4.37886 1.06625 4.74104L2.29778 9.73924C2.40786 10.186 2.80861 10.5 3.26874 10.5H8.80645C9.26982 10.5 9.6725 10.1817 9.77945 9.73081L10.9414 4.83229C11.028 4.46732 11.3394 4.20557 11.6143 3.95037C11.8514 3.73024 12 3.41603 12 3.06766Z" fill="#F17D0E"></path></g><defs><clipPath id="clip0_457_540"><rect width="12" height="12" fill="white"></rect></clipPath></defs>
						</svg>
					</div>
					<h2 className="templatiq__modal__title">
						Recommendation
					</h2>
					<p className="templatiq__modal__desc">
						We recommend to use Onebase Theme to fully experience the design & feature of this template. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist.
					</p>
					<div className="templatiq__modal__actions">
						<a
							href={`?page=starter-templates&template_id=${template_id}`}
							target='_blank'
							className='templatiq-btn templatiq-btn-primary'
						>
							Yes, Install
						</a>
						<a
							href='/'
							target='_blank'
							className='templatiq-btn'
						>
							Continue without installing	
						</a>
					</div>
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

export default InsertFullsiteModal;
