import Styled from 'styled-components';

const SidebarStyle = Styled.div`
    position: relative;
    width: 316px;
    min-height: 100vh;
    background: var(--templatiq-white-color);
    box-shadow: 0 7px 20px 5px var(--templatiq-dark-color)05;
    z-index: 1;
    .templatiq__sidebar__top {
        display: flex;
        gap: 5px 30px;
        justify-content: space-between;
        padding: 30px 20px 25px;
        border-bottom: 1px solid #EAECF0;
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
    flex-direction: column;
    
    .templatiq__sidebar__accordion {    
        display: flex;
        gap:20px;
        flex-direction: column;
    }
    .templatiq__sidebar__accordion__single {
        padding: 0 20px 20px;
        border-bottom: 1px solid #EAECF0;
        &:last-child {
            border-bottom: none;
        }
    }
    .templatiq__sidebar__accordion__item {
        text-align: left;
    }
    .templatiq__sidebar__accordion__heading {
        position: relative;
        width: 100%;
        padding: 0;
        margin: 0 0 20px;
        text-align: start;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: var(--templatiq-body-color);
        background: transparent;
        cursor: pointer;
        &[aria-expanded="true"] {
            margin: 0 0 20px;
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

