import Styled from 'styled-components';

const DashboardStyle = Styled.div`
    .templatiq__content__top {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        .templatiq__content__top__filter__title {
            font-size: 16px;
            font-weight: 600;
            color: var(--templatiq-dark-color);
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
    background-color: var(--templatiq-white-color);
    box-shadow: var(----templatiq-box-shadow);

`;


export { DashboardStyle, DashboardFilterStyle };
