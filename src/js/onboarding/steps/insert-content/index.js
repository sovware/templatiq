import arrowIcon from '@images/icon/angle-left.svg';
import Logo from '@images/logo.svg';
import { useEffect, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import DefaultStep from '../../components/default-step/index';
import { useStateValue } from '../../store/store';

import trashIcon from '@icon/trash.svg';
import './style.scss';
const currentUrlParams = new URLSearchParams( window.location.search );
const template_id = currentUrlParams.get( 'template_id' ) || '';

const { themeStatus } = starterTemplates;

import ContentLoading from '@components/ContentLoading';
import {
	checkFileSystemPermissions,
	checkRequiredPlugins,
	getDemo,
} from '../import-site/import-utils';

const InsertContent = () => {
	const [stateValue, dispatch ] = useStateValue();
	const { currentIndex, notActivatedList, notInstalledList } = stateValue;


	const installPlugins = notInstalledList
			.filter(plugin => (!plugin.is_pro || plugin.pro_unlocked))
			.map(plugin => plugin);
	const allRequiredPlugin = [ ...notActivatedList, ...installPlugins ];

	const notInstallablePlugins = notInstalledList
			.filter(notInstalled => !allRequiredPlugin
			.some(installable => installable.slug === notInstalled.slug));

	const prevStep = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex - 1
		} );
	};
	const nextStep = () => {
		dispatch( {
			type: 'set',
			currentIndex: currentIndex + 1,
		} );
	};

	const directoristDB = starterTemplates?.directoristDB;
	const firstImportStatus = starterTemplates?.firstImportStatus;
	
	// Initialize state for each group of checkboxes
    const [installContents, setInstallContents] = useState(['importListing', 'shareNonSensitiveData']);
    const [eraseExistingDirectoristData, setEraseExistingDirectoristData] = useState(false);
    const [removeImportedData, setRemoveImportedData] = useState(false);
    const [loading, setLoading] = useState(true);

    // Handle change events for checkboxes
    const handleCheckboxChange = (e, setState) => {
        const { name, checked } = e.target;
        setState((prevState) => {
            if (checked) {
                // Add the selected tool to the array
                return [...prevState, name];
            } else {
                // Remove the deselected tool from the array
                return prevState.filter((item) => item !== name);
            }
        });
    };

	// Handle change events for erase existing data checkbox
    const handleEraseExistingDirectoristData = (e) => {
        setEraseExistingDirectoristData(e.target.checked);
    };

	// Handle change events for remove imported data checkbox
    const handleRemoveImportedData = (e) => {
        setRemoveImportedData(e.target.checked);
    };

	const handleInsertContentForm = (e) => {
		e.preventDefault();
		const installPlugins = allRequiredPlugin
			.map(plugin => plugin.slug);

		dispatch( {
			type: 'set',
			importPersonaData: {installPlugins, installContents, eraseExistingDirectoristData, removeImportedData}
		} );
		nextStep();
	}

	useEffect(() => {

		// When user skip activate pixetiq theme, then run these steps
		const fetchData = async () => {
			// Step 1: getDemo
			await getDemo(template_id, dispatch);

			// Step 2: checkRequiredPlugins
			await checkRequiredPlugins(dispatch);

			// Step 3: checkFileSystemPermissions
			await checkFileSystemPermissions(dispatch);

			setLoading(false);
		};

		const fetchRequiredPluginsData = async () => {
			const requiredPluginsData = await checkRequiredPlugins(dispatch);

			setLoading(false);
		};
		
		if( 'installed-and-active' !== themeStatus ) {
			setLoading(true);
			fetchData();
		} else {
			setLoading(true);
			fetchRequiredPluginsData(); 
		}

	}, []);

	return (
		<DefaultStep
			content={
				<form className="fullsite-setup-wizard" onSubmit={handleInsertContentForm}>
					<div className="fullsite-setup-wizard__header">
						<div className="fullsite-setup-wizard__logo">
							<img src={ Logo } alt="Logo" />
						</div>
						<div className="fullsite-setup-wizard__header__step">
							<ul className="fullsite-setup-wizard__header__step__wrapper">
								<li className="fullsite-setup-wizard__header__step__single completed" data-step="1">
									Choose Template
								</li>
								<li className="fullsite-setup-wizard__header__step__single active" data-step="2">
									Insert Content
								</li>
								<li className="fullsite-setup-wizard__header__step__single" data-step="3">
									Done
								</li>
							</ul>
						</div>
						<div className="fullsite-setup-wizard__close">
							<a
								href={templatiqSitesVars. st_page_url} 
								className="fullsite-setup-wizard__close__btn"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11.998" viewBox="1237 31 12 11.998"><path d="m1244.409 36.998 4.295-4.286a1.003 1.003 0 0 0-1.418-1.418L1243 35.59l-4.286-4.296a1.003 1.003 0 0 0-1.418 1.418l4.295 4.286-4.295 4.286a.999.999 0 0 0 0 1.419.999.999 0 0 0 1.418 0l4.286-4.296 4.286 4.296a1 1 0 0 0 1.418 0 .999.999 0 0 0 0-1.419l-4.295-4.286Z" fill="#b7b7b7" fillRule="evenodd" data-name="times"></path></svg>
							</a>
						</div>
					</div>
					
					<div className="fullsite-setup-wizard__content">
						<h1 className="fullsite-setup-wizard__content__title">
							We're Almost There! <span>Just one last step...</span>
						</h1>
						<div className="fullsite-setup-wizard__content__items fullsite-setup-wizard__content__import">
							{
								loading ? 
									<div className="fullsite-setup-wizard__content__import__wrapper">
										<ContentLoading />
									</div> : 
									(
										allRequiredPlugin.length > 0 &&
										<div className="fullsite-setup-wizard__content__import__wrapper">
											<h3 className="fullsite-setup-wizard__content__import__title">Install required plugins</h3>
											{
												allRequiredPlugin.map((plugin, index) => {
													return (
														<div key={index} className="fullsite-setup-wizard__content__import__single required_plugins">
															<input
																type="checkbox"
																name={plugin.slug}
																id={plugin.slug}
																checked
																readOnly
															/>
															<label htmlFor={plugin.slug}>{plugin.name} {plugin.is_pro ? <span className="plugin_status">(Pro)</span> : null}</label>
														</div>
													)
												})
											}
											{
												notInstallablePlugins.map((plugin, index) => {
													return (
														<div key={index} className="fullsite-setup-wizard__content__import__single required_plugins">
															<input
																type="checkbox"
																name={plugin.slug}
																id={plugin.slug}
																disabled = { plugin.is_pro }
															/>
															<label htmlFor={plugin.slug}>
																<span class="plugin_name">{plugin.name}</span> 
																{plugin.is_pro ? 
																	<span className="plugin_status">(Pro)</span> : 
																	null
																}
															</label>
															{plugin.is_pro ? 
																<a href={plugin.purchase_url || "#"} target="_blank" className="required_plugin_purchase">Purchase</a> : 
																null
															}
														</div>
													)
												})
											}
										</div>
									)
							}

							<div className="fullsite-setup-wizard__content__import__wrapper">
								<h3 className="fullsite-setup-wizard__content__import__title">Install contents</h3>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="importListing"
										id="importListing"
										value="yes"
										checked={installContents.includes('importListing')}
										onChange={(e) => handleCheckboxChange(e, setInstallContents, installContents)}
									/>
									<label htmlFor="importListing">Import Listing</label>
								</div>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="shareNonSensitiveData"
										id="shareNonSensitiveData"
										value="yes"
										checked={installContents.includes('shareNonSensitiveData')}
										onChange={(e) => handleCheckboxChange(e, setInstallContents, installContents)}
									/>
									<label htmlFor="shareNonSensitiveData">Share Non-Sensitive Data</label>
								</div>
							</div>

							{
								directoristDB || firstImportStatus ?
								<div className="fullsite-setup-wizard__content__import__wrapper">
									<h3 className="fullsite-setup-wizard__content__import__title">Optional</h3>
									{
										directoristDB && 
										<>
											<div className="fullsite-setup-wizard__content__import__single">
												<input
													type="checkbox"
													name="erase-directory-data"
													id="erase-directory-data"
													value="yes"
													checked={eraseExistingDirectoristData}
													onChange={handleEraseExistingDirectoristData}
												/>
												<label htmlFor="erase-directory-data">Erase existing directory data & start fresh</label>
											</div>
											{
												eraseExistingDirectoristData && 
												<span className="fullsite-setup-wizard__content__import__warning">
													<ReactSVG
														src={ trashIcon }
														width={ 16 }
														height={ 16 }
													/>
													<strong>Warning: </strong> This will remove all existing data from your directories, listing & data associated Directorist.
												</span>
											}
										</>
									}
									{
										firstImportStatus && 
										<>
											<div className="fullsite-setup-wizard__content__import__single">
												<input
													type="checkbox"
													name="remove-imported-data"
													id="remove-imported-data"
													value="yes"
													checked={removeImportedData}
													onChange={handleRemoveImportedData}
												/>
												<label htmlFor="remove-imported-data">Remove imported demo data</label>
											</div>
											{
												removeImportedData && 
												<span className="fullsite-setup-wizard__content__import__warning">
													<ReactSVG
														src={ trashIcon }
														width={ 16 }
														height={ 16 }
													/>
													<strong>Warning: </strong> This will remove all imported data from your directories, listing & data associated Directorist.
												</span>
											}
										</>
									}
								</div> : null
							}
							<button
								type='submit'
								// onClick={ nextStep }
								className={ `fullsite-setup-wizard__content__import__btn ist-button ist-next-step ${loading ? "disabled" : ""}` }
							>
								Submit & Build My Directory Website
							</button>
						</div>
					</div>

					<div className="fullsite-setup-wizard__footer">
						<div className="fullsite-setup-wizard__back">
							<a
								href='#' 
								className="fullsite-setup-wizard__back__btn"
								onClick={ prevStep }	
							>
								<img src={arrowIcon} alt="" />
								Back
							</a>
						</div>
					</div>
				</form>
			}
		/>
	);
};

export default InsertContent;
