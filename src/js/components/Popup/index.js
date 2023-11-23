import ReactSVG from 'react-inlinesvg';
import { PopupStyle } from './style';

import closeIcon from "@icon/close.svg";

const Popup = (props) => {

    let closeModal = () => {
        let templatiqRoot = document.querySelector(".templatiq");
        let templatiqModalOpen = document.querySelector(".body.modal-open");

        templatiqRoot && templatiqRoot.classList.remove("templatiq-overlay-enable");
        templatiqModalOpen && templatiqModalOpen.classList.remove("modal-open");
    }

    const handlePopUpForm = async (e) => {
        e.preventDefault();
    
        console.log('Form submitted');
    };

    return (
        <PopupStyle className="templatiq__modal">
            <form className="templatiq__modal__form" onSubmit={handlePopUpForm}>
                <div className="templatiq__modal__content">
                    <div className="">
                        <h2 className="templatiq__modal__title">Required Plugins</h2>
                        <p className="templatiq__modal__desc">To import this item you need to install all the Plugin listed below.</p>
                        <p className="templatiq__modal__desc"><strong>Note:</strong> Make sure you have manually installed & activated the Pro Plugin listed above.</p>
                    </div> 
                </div>

            </form>
            
            <button className="templatiq__modal__cancel__button" onClick={closeModal}>
                <ReactSVG src={ closeIcon } width={20} height={20} />
            </button>
        </PopupStyle>
    )
}

export default Popup;