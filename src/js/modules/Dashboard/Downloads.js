import { useState, useEffect } from '@wordpress/element';
import DashboardLayout from '@layout/DashboardLayout';
import { useQuery } from '@tanstack/react-query';
import Preloader from '@components/Preloader';
import ContentLoading from '@components/ContentLoading';
import Searchform from "@components/Searchform";

import { TemplatePackStyle } from "@root/style";
import { DashboardItemsStyle } from "./style"

export default function MyDownloadsModule() {
	const [ loading, setLoading ] = useState(false);
	const [ isEmpty, setIsEmpty ] = useState(false);
	const [ downloadedData, setDownloadedData ] = useState([]);
	const [ downloadedTemplates, setDownloadedTemplates ] = useState([]);

	const { isLoading, error, data } = useQuery(['templates'], () => fetch(
        `${template_market_obj.rest_args.endpoint}/template/library`, 
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': template_market_obj.rest_args.nonce,
            }
        }).then(res => res.json() )
    );

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

				setDownloadedData(data.downloads);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in Download:', error);
		}
	};

	useEffect(() => {
        if (data) {
            setLoading(false);
            const templateData = data.templates ? data.templates : [];
			const downloadedTemplate = templateData.filter(template => downloadedData.includes(template.template_id));

			setDownloadedTemplates(downloadedTemplate);
			
        } else {
            console.log('No Data')
        }

    }, [isLoading, downloadedData]);

	useEffect(() => {
        setLoading(true);
        getUserInfo();
		downloadedData.length > 0 ? setIsEmpty(true) : setIsEmpty(false);

    }, []);

	if (isLoading) 
    return (
        <Preloader />
    );

	if (error) 
    return (
        <>
            {error.message}
        </>
    );

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
							{loading ? (
								<ContentLoading style={{ margin: 0, minHeight: 'unset' }} />
								) : isEmpty ? (
									<div className="templatiq__content__empty">
										<h3 className="templatiq__content__empty__title">No Downloads Found</h3>
										<h3 className="templatiq__content__empty__desc">Search Other Templates</h3>
									</div>
								) : (
									downloadedTemplates.map(item => (
										<div className="templatiq__content__dashboard__single">
											<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--name">
												<img src={item.thumbnail} alt={item.title} className="templatiq__content__dashboard__item__img" />
												<span className="templatiq__content__dashboard__item__title">
													{item.title}
												</span>
											</div>
											<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--type">
												<span className="templatiq__content__dashboard__item__text">
													{item.type} 
												</span>
											</div>
											<div className="templatiq__content__dashboard__item templatiq__content__dashboard__item--date">
												<span className="templatiq__content__dashboard__item__text">
													14 May, 2023 7.23pm
												</span>
											</div>	
										</div>
									))
								)
							}
						</div>
					</DashboardItemsStyle>
				</TemplatePackStyle>
			</div>
		</DashboardLayout>
	);
}
