import postData from '@helper/postData';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';
import recommendationIcon from '@icon/recommendation.svg';
import requiredIcon from '@icon/required.svg';

const insertFullTemplateModal = ( { item, onClose } ) => {
	const { template_id } = item;
	const [ themeInstalling, setThemeInstalling ] = useState( false );

	const currentBuilder = templatiq_obj?.builder;
	const pixetiqStatus = templatiq_obj?.pixetiq_status;
	const bricksInstalled = templatiq_obj?.current_theme === 'Bricks' || templatiq_obj?.current_theme === 'Bricks Child Theme';

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
				{
					currentBuilder === "bricks" && !bricksInstalled ? 
					<div className="templatiq__modal__content">
						<h2 className="templatiq__modal__title">
							<ReactSVG src={ requiredIcon } width={ 30 } height={ 30 } />
							{__( 'Required', 'templatiq' )}
						</h2>
						<p className="templatiq__modal__desc">
							{__( 'Bricks Theme Must be Installed', 'templatiq' )}
						</p>
					</div> :

					<div className="templatiq__modal__content">
						<h2 className="templatiq__modal__title">
							<ReactSVG src={ recommendationIcon } width={ 30 } height={ 30 } />
							{__( 'Recommendation', 'templatiq' )}
						</h2>
						<p className="templatiq__modal__desc">
							{__( 'We recommend using the Pixetiq theme to fully experience the design and features of this template. While other themes are compatible, they might not match the demo.', 'templatiq' )}
						</p>
						<div className="templatiq__modal__actions">
							<button
								className='templatiq-btn templatiq-btn-primary'
								onClick={
									pixetiqStatus === 'not-installed'
										? installTheme
										: pixetiqStatus === 'installed-but-inactive' 
										? activateTheme
										: null
								}
								disabled={themeInstalling}
							>
								{ pixetiqStatus === 'not-installed'
										? themeInstalling ? __( 'Installing...' , 'templatiq' ) : __( 'Yes, Install' , 'templatiq' )
										: themeInstalling ? __( 'Activating...' , 'templatiq' )  : __( 'Yes, Activate' , 'templatiq' )}
							</button>
							{
								!themeInstalling && 
								<button
									className='templatiq-btn'
									onClick={redirectImportPage}
								> 
									{__( 'Continue without ' , 'templatiq' )} {pixetiqStatus === 'not-installed' ? 'installing' : 'activating'}	
								</button>
							}
							
						</div>
					</div>
				}

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
