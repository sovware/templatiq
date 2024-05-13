import AuthModal from '@components/Popup/AuthModal';
import postData from '@helper/postData';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';

import InsertTemplateModal from '@components/Popup/InsertTemplateModal';
import InsertProModal from '@components/Popup/insertProModal';
import InstallPluginModal from '@components/Popup/installPluginModal';
import downloadAltIcon from '@icon/download-alt.svg';
import downloadIcon from '@icon/download.svg';

const InsertTemplate = ( {
	item,
	isPro,
	templateRef,
	className,
	innerText,
	solidIcon,
} ) => {
	let { template_id, required_plugins, type, is_directorist_required } = item;

	const dependencyCheckEndPoint = 'templatiq/dependency/check';

	const { isLoggedIn } = select( store ).getUserInfo();
	const [ insertModalOpen, setInsertModalOpen ] = useState( false );
	const [ authModalOpen, setAuthModalOpen ] = useState( false );
	const [ requiredPlugins, setRequiredPlugins ] = useState( [] );
	const [ installDirectorist, setInstallDirectorist ] = useState( false );
	const [ proTemplate, setProTemplate ] = useState( false );

	const addInsertModal = async ( e ) => {
		e.stopPropagation();
		console.log('addInsertModal', template_id, isPro)

		if (isPro) {
			console.log('Template is Pro', isPro, template_id)
			setProTemplate(true);
		}

		document
			.querySelector( '.templatiq' )
			.classList.add( 'templatiq-overlay-enable' );

		// Add the class to the root div using templateRef
		if ( templateRef && templateRef.current ) {
			templateRef.current.classList.add( 'insert-modal-open' );
		}

		try {
			await handlePlugins( required_plugins );
			setInsertModalOpen( true );
		} catch ( error ) {
			// Handle error if needed
			console.error( 'Error fetching installable plugins:', error );
		}
	};

	const addAuthModal = ( e ) => {
		e.stopPropagation();
		document
			.querySelector( '.templatiq' )
			.classList.add( 'templatiq-overlay-enable' );
		setAuthModalOpen( true );
	};

	const handleInsertModalClose = () => {
		// Callback function to update the state when the modal is closed
		setInsertModalOpen( false );
	};

	const handleAuthModalClose = () => {
		// Callback function to update the state when the modal is closed
		setAuthModalOpen( false );
	};

	const handlePlugins = async ( plugins ) => {
		postData( dependencyCheckEndPoint, { plugins } ).then( ( data ) => {
			console.log('handlePlugins', data)
			setRequiredPlugins( data );
		} );
	};

	useEffect( () => {
		handlePlugins( required_plugins );
	}, [] );

	useEffect( () => {
		if (is_directorist_required) {
			const directoristPlugin = requiredPlugins.find(plugin => plugin.slug === 'directorist');
    		setInstallDirectorist(directoristPlugin);
		}
	}, [requiredPlugins] );



	return (
		<>
			{!proTemplate && insertModalOpen && (
				installDirectorist ? (
					<InstallPluginModal
						install_directorist={installDirectorist}
						onClose={handleInsertModalClose}
					/>
				) : (
					<InsertTemplateModal
						item={item}
						required_plugins={requiredPlugins}
						onClose={handleInsertModalClose}
					/>
				)
			)}

			{proTemplate && insertModalOpen && (
				<InsertProModal 
					onClose={handleInsertModalClose}
				/>
			)}

			{ authModalOpen && (
				<AuthModal
					modalEnable={ true }
					onClose={ handleAuthModalClose }
				/>
			) }
			{
				type !== 'pack' ?
					<button
						id={ template_id }
						className={
							className
								? className
								: 'templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button'
						}
						onClick={ ( e ) =>
							! isLoggedIn ? addAuthModal( e ) : addInsertModal( e )
						}
					>
						<ReactSVG
							src={ ! solidIcon ? downloadAltIcon : downloadIcon }
							width={ 14 }
							height={ 14 }
						/>
						{ innerText ? innerText : 'Insert' }
					</button>
				:
				<a
					href={`?page=starter-templates&template_id=${template_id}`}
					target='_blank'
					className={
						className
							? className
							: 'templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button'
					}
					onClick={ ( e ) =>
						! isLoggedIn ? addAuthModal( e ) : null
					}
				>
					<ReactSVG
						src={ ! solidIcon ? downloadAltIcon : downloadIcon }
						width={ 14 }
						height={ 14 }
					/>
					{ innerText ? innerText : `Insert Full Site` }
				</a>
		
			}
			
		</>
	);
};

export default InsertTemplate;
