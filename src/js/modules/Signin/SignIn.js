import { useState } from '@wordpress/element';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStyle } from "@root/style";

import { useMutation } from '@tanstack/react-query';
import { select, dispatch } from '@wordpress/data';
import store from '../../store';

// api.js - a file to store your API functions
const login = async (credentials) => {

	const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-WP-Nonce': template_market_obj.rest_args.nonce,
		},
		body: JSON.stringify(credentials),
	});

	console.log("Response: ", response);
  
	if (!response.ok) {
	  	throw new Error('Login failed');
	}
  
	return response.json();
};
  

export default function SignInContent () {

	const navigate = useNavigate();
	const mutation = useMutation(login);

	const isLoggedIn = select( store ).getLoggedInStatus();

	console.log('Logged In? : ', isLoggedIn)

	const [formData, setFormData] = useState({
		authorEmail: "riaz",
		authorPassword: "fffffffffddddd",
	});

	const handleChange = (e) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};

	const handleData = (e) => {
		e.preventDefault(); 
		handleLogin({ username: authorEmail.value, password: authorPassword.value, expiration: 20 });
	};

	const handleLogin = async (credentials) => {
		console.log('Credentials: ', credentials)
		try {
			// Call the mutation function with the user's credentials

			const result = await mutation.mutateAsync(credentials);

			console.log('Result: ', result);

			if (result.body.token) {
				console.log('Login successful');
				dispatch(store).toggleLoginStatus(true);
				navigate('/');

			} else {
				console.error('Login failed', result.message);
			}
		} catch (error) {
		  	console.error('Error', error); // Handle error
		}
	};
	

	return (
		<AuthStyle className="templatiq__auth">
			<h3 className="templatiq__auth__title">Sign in to your account</h3>
			<form className="templatiq__auth__wrapper" onSubmit={handleData}>
				<div className="templatiq__auth__info">
					<div className="templatiq__auth__info__single">
						<label htmlFor="authorEmail">Email Address</label>
						<input
							type="text"
							id="authorEmail"
							name="authorEmail"
							value={formData.authorEmail}
							onChange={handleChange}
						/>
					</div>
					<div className="templatiq__auth__info__single">
						<label htmlFor="authorPassword">Password</label>
						<input
							type="password"
							id="authorPassword"
							name="authorPassword"
							value={formData.authorPassword}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="templatiq__auth__actions">
                    <div className="templatiq__auth__actions__wrapper">
                        <div className="templatiq__checkbox templatiq__auth__remember">
                            <input type="checkbox" name="rememberMe" id="rememberMe" className="templatiq__checkbox__input" />
                            <label for="rememberMe" className="templatiq__checkbox__label">Remember Me</label>
                        </div>
                        <div className="templatiq__auth__forgot">
                            <a href="#" target='_blank' className="templatiq__auth__link">Forgot password?</a>
                        </div>
                    </div>
					<button 
                        type="submit" 
                        className="templatiq__auth__btn templatiq-btn templatiq-btn-primary"
                    >
                        Sign In
                    </button>
                    <span className="templatiq__auth__desc">
                        Don't have an account?
                        <Link to="/signup" className="templatiq__auth__link">Sign up</Link>
                    </span>
					
				</div>
			</form>
		</AuthStyle>
	);
}
