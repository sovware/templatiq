import { __ } from '@wordpress/i18n';
import { Button } from '../../components';
import DefaultStep from '../../components/default-step/index';
import ICONS from '../../icons';
import { useStateValue } from '../../store/store';

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

	return (
		<DefaultStep
			content={
				<div className="insert-content">
					<h1 className="d-flex-center-align">
						{ __( 'Almost There! Just one step', 'templatiq-sites' ) }
						{ ICONS.tada }
					</h1>
					<p className="screen-description p-bold">Insert Content Message</p>
					<div>
						<Button
							className={ `ist-button ist-next-step` }
							onClick={ nextStep }
							after
						>
							{ __( 'Continue', 'templatiq-sites' ) }
						</Button>

						<Button onClick={ prevStep }>
							{ __( 'Back', 'templatiq-sites' ) }
						</Button>
					</div>
					<form className="directorist-setup-wizard-wrapper directorist-setup-wizard__wrapper">
						<div className="directorist-setup-wizard__header">
							<div className="directorist-setup-wizard__logo">
								{/* <img src="" alt="Directorist" /> */}
								Logo
							</div>
							<div className="directorist-setup-wizard__close">
								<a href="#" className="directorist-setup-wizard__close__btn">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11.998" viewBox="1237 31 12 11.998"><path d="m1244.409 36.998 4.295-4.286a1.003 1.003 0 0 0-1.418-1.418L1243 35.59l-4.286-4.296a1.003 1.003 0 0 0-1.418 1.418l4.295 4.286-4.295 4.286a.999.999 0 0 0 0 1.419.999.999 0 0 0 1.418 0l4.286-4.296 4.286 4.296a1 1 0 0 0 1.418 0 .999.999 0 0 0 0-1.419l-4.295-4.286Z" fill="#b7b7b7" fill-rule="evenodd" data-name="times"></path></svg>
								</a>
							</div>
						</div>
										
						<div className="directorist-setup-wizard__step ">
							<div className="directorist-setup-wizard__content">
								<div className="directorist-setup-wizard__content__items directorist-setup-wizard__content__import">
									<div className="directorist-setup-wizard__content__header">
										<h2 className="directorist-setup-wizard__content__header__title">Insert Content</h2>
										<p className="directorist-setup-wizard__content__header__desc">Install required tools, Import listings, share non-sensitive data, etc</p>
									</div>
									<div className="directorist-setup-wizard__content__import__wrapper">
										<h3 className="directorist-setup-wizard__content__import__title">Install required tools</h3>
										<div className="directorist-setup-wizard__content__import__single">
											<input type="checkbox" name="import_listings" id="import-listing" value="yes" />
											<label for="import-listing">Import Listing</label>
										</div>
										<div className="directorist-setup-wizard__content__import__single">
											<input type="checkbox" name="directory_type_settings" value="yes" id="import-directory-settings" />
											<label for="import-directory-settings">Import Directory Settings</label>
										</div>
										<div className="directorist-setup-wizard__content__import__single">
											<input type="checkbox" name="business" id="install-required-plugins" />
											<label for="install-required-plugins">Install Required Plugins</label>
										</div>
										<div className="directorist-setup-wizard__content__import__single">
											<input type="checkbox" name="share_non_sensitive_data" id="share-data" value="yes" checked="" />
											<label for="share-data">Share Non-Sensitive Data</label>
										</div>
									</div>
									<Button
										className={ `directorist-setup-wizard__content__import__btn ist-button ist-next-step` }
										onClick={ nextStep }
										after
									>
										{ __( 'Submit & Build My Directory Website', 'templatiq-sites' ) }
									</Button>
									<div className="directorist-setup-wizard__content__import__notice">
										By clicking "Submit &amp; Build My Website", you agree to our <a href="#">Terms</a> &amp; <a href="#">Privacy Policy</a>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			}
		/>
	);
};

export default InsertContent;
