import AuthModal from '@components/Popup/AuthModal';
import postData from '@helper/postData';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';

import InsertFullsiteModal from '@components/Popup/insertFullsiteModal';
import InsertProModal from '@components/Popup/insertProModal';
import InsertTemplateModal from '@components/Popup/insertTemplateModal';
import InstallPluginModal from '@components/Popup/installPluginModal';
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

	const dependencyCheckEndPoint = 'templatiq/dependency/check';

	const { isLoggedIn } = select(store).getUserInfo();
	const [insertModalOpen, setInsertModalOpen] = useState(false);
	const [authModalOpen, setAuthModalOpen] = useState(false);
	const [requiredPlugins, setRequiredPlugins] = useState([]);
	const [installDirectorist, setInstallDirectorist] = useState(false);
	const [insertFullSite, setInsertFullSite] = useState(false);
	const [proTemplate, setProTemplate] = useState(false);

	const addInsertModal = async (e) => {
		e.stopPropagation();
		document.querySelector('.templatiq').classList.add('templatiq-overlay-enable');

		isPro && setProTemplate(true);

		type === 'pack' && setInsertFullSite(true);

		// Add the class to the root div using templateRef
		if (templateRef && templateRef.current) {
			templateRef.current.classList.add('insert-modal-open');
		}

		try {
			await handlePlugins(required_plugins);
			setInsertModalOpen(true);
		} catch (error) {
			// Handle error if needed
			console.error('Error fetching installable plugins:', error);
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
	}, [required_plugins]);

	useEffect(() => {
		if (is_directorist_required) {
			const directoristPlugin = requiredPlugins.find(plugin => plugin.slug === 'directorist');
			setInstallDirectorist(directoristPlugin || false);
		}
	}, [requiredPlugins, is_directorist_required]);

	useEffect(() => {
		isPro && setProTemplate(true);
	});

	return (
		<>
			{insertModalOpen ? 
				proTemplate ?
					<InsertProModal 
						item={item}
						onClose={handleInsertModalClose}
						onLoginClick={addAuthModal}
					/> :
					installDirectorist ? 
						<InstallPluginModal
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
					? proTemplate
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
