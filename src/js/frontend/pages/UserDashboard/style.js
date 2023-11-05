import Styled from 'styled-components';

const LoginWrapper = Styled.div`
    width: 500px;
    margin: 30px auto;
    padding: 107px 50px 115px;
    background: #fff;
    border-radius: 20px;
    .template-market-login-title{
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--template-market-color-dark);
    }
    .template-market-login-subtitle{
        font-size: 15px;
        color: var(--template-market-color-light-gray);
        margin-bottom: 35px;
        display: block;
    }
    .template-market-form-group{
        margin-bottom: 0;
        .template-market-form-group__label{
            color: var(--template-market-color-gray);
        }
        .template-market-btn{
            margin-top: 25px;
            svg path{
                fill: #fff;
                transition: var(--template-market-transition);
            }
            &:hover{
                svg path{
                    fill: var(--template-market-color-primary);
                }
            }
        }
    }
    .template-market-user-dashboard__actions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding: 20px 30px 0;
        .template-market-user-status{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--template-market-color-gray);
            font-size: 14px;
            font-weight: 500;
        }
        .template-market-btn{
            svg path{
                fill: #fff;
                transition: var(--template-market-transition);
            }
            &:hover{
                svg path{
                    fill: var(--template-market-color-dark);
                }
            }
        }
    }

    .template-market-success-message{
        background: rgba(40,168, 0, 0.15);
        padding: 15px 12px;
        font-size: 14px;
        font-weight: 500;
        color: var(--template-market-color-gray);
        border-radius: 6px;
        span{
            display: block;
        }
    }

`;

const DashboardWrapper = Styled.div`
    .template-market-user-dashboard__contents{
        transition: var(--template-market-transition);
    }
    /* .template-market-user-dashboard__contents--loading{
        opacity: 0;
        visibility: hidden;
    } */
    .template-market-user-dashboard__actions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding: 20px 30px 0;
        .template-market-user-status{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--template-market-color-gray);
            font-size: 14px;
            font-weight: 500;
        }
        .template-market-btn{
            svg path{
                fill: #fff;
                transition: var(--template-market-transition);
            }
            &:hover{
                svg path{
                    fill: var(--template-market-color-gray);
                }
            }
        }
    }
`;

export { LoginWrapper, DashboardWrapper };
