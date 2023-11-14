
import Popup from "@components/Popup";
import { useQuery } from '@tanstack/react-query';
import { TemplateDetailsStyle } from './style';

import TemplateDetailsLayout from './TemplateDetailsLayout';
import TemplateDetailsHeader from './TemplateDetailsHeader';
import TemplateDetailsContent from './TemplateDetailsContent';
import TemplateDetailsWidget from './TemplateDetailsWidget';

export default function TemplateDetailsModule(props) {
	const { templateSlug } = props;

	const { isLoading, error, data } = useQuery(['templates'], () => fetch('http://templatemarket.local/wp-json/templatiq/template/library').then(res =>
		res.json()
	));

	if (isLoading) return 'Loading...';
	if (error) return 'An error has occurred: ' + error.message;

	// Retrive Template Details Data
	const templateDetails = data && data.templates.find((template) => template.slug === templateSlug);
  
  	if (!templateDetails) return 'Template not found';

  	const { thumbnail } = templateDetails;

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
