import { useEffect, useState } from 'react';
import { select, subscribe } from '@wordpress/data';
import store from '../store';

import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';
import AdminSidebar from '@layout/Sidebar/AdminSidebar';

import { LayoutStyle } from './style.js';

const AppLayout = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(select(store).getUserInfo().isLoggedIn);

	useEffect(() => {
		// Subscribe to changes in the store's user info
		const unsubscribe = subscribe(() => {
			const { isLoggedIn } = select(store).getUserInfo();
			setIsLoggedIn(isLoggedIn);
		});

		// Unsubscribe when the component is unmounted
		return () => unsubscribe();
	}, []);

	// const { isLoggedIn } = select( store ).getUserInfo();

	return (
		<div className="templatiq">
			<Header />
			<LayoutStyle className="templatiq__wrapper">
				{
					isLoggedIn ?
					<AdminSidebar /> :
					<Sidebar />
				}
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default AppLayout;

