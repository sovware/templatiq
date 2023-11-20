import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg'; 
import { TemplatePackFilterStyle } from '@root/style';
import Searchform from "@components/Searchform";
import SingleTemplate from "@components/SingleTemplate";

// import templatesData from "@data/template.json";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ReactPaginate from 'react-paginate';
import { useQuery } from '@tanstack/react-query';
import crownIcon from '@icon/crown.svg';
import arrowLeft from '@icon/angle-left.svg';
import arrowRight from '@icon/angle-right.svg';

export default function AllTemplates (props) {
    const { templateType } = props;
    console.log('AllTemplates Type: ', props, templateType)
    const [allTemplates, setAllTemplates] = useState([]);

	const total = 6;
	const perPage = 4;

	const handlePageClick = ( data ) => {
		return data;
	}

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

    // const { isLoading, error, data } = useQuery(['templates'], () => templatesData);
    
	if (isLoading) 
    return (
        <div className="templatiq-loader">
            <div className="templatiq-loader__spinner">
                Loading..
            </div>
        </div>
    );

	if (error) 
    return (
        <div className="templatiq-loader">
            <div className="templatiq-loader__spinner">
                {error.message}
            </div>
        </div>
    );
    
	const defaultTemplates = data.templates;
    const pageTypeTemplates = defaultTemplates.filter(template => template.type === 'page');
    const blockTypeTemplates = defaultTemplates.filter(template => template.type === 'block');

    console.log('defaultTemplates: ', defaultTemplates)
    console.log('pageTypeTemplates: ', pageTypeTemplates)
    console.log('blockTypeTemplates: ', blockTypeTemplates)


    // useEffect(() => {
    //     if (templateType === 'page') {
    //         setAllTemplates(pageTypeTemplates);
    //     } else if (templateType === 'block') {
    //         setAllTemplates(blockTypeTemplates);
    //     } else {
    //         setAllTemplates(defaultTemplates);
    //     }
    // }, [templateType, data]);

    // console.log('allTemplates: ', allTemplates)

    // Other state variables for proTemplates, freeTemplates, etc.
	const proTemplates = defaultTemplates.filter(template => template.price > 0);
	const freeTemplates = defaultTemplates.filter(template => template.price <= 0);


	return (
        <Tabs className="templatiq__content__tab">
            <div className="templatiq__content__top">
                <div className="templatiq__content__top__filter">
                    <h3 className="templatiq__content__top__filter__title">
                        Template Pack
                    </h3>
                    <TemplatePackFilterStyle className="templatiq__content__top__filter__wrapper">
                        <TabList className="templatiq__content__top__filter__tablist">
                            <Tab className="templatiq__content__top__filter__item">
                                <a href="#" className="templatiq__content__top__filter__link">All ({defaultTemplates.length})</a>
                            </Tab>
                            <Tab className="templatiq__content__top__filter__item">
                                <a href="#" className="templatiq__content__top__filter__link">Free ({freeTemplates.length})</a>
                            </Tab>
                            <Tab className="templatiq__content__top__filter__item">
                                <a href="#" className="templatiq__content__top__filter__link">
                                    <ReactSVG src={crownIcon} width={12} height={12} />
                                    Pro ({proTemplates.length})
                                </a>
                            </Tab>
                        </TabList>
                    </TemplatePackFilterStyle>
                </div>
                <div className="templatiq__content__top__search">
                    <Searchform />
                </div>
            </div>

            <div className="templatiq__content__wrapper">
                <TabPanel className="templatiq-row templatiq__content__tab-panel">
                {defaultTemplates
                    .map(template => (
                        <div className="templatiq-col-4">
                            <SingleTemplate 
                                template_id = {template.template_id}
                                builder = {template.builder}
                                thumbnail = {template.thumbnail} 
                                slug = {template.slug}
                                title = {template.title} 
                                price = {template.price} 
                                number_of_downloads = {template.number_of_downloads} 
                                number_of_bookmarks = {template.number_of_bookmarks} 
                                required_plugins = {template.required_plugins}
                                categories = {template.categories}
                                purchase_url = {template.purchase_url}
                                preview_link = {template.preview_link}
                            />
                        </div>
                    ))
                }
                </TabPanel>
                <TabPanel className="templatiq-row templatiq__content__tab-panel">
                {freeTemplates
                    .map(template => (
                        <div className="templatiq-col-4">
                            <SingleTemplate 
                                template_id = {template.template_id}
                                builder = {template.builder}
                                thumbnail = {template.thumbnail} 
                                slug = {template.slug}
                                title = {template.title} 
                                number_of_downloads = {template.number_of_downloads} 
                                number_of_bookmarks = {template.number_of_bookmarks} 
                                required_plugins = {template.required_plugins}
                                categories = {template.categories}
                                purchase_url = {template.purchase_url}
                                preview_link = {template.preview_link}
                            />
                        </div>
                    ))
                }
                </TabPanel>
                <TabPanel className="templatiq-row templatiq__content__tab-panel">
                {proTemplates
                    .map(template => (
                        <div className="templatiq-col-4">
                            <SingleTemplate 
                                template_id = {template.template_id}
                                builder = {template.builder}
                                thumbnail = {template.thumbnail} 
                                slug = {template.slug}
                                title = {template.title} 
                                price = {template.price} 
                                number_of_downloads = {template.number_of_downloads} 
                                number_of_bookmarks = {template.number_of_bookmarks} 
                                required_plugins = {template.required_plugins}
                                categories = {template.categories}
                                purchase_url = {template.purchase_url}
                                preview_link = {template.preview_link}
                            />
                        </div>
                    ))
                }
                </TabPanel>

                { total > perPage && (
                    <ReactPaginate
                        breakLabel="..."
                        onPageChange={ handlePageClick }
                        nextLabel={ <ReactSVG src={ arrowRight } /> }
                        previousLabel={ <ReactSVG src={ arrowLeft } /> }
                        pageRangeDisplayed={ 3 }
                        pageCount={ Math.ceil( total / perPage ) }
                        previousClassName="templatiq-pagination__item"
                        previousLinkClassName="templatiq-pagination__link templatiq-pagination__control"
                        nextClassName="templatiq-pagination__item"
                        nextLinkClassName="templatiq-pagination__link templatiq-pagination__control"
                        containerClassName="templatiq-pagination"
                        pageClassName="templatiq-pagination__item"
                        pageLinkClassName="templatiq-pagination__link"
                        activeLinkClassName="templatiq-pagination__active"
                        renderOnZeroPageCount={ null }
                    />
                ) }
            </div>
        </Tabs>
	);
}

