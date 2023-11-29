
import Preloader from "@components/Preloader";
import { useQuery } from '@tanstack/react-query';
import { TemplateDetailsStyle } from './style';

import TemplateDetailsLayout from './TemplateDetailsLayout';
import TemplateDetailsHeader from './TemplateDetailsHeader';
import TemplateDetailsContent from './TemplateDetailsContent';
import TemplateDetailsWidget from './TemplateDetailsWidget';

export default function TemplateDetailsModule(props) {
	const { templateSlug } = props;

	const { isLoading, error, data } = useQuery(['templates'], () => fetch(
		`${template_market_obj.rest_args.endpoint}/template/library`, 
        {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': template_market_obj.rest_args.nonce,
			}
		}).then(res =>
		res.json()
	));

	if (isLoading) 
    return (
        <div className="templatiq-loader">
            <div className="templatiq-loader__spinner">
				<Preloader />
            </div>
        </div>
    );

	if (error) 
    return (
        <div className="templatiq-loader">
            <div className="templatiq-loader__spinner">
                {error.message}
            </div>
        </div>
    );

	// Retrive Template Details Data
	const templateDetails = data && data.templates.find((template) => template.slug === templateSlug);
  
  	if (!templateDetails) return 'Template not found';

	console.log('TemplateDetailsModule templateDetails:', templateDetails);

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
