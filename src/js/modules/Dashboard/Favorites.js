import DashboardLayout from '@layout/DashboardLayout';
import { TemplatePackStyle } from "@root/style";
import AllTemplates from "@components/AllTemplates";

import { select } from '@wordpress/data';
import store from '../../store';

export default function MyFavoritesModule(props) {
	const { type, status } = props;
	const user = select( store ).getUserInfo();

	console.log( 'User: ', user.bookmarked, type, status)

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<TemplatePackStyle className="templatiq__content">
					<AllTemplates 
						user={user}
						templateStatus={status}
						templateType={type}
					/>
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
