import { doAction } from '@wordpress/hooks';
export default async function handleUpdateFormStatus(
	id,
	forms,
	status,
	updateStatusFormMutation,
	setStoreData,
	currentPage,
	queryClient
) {
	const newStatus = status === 'publish' ? 'draft' : 'publish';
	const updatedStatusObj = {
		status: newStatus,
	};

	try {
		const updateFormResponse =
			await updateStatusFormMutation( updatedStatusObj );
		const updatedForms = forms?.forms.map( ( singleForm ) => {
			if ( singleForm.id === id ) {
				return {
					...singleForm,
					status: newStatus,
				};
			}
			return singleForm;
		} );

		const formData = {
			...forms,
			forms: updatedForms,
		};

		queryClient.invalidateQueries( [ `templatiq-form-${ currentPage }` ] );
		setStoreData( [ 'templatiq-form' ], formData );
		doAction( 'templatiq-toast', {
			message: updateFormResponse.message,
		} );
	} catch ( error ) {
		console.log( error );
	}
}
