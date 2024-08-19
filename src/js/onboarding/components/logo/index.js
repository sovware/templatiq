// import { Logo as SiteLogo } from '@brainstormforce/templatiq-library-components';
import { __ } from '@wordpress/i18n';
import { getWhileLabelName, whiteLabelEnabled } from '../../utils/functions';
import './style.scss';
const { imageDir } = starterTemplates;

const Logo = () => {
	return (
		<div className="branding-wrap">
			{ whiteLabelEnabled() ? (
				<h3>{ getWhileLabelName() }</h3>
			) : (
				// <SiteLogo
				// 	className="ist-logo"
				// 	src={ `${ imageDir }logo.svg` }
				// 	alt={ __( 'Templatiq', 'templatiq-sites' ) }
				// 	href={ templatiqSitesVars.st_page_url }
				// />
				<img src={templatiqSitesVars.st_page_url} alt={ __( 'Templatiq', 'templatiq-sites' ) } />
			) }
		</div>
	);
};

export default Logo;
