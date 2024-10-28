import AuthModal from '@components/Popup/AuthModal';
import postData from '@helper/postData';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ReactSVG from 'react-inlinesvg';

import InsertFullTemplateModal from '@components/Popup/insertFullTemplateModal';
import InsertProModal from '@components/Popup/insertProModal';
import InsertTemplateModal from '@components/Popup/InsertTemplateModal';
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
	let { template_id, slug, type, required_plugins, is_directorist_required } = item;

	const validPlugins = required_plugins.filter(item => item?.init);


	const currentBuilder = templatiq_obj?.builder;
	const pixetiqInstalled = templatiq_obj?.pixetiq_status === 'installed-and-active';
	const bricksInstalled = templatiq_obj?.current_theme === 'Bricks' || templatiq_obj?.current_theme === 'Bricks Child Theme';

	const insertFullTemplate = type === 'pack';
	// const dependencyCheckEndPoint = 'templatiq/dependency/check';
	const dependencyCheckEndPoint = 'templatiq/dependency/required-plugins';
	const importURL = `?page=templatiq-library&template_id=${template_id}&ci=0`;

	const { isLoggedIn, purchased, unlocked, hasAllAccess } = select(store).getUserInfo();
	const [isPurchased, setIsPurchased] = useState(false);
	const [isUnlocked, setIsUnlocked] = useState(false);
	const [insertModalOpen, setInsertModalOpen] = useState(false);
	const [authModalOpen, setAuthModalOpen] = useState(false);
	const [requiredPlugins, setRequiredPlugins] = useState(validPlugins);
	const [notInstallablePlugins, setNotInstallablePlugins] = useState(validPlugins);
	const [installDirectorist, setInstallDirectorist] = useState(false);

	const isItemPurchased = (itemId) => {
		// Check if any object in purchasedItems contains the itemId as a key
		return purchased && purchased.some(item => itemId in item);
	};
	
	const isItemUnlocked = (itemId) => {
		// Check if any object in unlockedItems contains the itemId as a key
		return unlocked && unlocked.some(item => itemId in item);
	};

	const addInsertModal = async (e) => {
		e.stopPropagation();

		const renderModal = () => {
			document.querySelector('.templatiq').classList.add('templatiq-overlay-enable');
			// Add the class to the root div using templateRef
			if (templateRef && templateRef.current) {
				templateRef.current.classList.add('insert-modal-open');
			}
			setInsertModalOpen(true);
		};
		
		setIsPurchased(isItemPurchased(template_id));
		setIsUnlocked(isItemUnlocked(template_id));

		if (!isPro && isItemPurchased(template_id) && isItemUnlocked(template_id)) {
			await handlePlugins(validPlugins);
		}

		if (insertFullTemplate) {
			isPro && !isItemPurchased(template_id) && !isItemUnlocked(template_id) && !pixetiqInstalled ?
				renderModal()
				: currentBuilder !== "bricks" ? 
					(
						pixetiqInstalled ? 
						window.location.href= importURL
						: renderModal()
					) : (
							bricksInstalled ? 
								window.location.href= importURL
								: renderModal()
						)
		} else if (isPro || installDirectorist) {
			renderModal();
		} else {
			try {
				// await handlePlugins(validPlugins);
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
		if (data) {
			const { active, inactive, notinstalled } = data.required_plugins;
			const updateRequired = active.filter(plugin => plugin.update_required);
			const installable = notinstalled.filter(plugin => !plugin.is_pro || plugin.pro_unlocked);
			const notInstallable = notinstalled.filter(plugin => plugin.is_pro && !plugin?.pro_unlocked);
			const allRequiredPlugins = [...updateRequired, ...inactive, ...installable];

			setRequiredPlugins(allRequiredPlugins);
			setNotInstallablePlugins(notInstallable);
		}
	};

	useEffect(() => {
		if (is_directorist_required) {
			const directoristPlugin = requiredPlugins.length > 0 && requiredPlugins.find(plugin => plugin.slug === 'directorist');
			setInstallDirectorist(directoristPlugin || false);
		}
	}, [requiredPlugins, insertModalOpen]);

	return (
		<>
			{insertModalOpen ? 
				isPro && !isPurchased && !isUnlocked && !hasAllAccess ?
					<InsertProModal 
						item={item}
						onClose={handleInsertModalClose}
						onLoginClick={addAuthModal}
					/> :
					insertFullTemplate ? 
						<InsertFullTemplateModal
							item={item}
							onClose={handleInsertModalClose}
						/> :
						installDirectorist ? 
							<InstallDirectoristModal
								install_directorist={installDirectorist}
								onClose={handleInsertModalClose}
							/> :
								<InsertTemplateModal
									item={item}
									required_plugins={requiredPlugins}
									not_installable_plugins={notInstallablePlugins}
									installed_directorist={!installDirectorist}
									onClose={handleInsertModalClose}
								/> : null

			}

			{authModalOpen && (
				<AuthModal
					slug={slug}
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
				{innerText ? innerText :  __( 'Insert', 'templatiq' )}
			</button>
		</>
	);
};

export default InsertTemplate;
