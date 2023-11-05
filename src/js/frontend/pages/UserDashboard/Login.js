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
	} = usePostMutation( '/template-market/guest/login' );

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
			<div className="template-market-login-wrap">
				<h2 className="template-market-login-title">Login to your account</h2>
				<span className="template-market-login-subtitle">
					Enter your email address and we’ll send a password to your
					email.
				</span>
				<div className="template-market-form-group template-market-form-group-column">
					{ isSuccess ? (
						<span className="template-market-notice template-market-notice-success-light">
							{ formatMessage }
						</span>
					) : (
						<>
							{ isError && (
								<span className="template-market-notice template-market-notice-danger template-market-mb-15">
									{ formatMessage }
								</span>
							) }
							{ statusCode !== 503 && (
								<>
									<label
										htmlFor="template-market-undefined"
										className="template-market-form-group__label"
									>
										Enter your email address
									</label>
									<div className="template-market-form template-market-form-group template-market-form-icon-left">
										<span className="template-market-input-icon">
											<ReactSVG src={ envelope } />
										</span>
										<input
											type="email"
											className="template-market-form-group__element"
											placeholder="Email address"
											value={ email }
											onChange={ handleEmailChange }
										/>
									</div>
									<button
										className="template-market-btn template-market-btn-primary template-market-btn-block template-market-btn-icon"
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
