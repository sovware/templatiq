import { useState, useEffect } from '@wordpress/element';
import useFetchData from '@hooks/useFetchData.js';
import Checkbox from '@components/Checkbox';
import { getGlobalState } from '@helper/utils';
import { useResponseState } from '../../context/ResponseStateContext';
export default function ResponseSearchFilter( props ) {
	const { paramsHook: useParams } = getGlobalState(
		'helpgent_router_references',
		null
	);
	const { assignedTagList, setAssignedTagList } = props;
	const { responseState, setResponseState } = useResponseState();
	const [ formTagList, setFormTagList ] = useState( [] );
	const { activeResponse } = responseState;
	const { id } = useParams();
	console.log( assignedTagList );
	const {
		data: formTags,
		isLoading: isFormTagsLoading,
		isError: isFormTagsError,
		errorMessage: FormTagsErrorMessage,
		isFetching: isFormTagsFetching,
	} = useFetchData(
		[ `helpgent-form-tag-list` ],
		`/helpgent/admin/form/${ id }/tags`
	);

	function getSlicedArray() {
		const slicedArray = formTags.tags.slice( 0, 8 );
		setFormTagList( slicedArray );
	}

	useEffect( () => {
		if ( formTags ) {
			if ( formTags.tags.length > 8 ) {
				getSlicedArray();
			} else {
				setFormTagList( formTags.tags );
			}
		}
	}, [ isFormTagsLoading ] );

	function handleTagShowMore( e ) {
		if ( formTagList.length > 8 ) {
			getSlicedArray();
			e.target.classList.remove( 'helpgent-show-more--active' );
		} else {
			setFormTagList( formTags.tags );
			e.target.classList.add( 'helpgent-show-more--active' );
		}
	}

	function handleUpdateAssignedList( tagId ) {
		if ( assignedTagList.includes( tagId ) ) {
			const updatedList = assignedTagList.filter(
				( item ) => item !== tagId
			);
			setAssignedTagList( updatedList );
		} else {
			setAssignedTagList( [ ...assignedTagList, tagId ] );
		}
	}
	return (
		<div className={ `helpgent-modal-filter-inner` }>
			<div className="helpgent-modal-filter__tags">
				<span className="helpgent-modal-filter__tags-label">
					Search By Tags
				</span>
				<div className="helpgent-modal-filter__tags-inner">
					{ isFormTagsLoading ? (
						<>Loading</>
					) : formTagList.length === 0 ? (
						<span className="helpgent-no-tags">
							There are no tags in this form
						</span>
					) : (
						<>
							<ul className="helpgent-modal-filter__tags-list helpgent-scrollbar-style">
								{ formTagList.map( ( item, index ) => {
									return (
										<li
											className="helpgent-modal-filter__tags-item"
											key={ index }
										>
											<Checkbox
												id={ `helpgent-response-tag-${ item.id }` }
												label={
													item.title && item.title
												}
												onChange={ () =>
													handleUpdateAssignedList(
														item.id
													)
												}
												checked={
													assignedTagList.some(
														( tagId ) =>
															tagId === item.id
													)
														? true
														: false
												}
											/>
										</li>
									);
								} ) }
							</ul>
							{ formTags.tags.length > 8 && (
								<span
									className="helpgent-show-more"
									onClick={ ( e ) => {
										handleTagShowMore( e );
									} }
								>
									Show{ ' ' }
									{ formTagList.length > 8 ? 'less' : 'more' }
								</span>
							) }
						</>
					) }
				</div>
			</div>
		</div>
	);
}
