import Styled from 'styled-components';

const SingleTemplateStyle = Styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: #ffffff;
    padding: 20px 20px 24px;
    border-radius: 16px;
    box-shadow: 0 4px 16px #10101404;
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
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    &:hover {
        .templatiq__template__single__overlay,
        .templatiq__template__single__info {
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
        color: #F17D0E;
        background: #101014;
        font-size: 13px;
        line-height: 20px;
        font-weight: 600;
        transition: background 0.3s ease;
        path {
            fill: #F17D0E;
        }
    }
    .templatiq__template__single__info__action {
        display: flex;
        gap: 8px;
        justify-content: center;
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
            color: #35353D;
            background-color: #ffffff;
            &.purchase-btn {
                color: #ffffff;
                background-color: #8941FF;
            }
        }
    }
    .templatiq__template__single__info__required {
        display: flex;
        gap: 8px;
        .templatiq__template__single__info__required__item {
            display: inline-flex;
            padding: 4px;
            border-radius: 8px;
            background-color: #ffffff;
        }
    }

    .templatiq__template__single__title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        color: #101014;
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
        color: #6B6B73;
        &:hover {
            color: #8941FF;
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
        color: #57575F;
        background: #F1F1F4;
        transition: background 0.3s ease;
        path {
            fill: #6B6B73;
        }
        &.pro-item {
            color: #8941FF;
            background-color: #F2ECFF;
        }
        &.free-item {
            color: #26A764;
            background-color: #E1F6EC;
        }
        &.favorite-btn {
            &:hover {
                color: #8941FF;
                background-color: #F2ECFF;
            }
        }
    }
`;



export { SingleTemplateStyle };
