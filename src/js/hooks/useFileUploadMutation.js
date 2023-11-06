import { useMutation } from '@tanstack/react-query';
import dataFetch from '@helper/dataFetch.js';

const useFileUploadMutation = ( path, config ) => {
	const nonce =
		templatiq_localization && templatiq_localization.rest_nonce
			? templatiq_localization.rest_nonce
			: '';
	const restURL =
		templatiq_localization && templatiq_localization.rest_url
			? templatiq_localization.rest_url
			: '';

	const defaultConfig = {
		method: 'post',
		baseURL: restURL,
		headers: {
			'X-WP-Nonce': nonce,
		},
	};

	config =
		config && typeof config === 'object' && ! Array.isArray( config )
			? { ...defaultConfig, ...config }
			: defaultConfig;

	return useMutation( ( mutationConfig ) => {
		return dataFetch( path, { ...config, ...mutationConfig } );
	} );
};

export default useFileUploadMutation;
