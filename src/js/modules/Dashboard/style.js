import Styled from 'styled-components';
import chevronIcon from '@icon/chevron-down-solid.svg';

const DashboardStyle = Styled.div`
    .templatiq__content__top {
        display: flex;
        gap: 24px;
        margin: 0 0 8px;
        justify-content: space-between;
        .templatiq__content__top__filter__title {
            font-size: 16px;
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
        .templatiq__content__top__filter {
            display: flex;
            gap: 20px;
            align-items: center;
        }
    }
`;

const DashboardFilterStyle = Styled.ul`
    display: flex;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: var(--templatiq-white-color);
    box-shadow: var(----templatiq-box-shadow);
`;

const SidebarStyle = Styled.div`
    min-width: 256px;
    background: var(--templatiq-white-color);
    box-shadow: 0 7px 20px 5px var(--templatiq-dark-color)05;
    
    .templatiq__sidebar__nav {
        display: flex;
        flex-direction: column;
        height: 100vh;
        .templatiq__sidebar__nav__item {
            &.react-tabs__tab--selected {
                .templatiq__sidebar__nav__link {
                    color: var(--templatiq-primary-color);
                    background: var(--templatiq-primary-transparent);
                    &:before {
                        height: 100%;  
                        background: var(--templatiq-primary-color);
                    }
                }
            }
        }
        .templatiq__sidebar__nav__link {
            position: relative;
            display: flex;
            gap: 12px;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            height: 46px;
            background: transparent;
            padding-inline-start: 24px;
            color: var(--templatiq-body-color);
            box-shadow: none;
            text-decoration: none;
            transition: background 0.3s ease;
            path {
                fill: var(--templatiq-body-color);
                transition: fill 0.3s ease;
            }
            &:before {
                content: '';
                position: absolute;
                width: 2px;
                height: 0;
                top: 0;
                inset-inline-end: 0;
                transition: width 0.3s ease;
            }
            &:hover {
                color: var(--templatiq-primary-color);
                background: var(--templatiq-primary-transparent);
                path {
                    fill: var(--templatiq-primary-color);
                }
                &:before {
                    height: 100%;
                    background: var(--templatiq-primary-color);
                
                }
            }
        }
    }
`;

const SidebarItemStyle = Styled.div`
    display: flex;
    gap: 15px;
    padding: 0 24px;
    flex-direction: column;
    
    .templatiq__sidebar__accordion {    
        display: flex;
        gap: 25px;
        flex-direction: column;
    }
    .szh-accordion__item-heading {
        font-size: 14px;
        font-weight: 500;
    }
    .szh-accordion__item-btn {
        position: relative;
        width: 100%;
        padding: 0;
        text-align: start;
        background: transparent;
        cursor: pointer;
        &:before {
            content: '';
            position: absolute;
            inset-inline-end: 0;
            top: 2px;
            width: 14px;
            height: 14px;
            background: url(${chevronIcon}) no-repeat center center;
            background-size: 14px;
            transition: transform 0.3s ease;
        }
        &[aria-expanded="true"] {
            margin: 0 0 20px;
            &:before {
                transform: rotate(180deg);
            }
        }
    }
`;

const DashboardItemsStyle = Styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    .templatiq__content__dashboard__single,
    .templatiq__content__dashboard__header {
        display: flex;
        gap: 24px;
        justify-content: space-between;
    }
    .templatiq__content__dashboard__item__header {
        font-size: 11px;
        font-weight: 600;
        color: var(--templatiq-placeholder-color);
        text-transform: uppercase;
    }
    .templatiq__content__dashboard__item--insert {
        font-size: 0;
        opacity: 0;
    }
    .templatiq__content__dashboard__item__title {
        font-size: 14px;
        font-weight: 500;
        color: var(--templatiq-dark-color);
    }
    .templatiq__content__dashboard__item__text {
        font-size: 14px;
        font-weight: 400;
        color: var(--templatiq-gray-color);
    }
    .templatiq__content__dashboard__item {
        display: flex;
        gap: 12px;
        align-items: center;
        &:not(:last-child) {
            flex: 1;
        }
        &:first-child {
            padding-inline-start: 12px;
            flex: 0 0 40%;
        }
        &:last-child  {
            justify-content: flex-end;
            padding-inline-end: 20px;
        }
    }
    .templatiq__content__dashboard__items {
        display: flex;
        gap: 12px;
        flex-direction: column;
    }
    .templatiq__content__dashboard__item__img {
        width: 44px;
        height: 44px;
        border-radius: 8px;
    }

    .templatiq__content__dashboard__single {
        padding: 12px 0;
        border-radius: 8px;
        background-color: var(--templatiq-white-color);
    }
`;

const MyAccountStyle = Styled.div`
    .templatiq__dashboard__account__title {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 20px;
        text-align: center;
        color; var(--templatiq-dark-color);
    }
    .templatiq__dashboard__account__wrapper {
        max-width: 500px;
        margin: 0 auto;
        padding: 40px 32px;
        border-radius: 16px;
        background-color: var(--templatiq-white-color);
    }
    .templatiq__dashboard__account__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        margin: 0 auto;
        border-radius: 50%;
        box-sizing: border-box;
        background: var(--templatiq-primary-transparent2);
        border: 2px solid var(--templatiq-primary-color);
        ellipse,
        path {
            fill: var(--templatiq-white-color);
        }
    }
    .templatiq__dashboard__account__info {
        display: flex;
        gap: 28px;
        margin: 25px 0 20px;
        flex-direction: column;
    }
    .templatiq__dashboard__account__info__single {
        display: flex;
        gap: 8px;
        flex-direction: column;
        label {
            font-size: 15px;
            line-height: 24px;
            font-weight: 500;
        }
        input {
            height: 46px;
            padding: 0 20px;
            border: none;
            box-shadow: none;
            border-radius: 8px;
            background: var(--templatiq-sec-color);
        }
    }
    .templatiq__dashboard__account__actions {
        display: flex;
        gap: 20px;
        text-align: center;
        flex-direction: column;
        .templatiq__dashboard__account__link {
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
            box-shadow: none;
        }
        .templatiq__dashboard__account__btn {
            height: 54px;
            text-align: center;
            justify-content: center;
        }
    }
`;

export { DashboardStyle, DashboardFilterStyle, SidebarStyle, SidebarItemStyle, DashboardItemsStyle, MyAccountStyle };
