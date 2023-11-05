import { useState, useRef, useEffect } from '@wordpress/element';

import { ModalStyle } from './style';

function Modal( { children: Child, isActive, onChange } ) {
	const container = useRef();

	const [ isActiveModal, setIsActiveModal ] = useState(
		typeof isActive === 'boolean' ? isActive : false
	);

	useEffect( () => {
		setIsActiveModal( isActive );
	}, [ isActive ] );

	function closeModal( event ) {
		if ( event.target !== container.current ) {
			return;
		}

		setIsActiveModal( false );

		if ( typeof onChange === 'function' ) {
			onChange( false );
		}
	}

	if ( ! isActiveModal ) {
		return '';
	}

	return (
		<ModalStyle
			ref={ container }
			className="template-market-modal-container --active"
			onClick={ closeModal }
		>
			{ Child }
		</ModalStyle>
	);
}

export default Modal;
