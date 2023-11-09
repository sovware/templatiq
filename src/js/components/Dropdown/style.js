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
        color: var(--templatiq-body-color);
        font-size: 14px;
        font-weight: 500;
        background-color: var(--templatiq-sec-color);
        box-shadow: none;
        box-sizing: border-box;
        transition: background-color 0.3s ease;
        path {
            fill: var(--templatiq-body-color);
            transition: fill 0.3s ease;
        }
        &:hover {
            color: var(--templatiq-white-color);
            background-color: var(--templatiq-primary-color);
            path,
            ~ .templatiq-dropdown__toggle__icon path {
                fill: var(--templatiq-white-color);
            }
        }
    }

    .templatiq-dropdown__toggle__icon {
        position: absolute;
        inset-inline-end: 10px;
        top: 10px;
        path {
            fill: var(--templatiq-body-color);
            transition: fill 0.3s ease;
        }
    }

    .templatiq-dropdown__content {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        background: var(--templatiq-white-color);
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
        color: var(--templatiq-body-color);
        pointer-events: none;
        svg {
            min-width: 20px;
        }
    }
    .templatiq-dropdown__content__item {
        cursor: pointer;
        &:hover {
            .templatiq-dropdown__content__link {
                color: var(--templatiq-primary-color);
            }
        }
    }
`;


export { DropdownStyle };