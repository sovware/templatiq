import Styled from 'styled-components';

const TagContentStyle = Styled.div`
    .helpgent-table-tag-name,
    .helpgent-table-form-name{
        width: 300px;
        @media only screen and (max-width: 1366px){
            width: 200px;
        }
    }
    .helpgent-table-tag-action{
        width: 190px;
    }
    .helpgent-table-tag-id{
        width: 35px;
    }
    .helpgent-table-action{
        gap: 8px;
        .helpgent-btn{
            min-height: 28px;
            font-size: 13px;
            padding: 0 13px;
            color: var(--helpgent-color-light-gray);
            svg{
                width: 12px;
                height: 12px;
                path{
                    fill: var(--helpgent-color-light-gray);
                    transition: var(--helpgent-transition);
                }
            }
            &:hover{
                svg path{
                    fill: #fff;
                }
            }
            &.helpgent-btn-tag-delete{
                &:hover{
                    background: var(--helpgent-color-danger);
                    border-color: var(--helpgent-color-danger);
                }
            }
        }
    }
    .helpgent-tag-name{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--helpgent-color-dark);
        word-wrap: break-word;
        word-break: break-word;
        .helpgent-tag-color{
            width: 18px;
            height: 10px;
            border-radius: 20px;
            flex: none;
        }
    }
    .helpgent-tag-id{
        color: var(--helpgent-color-gray);
    }
    .helpgent-tag-form{
        word-wrap: break-word;
        word-break: break-word;
    }
    a{
        font-weight: 400;
        text-decoration: none;
        color: var(--helpgent-color-info);
    }
    .helpgent-tag-created{
        font-weight: 400;
        color: var(--helpgent-color-gray);
    }
    .helpgent-pagination{
        margin-top: 18px;
        padding-top: 40px;
        border-top: 1px solid var(--helpgent-color-bg-light);
        justify-content: center;
    }
`;
const TagDeleteAlertStyle = Styled.div`
    //tag delete modal
    .helpgent-conversation-delete__label{
        margin: 0;
        padding: 0 30px 30px;
        font-size: 16px;
        font-weight: 500;
    }
`;
const TagAddAlertStyle = Styled.div`
    //tag add/edit modal
    .helpgent-add-tag-form{
        > .helpgent-validate-danger{
            margin: 0 0 10px !important;
            padding: 0 30px !important;
        }
        .helpgent-validate-danger{
            display: block;
            margin-bottom: 10px;
            padding: 0;
        }
        .helpgent-form-tag-name{
            padding: 0 30px;
            .helpgent-form-group__label{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
                display: block;
                margin-bottom: 10px;
            }
            .helpgent-form-group{
                border: 1px solid var(--helpgent-color-bg-gray);
                padding: 10px;
                border-radius: 8px;
            }
            .helpgent-tags-color-list{
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
                    background: var(--helpgent-color-bg-gray);
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
            .helpgent-add-tag-field{
                width: 100%;
                position: relative;
                .helpgent-selected-color{
                    width: 18px;
                    height: 10px;
                    border-radius: 20px;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .helpgent-form-group__element{
                    padding-right: 50px;
                    background: var(--helpgent-color-bg-gray);
                    border-radius: 8px;
                }
            }
            &+.helpgent-form-group{
                padding: 0 30px;
                margin-bottom: 30px;
            }
        }
        .helpgent-select{
            .helpgent-select__control{
                padding-top: 7px;
                padding-bottom: 7px;
                border-radius: 8px;
            }
            .helpgent-select__single-value,
            .helpgent-select__placeholder{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-dark);
            }
        }
        .helpgent-modal-submit{
            background: var(--helpgent-color-bg-light);
            padding: 20px 30px;
            border-radius: 0 0 16px 16px;
        }
    }

    .helpgent-validate-danger{
        padding: 0 30px;
    }
`;

export { TagContentStyle, TagAddAlertStyle, TagDeleteAlertStyle };
