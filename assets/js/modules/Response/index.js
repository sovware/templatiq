import { useEffect } from '@wordpress/element';
import ConversationLayout from '@components/ConversationLayout';
import ConversationSidebarTop from '@components/ConversationSidebarTop';
import useInfiniteFetchData from '@hooks/useInfiniteFetchData.js';
import { getGlobalState } from '@helper/utils';
import Sidebar from './components/sidebar';
import { ResponseStateProvider } from './context/ResponseStateContext';
import { useResponseState } from './context/ResponseStateContext';
import { addQueryArgs } from '@wordpress/url';
import { QueryClientProvider } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import queryStore from '../../queryStore';

const Response = ( props ) => {
	const { baseApiRoute, isClientModeActive } = props;
	const globalFilterTags = getGlobalState( 'helpgent_filterByTags', null );

	const perPage = 10;
	const { responseState, setResponseState } = useResponseState();
	const queryClient = useQueryClient();
	let formId = null;
	if ( ! isClientModeActive ) {
		const { paramsHook: useParams } = getGlobalState(
			'helpgent_router_references',
			null
		);
		const { id } = useParams();
		formId = id;
	}
	const {
		status,
		responseQueryKey,
		activeResponse,
		orderBy,
		responseSearchText,
		responseAutoActivate,
		filterByTags,
	} = responseState;
	const fetchParams = {
		per_page: perPage,
		tag_ids: filterByTags,
		search: responseSearchText,
		order_by: orderBy,
		is_archive: status === 'archive' ? '1' : '0',
		is_completed: status === 'completed' ? '1' : '0',
	};
	if ( ! isClientModeActive ) {
		fetchParams.form_id = formId;
	}
	if ( ! status || status === 'archive' ) {
		delete fetchParams.is_completed;
	}
	const {
		data: responseData,
		isSuccess,
		isRefetching,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
		isError,
		errorMessage,
	} = useInfiniteFetchData(
		[ `helpgent-responses-${ responseQueryKey }` ],
		addQueryArgs( baseApiRoute, fetchParams ),
		10,
		{
			refetchOnWindowFocus: true,
			keepPreviousData: true,
			staleTime: 10000,
		}
	);

	useEffect( () => {
		if ( globalFilterTags ) {
			setResponseState( {
				...responseState,
				responseQueryKey: `tag-filter-${ responseQueryKey }`,
				filterByTags: globalFilterTags,
			} );
		}
	}, [ globalFilterTags ] );

	useEffect( () => {
		const availableActiveResponse = responseData?.pages[ 0 ].filter(
			( item ) => item?.id === activeResponse?.id
		);

		if ( availableActiveResponse?.length > 0 ) {
			setResponseState( ( currentValue ) => ( {
				...currentValue,
				activeResponse: availableActiveResponse[ 0 ],
			} ) );
		} else {
			const firstResponse = responseData && responseData?.pages[ 0 ][ 0 ];
			if ( firstResponse ) {
				setResponseState( ( currentValue ) => ( {
					...currentValue,
					activeResponse: firstResponse,
					messageQueryKey: `message-${ firstResponse.id }`,
					answerQueryKey: `answer-${ firstResponse.id }`,
				} ) );
			} else {
				setResponseState( ( currentValue ) => ( {
					...currentValue,
					activeResponse: null,
				} ) );
			}
		}
	}, [ isSuccess, responseData ] );

	return (
		<ConversationLayout
			sidebarTop={
				isClientModeActive ? (
					<UserDashboardSidebarTop
						moduleState={ responseState }
						queryClient={ queryClient }
					/>
				) : (
					<ConversationSidebarTop
						moduleState={ responseState }
						setModuleState={ setResponseState }
						isArchiveAvailable={ true }
						queryClient={ queryClient }
					/>
				)
			}
			sidebarChild={
				<Sidebar
					data={ responseData }
					isRefetching={ isRefetching }
					isSuccess={ isSuccess }
					isFetchingNextPage={ isFetchingNextPage }
					hasNextPage={ hasNextPage }
					fetchNextPage={ fetchNextPage }
					baseApiRoute={ baseApiRoute }
					isClientModeActive={ isClientModeActive }
				/>
			}
			mainChild={
				responseData && (
					<Conversation
						baseApiRoute={ baseApiRoute }
						isClientModeActive={ isClientModeActive }
					/>
				)
			}
		/>
	);
};

export default function ResponseModule( props ) {
	return (
		<QueryClientProvider client={ queryStore }>
			<ResponseStateProvider>
				<Response { ...props } />
			</ResponseStateProvider>
		</QueryClientProvider>
	);
}
