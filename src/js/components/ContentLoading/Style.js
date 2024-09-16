import Styled from 'styled-components';

const ContentLoadingStyle = Styled.div`
    &.templatiq-content-loading{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        min-height: 150px;
        padding: 0;
        border-radius: 10px;
        margin: 0;
        box-sizing: border-box;
        background-color: var(--templatiq-color-white);
        flex: 1 1 0%;
        .templatiq-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            text-align: left;
            background: #cccccc;
            mask: linear-gradient(-90deg, #000 10%, #0005, #000 70%) right/350% 100%;
            animation: shimmerEffect 2s infinite;
            display: inline-block;
            position: relative;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .templatiq-content-loading__image {
            height: 200px;
        }
        .templatiq-content-loading__single {
            height: 32px;
        }
    }
`;

export { ContentLoadingStyle };
