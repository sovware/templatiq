import DashboardLayout from '@layout/DashboardLayout';
import { TemplatePackStyle } from "@root/style";
import AllTemplates from "@components/AllTemplates";

export default function MyFavoritesModule() {
	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<TemplatePackStyle className="templatiq__content">
					<AllTemplates />
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
