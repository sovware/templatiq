import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import SignInContent from '@modules/SignIn/SignInContent';
import SignUpContent from '@modules/SignUp/SignUpContent';
import { AuthModalStyle } from './style';

import closeIcon from "@icon/close.svg";

const AuthModal = ({onClose}) => {
    const [signUpModal, openSignUpModal] = useState(false); 

    let closeAuthModal = () => {
        let templatiqRoot = document.querySelector(".templatiq");

        templatiqRoot && templatiqRoot.classList.remove("templatiq-overlay-enable");

        onClose();
    }

    let openAnotherModal = (e) => {
        e.preventDefault();
        openSignUpModal(!signUpModal);
    }

    return (
        <AuthModalStyle className="templatiq__modal">
            {
                !signUpModal ?

                <SignInContent /> :

                <SignUpContent />
            }
            <button className="templatiq__modal__cancel__button" onClick={closeAuthModal}>
                <ReactSVG src={ closeIcon } width={20} height={20} />
            </button>
            <div className="templatiq__modal__bottom">
            {!signUpModal ? 'Don\'t have an account?' : 'Already have an account?'} <a href="" className="templatiq__modal__another__btn" onClick={openAnotherModal}>{!signUpModal ? 'Sign up' : 'Sign in'}</a>
            </div>
        </AuthModalStyle>
    )
}

export default AuthModal;