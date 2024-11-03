import ContentLoading from '@components/ContentLoading';
import store from '@store/index';
import { select, subscribe } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { TemplateDetailsStyle } from './style';

import TemplateDetailsContent from './TemplateDetailsContent';
import TemplateDetailsHeader from './TemplateDetailsHeader';
import TemplateDetailsLayout from './TemplateDetailsLayout';
import TemplateDetailsWidget from './TemplateDetailsWidget';

export default function TemplateDetailsModule( props ) {
	const { templateSlug } = props;
	const [ loading, setLoading ] = useState( true );
	const [ templateDetails, setTemplateDetails ] = useState();
	const cloudStarted =  select( store ).getCloudStarted();

	const fetchData = async () => {
		try {
			const templateData = select( store ).getTemplates();

			const singleTemplate =
				templateData &&
				templateData.find(
					( template ) => template.slug === templateSlug
				);
			setTemplateDetails( singleTemplate && singleTemplate );

			setLoading( false );

			const storeUpdate = subscribe( () => {
				const updatedTemplateData = select( store ).getTemplates();
				const updatedSingleTemplate =
					updatedTemplateData &&
					updatedTemplateData.find(
						( template ) => template.slug === templateSlug
					);

				setTemplateDetails( updatedSingleTemplate );
			} );

			// Clean up the subscription when the component is unmounted
			return () => storeUpdate();
		} catch ( error ) {
			setLoading( false );
		}
	};

	useEffect( () => {
		fetchData();
	}, [] );

	return (
		<TemplateDetailsLayout>
			{ loading ? (
				<ContentLoading style={ { margin: 0, minHeight: 'unset' } } />
			) : (
				templateDetails && (
					<TemplateDetailsStyle className={`templatiq__details ${cloudStarted ? 'templatiq__details--cloud' : ''}`}>
						<TemplateDetailsHeader item={ templateDetails } />
						<div className="templatiq__details__wrapper">
							<TemplateDetailsContent item={ templateDetails } />
							<TemplateDetailsWidget item={ templateDetails } />
						</div>
					</TemplateDetailsStyle>
				)
			) }
		</TemplateDetailsLayout>
	);
}
