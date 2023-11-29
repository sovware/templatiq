import { useState, useEffect } from '@wordpress/element';
import { useQuery } from '@tanstack/react-query';
import ReactSVG from 'react-inlinesvg';
import { SidebarStyle, SidebarItemStyle } from './style';

import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ContentLoading from '@components/ContentLoading';

import filterIcon from '@icon/filter.svg';

const Sidebar = () => {
	const [ categories, setCategories] = useState([]);
	const [ pluginCategories, setPluginCategories] = useState([]);
	const [ pluginMaps, setPluginMaps] = useState([]);

	const [ countCategories, setCountCategories] = useState();
	const [ countPluginCategories, setCountPluginCategories] = useState();
	const [ countPluginMaps, setCountPluginMaps] = useState();

	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedPluginCategories, setSelectedPluginCategories] = useState([]);
	const [selectedPluginMaps, setSelectedPluginMaps] = useState([]);

	const templateType = 'pack'


	const handleCategoryChange = (category) => {
		console.log('Category: ', category)
		const updatedCategories = selectedCategories.includes(category)
			? selectedCategories.filter((c) => c !== category)
			: [...selectedCategories, category];

    	setSelectedCategories(updatedCategories);

		console.log('Selected category: ', updatedCategories);
	};

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

	function getSidebarData(data) {
		console.log('Data: ', data)
		setCategories(data.categories);
		setPluginCategories(data.plugins_cats);
		setPluginMaps(data.plugins_map);

		// Filter templates based on type
		const templatesOfType = data.templates.filter(template => template.type === templateType);

		// Count for categories based on templates of the specific type
		const categoryCount = {};
		templatesOfType.forEach(template => {
			template.categories.forEach(category => {
				if (categoryCount[category]) {
					categoryCount[category]++;
				} else {
					categoryCount[category] = 1;
				}
			});
		});
		setCountCategories(categoryCount);

		// Count for plugin categories based on templates of the specific type
		const pluginCategoryCount = {};
		Object.keys(data.plugins_cats).forEach(pluginCategory => {
			pluginCategoryCount[pluginCategory] = templatesOfType.filter(template => template.categories.includes(pluginCategory)).length;
		});
		setCountPluginCategories(pluginCategoryCount);
	
		// Count for plugin maps based on templates of the specific type
		const pluginMapCount = {};
		Object.keys(data.plugins_map).forEach(pluginMap => {
				pluginMapCount[pluginMap] = templatesOfType.filter(template => template.categories.includes(pluginMap)).length;
		});
		setCountPluginMaps(pluginMapCount);
	
	}

	useEffect(() => {
        if (data) {
           getSidebarData(data);
            
        } else {
            console.log('No Data')
        }

    }, [isLoading]);


	// if (isLoading) 
    // return (
    //     <>

	// 	</>
    // );

	// if (error) 
    // return (
    //     <>
    //         {error.message}
    //     </>
    // );

    // console.log('All Data: ', data);


	console.log('Categories: ', categories)
	console.log('Plugin Categories: ', pluginCategories)
	console.log('Plugin Maps: ', pluginMaps)

	console.log('Count Categories: ', countCategories)
	console.log('Count Plugin Categories: ', countPluginCategories)
	console.log('Count Plugin Maps: ', countPluginMaps)

	return (
		<SidebarStyle className="templatiq__sidebar">
			{
				isLoading && <ContentLoading style={ { margin: 0, width: '256px' } } />
			}
			<div className="templatiq__sidebar__top">
				<h3 className="templatiq__sidebar__top__title">
					<ReactSVG src={ filterIcon } width={18} height={18} />
					Filter
				</h3>
				<a href="#" className="templatiq__sidebar__top__clear">Clear</a>
			</div>
			<div className="templatiq__sidebar__wrapper">
				<Tabs>
					<TabList className="templatiq__sidebar__nav">
						<Tab className="templatiq__sidebar__nav__item">
							<a href="#" className="templatiq__sidebar__nav__link">Plugins</a>
						</Tab>
						<Tab className="templatiq__sidebar__nav__item">
							<a href="#" className="templatiq__sidebar__nav__link">Categories</a>
						</Tab>
					</TabList>
					<TabPanel>
						<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__plugins">
							<Accordion transition transitionTimeout={250} className="templatiq__sidebar__accordion">
								<AccordionItem initialEntered header="Directorist" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" id="1" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label for="1" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input id="2" type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label for="2" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input id="3" type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label for="3" className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
								<AccordionItem header="WooCommerce" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
								<AccordionItem header="HelpGent" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
								<AccordionItem header="Legal Pages" className="templatiq__sidebar__accordion__single">
									<div className="templatiq__sidebar__accordion__item">
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Pricing Plan</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">WooCommerce Pricing Plans</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Business Directory</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Marketplace</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
										<div className="templatiq__sidebar__filter__single templatiq__checkbox">
											<input type="checkbox" className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input" />
											<label className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">Claim Listing</label>
											<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">12</span>
										</div>
									</div>
								</AccordionItem>
							</Accordion>
						</SidebarItemStyle>
					</TabPanel>
					<TabPanel>
						<SidebarItemStyle className="templatiq__sidebar__filter templatiq__sidebar__categories">
							<div className="templatiq__sidebar__categories__wrapper">
								{Object.keys(categories).map((key) => (
									<div className="templatiq__sidebar__filter__single templatiq__checkbox">
										<input 
											type="checkbox" id={key} className="templatiq__sidebar__filter__single__checkbox templatiq__checkbox__input"
											onChange={() => handleCategoryChange(key)}
										/>
										<label for={key} className="templatiq__sidebar__filter__single__label templatiq__checkbox__label">{categories[key]}</label>
										<span className="templatiq__sidebar__filter__single__count templatiq__checkbox__count">{countCategories[key] || 0}</span>
									</div>
								))}
							</div>
						</SidebarItemStyle>
					</TabPanel>
				</Tabs>
			</div>
		</SidebarStyle>
	);
}

export default Sidebar;
