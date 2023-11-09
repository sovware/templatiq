import Styled from 'styled-components';

const TemplatePackStyle = Styled.div`
    .templatiq__content__tab {
        display: flex;
        gap: 24px;
        flex-direction: column;
    }
    
    .templatiq__content__top {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        .templatiq__content__top__filter__title {
            font-size: 16px;
            font-weight: 600;
            color: var(--templatiq-dark-color);
            margin: 0;
        }
        .templatiq__content__top__filter {
            display: flex;
            gap: 20px;
            align-items: center;
        }
    }

    .templatiq__content__tab-panel {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }

    .templatiq-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-top: 32px;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: var(--templatiq-white-color);
            border: 1px solid var(--templatiq-border-color);
            border-right: none;
            cursor: pointer;
            a {
                color: var(--templatiq-body-color);
                box-shadow: none;
            }
            &:first-child {
                border-radius: 8px 0 0 8px;
            }
            &:last-child {
                border-radius: 0 8px 8px 0;
                border-right: 1px solid var(--templatiq-border-color);
            }
            &.selected,
            &:hover {
                background: var(--templatiq-sec-color);
            }
            &.break,
            &.disabled {
                pointer-events: none;
            }
        }
    }
`;

const TemplatePackFilterStyle = Styled.div`
    .templatiq__content__top__filter__tablist {
        display: flex;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 8px;
        background-color: var(--templatiq-white-color);
        box-shadow: var(----templatiq-box-shadow);
    }
    .templatiq__content__top__filter__item {
        display: flex;
        &.react-tabs__tab--selected {
            a {
                color: var(--templatiq-white-color);
                background: var(--templatiq-primary-color);
            }
        }
    }
    .templatiq__content__top__filter__link {
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 7px 12px;
        border-radius: 8px;
        color: var(--templatiq-body-color);
        font-size: 12px;
        line-height: 1;
        text-transform: uppercase;
        background: transparent;
        transition: background 0.3s ease, color 0.3s ease;
        &:hover {
            color: var(--templatiq-white-color);
            background: var(--templatiq-primary-color);
        }
    }

`;


export { TemplatePackStyle, TemplatePackFilterStyle };
