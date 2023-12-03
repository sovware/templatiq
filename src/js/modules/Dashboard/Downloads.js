import { useState, useEffect } from '@wordpress/element';
import { select, subscribe } from '@wordpress/data';
import DashboardLayout from '@layout/DashboardLayout';
import { useQuery } from '@tanstack/react-query';
import Preloader from '@components/Preloader';
import ContentLoading from '@components/ContentLoading';
import Searchform from "@components/Searchform";
import store from '../../store';

import { TemplatePackStyle } from "@root/style";
import { DashboardItemsStyle } from "./style"

export default function MyDownloadsModule() {
	const [ loading, setLoading ] = useState(false);
	const [ isEmpty, setIsEmpty ] = useState(false);
	const [ downloadedData, setDownloadedData ] = useState([]);
    const [ defaultTemplates, setDefaultTemplates ] = useState([]);
	const [ downloadedTemplates, setDownloadedTemplates ] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const [ filteredTemplates, setFilteredTemplates ] = useState([]);

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
                console.log('Download Data: ', data)

				setDownloadedData(data.downloads);
			}
		} catch (error) {
			// Handle error if needed
			console.error('Error in Download:', error);
		}
	};

	const searchFilteredTemplates = () => {
        const newFilteredTemplates = defaultTemplates.filter((template) =>
          template.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Update the state with the filtered templates
        setFilteredTemplates(newFilteredTemplates);

        return newFilteredTemplates;
    } 

	useEffect(() => {
        if (data) {
            setLoading(false);
            const templateData = data.templates ? data.templates : [];

			const downloadedTemplateIds = downloadedData
				.filter(item => typeof item === 'object' && !Array.isArray(item))
				.map(obj => Object.keys(obj))
				.flat()
				.map(Number);

			// Find template data for downloaded template_ids
			const downloadedTemplate = templateData.filter(template => downloadedTemplateIds.includes(template.template_id));

			setDownloadedTemplates(downloadedTemplate);
			setFilteredTemplates(downloadedTemplate);
			setDefaultTemplates(downloadedTemplate);
			
        } else {
            console.log('No Data')
        }

    }, [isLoading, downloadedData]);

	useEffect(() => {
        searchFilteredTemplates();

    }, [searchValue]);

	useEffect(() => {
        setDownloadedTemplates(filteredTemplates);

        filteredTemplates.length > 0 ? setIsEmpty(false) : setIsEmpty(true);

    }, [filteredTemplates]);

	useEffect(() => {
        setLoading(true);
        getUserInfo();
		downloadedData.length > 0 ? setIsEmpty(true) : setIsEmpty(false);

		// Subscribe to changes in the store's data
		const downloadSearch = subscribe(() => {
			const searchQuery = select( store ).getSearchQuery();

            setSearchValue(searchQuery);
		});

		// purchaseSearch when the component is unmounted
		return () => downloadSearch();

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
