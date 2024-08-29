import Styled from 'styled-components';

const DropdownStyle = Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    .templatiq-dropdown__toggle {
        display: flex;
        gap: 10px;
        align-items: center;
        height: 38px;
        min-width: 200px;
        padding: 0 30px 0 12px;
        border-radius: 8px;
        color: var(--templatiq-body-color);
        font-size: 14px;
        font-weight: 500;
        background-color: var(--templatiq-sec-color);
        border: 1px solid var(--templatiq-sec-color);
        box-shadow: none;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
        path {
            fill: var(--templatiq-body-color);
            transition: fill 0.3s ease;
        }
        &:hover {
            border-color: var(--templatiq-primary-color);
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
        position: relative;
        display: flex;
        align-items: center;
        padding: 5px 15px;
        color: var(--templatiq-body-color);
        pointer-events: none;
        img {
            width: 24px;
            height: 24px;
            margin-inline-end: 10px;
        }
        sup {
            position: absolute;
            top: 0;
            inset-inline-start: 48px;
            font-size: 8px;
            color: var(--templatiq-danger-color);
        }
    }
    .templatiq-dropdown__content__item {
        cursor: pointer;
        &:hover {
            .templatiq-dropdown__content__link {
                color: var(--templatiq-primary-color);
            }
        }
        &.disable {
            opacity: 0.5;
            pointer-events: none;
            .templatiq-dropdown__content__link {
                align-items: baseline;
            }
        }
    }
`;

export { DropdownStyle };
