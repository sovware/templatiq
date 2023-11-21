import AppLayout from '@layout/AppLayout';
import { TemplatePackStyle } from '@root/style';
import AllTemplates from "@components/AllTemplates";

export default function TemplatePackModule(props) {
    const { type } = props;

	return (
		<AppLayout>
			<TemplatePackStyle className="templatiq__content">
				<AllTemplates
					templateType={type}
				/>
			</TemplatePackStyle>
		</AppLayout>
	);
}
