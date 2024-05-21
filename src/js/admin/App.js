import ContentLoading from '@components/ContentLoading';
import fetchData from '@helper/fetchData';
import { Suspense, lazy, useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from '@store/index';
import { dispatch } from '@wordpress/data';

const TemplatePack = lazy( () => import( './pages/TemplatePack' ) );
const TemplateDetails = lazy( () => import( './pages/TemplateDetails' ) );
const Pages = lazy( () => import( './pages/Pages' ) );
const Blocks = lazy( () => import( './pages/Blocks' ) );
const SignIn = lazy( () => import( './pages/Signin' ) );
const SignUp = lazy( () => import( './pages/Signup' ) );
const MyFavorites = lazy( () => import( './pages/dashboard/Favorites' ) );
const MyDownloads = lazy( () => import( './pages/dashboard/Downloads' ) );
const MyPurchase = lazy( () => import( './pages/dashboard/Purchase' ) );
const MyAccount = lazy( () => import( './pages/dashboard/Account' ) );

export default function App() {
	const [ dir, setDir ] = useState( 'ltr' );
	const [ dataFetched, setDataFetched ] = useState( false );
	const [ elementorEditorEnabled, setElementorEditorEnabled ] =
		useState( false );

	const theme = {
		direction: dir,
	};

	useEffect( () => {
		fetchData( 'templatiq/template/library' )
			.then( ( res ) => {
				dispatch( store ).setTemplates( res.templates );
				dispatch( store ).setLibraryData( res );
			} )
			.then( () => {
				fetchData( 'templatiq/account/data' ).then( ( res ) => {					
					const data = res;

					const updatedUserInfo = {
						isLoggedIn: data.token ? true : false,
						userEmail: data.user_email,
						userDisplayName: data.user_display_name,
						bookmarks: data.bookmarks,
						downloads: data.downloads,
						purchased: data.purchased,
					};

					// Dispatch the action to update the login status in the store
					dispatch( store ).setUserInfo( updatedUserInfo );

					setDataFetched( true );
				} );
			} );

		// Check if the 'elementor-editor-active' class is present on the body element
		const isElementorEditorActive = document.body.classList.contains(
			'elementor-editor-active'
		);

		// Set the state variable based on the presence of Elementor Editor
		setElementorEditorEnabled( isElementorEditorActive );
	}, [] );

	const adminRoutes = applyFilters( 'templatiq_admin_routes', [
		{
			path: `/*`,
			element: ! elementorEditorEnabled ? <TemplatePack /> : <Pages />,
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

	// const templateRoutes = [
	// 	{
	// 		path: `/*`,
	// 		element: <TemplatePack />,
	// 	},
	// 	{
	// 		path: '/pages',
	// 		element: <Pages />,
	// 	},
	// 	{
	// 		path: `/blocks`,
	// 		element: <Blocks />,
	// 	},
	// 	{
	// 		path: `/template/:slug`,
	// 		element: <TemplateDetails />,
	// 	},
	// 	{
	// 		path: `/signin`,
	// 		element: <SignIn />,
	// 	},
	// 	{
	// 		path: `/signup`,
	// 		element: <SignUp />,
	// 	},
	// 	{
	// 		path: `/dashboard`,
	// 		element: <MyFavorites />,
	// 	},
	// 	{
	// 		path: `/dashboard/favorites`,
	// 		element: <MyFavorites />,
	// 	},
	// 	{
	// 		path: `/dashboard/downloads`,
	// 		element: <MyDownloads />,
	// 	},
	// 	{
	// 		path: '/dashboard/purchase',
	// 		element: <MyPurchase />,
	// 	},
	// 	{
	// 		path: `/dashboard/account`,
	// 		element: <MyAccount />,
	// 	},
	// ];

	return (
		<>
			<HashRouter>
				<Suspense fallback={ <ContentLoading /> }>
					{ dataFetched ? (
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
					) : (
						<ContentLoading />
					) }
				</Suspense>
			</HashRouter>
		</>
	);
}
