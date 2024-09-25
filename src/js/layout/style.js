import Styled from 'styled-components';

const LayoutStyle = Styled.div`
    display: flex;
    .templatiq__content {
        flex: 1;
        padding: 32px;
        position: relative;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #43cbff 0%, #9708cc 100%);
            opacity: 0.1;
            filter: blur(132px);
        }
    }
`;

export { LayoutStyle };
