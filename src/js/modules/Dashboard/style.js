import Styled from 'styled-components';

const DashboardStyle = Styled.div`
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

const DashboardFilterStyle = Styled.ul`
    display: flex;
    padding: 4px 10px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 16px #10101404;

`;


export { DashboardStyle, DashboardFilterStyle };
