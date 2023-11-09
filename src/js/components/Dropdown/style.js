import Styled from 'styled-components';

const DropdownStyle = Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    .templatiq-dropdown__toggle {
        display: flex;
        gap: 10px;
        align-items: center;
        height: 36px;
        min-width: 150px;
        padding: 0 12px;
        border-radius: 8px;
        color: #57575F;
        font-size: 14px;
        font-weight: 500;
        background-color: #F1F1F4;
        box-shadow: none;
        box-sizing: border-box;
        transition: background-color 0.3s ease;
        path {
            fill: #57575F;
            transition: fill 0.3s ease;
        }
        &:hover {
            color: #ffffff;
            background-color: #8941FF;
            path,
            ~ .templatiq-dropdown__toggle__icon path {
                fill: #ffffff;
            }
        }
    }

    .templatiq-dropdown__toggle__icon {
        position: absolute;
        inset-inline-end: 10px;
        top: 10px;
        path {
            fill: #57575F;
            transition: fill 0.3s ease;
        }
    }

    .templatiq-dropdown__content {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        background: #fff;
        padding: 10px 0;
        border-radius: 8px;
        z-index: 1;
        &.templatiq-dropdown__content--open {
            display: block;
        }
    }
    .templatiq-dropdown__content__link {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 15px;
        color: #57575F;
        pointer-events: none;
        svg {
            min-width: 20px;
        }
    }
    .templatiq-dropdown__content__item {
        cursor: pointer;
        &:hover {
            .templatiq-dropdown__content__link {
                color: #8941FF;
            }
        }
    }
`;


export { DropdownStyle };
