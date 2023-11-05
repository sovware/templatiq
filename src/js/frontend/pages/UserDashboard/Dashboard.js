import { useState, useEffect } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { ResponseModule } from '@template-market/modules';
import ReactSVG from 'react-inlinesvg';
import userCircle from '@icon/user-circle.svg';
import signOutIcon from '@icon/sign-out-alt.svg';
import rotateRight from '@icon/rotate-right.svg';
import { QueryClientProvider } from '@tanstack/react-query';
import queryStore from '../../../queryStore';
import Login from './Login';
import { DashboardWrapper } from './style';
import { getGlobalState } from '@helper/utils';

export default function Dashboard() {
	const container = document.querySelector( '.template-market-user-dashboard' );
	let userData = JSON.parse( container.dataset.user );
	const [ showLogin, setShowLogin ] = useState( false );

	useEffect( () => {
		//Responsive fix for small container. i.e: screenSize < 768px
		const userDashboard = document.querySelector(
			'.template-market-user-dashboard'
		);
		const userDashboardWidth = userDashboard.clientWidth;
		const contentWrap = document.querySelector(
			'.template-market-conversation-main'
		);
		const sidebar = document.querySelector( '.template-market-sidebar' );
		if ( userDashboardWidth < 768 ) {
			if ( contentWrap && sidebar ) {
				contentWrap.classList.remove(
					'template-market-conversation-main--active'
				);
				sidebar.style.display = 'none';
				sidebar.classList.add( 'template-market-sidebar--active' );
			}
		}
	}, [] );

	const deleteCookie = ( cookieName ) => {
		document.cookie = `${ cookieName }=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	};

	const handleDeleteCookieClick = () => {
		deleteCookie( 'template-market_guest_token' );
		setShowLogin( true );
	};

	return (
		<DashboardWrapper>
			<div
				className={ `template-market-user-dashboard__contents ${
					userData.length === 0 || showLogin
						? 'template-market-user-dashboard__contents--login'
						: ''
				}` }
			>
				{ userData.is_guest === '1' && ! showLogin && (
					<div className="template-market-user-dashboard__actions">
						<span className="template-market-user-status">
							<ReactSVG src={ userCircle } />
							Logged in as guest
						</span>
						<button
							className="template-market-btn template-market-btn-dark template-market-btn-xs template-market-btn-icon"
							onClick={ handleDeleteCookieClick }
						>
							<ReactSVG src={ signOutIcon } />
							Sign Out
						</button>
					</div>
				) }
				{ userData.length === 0 || showLogin ? (
					<QueryClientProvider client={ queryStore }>
						<Login />
					</QueryClientProvider>
				) : (
					<ResponseModule
						baseApiRoute="/template-market/response"
						isClientModeActive={ true }
					/>
				) }
			</div>
		</DashboardWrapper>
	);
}
