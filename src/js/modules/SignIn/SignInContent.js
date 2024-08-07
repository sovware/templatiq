import postData from '@helper/postData';
import { AuthStyle } from '@root/style';
import { dispatch, select } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { Link, useNavigate } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

import store from '@store/index';

export default function SignInContent() {
	const navigate = useNavigate();

	const singInEndPoint = 'templatiq/account/login';

	let [ loading, setLoading ] = useState( false );
	let [ error, setError ] = useState(false);

	const { isLoggedIn } = select( store ).getUserInfo();

	const [ formData, setFormData ] = useState( {
		authorEmail: '',
		authorPassword: '',
	} );

	const handleChange = ( e ) => {
		setFormData( {
			...formData,
			[ e.target.name ]: e.target.value,
		} );
	};

	const handleData = ( e ) => {
		e.preventDefault();
		handleLogin( {
			username: authorEmail.value,
			password: authorPassword.value,
		} );
	};

	// Login API
	const handleLogin = async ( credentials ) => {
		postData( singInEndPoint, credentials ).then( ( data ) => {
			if( data.body ) {
				const info = data.body;
				if ( info.token ) {
					const updatedUserInfo = {
						isLoggedIn: true,
						userName: info.user_nicename,
						userEmail: info.user_email,
						userDisplayName: info.user_display_name,
						bookmarks: info.bookmarks,
						downloads: info.downloads,
						purchased: info.purchased,
					};
	
					// Dispatch the action to update the login status in the store
					dispatch( store ).setUserInfo( updatedUserInfo );
	
					navigate( '/dashboard/favorites' );
				} else {
					setLoading( false );
				} 
			} else {
				setLoading( false );
				setError( 'Something went wrong, try again' );
			}
			
		} );
	};

	useEffect( () => {
		isLoggedIn && navigate( '/' );
	}, [] );

	return (
		<AuthStyle className="templatiq__auth">
			<h3 className="templatiq__auth__title">Sign in to your account</h3>
			<form className="templatiq__auth__wrapper" onSubmit={ handleData }>
				<div className="templatiq__auth__info">
					<div className="templatiq__auth__info__single">
						<label htmlFor="authorEmail">{__( 'Email Address', 'templatiq' )}</label>
						<input
							type="text"
							id="authorEmail"
							name="authorEmail"
							value={ formData.authorEmail }
							onChange={ handleChange }
						/>
					</div>
					<div className="templatiq__auth__info__single">
						<label htmlFor="authorPassword">Password</label>
						<input
							type="password"
							id="authorPassword"
							name="authorPassword"
							value={ formData.authorPassword }
							onChange={ handleChange }
						/>
					</div>
				</div>
				<div className="templatiq__auth__actions">
					<div className="templatiq__auth__actions__wrapper">
						<div className="templatiq__checkbox templatiq__auth__remember">
							<input
								type="checkbox"
								name="rememberMe"
								id="rememberMe"
								className="templatiq__checkbox__input"
							/>
							<label
								for="rememberMe"
								className="templatiq__checkbox__label"
							>
								{__( 'Remember Me', 'templatiq' )}
							</label>
						</div>
						<div className="templatiq__auth__forgot">
							<a
								href="https://templatiq.com/wp-login.php?action=lostpassword"
								target="_blank"
								className="templatiq__auth__link"
							>
								{__( 'Forgot password?', 'templatiq' )}
							</a>
						</div>
					</div>
					<button
						type="submit"
						onClick={ () => {
							setLoading( true );
						} }
						className={ `templatiq__auth__btn templatiq-btn templatiq-btn-primary ${
							loading
								? 'templatiq__loading templatiq__loading--btn'
								: ''
						}` }
					>
						{
							!loading ? __( 'Forgot password?', 'templatiq' ): null
						}
					</button>
					{
						error ? <p className="templatiq__auth__error text-danger">{ error }</p> : null
					}
					<span className="templatiq__auth__desc">
						{ __( "Don't have an account?", 'templatiq' )}
						<Link to="/signup" className="templatiq__auth__link">
							{ __( "Sign up", 'templatiq' )}
						</Link>
					</span>
				</div>
			</form>
		</AuthStyle>
	);
}
