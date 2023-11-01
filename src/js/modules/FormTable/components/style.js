import Styled from 'styled-components';
const HeaderStyle = Styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    .helpgent-page-header-title{
        font-size: 22px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-page-header-btn{
        ${ ( { theme } ) =>
			theme.direction === 'ltr'
				? 'margin-inline-start'
				: 'margin-inline-end' }: 20px;
    }
`;

const TableStyle = Styled.div`
    border-radius: 12px;
    padding: 20px;
    background-color: var(--helpgent-color-white);
    margin-bottom: 30px;
    @media only screen and (max-width: 1399px){
        padding: 15px;
    }
    .helpgent-pagination{
        margin-top: 18px;
        padding-top: 40px;
        border-top: 1px solid var(--helpgent-color-bg-light);
        justify-content: center;
    }
    .helpgent-table-wrap{
        position: relative;
        min-height: 200px;
    }
    .helpgent-form-responses{
        a{
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            color: var(--helpgent-color-text);
            &:hover{
                color: var(--helpgent-color-primary);
            }
            &:focus{
                outline: none;
                box-shadow: 0 0;
            }
        }
    }
    .helpgent-form-date{
        color: var(--helpgent-color-gray);
    }
    .helpgent-form-status{
        .components-toggle-control__label{
            color: var(--helpgent-color-light-gray);
        }
    }
    .helpgent-table-loader{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
    }
    .helpgent-table{
        tbody{
            tr{

                &:hover{
                    background: #EFEFEF;
                }
                &.helpgent-welcome-wrapper{
                    &:hover{
                        background: none;
                    }
                }
                td{
                    .helpgent-toggle{
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                    .is-checked{
                        & + .components-toggle-control__label{
                            color: var(--helpgent-color-primary);
                        }
                    }
                }
                .helpgent-form-shortcode{
                    input {
                        border: 0 none;
                        background: var(--helpgent-color-bg-deep);
                        color: var(--helpgent-color-dark);
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
            &.helpgent-head-name{
                min-width: 564px;
                @media only screen and (max-width: 1699px){
                    min-width: 400px;
                }
                @media only screen and (max-width: 1550px){
                    min-width: 300px;
                }
            }
            &.helpgent-head-shortCode{
                width: 210px;
                min-width: 110px;
            }
            &.helpgent-head-response{
                min-width: 110px;
            }
            &.helpgent-head-status{
                width: 150px;
            }
            &.helpgent-head-action{
                width: 115px;
            }
            &.helpgent-head-created{
                min-width: 170px;
                @media only screen and (max-width: 1499px){
                    min-width: 135px;
                }
            }
        }
        .helpgent-form-responses{
            a{
                padding: 6px;
                color: var(--helpgent-color-info);
            }
        }
    }
`;

const TitleBoxStyle = Styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    .helpgent-titleBox__editor{
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
            transition: var(--helpgent-transition);
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
            color: var(--helpgent-color-danger);
            display: block;
            margin-top: 10px;
        }
    }
    .helpgent-titleBox__actions{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .helpgent-titleBox-action-item{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        cursor: pointer ;
        border-radius: 50%;
        transition: var(--helpgent-transition);
        &.helpgent-titleBox__actions-yes{
            background-color: var(--helpgent-color-success);
            border: 1px solid var(--helpgent-color-success);
        }
        &.helpgent-titleBox__actions-cancel{
            background-color: var(--helpgent-color-danger);
            border: 1px solid var(--helpgent-color-danger);
        }
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: #fff;
                transition: var(--helpgent-transition);
            }
        }
        .helpgent-circle-loader {
            border-color: #fff;
            border-bottom-color: transparent;
            transition: var(--helpgent-transition);
        }
        &:hover{
            background: none;
            svg{
                path{
                    fill: #000;
                }
            }
            .helpgent-circle-loader {
                border-color: var(--helpgent-primary-color);
                border-bottom-color: transparent;
            }
        }
    }
    .helpgent-titleBox__content{
        display: flex;
        align-items: center;
        gap: 12px;
        .helpgent-titleBox-media__form{
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
    .helpgent-titleBox-media{
        flex: none;
    }
    .helpgent-titleBox-text{
        .helpgent-title{
            font-size: 15px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
    }
   .helpgent-titleBox-meta{
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 5px 0 0;
        .helpgent-titleBox-meta__id{
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
            color: var(--helpgent-color-light-gray);
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

    .helpgent-welcome-top{
        margin-bottom: 6px;
    }
    .helpgent-welcome-top{
    }
    .helpgent-welcome-top__icon{
        margin-bottom: 30px;
        svg{
            width: 130px;
            height: 105px;
        }
    }
    .helpgent-welcome-top__title{
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 10px;
        color: var(--helpgent-color-dark);
    }
    p{
        font-size: 16px;
        margin: 0;
        font-weight: 400;
    }
    .helpgent-btn-create{
        padding: 0 30px;
        min-height: 46px;
        margin-top: 25px;
        border-radius: 10px;
    }
`;

const FormDeleteAlertStyle = Styled.div`
    padding: 0 30px 25px;
    .helpgent-conversation-delete__label{
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        color: var(--helpgent-color-dark);
        padding: 0;
    }
`;

const QuestionPreparationStyle = Styled.div`
    width: 100%;
    min-width: 320px;
    .helpgent-import-attachment__title{
        font-size: 18px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-import-attachment__progress{
        display: flex;
        align-items: center;
    }
    .helpgent-import-attachment__percentage{
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
