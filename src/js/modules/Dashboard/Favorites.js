import AllTemplates from '@components/AllTemplates';
import DashboardLayout from '@layout/DashboardLayout';
import { TemplatePackStyle } from '@root/style';

export default function MyFavoritesModule( props ) {
	const { type, status } = props;

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard">
				<TemplatePackStyle className="templatiq__content">
					<AllTemplates
						templateStatus={ status }
						templateType={ type }
					/>
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
