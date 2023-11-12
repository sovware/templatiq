import ReactSVG from 'react-inlinesvg';
import { RequiredPluginStyle } from './style';

import closeIcon from "@icon/close.svg";

const Popup = () => {

    let closeModal = () => {
        document.querySelector(".templatiq").classList.remove("templatiq-overlay-enable");
    }

    return (
        <RequiredPluginStyle className="templatiq__modal templatiq__modal--required">
            <div className="templatiq__modal__content">
                <h2 className="templatiq__modal__title">Required Plugins</h2>
                <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p>
                <div className="templatiq__modal__plugins">
                    <div className="templatiq__modal__plugin templatiq__checkbox">
                        <input id="r1" type="checkbox" className="templatiq__modal__plugin__checkbox templatiq__checkbox__input" />
                        <label for="r1" className="templatiq__modal__plugin__label templatiq__checkbox__label">
                            <a href="#" className="templatiq__modal__plugin__link">Elementor Pro</a>
                        </label>
                    </div>
                    <div className="templatiq__modal__plugin templatiq__checkbox">
                        <input id="r2" type="checkbox" className="templatiq__modal__plugin__checkbox templatiq__checkbox__input" />
                        <label for="r2" className="templatiq__modal__plugin__label templatiq__checkbox__label">
                            <a href="#" className="templatiq__modal__plugin__link">Directorist</a>
                        </label>
                    </div>
                </div>
                <p className="templatiq__modal__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p>
            </div>
            <div className="templatiq__modal__actions">
                <button className="templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary">Install and Proceed to Import</button>
                <button className="templatiq__modal__action templatiq__modal__action--cancel templatiq-btn">Cancel</button>
            </div>
            
            <button className="templatiq__modal__cancel__button" onClick={closeModal}>
                <ReactSVG src={ closeIcon } width={20} height={20} />
            </button>
        </RequiredPluginStyle>
    )
}

export default Popup;