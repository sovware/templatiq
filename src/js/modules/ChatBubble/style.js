import Styled from 'styled-components';

const ChatBubbleFormStyle = Styled.div`
    position: fixed;
    max-width: 800px;
    width: 100%;
    bottom: var(--templatiq-bubble-form-offset-y);
    height: min(80vh, 550px);
    z-index: 9999;
    animation: 0.4s ease-in-out 0s 1 normal none running templatiqOpeningAnimation;
    @media only screen and (max-width: 991px){
        max-width: 700px;
    }
    @media only screen and (max-width: 768px){
        width: calc(100% - 60px);
        height: unset;
    }
     &.templatiq-chat-bubble-form{
        position: fixed;
        &--left{
            left: var(--templatiq-bubble-form-offset-x);
        }
        &--right{
            right: var(--templatiq-bubble-form-offset-x);
        }
        .templatiq-preview-container{
            overflow: unset;
        }
        .templatiq-preview-media-right{
            .templatiq-question-element-wrapper{
                padding-left: 40px;
            }
            .templatiq-media-src__image .templatiq-media-src__overlay{
                border-radius: 0 20px 20px 0;
            }
            .templatiq-countdown{
                border-radius: 0;
            }
        }
        .templatiq-media-src__image .templatiq-media-src__overlay{
            border-radius: 20px 0 0 20px;
        }

    }
`;

const ChatBubbleContainerStyle = Styled.div`
    .templatiq-chat-bubble{
        position: fixed;
    }
`;

export { ChatBubbleFormStyle, ChatBubbleContainerStyle };
