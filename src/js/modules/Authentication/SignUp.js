import { useState } from '@wordpress/element';
import { AuthStyle } from "./style";

export default function SignUp() {
	const [formData, setFormData] = useState({
		authorFullName: "John Doe",
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
					<button 
                        type="submit" 
                        className="templatiq__auth__btn templatiq-btn templatiq-btn-primary"
                    >
                        Sign Up
                    </button>
                    <span className="templatiq__auth__desc">
                        Already have an account?
                        <a href="#" className="templatiq__auth__link">Sign in</a>
                    </span>
					
				</div>
			</form>
		</AuthStyle>
	);
}
