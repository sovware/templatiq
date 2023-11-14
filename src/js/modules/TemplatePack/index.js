import AppLayout from '@layout/AppLayout';
import { TemplatePackStyle } from '@root/style';
import AllTemplates from "@components/AllTemplates";

export default function TemplatePackModule() {
	return (
		<AppLayout>
			<TemplatePackStyle className="templatiq__content">
				<AllTemplates />
			</TemplatePackStyle>
		</AppLayout>
	);
}
