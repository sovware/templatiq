import Sidebar from '@layout/Sidebar';

import { LayoutStyle } from './style.js';

const CloudLayout = ( { children } ) => {
	return (
		<div className="templatiq templatiq-cloud">
			<LayoutStyle className="templatiq__wrapper">
				<Sidebar type="cloud" />
				{ children }
			</LayoutStyle>
		</div>
	);
};

export default CloudLayout;