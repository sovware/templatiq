import Styled from 'styled-components';

const ChatFormStyle = Styled.div`
    &.template-market-answer-loading{
        .template-market-navigation,
        .template-market-question-element-wrapper{
            user-select: none;
            opacity: .5;
        }
    }
    .template-market-chatForm-back-btn,
    .template-market-chatForm-close-btn{
        position: absolute;
        right: -10px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: var(--template-market-color-dark);
        z-index: 2;
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--template-market-color-white);
            }
        }
    }
    .template-market-chatForm-back-btn{
        right: auto;
        left: 0;
        top: 0;
        background-color: var(--template-market-color-white);
        width: 40px;
        height: inherit;
        border-radius: 20px 0 0 20px;
        background: var(--template-market-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        svg{
            width: 14px;
            path{
                fill: #fff;
            }
        }
    }
    .template-market-question-element-wrapper--user_validation,
    .template-market-question-element-wrapper--date,
    .template-market-question-element-wrapper--long_text,
    .template-market-question-element-wrapper--short_text,
    .template-market-question-element-wrapper--email,
    .template-market-question-element-wrapper--dropdown,
    .template-market-question-element-wrapper--multi_select,
    .template-market-question-element-wrapper--single_select{
        .template-market-validate-danger{
            display: block;
        }
    }
`;

export { ChatFormStyle };
