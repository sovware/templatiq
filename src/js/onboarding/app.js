import { BrowserRouter as Router } from 'react-router-dom';
import Steps from './steps/index';
import './style.scss';

const App = () => {
	return (
		<Router>
			<div
				className={ `templatiq-library-ai-steps ${
					!! templatiqSitesVars.isRTLEnabled ? 'st-rtl' : ''
				}` }
			>
				<Steps />
			</div>
		</Router>
	);
};

export default App;
