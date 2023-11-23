import Header from '@layout/Header';
import Sidebar from '@layout/Sidebar';

import { LayoutStyle } from './style.js';

const AppLayout = ({ children }) => {
	return (
		<div className="templatiq">
			<Header />
			<LayoutStyle className="templatiq__wrapper">
				<Sidebar />
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default AppLayout;

