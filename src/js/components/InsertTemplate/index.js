import AuthModal from '@components/Popup/AuthModal';
import postData from '@helper/postData';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';

import InsertFullsiteModal from '@components/Popup/insertFullsiteModal';
import InsertProModal from '@components/Popup/insertProModal';
import InsertTemplateModal from '@components/Popup/insertTemplateModal';
import InstallDirectoristModal from '@components/Popup/installDirectoristModal';
import downloadAltIcon from '@icon/download-alt.svg';
import downloadIcon from '@icon/download.svg';

const InsertTemplate = ({
	item,
	isPro,
	templateRef,
	className,
	innerText,
	solidIcon,
}) => {
	let { template_id, type, required_plugins, is_directorist_required } = item;

	const onebaseInstalled = true;
	const insertFullSite = type === 'pack';
	const dependencyCheckEndPoint = 'templatiq/dependency/check';

	const { isLoggedIn } = select(store).getUserInfo();
	const [insertModalOpen, setInsertModalOpen] = useState(false);
	const [authModalOpen, setAuthModalOpen] = useState(false);
	const [requiredPlugins, setRequiredPlugins] = useState(required_plugins);
	const [installDirectorist, setInstallDirectorist] = useState(false);

	const addInsertModal = async (e) => {
		e.stopPropagation();

		const renderModal = () => {
			document.querySelector('.templatiq').classList.add('templatiq-overlay-enable');
			// Add the class to the root div using templateRef
			if (templateRef && templateRef.current) {
				templateRef.current.classList.add('insert-modal-open');
			}
			setInsertModalOpen(true);
		}

		if (insertFullSite) {
			!installDirectorist && onebaseInstalled ? 
			window.open(`?page=starter-templates&template_id=${template_id}`, '_blank')
			: renderModal();
		} else if (isPro || installDirectorist) {
			renderModal();
		} else {
			try {
				await handlePlugins(required_plugins);
				renderModal();
			} catch (error) {
				// Handle error if needed
				console.error('Error fetching installable plugins:', error);
			}
		}
	};

	const addAuthModal = (e) => {
		e.stopPropagation();
		document.querySelector('.templatiq').classList.add('templatiq-overlay-enable');
		setInsertModalOpen(false);
		setAuthModalOpen(true);
	};

	const handleInsertModalClose = () => {
		// Callback function to update the state when the modal is closed
		setInsertModalOpen(false);
	};

	const handleAuthModalClose = () => {
		// Callback function to update the state when the modal is closed
		setAuthModalOpen(false);
	};

	const handlePlugins = async (plugins) => {
		const data = await postData(dependencyCheckEndPoint, { plugins });
		setRequiredPlugins(data);
	};

	useEffect(() => {
		handlePlugins(required_plugins);
	}, []);

	useEffect(() => {
		if (is_directorist_required) {
			const directoristPlugin = requiredPlugins.find(plugin => plugin.slug === 'directorist');
			setInstallDirectorist(directoristPlugin || false);
		}
	}, [requiredPlugins, insertModalOpen]);

	return (
		<>
			{insertModalOpen ? 
				isPro ?
					<InsertProModal 
						item={item}
						onClose={handleInsertModalClose}
						onLoginClick={addAuthModal}
					/> :
					installDirectorist ? 
						<InstallDirectoristModal
							install_directorist={installDirectorist}
							onClose={handleInsertModalClose}
						/> :

						insertFullSite ? 
							<InsertFullsiteModal
								item={item}
								onClose={handleInsertModalClose}
							/> :
							<InsertTemplateModal
								item={item}
								required_plugins={requiredPlugins}
								installed_directorist={!installDirectorist}
								onClose={handleInsertModalClose}
							/> : null

			}

			{authModalOpen && (
				<AuthModal
					modalEnable={true}
					onClose={handleAuthModalClose}
				/>
			)}

			<button
				id={template_id}
				className={
					className
						? className
						: 'templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button'
				}
				onClick={(e) =>
					!isLoggedIn
					? isPro
						? addInsertModal(e)
						: addAuthModal(e)
					: addInsertModal(e)
				}
			>
				<ReactSVG
					src={!solidIcon ? downloadAltIcon : downloadIcon}
					width={14}
					height={14}
				/>
				{type !== 'pack' ? (innerText ? innerText : 'Insert') : 'Insert Full Site'}
			</button>
		</>
	);
};

export default InsertTemplate;
