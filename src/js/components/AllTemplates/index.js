import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg'; 
import ReactPaginate from 'react-paginate';
import { select, subscribe } from '@wordpress/data';
import store from '@store/index';

import { TemplatePackFilterStyle } from '@root/style';
import Searchform from "@components/Searchform";
import ContentLoading from '@components/ContentLoading';

import SingleTemplate from "@components/SingleTemplate";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import crownIcon from '@icon/crown.svg';
import arrowLeft from '@icon/angle-left.svg';
import arrowRight from '@icon/angle-right.svg';

export default function AllTemplates (props) {
    const { templateType, templateStatus } = props;
	const paginatePerPage = 6;

	const [ loading, setLoading ] = useState(false);
	const [ isEmpty, setIsEmpty ] = useState(false);
    const [ activeTab, setActiveTab ] = useState('all');

    const [ allTemplates, setAllTemplates ] = useState([]);
    const [ filteredTemplates, setFilteredTemplates ] = useState(allTemplates);
    const [ defaultTemplates, setDefaultTemplates ] = useState([]);
    const [ proTemplates, setProTemplates ] = useState([]);
    const [ freeTemplates, setFreeTemplates ] = useState([]);
    const [ templatesToDisplay, setTemplatesToDisplay ] = useState([]);

	const user = select( store ).getUserInfo();
    const { bookmarks } = select( store ).getUserInfo();
	const [ userFav, setUserFav ] = useState(bookmarks);

    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState([]);

    const [ totalPaginate, setTotalPaginate ] = useState([]);
    const [ startItemCount, setStartItemCount ] = useState(0);
    const [ endItemCount, setEndItemCount ] = useState(6);
    const [ forcePage, setForcePage ]=useState(0);

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

    const searchFilteredTemplates = () => {
        const newFilteredTemplates = allTemplates.filter((template) =>
          template.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Update the state with the filtered templates
        setFilteredTemplates(newFilteredTemplates);

        return newFilteredTemplates;
    } 

    const filterPluginTemplates = () => {
		// Filter templates based on filterValue and templateType
		const newFilteredTemplates = allTemplates.filter(template => {
			// Check if the template type matches the specified templateType
			if (template.type !== templateType) {
				return false;
			}
		
			return filterValue.some(filter => {
				if (filter.type === 'plugins') {
					// Check if any required plugin matches the selected plugin
					return template.required_plugins.some(requiredPlugin => requiredPlugin.slug === filter.key);
				} else if (filter.type === 'categories') {
					// Check if the template includes the selected category
					return template.categories.includes(filter.key);
				}
				return false;
			});
		});
	  
		// Update the state with the filtered templates
		setFilteredTemplates(newFilteredTemplates);
	};

    const checkTemplateType = (templates) => {
        let typeChecked = '';
        if (templateType) {
            user && userFav && templateStatus === 'favorites' ? 
            typeChecked = templates.filter(template => userFav.includes(template.template_id)) :
            typeChecked = templates.filter(template => template.type === templateType);

            setAllTemplates(typeChecked);

        } else {
            setAllTemplates(templates);
        }
        
    }

    useEffect(() => {
        setLoading(true);
        const templateData = select( store ).getTemplates();
        checkTemplateType(templateData);

		// Subscribe to changes in the store's data
		const storeUpdate = subscribe(() => {
			const templates = select( store ).getTemplates();
            const { bookmark } = select( store ).getUserInfo();
			const searchQuery = select( store ).getSearchQuery();
            const filterSearch = select( store ).getFilterSearch();

            setUserFav(bookmark);
            setSearchValue(searchQuery);
            setFilterValue(filterSearch);

            checkTemplateType(templates);
		});

		// storeUpdate when the component is unmounted
		return () => storeUpdate();

    }, []);

    useEffect(() => {
        setDefaultTemplates(allTemplates);
        setFilteredTemplates(allTemplates);
        setProTemplates(allTemplates.filter(template => template.price > 0));
	    setFreeTemplates(allTemplates.filter(template => template.price <= 0));

        // Initially set the allTemplates to display based on start and end item counts
        setTemplatesToDisplay(allTemplates.slice(startItemCount, endItemCount));

        setTotalPaginate(allTemplates.length)

    }, [allTemplates]);

	useEffect(() => {
        filterValue.length > 0 ? filterPluginTemplates() : searchFilteredTemplates();
    }, [filterValue]);

    useEffect(() => {
        searchFilteredTemplates();
    }, [searchValue]);

    useEffect(() => {
        setDefaultTemplates(filteredTemplates);
        setProTemplates(filteredTemplates.filter(template => template.price > 0));
	    setFreeTemplates(filteredTemplates.filter(template => template.price <= 0));

        // Initially set the filteredTemplates to display based on start and end item counts
        setTemplatesToDisplay(filteredTemplates.slice(startItemCount, endItemCount));

        setTotalPaginate(filteredTemplates.length)

        filteredTemplates.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
        setLoading(false);

    }, [filteredTemplates]);

    useEffect(() => {
        templatesToDisplay.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
        console.log('Templates to Display Changed: ', templatesToDisplay)
    }, [templatesToDisplay]);
    
    useEffect(() => {
        if (activeTab === 'all') {
            setTemplatesToDisplay(defaultTemplates.slice(startItemCount, endItemCount));
            setTotalPaginate(defaultTemplates.length)
        } else if (activeTab === 'pro') {
            setTemplatesToDisplay(proTemplates.slice(startItemCount, endItemCount));
            setTotalPaginate(proTemplates.length)
        } else if (activeTab === 'free') {
            setTemplatesToDisplay(freeTemplates.slice(startItemCount, endItemCount));
            setTotalPaginate(freeTemplates.length)
        }

    }, [activeTab, startItemCount, endItemCount, filteredTemplates, proTemplates, freeTemplates]);

    console.log('Templates to Display: ', templatesToDisplay)

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
                                <button className="templatiq__content__top__filter__link">All ({defaultTemplates.length})</button>
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
                { 
                    isEmpty && 
                    <div className="templatiq__content__empty">
                        <h3 className="templatiq__content__empty__title">No Template Found</h3>
                        <h3 className="templatiq__content__empty__desc">Search Other Templates</h3>
                    </div>
                }
                { loading ? <ContentLoading style={ { margin: 0, minHeight: 'unset' } } /> :
                    <>
                        <TabPanel className="templatiq-row templatiq__content__tab-panel">
                        {templatesToDisplay
                            .map(template => (
                                <div className="templatiq-col-4">
                                    {loading ? <ContentLoading style={ { margin: 0, minHeight: 'unset' } } /> :
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
                                    }
                                </div>
                            ))
                        }
                        </TabPanel>
                        <TabPanel className="templatiq-row templatiq__content__tab-panel">
                        {templatesToDisplay
                            .map(template => (
                                <div className="templatiq-col-4">
                                    {loading ? <ContentLoading style={ { margin: 0, minHeight: 'unset' } } /> :
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
                                    {loading ? <ContentLoading style={ { margin: 0, minHeight: 'unset' } } /> :
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
                                    }
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
                    </>
                }
            </div>
        </Tabs>
	);
}

