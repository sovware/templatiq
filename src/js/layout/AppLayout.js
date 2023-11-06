import React from 'react';
import Header from './Header/index.js';
import Sidebar from './Sidebar/index.js';
import AdminSidebar from './Sidebar/AdminSidebar.js';

const AppLayout = ({ children }) => {
	let isLoggedIn = false;

	return (
		<div className="templatiq-app-wrap">
			<Header />

			{isLoggedIn ? <AdminSidebar /> : <Sidebar /> }

			{ children }
		</div>
	);
};

export default AppLayout;

