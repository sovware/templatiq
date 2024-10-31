import Styled from 'styled-components';

import chevronIcon from '@icon/chevron-down-solid.svg';

const HeaderStyle = Styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    background: var(--templatiq-white-color);
    box-shadow: 0 2px 4px rgba(0,0,0,.04);
    z-index: 1;
    .templatiq__header__logo {
        flex: 0 0 324px;
        max-width: 324px;
        text-align: start;
        margin-inline-start: 20px;
        img {
            max-width: 100%;
        }
        sub {
            position: relative;
            top: -5px;
            left: 5px;
        }
    }
    .templatiq__header__content {
        flex: 1 1 auto;
        display: flex;
        gap: 32px;
        align-items: center;
        margin-inline-end: 32px;
        justify-content: space-between;
        .templatiq__header__content__left {
            display: flex;
            gap: 14px 32px;
            width: 100%;
            flex: 1;
            @media screen and (max-width: 1199px) {
                gap: 14px;
            }
        }
        .templatiq__header__action__builder {
            display: flex;
            gap: 10px;
            align-items: center;
            height: 38px;
            padding: 0 30px 0 12px;
            border-radius: 8px;
            color: var(--templatiq-body-color);
            font-size: 14px;
            font-weight: 500;
            background-color: var(--templatiq-sec-color);
            border: 1px solid var(--templatiq-sec-color);
            box-sizing: border-box;
            transition: border-color 0.3s ease;
            .templatiq__header__action__icon {
                display: flex;
            }
        }   
    }
    .templatiq__header__details {
        display: flex;
        gap: 22px;
        align-items: center;
        margin-inline-start: 24px;
        padding-inline-end: 48px;
        a,
        .templatiq__header__details__logo {
            max-height: 30px;
            img {
                width: 30px;
                heighth: 30px;
            }
        }
    }
    .templatiq__header__details__return {
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        background: transparent;
        cursor: pointer;
        color: var(--templatiq-body-color);
        path {
            fill: var(--templatiq-body-color);
        }
        &.templatiq-btn-cloud {
            padding: 0 16px;
            font-weight: 500;
            color: var(--templatiq-body-color);
            background-color: var(--templatiq-sec-color);
            path {
                fill: var(--templatiq-body-color);
            }
            &:hover {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
        }
    }

    &.templatiq__header--cloud {
        height: auto;
        padding: 20px 32px;
        border-radius: 16px;
        background-color: var(--templatiq-white-color);
        .templatiq__header__content {
            margin: 0;
        }
    }
    
    &.templatiq__header--cloud-details {
        height: auto;
        background: transparent;
        box-shadow: none;
        .templatiq__header__details {
            margin: 0;
        }
    }
`;
const HeaderNavStyle = Styled.ul`
    display: flex;
    gap: 24px;
    align-items: center;
    margin: 0;
    .templatiq__header__item {
        margin: 0;
    }
    .templatiq__header__link {
        display: flex;
        gap: 8px;
        align-items: center;
        position: relative;
        font-size: 14px;
        font-weight: 500;
        height: 70px;
        color: var(--templatiq-body-color);
        text-decoration: none;
        path {
            fill: var(--templatiq-body-color);
            transition: fill 0.3s ease;
        }
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            height: 2px;
            width: 0;
            background: transparent;
            transition: width 0.3s ease;
        }
        &:hover,
        &.active {
            color: var(--templatiq-primary-color);
            path {
                fill: var(--templatiq-primary-color);
            }
            &:before {
                width: 100%;
                background: var(--templatiq-primary-color);
            }
        }
    }
`;
const HeaderActionStyle = Styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    .templatiq__header__action__author {
        position: relative;
        display: flex;
        gap: 8px;
        align-items: center;
        padding-inline-end: 24px;
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        box-shadow: none;
        color: var(--templatiq-dark-color);
        img {
            max-width: 32px;
        }
        &:after {
            content: url(${ chevronIcon });
            position: absolute;
            inset-inline-end: 0;
            top: 50%;
            transform: translateY(-50%);
            line-height: 1;
            color: var(--templatiq-light-color);
        }
    }
    .templatiq__header__author__wrapper {
        position: relative;
    }
    .templatiq__header__author__info {
        position: absolute;
        top: 100%;
        inset-inline-end: 0;
        min-width: 250px;
        padding: 12px 8px;
        border-radius: 8px;
        box-sizing: border-box;
        z-index: 1;
        background: var(--templatiq-white-color);
        box-shadow: 0 15px 40px -5px var(--templatiq-dark-color)1;
    }
    .templatiq__header__author__info__link {
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
        border-radius: 8px;
        text-decoration: none;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-body-color);
            transition: fill 0.3s ease;
        }
        &.active,
        &:hover {
            color: var(--templatiq-primary-color);
            background: var(--templatiq-primary-transparent);
            path {
                fill: var(--templatiq-primary-color);
            }
        }
    }
    .templatiq__header__author__info__item--logout {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid var(--templatiq-sec-color);
    }
    .templatiq__logout {
        width: 100%;
        cursor: pointer;
    }
`;

export { HeaderActionStyle, HeaderNavStyle, HeaderStyle };

