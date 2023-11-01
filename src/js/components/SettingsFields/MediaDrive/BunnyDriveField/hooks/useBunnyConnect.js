import { useState } from '@wordpress/element';

import ModalTemplate from '@components/ModalTemplate';
import Modal from '@components/Modal';
import BunnyLoginForm from '../components/BunnyLoginForm';

export default function useBunnyConnect( args ) {
	const {
		title,
		formFields,
		buttonLabel,
		activeModal,
		onToggleModal,
		inputKey,
		form,
		save,
	} = args;

	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );
	const [ isActiveModal, setIsActiveModal ] = useState(
		typeof activeModal === 'boolean' ? activeModal : false
	);

	const ConnectModal = ( { isActiveModal, modalData, toggleModal } ) => {
		return (
			<Modal isActive={ isActiveModal } onChange={ toggleModal }>
				{ isActiveModal && (
					<ModalTemplate
						title={ modalData.title }
						onClose={ () => toggleModal( false ) }
					>
						<BunnyLoginForm { ...modalData } />
					</ModalTemplate>
				) }
			</Modal>
		);
	};

	const modalData = {
		title: title ? title : 'Connect',
		buttonLabel: buttonLabel ? buttonLabel : 'Connect',
		onConnect: ( formFieldValue ) => {
			form.setValue( inputKey, formFieldValue );
			toggleModal( false );

			if ( typeof save === 'function' ) {
				save();
			}
		},
		formFields: isObject( formFields ) ? formFields : {},
	};

	function toggleModal( isActive ) {
		const state =
			typeof isActive === 'boolean' ? isActive : ! isActiveModal;
		setIsActiveModal( state );

		if ( typeof onToggleModal === 'function' ) {
			onToggleModal( state );
		}
	}

	return {
		modalData,
		isActiveModal,
		toggleModal,
		Modal: ConnectModal,
	};
}
