import Styled from 'styled-components';

const DrawerStyle = Styled.div`

    &.helpgent-drawer-active.helpgent-in{
        .helpgent-drawer-content{
            transform: translateX(0);
        }

        .helpgent-drawer-backdrop{
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }
    }
    .helpgent-drawer-content{
        position: fixed;
        right: 0;
        top: 0;
        width: 400px;
        height: 100vh;
        transform: translateX(400px);
        transition: transform .3s ease-in-out;
        z-index: 1000000;
        background-color: var(--helpgent-color-white);
        @media only screen and (max-width: 400px){
            width: calc(100% - 20px);
        }
    }
    .helpgent-drawer-backdrop{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        z-index: 100000;
        transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
        background-color: rgba(0,0,0,.5);
    }
    .helpgent-media-filter{
        &__top{
            border-bottom: 1px solid #EDEDED;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 28px 25px;
            .helpgent-select .helpgent-select__menu{
                width: 130px;
                right: 0;
            }
        }
        &__close{
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: var(--helpgent-color-bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg{
                width: 10px;
                height: 10px;
                path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        &__label{
            font-size: 18px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
        .helpgent-select__control{
            background: none;
            min-width: 80px;
            padding: 0;
            min-height: unset;
            .helpgent-select__value-container,
            .helpgent-select__indicator{
                padding: 0;
                gap: 0;
            }
            .helpgent-select__single-value{
                font-size: 14px;
                font-weight: 500;
                color: var(--helpgent-color-gray);
                text-align: right;
            }
        }
        &__content{
            padding: 25px;
            overflow-y: scroll;
            height: calc(100vh - 91px);
            .helpgent-user-block{
                align-items: center;
            }
            .helpgent-media-filter__media{
                padding-bottom: 30px;
            }
        }
        &__media-item{
            &:last-child{
                margin-bottom: 50px;
            }
            .helpgent-media-item-content{
                margin: 10px 0 20px;
                .helpgent-video-conversation{
                    position: relative;
                    border-radius: 20px;
                    text-align: center;
                    &::before{
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: calc(100% - 3px);
                        left: 0;
                        top: 0;
                        background: rgba(0,0,0,0.3);
                        border-radius:20px;
                    }
                    video{
                        border-radius: 20px;
                        width: 100%;
                        max-height: 260px;
                    }
                    .helpgent-video-conversation__toggle{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        background: #fff;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        visibility: hidden;
                        opacity: 0;
                        transition: var(--helpgent-transition);
                        svg{
                            width: 20px;
                            height: 20px;
                            path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                    }
                    .helpgent-video-conversation__download{
                        position: absolute;
                        right: 15px;
                        bottom: 15px;
                        width: 28px;
                        height: 28px;
                        border-radius: 7px;
                        background: #fff;
                        z-index: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: var(--helpgent-transition);
                        svg{
                            width: 12px;
                            height: 12px;
                            path{
                                fill: var(--helpgent-color-light-gray);
                                transition: var(--helpgent-transition);
                            }
                        }
                        &:hover{
                            background: var(--helpgent-color-primary);
                            svg path{
                                fill: #fff;
                            }
                        }
                    }
                    .helpgent-video-conversation__visualization{
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        z-index: 1;
                        svg{
                            width: 18px;
                            height: 18px;
                            path{
                                fill: #fff;
                                transition: var(--helpgent-transition);
                            }
                        }
                        &:hover{
                            svg path{
                                fill: var(--helpgent-color-primary);
                            }
                        }
                    }
                    &:hover{
                        .helpgent-video-conversation__toggle{
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                .helpgent-voice-conversation{
                    background: var(--helpgent-color-bg-light);
                    border-radius: 20px;
                    margin-bottom: 5px;
                    .helpgent-voice-conversation__player{
                        align-items: center;
                        height: 42px;
                        padding: 10px;
                    }
                    .helpgent-voice-conversation__toggle{
                        width: 22px;
                        height: 22px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: var(--helpgent-color-primary);
                        margin-right: 10px;
                        svg{
                            width: 9px;
                            height: 9px;
                            path{
                                fill: var(--helpgent-color-white);
                            }
                        }
                    }
                    .helpgent-audio-range{
                        flex: 1;
                    }
                    .helpgent-voice-conversation__control{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 10px;
                        padding: 0 10px 10px;
                        .helpgent-voice-conversation__download{
                            width: 28px;
                            height: 28px;
                            background: #fff;
                            border-radius: 7px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: var(--helpgent-transition);
                            svg{
                                width: 12px;
                                height: 12px;
                                transition: var(--helpgent-transition);
                            }
                            &:hover{
                                background: var(--helpgent-color-primary);
                                svg path{
                                    fill: #fff;
                                }
                            }
                        }
                    }
                }
                .helpgent-media-reveal{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 6px;
                    color: var(--helpgent-color-primary);
                    cursor: pointer;
                    font-size: 12px;
                    svg{
                        width: 12px;
                        path{
                            fill: var(--helpgent-color-primary);
                        }
                    }
                }
            }
        }
        &__media{
            .helpgent-loading{
                display: block;
                padding-bottom: 100px;
                text-align: center;
            }
        }
    }
`;

export { DrawerStyle };
