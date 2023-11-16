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

// import Store from '../store';


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

	const theme = {
		direction: dir,
	};

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
