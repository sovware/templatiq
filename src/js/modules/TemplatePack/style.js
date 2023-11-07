import Styled from 'styled-components';

const TemplatePackStyle = Styled.div`
    .templatiq__content__top {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        .templatiq__content__top__filter__title {
            font-size: 16px;
            font-weight: 600;
            color: #101014;
        }
        .templatiq__content__top__filter {
            display: flex;
            gap: 20px;
            align-items: center;
        }
    }
`;

const TemplatePackFilterStyle = Styled.ul`
    display: flex;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 16px #10101404;
    .templatiq__content__top__filter__item {
        display: flex;
    }
    .templatiq__content__top__filter__link {
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 7px 12px;
        border-radius: 8px;
        color: #57575F;
        font-size: 12px;
        line-height: 1;
        text-transform: uppercase;
        background: transparent;
        transition: background 0.3s ease, color 0.3s ease;
        &.active,
        &:hover {
            color: #ffffff;
            background: #8941FF;
        }
    }

`;


export { TemplatePackStyle, TemplatePackFilterStyle };
