import AppLayout from '@layout/AppLayout';
import { TemplatePackStyle } from '@root/style';
import AllTemplates from "@components/AllTemplates";

export default function TemplatePackModule(props) {
    const { type } = props;
    
    console.log('Page Type: ', props, type)

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
