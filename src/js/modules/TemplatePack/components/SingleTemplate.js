import ReactSVG from 'react-inlinesvg';

import { SingleTemplateStyle } from './style';

import crownIcon from "@icon/crown.svg";
import cartIcon from "@icon/cart.svg";
import heartIcon from "@icon/heart.svg";
import downloadIcon from "@icon/download-alt.svg";
import elementorIcon from "@icon/elementor.svg";
import directoristIcon from "@icon/directorist.svg";
import templateImg1 from "@images/template/1.svg";

const SingleTemplate = () => {
    return (
        <SingleTemplateStyle className="templatiq__template__single">
            <div className="templatiq__template__single__img">
                <img src={templateImg1} alt="Doctors Template Pack" />
                <div className="templatiq__template__single__overlay"></div>
                <div className="templatiq__template__single__info">
                    <div className="templatiq__template__single__info__meta">
                        <span className="templatiq__template__single__info__meta__item">
                            <ReactSVG src={ crownIcon } width={16} height={16} />
                            Pro
                        </span>
                    </div>
                    <div className="templatiq__template__single__info__action">
                        <a href="#" className="templatiq__template__single__info__action__link">
                            Live Demo
                        </a>
                        <a href="#" className="templatiq__template__single__info__action__link purchase-btn">
                            <ReactSVG src={ cartIcon } width={14} height={14} />
                            Purchase
                        </a>
                    </div>
                    <div className="templatiq__template__single__info__required">
                        <a href="#" className="templatiq__template__single__info__required__item">
                            <ReactSVG src={ directoristIcon } width={28} height={28} />
                        </a>
                        <a href="#" className="templatiq__template__single__info__required__item">
                            <ReactSVG src={ elementorIcon } width={28} height={28} />
                        </a>
                    </div>
                </div> 
            </div>
            <div className="templatiq__template__single__content">
                <h3 className="templatiq__template__single__title">DDoctors</h3>
                <div className="templatiq__template__single__cat">
                    <a href="#" className="templatiq__template__single__cat__link">Directorist Core</a>
                    <a href="#" className="templatiq__template__single__cat__link">Pricing Plan</a>
                </div>
                <div className="templatiq__template__single__quickmeta">
                    <span className="templatiq__template__single__quickmeta__item pro-item">$20</span>
                    <span className="templatiq__template__single__quickmeta__item">
                        <ReactSVG src={ downloadIcon } width={14} height={14} />
                        24
                    </span>
                    <a href="#" className="templatiq__template__single__quickmeta__item favorite-btn">
                        <ReactSVG src={ heartIcon } width={14} height={14} />
                        52
                    </a>
                </div>
            </div>
        </SingleTemplateStyle>
    )
}

export default SingleTemplate;