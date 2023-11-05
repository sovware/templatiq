import {
	Routes,
	Route,
	NavLink,
	useLocation,
	useNavigate,
} from 'react-router-dom';
// import { SettingsModule } from '@template-market/modules';

export default function Settings() {
	const routeLocation = useLocation();
	const navigate = useNavigate();

	return (
		<h2>Settings</h2>
		// <SettingsModule
		// 	Route={ Route }
		// 	Routes={ Routes }
		// 	NavLink={ NavLink }
		// 	routeLocation={ routeLocation }
		// 	navigate={ navigate }
		// />
	);
}
