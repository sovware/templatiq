import DashboardLayout from '@layout/DashboardLayout';
import store from '@store/index';
import { select } from '@wordpress/data';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { MyAccountStyle } from './style';
import { __ } from '@wordpress/i18n';

import userIcon from '@icon/user.svg';

export default function MyAccountModule() {
	const { userDisplayName, userEmail } = select( store ).getUserInfo();

	const [ formData, setFormData ] = useState( {
		authorFullName: userDisplayName,
		authorEmail: userEmail,
	} );

	const handleChange = ( e ) => {
		setFormData( {
			...formData,
			[ e.target.name ]: e.target.value,
		} );
	};

	const handleData = ( e ) => {
		e.preventDefault(); // Prevents the default form submission behavior
	};

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard">
				<MyAccountStyle className="templatiq__dashboard__account">
					<h3 className="templatiq__dashboard__account__title">
						{__( 'My Account', 'helpgent' )}
					</h3>
					<form
						className="templatiq__dashboard__account__wrapper"
						onSubmit={ handleData }
					>
						<div className="templatiq__dashboard__account__avatar">
							<ReactSVG
								src={ userIcon }
								width={ 32 }
								height={ 32 }
							/>
						</div>
						<div className="templatiq__dashboard__account__info">
							<div className="templatiq__dashboard__account__info__single">
								<label for="authorFullName">Full Name</label>
								<input
									type="text"
									id="authorFullName"
									name="authorFullName"
									value={ formData.authorFullName }
									onChange={ handleChange }
								/>
							</div>
							<div className="templatiq__dashboard__account__info__single">
								<label for="authorEmail">Email Address</label>
								<input
									type="text"
									id="authorEmail"
									name="authorEmail"
									value={ formData.authorEmail }
									onChange={ handleChange }
								/>
							</div>
						</div>
						<div className="templatiq__dashboard__account__actions">
							<a
								href="#"
								className="templatiq__dashboard__account__link"
							>
								{__( 'Change Password', 'helpgent' )}
							</a>
							<button
								type="submit"
								className="templatiq__dashboard__account__btn templatiq-btn templatiq-btn-primary"
							>
								{__( 'Save Changes', 'helpgent' )}
							</button>
							<a
								href="#"
								className="templatiq__dashboard__account__link text-danger"
							>
								{__( 'Delete Account', 'helpgent' )}
							</a>
						</div>
					</form>
				</MyAccountStyle>
			</div>
		</DashboardLayout>
	);
}
