import ReactSVG from 'react-inlinesvg';

import { SingleTemplateStyle } from './style';


import userIcon from "@icon/user-alt.svg";

const SingleTemplate = () => {
    return (
        <SingleTemplateStyle className="templatiq__template__single">
            <div className="templatiq__template__single__wrapper">
                <div className="templatiq__template__single__img"></div>
                <div className="templatiq__template__single__content">
                    <h3 className="templatiq__template__single__title">DDoctors</h3>
                    <div className="templatiq__template__single__cat">
                        <a href="#" className="templatiq__template__single__cat__link">Directorist Core</a>
                        <a href="#" className="templatiq__template__single__cat__link">Pricing Plan</a>
                    </div>
                    <div className="templatiq__template__single__quickmeta">
                        <span className="templatiq__template__single__quickmeta__item">$20</span>
                        <span className="templatiq__template__single__quickmeta__item">
                            <ReactSVG src={ userIcon } width={14} height={14} />
                            24
                        </span>
                        <a href="#" className="templatiq__template__single__quickmeta__item">
                            <ReactSVG src={ userIcon } width={14} height={14} />
                            52
                        </a>
                    </div>
                </div>
            </div>
        </SingleTemplateStyle>
    )
}

export default SingleTemplate;