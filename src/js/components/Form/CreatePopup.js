import { Fragment } from '@wordpress/element';
import { Modal } from '@wordpress/components';
import ReactSVG from 'react-inlinesvg';
import CreatePopupInitial from './CreatePopupInitial.js';
import CreatePopupForm from './CreatePopupForm.js';
import { CreatePopupStyle } from './style.js';
import arrowLeft from '@icon/arrow-small-left.svg';

function CreatePopup( props ) {
	const { moduleState, setModuleState } = props;
	const {
		isImportingAttachment,
		isCreatePopupOpen,
		createFormStage,
		addBackBtn,
	} = moduleState;
	function popupContent() {
		if ( createFormStage === 'initial' ) {
			return (
				<CreatePopupInitial
					moduleState={ moduleState }
					setModuleState={ setModuleState }
				/>
			);
		} else if ( createFormStage === 'scratch' ) {
			return (
				<CreatePopupForm
					moduleState={ moduleState }
					setModuleState={ setModuleState }
				/>
			);
		}
	}

	function handlePopupCloseRequest() {
		setModuleState( {
			...moduleState,
			createFormStage: 'initial',
			addBackBtn: false,
			isCreatePopupOpen: false,
		} );
	}

	function handleFormBack() {
		setModuleState( {
			...moduleState,
			createFormStage: 'initial',
			addBackBtn: false,
		} );
	}

	return (
		isCreatePopupOpen && (
			<Fragment>
				<Modal
					overlayClassName={ `helpgent-modal helpgent-create-modal-wrap ${
						isImportingAttachment
							? 'helpgent-attachment-importing'
							: ''
					}` }
					shouldCloseOnClickOutside={ ! isImportingAttachment }
					onRequestClose={ () =>
						isImportingAttachment ? {} : handlePopupCloseRequest()
					}
					isDismissible={ ! isImportingAttachment }
				>
					{ createFormStage === 'scratch' && addBackBtn && (
						<a
							href="#"
							className="helpgent-btn-back"
							onClick={ handleFormBack }
						>
							<ReactSVG src={ arrowLeft } /> Back
						</a>
					) }

					<CreatePopupStyle className="helpgent-create-form-modal">
						{ popupContent() }
					</CreatePopupStyle>
				</Modal>
			</Fragment>
		)
	);
}

export default CreatePopup;
