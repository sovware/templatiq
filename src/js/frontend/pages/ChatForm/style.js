import Styled from 'styled-components';

const ChatFormStyle = Styled.div`
    &.helpgent-answer-loading{
        .helpgent-navigation,
        .helpgent-question-element-wrapper{
            user-select: none;
            opacity: .5;
        }
    }
    .helpgent-chatForm-back-btn,
    .helpgent-chatForm-close-btn{
        position: absolute;
        right: -10px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: var(--helpgent-color-dark);
        z-index: 2;
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-chatForm-back-btn{
        right: auto;
        left: 0;
        top: 0;
        background-color: var(--helpgent-color-white);
        width: 40px;
        height: inherit;
        border-radius: 20px 0 0 20px;
        background: var(--helpgent-color-dark);
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
    .helpgent-question-element-wrapper--user_validation,
    .helpgent-question-element-wrapper--date,
    .helpgent-question-element-wrapper--long_text,
    .helpgent-question-element-wrapper--short_text,
    .helpgent-question-element-wrapper--email,
    .helpgent-question-element-wrapper--dropdown,
    .helpgent-question-element-wrapper--multi_select,
    .helpgent-question-element-wrapper--single_select{
        .helpgent-validate-danger{
            display: block;
        }
    }
`;

export { ChatFormStyle };
