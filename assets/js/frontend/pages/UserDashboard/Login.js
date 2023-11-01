import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import envelope from '@icon/envelope.svg';
import usePostMutation from '@hooks/usePostMutation';
import { LoginWrapper } from './style';

export default function Login() {
	const [ email, setEmail ] = useState( '' );
	const [ responseMessage, setResponseMessage ] = useState( '' );
	const [ statusCode, setStatusCode ] = useState( 0 );
	const {
		mutateAsync: sendTextMutation,
		isLoading,
		isSuccess,
		isError,
		status,
	} = usePostMutation( '/helpgent/guest/login' );

	const parser = new DOMParser();
	const parseString = parser.parseFromString( responseMessage, 'text/html' );
	const formatMessage = parseString.documentElement.textContent;
	async function handleLoginClick() {
		try {
			const data = {
				email: email,
			};

			const response = await sendTextMutation( data );
			const body = response;

			setResponseMessage( body.message );
		} catch ( error ) {
			console.log(error);
			const body = error;
			const errorCode = body.data?.status;
			if ( body.messages && Array.isArray( body.messages.email ) ) {
				setResponseMessage( body.messages.email[ 0 ] );
			} else {
				setResponseMessage( body.messages || body.message );
			}
			setStatusCode( errorCode );
		}
	}
	const handleEmailChange = ( e ) => {
		setEmail( e.target.value );
	};

	return (
		<LoginWrapper>
			<div className="helpgent-login-wrap">
				<h2 className="helpgent-login-title">Login to your account</h2>
				<span className="helpgent-login-subtitle">
					Enter your email address and we’ll send a password to your
					email.
				</span>
				<div className="helpgent-form-group helpgent-form-group-column">
					{ isSuccess ? (
						<span className="helpgent-notice helpgent-notice-success-light">
							{ formatMessage }
						</span>
					) : (
						<>
							{ isError && (
								<span className="helpgent-notice helpgent-notice-danger helpgent-mb-15">
									{ formatMessage }
								</span>
							) }
							{ statusCode !== 503 && (
								<>
									<label
										htmlFor="helpgent-undefined"
										className="helpgent-form-group__label"
									>
										Enter your email address
									</label>
									<div className="helpgent-form helpgent-form-group helpgent-form-icon-left">
										<span className="helpgent-input-icon">
											<ReactSVG src={ envelope } />
										</span>
										<input
											type="email"
											className="helpgent-form-group__element"
											placeholder="Email address"
											value={ email }
											onChange={ handleEmailChange }
										/>
									</div>
									<button
										className="helpgent-btn helpgent-btn-primary helpgent-btn-block helpgent-btn-icon"
										onClick={ handleLoginClick }
									>
										{ isLoading ? 'Logging' : 'Login' }
									</button>
								</>
							) }
						</>
					) }
				</div>
			</div>
		</LoginWrapper>
	);
}
