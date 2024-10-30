import AllTemplates from '@components/AllTemplates';
import AppLayout from '@layout/AppLayout';
import CloudLayout from '@layout/CloudLayout';
import Header from '@layout/Header';
import { TemplatePackStyle } from '@root/style';
import store from '@store/index';
import { select } from '@wordpress/data';

export default function TemplatePackModule( props ) {
	const { type } = props;

	const cloudStarted =  select( store ).getCloudStarted();
	console.log('@chk Cloud TemplatePackModule', cloudStarted);

	return (
		!cloudStarted ? 
		<AppLayout>
			<TemplatePackStyle className="templatiq__content">
				<AllTemplates templateType={ type } />
			</TemplatePackStyle>
		</AppLayout> :
		<CloudLayout>
			<TemplatePackStyle className="templatiq__content">
				<Header type='cloud' />
				<AllTemplates templateType='cloud' />
			</TemplatePackStyle>
		</CloudLayout>
	);
}
