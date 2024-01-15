import ReactDOM from 'react-dom';
import { StateProvider } from './store/store';
import reducer, { initialState } from './store/reducer';
import App from './app';

const rootElement = document.getElementById('starter-templates-ai-root');

ReactDOM.render(
	<StateProvider reducer={reducer} initialState={initialState}>
		<App />
	</StateProvider>,
	rootElement
);
