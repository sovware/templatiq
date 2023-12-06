import { useState, useEffect } from '@wordpress/element';
import { Link } from 'react-router-dom';
import { AuthStyle } from "@root/style";

import { useMutation } from '@tanstack/react-query';
import { select } from '@wordpress/data';
import store from '../../store';

export default function SignUpContent() {
	const [isRegistered, setIsRegistered] = useState(false);
	let [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState({
		authorFullName: "Ibrahim Riaz",
		authorEmail: "riaz@sovware.com",
	});
	
	const { isLoggedIn } = select( store ).getUserInfo();

	const handleChange = (e) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};

	const handleData = (e) => {
		e.preventDefault(); 
		handleSignup({ name: authorFullName.value, user_email: authorEmail.value });
	};

	// Signup API
	const signup = async (credentials) => {
		const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': template_market_obj.rest_args.nonce,
			},
			body: JSON.stringify(credentials),
		});
	
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

			if(result.body.token) {
				setIsRegistered(true);
			} else {
				const errorMessage = await JSON.parse(result.body).message;
				console.log('Error: ', {errorMessage});
			}
		} catch (error) {	
		  	console.error('Error', error); // Handle error
		}
		setLoading(false);
	};

	useEffect( () => {
		isLoggedIn && navigate('/');
	}, [] );
	

	return (
		<AuthStyle className="templatiq__auth">
			<h3 className="templatiq__auth__title">Sign up your account</h3>
			{
				!isRegistered ? 
				<form className={`templatiq__auth__wrapper ${loading ? 'templatiq__loading' : ''}`} onSubmit={handleData}>
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
					</div>
					<div className="templatiq__auth__actions">
						<button 
							type="submit" 
							onClick={() => {setLoading(true)}}
							className="templatiq__auth__btn templatiq-btn templatiq-btn-primary"
						>
							Sign Up
						</button>
						<span className="templatiq__auth__desc">
							Already have an account?
							<Link to="/signin" className="templatiq__auth__link">Sign in</Link>
						</span>
						
					</div>
				</form> : 
				<div className="templatiq__auth__wrapper notification-wrapper">
					<p>Successfully Registered. Check Your Email to Complete Registration. </p>
					<div class="templatiq__auth__btn_wrapper">
						<Link to="/" className="templatiq__auth__btn templatiq-btn templatiq-btn-primary">Go to Home</Link>
						<Link to="/signin" className="templatiq__auth__btn templatiq-btn">Sign in</Link>
					</div>
				</div>
			}
			
		</AuthStyle>
	);
}
