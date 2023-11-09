import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    background: var(--templatiq-white-color);
    box-shadow: 0 2px 4px var(--templatiq-dark-color)04;
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
`;


export { HeaderStyle, HeaderNavStyle, HeaderActionStyle };
