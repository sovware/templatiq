import { useMutation } from '@tanstack/react-query';
import updateData from '@helper/updateData.js';

const useUpdateMutation = ( path ) => {
	return useMutation( ( data ) => updateData( path, data ) );
};

export default useUpdateMutation;
