import postData from '@helper/postData';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';
import recommendationIcon from '@icon/recommendation.svg';

const insertFullTemplateModal = ( { item, onClose } ) => {
	const { template_id } = item;
	const [ themeInstalling, setThemeInstalling ] = useState( false );


	const themeStatus = templatiq_obj?.theme_status;

	const activateThemeEndPoint = 'templatiq/dependency/activate-theme';

	const installTheme = async (e) =>  {
		setThemeInstalling(true);
		let themeInstallResponse = await wp.updates.installTheme( {
			slug: 'pixetiq'
		});

		if(themeInstallResponse.customizeUrl) {
			await activateTheme(e);
		}
	}

	const activateTheme = async (e) => {
		setThemeInstalling(true);
		postData( activateThemeEndPoint ).then( ( res ) => {
			setThemeInstalling(false);
			if ( res.success ) {
				closeInsertTemplateModal(e);
				window.location.href = `?page=templatiq-library&template_id=${template_id}`;
			} else {
				console.error( 'Installation failed' );
			}
		} );
	};

	const redirectImportPage = (e) => {
		window.location.href = `?page=templatiq-library&template_id=${template_id}&ci=1`;
		closeInsertTemplateModal(e);
	}

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
						{__( 'Recommendation', 'templatiq' )}
					</h2>
					<p className="templatiq__modal__desc">
						{__( 'We recommend to use Pixetiq Theme to fully experience the design & feature of this template. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist.', 'templatiq' )}
					</p>
					<div className="templatiq__modal__actions">
						<button
							className='templatiq-btn templatiq-btn-primary'
							onClick={
								themeStatus === 'not-installed'
									? installTheme
									: themeStatus === 'installed-but-inactive' 
									? activateTheme
									: null
							}
							disabled={themeInstalling}
						>
							{ themeStatus === 'not-installed'
									? themeInstalling ? __( 'Installing...' , 'templatiq' ) : __( 'Yes, Install' , 'templatiq' )
									: themeInstalling ? __( 'Activating...' , 'templatiq' )  : __( 'Yes, Activate' , 'templatiq' )}
						</button>
						{
							!themeInstalling && 
							<button
								className='templatiq-btn'
								onClick={redirectImportPage}
							> 
								{__( 'Continue without ' , 'templatiq' )} {themeStatus === 'not-installed' ? 'installing' : 'activating'}	
							</button>
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

export default insertFullTemplateModal;
