import Styled from 'styled-components';

const PopupButtonStyle = Styled.div`
    position: relative;
    &:hover{
        .helpgent-btn{
            svg{
                path{
                    fill: var(--helpgent-color-light-gray) !important;
                }
            }
        }
    }

    &.helpgent-popup-button-active .helpgent-button-popup {
        display: block;
    }

    .helpgent-button-popup {
        display: none;
        position: absolute;
        top: -10px;
        left: 50%;
        border-radius: 30px;
        width: 525px;
        transform: translate(-50%, -100%);
        padding: 50px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 50px;
        background: #fff;
        box-sizing: border-box;
        cursor: auto;
        z-index: 1;
        .helpgent-button-group{
            gap: 20px;
        }
        .helpgent-btn{
            &:hover{
                color: var(--helpgent-color-primary);
                svg{
                    path{
                        fill: var(--helpgent-color-primary) !important;
                    }
                }
            }
        }
    }
`;

export { PopupButtonStyle };
