import Styled from 'styled-components';

const ModalStyle = Styled.div`
    display: none;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba( 0, 0, 0, 0.5 );
    overflow-y: auto;
    z-index: 999999;

    &.--active {
        display: flex;
    }
`;

export { ModalStyle };
