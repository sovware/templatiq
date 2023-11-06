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
				doAction( 'templatiq-toast', { message: tagResponse.message } );
			} else {
				const tagCreationResponse = await tagMutation( data );
				doAction( 'templatiq-toast', {
					message: tagCreationResponse.message,
				} );
			}
			resetField( 'title' );
			resetField( 'form_id' );
			setPopupState( false );
			queryClient.invalidateQueries( [
				`templatiq-tag-list-${ currentPage }-${ tagSearchText }`,
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
			<div className="templatiq-add-tag-form">
				{ errors[ 'server' ] &&
					getValidationMessage( errors[ 'server' ].message ) }
				<form
					onSubmit={ handleSubmit( ( submittedData ) =>
						handleSubmitTag( submittedData )
					) }
				>
					<div className="templatiq-form-tag-name">
						<label
							className="templatiq-form-group__label"
							htmlFor="templatiq-form-tag"
						>
							Tag name
						</label>
						<div className="templatiq-form-group">
							<div className="templatiq-add-tag-field">
								<input
									type="text"
									className="templatiq-form-group__element"
									id="templatiq-form-tag"
									{ ...register( 'title', {
										required: {
											value: true,
											message: 'The field is required',
										},
									} ) }
								/>
								<span
									className="templatiq-selected-color"
									style={ { backgroundColor: selectedColor } }
								></span>
							</div>
							{ errors[ 'title' ] &&
								getValidationMessage(
									errors[ 'title' ].message
								) }

							<ul className="templatiq-tags-color-list">
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
					<div className="templatiq-form-group">
						<label
							className="templatiq-form-group__label"
							htmlFor="templatiq-form-select"
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
							inputId="templatiq-form-select"
							className="templatiq-select"
							classNamePrefix="templatiq-select"
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
					<div className="templatiq-modal-submit">
						<button
							type="submit"
							className="templatiq-btn templatiq-btn-primary templatiq-btn-md"
						>
							{ editableTag ? 'Update' : 'Create' }
						</button>
					</div>
				</form>
			</div>
		</TagAddAlertStyle>
	);
}
