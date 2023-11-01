import Styled from 'styled-components';

const CreatePopupStyle = Styled.div`
    width: fit-content;
    margin: 0 auto;
    .helpgent-createPopup{
        text-align: center;
        margin: 50px 0;
        .helpgent-toggle-inline{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .helpgent-toggle__label{
                display: flex;
                align-items: center;
                font-size: 15px;
                font-weight: 500;
                color: var(--helpgent-color-dark);
                cursor: pointer;
            }
        }
    }
    .helpgent-select__option{
        display: flex;
        .helpgent-checkbox{
            margin-right: 10px;
        }
    }
   .helpgent-createPopup__header{
        h4{
            font-size: 30px;
            font-weight: 600;
            margin: 0;
            line-height: 1.27;
            color: var(--helpgent-color-dark);
        }
        p{
            font-size: 16px;
            font-weight: 400;
        }
   }
   .helpgent-createPopup__actions{
    display: flex;
    align-items: center;
    margin-top: 36px;
   }
   .helpgent-createPopup__action{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        border-radius: 20px;
        padding: 40px 52px;
        text-decoration: none;
        background-color: var(--helpgent-color-bg-light);
        transition: var(--helpgent-transition);
        &:hover{
            background-color: var(--helpgent-color-bg-deep);
        }
   }
   .helpgent-createPopup__action-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: var(--helpgent-color-white);
    svg{
        fill: var(--helpgent-color-primary);
    }
   }
   .helpgent-createPopup__action-text{
        display: block;
        font-size: 16px;
        font-weight: 500;
        max-width: 96px;
        margin-top: 20px;
        line-height: 1.38;
        color: var(--helpgent-color-dark);
   }
   .helpgent-validate-danger{
    display: block;
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

const CreateFormStyleWrap = Styled.div`
    text-align: start;
    margin-top: 50px;
    .helpgent-form-group{
        width: 450px;
    }
    .helpgent-tooltip-toggle{
        position: relative;
        top: 1px;
        display: inline-block;
        margin-inline-start: 10px;
        line-height: .85;
        cursor: pointer;
    }
    .helpgent-form__element,
    .helpgent-form__element-inline{
        border-radius: 12px;
        background-color: var(--helpgent-color-bg-light);
    }
    .helpgent-form__element{
        &::placeholder{
            color: #3C3C3C;
        }
    }
    .helpgent-form__element-inline{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .helpgent-form__label{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
    }
    .helpgent-select {
        margin-top: 12px;
        &__control{
            background-color: var(--helpgent-color-bg-light);
        }
    }
`;

export { CreatePopupStyle, QuestionPreparationStyle, CreateFormStyleWrap };
