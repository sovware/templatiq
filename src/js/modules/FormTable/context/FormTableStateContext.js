import { createContext, useContext, useState } from '@wordpress/element';
const FormTableStateContent = createContext();

export const useFormTableState = () => useContext( FormTableStateContent );

export const FormTableStateProvider = ( { children } ) => {
	const formTableStateObj = {
		formInputTitle: '',
		titleRenaming: false,
		currentPage: 1,
		addBackBtn: false,
		isCreatePopupOpen: false,
		selectedTemplate: null,
		templateQuestions: null,
		createFormStage: 'initial',
	};
	const [ formTableState, setFormTableState ] = useState( formTableStateObj );

	return (
		<FormTableStateContent.Provider
			value={ { formTableState, setFormTableState } }
		>
			{ children }
		</FormTableStateContent.Provider>
	);
};
