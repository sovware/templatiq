import Select from 'react-select';
import { useQueryClient } from '@tanstack/react-query';
import { updateGlobalState } from '@helper/utils';
import { useResponseState } from '../../context/ResponseStateContext';
import ReactSVG from 'react-inlinesvg';
import sort from '@icon/sort.svg';
import { ResponseFilterStyle } from './style';
export default function ResponseFilter() {
	const { responseState, setResponseState } = useResponseState();
	const { messageQueryKey } = responseState;
	const queryClient = useQueryClient();
	const filterOption = [
		{
			label: 'Latest',
			value: 'latest',
		},
		{
			label: 'Unread',
			value: 'unread',
		},
		{
			label: 'Read',
			value: 'read',
		},
		{
			label: 'Oldest',
			value: 'oldest',
		},
	];

	function handleSelectFilterOption( selectedEvent ) {
		setResponseState( {
			...responseState,
			orderBy: selectedEvent.value,
			responseQueryKey: selectedEvent.value,
		} );
		updateGlobalState( 'helpgent_responseQueryKey', selectedEvent.value );
	}

	async function handleFilterArchived() {
		setResponseState( {
			...responseState,
			status: 'archive',
			responseQueryKey: 'archive',
		} );
		updateGlobalState( 'helpgent_responseQueryKey', 'archive' );
		queryClient.invalidateQueries( [ `helpgent-${ messageQueryKey }` ] );
	}

	return (
		<ResponseFilterStyle className="helpgent-response-filter helpgent-d-flex helpgent-space-between">
			<div className="helpgent-response-filter__right helpgent-d-flex">
				<ReactSVG src={ sort } />
				<Select
					options={ filterOption }
					defaultValue={ filterOption[ 0 ] }
					components={ {
						DropdownIndicator: () => null,
						IndicatorSeparator: () => null,
					} }
					inputId="helpgent-response-filter__select"
					className="helpgent-select"
					classNamePrefix="helpgent-select"
					isSearchable={ false }
					placeholder={ null }
					onChange={ ( selectedEvent ) =>
						handleSelectFilterOption( selectedEvent )
					}
				/>
			</div>
		</ResponseFilterStyle>
	);
}
