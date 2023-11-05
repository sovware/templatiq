import { useFormTableState } from '../context/FormTableStateContext.js';
import PropTypes from 'prop-types';
import { HeaderStyle } from './style.js';

function Header( props ) {
	const { forms } = props;
	const { formTableState, setFormTableState } = useFormTableState();

	return (
		<HeaderStyle>
			<h1 className="template-market-page-header-title">All Forms</h1>
			{ forms && forms.length !== 0 ? (
				<button
					className="template-market-btn template-market-btn-dark template-market-page-header-btn"
					onClick={ () =>
						setFormTableState( {
							...formTableState,
							selectedTemplate: null,
							templateQuestions: null,
							isCreatePopupOpen: true,
						} )
					}
				>
					Create New
				</button>
			) : null }
		</HeaderStyle>
	);
}

Header.propTypes = {
	forms: PropTypes.array,
};

export default Header;
