import { getGlobalState } from '@helper/utils';
import PropTypes from 'prop-types';
import ReactSVG from 'react-inlinesvg';

export default function CreatePopupAction( props ) {
	const { routeLink: Link } = getGlobalState(
		'helpgent_router_references',
		null
	);
	const { icon, text, step, url, moduleState, setModuleState } = props;
	function handleCreateFormSteps( event, step ) {
		event.preventDefault();
		if ( step === 'scratch' ) {
			setModuleState( {
				...moduleState,
				addBackBtn: true,
				createFormStage: 'scratch',
			} );
		} else if ( step === 'template' ) {
			setModuleState( {
				...moduleState,
				createFormStage: 'template',
			} );
		}
	}
	return (
		<Link
			to={ `${ url }` || '#' }
			className="helpgent-createPopup__action"
			onClick={ ( e ) =>
				step ? handleCreateFormSteps( e, step ) : null
			}
		>
			<div className="helpgent-createPopup__action-icon">
				<ReactSVG src={ icon } />
			</div>
			{ text && (
				<span className="helpgent-createPopup__action-text">
					{ text }
				</span>
			) }
		</Link>
	);
}

CreatePopupAction.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	step: PropTypes.string,
	url: PropTypes.string,
};
