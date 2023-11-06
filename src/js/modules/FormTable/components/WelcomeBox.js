import { Fragment } from '@wordpress/element';
import PropTypes from 'prop-types';
import { useFormTableState } from '../context/FormTableStateContext';
import ReactSVG from 'react-inlinesvg';
import handsRaised from '@icon/hands-raised.svg';

export default function WelcomeBox() {
	const { formTableState, setFormTableState } = useFormTableState();
	const currentUser = templatiq_current_user;
	return (
		<Fragment>
			<div className="templatiq-welcome-top">
				<div className="templatiq-welcome-top__icon">
					<ReactSVG src={ handsRaised } />
				</div>
				<h4 className="templatiq-welcome-top__title">
					Welcome { currentUser?.display_name }
				</h4>
			</div>
			<p>
				You can select a template to assist you, or start from scratch.
			</p>
			<button
				className="templatiq-btn templatiq-btn-md templatiq-btn-primary templatiq-btn-create"
				onClick={ () =>
					setFormTableState( {
						...formTableState,
						selectedTemplate: null,
						templateQuestions: null,
						isCreatePopupOpen: true,
					} )
				}
			>
				Create My First Form
			</button>
		</Fragment>
	);
}

WelcomeBox.propTypes = {
	isCreatePopupOpen: PropTypes.bool,
	setCreatePopupStatus: PropTypes.func,
};
