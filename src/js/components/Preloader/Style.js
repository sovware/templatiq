import Styled from 'styled-components';

const PreloaderStyle = Styled.div`  
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;

    .ip {
        width: 16em;
        height: 8em;
    }
    .ip__track {
        stroke: var(--templatiq-primary-color);
        transition: stroke 0.3s ease;
    }
    .ip__worm1,
    .ip__worm2 {
        animation: worm1 2s linear infinite;
    }
    .ip__worm2 {
        animation-name: worm2;
    }

    /* Dark theme */
    @media (prefers-color-scheme: dark) {
        .ip__track {
            stroke: var(--templatiq-dark-color);
        }
    }

    /* Animation */
    @keyframes worm1 {
        from {
            stroke-dashoffset: 0;
        }
        50% {
            animation-timing-function: steps(1);
            stroke-dashoffset: -358;
        }
        50.01% {
            animation-timing-function: linear;
            stroke-dashoffset: 358;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
    @keyframes worm2 {
        from {
            stroke-dashoffset: 358;
        }
        50% {
            stroke-dashoffset: 0;
        }
        to {
            stroke-dashoffset: -358;
        }
    }

`;


export {
    PreloaderStyle
};
