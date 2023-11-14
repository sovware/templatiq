import AppLayout from '@layout/AppLayout';
import { TemplatePackStyle } from "@root/style";
import AllTemplates from "@components/AllTemplates";

export default function MyFavoritesModule() {
	return (
		<AppLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<TemplatePackStyle className="templatiq__content">
					<AllTemplates />
				</TemplatePackStyle>
			</div>
		</AppLayout>
	);
}
