import { lazy, Suspense, useState, useEffect } from '@wordpress/element';
// import { applyFilters } from '@wordpress/hooks';
import {
	HashRouter,
	Routes,
	Route,
	Link,
	NavLink,
	Switch,
	useNavigate,
	useParams,
	useLocation,
} from 'react-router-dom';
import { updateGlobalState } from '@helper/utils';
import { ThemeProvider } from 'styled-components';


import { dispatch } from '@wordpress/data';
import store from '../store';


import TemplatePack from './pages/TemplatePack';
import TemplateDetails from './pages/TemplateDetails';

import Pages from './pages/Pages'; 
import Blocks from './pages/Blocks'; 
import SignIn from './pages/SIgnin';
import SignUp from './pages/Signup';

import MyFavorites from "./pages/dashboard/Favorites";
import MyDownloads from "./pages/dashboard/Downloads";
import MyPurchase from "./pages/dashboard/Purchase";
import MyAccount from "./pages/dashboard/Account";

export default function App() {
	const [ dir, setDir ] = useState( 'ltr' );
	// const [ isLoggedIn, setLoggedIn ] = useState( false );
	// const [ userName, setUserName ] = useState( '' );
	// const [ userEmail, setUserEmail ] = useState( '' );
	// const [ userDisplayName, setUserDisplayName ] = useState( '' );

	const userInfo = {
		isLoggedIn: false,
		userName: '',
		userEmail: '',
		userDisplayName: '',
	}

	const theme = {
		direction: dir,
	};

	const loggedInStatus = async () => {
		try {
			const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/data`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': template_market_obj.rest_args.nonce,
				},
			});
	
			const data = await response.json();
	
			if (!data.status === 'success') {
				throw new Error('Error Occurred');
			}
	
			if (data.status === 'success') {
				const updatedUserInfo = {
					isLoggedIn: true,
					userName: data.data.user_nicename,
					userEmail: data.data.user_email,
					userDisplayName: data.data.user_display_name,
				};
	
				console.log('updatedUserInfo: ', updatedUserInfo);
	
				// Dispatch the action to update the login status in the store
				dispatch(store).setUserInfo(updatedUserInfo);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in loggedInStatus:', error);
		}
	};

	useEffect(() => {
        loggedInStatus();
    }, []);

	useEffect( () => {
		if ( document.documentElement.getAttribute( 'dir' ) === 'rtl' ) {
			setDir( 'rtl' );
		} else {
			setDir( 'ltr' );
		}
		updateGlobalState( 'templatiq_router_references', {
			navigationHook: useNavigate,
			routeLink: Link,
			routerNavLink: NavLink,
			paramsHook: useParams,
			locationHook: { useLocation },
		} );


	}, [] );

	const templateRoutes = [
		{
			path: `/*`,
			element: <TemplatePack />,
		},
		{
			path: '/pages',
			element: <Pages />,
		},
		{
			path: `/blocks`,
			element: <Blocks />,
		},
		{
			path: `/template/:slug`,
			element: <TemplateDetails />,
		},
		{
			path: `/signin`,
			element: <SignIn />,
		},
		{
			path: `/signup`,
			element: <SignUp />,
		},
		{
			path: `/dashboard/*`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/downloads`,
			element: <MyDownloads />,
		},
		{
			path: '/dashboard/purchase',
			element: <MyPurchase />,
		},
		{
			path: `/dashboard/account`,
			element: <MyAccount />,
		},
	] ;

	return (
		<>
			<HashRouter>
				<Suspense fallback={ <></> }>
					<ThemeProvider theme={ theme }>
						<Routes>
							{ templateRoutes.map( ( routeItem, index ) => {
								return (
									<Route
										key={ index }
										path={ routeItem.path }
										element={ routeItem.element }
									></Route>
								);
							} ) }
						</Routes>
					</ThemeProvider>
				</Suspense>
			</HashRouter>
		</>
	);
}
