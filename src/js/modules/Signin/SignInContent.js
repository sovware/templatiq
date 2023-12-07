import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { AuthStyle } from "@root/style";

import store from '@store/index';
  
export default function SignInContent () {
	const navigate = useNavigate();

	let [loading, setLoading] = useState(false);
	
	const { isLoggedIn } = select( store ).getUserInfo();
	const userInfo = select( store ).getUserInfo();

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
		setLoading(true);
		e.preventDefault(); 
		handleLogin({ username: authorEmail.value, password: authorPassword.value, expiration: 20 });
	};

	// Login API
	const login = async (credentials) => {
		const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': template_market_obj.rest_args.nonce,
			},
			body: JSON.stringify(credentials),
		});
	
		if (!response.ok) {
			throw new Error('Login failed');
		}
	
		return response.json();
	};

	const mutation = useMutation(login);

	const handleLogin = async (credentials) => {
		try {
			// Call the mutation function with the user's credentials
			const result = await mutation.mutateAsync(credentials);

			if (result.body.token) {
				const data = result.body;
				const updatedUserInfo = {
					isLoggedIn: true,
					userName: data.user_nicename,
					userEmail: data.user_email,
					userDisplayName: data.user_display_name,
					bookmarks: data.bookmarks,
					downloads: data.downloads,
					purchased: data.purchased,
				};
	
				// Dispatch the action to update the login status in the store
				dispatch(store).setUserInfo(updatedUserInfo);

				navigate('/dashboard/favorites');

			} else {
				console.error('Login failed', result.message);
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
		<AuthStyle className='templatiq__auth'>
			<h3 className="templatiq__auth__title">Sign in to your account</h3>
			<form className='templatiq__auth__wrapper' onSubmit={handleData}>
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
						onClick={() => {setLoading(true)}}
                        className={`templatiq__auth__btn templatiq-btn templatiq-btn-primary ${loading ? 'templatiq__loading templatiq__loading--btn' : ''}`}
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
