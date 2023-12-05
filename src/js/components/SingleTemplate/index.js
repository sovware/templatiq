import { useState, useEffect, useRef } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import Bookmark from '@components/Bookmark';
import InsertTemplate from '@components/InsertTemplate';
import ContentLoading from '@components/ContentLoading';
import { SingleTemplateStyle } from './style';

import crownIcon from "@icon/crown.svg";
import cartIcon from "@icon/cart.svg";
import downloadIcon from "@icon/download-alt.svg";
import templateImg1 from "@images/template/1.svg";

const SingleTemplate = (item) => {
    let { slug, preview_link, purchase_url, thumbnail, title, price, number_of_downloads, categories, required_plugins } = item;

    const templateRef = useRef(null)

    return (
        <SingleTemplateStyle className="templatiq__template__single" ref={templateRef}>
            <div className="templatiq__template__single__img">
                <img src={thumbnail ? thumbnail : templateImg1} alt={title} />
                <div className="templatiq__template__single__overlay"></div>
                <div className="templatiq__template__single__info">
                    <div className="templatiq__template__single__info__meta">
                        {
                            price > 0 ?
                            <span className="templatiq__template__single__info__meta__item pro-item">
                                <ReactSVG src={ crownIcon } width={16} height={16} />
                                Pro
                            </span> : ''
                        }
                        
                    </div>
                    <div className="templatiq__template__single__info__action">
                        <a href={preview_link} target="_blank" className="templatiq__template__single__info__action__link">
                            Live Demo
                        </a>
                        {
                            price > 0 ? 
                            <a href={purchase_url} target="_blank" className="templatiq__template__single__info__action__link purchase-btn">
                                <ReactSVG src={ cartIcon } width={14} height={14} />
                                Purchase
                            </a> :
                            <InsertTemplate
                                item={item} 
                                templateRef={templateRef} 
                                className={'templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button'}
                            />
                        }
                    </div>
                    <div className="templatiq__template__single__info__required">
                        {required_plugins && required_plugins.map((plugin, index) => (
                            <a key={index} href="#" className="templatiq__template__single__info__required__item templatiq-tooltip" data-info={plugin.name}>
                                <img src={`${template_market_obj.assets_url}/svg/icon/${plugin.slug}.svg`} width={28} height={28} />
                            </a>
                        ))}
                    </div>
                </div> 
            </div>
            <div className="templatiq__template__single__content">
                <h3 className="templatiq__template__single__title">
                    <Link to={`/template/${slug}`}>{title ? title : 'DDoctors'}</Link>
                </h3>
                <div className="templatiq__template__single__cat">
                    {categories && categories.map((category, index) => (
                        <a key={index} href="#" className="templatiq__template__single__cat__link">{category}</a>
                    ))}
                </div>
                <div className="templatiq__template__single__quickmeta">
                    {
                        price > 0 ?
                        <span className="templatiq__template__single__quickmeta__item pro-item">{`${price ? '$' + price : ''}`}
                        </span> :
                        <span className="templatiq__template__single__quickmeta__item free-item">Free</span>
                    }
                    
                    <span className="templatiq__template__single__quickmeta__item templatiq-tooltip" data-info="Total Downloads">
                        <ReactSVG src={ downloadIcon } width={14} height={14} />
                        {number_of_downloads ? number_of_downloads : ''}
                    </span>
                    
                    <Bookmark item={item} />
                    
                </div>
            </div>
        </SingleTemplateStyle>
    )
}

export default SingleTemplate;