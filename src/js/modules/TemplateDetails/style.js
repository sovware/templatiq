import Styled from 'styled-components';

const TemplateDetailsStyle = Styled.div`
    padding: 0 32px 90px;
    .templatiq__details__wrapper {
        display: flex;
        gap: 32px;
    }
    .templatiq__details__img {
        img {
            width: 100%;
            border-radius: 16px;
        }
    }
    .templatiq__details__content {
        display: flex;
        gap: 32px;
        flex-direction: column;
    }
    .templatiq__details__content__single {
        display: flex;
        gap: 20px;
        flex-direction: column;
        padding: 32px;
        border-radius: 16px;
        background: var(--templatiq-white-color);
    }
    .templatiq__details__content__single__title {
        margin: 0;
        font-size: 21px;
        font-weight: 600;
        text-align: start;
        color: var(--templatiq-dark-color);
    }
    .templatiq__details__content__single__desc {
        margin: 0 0 15px;
        font-size: 16px;
        font-weight: 400;
        text-align: start;
        color: var(--templatiq-body-color);
        &:last-child {
            margin: 0;
        }
    }
    .templatiq__details__content__single__list {
        display: flex;
        gap: 13px;
        flex-wrap: wrap;
    }
    .templatiq__details__content__single__list__item {
        display: flex;
        gap: 12px;
        flex: 0 0 48%;
        align-items: center;
        font-size: 16px;
        line-height: 1.7;
        font-weight: 400;
        color: var(--templatiq-body-color);
    }

`;

const TemplateDetailsHeaderStyle = Styled.div`
    display: flex;
    gap: 30px;
    margin: 30px 0 20px;
    justify-content: space-between;
    .templatiq__details__header__title {
        font-size: 26px;
        font-weight: 600;
        line-height: 31px;
        margin: 0 0 12px;
        color: var(--templatiq-dark-color);
    }
    .templatiq__details__header__meta {
        display: flex;
        gap: 12px;
        align-items: center;
    }
    .templatiq__details__header__meta__item {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        color: var(--templatiq-gray-color);
        path {
            fill: var(--templatiq-gray-color);
        }
        &:not(:last-child) {
            position: relative;
            padding-inline-end: 12px;
            &:after {
                content: '';
                position: absolute;
                inset-inline-end: 0;
                top: 0;
                width: 1px;
                height: 100%;
                background: var(--templatiq-gray-color2);
            }
        }
    }
    .templatiq__details__header__action {
        display: flex;
        gap: 12px;
        align-items: center;
    }
    .templatiq__details__header__action__link {
        height: 40px;
        box-shadow: var(--templatiq-box-shadow);
        &.live-demo-btn {
          padding: 0 20px;  
        }
        &.purchase-btn,
        &.insert-btn {
          padding: 0 25px;  
        }
        &.templatiq-badge {
            height: 32px;
        }
        &.add-to-favorite {
            &.active {
                background: var(--templatiq-primary-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
        }
    }
`;

const TemplateDetailsWidgetStyle = Styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    .templatiq__details__widget__single {
        min-width: 280px;
        border-radius: 16px;
        background: var(--templatiq-white-color);
    }
    .templatiq__details__widget__subscribe {
        display: flex;
        gap: 16px;
        flex-direction: column;
        justify-content: center;
        padding: 20px 24px 24px;
    }
    .templatiq__details__widget__subscribe__info {
        padding: 18px 12px 16px;
        border-radius: 10px;
        background: var(--templatiq-warning-color2);
    }
    .templatiq__details__widget__subscribe__title {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 10px;
        color: var(--templatiq-pro-color2);
    }
    .templatiq__details__widget__subscribe__desc {
        font-size: 14px;
        font-weight: 600;
        color: var(--templatiq-btn-color);
        strong {
            color: var(--templatiq-pro-color2);
        }
    }
    .templatiq__details__widget__subscribe__btn__link {
        width: 100%;
        justify-content: center;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .templatiq__details__widget__header {
        padding: 24px 24px 20px;
        border-bottom: 1px solid var(--templatiq-sec-color);
    }
    .templatiq__details__widget__title {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        color: var(--templatiq-dark-color);
    }
    .templatiq__details__widget__content {
        display: flex;
        gap: 20px;
        flex-direction: column;
        padding: 16px 24px 32px;
    }
    .templatiq__details__widget__content__single {
        display: flex;
        gap: 2px;
        flex-direction: column;
        &.required-plugins {
            gap: 12px;
        }
    }
    .templatiq__details__widget__content__title {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: start;
        text-transform: capitalize;
        color: var(--templatiq-gray-color);
    }
    .templatiq__details__widget__content__info {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        text-align: start;
        text-transform: capitalize;
        color: var(--templatiq-dark-color);
    }
    .templatiq__details__widget__content__required-plugins {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    }
    .templatiq__details__widget__content__required-plugins__link {
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        &.loading {
            background: var(--templatiq-primary-100);
        }   
    }
`;

export {
    TemplateDetailsHeaderStyle, TemplateDetailsStyle, TemplateDetailsWidgetStyle
};

