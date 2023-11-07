import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 2px 4px #10101404;
    .templatiq__header__logo {
        flex: 0 0 256px;
        max-width: 256px;
        margin-inline-start: 24px;
        img {
            max-width: 100%;
        }
    }
    .templatiq__header__content {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        margin-inline-end: 32px;
        justify-content: space-between;
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
        color: #57575F;
        text-decoration: none;
        path {
            fill: #57575F;
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
            color: #8941FF;
            path {
                fill: #8941FF;
            }
            &:before {
                width: 100%;
                background: #8941FF;
            }
        }
    }
`;
const HeaderActionStyle = Styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    .templatiq__header__action__link {
        display: flex;
        gap: 10px;
        align-items: center;
        height: 36px;
        padding: 0 12px;
        border-radius: 8px;
        color: #57575F;
        font-size: 14px;
        font-weight: 500;
        background-color: #F1F1F4;
        transition: background-color 0.3s ease;
        path {
            fill: #57575F;
            transition: fill 0.3s ease;
        }
        &:hover {
            color: #ffffff;
            background-color: #8941FF;
            path {
                fill: #ffffff;
            }
        }
    }
`;


export { HeaderStyle, HeaderNavStyle, HeaderActionStyle };
