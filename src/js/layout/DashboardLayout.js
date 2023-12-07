import { useEffect, useState } from 'react';
import { select, subscribe } from '@wordpress/data';
import store from '@store/index';

import Header from '@layout/Header';
import AdminSidebar from '@layout/Sidebar/AdminSidebar';

import { LayoutStyle } from './style.js';

const DashboardLayout = ({ children }) => {
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

	return (
		<div className="templatiq">
			<Header />
			<LayoutStyle className="templatiq__wrapper">
				<AdminSidebar /> 
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default DashboardLayout;

