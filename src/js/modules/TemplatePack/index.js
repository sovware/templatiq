import { TemplatePackStyle } from '@root/style';
import AllTemplates from "@components/AllTemplates";

export default function TemplatePackModule() {
	return (
		<TemplatePackStyle className="templatiq__content">
			<AllTemplates />
		</TemplatePackStyle>
	);
}
