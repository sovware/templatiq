import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '../../../../store/store';
import ChangeTemplate from '../../../../components/change-template';
import Button from '../../../../components/button/button';
import { whiteLabelEnabled } from '../../../../utils/functions';
const { imageDir } = starterTemplates;

const LicenseValidation = () => {
	const [ { builder }, dispatch ] = useStateValue();
	useEffect( () => {
		dispatch( {
			type: 'set',
			designStep: 2,
		} );
	}, [] );

	const accessLinkOutput = __(
		`This is a premium template and comes with our Essentials and Business Toolkits. <br/><br/> Get access to this premium template and 100+ more.`,
		'templatiq-sites'
	);

	const getAccessLink = () => {
		window.open( templatiqSitesVars.cta_links[ builder ] );
	};

	const getwhiteLabelLink = () => {
		if ( templatiqSitesVars.whiteLabelUrl !== '#' ) {
			window.open( templatiqSitesVars.whiteLabelUrl );
		}
	};

	return (
		<>
			<ChangeTemplate />
			<div className="customizer-header">
				<div className="header-name">
					{ ! whiteLabelEnabled() && (
						<>
							<h3 className="ist-customizer-heading">
								{ __(
									'Liked this Starter Template?',
									'templatiq-sites'
								) }
							</h3>
							<p
								className="screen-description"
								dangerouslySetInnerHTML={ {
									__html: accessLinkOutput,
								} }
							/>
						</>
					) }
					<Button
						className="st-access-btn"
						onClick={
							whiteLabelEnabled()
								? getwhiteLabelLink
								: getAccessLink
						}
					>
						{ __( 'Unlock Access', 'templatiq-sites' ) }
						<img
							className="st-get-access"
							alt="Get Access"
							src={ `${ imageDir }get-access.svg` }
						/>
					</Button>
				</div>
			</div>
		</>
	);
};

export default LicenseValidation;
