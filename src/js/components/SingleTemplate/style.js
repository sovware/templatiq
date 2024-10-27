import Styled from 'styled-components';

const SingleTemplateStyle = Styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: var(--templatiq-white-color);
    padding: 8px;
    border-radius: 20px;
    box-shadow: var(--templatiq-box-shadow);
    .templatiq__template__single__img {
        display: flex;
        position: relative;
        min-height: 212px;
        background: var(--templatiq-primary-100);
        padding: 20px 20px 0;
        border-radius: 16px;
        img {
            width: 100%;
            object-fit: cover;
            border-radius: 12px 12px 0 0;
        }
    }
    
    .templatiq__template__single__content {
        padding: 0 12px 16px;
    }

    .templatiq__template__single__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #00000070;
            border-radius: 16px;
        }
    }
    .templatiq__template__single__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 16px;
        box-sizing: border-box;
    }

    &:hover {
        .templatiq__template__single__overlay,
        .templatiq__template__single__info__action,
        .templatiq__template__single__info__required {
            opacity: 1;
            visibility: visible;
        }
    }

    .templatiq__template__single__info__meta {
        display: flex;
        gap: 10px;
    }

    .templatiq__template__single__info__meta__item {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        height: 32px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-pro-color);
        background: var(--templatiq-dark-color);
        font-size: 13px;
        line-height: 20px;
        font-weight: 600;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-pro-color);
        }
        &.unlocked-item {
            color: #ffffff;
            background-color: #26A764;
        }
        &.purchased-item {
            color: #ffffff;
            background-color: #26A764;
        }
    }
    .templatiq__template__single__info__action {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: center;
        visibility: hidden;
        transition: visibility 0.3s ease;
        .templatiq__template__single__info__action__link {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            line-height: 20px;
            font-weight: 600;
            height: 36px;
            padding: 0 16px;
            border-radius: 8px;
            box-shadow: none;
            cursor: pointer;
            color: var(--templatiq-btn-color);
            background-color: var(--templatiq-white-color);
            &.purchase-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
            &.insert-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-success-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
        }
    }
    .templatiq__template__single__info__required {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        .templatiq__template__single__info__required__item {
            position: relative;
            display: inline-flex;
            padding: 4px;
            border-radius: 8px;
            background-color: var(--templatiq-white-color);
            white-space: nowrap;
            &.loading {
                background: var(--templatiq-primary-100);
            }
        }
    }

    .templatiq__template__single__title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        margin: 0 0 4px;
        text-align: start;
        a {
            color: var(--templatiq-dark-color);
            &:hover {
                color: var(--templatiq-primary-color);
            }
        }
    }
    .templatiq__template__single__cat {
        display: flex;
        gap: 8px;
        margin: 0 0 16px;
    }
    .templatiq__template__single__cat__link {
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        color: var(--templatiq-gray-color);
        &:hover {
            color: var(--templatiq-primary-color);
        }
        &:not(:last-of-type) {
            position: relative;
            padding-inline-end: 12px;
            &:after {
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #D1D1D7;
                position: absolute;
                inset-inline-end: 0;
                top: 9px;
            }
        }
    }

    .templatiq__template__single__cat__dropdown {
        position: relative;
        .templatiq__template__single__cat__link::after {
            display: none;
        }
    }
    .templatiq__template__single__cat__button {
        padding: 0;
        line-height: 1;
        cursor: pointer;
        background: transparent;
    }
    .templatiq__template__single__cat__dropdown-content {
        position: absolute;
        bottom: 100%;
        right: 0;
        padding: 10px 15px;
        background: var(--templatiq-white-color);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        min-width: 120px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    .templatiq__template__single__quickmeta-wrapper {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-between;
        .templatiq-btn {
            height: 40px;
            padding: 0 14px;
            font-size: 14px;
            font-weight: 600;
            border-radius: 10px;
            color: var(--templatiq-primary-color);
            background-color: var(--templatiq-primary-100);
            &:hover {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
            }
            &.templatiq__loading--btn {
                &:after {
                    top: 10px;
                }
            }
        }
    }
    .templatiq__template__single__quickmeta {
        display: flex;
        gap: 6px;
        align-items: center;
    }
    .templatiq__template__single__quickmeta__item {
        display: flex;
        gap: 6px;
        width: 65px;
        justify-content: center; 
        align-items: center;
        height: 28px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-body-color);
        background: var(--templatiq-sec-color);
        box-shadow: none;
        box-sizing: border-box; 
        transition: background 0.3s ease;
        svg {
            min-width: 14px;
        }
        path {
            fill: var(--templatiq-gray-color);
        }
        &.pro-item {
            color: var(--templatiq-primary-color);
            background-color: #F2ECFF;
        }
        &.unlocked-item {
            color: #ffffff;
            background-color: #26A764;
        }
        &.free-item {
            color: #26A764;
            background-color: #E1F6EC;
        }
        &.favorite-btn {
            width: auto;
            &:hover {
                background-color: #F2ECFF;
                path {
                    fill: var(--templatiq-primary-color);
                }
            }
            &.active {
                path {
                    fill: var(--templatiq-danger-color);
                }
            }
        }
        &.disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    .templatiq-tooltip {
        position: relative;
        &:before {
            content: attr(data-info);
            position: absolute;
            top: -45px;
            left: 50%;
            transform: translateX(-50%);
            min-width: max-content;
            text-align: center;
            color: var(--templatiq-white-color);
            font-size: 13px;
            font-weight: 600;
            padding: 8px 12px;
            border-radius: 8px;
            background-color: var(--templatiq-dark-color);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        &:after {
            content: '';
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-top: 10px solid var(--templatiq-dark-color);
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        &:hover {
            &:before,
            &:after {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    &.background-1 {
        .templatiq__template__single__img {
            background: #D444F120;
        }
    }
    &.background-2 {
        .templatiq__template__single__img {
            background: #6C3AF820;
        }
    }
    &.background-3 {
        .templatiq__template__single__img {
            background: #00A96320;
        }
    }
    &.background-4 {
        .templatiq__template__single__img {
            background: #009AE520;
        }
    }
    &.background-5 {
        .templatiq__template__single__img {
            background: #FF9E2F20;
        }
    }
    &.background-6 {
        .templatiq__template__single__img {
            background: #FB3D3820;
        }
    }
`;

export { SingleTemplateStyle };
