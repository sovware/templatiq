import { useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import { useNavigate } from 'react-router-dom';
import Header from '@layout/Header';
import store from '@store/index';

const AuthLayout = ( { children } ) => {
	const navigate = useNavigate();

	useEffect( () => {
		const { isLoggedIn } = select( store ).getUserInfo();
		if ( isLoggedIn ) {
			navigate( '/dashboard/purchase' );
		}
	}, [] );

	return (
		<div className="templatiq">
			<Header />
			{ children }
		</div>
	);
};

export default AuthLayout;
