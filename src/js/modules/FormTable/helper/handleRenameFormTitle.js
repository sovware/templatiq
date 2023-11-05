import { doAction } from '@wordpress/hooks';
export default async function handleRenameFormTitle(
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
) {
	const updatedTitle = {
		title: formTableState.formInputTitle,
	};

	if ( formTableState.titleRenaming ) {
		return;
	}

	try {
		const updateFormResponse = await renameFormMutation( updatedTitle );
		const updatedForms = allForms?.forms.map( ( singleForm ) => {
			if ( singleForm.id === id ) {
				return {
					...singleForm,
					title: formTableState.formInputTitle,
				};
			}
			return singleForm;
		} );

		const formData = {
			...allForms,
			forms: updatedForms,
		};
		queryClient.invalidateQueries( [ `template-market-single-form-${ id }` ] );
		queryClient.invalidateQueries( [ `template-market-form-${ currentPage }` ] );
		setStoreData( [ 'template-market-form' ], formData );
		setRenameFormId( null );
		doAction( 'template-market-toast', { message: updateFormResponse.message } );
	} catch ( error ) {
		console.log( error );
	}
}
