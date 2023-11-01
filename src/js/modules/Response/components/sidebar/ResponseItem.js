import { useState } from '@wordpress/element';
import { forwardRef } from '@wordpress/element';
import { useQueryClient } from '@tanstack/react-query';
import { doAction } from '@wordpress/hooks';
import ReactSVG from 'react-inlinesvg';
import Dropdown from '@components/Dropdown';
import Image from '@components/Image.js';
import { useResponseState } from '../../context/ResponseStateContext';
import useDeleteMutation from '@hooks/useDeleteMutation.js';
import usePostMutation from '@hooks/usePostMutation';
import { getPassedTime, getGlobalState } from '@helper/utils';
import getUser from '@helper/getUser';
import { mimeTypeIcons } from '@constants';
import ellipsisH from '@icon/ellipsis-h.svg';
import helpgent from '@icon/helpgent.svg';
import trash from '@icon/trash.svg';
import box from '@icon/box.svg';
import checkSlot from '@icon/check-to-slot.svg';
import envelope from '@icon/envelope-open.svg';
import file from '@icon/file.svg';
import PopUp from '@components/PopUp';
import ResponseDeleteAlert from './ResponseDeleteAlert';

const ResponseItem = forwardRef( ( props, ref ) => {
	const { response, data, isClientModeActive, baseApiRoute } = props;
	const { responseState, setResponseState } = useResponseState();
	const [ isActiveResponseDeleteAlert, setIsActiveResponseDeleteAlert ] =
		useState( false );
	const {
		activeResponse,
		responseQueryKey,
		messageQueryKey,
		answerQueryKey,
	} = responseState;
	const activeId = activeResponse && activeResponse.id;
	const responseAuthor = response && getUser( response );
	const lastMessageAuthor =
		response && response?.message && getUser( response?.message );
	const queryClient = useQueryClient();

	/* Response Delete Mutation */
	const {
		mutateAsync: deleteResponseMutation,
		isLoading: isDeleteResponseLoading,
		error,
	} = useDeleteMutation( `${ baseApiRoute }/${ response?.id }` );

	const { mutateAsync: updateReadStatusMutation, isLoading: readUpdating } =
		usePostMutation( `${ baseApiRoute }/${ response?.id }/read` );
	const {
		mutateAsync: updateMessageReadStatusMutation,
		isLoading: readMessageUpdating,
	} = usePostMutation(
		`/helpgent/message/${ activeResponse?.message?.id }/read`
	);

	const {
		mutateAsync: updateArchiveStatusMutation,
		isLoading: archiveStatusUpdating,
	} = usePostMutation( `${ baseApiRoute }/${ response.id }/archive` );

	const getDropdownOption = () => {
		let moreDropdown = [
			{
				name: 'read',
				icon: envelope,
				text: 'Mark as read',
			},
			{
				name: 'unread',
				icon: envelope,
				text: 'Mark as unread',
			},
			{
				name: 'archive',
				icon: box,
				text: 'Archive',
			},
			{
				name: 'active',
				icon: checkSlot,
				text: 'Active',
			},
			{
				name: 'delete',
				icon: trash,
				text: 'Delete Response',
			},
		];

		if ( response.is_read === '0' ) {
			moreDropdown = moreDropdown.filter(
				( item ) => item.name !== 'unread'
			);
		} else {
			moreDropdown = moreDropdown.filter(
				( item ) => item.name !== 'read'
			);
		}

		if ( isClientModeActive ) {
			moreDropdown = moreDropdown.filter(
				( item ) => item.name !== 'archive'
			);
		}
		if ( response.is_archive === '0' ) {
			moreDropdown = moreDropdown.filter(
				( item ) => item.name !== 'active'
			);
		} else {
			moreDropdown = moreDropdown.filter(
				( item ) => item.name !== 'archive'
			);
		}

		return moreDropdown;
	};

	async function handleActiveResponse( id, responseReadStatus ) {
		setResponseState( {
			...responseState,
			activeResponse: response,
			answerQueryKey: `answer-${ id }`,
			messageQueryKey: `message-${ id }`,
			debouncedMessageSearchText: '',
			isConversationSearchActive: false,
			answerFetchingEnabled: true,
			messageFetchingEnabled: true,
		} );
		if ( activeResponse.id !== id && responseReadStatus === '0' ) {
			try {
				const data = {
					is_read: 1,
				};
				await updateReadStatusMutation( data );

				queryClient.invalidateQueries(
					`helpgent-responses-${ responseQueryKey }`
				);
			} catch ( error ) {
				console.log( error );
			}
		}

		const contentWrap = document.querySelector(
			'.helpgent-conversation-main'
		);
		const sidebar = document.querySelector( '.helpgent-sidebar' );
		contentWrap.classList.add( 'helpgent-conversation-main--active' );
		sidebar.classList.remove( 'helpgent-sidebar--active' );
	}

	async function handleResponseDropdown( event, name ) {
		event.preventDefault();
		switch ( name ) {
			case 'delete':
				setIsActiveResponseDeleteAlert( true );
				break;
			case 'read':
				try {
					const data = {
						is_read: 1,
					};

					if ( activeResponse?.message ) {
						const messageReadData = {
							response_id: activeResponse?.id,
							is_read: 1,
						};
						await updateMessageReadStatusMutation(
							messageReadData
						);
					}
					const updateReadStatusResponse =
						await updateReadStatusMutation( data );
					setResponseState( {
						...responseState,
						answerFetchingEnabled: false,
						messageFetchingEnabled: false,
					} );
					doAction( 'helpgent-toast', {
						message: updateReadStatusResponse?.message,
					} );
					queryClient.invalidateQueries(
						`helpgent-responses-${ responseQueryKey }`
					);
				} catch ( error ) {
					console.log( error );
				}
				break;
			case 'unread':
				try {
					const data = {
						is_read: 0,
					};
					if ( activeResponse?.message ) {
						const messageUnReadData = {
							response_id: activeResponse.id,
							is_read: 0,
						};
						await updateMessageReadStatusMutation(
							messageUnReadData
						);
					}
					const updateReadStatusResponse =
						await updateReadStatusMutation( data );
					setResponseState( {
						...responseState,
						answerFetchingEnabled: false,
						messageFetchingEnabled: false,
					} );
					doAction( 'helpgent-toast', {
						message: updateReadStatusResponse?.message,
					} );
					queryClient.invalidateQueries(
						`helpgent-responses-${ responseQueryKey }`
					);
				} catch ( error ) {
					console.log( error );
				}
				break;
			case 'archive':
				try {
					const data = {
						is_archive: 1,
					};
					const updateArchiveStatusResponse =
						await updateArchiveStatusMutation( data );
					doAction( 'helpgent-toast', {
						message: updateArchiveStatusResponse?.message,
					} );
					queryClient.invalidateQueries(
						`helpgent-responses-${ responseQueryKey }`
					);
				} catch ( error ) {
					console.log( error );
				}
				break;
			case 'active':
				try {
					const data = {
						is_archive: 0,
					};
					const updateActiveStatusResponse =
						await updateArchiveStatusMutation( data );
					doAction( 'helpgent-toast', {
						message: updateActiveStatusResponse.message,
					} );
					queryClient.invalidateQueries(
						`helpgent-responses-${ responseQueryKey }`
					);
				} catch ( error ) {
					console.log( error );
				}
				break;
			default:
				break;
		}
	}

	async function handleDeleteResponse() {
		try {
			const deleteResponse = await deleteResponseMutation();
			setResponseState( {
				...responseState,
				activeResponse: null,
			} );
			setIsActiveResponseDeleteAlert( false );
			doAction( 'helpgent-toast', {
				message: deleteResponse.message,
			} );

			queryClient.invalidateQueries( [
				`helpgent-responses-${ responseQueryKey }`,
			] );
			queryClient.invalidateQueries( [ `helpgent-response-form` ] );
			queryClient.invalidateQueries( [
				`helpgent-${ messageQueryKey }`,
			] );
		} catch ( error ) {}
	}

	function handleCancelDeleteAlert() {
		setIsActiveResponseDeleteAlert( false );
	}

	function getResponseReadStatus() {
		if ( isClientModeActive ) {
			if (
				response?.message?.is_read === '0' &&
				response?.is_guest === response?.message?.is_guest &&
				responseAuthor?.id !== lastMessageAuthor?.id
			) {
				return true;
			} else {
				return false;
			}
		} else {
			if ( response?.is_read === '0' ) {
				return true;
			} else {
				if (
					helpgent_current_user?.id !==
						parseInt( lastMessageAuthor?.id ) &&
					response?.message?.is_read === '0' &&
					responseAuthor?.id === lastMessageAuthor?.id &&
					response?.is_guest === response?.message?.is_guest
				) {
					return true;
				}
				return false;
			}
		}
	}

	return (
		<li
			className={ `${
				activeId === response?.id
					? 'helpgent-response-item helpgent-active'
					: 'helpgent-response-item'
			}` }
			ref={ ref ? ref : null }
			onClick={ () =>
				handleActiveResponse( response?.id, response?.is_read )
			}
		>
			{ ! responseAuthor ? (
				<div className="helpgent-response-item__icon">
					<ReactSVG src={ helpgent } />
				</div>
			) : (
				<div className="helpgent-response-item__media">
					{ responseAuthor?.avatar_url ? (
						<Image
							src={ responseAuthor?.avatar_url }
							alt="Helpgent Media"
						/>
					) : (
						<span>
							{ responseAuthor?.display_name.slice( 0, 2 ) }
						</span>
					) }
				</div>
			) }

			<div className="helpgent-response-item__content">
				{ responseAuthor && (
					<h4 className="helpgent-response-item__name">
						{ responseAuthor?.display_name }
					</h4>
				) }
				{ response?.message && (
					<div className="helpgent-response-item__last-message">
						{ response?.message?.message &&
							response?.message?.message }
						{ response?.message?.attachment && (
							<div className="helpgent-response-item__last-attachment helpgent-d-flex">
								<ReactSVG
									src={
										mimeTypeIcons[
											response?.message?.attachment
												?.mime_type
										] || file
									}
								/>
								<span className="helpgent-response-item__last-attachment-name">
									{ response?.message?.attachment?.title }
								</span>
							</div>
						) }
					</div>
				) }

				<div className="helpgent-response-item__last-message-time">
					{ getPassedTime(
						response?.message
							? response?.message?.created_at
							: response?.created_at
					) }
					<span> ago</span>
				</div>
				{ response?.tags?.length !== 0 && (
					<ul className="helpgent-response-item__assigned-tags">
						{ response?.tags?.map( ( item, index ) => {
							return (
								<li
									className="helpgent-tag-badge"
									style={ { backgroundColor: item?.color } }
									key={ index }
								>
									{ item?.title }
								</li>
							);
						} ) }
					</ul>
				) }
			</div>
			<div className="helpgent-response-item__action">
				{ getResponseReadStatus() && (
					<span className="helpgent-unread-pointer"></span>
				) }
				{ isActiveResponseDeleteAlert && (
					<PopUp
						title={ 'Delete Response' }
						onCancel={ handleCancelDeleteAlert }
						onSubmit={ handleDeleteResponse }
						hasCancelButton
						hasSubmitButton
						isActiveSubmit
						submitText={
							isDeleteResponseLoading ? 'Deleting' : 'Delete'
						}
						className="helpgent-response-delete-alert"
					>
						<ResponseDeleteAlert />
					</PopUp>
				) }
				{ isClientModeActive ? null : (
					<Dropdown
						className="helpgent-response-dropdown"
						dropDownIcon={ ellipsisH }
						dropdownList={ getDropdownOption() }
						placement={ 'right' }
						handleDropdownTrigger={ handleResponseDropdown }
					/>
				) }
			</div>
		</li>
	);
} );

export default ResponseItem;
