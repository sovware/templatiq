import { lazy, Suspense, useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { applyFilters } from '@wordpress/hooks';
import {
	HashRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ContentLoading from '@components/ContentLoading';

import { dispatch } from '@wordpress/data';
import store from '@store/index';

const TemplatePack = lazy(() => import('./pages/TemplatePack'));
const TemplateDetails = lazy(() => import('./pages/TemplateDetails'));
const Pages = lazy(() => import('./pages/Pages'));
const Blocks = lazy(() => import('./pages/Blocks'));
const SignIn = lazy(() => import('./pages/Signin'));
const SignUp = lazy(() => import('./pages/Signup'));
const MyFavorites = lazy(() => import('./pages/dashboard/Favorites'));
const MyDownloads = lazy(() => import('./pages/dashboard/Downloads'));
const MyPurchase = lazy(() => import('./pages/dashboard/Purchase'));
const MyAccount = lazy(() => import('./pages/dashboard/Account'));

export default function App() { 
	const [ dir, setDir ] = useState( 'ltr' );
	const [ loading, setLoading ] = useState(false);
	const [ data, setData ] = useState(null);

	const theme = {
		direction: dir,
	};

	const getUserInfo = async () => {
		apiFetch( { 
			path: 'templatiq/account/data',
			method: 'GET',
		}).then( ( res ) => { 
			const data = res.body;

			const updatedUserInfo = {
				isLoggedIn: data.token ? true : false,
				userEmail: data.user_email,
				userDisplayName: data.user_display_name,
				bookmarks: data.bookmarks,
				downloads: data.downloads,
				purchased: data.purchased,
			};

			// Dispatch the action to update the login status in the store
			dispatch(store).setUserInfo(updatedUserInfo);
		} );
	};

	const getTemplates = async () => {
		const libraryData = await apiFetch({
			path: 'templatiq/template/library',
			method: 'GET',
		});

		dispatch(store).setTemplates(libraryData.templates);
		dispatch(store).setLibraryData(libraryData);

		return libraryData;
	};

	useEffect( () => {
		getUserInfo();
		getTemplates();

	}, [] );

	const adminRoutes = applyFilters( 'templatiq_admin_routes', [
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
			path: `/dashboard`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/favorites`,
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
	] );

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
			path: `/dashboard`,
			element: <MyFavorites />,
		},
		{
			path: `/dashboard/favorites`,
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
				<Suspense fallback={ <ContentLoading /> }>
					<ThemeProvider theme={ theme }>
						<Routes>
							{ adminRoutes.map( ( routeItem, index ) => {
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
