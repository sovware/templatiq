import postData from '@helper/postData';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { InsertTemplateModalStyle } from './style';

import checkIcon from '@icon/check.svg';
import closeIcon from '@icon/close.svg';
import trashIcon from '@icon/trash.svg';

const InstallDirectoristModal = ( { onClose, install_directorist } ) => {
	const installPluginEndPoint = 'templatiq/dependency/install';

	let [ installingPlugin, setInstallingPlugin ] = useState( false );
	let [ installedPlugin, setInstalledPlugin ] = useState( false );

	let closeInsertTemplateModal = ( e ) => {
		e && e.preventDefault();
		let templatiqRoot = document.querySelector( '.templatiq' );

		templatiqRoot && templatiqRoot.classList.remove( 'templatiq-overlay-enable' );

		onClose();
	};

	const handlePopUpForm = async ( e ) => {
		e.preventDefault();

		// Install current plugin
		await installPlugin( install_directorist );
	};

	const installPlugin = async ( plugin ) => {
		setInstallingPlugin(true);
		postData( installPluginEndPoint, { plugin } ).then( ( res ) => {
			setInstallingPlugin(false);
			if ( res.success ) {
				setInstalledPlugin(true);
				setTimeout( () => {
					window.location.reload();
					closeInsertTemplateModal();
				}, 600 );
			} else {
				console.error( 'Installation failed' );
			}
		} );
	};

	return (
		<>
			<InsertTemplateModalStyle
				className="templatiq__modal templatiq__modal--install"
			>
				<form
					className="templatiq__modal__form"
					onSubmit={ handlePopUpForm }
				>
					<div className="templatiq__modal__content">
						{ ! installedPlugin ? 
							installingPlugin ? (
								<>
									<h2 className="templatiq__modal__title templatiq__modal__title--installing">
										Installing the directorist Plugin
									</h2>
									<p className="templatiq__modal__desc">
										Installing directorist you need to install directorist. Installing directorist you need to install directorist.
									</p>
									<button
										disabled
										className="templatiq__modal__action templatiq__modal__action--install templatiq-btn templatiq-btn-primary templatiq-btn-loading"
									>
										Installing
									</button>
								</>
							) : (
							<>
								<div className="templatiq__modal__icon templatiq__modal__icon--warning">
									<ReactSVG src={ trashIcon } width={ 30 } height={ 30 } />
								</div>
								<h2 className="templatiq__modal__title">
									Oops! <span className="text-warning">Directorist is not Installed</span>
								</h2>
								<p className="templatiq__modal__desc">
									To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist. To install directorist you need to install directorist.
								</p>
								<button
									type="submit"
									className="templatiq__modal__action templatiq__modal__action--install templatiq-btn  templatiq-btn-primary"
								>
									Install Now
								</button>
							</>
						) : (
							<>
							 	<div className="templatiq__modal__icon templatiq__modal__icon--success">
								 	<ReactSVG src={ checkIcon } width={ 30 } height={ 30 } />
								</div>
								<h2 className="templatiq__modal__title">
									<span className="text-success">Successs!</span>
								</h2>
								<p className="templatiq__modal__desc">
									Directorist successful installed & activated
								</p>
								<button
									disabled
									className="templatiq__modal__action templatiq__modal__action--install templatiq-btn  templatiq-btn-primary"
								>
									<ReactSVG src={ checkIcon } width={ 16 } height={ 16 } />
									Installed & Activated
								</button>
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

export default InstallDirectoristModal;
