import { useInfiniteQuery } from '@tanstack/react-query';
import dataFetcher from '@helper/fetchData';
import getErrorMessage from '@helper/getError';
import { addQueryArgs } from '@wordpress/url';

export default function useInfiniteFetchData(
	queryKey,
	path,
	per_page,
	options
) {
	const {
		data,
		isSuccess,
		isRefetching,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
		error,
		isLoading,
	} = useInfiniteQuery(
		queryKey,
		( { pageParam = 1 } ) =>
			dataFetcher( addQueryArgs( path, { page: pageParam } ) ),
		{
			getNextPageParam: ( lastPage, allPages ) => {
				const nextPage =
					lastPage.length === per_page
						? allPages.length + 1
						: undefined;
				return nextPage;
			},
			...options,
		}
	);

	return {
		data: !! error || ! isSuccess ? null : data,
		isSuccess,
		isRefetching,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
		isLoading,
		error,
		errorMessage: !! error
			? getErrorMessage( error ?? error.data.status )
			: '',
		isError: !! error,
	};
}
