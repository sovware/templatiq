import Styled from 'styled-components';

const LoginWrapper = Styled.div`
    width: 500px;
    margin: 30px auto;
    padding: 107px 50px 115px;
    background: #fff;
    border-radius: 20px;
    .helpgent-login-title{
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-login-subtitle{
        font-size: 15px;
        color: var(--helpgent-color-light-gray);
        margin-bottom: 35px;
        display: block;
    }
    .helpgent-form-group{
        margin-bottom: 0;
        .helpgent-form-group__label{
            color: var(--helpgent-color-gray);
        }
        .helpgent-btn{
            margin-top: 25px;
            svg path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-user-dashboard__actions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding: 20px 30px 0;
        .helpgent-user-status{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--helpgent-color-gray);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-btn{
            svg path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-dark);
                }
            }
        }
    }

    .helpgent-success-message{
        background: rgba(40,168, 0, 0.15);
        padding: 15px 12px;
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-gray);
        border-radius: 6px;
        span{
            display: block;
        }
    }

`;

const DashboardWrapper = Styled.div`
    .helpgent-user-dashboard__contents{
        transition: var(--helpgent-transition);
    }
    /* .helpgent-user-dashboard__contents--loading{
        opacity: 0;
        visibility: hidden;
    } */
    .helpgent-user-dashboard__actions{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15px;
        padding: 20px 30px 0;
        .helpgent-user-status{
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--helpgent-color-gray);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-btn{
            svg path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
    }
`;

export { LoginWrapper, DashboardWrapper };
