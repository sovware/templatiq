import { useState } from '@wordpress/element';
import { useTagState } from '../context/TagStateContext';
import { useQueryClient } from '@tanstack/react-query';
import PopUp from '@components/PopUp';
import { doAction } from '@wordpress/hooks';
import useUpdateMutation from '@hooks/usePatchUpdateMutation.js';
import useDeleteMutation from '@hooks/useDeleteMutation.js';
import TagAddModal from './TagAddModal';
import ReactSVG from 'react-inlinesvg';
import { TagContentStyle } from './style';
import { template-marketTableStyle } from '@root/style';
import { formatDate } from '@helper/formatter';
import ContentLoading from '@components/ContentLoading';
import { updateGlobalState, getGlobalState } from '@helper/utils';
import TagDeleteModal from './TagDeleteModal';
import ReactPaginate from 'react-paginate';
import angleLeft from '@icon/angle-left.svg';
import angleRight from '@icon/angle-right.svg';
import pencil from '@icon/pencil.svg';
import trash from '@icon/trash.svg';
export default function TagContent( props ) {
	const {
		data,
		isLoading: isTagsLoading,
		isError: isTagError,
		perPage,
	} = props;
	const {
		navigationHook: useNavigate,
		routeLink: Link,
		paramsHook: useParams,
	} = getGlobalState( 'template-market_router_references', null );
	const responseQueryKey = getGlobalState(
		'template-market_responseQueryKey',
		null
	);
	const { tagState, setTagState } = useTagState();
	const { currentPage, tagSearchText } = tagState;
	const [ editableTag, setEditableTag ] = useState( null );
	const [ deletableTag, setDeletableTag ] = useState( null );
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutateAsync: updateTag, isLoading: tagUpdating } =
		useUpdateMutation(
			`/template-market/admin/tag/${ editableTag && editableTag.id }`
		);
	/* Tag Delete Mutation */
	const { mutateAsync: deleteTagMutation, isLoading: isDeleteTagLoading } =
		useDeleteMutation( `/template-market/admin/tag/${ deletableTag }` );

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	function handleActiveEditModal( e, tagId ) {
		e.preventDefault();
		const filteredTag = data.tags.filter(
			( item, index ) => item.id === tagId
		)[ 0 ];
		setEditableTag( filteredTag );
	}

	function handleCancelPopup() {
		setEditableTag( null );
	}

	function handleCancelDeleteAlert() {
		setDeletableTag( null );
	}

	function handleTagDeleteModal( e, tagId ) {
		e.preventDefault();
		setDeletableTag( tagId );
	}

	async function handleDeleteTag() {
		if ( isDeleteTagLoading ) {
			return;
		}
		try {
			const deleteTagResponse = await deleteTagMutation();
			setDeletableTag( null );

			doAction( 'template-market-toast', {
				message: deleteTagResponse.message,
			} );

			queryClient.invalidateQueries( [
				`template-market-tag-list-${ currentPage }-${ tagSearchText }`,
			] );
		} catch ( error ) {}
	}

	function handleResponseNavigation( e, formId, tagId ) {
		e.preventDefault();
		updateGlobalState( 'template-market_filterByTags', [ tagId ] );
		queryClient.invalidateQueries( [
			`template-market-responses-${ responseQueryKey }`,
		] );
		navigate( `/forms/${ formId }/responses` );
	}

	function handlePageClick( event ) {
		setTagState( {
			...tagState,
			currentPage: event.selected + 1,
		} );
		queryClient.invalidateQueries( [
			`template-market-tag-list-${ currentPage }-${ tagSearchText }`,
		] );
	}
	return (
		<TagContentStyle>
			<template-marketTableStyle className="template-market-table">
				<thead>
					<tr>
						<th className="template-market-table-tag-id">ID</th>
						<th className="template-market-table-tag-name">Name</th>
						<th className="template-market-table-form-name">Form name</th>
						<th>Responses</th>
						<th>Created date</th>
						<th className="template-market-table-tag-action">Action</th>
					</tr>
				</thead>
				<tbody>
					{ isTagsLoading && (
						<tr>
							<td colSpan={ 6 }>
								<ContentLoading />{ ' ' }
							</td>
						</tr>
					) }

					{ ! isTagsLoading && data.tags.length === 0 && (
						<tr>
							<td colSpan={ 6 }>
								{ ' ' }
								<span className="template-market-empty-data">
									Tags not found
								</span>{ ' ' }
							</td>
						</tr>
					) }

					{ ! isTagsLoading &&
						data.tags.map( ( item, index ) => {
							return (
								<tr key={ index }>
									<td className="template-market-tag-id">
										#{ item?.id }
									</td>
									<td>
										<div className="template-market-tag-name">
											{ ' ' }
											<span
												className="template-market-tag-color"
												style={ {
													backgroundColor:
														item?.color,
												} }
											></span>{ ' ' }
											{ item?.title }
										</div>
									</td>
									<td>
										<span className="template-market-tag-form">
											{ item?.form_title }
										</span>
									</td>
									<td>
										<Link
											to={ `#` }
											onClick={ ( e ) =>
												handleResponseNavigation(
													e,
													item?.form_id,
													item?.id
												)
											}
										>
											{ item?.total_response }
										</Link>
									</td>
									<td>
										<span className="template-market-tag-created">
											{ formatDate(
												'en-US',
												item?.created_at,
												dateFormatOptions
											) }
										</span>
									</td>
									<td>
										<div className="template-market-table-action">
											<a
												href="#"
												className="template-market-btn template-market-btn-sm template-market-btn-light-gray"
												onClick={ ( e ) =>
													handleActiveEditModal(
														e,
														item?.id
													)
												}
											>
												<ReactSVG src={ pencil } />
												Edit
											</a>
											<a
												href="#"
												className="template-market-btn template-market-btn-sm template-market-btn-light-gray template-market-btn-tag-delete"
												onClick={ ( e ) =>
													handleTagDeleteModal(
														e,
														item?.id
													)
												}
											>
												<ReactSVG src={ trash } />
												Delete
											</a>
										</div>
									</td>
								</tr>
							);
						} ) }
				</tbody>
			</template-marketTableStyle>
			{ editableTag && (
				<PopUp
					title={ 'Edit Tag' }
					onCancel={ handleCancelPopup }
					isActiveSubmit
					isActiveFormSubmit
					isDisableAction
				>
					<TagAddModal
						tagUpdateMutation={ updateTag }
						updateMutationLoading={ tagUpdating }
						setPopupState={ setEditableTag }
						editableTag={ editableTag }
					/>
				</PopUp>
			) }
			{ deletableTag && (
				<PopUp
					title={ 'Delete Tag' }
					onCancel={ handleCancelDeleteAlert }
					onSubmit={ handleDeleteTag }
					hasCancelButton
					hasSubmitButton
					isActiveSubmit
					submitText={ isDeleteTagLoading ? 'Deleting' : 'Delete' }
					className="template-market-delete-tag-alert"
				>
					<TagDeleteModal />
				</PopUp>
			) }
			{ data && data.total > perPage && (
				<ReactPaginate
					breakLabel="..."
					onPageChange={ handlePageClick }
					nextLabel={ <ReactSVG src={ angleRight } /> }
					previousLabel={ <ReactSVG src={ angleLeft } /> }
					pageRangeDisplayed={ 3 }
					pageCount={ Math.ceil( data.total / perPage ) }
					previousClassName="template-market-pagination__item"
					previousLinkClassName="template-market-pagination__link template-market-pagination__control"
					nextClassName="template-market-pagination__item"
					nextLinkClassName="template-market-pagination__link template-market-pagination__control"
					containerClassName="template-market-pagination"
					pageClassName="template-market-pagination__item"
					pageLinkClassName="template-market-pagination__link"
					activeLinkClassName="template-market-pagination__active"
					renderOnZeroPageCount={ null }
				/>
			) }
		</TagContentStyle>
	);
}
