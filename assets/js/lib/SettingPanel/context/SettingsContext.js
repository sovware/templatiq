import { createContext, useContext, useState } from '@wordpress/element';

const SettingsContext = createContext();
export const useSettingsState = () => useContext( SettingsContext );

export const SettingsStateProvider = ( { children } ) => {
	const initialState = {
		prefix: '',
		fields: {},
		menus: [],
		fieldComponents: {},
	};

	const [ settingsState, setSettingsState ] = useState( initialState );

	return (
		<SettingsContext.Provider value={ { settingsState, setSettingsState } }>
			{ children }
		</SettingsContext.Provider>
	);
};
