import Styled from 'styled-components';

const SingleTemplateStyle = Styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: var(--templatiq-white-color);
    padding: 20px 20px 24px;
    border-radius: 16px;
    box-shadow: var(----templatiq-box-shadow);
    .templatiq__template__single__img {
        display: flex;
        position: relative;
        border-radius: 12px;
        img {
            width: 100%;
        }
    }

    .templatiq__template__single__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #00000020;
            border-radius: 12px;
        }
    }
    .templatiq__template__single__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 12px;
        box-sizing: border-box;
    }

    &:hover {
        .templatiq__template__single__overlay,
        .templatiq__template__single__info__action,
        .templatiq__template__single__info__required {
            opacity: 1;
            visibility: visible;
        }
    }

    .templatiq__template__single__info__meta__item {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        height: 32px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-pro-color);
        background: var(--templatiq-dark-color);
        font-size: 13px;
        line-height: 20px;
        font-weight: 600;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-pro-color);
        }
    }
    .templatiq__template__single__info__action {
        display: flex;
        gap: 8px;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        .templatiq__template__single__info__action__link {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            line-height: 20px;
            font-weight: 600;
            height: 36px;
            padding: 0 16px;
            border-radius: 8px;
            color: var(--templatiq-btn-color);
            background-color: var(--templatiq-white-color);
            &.purchase-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
            &.insert-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-success-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
        }
    }
    .templatiq__template__single__info__required {
        display: flex;
        gap: 8px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        .templatiq__template__single__info__required__item {
            position: relative;
            display: inline-flex;
            padding: 4px;
            border-radius: 8px;
            background-color: var(--templatiq-white-color);
        }
    }

    .templatiq__template__single__title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        color: var(--templatiq-dark-color);
        margin: 0 0 4px;
    }
    .templatiq__template__single__cat {
        display: flex;
        gap: 8px;
        margin: 0 0 16px;
    }
    .templatiq__template__single__cat__link {
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        color: var(--templatiq-gray-color);
        &:hover {
            color: var(--templatiq-primary-color);
        }
        &:not(:last-child) {
            position: relative;
            padding-inline-end: 12px;
            &:after {
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #D1D1D7;
                position: absolute;
                inset-inline-end: 0;
                top: 8px;
            }
        }
    }

    .templatiq__template__single__quickmeta {
        display: flex;
        gap: 6px;
    }
    .templatiq__template__single__quickmeta__item {
        display: flex;
        gap: 6px;
        align-items: center;
        height: 28px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-body-color);
        background: var(--templatiq-sec-color);
        box-shadow: none;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-gray-color);
        }
        &.pro-item {
            color: var(--templatiq-primary-color);
            background-color: #F2ECFF;
        }
        &.free-item {
            color: #26A764;
            background-color: #E1F6EC;
        }
        &.favorite-btn {
            &:hover {
                color: var(--templatiq-primary-color);
                background-color: #F2ECFF;
            }
        }
        &:before {
            min-width: 120px;
        }
    }
`;



export { SingleTemplateStyle };
