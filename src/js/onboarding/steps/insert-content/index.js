import arrowIcon from '@images/icon/angle-left.svg';
import Logo from '@images/logo.svg';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import DefaultStep from '../../components/default-step/index';
import { useStateValue } from '../../store/store';

import trashIcon from '@icon/trash.svg';
import './style.scss';

const InsertContent = () => {
	const [{ currentIndex }, dispatch ] = useStateValue();
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
	
	// Initialize state for each group of checkboxes
    const [installRequiredTools, setInstallRequiredTools] = useState([]);
    const [installContents, setInstallContents] = useState([]);
    const [eraseExistingData, setEraseExistingData] = useState(false);

    // Handle change events for checkboxes
    const handleCheckboxChange = (e, setState, state) => {
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

	// Handle change events for the single optional checkbox
    const handleEraseExistingData = (e) => {
        setEraseExistingData(e.target.checked);
    };

	const handleInsertContentForm = (e) => {
		e.preventDefault();
		dispatch( {
			type: 'set',
			importPersonaData: {installRequiredTools, installContents, eraseExistingData}
		} );
		nextStep();
	}

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
								href='#' 
								className="fullsite-setup-wizard__close__btn"
								onClick={ prevStep }
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11.998" viewBox="1237 31 12 11.998"><path d="m1244.409 36.998 4.295-4.286a1.003 1.003 0 0 0-1.418-1.418L1243 35.59l-4.286-4.296a1.003 1.003 0 0 0-1.418 1.418l4.295 4.286-4.295 4.286a.999.999 0 0 0 0 1.419.999.999 0 0 0 1.418 0l4.286-4.296 4.286 4.296a1 1 0 0 0 1.418 0 .999.999 0 0 0 0-1.419l-4.295-4.286Z" fill="#b7b7b7" fill-rule="evenodd" data-name="times"></path></svg>
							</a>
						</div>
					</div>
					
					<div className="fullsite-setup-wizard__content">
						<h1 className="d-flex-center-align">
							We're Almost There! Just one last step...
						</h1>
						<div className="fullsite-setup-wizard__content__items fullsite-setup-wizard__content__import">
							<div className="fullsite-setup-wizard__content__header">
								<h2 className="fullsite-setup-wizard__content__header__title">Insert Content</h2>
								<p className="fullsite-setup-wizard__content__header__desc">Install required tools, Import listings, share non-sensitive data, etc</p>
							</div>
							<div className="fullsite-setup-wizard__content__import__wrapper">
								<h3 className="fullsite-setup-wizard__content__import__title">Install required tools</h3>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="install-required-tools-1"
										id="install-required-tools-1"
										value="yes"
										checked={installRequiredTools.includes('install-required-tools-1')}
										onChange={(e) => handleCheckboxChange(e, setInstallRequiredTools, installRequiredTools)}
									/>
									<label htmlFor="install-required-tools-1">Install required tools</label>
								</div>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="install-required-tools-2"
										id="install-required-tools-2"
										value="yes"
										checked={installRequiredTools.includes('install-required-tools-2')}
										onChange={(e) => handleCheckboxChange(e, setInstallRequiredTools, installRequiredTools)}
									/>
									<label htmlFor="install-required-tools-2">Install required tools</label>
								</div>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="install-required-tools-3"
										id="install-required-tools-3"
										value="yes"
										checked={installRequiredTools.includes('install-required-tools-3')}
										onChange={(e) => handleCheckboxChange(e, setInstallRequiredTools, installRequiredTools)}
									/>
									<label htmlFor="install-required-tools-3">Install required tools</label>
								</div>
							</div>

							<div className="fullsite-setup-wizard__content__import__wrapper">
								<h3 className="fullsite-setup-wizard__content__import__title">Install contents</h3>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="import-listing"
										id="import-listing"
										value="yes"
										checked={installContents.includes('import-listing')}
										onChange={(e) => handleCheckboxChange(e, setInstallContents, installContents)}
									/>
									<label htmlFor="import-listing">Import Listing</label>
								</div>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="import-directory-settings"
										id="import-directory-settings"
										value="yes"
										checked={installContents.includes('import-directory-settings')}
										onChange={(e) => handleCheckboxChange(e, setInstallContents, installContents)}
									/>
									<label htmlFor="import-directory-settings">Import Directory Settings</label>
								</div>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="share-non-sensitive-data"
										id="share-non-sensitive-data"
										value="yes"
										checked={installContents.includes('share-non-sensitive-data')}
										onChange={(e) => handleCheckboxChange(e, setInstallContents, installContents)}
									/>
									<label htmlFor="share-non-sensitive-data">Share Non-Sensitive Data</label>
								</div>
							</div>
							<div className="fullsite-setup-wizard__content__import__wrapper">
								<h3 className="fullsite-setup-wizard__content__import__title">Optional</h3>
								<div className="fullsite-setup-wizard__content__import__single">
									<input
										type="checkbox"
										name="erase-directory-data"
										id="erase-directory-data"
										value="yes"
										checked={eraseExistingData}
										onChange={handleEraseExistingData}
									/>
									<label htmlFor="erase-directory-data">Erase existing directory data & start fresh</label>
								</div>
								{
									eraseExistingData && 
									<span className="fullsite-setup-wizard__content__import__warning">
										<ReactSVG
											src={ trashIcon }
											width={ 16 }
											height={ 16 }
										/>
										<strong>Warning: </strong> This will remove all existing data from your directories, listing & data associated Directorist.
									</span>
								}
							</div>
							<button
								type='submit'
								// onClick={ nextStep }
								className={ `fullsite-setup-wizard__content__import__btn ist-button ist-next-step` }
							>
								Submit & Build My Directory Website
							</button>
							<div className="fullsite-setup-wizard__content__import__notice">
								By clicking "Submit &amp; Build My Website", you agree to our <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a>
							</div>
						</div>
					</div>

					<div className="fullsite-setup-wizard__footer">
						<div className="fullsite-setup-wizard__back">
							<a
								href='#' 
								class="fullsite-setup-wizard__back__btn"
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
