import Styled from 'styled-components';

const CountdownStyle = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 20px;
    background: rgba(0,0,0, 0.3);
    border-radius: 0 0 20px 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 10;
    &.helpgent-countdown-modal {
        position: fixed;
        z-index: 99999;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(137, 137, 137, 0.537254902);
    }
    &.helpgent-countdown{
        border-radius: 0;
    }

    .helpgent-countdown-timer-count,
    .helpgent-countdown-timer-text {
        margin: 0;
        color: #fff;
        line-height: 1;
    }

    .helpgent-countdown-timer-count {
        margin-bottom: 30px;
        font-size: 150px;
        @media only screen and (max-width: 768px){
            font-size: 80px;
        }
    }

    .helpgent-countdown-timer-text {
        font-size: 50px;
        @media only screen and (max-width: 768px){
            font-size: 30px;
        }
    }
`;

export { CountdownStyle };
