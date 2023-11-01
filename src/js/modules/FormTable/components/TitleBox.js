import { useState, useEffect } from '@wordpress/element';
import { useQueryClient } from '@tanstack/react-query';
import ReactSVG from 'react-inlinesvg';
import { useFormTableState } from '../context/FormTableStateContext.js';
import useUpdateMutation from '@hooks/useUpdateMutation.js';
import useStore from '@hooks/useStore.js';
import { formatDate } from '@helper/formatter.js';
import handleRenameFormTitle from '../helper/handleRenameFormTitle.js';
import handleFormTitleInput from '../helper/handleFormTitleInput.js';
import { TitleBoxStyle } from './style.js';
import times from '@icon/times.svg';
import check from '@icon/check.svg';

function titleBox( props ) {
	const { renameFormId, setRenameFormId, form, baseApiRoute } = props;
	const { id, title, created_at, color, featured_image } = form;

	const [ inputValidation, setInputValidation ] = useState( {
		isValid: true,
		message: '',
	} );

	const { formTableState, setFormTableState } = useFormTableState();
	const { currentPage } = formTableState;
	const queryClient = useQueryClient();
	const { setStoreData, getStoreData } = useStore();
	const allForms = getStoreData( [ `helpgent-form-${ currentPage }` ] );

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	/* Form Update Mutation */
	const { mutateAsync: renameFormMutation, isLoading } = useUpdateMutation(
		`/helpgent/admin/form/${ id }/rename`
	);

	function handleCancelEditMode() {
		setRenameFormId( null );
	}

	useEffect( () => {
		setFormTableState( {
			...formTableState,
			titleRenaming: isLoading,
		} );
	}, [ isLoading ] );

	return (
		<TitleBoxStyle className="helpgent-titleBox">
			<div className="helpgent-titleBox__data">
				{ renameFormId === id ? (
					<div className="helpgent-titleBox__editor">
						<input
							type="text"
							name="helpgent-title-input"
							value={ formTableState.formInputTitle }
							onChange={ ( e ) =>
								handleFormTitleInput(
									e,
									setInputValidation,
									formTableState,
									setFormTableState
								)
							}
						/>
						<span>{ inputValidation.message }</span>
					</div>
				) : (
					<div className="helpgent-titleBox__content helpgent-show">
						<div className="helpgent-titleBox-media">
							{ color && (
								<span
									className="helpgent-titleBox-media__form"
									style={ { backgroundColor: color } }
								></span>
							) }

							{ featured_image && (
								<img
									src={ featured_image }
									alt="Helpgent featured image"
								/>
							) }
						</div>
						<div className="helpgent-titleBox-text">
							<span className="helpgent-title">{ title }</span>
							<ul className="helpgent-titleBox-meta">
								<li className="helpgent-titleBox-meta__id">
									ID #{ id }
								</li>
								<li className="helpgent-titleBox-meta__date">
									Created:{ ' ' }
									{ formatDate(
										'en-US',
										created_at,
										dateFormatOptions
									) }
								</li>
							</ul>
						</div>
					</div>
				) }
			</div>
			{ renameFormId === id && (
				<div className="helpgent-titleBox__actions">
					<span
						className="helpgent-titleBox-action-item helpgent-titleBox__actions-cancel"
						onClick={ handleCancelEditMode }
					>
						<ReactSVG src={ times } />
					</span>
					<span
						className="helpgent-titleBox-action-item helpgent-titleBox__actions-yes"
						onClick={ () =>
							handleRenameFormTitle(
								renameFormMutation,
								id,
								allForms,
								formTableState,
								setFormTableState,
								setStoreData,
								setRenameFormId,
								queryClient,
								isLoading,
								currentPage
							)
						}
					>
						{ isLoading ? (
							<span className="helpgent-circle-loader"></span>
						) : (
							<ReactSVG src={ check } />
						) }
					</span>
				</div>
			) }
		</TitleBoxStyle>
	);
}

export default titleBox;
