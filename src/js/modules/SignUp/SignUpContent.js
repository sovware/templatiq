import postData from '@helper/postData';
import { AuthStyle } from '@root/style';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Link, useNavigate } from 'react-router-dom';

import store from '@store/index';
import { select } from '@wordpress/data';

export default function SignUpContent({ setIsSignedUp }) {
	const navigate = useNavigate();

	let [ loading, setLoading ] = useState( false );
	const [ isRegistered, setIsRegistered ] = useState( false );
	let [ errorMessage, setErrorMessage ] = useState( '' );

	const singUpEndPoint = 'templatiq/account/create';

	const [ formData, setFormData ] = useState( {
		authorFullName: '',
		authorEmail: '',
	} );

	const { isLoggedIn } = select( store ).getUserInfo();

	const handleChange = ( e ) => {
		setFormData( {
			...formData,
			[ e.target.name ]: e.target.value,
		} );
	};

	const handleData = ( e ) => {
		e.preventDefault();
		handleSignup( {
			name: authorFullName.value,
			user_email: authorEmail.value,
		} );
	};

	const handleSignup = async ( credentials ) => {
		postData( singUpEndPoint, credentials ).then( ( data ) => {
			if ( data?.body?.token ) {
				setIsRegistered( true );
				setIsSignedUp( true );
				// navigate( '/signin' );
			} else {
				const errorMessage = data.message ||  __( 'Something went wrong', 'templatiq' );
				setErrorMessage( errorMessage );
			}

			setLoading( false );
		} );
	};

	useEffect( () => {
		isLoggedIn && navigate( '/dashboard/purchase' );
	}, [] );

	return (
		<AuthStyle className="templatiq__auth">
			<h3 className="templatiq__auth__title"> Sign up your account</h3>
			{ ! isRegistered ? (
				<form
					className="templatiq__auth__wrapper"
					onSubmit={ handleData }
				>
					<div className="templatiq__auth__info">
						<div className="templatiq__auth__info__single">
							<label htmlFor="authorFullName">Name</label>
							<input
								type="text"
								id="authorFullName"
								name="authorFullName"
								value={ formData.authorFullName }
								onChange={ handleChange }
							/>
						</div>
						<div className="templatiq__auth__info__single">
							<label htmlFor="authorEmail">Email Address</label>
							<input
								type="email"
								id="authorEmail"
								name="authorEmail"
								value={ formData.authorEmail }
								onChange={ handleChange }
							/>
						</div>
					</div>
					<div className="templatiq__auth__actions">
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
								!loading ?  __( 'Sign Up', 'templatiq' ) : null
							}
						</button>
						{ errorMessage && (
							<p className="text-danger">{ errorMessage }</p>
						) }
						<span className="templatiq__auth__desc">
							{ __( "Already have an account?", 'templatiq' )}
							<Link
								to="/signin"
								className="templatiq__auth__link"
							>
								{ __( "Sign in", 'templatiq' )}
							</Link>
						</span>
					</div>
				</form>
			) : (
				<div className="templatiq__auth__wrapper notification-wrapper">
					<p>
						{__( "Successfully Registered. Check Your Email to Complete Registration.", 'templatiq' )}
					</p>
					<div className="templatiq__auth__btn_wrapper">
						<Link
							to="/"
							className="templatiq__auth__btn templatiq-btn templatiq-btn-primary"
						>
							{__( " Go to Home", 'templatiq' )}
						</Link>
						<Link
							to="/signin"
							className="templatiq__auth__btn templatiq-btn"
						>
							{__( "Sign in", 'templatiq' )}
						</Link>
					</div>
				</div>
			) }
		</AuthStyle>
	);
}