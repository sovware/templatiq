import { useMutation } from '@tanstack/react-query';
import postData from '@helper/postData.js';

const usePostMutation = ( path, config ) => {
	return useMutation( ( data ) => postData( path, data, config ) );
};

export default usePostMutation;
