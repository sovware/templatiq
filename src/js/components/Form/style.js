import Styled from 'styled-components';

const CreatePopupStyle = Styled.div`
    width: fit-content;
    margin: 0 auto;
    .template-market-createPopup{
        text-align: center;
        margin: 50px 0;
        .template-market-toggle-inline{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .template-market-toggle__label{
                display: flex;
                align-items: center;
                font-size: 15px;
                font-weight: 500;
                color: var(--template-market-color-dark);
                cursor: pointer;
            }
        }
    }
    .template-market-select__option{
        display: flex;
        .template-market-checkbox{
            margin-right: 10px;
        }
    }
   .template-market-createPopup__header{
        h4{
            font-size: 30px;
            font-weight: 600;
            margin: 0;
            line-height: 1.27;
            color: var(--template-market-color-dark);
        }
        p{
            font-size: 16px;
            font-weight: 400;
        }
   }
   .template-market-createPopup__actions{
    display: flex;
    align-items: center;
    margin-top: 36px;
   }
   .template-market-createPopup__action{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        border-radius: 20px;
        padding: 40px 52px;
        text-decoration: none;
        background-color: var(--template-market-color-bg-light);
        transition: var(--template-market-transition);
        &:hover{
            background-color: var(--template-market-color-bg-deep);
        }
   }
   .template-market-createPopup__action-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: var(--template-market-color-white);
    svg{
        fill: var(--template-market-color-primary);
    }
   }
   .template-market-createPopup__action-text{
        display: block;
        font-size: 16px;
        font-weight: 500;
        max-width: 96px;
        margin-top: 20px;
        line-height: 1.38;
        color: var(--template-market-color-dark);
   }
   .template-market-validate-danger{
    display: block;
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

const CreateFormStyleWrap = Styled.div`
    text-align: start;
    margin-top: 50px;
    .template-market-form-group{
        width: 450px;
    }
    .template-market-tooltip-toggle{
        position: relative;
        top: 1px;
        display: inline-block;
        margin-inline-start: 10px;
        line-height: .85;
        cursor: pointer;
    }
    .template-market-form__element,
    .template-market-form__element-inline{
        border-radius: 12px;
        background-color: var(--template-market-color-bg-light);
    }
    .template-market-form__element{
        &::placeholder{
            color: #3C3C3C;
        }
    }
    .template-market-form__element-inline{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .template-market-form__label{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: var(--template-market-color-dark);
    }
    .template-market-select {
        margin-top: 12px;
        &__control{
            background-color: var(--template-market-color-bg-light);
        }
    }
`;

export { CreatePopupStyle, QuestionPreparationStyle, CreateFormStyleWrap };
