import { useState, useEffect } from '@wordpress/element';
import { select, subscribe } from '@wordpress/data';
import store from '@store/index';
import { TemplateDetailsStyle } from './style';
import ContentLoading from '@components/ContentLoading';

import TemplateDetailsLayout from './TemplateDetailsLayout';
import TemplateDetailsHeader from './TemplateDetailsHeader';
import TemplateDetailsContent from './TemplateDetailsContent';
import TemplateDetailsWidget from './TemplateDetailsWidget';

export default function TemplateDetailsModule( props ) {
	const { templateSlug } = props;
	const [ loading, setLoading ] = useState( true );
	const [ templateDetails, setTemplateDetails ] = useState();

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
			console.error( 'Error fetching data:', error );
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
					<TemplateDetailsStyle className="templatiq__details">
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
