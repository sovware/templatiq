import ReactSVG from 'react-inlinesvg';

import { SingleTemplateStyle } from './style';

import crownIcon from "@icon/crown.svg";
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import downloadIcon from "@icon/download-alt.svg";
import templateImg1 from "@images/template/1.svg";

const SingleTemplate = (item) => {
    let { img, title, price, downloadCount, favoriteCount, isPurchased } = item;
    let categories = item.categories;
    let requiredPlugins = item.requiredPlugins;

    return (
        <SingleTemplateStyle className="templatiq__template__single">
            <div className="templatiq__template__single__img">
                <img src={img ? img : templateImg1} alt="Doctors Template Pack" />
                <div className="templatiq__template__single__overlay"></div>
                <div className="templatiq__template__single__info">
                    <div className="templatiq__template__single__info__meta">
                        {
                            price ?
                                <span className="templatiq__template__single__info__meta__item pro-item">
                                    <ReactSVG src={ crownIcon } width={16} height={16} />
                                    Pro
                                </span> : ''
                        }
                        
                    </div>
                    <div className="templatiq__template__single__info__action">
                        <a href="#" className="templatiq__template__single__info__action__link">
                            Live Demo
                        </a>
                        {
                            isPurchased ? 
                                <a href="#" className="templatiq__template__single__info__action__link insert-btn">
                                <ReactSVG src={ downloadIcon } width={14} height={14} />
                                Insert
                            </a> :
                            <a href="#" className="templatiq__template__single__info__action__link purchase-btn">
                                <ReactSVG src={ cartIcon } width={14} height={14} />
                                Purchase
                            </a>

                        }
                    </div>
                    <div className="templatiq__template__single__info__required">
                        {requiredPlugins && requiredPlugins.map((plugin, index) => (
                            <a key={index} href={plugin.url} className="templatiq__template__single__info__required__item templatiq-tooltip" data-info={plugin.name}>
                                <ReactSVG src={ plugin.icon } width={28} height={28} />
                            </a>
                        ))}
                    </div>
                </div> 
            </div>
            <div className="templatiq__template__single__content">
                <h3 className="templatiq__template__single__title">{title ? title : 'DDoctors'}</h3>
                <div className="templatiq__template__single__cat">
                    {categories && categories.map((category, index) => (
                        <a key={index} href={category.url} className="templatiq__template__single__cat__link">{category.name}</a>
                    ))}
                    {/* <a href="#" className="templatiq__template__single__cat__link">Directorist Core</a>
                    <a href="#" className="templatiq__template__single__cat__link">Pricing Plan</a> */}
                </div>
                <div className="templatiq__template__single__quickmeta">
                    {
                        price ?
                        <span className="templatiq__template__single__quickmeta__item pro-item">{`${price ? '$' + price : ''}`}
                        </span> :
                        <span className="templatiq__template__single__quickmeta__item free-item">Free</span>
                    }
                    
                    <span className="templatiq__template__single__quickmeta__item templatiq-tooltip" data-info="Total Downloads">
                        <ReactSVG src={ downloadIcon } width={14} height={14} />
                        {downloadCount ? downloadCount : ''}
                    </span>
                    <a href="#" className="templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip" data-info="Added to Favourite">
                        <ReactSVG src={ heartIcon } width={14} height={14} />
                        {favoriteCount ? favoriteCount : ''}
                    </a>
                </div>
            </div>
        </SingleTemplateStyle>
    )
}

export default SingleTemplate;