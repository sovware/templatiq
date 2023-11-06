import Styled from 'styled-components';

const SidebarStyle = Styled.div`
    width: 256px;
    background: #ffffff;
    box-shadow: 0 7px 20px 5px #10101405;
    .templatiq__sidebar__filter {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        padding: 10px 24px;
        background: #F8F8F9;
        .templatiq__sidebar__filter__title {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: #57575F;
            margin: 0;
            path {
                fill: #57575F;
            }
        }
        .templatiq__sidebar__filter__clear {
            color: #8941FF;
        }
    }

    .templatiq__sidebar__wrapper {
        padding-bottom: 30px
    }
    
    .templatiq__sidebar__nav {
        display: flex;
        gap: 24px;
        padding: 0 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid #F1F1F4;
        .templatiq__sidebar__nav__link {
            position: relative;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: #57575F;
            height: 50px;
            text-decoration: none;
            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                height: 2px;
                width: 0;
                background: transparent;
                transition: width 0.3s ease;
            }
            &.active,
            &:hover {
                color: #8941FF;
                &:before {
                    width: 100%;
                    background: #8941FF;
                }
            }
        }
    }
`;

const SidebarCollapseStyle = Styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 0 24px;
    .templatiq__sidebar__collapse__title {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 15px;
    }
    .templatiq__sidebar__collapse__item {
        display: flex;
        gap: 15px;
        flex-direction: column;
        .templatiq__sidebar__collapse__item__single {
            display: flex;
            gap: 12px;
            .templatiq__sidebar__collapse__item__single__checkbox {
                margin: 3px 0 0;
            }
            .templatiq__sidebar__collapse__item__single__label {
                font-size: 13px;
                font-weight: 500;
            }
            .templatiq__sidebar__collapse__item__single__count {
                flex: 1;
                text-align: end;
            }
        }
    }
`;



export { SidebarStyle, SidebarCollapseStyle };
