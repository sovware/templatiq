import { useMutation } from '@tanstack/react-query';
import postData from '@helper/postData.js';

const useUpdateMutation = ( path ) => {
	return useMutation( ( data ) => postData( path, data ) );
};

export default useUpdateMutation;
