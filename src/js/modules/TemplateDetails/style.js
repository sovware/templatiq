import Styled from 'styled-components';

const TemplateDetailsStyle = Styled.div`
    padding: 0 32px;
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
    }
    .templatiq__details__content__single__desc {
        margin: 0 0 15px;
        font-size: 16px;
        font-weight: 400;
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
        margin: 0 0 12px;
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
`;

const TemplateDetailsWidgetStyle = Styled.div`

`;


export { TemplateDetailsStyle, TemplateDetailsHeaderStyle, TemplateDetailsWidgetStyle };
