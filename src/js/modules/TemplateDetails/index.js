import { select } from '@wordpress/data';
import store from '../../store';
import { TemplateDetailsStyle } from './style';

import TemplateDetailsLayout from './TemplateDetailsLayout';
import TemplateDetailsHeader from './TemplateDetailsHeader';
import TemplateDetailsContent from './TemplateDetailsContent';
import TemplateDetailsWidget from './TemplateDetailsWidget';

export default function TemplateDetailsModule(props) {
	const { templateSlug } = props;
	const templateData = select( store ).getTemplates();

	// Retrive Template Details Data
	const templateDetails = templateData.find((template) => template.slug === templateSlug);
  
  	if (!templateDetails) return 'Template not found';

	return (
		<TemplateDetailsLayout>
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
