import React from 'react';
import Header from './Header/index.js';
import Sidebar from './Sidebar/index.js';
import AdminSidebar from './Sidebar/AdminSidebar.js';

import { LayoutStyle } from './style.js';

const AppLayout = ({ children }) => {
	let isLoggedIn = true;

	return (
		<div className="templatiq">
			<Header />
			<LayoutStyle className="templatiq__wrapper">
				{isLoggedIn ? <AdminSidebar /> : <Sidebar /> }

				{ children }
			</LayoutStyle>
		</div>
	);
};

export default AppLayout;

