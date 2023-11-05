import Styled from 'styled-components';
const HeaderStyle = Styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    .template-market-page-header-title{
        font-size: 22px;
        font-weight: 500;
        color: var(--template-market-color-dark);
    }
    .template-market-page-header-btn{
        ${ ( { theme } ) =>
			theme.direction === 'ltr'
				? 'margin-inline-start'
				: 'margin-inline-end' }: 20px;
    }
`;

const TableStyle = Styled.div`
    border-radius: 12px;
    padding: 20px;
    background-color: var(--template-market-color-white);
    margin-bottom: 30px;
    @media only screen and (max-width: 1399px){
        padding: 15px;
    }
    .template-market-pagination{
        margin-top: 18px;
        padding-top: 40px;
        border-top: 1px solid var(--template-market-color-bg-light);
        justify-content: center;
    }
    .template-market-table-wrap{
        position: relative;
        min-height: 200px;
    }
    .template-market-form-responses{
        a{
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            color: var(--template-market-color-text);
            &:hover{
                color: var(--template-market-color-primary);
            }
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    .template-market-form-date{
        color: var(--template-market-color-gray);
    }
    .template-market-form-status{
        .components-toggle-control__label{
            color: var(--template-market-color-light-gray);
        }
    }
    .template-market-table-loader{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
    }
    .template-market-table{
        tbody{
            tr{

                &:hover{
                    background: #EFEFEF;
                }
                &.template-market-welcome-wrapper{
                    &:hover{
                        background: none;
                    }
                }
                td{
                    .template-market-toggle{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                    .is-checked{
                        & + .components-toggle-control__label{
                            color: var(--template-market-color-primary);
                        }
                    }
                }
                .template-market-form-shortcode{
                    input {
                        border: 0 none;
                        background: var(--template-market-color-bg-deep);
                        color: var(--template-market-color-dark);
                        border-radius: 5px;
                        text-align: center;
                        cursor: copy;
                        font-size: 12px;
                        font-weight: 400;
                        &:focus{
                            border: 0 none;
                            outline: 0;
                            box-shadow: none;
                        }
                    }
                }
            }
        }
        th{
            &.template-market-head-name{
                min-width: 564px;
                @media only screen and (max-width: 1699px){
                    min-width: 400px;
                }
                @media only screen and (max-width: 1550px){
                    min-width: 300px;
                }
            }
            &.template-market-head-shortCode{
                width: 210px;
                min-width: 110px;
            }
            &.template-market-head-response{
                min-width: 110px;
            }
            &.template-market-head-status{
                width: 150px;
            }
            &.template-market-head-action{
                width: 115px;
            }
            &.template-market-head-created{
                min-width: 170px;
                @media only screen and (max-width: 1499px){
                    min-width: 135px;
                }
            }
        }
        .template-market-form-responses{
            a{
                padding: 6px;
                color: var(--template-market-color-info);
            }
        }
    }
`;

const TitleBoxStyle = Styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    .template-market-titleBox__editor{
        input{
            border-top: 0px none;
            border-inline-end: 0px none;
            border-bottom: 1px solid #ededed;
            border-inline-start: 0px none;
            border-image: initial;
            background-color: transparent;
            border-radius: 0px;
            padding: 4px 0;
            line-height: 2;
            min-height: 30px;
            color: #2c3338;
            transition: var(--template-market-transition);
            &:active,
            &:focus{
                border: 0 none;
                border-bottom: 1px solid #000000;
                outline: 0;
                box-shadow: none;
            }
        }
        span{
            font-size: 13px;
            color: var(--template-market-color-danger);
            display: block;
            margin-top: 10px;
        }
    }
    .template-market-titleBox__actions{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .template-market-titleBox-action-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        cursor: pointer ;
        border-radius: 50%;
        transition: var(--template-market-transition);
        &.template-market-titleBox__actions-yes{
            background-color: var(--template-market-color-success);
            border: 1px solid var(--template-market-color-success);
        }
        &.template-market-titleBox__actions-cancel{
            background-color: var(--template-market-color-danger);
            border: 1px solid var(--template-market-color-danger);
        }
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: #fff;
                transition: var(--template-market-transition);
            }
        }
        .template-market-circle-loader {
            border-color: #fff;
            border-bottom-color: transparent;
            transition: var(--template-market-transition);
        }
        &:hover{
            background: none;
            svg{
                path{
                    fill: #000;
                }
            }
            .template-market-circle-loader {
                border-color: var(--template-market-primary-color);
                border-bottom-color: transparent;
            }
        }
    }
    .template-market-titleBox__content{
        display: flex;
        align-items: center;
        gap: 12px;
        .template-market-titleBox-media__form{
            width: 38px;
            height: 38px;
            border-radius: 8px;
            display: block;
        }
        img{
            width: 38px;
            height: 38px;
            object-fit: cover;
            border-radius: 8px;
        }
    }
    .template-market-titleBox-media{
        flex: none;
    }
    .template-market-titleBox-text{
        .template-market-title{
            font-size: 15px;
            font-weight: 600;
            color: var(--template-market-color-dark);
        }
    }
   .template-market-titleBox-meta{
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 5px 0 0;
        .template-market-titleBox-meta__id{
            position: relative;
            &::after{
                content: '';
                width: 2px;
                height: 2px;
                background: #6e6e6e;
                border-radius: 50%;
                display: block;
                position: absolute;
                inset-inline-end: -7px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        li{
            font-size: 12px;
            font-weight: 500;
            color: var(--template-market-color-light-gray);
            margin: 0;
        }
   }
`;

const WelcomeBoxStyleWrap = Styled.div`
    width: fit-content;
    margin: 100px auto;
    border-radius: 20px;
    text-align: center;
    padding: 54px clamp(15px, 10%, 112.5px);

    .template-market-welcome-top{
        margin-bottom: 6px;
    }
    .template-market-welcome-top{
    }
    .template-market-welcome-top__icon{
        margin-bottom: 30px;
        svg{
            width: 130px;
            height: 105px;
        }
    }
    .template-market-welcome-top__title{
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 10px;
        color: var(--template-market-color-dark);
    }
    p{
        font-size: 16px;
        margin: 0;
        font-weight: 400;
    }
    .template-market-btn-create{
        padding: 0 30px;
        min-height: 46px;
        margin-top: 25px;
        border-radius: 10px;
    }
`;

const FormDeleteAlertStyle = Styled.div`
    padding: 0 30px 25px;
    .template-market-conversation-delete__label{
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        color: var(--template-market-color-dark);
        padding: 0;
    }
`;

const QuestionPreparationStyle = Styled.div`
    width: 100%;
    min-width: 320px;
    .template-market-import-attachment__title{
        font-size: 18px;
        color: var(--template-market-color-dark);
    }
    .template-market-import-attachment__progress{
        display: flex;
        align-items: center;
    }
    .template-market-import-attachment__percentage{
        margin-left: 15px;
    }
`;

export {
	HeaderStyle,
	TableStyle,
	TitleBoxStyle,
	WelcomeBoxStyleWrap,
	FormDeleteAlertStyle,
};
