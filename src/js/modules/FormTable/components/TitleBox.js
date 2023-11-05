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
	const allForms = getStoreData( [ `template-market-form-${ currentPage }` ] );

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	/* Form Update Mutation */
	const { mutateAsync: renameFormMutation, isLoading } = useUpdateMutation(
		`/template-market/admin/form/${ id }/rename`
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
		<TitleBoxStyle className="template-market-titleBox">
			<div className="template-market-titleBox__data">
				{ renameFormId === id ? (
					<div className="template-market-titleBox__editor">
						<input
							type="text"
							name="template-market-title-input"
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
					<div className="template-market-titleBox__content template-market-show">
						<div className="template-market-titleBox-media">
							{ color && (
								<span
									className="template-market-titleBox-media__form"
									style={ { backgroundColor: color } }
								></span>
							) }

							{ featured_image && (
								<img
									src={ featured_image }
									alt="template-market featured image"
								/>
							) }
						</div>
						<div className="template-market-titleBox-text">
							<span className="template-market-title">{ title }</span>
							<ul className="template-market-titleBox-meta">
								<li className="template-market-titleBox-meta__id">
									ID #{ id }
								</li>
								<li className="template-market-titleBox-meta__date">
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
				<div className="template-market-titleBox__actions">
					<span
						className="template-market-titleBox-action-item template-market-titleBox__actions-cancel"
						onClick={ handleCancelEditMode }
					>
						<ReactSVG src={ times } />
					</span>
					<span
						className="template-market-titleBox-action-item template-market-titleBox__actions-yes"
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
							<span className="template-market-circle-loader"></span>
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
