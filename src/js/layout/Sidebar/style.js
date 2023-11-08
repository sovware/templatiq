import Styled from 'styled-components';
import chevronIcon from '@icon/chevron-down-solid.svg';
import checkIcon from '@icon/check.svg';

const SidebarStyle = Styled.div`
    width: 256px;
    background: #ffffff;
    box-shadow: 0 7px 20px 5px #10101405;
    .templatiq__sidebar__top {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        padding: 10px 24px;
        background: #F8F8F9;
        .templatiq__sidebar__top__title {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 14px;
            font-weight: 600;
            color: #6B6B73;
            margin: 0;
            path {
                fill: #6B6B73;
            }
        }
        .templatiq__sidebar__top__clear {
            font-size: 13px;
            font-weight: 500;
            color: #8941FF;
            box-shadow: none;
        }
    }

    .templatiq__sidebar__wrapper {
        padding-bottom: 30px
    }
    
    .templatiq__sidebar__nav {
        display: flex;
        gap: 24px;
        padding: 0 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid #F1F1F4;
        .templatiq__sidebar__nav__item {
            &.react-tabs__tab--selected {
                .templatiq__sidebar__nav__link {
                    color: #8941FF;
                    &:before {
                        width: 100%;
                        background: #8941FF;
                    }
                }
            }
        }
        .templatiq__sidebar__nav__link {
            position: relative;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: #57575F;
            height: 50px;
            text-decoration: none;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                height: 2px;
                width: 0;
                background: transparent;
                transition: width 0.3s ease;
            }
            &:hover {
                color: #8941FF;
                &:before {
                    width: 100%;
                    background: #8941FF;
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
    .templatiq__sidebar__filter__single {
        display: flex;
        gap: 12px;
        .templatiq__sidebar__filter__single__checkbox {
            display: none;
            &:checked {
              ~ .templatiq__sidebar__filter__single__label {
                    &:before {
                        background: #8941FF;
                        border-color: #8941FF;
                    }
                    &:after {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
        .templatiq__sidebar__filter__single__label {
            width: 100%;
            font-size: 13px;
            font-weight: 500;
            position: relative;
            padding-inline-start: 33px;
            &:before {
                content: '';
                position: absolute;
                inset-inline-start: 0;
                top: -2px;
                width: 18px;
                height: 18px;
                border-radius: 4px;
                background: #ffffff;
                border: 2px solid #D1D1D9;
            }
            &:after {
                content: '';
                position: absolute;
                inset-inline-start: 2px;
                top: 0;
                width: 18px;
                height: 18px;
                background: url(${checkIcon}) no-repeat center center;
                background-size: 12px;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }
        }
        .templatiq__sidebar__filter__single__count {
            flex: 1;
            text-align: end;
        }

        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
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



export { SidebarStyle, SidebarItemStyle };
