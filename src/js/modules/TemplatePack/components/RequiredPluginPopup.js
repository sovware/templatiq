import ReactSVG from 'react-inlinesvg';
import { RequiredPluginStyle } from './style';

import closeIcon from "@icon/close.svg";

const RequiredPopup = (item) => {
    let { img, title, price, downloadCount, favoriteCount } = item;
    let categories = item.categories;
    let requiredPlugins = item.requiredPlugins;

    return (
        <RequiredPluginStyle className="templatiq__popup templatiq__popup--required">
            <div className="templatiq__popup__content">
                <h2 className="templatiq__popup__title">Required Plugins</h2>
                <p className="templatiq__popup__desc">To import this item you need to install all the Plugin listed below.</p>
                <div className="templatiq__popup__plugins">
                    <div className="templatiq__popup__plugin">
                        <input id="r1" type="checkbox" className="templatiq__popup__plugin__checkbox" />
                        <label for="r1" className="templatiq__popup__plugin__label">
                            <a href="#" className="templatiq__popup__plugin__link">Elementor Pro</a>
                        </label>
                    </div>
                    <div className="templatiq__popup__plugin">
                        <input id="r1" type="checkbox" className="templatiq__popup__plugin__checkbox" />
                        <label for="r1" className="templatiq__popup__plugin__label">
                            <a href="#" className="templatiq__popup__plugin__link">Directorist</a>
                        </label>
                    </div>
                </div>
                <p className="templatiq__popup__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p>
            </div>
            <div className="templatiq__popup__actions">
                <button className="templatiq__popup__action templatiq__popup__action--import templatiq-btn  templatiq-btn-primary">Install and Proceed to Import</button>
                <button className="templatiq__popup__action templatiq__popup__action--cancel templatiq-btn">Cancel</button>
            </div>
            
            <button className="templatiq__popup__cancel__button">
                <ReactSVG src={ closeIcon } width={14} height={14} />
            </button>
            <div className="templatiq__popup__overlay"></div>
        </RequiredPluginStyle>
    )
}

export default RequiredPopup;