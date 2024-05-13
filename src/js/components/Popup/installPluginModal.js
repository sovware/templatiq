import postData from '@helper/postData';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import closeIcon from '@icon/close.svg';

const InstallPluginModal = ( { item, onClose, is_directorist_required } ) => {

	const installPluginEndPoint = 'templatiq/dependency/install';

	let [ loading, setLoading ] = useState( false );
	let [ installingPlugin, setInstallingPlugin ] = useState( false );
	let [ installedPlugin, setInstalledPlugin ] = useState( false );
	const [ disableButton, setDisableButton ] = useState( true );

	let closeInsertTemplateModal = ( e ) => {
		e.preventDefault();
		let templatiqRoot = document.querySelector( '.templatiq' );

		templatiqRoot &&
			templatiqRoot.classList.remove( 'templatiq-overlay-enable' );

		onClose();
	};

	const handlePopUpForm = async ( e ) => {
		e.preventDefault();

		// Install current plugin
		await installPlugin( 'directorist' );
	};

	const installPlugin = async ( plugin ) => {
		setLoading( true );
		setDisableButton( true );
		try {
			const installResponse = await new Promise( ( resolve, reject ) => {
				postData( installPluginEndPoint, { plugin } ).then( ( res ) => {
					setLoading( false );
					if ( res.success ) {
						resolve( res ); // Resolve the Promise when installation is successful
					} else {
						reject( new Error( 'Installation failed' ) ); // Reject the Promise if installation fails
					}
				} );
			} );
		} catch ( error ) {
			console.error( 'Error installing plugin:', error );
			setLoading( false );
		}
	};

	return (
		<>
			<InsertTemplateModalStyle
				className={ `pluginInstall templatiq__modal templatiq__modal--required ${
					loading && installingPlugin ? 'templatiq__loading' : ''
				}` }
			>
				<form
					className="templatiq__modal__form"
					onSubmit={ handlePopUpForm }
				>
					<div className="templatiq__modal__content">
						{ ! installedPlugin ? 
							installingPlugin ? (
								<>
									Directorist is Installing
								</>
							) : (
							<>
								Opps Directorist is not Installed
							</>
						) : (
							<>
							 	Directorist Installed Successfully
							</>
						) }
					</div>
				</form>

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

export default InstallPluginModal;
