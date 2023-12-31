import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '../../../../store/store';
import ChangeTemplate from '../../../../components/change-template';

const EcommerceSelections = () => {
	const [ {}, dispatch ] = useStateValue();
	useEffect( () => {
		dispatch( {
			type: 'set',
			designStep: 1,
		} );
	}, [] );

	return (
		<>
			<ChangeTemplate />
			<div className="customizer-header">
				<div className="header-name">
					<h3 className="ist-customizer-heading">
						{ __( 'Choose eCommerce Platform', 'templatiq-sites' ) }
					</h3>
					<p className="screen-description">
						{ __(
							`Choose your preferred e-Commerce platform. Based on your selection, you will receive the account setup and cart options.`,
							'templatiq-sites'
						) }
					</p>
				</div>
			</div>
		</>
	);
};

export default EcommerceSelections;
