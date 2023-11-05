import Styled from 'styled-components';

const ChatBubbleFormStyle = Styled.div`
    position: fixed;
    max-width: 800px;
    width: 100%;
    bottom: var(--template-market-bubble-form-offset-y);
    height: min(80vh, 550px);
    z-index: 9999;
    animation: 0.4s ease-in-out 0s 1 normal none running template-marketOpeningAnimation;
    @media only screen and (max-width: 991px){
        max-width: 700px;
    }
    @media only screen and (max-width: 768px){
        width: calc(100% - 60px);
        height: unset;
    }
     &.template-market-chat-bubble-form{
        position: fixed;
        &--left{
            left: var(--template-market-bubble-form-offset-x);
        }
        &--right{
            right: var(--template-market-bubble-form-offset-x);
        }
        .template-market-preview-container{
            overflow: unset;
        }
        .template-market-preview-media-right{
            .template-market-question-element-wrapper{
                padding-left: 40px;
            }
            .template-market-media-src__image .template-market-media-src__overlay{
                border-radius: 0 20px 20px 0;
            }
            .template-market-countdown{
                border-radius: 0;
            }
        }
        .template-market-media-src__image .template-market-media-src__overlay{
            border-radius: 20px 0 0 20px;
        }

    }
`;

const ChatBubbleContainerStyle = Styled.div`
    .template-market-chat-bubble{
        position: fixed;
    }
`;

export { ChatBubbleFormStyle, ChatBubbleContainerStyle };
