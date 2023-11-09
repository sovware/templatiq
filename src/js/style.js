import Styled from 'styled-components';

const SearchBoxStyle = Styled.div`
    position: relative;
    height: 38px;
    padding: 0;
    display: flex;
    align-items: center;
    background-color: var(--templatiq-white-color);
    border-radius: 8px;
    button {
        position: absolute;
        inset-inline-start: 16px;
        top: 10px;
        padding: 0;
        background: transparent;
    }
    input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 0 42px;
        background: transparent;
        box-shadow: var(----templatiq-box-shadow);
        outline: none;
        transition: box-shadow 0.3s ease;
        &::placeholder {
            color: var(--templatiq-placeholder-color);
        }
        &:focus {
            box-shadow: var(----templatiq-box-shadow-focus);
        }
    }
`;

const SingleSelectStyle = Styled.div`
    line-height: 1.25;
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='radio']{
        display: none;
        &:checked {
            & + .templatiq-single-select__option{
                font-weight: 500;
                color: var(--templatiq-color-dark);
                &:before{
                    border: 5px solid var(--templatiq-color-primary);
                }
            }
        }
    }
    .templatiq-single-select__option{
        position: relative;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        min-height: 18px;
        display: flex;
        align-items: center;
        max-width: 290px;
        background-color: var(--templatiq-color-bg-light);
        color: var(--templatiq-color-gray);
        font-size: 14px;
        &:before{
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            inset-inline-start: 24px;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 2px solid var(--templatiq-color-extra-light);
            z-index: 10;
            box-sizing: border-box;
        }
    }
`;
const MultiSelectStyle = Styled.div`
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='checkbox']{
        display: none;
        &:checked {
            & + .templatiq-multi-select__option{
                svg{
                    display: block;
                }
                &:before{
                    border-color: var(--templatiq-color-primary);
                    background-color: var(--templatiq-color-primary);
                }
            }
        }
    }
    .templatiq-multi-select__option{
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        max-width: 290px;
        min-height: 18px;
        background-color: var(--templatiq-color-bg-light);
        font-size: 14px;
        &:before{
            position: absolute;
            inset-inline-start: 15px;
            width: 18px;
            height: 18px;
            border-radius: 5px;
            background-color: transparent;
            content: '';
            border: 2px solid var(--templatiq-color-extra-light);
            top: 50%;
            transform: translateY(-50%);
            box-sizing: border-box;
        }
        svg{
            position: absolute;
            width: 8px;
            height: 8px;
            inset-inline-start: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            path{
                fill: var(--templatiq-color-white);
            }
        }
    }
`;

const ModalAlertStyle = Styled.div`
    padding: 84px 0 0;
    .templatiq-modal-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        background-color: var(--templatiq-color-bg-light);
        .templatiq-btn{
            margin: 0 5px;
        }
        &.templatiq-modal-filter-action{
            .templatiq-modal-action__cancel{
                background: transparent;
                border: 0 none;
                padding: 0;
                color: var(--templatiq-color-light-gray);
                &:hover{
                    color: var(--templatiq-color-dark);
                }
            }
        }
        &.templatiq-delete-alert-modal-action,
        &.templatiq-conversation-delete-action,
        &.templatiq-form-delete-alert-action,
        &.templatiq-response-delete-alert-action,
        &.templatiq-delete-tag-alert-action{
            justify-content: flex-end;
            .templatiq-btn{
                border-radius: 10px;
                min-height: 40px;
            }
        }
    }

    //filter modal
    .templatiq-modal-filter-inner{
        padding: 0 30px 30px;
        .templatiq-modal-filter__tags-label{
            font-size: 16px;
            font-weight: 600;
            color: var(--templatiq-color-dark);
            margin-bottom: 20px;
            display: block;
        }
        .templatiq-modal-filter__tags-list{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            max-height: 170px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .templatiq-modal-filter__tags-item{
            flex: 0 0 50%;
            margin-bottom: 18px;
            .templatiq-checkbox{
                display: flex;
                gap: 12px;
                label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--templatiq-color-gray);
                }
            }
        }
        .templatiq-show-more{
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--templatiq-color-dark);
            margin-top: 0;
            text-decoration: underline;
            cursor: pointer;
            &--active{
                margin-top: 18px;
            }
        }
    }
    .templatiq-modal-action{}

    .templatiq-session-expired__content{
        margin-top: -84px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        h2{
            margin: 30px 0 20px;
            font-size: 24px;
            font-weight: 500;
            color: var(--templatiq-color-dark);
        }
        p{
            margin: 0 0 50px;
        }
    }
`;

export {
	SearchBoxStyle,
	SingleSelectStyle,
	MultiSelectStyle,
	ModalAlertStyle,
};
