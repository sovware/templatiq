import { useState, useEffect } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { SingleTemplateStyle } from './style';

import crownIcon from "@icon/crown.svg";
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import heartSolidIcon from "@icon/heart-solid.svg";
import downloadIcon from "@icon/download-alt.svg";
import templateImg1 from "@images/template/1.svg";

const SingleTemplate = (item) => {
    let { slug, previewURL, purchaseURL, img, title, price, downloadCount, favoriteCount, categories, requiredPlugins } = item;

	const [addedToFavorite, addFavorite] = useState(false);
    const [currentFavoriteCount, setCurrentFavoriteCount] = useState(favoriteCount);


    let addModal = (e) => {
        e.preventDefault();
        document.querySelector(".templatiq").classList.add("templatiq-overlay-enable");
    }
 
    let handleFavorite = ( e ) => {
		e.preventDefault();
		addFavorite( ! addedToFavorite );
	}

    useEffect(() => {
        // This will be triggered whenever addedToFavorite changes
        setCurrentFavoriteCount(addedToFavorite ? Number(currentFavoriteCount) + 1 : favoriteCount);
    }, [addedToFavorite]);
      

    return (
        <SingleTemplateStyle className="templatiq__template__single">
            <div className="templatiq__template__single__img">
                <img src={img ? img : templateImg1} alt="Doctors Template Pack" />
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
                        <a href={previewURL} className="templatiq__template__single__info__action__link">
                            Live Demo
                        </a>
                        {
                            price > 0 ? 
                            <a href={purchaseURL} className="templatiq__template__single__info__action__link purchase-btn">
                                <ReactSVG src={ cartIcon } width={14} height={14} />
                                Purchase
                            </a> :
                            <a href="#" className="templatiq__template__single__info__action__link insert-btn" onClick={addModal}>
                                <ReactSVG src={ downloadIcon } width={14} height={14} />
                                Insert
                            </a>

                        }
                    </div>
                    <div className="templatiq__template__single__info__required">
                        {requiredPlugins && requiredPlugins.map((plugin, index) => (
                            <a key={index} href="#" className="templatiq__template__single__info__required__item templatiq-tooltip" data-info={plugin.name}>
                                <img src={`/svg/icon/${plugin.slug}.svg`} width={28} height={28} />
                            </a>
                        ))}
                    </div>
                </div> 
            </div>
            <div className="templatiq__template__single__content">
                <img src={'/svg/icon/elementor.svg'} width={28} height={28} />
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
                        {downloadCount ? downloadCount : ''}
                    </span>
                    <a href="#" className={`templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip ${addedToFavorite ? 'active' : ''}`} data-info={addedToFavorite ? 'Added to Favourite' : 'Add to Favourite'} onClick={handleFavorite}>
                        <ReactSVG src={ addedToFavorite ? heartSolidIcon : heartIcon } width={14} height={14} />
                        {currentFavoriteCount ? currentFavoriteCount : ''}
                    </a>
                </div>
            </div>
        </SingleTemplateStyle>
    )
}

export default SingleTemplate;