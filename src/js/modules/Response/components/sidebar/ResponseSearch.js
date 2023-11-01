import { useResponseState } from '../../context/ResponseStateContext';
import { useState, useEffect } from '@wordpress/element';
import { useQueryClient } from '@tanstack/react-query';
import { useDebounce } from '@hooks/useDebounce';
import { updateGlobalState } from '../../../../helper/utils';
import { ResponseSearchStyle } from './style';
import useStore from '@hooks/useStore.js';
import ReactSVG from 'react-inlinesvg';
import PopUp from '@components/PopUp';
import search from '@icon/search.svg';
import range from '@icon/range.svg';
import ResponseSearchFilter from './ResponseSearchFilter';
export default function ResponseSearch( props ) {
	const { isClientModeActive } = props;
	const queryClient = useQueryClient();
	const { responseState, setResponseState } = useResponseState();
	const { getStoreData } = useStore();
	const [ assignedTagList, setAssignedTagList ] = useState( [] );
	//const formTags = getStoreData(['helpgent-form-tag-list'])
	const { activeResponse, responseQueryKey, filterByTags } = responseState;
	const [ searchText, setSearchText ] = useState( '' );
	const [ isFilterSearchActive, setIsFilterSearchActive ] = useState( false );
	const debouncedSearchText = useDebounce( searchText, 250 );
	useEffect( () => {
		setResponseState( {
			...responseState,
			responseQueryKey: `${ responseQueryKey }-${ debouncedSearchText }`,
			responseSearchText: debouncedSearchText,
		} );
		updateGlobalState(
			'helpgent_responseQueryKey',
			`${ responseQueryKey }-${ debouncedSearchText }`
		);
		queryClient.invalidateQueries( [
			`helpgent-responses-${ responseQueryKey }`,
		] );
	}, [ debouncedSearchText ] );

	useEffect( () => {
		setAssignedTagList( [ ...filterByTags ] );
	}, [ filterByTags ] );

	function handleActiveSearchFilter() {
		setIsFilterSearchActive( true );
	}

	function handleClearTags() {
		setAssignedTagList( [] );
	}

	function handleCancelFilter() {
		setIsFilterSearchActive( false );
	}
	function handleApplyFilter() {
		setResponseState( {
			...responseState,
			responseQueryKey: `tag-filter-${ responseQueryKey }`,
			filterByTags: [ ...assignedTagList ],
		} );
		updateGlobalState(
			'helpgent_responseQueryKey',
			`tag-filter-${ responseQueryKey }`
		);
		queryClient.invalidateQueries( [
			`helpgent-responses-${ responseQueryKey }`,
		] );
		setIsFilterSearchActive( false );
	}
	return (
		<ResponseSearchStyle
			className={ `${
				filterByTags.length > 0
					? 'helpgent-response-search helpgent-response-search-active'
					: 'helpgent-response-search'
			}` }
		>
			<div className="helpgent-form-group helpgent-form-icon-left">
				<span className="helpgent-input-icon">
					<ReactSVG src={ search } />
				</span>
				<input
					type="text"
					className="helpgent-form-group__element"
					placeholder="Search"
					value={ searchText }
					onChange={ ( e ) => setSearchText( e.target.value ) }
				/>
				{ ! isClientModeActive && (
					<span
						className="helpgent-tag-search"
						onClick={ handleActiveSearchFilter }
					>
						{ filterByTags.length > 0 && (
							<span className="helpgent-badge helpgent-badge-primary helpgent-badge-circle">
								{ filterByTags.length }
							</span>
						) }
						<ReactSVG src={ range } />
					</span>
				) }
			</div>
			{ isFilterSearchActive && (
				<PopUp
					title={ 'Filter' }
					className="helpgent-modal-filter"
					onCancel={ handleCancelFilter }
					onFooterCancel={ handleClearTags }
					onSubmit={ handleApplyFilter }
					cancelText="Clear all"
					submitText="Apply"
					hasCancelButton
					hasSubmitButton
					submitBtnType="primary"
				>
					<ResponseSearchFilter
						assignedTagList={ assignedTagList }
						setAssignedTagList={ setAssignedTagList }
					/>
				</PopUp>
			) }
		</ResponseSearchStyle>
	);
}
