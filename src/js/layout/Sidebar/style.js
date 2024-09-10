import chevronIcon from '@icon/chevron-down-solid.svg';
import Styled from 'styled-components';

const SidebarStyle = Styled.div`
    width: 316px;
    min-height: 100vh;
    background: var(--templatiq-white-color);
    box-shadow: 0 7px 20px 5px var(--templatiq-dark-color)05;
    .templatiq__sidebar__top {
        display: flex;
        gap: 5px 30px;
        justify-content: space-between;
        padding: 30px 40px 25px;
        border-bottom: 1px solid var(--templatiq-section-color2);
        .templatiq__sidebar__top__title {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 16px;
            font-weight: 700;
            color: var(--templatiq-gray-color);
            margin: 0;
            path {
                fill: var(--templatiq-gray-color);
            }
        }
        .templatiq__sidebar__top__clear {
            font-size: 16px;
            font-weight: 600;
            background: transparent;
            color: var(--templatiq-gray-color);
            box-shadow: none;
            cursor: pointer;
            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }

    .templatiq__sidebar__wrapper {
        padding: 30px 0;
    }
    

`;

const SidebarItemStyle = Styled.div`
    display: flex;
    gap: 15px;
    padding: 0 40px;
    flex-direction: column;
    
    .templatiq__sidebar__accordion {    
        display: flex;
        gap:32px;
        flex-direction: column;
    }
    .templatiq__sidebar__accordion__item {
        text-align: left;
    }
    .szh-accordion__item-btn {
        position: relative;
        width: 100%;
        padding: 0;
        text-align: start;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: var(--templatiq-body-color);
        background: transparent;
        cursor: pointer;
        &:before {
            content: '';
            position: absolute;
            inset-inline-end: 0;
            top: 2px;
            width: 12px;
            height: 12px;
            background: url(${ chevronIcon }) no-repeat center center;
            background-size: 12px;
            opacity: 0.5;
            transition: transform 0.3s ease;
        }
        &[aria-expanded="true"] {
            margin: 0 0 20px;
            &:before {
                transform: rotate(180deg);
            }
        }
    }

    .more {
        background: transparent;
        color: var(--templatiq-primary-color);
        text-transform: capitalize;
        position: relative;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 13px;
        font-weight: 500;
        padding: 0 20px 0 0;
    }
`;

const AdminSidebarStyle = Styled.div`
    min-width: 316px;
    background: var(--templatiq-white-color);
    box-shadow: 0 7px 20px 5px var(--templatiq-dark-color)05;
    
    .templatiq__sidebar__nav {
        display: flex;
        flex-direction: column;
        height: 100vh;
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
            &.active,
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

export { AdminSidebarStyle, SidebarItemStyle, SidebarStyle };

