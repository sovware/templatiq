import { useResponseState } from '../../context/ResponseStateContext';
import ResponseTab from './ResponseTab';
import ResponseSearch from './ResponseSearch';
import ResponseList from './ResponseList';
import ResponseFilter from './ResponseFilter';
export default function Sidebar( props ) {
	const {
		data,
		isSuccess,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
		isClientModeActive,
		baseApiRoute,
	} = props;
	const { responseState } = useResponseState();
	const { status } = responseState;

	return (
		<>
			{ status !== 'archive' && (
				<ResponseSearch
					data={ data }
					isClientModeActive={ isClientModeActive }
				/>
			) }
			{ status !== 'archive' && ! isClientModeActive && (
				<ResponseTab data={ data } />
			) }
			{ status !== 'archive' && <ResponseFilter /> }
			<ResponseList
				data={ data }
				isSuccess={ isSuccess }
				isFetchingNextPage={ isFetchingNextPage }
				hasNextPage={ hasNextPage }
				fetchNextPage={ fetchNextPage }
				isClientModeActive={ isClientModeActive }
				baseApiRoute={ baseApiRoute }
			/>
		</>
	);
}
