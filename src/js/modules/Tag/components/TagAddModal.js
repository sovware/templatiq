import { useState, useEffect } from '@wordpress/element';
import AsyncSelect from 'react-select/async';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { doAction } from '@wordpress/hooks';
import getValidationMessage from '@helper/getValidationMessage.js';
import handleLoadForms from '@helper/handleLoadForms';
import { useTagState } from '../context/TagStateContext';
import { TagAddAlertStyle } from './style';
export default function TagAddModal( props ) {
	const {
		tagMutation,
		tagUpdateMutation,
		mutationLoading,
		updateMutationLoading,
		setPopupState,
		editableTag,
	} = props;
	const { tagState, setTagState } = useTagState();
	const { currentPage, tagSearchText } = tagState;
	const [ selectedColor, setSelectedColor ] = useState( '#E6E6E6' );
	const queryClient = useQueryClient();
	const {
		register,
		handleSubmit,
		resetField,
		setValue,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm( { mode: 'onChange' } );

	const colorList = [
		'#E6E6E6',
		'#F59EA2',
		'#F8BBFC',
		'#D3BEFC',
		'#9EDCFD',
		'#9AEEE7',
		'#A9EDB8',
		'#EBD661',
		'#F5B159',
	];
	let defaultSelectedForm = null;
	if ( editableTag ) {
		defaultSelectedForm = {
			value: editableTag?.form_id,
			label: editableTag?.form_title,
		};
	}

	function handleSelectColor( color ) {
		setSelectedColor( color );
		setValue( 'color', color );
	}

	function handleAssignForm( selectedForm ) {
		clearErrors( 'form_id' );
		setValue( 'form_id', parseInt( selectedForm?.value ) );
	}

	async function handleSubmitTag( data ) {
		if ( mutationLoading || updateMutationLoading ) {
			return;
		}
		try {
			if ( tagUpdateMutation ) {
				const tagResponse = await tagUpdateMutation( data );
				doAction( 'template-market-toast', { message: tagResponse.message } );
			} else {
				const tagCreationResponse = await tagMutation( data );
				doAction( 'template-market-toast', {
					message: tagCreationResponse.message,
				} );
			}
			resetField( 'title' );
			resetField( 'form_id' );
			setPopupState( false );
			queryClient.invalidateQueries( [
				`template-market-tag-list-${ currentPage }-${ tagSearchText }`,
			] );
		} catch ( error ) {
			setError( 'server', {
				type: 'server',
				message: error.message,
			} );
		}
	}

	useEffect( () => {
		if ( editableTag ) {
			setSelectedColor( editableTag?.color );
			setValue( 'color', editableTag?.color );
			setValue( 'title', editableTag?.title );
			setValue( 'form_id', parseInt( editableTag?.form_id ) );
		} else {
			setValue( 'color', '#E6E6E6' );
		}
	}, [] );
	return (
		<TagAddAlertStyle>
			<div className="template-market-add-tag-form">
				{ errors[ 'server' ] &&
					getValidationMessage( errors[ 'server' ].message ) }
				<form
					onSubmit={ handleSubmit( ( submittedData ) =>
						handleSubmitTag( submittedData )
					) }
				>
					<div className="template-market-form-tag-name">
						<label
							className="template-market-form-group__label"
							htmlFor="template-market-form-tag"
						>
							Tag name
						</label>
						<div className="template-market-form-group">
							<div className="template-market-add-tag-field">
								<input
									type="text"
									className="template-market-form-group__element"
									id="template-market-form-tag"
									{ ...register( 'title', {
										required: {
											value: true,
											message: 'The field is required',
										},
									} ) }
								/>
								<span
									className="template-market-selected-color"
									style={ { backgroundColor: selectedColor } }
								></span>
							</div>
							{ errors[ 'title' ] &&
								getValidationMessage(
									errors[ 'title' ].message
								) }

							<ul className="template-market-tags-color-list">
								{ colorList.map( ( item, index ) => {
									return (
										<li
											style={ { backgroundColor: item } }
											onClick={ () =>
												handleSelectColor( item )
											}
											key={ index }
										>
											Aa
										</li>
									);
								} ) }
							</ul>
						</div>
					</div>
					<div className="template-market-form-group">
						<label
							className="template-market-form-group__label"
							htmlFor="template-market-form-select"
						>
							Assign tag to
						</label>
						<AsyncSelect
							{ ...register( 'form_id', {
								required: {
									value: true,
									message: 'The field is required',
								},
							} ) }
							maxMenuHeight={ 200 }
							isDisabled={ editableTag }
							cacheOptions
							inputId="template-market-form-select"
							className="template-market-select"
							classNamePrefix="template-market-select"
							placeholder="Select"
							loadOptions={ handleLoadForms }
							defaultOptions
							onChange={ ( selectEvent ) =>
								handleAssignForm( selectEvent )
							}
							defaultValue={ defaultSelectedForm }
						/>
						{ errors[ 'form_id' ] &&
							getValidationMessage(
								errors[ 'form_id' ]?.message
							) }
					</div>
					<div className="template-market-modal-submit">
						<button
							type="submit"
							className="template-market-btn template-market-btn-primary template-market-btn-md"
						>
							{ editableTag ? 'Update' : 'Create' }
						</button>
					</div>
				</form>
			</div>
		</TagAddAlertStyle>
	);
}
