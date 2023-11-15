
import Popup from "@components/Popup";
import { useQuery } from '@tanstack/react-query';
import { TemplateDetailsStyle } from './style';

import TemplateDetailsLayout from './TemplateDetailsLayout';
import TemplateDetailsHeader from './TemplateDetailsHeader';
import TemplateDetailsContent from './TemplateDetailsContent';
import TemplateDetailsWidget from './TemplateDetailsWidget';

export default function TemplateDetailsModule(props) {
	const { templateSlug } = props;

	const { isLoading, error, data } = useQuery(['templates'], () => fetch(`${template_market_obj.rest_args.endpoint}/template/library`).then(res =>
		res.json()
	));

	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;

	// Retrive Template Details Data
	const templateDetails = data && data.templates.find((template) => template.slug === templateSlug);
  
  	if (!templateDetails) return 'Template not found';

	return (
		<TemplateDetailsLayout>
			<Popup />
			<TemplateDetailsStyle className="templatiq__details">
				<TemplateDetailsHeader 
					item={templateDetails} 
				/>
				<div className="templatiq__details__wrapper">
					<TemplateDetailsContent
						item={templateDetails}
					/>

					<TemplateDetailsWidget
						item={templateDetails}
					/>
				</div>
			</TemplateDetailsStyle>
		</TemplateDetailsLayout>
	);
}
