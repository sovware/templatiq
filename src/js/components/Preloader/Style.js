import Styled from 'styled-components';

const PreloaderStyle = Styled.div`  
    height: 100dvh;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .templatiq-preloader__logo {
        width: 50px;
        height: 50px;
    }
       
    .loader {
        width: 120px;
        height: 12px;
        border-radius: 20px;
        border: 2px solid #f857db;
        position: relative;
    }
    .loader::before {
        content: "";
        position: absolute;
        margin: 2px;
        inset: 0 100% 0 0;
        border-radius: inherit;
        background: linear-gradient(90deg, #A67BEF, #5AA0FF, #FFD166, #f857db);
        animation: progress 2s infinite;
    }
        
    @keyframes progress {
        100% {inset:0}
    }

`;

export { PreloaderStyle };
