import { useState, useRef } from '@wordpress/element';

export default function useSave( onSave ) {
	const buttonRef = useRef();

	const [ state, setState ] = useState( {
		success: null,
		message: '',
		isSaving: false,
	} );

	const { isSaving, message, success } = state;

	function submit() {
		if ( buttonRef.current ) {
			buttonRef.current.click();
		}
	}

	function onSubmit( data ) {
		save( data );
	}

	async function save( data ) {
		if ( typeof onSave !== 'function' ) {
			return;
		}

		if ( isSaving ) {
			return;
		}

		setState( {
			...state,
			isSaving: true,
			success: null,
			message: '',
		} );

		const status = await onSave( data );

		setState( {
			...state,
			isSaving: false,
			success: status.success,
			message: status.message,
		} );

		wait( 5000 ).then( () => {
			setState( {
				...state,
				success: null,
				message: '',
			} );
		} );

		return status;
	}

	function wait( time ) {
		return new Promise( ( resolve ) => setTimeout( resolve, time ) );
	}

	return {
		isSaving,
		message,
		success,
		buttonRef,
		onSubmit,
		submit,
	};
}
