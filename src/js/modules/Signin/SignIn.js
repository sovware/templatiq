import { useState } from '@wordpress/element';
import { Link } from 'react-router-dom';
import { AuthStyle } from "@root/style";

export default function SignInContent() {
	const [formData, setFormData] = useState({
		authorEmail: "sample@gmail.com",
		authorPassword: "123456",
	});

	const handleChange = (e) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};

	const handleData = (e) => {
		e.preventDefault(); 
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
