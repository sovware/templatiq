import { useQuery } from '@tanstack/react-query';
import fetchData from '@helper/fetchData';
import getErrorMessage from '@helper/getError';

export default function useFetchData( queryKey, path, config ) {
	const defaultQueryConfig = {
		refetchOnWindowFocus: false,
		keepPreviousData: true,
		staleTime: 10000,
	};

	const {
		data,
		isLoading,
		error,
		isError,
		isFetching,
		isSuccess,
		isRefetching,
	} = useQuery(
		queryKey,
		() => fetchData( path, config?.parser || {} ),
		config?.queryConfig || defaultQueryConfig
	);
	return {
		data: !! error || isLoading ? null : data,
		isLoading,
		errorMessage: !! error
			? getErrorMessage( error ? error?.data?.status : '' )
			: '',
		isError: !! isError,
		isFetching: isFetching,
		isSuccess: isSuccess,
		isRefetching: isRefetching,
	};
}
