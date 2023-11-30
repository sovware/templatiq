import { useState, useEffect } from '@wordpress/element';

import DashboardLayout from '@layout/DashboardLayout';
import Searchform from "@components/Searchform";

import { TemplatePackStyle } from "@root/style";
import { DashboardItemsStyle } from "./style"

import templateImg1 from "@images/template/1.svg";

export default function MyDownloadsModule() {
	const [userDownloads, setUserDownloads] = useState([]);

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
                console.log('Download Data: ', data.downloads)

				setUserDownloads(data.downloads);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in Download:', error);
		}
	};

	useEffect(() => {
        getUserInfo();

    }, []);

	return (
		<DashboardLayout>
			<div className="templatiq__content templatiq__content--dashboard"> 
				<TemplatePackStyle className="templatiq__content__dashboard">
					<div className="templatiq__content__top">
						<div className="templatiq__content_top__filter">
							<h3 className="templatiq__content__top__filter__title">
								My Downloads
							</h3>
						</div>
						<div className="templatiq__content__top__search">
							<Searchform />
						</div>
					</div>
					<DashboardItemsStyle className="templatiq__content__dashboard__downloads">
						<div className="templatiq__content__dashboard__header">
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
								<span className="templatiq__content__dashboard__item__header">
									Name
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
								<span className="templatiq__content__dashboard__item__header">
									Downloaded Type
								</span>
							</div>
							<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
								<span className="templatiq__content__dashboard__item__header">
									Downloaded Date
								</span>
							</div>
						</div>
						<div className="templatiq__content__dashboard__items">
							{
								userDownloads.forEach((item) => {
									console.log('Downloaded Item: ', item)
								})
							}
							<div className="templatiq__content__dashboard__single">
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
									<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
									<span className="templatiq__content__dashboard__item__title">
										Directorist Plugin
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
									<span className="templatiq__content__dashboard__item__text">
										Template Pack
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
									<span className="templatiq__content__dashboard__item__text">
										14 May, 2023 7.23pm
									</span>
								</div>	
							</div>
							<div className="templatiq__content__dashboard__single">
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
									<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
									<span className="templatiq__content__dashboard__item__title">
										Directorist Plugin
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
									<span className="templatiq__content__dashboard__item__text">
										Template Pack
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
									<span className="templatiq__content__dashboard__item__text">
										14 May, 2023 7.23pm
									</span>
								</div>	
							</div>
							<div className="templatiq__content__dashboard__single">
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
									<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
									<span className="templatiq__content__dashboard__item__title">
										Directorist Plugin
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
									<span className="templatiq__content__dashboard__item__text">
										Template Pack
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
									<span className="templatiq__content__dashboard__item__text">
										14 May, 2023 7.23pm
									</span>
								</div>	
							</div>
							<div className="templatiq__content__dashboard__single">
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
									<img src={templateImg1} alt="Template Image" className="templatiq__content__dashboard__item__img" />
									<span className="templatiq__content__dashboard__item__title">
										Directorist Plugin
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
									<span className="templatiq__content__dashboard__item__text">
										Template Pack
									</span>
								</div>
								<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
									<span className="templatiq__content__dashboard__item__text">
										14 May, 2023 7.23pm
									</span>
								</div>	
							</div>
						</div>
					</DashboardItemsStyle>
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
