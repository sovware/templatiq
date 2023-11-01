import {
	Routes,
	Route,
	NavLink,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { SettingsModule } from '@helpgent/modules';

export default function Settings() {
	const routeLocation = useLocation();
	const navigate = useNavigate();

	return (
		<SettingsModule
			Route={ Route }
			Routes={ Routes }
			NavLink={ NavLink }
			routeLocation={ routeLocation }
			navigate={ navigate }
		/>
	);
}
