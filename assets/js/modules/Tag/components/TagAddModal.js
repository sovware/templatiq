import { useState, useEffect } from '@wordpress/element';
import AsyncSelect from 'react-select/async';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { doAction } from '@wordpress/hooks';

export default function TagAddModal( props ) {
	const {
		tagMutation,
		tagUpdateMutation,
		mutationLoading,
		updateMutationLoading,
		setPopupState,
		editableTag,
	} = props;
	const { tagState, setTagState } = null;
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
				doAction( 'helpgent-toast', { message: tagResponse.message } );
			} else {
				const tagCreationResponse = await tagMutation( data );
				doAction( 'helpgent-toast', {
					message: tagCreationResponse.message,
				} );
			}
			resetField( 'title' );
			resetField( 'form_id' );
			setPopupState( false );
			queryClient.invalidateQueries( [
				`helpgent-tag-list-${ currentPage }-${ tagSearchText }`,
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
		<div>
			<div className="helpgent-add-tag-form">
				<form
					onSubmit={ handleSubmit( ( submittedData ) =>
						handleSubmitTag( submittedData )
					) }
				>
					<div className="helpgent-form-tag-name">
						<label
							className="helpgent-form-group__label"
							htmlFor="helpgent-form-tag"
						>
							Tag name
						</label>
						<div className="helpgent-form-group">
							<div className="helpgent-add-tag-field">
								<input
									type="text"
									className="helpgent-form-group__element"
									id="helpgent-form-tag"
									{ ...register( 'title', {
										required: {
											value: true,
											message: 'The field is required',
										},
									} ) }
								/>
								<span
									className="helpgent-selected-color"
									style={ { backgroundColor: selectedColor } }
								></span>
							</div>

							<ul className="helpgent-tags-color-list">
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
					<div className="helpgent-form-group">
						<label
							className="helpgent-form-group__label"
							htmlFor="helpgent-form-select"
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
							inputId="helpgent-form-select"
							className="helpgent-select"
							classNamePrefix="helpgent-select"
							placeholder="Select"
							loadOptions=""
							defaultOptions
							onChange={ ( selectEvent ) =>
								handleAssignForm( selectEvent )
							}
							defaultValue={ defaultSelectedForm }
						/>
					</div>
					<div className="helpgent-modal-submit">
						<button
							type="submit"
							className="helpgent-btn helpgent-btn-primary helpgent-btn-md"
						>
							{ editableTag ? 'Update' : 'Create' }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
