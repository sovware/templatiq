// import { Tooltip } from '@brainstormforce/templatiq-library-components';
import { __ } from '@wordpress/i18n';

// Internal dependencies.
import ICONS from '../../icons';
import './style.scss';
const { adminUrl } = starterTemplates;

const ExitToDashboard = () => {
	return (
		<a className="st-exit-to-dashboard" href={ adminUrl }>
			{/* <Tooltip content={ __( 'Exit to Dashboard', 'templatiq-sites' ) }>
				{ ICONS.dashboard }
			</Tooltip> */}
			{ ICONS.dashboard }
		</a>
	);
};

export default ExitToDashboard;
