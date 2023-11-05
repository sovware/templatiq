import { createPortal, useState, useEffect, useRef } from '@wordpress/element';
import useMountTransition from '../../hooks/useMountTransition';
import { DrawerStyle } from './style';

function createDrawerPortal() {
	const drawerContainer = document.createElement( 'div' );

	drawerContainer.setAttribute( 'id', 'template-market-drawer' );

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
		document.getElementById( 'template-market-drawer' ) || createDrawerPortal()
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
				isOpen ? 'template-market-drawer-active' : ''
			} ${ isTransitioning ? 'template-market-in' : '' }` }
		>
			<div
				className={ `template-market-drawer-content template-market-drawer-${ position }` }
				role="dialog"
			>
				{ children }
			</div>
			<div className="template-market-drawer-backdrop" onClick={ onClose }></div>
		</DrawerStyle>,
		drawerPortalReference.current
	);
}

export default Drawer;
