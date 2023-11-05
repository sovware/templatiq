import { useState } from '@wordpress/element';
import { doAction, applyFilters } from '@wordpress/hooks';
import { useQueryClient } from '@tanstack/react-query';
import ReactSVG from 'react-inlinesvg';
import PopUp from '@components/PopUp';
import Dropdown from '@components/Dropdown.js';
import { useFormTableState } from '../context/FormTableStateContext.js';
import useDeleteMutation from '@hooks/useDeleteMutation.js';
import { getGlobalState } from '@helper/utils';
import FormDeleteAlert from './FormDeleteAlert.js';
import pencil from '@icon/pencil.svg';
import ellipsisV from '@icon/ellipsis-v.svg';
import user from '@icon/comment-user.svg';
import penNib from '@icon/pen-nib.svg';
import trash from '@icon/trash.svg';
import eye from '@icon/eye.svg';

export default function TableActions( props ) {
	const { navigationHook: useNavigate, routeLink: Link } = getGlobalState(
		'template-market_router_references',
		null
	);
	const { id, form, setRenameFormId } = props;
	const [ isActivateFormDeleteModal, setIsActivateFormDeleteModal ] =
		useState( false );
	const queryClient = useQueryClient();
	const { formTableState, setFormTableState } = useFormTableState();
	const { currentPage } = formTableState;
	const navigate = useNavigate();
	const formName = form.title;
	const moreDropdown = applyFilters(
		'template-market_form_table_actions',
		[
			{
				name: 'preview',
				icon: eye,
				url: `${ form.preview_url }`,
				target: 'blank',
				text: 'Preview',
			},
			{
				name: 'responses',
				icon: user,
				url: `forms/${ id }/responses`,
				text: 'Responses',
			},
			{
				name: 'rename',
				icon: penNib,
				text: 'Rename',
			},
			{
				name: 'delete',
				icon: trash,
				text: 'Delete',
			},
		],
		id
	);

	/* Form Delete Mutation */
	const {
		mutateAsync: deleteFormMutation,
		isLoading: formDeleting,
		error: formDeletionError,
	} = useDeleteMutation( `/template-market/admin/form/${ id }` );

	async function handleDropdownTrigger( event, name ) {
		event.preventDefault();
		if ( name === 'rename' ) {
			setRenameFormId( id );
			setFormTableState( {
				...formTableState,
				formInputTitle: form.title,
			} );
		} else if ( name === 'delete' ) {
			setIsActivateFormDeleteModal( true );
		} else if ( name === 'responses' ) {
			navigate( `/forms/${ id }/responses` );
		}
	}

	async function handleDeleteForm() {
		if ( formDeleting ) {
			return;
		}
		try {
			const deleteFormResponse = await deleteFormMutation();
			queryClient.invalidateQueries( [
				`template-market-form-${ currentPage }`,
			] );
			setIsActivateFormDeleteModal( false );
			doAction( 'template-market-toast', {
				message: deleteFormResponse.message,
			} );
		} catch ( error ) {
			console.log( error );
		}
	}

	function handleCancelDeleteAlert() {
		setIsActivateFormDeleteModal( false );
	}
	return (
		<div className="template-market-table-action">
			<Link
				disabled={ ! formTableState.titleRenaming }
				to={ `/forms/${ id }/edit` }
				className={ `template-market-btn template-market-btn-light ${
					formTableState.titleRenaming ? 'template-market-btn-disabled' : ''
				}` }
			>
				<ReactSVG src={ pencil } />
				Edit
			</Link>
			{ isActivateFormDeleteModal && (
				<PopUp
					title={ 'Delete Form' }
					onCancel={ handleCancelDeleteAlert }
					onSubmit={ handleDeleteForm }
					hasCancelButton
					hasSubmitButton
					isActiveSubmit
					submitText={ formDeleting ? 'Deleting' : 'Delete' }
					className="template-market-form-delete-alert"
				>
					<FormDeleteAlert
						error={ formDeletionError }
						formTitle={ formName }
					/>
				</PopUp>
			) }
			<Dropdown
				dropDownIcon={ ellipsisV }
				placement="left"
				dropdownList={ moreDropdown }
				handleDropdownTrigger={ handleDropdownTrigger }
				Link={ Link }
			/>
		</div>
	);
}
