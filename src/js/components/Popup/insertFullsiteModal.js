import postData from '@helper/postData';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';
import recommendationIcon from '@icon/recommendation.svg';

const InsertFullsiteModal = ( { item, onClose } ) => {
	const { template_id } = item;
	const [ themeInstalling, setThemeInstalling ] = useState( false );

	console.log( 'template_market_obj?.directory_types: ', template_market_obj?.theme_status );

	const installOnebaseThemeEndPoint = 'templatiq/dependency/activate-theme';

	const installOneBaseTheme = async (e) => {
		setThemeInstalling(true);
		postData( installOnebaseThemeEndPoint ).then( ( res ) => {
			setThemeInstalling(false);
			console.log('installOneBaseTheme res', res)
			if ( res.success ) {
				closeInsertTemplateModal(e);
				window.open(`?page=starter-templates&template_id=${template_id}`, '_blank');
			} else {
				console.error( 'Installation failed' );
			}
		} );
	};

	const closeInsertTemplateModal = ( e ) => {
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
					<h2 className="templatiq__modal__title">
						<ReactSVG src={ recommendationIcon } width={ 30 } height={ 30 } />
						Recommendation
					</h2>
					<p className="templatiq__modal__desc">
						We recommend to use Onebase Theme to fully experience the design & feature of this template. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist.
					</p>
					<div className="templatiq__modal__actions">
						<button
							className='templatiq-btn templatiq-btn-primary'
							onClick={installOneBaseTheme}
							disabled={themeInstalling}
						>
							{themeInstalling ? 'Installing...' : 'Yes, Install'}
						</button>
						{
							!themeInstalling && 
							<a
								href='/'
								target='_blank'
								className='templatiq-btn'
							>
								Continue without installing	
							</a>
						}
						
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
