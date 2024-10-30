import Sidebar from '@layout/Sidebar';
import store from '@store/index';
import { select } from '@wordpress/data';

import { LayoutStyle } from './style.js';

const CloudLayout = ( { children } ) => {
	const cloudStarted =  select( store ).getCloudStarted();
	console.log('@chk CloudLayout', cloudStarted);

	return (
		<div className="templatiq templatiq-cloud">
			<LayoutStyle className="templatiq__wrapper">
				<Sidebar />
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default CloudLayout;