import Styled from 'styled-components';

const PopupStyle = Styled.div`
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    padding: 26px 32px 32px;
    background-color: var(--templatiq-white-color);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    .templatiq__modal__title {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 20px;
        text-align: start;
        color: var(--templatiq-black-color);
    }
    .templatiq__modal__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        margin: 0;
        color: var(--templatiq-body-color);
        strong {
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
    }
    .templatiq__modal__plugins {
        margin: 20px 0;
        .install_status {
            &.installed {
                color: var(--templatiq-success-color);
            }
        }
        a {
            position: relative;
            top: -2px;
            font-size: 15px;
            line-height: 20px;
            font-weight: 600;
            color: var(--templatiq-primary-color);
            z-index: -1;
        }
    }
    .templatiq__modal__page {
        display: flex;
        align-items: center;
        gap: 15px;
        .templatiq__modal__page__title {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            border: 1px solid #9f9f9f;
        }
    }
    .templatiq__modal__actions {
        display: flex;
        gap: 12px;
        margin: 20px 0 0;
    }
    .templatiq__modal__action {
        height: 40px;
        padding: 0 20px;
    }
    .templatiq__modal__cancel__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        inset-inline-end: 20px;
        cursor: pointer;
        background-color: var(--templatiq-sec-color);
        transition: background-color 0.3s ease;
        path {
            fill: var(--templatiq-dark-color);
            transition: fill 0.3s ease;
        }
        &:hover {
            background-color: var(--templatiq-primary-color);
            path {
                fill: var(--templatiq-white-color);
            }
        }
    }
`;

const InsertTemplateModalStyle = Styled.div`
    .templatiq__modal__title {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 20px;
        color: var(--templatiq-black-color);
    }
    .templatiq__modal__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        margin: 0;
        color: var(--templatiq-body-color);
        strong {
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
    }
    .templatiq__modal__plugins {
        margin: 20px 0;
        .install_status {
            &.installed {
                color: var(--templatiq-success-color);
            }
        }
        a {
            position: relative;
            top: -2px;
            font-size: 15px;
            line-height: 20px;
            font-weight: 600;
            color: var(--templatiq-primary-color);
            z-index: -1;
        }
    }
    .templatiq__modal__page {
        display: flex;
        align-items: center;
        gap: 15px;
        .templatiq__modal__page__title {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            border: 1px solid #9f9f9f;
        }
    }
    .templatiq__modal__actions {
        display: flex;
        gap: 12px;
        margin: 20px 0 0;
    }
    .templatiq__modal__action {
        height: 40px;
        padding: 0 20px;
    }
`;

const AuthModalStyle = Styled.div`
    width: 500px;
    .templatiq__auth {
        height: auto;
        padding: 0;
    }
    .templatiq__auth__wrapper {
        width: auto;
        padding: 0;
        margin: 0;
    }
    .templatiq__auth__actions {
        .templatiq__auth__desc {
            display: none;
        }
    }

    .templatiq__modal__bottom {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        text-align: center;
        margin-top: 20px;
        color: var(--templatiq-body-color);
        a {
            color: var(--templatiq-primary-color);
        }
    }
`;



export { PopupStyle, InsertTemplateModalStyle, AuthModalStyle };
