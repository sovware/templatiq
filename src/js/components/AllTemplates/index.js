import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg'; 
import ReactPaginate from 'react-paginate';
import { useQuery } from '@tanstack/react-query';

import { TemplatePackFilterStyle } from '@root/style';
import Searchform from "@components/Searchform";
import ContentLoading from '@components/ContentLoading';
import Preloader from '@components/Preloader';

import SingleTemplate from "@components/SingleTemplate";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import crownIcon from '@icon/crown.svg';
import arrowLeft from '@icon/angle-left.svg';
import arrowRight from '@icon/angle-right.svg';

export default function AllTemplates (props) {
    const { templateType } = props;
	const paginatePerPage = 6;

    const [activeTab, setActiveTab] = useState('all');

    const [allTemplates, setAllTemplates] = useState([]);
    const [proTemplates, setProTemplates] = useState([]);
    const [freeTemplates, setFreeTemplates] = useState([]);
    const [templatesToDisplay, setTemplatesToDisplay] = useState([]);

    const [totalPaginate, setTotalPaginate] = useState([]);
    const [ startItemCount, setStartItemCount ] = useState(0);
    const [ endItemCount, setEndItemCount ] = useState(6);
    const [forcePage, setForcePage]=useState(0);

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

    const changeTemplateTab = (type) => {
        setActiveTab(type);

        setForcePage(0);
        setStartItemCount(0);
        setEndItemCount(paginatePerPage);
    }

    const handlePageClick = (event) => {
        const selectedPage = event.selected + 1;
        setStartItemCount((selectedPage * paginatePerPage) - paginatePerPage);
        setEndItemCount((selectedPage * paginatePerPage));

    };

    useEffect(() => {
        if (data) {
            data && templateType ?
            setAllTemplates(data.templates.filter(template => template.type === templateType)) : 
            setAllTemplates(data.templates);
            
        } else {
            setAllTemplates([]);
        }

    }, [isLoading]);

    useEffect(() => {
        setProTemplates(allTemplates.filter(template => template.price > 0));
	    setFreeTemplates(allTemplates.filter(template => template.price <= 0));

        // Initially set the allTemplates to display based on start and end item counts
        setTemplatesToDisplay(allTemplates.slice(startItemCount, endItemCount));

        setTotalPaginate(allTemplates.length)

    }, [allTemplates]);

    useEffect(() => {
        if (activeTab === 'all') {
            setTemplatesToDisplay(allTemplates.slice(startItemCount, endItemCount));
            setTotalPaginate(allTemplates.length)
        } else if (activeTab === 'pro') {
            setTemplatesToDisplay(proTemplates.slice(startItemCount, endItemCount));
            setTotalPaginate(proTemplates.length)
        } else if (activeTab === 'free') {
            setTemplatesToDisplay(freeTemplates.slice(startItemCount, endItemCount));
            setTotalPaginate(freeTemplates.length)
        }

    }, [activeTab, startItemCount, endItemCount]);


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

    console.log('All Templates: ', allTemplates);

	return (
        <Tabs className="templatiq__content__tab">
            <div className="templatiq__content__top">
                <div className="templatiq__content__top__filter">
                    <h3 className="templatiq__content__top__filter__title">
                        Template Pack
                    </h3>
                    
                    <TemplatePackFilterStyle className="templatiq__content__top__filter__wrapper">
                        <TabList className="templatiq__content__top__filter__tablist">
                            <Tab 
                                className="templatiq__content__top__filter__item"
                                onClick={() => changeTemplateTab('all')}
                            >
                                <button className="templatiq__content__top__filter__link">All ({allTemplates.length})</button>
                            </Tab>
                           <Tab 
                                className="templatiq__content__top__filter__item"
                                onClick={() => changeTemplateTab('free')}
                            >
                                <button className="templatiq__content__top__filter__link">Free ({freeTemplates.length})</button>
                            </Tab>
                           <Tab 
                                className="templatiq__content__top__filter__item"
                                onClick={() => changeTemplateTab('pro')}
                            >
                                <button className="templatiq__content__top__filter__link">
                                    <ReactSVG src={crownIcon} width={12} height={12} />
                                    Pro ({proTemplates.length})
                                </button>
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
                {templatesToDisplay
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
                {templatesToDisplay
                    .map(template => (
                        <div className="templatiq-col-4">
                            {isLoading ? <ContentLoading style={ { margin: 0, minHeight: 'unset' } } /> :
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
                            }
                        </div>
                    ))
                }
                </TabPanel>
                <TabPanel className="templatiq-row templatiq__content__tab-panel">
                {templatesToDisplay
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

                { totalPaginate > paginatePerPage && (
                    <ReactPaginate
                        key={activeTab}
                        breakLabel="..."
                        onPageChange={ handlePageClick }
                        nextLabel={ <ReactSVG src={ arrowRight } /> }
                        previousLabel={ <ReactSVG src={ arrowLeft } /> }
                        pageRangeDisplayed={ 3 }
                        forcePage={forcePage}
                        pageCount={ Math.ceil( totalPaginate / paginatePerPage ) }
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

