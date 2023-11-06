import { useMutation } from '@tanstack/react-query';
import deleteData from '@helper/deleteData.js';

const useDeleteMutation = ( path ) => {
	return useMutation( ( data ) => {
		if ( typeof data === 'object' ) {
			if ( data.id && data.data ) {
				path = `${ path }/${ data.id }`;
				data = data.data;
			}

			return deleteData( path, data );
		}
		path = data ? `${ path }/${ data }` : path;
		return deleteData( path, data || {} );
	} );
};

export default useDeleteMutation;
