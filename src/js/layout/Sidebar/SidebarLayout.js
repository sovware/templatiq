import React from 'react';

const SidebarLayout = ({ children }) => {
	return (
		<>
			<h2>Sidebar</h2>
			<span>Filter</span>

			{ children }
		</>
	);
};

export default SidebarLayout;
