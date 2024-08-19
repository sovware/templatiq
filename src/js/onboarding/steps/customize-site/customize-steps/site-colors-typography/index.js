import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ChangeTemplate from '../../../../components/change-template';
import { useStateValue } from '../../../../store/store';

const SiteColors = () => {
	const [ { builder }, dispatch ] = useStateValue();
	useEffect( () => {
		dispatch( {
			type: 'set',
			designStep: 2,
		} );
	}, [] );

	return (
		<>
			<ChangeTemplate />
			<div className="customizer-header">
				<div className="header-name">
					<h3 className="ist-customizer-heading">
						{ builder === 'beaver-builder' || builder === 'brizy'
							? __( 'Fonts', 'templatiq-sites' )
							: __( 'Colors & Fonts', 'templatiq-sites' ) }
					</h3>
					<p className="screen-description">
						{ __(
							'Choose colors and fonts for your site. You can update them anytime later.',
							'templatiq-sites'
						) }
					</p>
				</div>
			</div>
		</>
	);
};

export default SiteColors;
