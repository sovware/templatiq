import DashboardLayout from '@layout/DashboardLayout';
import { useState } from '@wordpress/element';
import ReactSVG from "react-inlinesvg";
import { MyAccountStyle } from "./style";

import userIcon from "@icon/user.svg";

export default function MyAccountModule() {
	const [formData, setFormData] = useState({
		authorFullname: "Ibn Adam",
		authorEmail: "sample@gmail.com",
	});

	const handleChange = (e) => {
		setFormData({
		  	...formData,
		  	[e.target.name]: e.target.value,
		});
	};

	const handleData = (e) => {
		e.preventDefault(); // Prevents the default form submission behavior
	};


	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<MyAccountStyle className="templatiq__dashboard__account">
					<h3 className="templatiq__dashboard__account__title">My Account</h3>
					<form className="templatiq__dashboard__account__wrapper" onSubmit={handleData}>
						<div className="templatiq__dashboard__account__avatar">
							<ReactSVG src={userIcon} width={32} height={32} />
						</div>
						<div className="templatiq__dashboard__account__info">
							<div className="templatiq__dashboard__account__info__single">
								<label for="authorFullname">Full Name</label>
								<input
									type="text"
									id="authorFullname"
									name="authorFullname"
									value={formData.authorFullname}
									onChange={handleChange}
								/>
							</div>
							<div className="templatiq__dashboard__account__info__single">
								<label for="authorEmail">Email Address</label>
								<input
									type="text"
									id="authorEmail"
									name="authorEmail"
									value={formData.authorEmail}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="templatiq__dashboard__account__actions">
							<a href="#" className="templatiq__dashboard__account__link">Change Password</a>
							<button type="submit" className="templatiq__dashboard__account__btn templatiq-btn templatiq-btn-primary">Save Changes</button>
							<a href="#" className="templatiq__dashboard__account__link text-danger">Delete Account</a>
						</div>
					</form>
				</MyAccountStyle>
			</div>
		</DashboardLayout>
	);
}
