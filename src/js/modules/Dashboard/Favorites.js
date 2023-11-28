import { useState, useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import store from '../../store';

import DashboardLayout from '@layout/DashboardLayout';
import { TemplatePackStyle } from "@root/style";
import AllTemplates from "@components/AllTemplates";

export default function MyFavoritesModule(props) {
	const { type, status } = props;
	const user = select( store ).getUserInfo();

	const [userFav, setUserFav] = useState([]);

	const getUserInfo = async () => {
		try {
			const response = await fetch(`${template_market_obj.rest_args.endpoint}/account/data`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': template_market_obj.rest_args.nonce,
				},
			});
	
			if (!response.ok) {
				throw new Error('Error Occurred');
			}
	
			if (response.ok) {
				const responseData = await response.json();
				const data = responseData.body;
                setUserFav(data.bookmarks);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in getUserInfo:', error);
		}
	};

	useEffect(() => {
        getUserInfo();

    }, []);

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<TemplatePackStyle className="templatiq__content">
					<AllTemplates 
						user={user}
						templateStatus={status}
						templateType={type}
						userFavTemplates={userFav}
					/>
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
