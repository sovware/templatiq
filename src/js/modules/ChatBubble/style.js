import Styled from 'styled-components';

const ChatBubbleFormStyle = Styled.div`
    position: fixed;
    max-width: 800px;
    width: 100%;
    bottom: var(--helpgent-bubble-form-offset-y);
    height: min(80vh, 550px);
    z-index: 9999;
    animation: 0.4s ease-in-out 0s 1 normal none running helpgentOpeningAnimation;
    @media only screen and (max-width: 991px){
        max-width: 700px;
    }
    @media only screen and (max-width: 768px){
        width: calc(100% - 60px);
        height: unset;
    }
     &.helpgent-chat-bubble-form{
        position: fixed;
        &--left{
            left: var(--helpgent-bubble-form-offset-x);
        }
        &--right{
            right: var(--helpgent-bubble-form-offset-x);
        }
        .helpgent-preview-container{
            overflow: unset;
        }
        .helpgent-preview-media-right{
            .helpgent-question-element-wrapper{
                padding-left: 40px;
            }
            .helpgent-media-src__image .helpgent-media-src__overlay{
                border-radius: 0 20px 20px 0;
            }
            .helpgent-countdown{
                border-radius: 0;
            }
        }
        .helpgent-media-src__image .helpgent-media-src__overlay{
            border-radius: 20px 0 0 20px;
        }

    }
`;

const ChatBubbleContainerStyle = Styled.div`
    .helpgent-chat-bubble{
        position: fixed;
    }
`;

export { ChatBubbleFormStyle, ChatBubbleContainerStyle };
