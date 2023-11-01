import { useState, useEffect, useRef } from '@wordpress/element';
import { PopupButtonStyle } from './style';

export default function PopupButton( {
	label,
	popupContent,
	isActive,
	classNames,
	onChange,
} ) {
	const container = useRef();

	const [ isActivePopup, setIsActivePopup ] = useState(
		typeof isActive === 'boolean' ? isActive : false
	);

	useEffect( () => {
		setIsActivePopup( isActive );
	}, [ isActive ] );

	useEffect( () => {
		function handleOutsideClick( event ) {
			if (
				container.current &&
				! container.current.contains( event.target ) &&
				event.target.closest( '.helpgent-button-popup' ) === null
			) {
				setIsActivePopup( false );
			}
		}

		document.addEventListener( 'click', handleOutsideClick );

		return () => {
			document.removeEventListener( 'click', handleOutsideClick );
		};
	}, [] );

	function toggleActive( event ) {
		if ( container.current !== event.target ) {
			return;
		}

		const newState = ! isActivePopup;
		setIsActivePopup( newState );

		if ( typeof onChange === 'function' ) {
			onChange( newState );
		}
	}

	function getButtonClassName() {
		let buttonClassNames = [
			'helpgent-btn',
			'helpgent-btn-lg',
			'helpgent-btn-white',
		];

		if ( typeof classNames !== undefined && Array.isArray( classNames ) ) {
			buttonClassNames = [ ...buttonClassNames, ...classNames ];

			const filterUnique = ( value, index, array ) =>
				array.indexOf( value ) === index;
			buttonClassNames = buttonClassNames.filter( filterUnique );
		}

		buttonClassNames.push( 'helpgent-popup-button' );

		if ( isActivePopup ) {
			buttonClassNames.push( 'helpgent-popup-button-active' );
		}

		return buttonClassNames.join( ' ' );
	}

	return (
		<PopupButtonStyle
			ref={ container }
			className={ getButtonClassName() }
			onClick={ toggleActive }
		>
			<div className="helpgent-button-popup">{ popupContent }</div>
			{ label }
		</PopupButtonStyle>
	);
}
