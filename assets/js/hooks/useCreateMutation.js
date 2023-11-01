import { useMutation } from '@tanstack/react-query';
import postData from '@helper/postData.js';

const useCreateMutation = ( path ) => {
	return useMutation( ( data ) => postData( path, data ) );
};

export default useCreateMutation;
