import { createPortal, useState, useEffect, useRef } from '@wordpress/element';
import useMountTransition from '../../hooks/useMountTransition';
import { DrawerStyle } from './style';

function createDrawerPortal() {
	const drawerContainer = document.createElement( 'div' );

	drawerContainer.setAttribute( 'id', 'helpgent-drawer' );

	return drawerContainer;
}

function Drawer( {
	isOpen,
	className,
	onClose,
	position = 'left',
	clearDomAfterClosed = true,
	children,
} ) {
	const bodyReference = useRef( document.querySelector( 'body' ) );
	const drawerPortalReference = useRef(
		document.getElementById( 'helpgent-drawer' ) || createDrawerPortal()
	);

	const isTransitioning = useMountTransition( isOpen, 300 );

	useEffect( () => {
		bodyReference.current.appendChild( drawerPortalReference.current );

		return () => {
			drawerPortalReference.current.remove();

			bodyReference.current.style.overflow = '';
		};
	}, [] );

	useEffect( () => {
		if ( isOpen ) {
			bodyReference.current.style.overflow = 'hidden';
		} else {
			bodyReference.current.style.overflow = '';
		}
	}, [ isOpen ] );

	if ( ! isTransitioning && clearDomAfterClosed && ! isOpen ) {
		return null;
	}

	return createPortal(
		<DrawerStyle
			aria-hidden={ ! isOpen }
			className={ `${ className } ${
				isOpen ? 'helpgent-drawer-active' : ''
			} ${ isTransitioning ? 'helpgent-in' : '' }` }
		>
			<div
				className={ `helpgent-drawer-content helpgent-drawer-${ position }` }
				role="dialog"
			>
				{ children }
			</div>
			<div className="helpgent-drawer-backdrop" onClick={ onClose }></div>
		</DrawerStyle>,
		drawerPortalReference.current
	);
}

export default Drawer;
