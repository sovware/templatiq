import useStore from '@hooks/useStore';
import { getGlobalState, updateGlobalState } from '@helper/utils';
import { useResponseState } from '../../context/ResponseStateContext';
import { ResponseTabStyle } from './style';

export default function ResponseTab( props ) {
	const { paramsHook: useParams } = getGlobalState(
		'helpgent_router_references',
		null
	);
	const { id } = useParams();
	const { getStoreData } = useStore();
	const formData = getStoreData( [ 'helpgent-response-form' ] );
	const { responseState, setResponseState } = useResponseState();
	const { status } = responseState;
	console.log( formData );
	const totalCompleted = formData && formData.form.total_response.completed;
	const totalIncomplete =
		formData && formData.form.total_response.incompleted;
	const totalResponse =
		formData && parseInt( totalCompleted ) + parseInt( totalIncomplete );

	function handleUpdateResponseTab( selectedStatus ) {
		setResponseState( {
			...responseState,
			status: selectedStatus,
			responseQueryKey: selectedStatus,
		} );
		updateGlobalState( 'helpgent_responseQueryKey', selectedStatus );
	}

	return (
		<ResponseTabStyle className="helpgent-d-flex">
			<li
				className={
					status === null
						? 'helpgent-response-tab-single helpgent-active'
						: 'helpgent-response-tab-single'
				}
				onClick={ () => handleUpdateResponseTab( null ) }
			>
				All ({ totalResponse || 0 })
			</li>
			<li
				className={
					status === 'completed'
						? 'helpgent-response-tab-single helpgent-active'
						: 'helpgent-response-tab-single'
				}
				onClick={ () => handleUpdateResponseTab( 'completed' ) }
			>
				Completed ({ totalCompleted || 0 })
			</li>
			<li
				className={
					status === 'incompleted'
						? 'helpgent-response-tab-single helpgent-active'
						: 'helpgent-response-tab-single'
				}
				onClick={ () => handleUpdateResponseTab( 'incompleted' ) }
			>
				Incomplete ({ totalIncomplete || 0 })
			</li>
		</ResponseTabStyle>
	);
}
