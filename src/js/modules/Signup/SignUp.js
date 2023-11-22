import { useState, useEffect } from '@wordpress/element';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStyle } from "@root/style";

import { useMutation } from '@tanstack/react-query';
import { select, dispatch } from '@wordpress/data';
import store from '../../store';

export default function SignUpContent() {
	const navigate = useNavigate();
	
	const { isLoggedIn } = select( store ).getUserInfo();

	console.log('Logged In - Signup? : ', isLoggedIn)

	const [formData, setFormData] = useState({
		authorFullName: "Ibrahim Riaz",
		authorEmail: "riaz@sovware.com",
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
		handleSignup({ name: authorFullName.value, username: authorEmail.value, password: authorPassword.value, expiration: 20 });
	};

	// Signup API
	const signup = async (credentials) => {
		console.log('Signup Credentials: ', credentials)

		const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': template_market_obj.rest_args.nonce,
			},
			body: JSON.stringify(credentials),
		});

		console.log('Signup Response: ', response)
	
		if (!response.ok) {
			throw new Error('Signup failed');
		}
	
		return response.json();
	};

	const mutation = useMutation(signup);

	const handleSignup = async (credentials) => {
		try {
			// Call the mutation function with the user's credentials
			const result = await mutation.mutateAsync(credentials);
			console.log('Signup Result Handle: ', result)
			// if (result.body.token) {
			// 	const data = result.body;
			// 	const updatedUserInfo = {
			// 		isLoggedIn: true,
			// 		userName: data.user_nicename,
			// 		userEmail: data.user_email,
			// 		userDisplayName: data.user_display_name,
			// 	};
	
			// 	// Dispatch the action to update the signup status in the store
			// 	dispatch(store).setUserInfo(updatedUserInfo);

			// 	navigate('/');

			// } else {
			// 	console.error('Signup failed', result.message);
			// }
		} catch (error) {
		  	console.error('Error', error); // Handle error
		}
	};

	useEffect( () => {
		isLoggedIn && navigate('/');
	}, [ ] );

	return (
		<AuthStyle className="templatiq__auth">
			<h3 className="templatiq__auth__title">Sign up your account</h3>
			<form className="templatiq__auth__wrapper" onSubmit={handleData}>
				<div className="templatiq__auth__info">
					<div className="templatiq__auth__info__single">
						<label htmlFor="authorFullName">Full Name</label>
						<input
							type="text"
							id="authorFullName"
							name="authorFullName"
							value={formData.authorFullName}
							onChange={handleChange}
						/>
					</div>
					<div className="templatiq__auth__info__single">
						<label htmlFor="authorEmail">Email Address</label>
						<input
							type="email"
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
					<button 
                        type="submit" 
                        className="templatiq__auth__btn templatiq-btn templatiq-btn-primary"
                    >
                        Sign Up
                    </button>
                    <span className="templatiq__auth__desc">
                        Already have an account?
                        <Link to="/signin" className="templatiq__auth__link">Sign in</Link>
                    </span>
					
				</div>
			</form>
		</AuthStyle>
	);
}
