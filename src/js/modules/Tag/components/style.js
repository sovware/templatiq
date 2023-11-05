import Styled from 'styled-components';

const TagContentStyle = Styled.div`
    .template-market-table-tag-name,
    .template-market-table-form-name{
        width: 300px;
        @media only screen and (max-width: 1366px){
            width: 200px;
        }
    }
    .template-market-table-tag-action{
        width: 190px;
    }
    .template-market-table-tag-id{
        width: 35px;
    }
    .template-market-table-action{
        gap: 8px;
        .template-market-btn{
            min-height: 28px;
            font-size: 13px;
            padding: 0 13px;
            color: var(--template-market-color-light-gray);
            svg{
                width: 12px;
                height: 12px;
                path{
                    fill: var(--template-market-color-light-gray);
                    transition: var(--template-market-transition);
                }
            }
            &:hover{
                svg path{
                    fill: #fff;
                }
            }
            &.template-market-btn-tag-delete{
                &:hover{
                    background: var(--template-market-color-danger);
                    border-color: var(--template-market-color-danger);
                }
            }
        }
    }
    .template-market-tag-name{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--template-market-color-dark);
        word-wrap: break-word;
        word-break: break-word;
        .template-market-tag-color{
            width: 18px;
            height: 10px;
            border-radius: 20px;
            flex: none;
        }
    }
    .template-market-tag-id{
        color: var(--template-market-color-gray);
    }
    .template-market-tag-form{
        word-wrap: break-word;
        word-break: break-word;
    }
    a{
        font-weight: 400;
        text-decoration: none;
        color: var(--template-market-color-info);
    }
    .template-market-tag-created{
        font-weight: 400;
        color: var(--template-market-color-gray);
    }
    .template-market-pagination{
        margin-top: 18px;
        padding-top: 40px;
        border-top: 1px solid var(--template-market-color-bg-light);
        justify-content: center;
    }
`;
const TagDeleteAlertStyle = Styled.div`
    //tag delete modal
    .template-market-conversation-delete__label{
        margin: 0;
        padding: 0 30px 30px;
        font-size: 16px;
        font-weight: 500;
    }
`;
const TagAddAlertStyle = Styled.div`
    //tag add/edit modal
    .template-market-add-tag-form{
        > .template-market-validate-danger{
            margin: 0 0 10px !important;
            padding: 0 30px !important;
        }
        .template-market-validate-danger{
            display: block;
            margin-bottom: 10px;
            padding: 0;
        }
        .template-market-form-tag-name{
            padding: 0 30px;
            .template-market-form-group__label{
                font-size: 14px;
                font-weight: 500;
                color: var(--template-market-color-gray);
                display: block;
                margin-bottom: 10px;
            }
            .template-market-form-group{
                border: 1px solid var(--template-market-color-bg-gray);
                padding: 10px;
                border-radius: 8px;
            }
            .template-market-tags-color-list{
                margin: 10px 0 0 0;
                padding: 0;
                list-style: none;
                display: flex;
                align-items: center;
                gap: 5px;
                li{
                    width: 37px;
                    height: 28px;
                    border-radius: 6px;
                    background: var(--template-market-color-bg-gray);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    font-weight: 500;
                    color: #191919;
                    cursor: pointer;
                    margin: 0;
                }
            }
            .template-market-add-tag-field{
                width: 100%;
                position: relative;
                .template-market-selected-color{
                    width: 18px;
                    height: 10px;
                    border-radius: 20px;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .template-market-form-group__element{
                    padding-right: 50px;
                    background: var(--template-market-color-bg-gray);
                    border-radius: 8px;
                }
            }
            &+.template-market-form-group{
                padding: 0 30px;
                margin-bottom: 30px;
            }
        }
        .template-market-select{
            .template-market-select__control{
                padding-top: 7px;
                padding-bottom: 7px;
                border-radius: 8px;
            }
            .template-market-select__single-value,
            .template-market-select__placeholder{
                font-size: 14px;
                font-weight: 500;
                color: var(--template-market-color-dark);
            }
        }
        .template-market-modal-submit{
            background: var(--template-market-color-bg-light);
            padding: 20px 30px;
            border-radius: 0 0 16px 16px;
        }
    }

    .template-market-validate-danger{
        padding: 0 30px;
    }
`;

export { TagContentStyle, TagAddAlertStyle, TagDeleteAlertStyle };
