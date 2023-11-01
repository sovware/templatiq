import Styled from 'styled-components';

const ResponseTabStyle = Styled.ul`
    padding: 4px;
    border-radius: 10px;
    background-color: var(--helpgent-color-white);
    gap: 10px;
    li{
        font-size: 14px;
        font-weight: 500;
        padding: 7px 10px;
        cursor: pointer;
        border-radius: 8px;
        margin-bottom: 0;
        color: var(--helpgent-color-light-gray);
        text-align: center;
        &.helpgent-active{
            color: var(--helpgent-color-white);
            background-color: var(--helpgent-color-primary);
            &:hover{
                color: var(--helpgent-color-white);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
        }
    }
`;

const ResponseSearchStyle = Styled.div`
    &.helpgent-response-search{
        &.helpgent-response-search-active{
            .helpgent-form-group__element{
                background-color: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-tag-search{
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        background-color: var(--helpgent-color-bg-gray);
    }
    .helpgent-badge{
        position: absolute;
        top: -4px;
        left: -6px;
        font-size: 10px;
        font-weight: 700;
        width: 18px;
        height: 18px;
        box-sizing: border-box;
    }
    .helpgent-form-group__element{
        border-radius: 10px;
        height: 44px;
        box-shadow: 0 2px 5px rgba(144,144,144,.10);
        background-color: var(--helpgent-color-bg-deep);
    }
`;

const ResponseFilterStyle = Styled.div`
    margin-bottom: 7px;
    .helpgent-response-filter__archive{
        cursor: pointer;
    }
    .helpgent-response-filter__archive,
    .helpgent-response-filter__right{
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-light-gray);
        width: 100%;
    }
    .helpgent-response-filter__right{
        .helpgent-select{
            width: calc(100% + 20px);
        }
        .helpgent-select__control{
            min-width: auto;
            &--is-focused{
                outline: 0;
                box-shadow: none;
                border: 0 none;
            }
        }
        .helpgent-select__menu{
            width: calc(100% + 20px);
            margin-left: -20px;
            margin-top: 3px;
        }
    }
    .helpgent-select__control{
        padding: 0;
        background: none;
        min-width: 55px;
    }
    .helpgent-select__value-container{
        padding: 0;
    }
    .helpgent-select__single-value{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-light-gray);
    }
`;

const ResponseListStyle = Styled.ul`
    height: 540px;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0 -10px;
    .helpgent-response-item{
        display: flex;
        align-items: flex-start;
        padding: 15px;
        border-radius: 10px;
        margin-bottom: 0;
        transition: .3s background-color ease-in-out;
        background-color: transparent;
        cursor: pointer;
        position: relative;
        &:hover,
        &.helpgent-active {
            background-color: var(--helpgent-color-white);
        }
        @media only screen and (max-width: 991px){
            gap: 10px;
        }
        .helpgent-response-item__action{
            @media only screen and (max-width: 991px){
                position: absolute;
                right: 0;
                top: 10px;
            }
        }
    }
    .helpgent-response-item__icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
        background-color: var(--helpgent-color-dark);
    }
    .helpgent-response-item__media{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
        flex: none;
        @media only screen and (max-width: 991px){
            margin-right: 0;
        }
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .helpgent-response-item__content{
        flex: 1;
    }
    .helpgent-response-item__name{
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 6px;
        color: var(--helpgent-color-dark);
    }
    .helpgent-response-item__last-message{
        font-size: 13px;
        width: 220px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--helpgent-color-gray);
    }
    .helpgent-response-item__last-attachment{
        align-items: center;
        svg{
            width: 13px;
            height: 13px;
            margin-right: 6px;
            path{
                fill: var(--helpgent-color-extra-light);
            }
        }
        .helpgent-response-item__last-attachment-name{
            font-size: 13px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
        }
    }
    .helpgent-response-item__last-message-time{
        font-size: 12px;
        margin-top: 1px;
        color: var(--helpgent-color-light-gray);
    }
    .helpgent-response-item__assigned-tags{
        display: flex;
        flex-wrap: wrap;
        margin: 8px 0 0;
        gap: 5px;
        &:empty{
            display: none;
        }
        li{
            &.helpgent-tag-badge{
                font-size: 10px;
                font-weight: 600;
                line-height: 1.2;
                padding: 2px 5px;
                border-radius: 5px;
                text-transform: uppercase;
                background-color: var(--helpgent-color-bg-deep);
                word-wrap: break-word;
                word-break: break-word;
                transition: var(--helpgent-transition);
                &:hover{
                    color: var(--helpgent-color-white);
                    background-color: var(--helpgent-color-dark);
                }
            }
        }
    }
    .helpgent-response-item__action{
        display: flex;
        align-items: center;
    }
    .helpgent-unread-pointer{
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 6px;
        background-color: var(--helpgent-color-danger);
    }
    .helpgent-response-dropdown{
        .helpgent-dropdown__toggle{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: transparent;
            span{
                line-height: 0;
            }
            &:hover,
            &.helpgent-dropdown-open{
                background-color: var(--helpgent-color-bg-deep);
            }
        }
        .helpgent-dropdown__content{
            margin-top: 15px;
            li:last-child{
                border-top: 1px solid var(--helpgent-color-border-light);
                a{
                    margin-top: 10px;
                }
            }
        }
    }
`;

const ResponseDeleteAlertStyle = Styled.div`
    padding: 0 30px 25px;
    .helpgent-conversation-delete__label{
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        color: var(--helpgent-color-dark);
        padding: 0;
    }
`;

export {
	ResponseTabStyle,
	ResponseSearchStyle,
	ResponseListStyle,
	ResponseFilterStyle,
	ResponseDeleteAlertStyle,
};
