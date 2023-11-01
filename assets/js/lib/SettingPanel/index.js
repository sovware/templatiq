import { SettingsStateProvider } from './context/SettingsContext';
import App from './App';

export default function SettingsPanel( props ) {
	return (
		<SettingsStateProvider>
			<App { ...props } />
		</SettingsStateProvider>
	);
}
