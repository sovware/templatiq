import Header from '@layout/Header';
import store from '@store/index';
import { select } from '@wordpress/data';

const TemplateDetailsLayout = ( { children } ) => {
	const cloudStarted =  select( store ).getCloudStarted();

	return (
		<div className={`templatiq ${cloudStarted ? 'templatiq-cloud' : ''}`}>
			<Header type="detailsHeader" />
			{ children }
		</div>
	);
};

export default TemplateDetailsLayout;
