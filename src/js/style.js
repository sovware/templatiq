import Styled from 'styled-components';

const QuestionPreviewStyle = Styled.div`
    flex: 1 1 0%;
    overflow: auto;
    margin-top: 20px;
    position: relative;
    &.helpgent-client{
        .helpgent-question-element{
            .helpgent-question-element__uploader,
            input,
            textarea,
            input:not(.helpgent-form-group__element--date){
                pointer-events: all;
            }
        }
        .helpgent-open-ended-question-types .helpgent-open-ended-btn{
            pointer-events: all;
        }
        .helpgent-select-picture-single__caption{
            cursor: pointer;
        }
    }

    &.helpgent-question-element-wrapper--picture_select{
        .helpgent-question-element__action{
            .helpgent-form-group{
                margin-bottom: 0;
            }
        }
    }
    &.helpgent-question-element-wrapper--open_ended{

    }

    &.helpgent-question-element-wrapper--address,
    &.helpgent-question-element-wrapper--contact_info{
        .helpgent-form-group{
            margin-bottom: 24px;
        }
        .helpgent-form-group--last{
            margin-bottom: 0;
            + .helpgent-form-group{
                margin-top: 24px;
            }
        }
    }

    .helpgent-question-element{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        padding: 25px 0 45px 0;
        min-height: calc(100% - 68px);
        .helpgent-question-element__label-text{
            text-align: left;
        }
        &.helpgent-question-textField{
            //padding-left: 40px;
            //padding-right: 40px;
            .helpgent-form-group{
                position: relative;
                &:not(:last-child){
                    margin-bottom: 16px;
                }
                .helpgent-file-upload{
                    input{
                        display: none;
                    }
                }
                .helpgent-file-uploader{
                    font-size: 13px;
                    font-weight: 500;
                    width: fit-content;
                    border-radius: 6px;
                    border: 0px none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    min-height: 36px;
                    padding: 2px 10px;
                    cursor: pointer;
                    background-color: var(--helpgent-color-bg-gray);
                    gap: 8px;
                }
            }
            .helpgent-btn-next{
                justify-content: center;
            }
        }
        &.helpgent-question--end{
            align-items: center;
            max-width: 600px;
            margin: 0 auto;
            .block-editor-rich-text__editable{
                text-align: center;
            }
            [data-rich-text-placeholder]:after{
                text-align: center;
            }
            .helpgent-question-element__label{
                margin-bottom: 15px;
            }
            .helpgent-question-element__text{
                width: 100%;
                box-sizing: border-box;
            }
            .helpgent-question-element__action{
                margin-top: 40px;
                width: 100%;
                display: flex;
                justify-content: center;
                box-sizing: border-box;
            }
            .helpgent-btn-external{
                padding: 0 23%;
            }
            .helpgent-question-element__label-text{
                text-align: center;
                line-height: 1.2;
                p{
                    font-size: 30px;
                }
            }
            .helpgent-question-element__description-text{
                text-align: center;
                p{
                    font-size: 16px;
                }
            }
        }
        input.components-form-toggle__input{
            pointer-events: all !important;
        }
        input:not(.helpgent-form-group__element--date),
        textarea,
        .helpgent-question-element__uploader{
            pointer-events: none;
        }
        .helpgent-uploaded-files{
            &:empty{
                display: none;
            }
            .helpgent-uploaded-file{
                background: var(--helpgent-color-bg-light);
                border-radius: 10px;
                padding: 10px 50px 10px 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                position: relative;
                margin-top: 10px;
                &:not(:last-child){
                    margin-bottom: 10px;
                }
                &.helpgent-uploaded-file--uploading{
                    padding: 12px 12px 12px 15px;
                    .helpgent-uploaded-file-meta{
                        flex: 1;
                    }
                }
                &.helpgent-uploaded-file-has-error{
                    flex-wrap: wrap;
                    .helpgent-uploaded-file-meta{
                        flex: 1;
                    }
                }
                .helpgent-uploaded-file-thumbnail{
                    line-height: 0;
                    min-width: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg{
                        width: 25px;
                        height: 25px;
                    }
                    img,
                    video{
                        width: 34px;
                        height: 34px;
                        object-fit: cover;
                        border-radius: 6px;
                    }
                }
                .helpgent-uploaded-file-meta{
                    .helpgent-uploaded-file-meta-title{
                        word-wrap: break-word;
                        word-break: break-word;
                        font-size: 13px;
                        margin: 0 0 7px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        line-height: 1;
                        color: var(--helpgent-color-dark);
                        .helpgent-uploaded-file-meta-subtitle{
                            min-width: 60px;
                            display: block;
                            line-height: 1;
                        }
                    }
                    .helpgent-uploaded-file-meta-subtitle{
                        font-size: 10px;
                        color: var(--helpgent-color-light-gray);
                        margin: 0;
                        line-height: 1;
                        .helpgent-status{
                            display: block;
                            color: var(--helpgent-color-danger);
                        }
                    }
                    .helpgent-upload-progress{
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        .helpgent-upload-progress-bar-wrap{
                            flex: 1;
                            height: 6px;
                            border-radius: 30px;
                            background: var(--helpgent-color-bg-deep);
                            position: relative;
                            .helpgent-upload-progress-bar{
                                position: absolute;
                                left: 0;
                                top: 0;
                                height: 100%;
                                background: var(--helpgent-color-primary);
                                border-radius: 30px;
                                transition: var(--helpgent-transition);
                            }
                        }
                        .helpgent-upload-progress-bar-label{
                            color: var(--helpgent-color-primary);
                            font-size: 10px;
                            font-weight: 500;
                        }
                        .helpgent-upload-progress-bar-action{
                            a{
                                line-height: 0;
                                display: block;
                            }
                            svg{
                                width: 10px;
                                height: 10px;
                                path{
                                    fill: var(--helpgent-color-gray);
                                }
                            }
                        }
                    }
                }
                .helpgent-uploaded-file-meta-status{
                    flex: 0 0 100%;
                    font-size: 11px;
                    color: var(--helpgent-color-danger);
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                }
                .helpgent-uploaded-file-action{
                    position: absolute;
                    right: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                    a{
                        width: 28px;
                        height: 28px;
                        border-radius: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #fff;
                        transition: var(--helpgent-transition);
                        text-decoration: none;
                        svg{
                            width: 10px;
                            height: 10px;
                            transition: var(--helpgent-transition);
                        }
                        &:hover{
                            background: var(--helpgent-color-danger);
                            svg path{
                                fill: #fff;
                            }
                        }
                    }
                    .helpgent-file-deleting{
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        border: 2px solid var(--helpgent-color-gray);
                        border-bottom: 2px solid transparent;
                        animation: helpgent-spin 2s linear infinite;
                        display: block;
                    }
                    @keyframes helpgent-spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                }
            }
        }

        &.helpgent-question-element--open-ended{
            justify-content: flex-start;
            //height: 100%;
            .helpgent-question-element__text{
                align-self: flex-start;
                margin-bottom: 0;
                width: 100%;
                box-sizing: border-box;
                .helpgent-question-element__label{
                    margin-bottom: 4px;
                    .block-editor-rich-text__editable{
                        line-height: 1.5;
                    }
                    [data-rich-text-placeholder]{
                        &:after{
                            line-height: 1.5;
                            text-align: start;
                        }
                    }

                }
            }
            .helpgent-question-element__action{
                margin-top: auto;
                margin-bottom: auto;
                width: 100%;
                box-sizing: border-box;
            }
        }
    }
    .helpgent-question-element__icon{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--helpgent-color-success);
        margin-bottom: 30px;
    }

    .helpgent-question-element__social{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 20px 0;
        padding: 0 30px;
    }
    .helpgent-question-element__social-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        cursor: pointer;
        border-radius: 8px;
        &.helpgent-question-element__social-facebook{
            background-color: #2D75ED;
        }
        &.helpgent-question-element__social-twitter{
            background-color: #3CA2F8;
        }
        &.helpgent-question-element__social-youtube{
            background-color: #F30104;
        }
        &.helpgent-question-element__social-instagram{
            background-color: #BF3AD4;
        }
    }
    .helpgent-question-element__label{
        margin-bottom: 10px;
        .block-editor-rich-text__editable{
            font-size: var(--helpgent-label-font-size);
            font-weight: var(--helpgent-label-font-weight);
            color: var(--helpgent-label-color);
            word-wrap: break-word;
            word-break: break-word;
            text-align: start;
            line-height: 1.2;
        }
        [data-rich-text-placeholder]{
            &:after{
                font-size: var(--helpgent-label-font-size);
                font-weight: var(--helpgent-label-font-weight);
                color: var(--helpgent-color-dark);
            }
        }
    }
    .ql-container.ql-snow{
        border: 0 none;
    }

    .block-editor-rich-text__editable{
        margin: 0;
        &:focus{
            outline: none;
            box-shadow: 0 0;
            border: 0 none;
        }
    }
    [data-rich-text-placeholder]{
        &:after{
            font-style: italic;
            inset-inline-start: 0;
            opacity: .4;
        }
    }
    .helpgent-question-element__description{
        .block-editor-rich-text__editable{
            font-size: var(--helpgent-description-font-size);
            font-weight: var(--helpgent-description-font-weight);
            color: var(--helpgent-description-color);
            word-wrap: break-word;
            word-break: break-word;
            text-align: start;
        }
        [data-rich-text-placeholder]{
            &:after{
                font-size: var(--helpgent-description-font-size);
                font-weight: var(--helpgent-description-font-weight);
                color: var(--helpgent-color-light-gray);
                text-align: start;
                width: 100%;
                height: 100%;
            }
        }
    }
    .helpgent-question-element__text,
    .helpgent-question-element__action{
        padding: 0 40px;
    }
    .helpgent-question-element__text{
        margin-bottom: 20px;
    }
    .helpgent-question-element__action{
        text-align: start;
        .helpgent-btn{
            min-height: 48px;
            font-size: var(--helpgent-btn-font-size);
            border: 1px solid var(--helpgent-btn-color);
            border-radius: var(--helpgent-btn-radius);
            color: var(--helpgent-btn-text-color);
            background-color: var(--helpgent-btn-color);
            word-wrap: break-word;
            word-break: break-word;
            &:not(:hover):not(:active):not(.has-background) {
                color: var(--helpgent-btn-text-color);
                background-color: var(--helpgent-btn-color);
                border-color: var(--helpgent-btn-color);
            }
            &:hover {
                color: var(--helpgent-btn-color);
                background-color: var(--helpgent-color-white);
                svg path {
                    fill: var(--helpgent-btn-color);
                }
            }
        }
        .helpgent-btn-start{
            padding: 0 30.5px;
        }
        .helpgent-btn-next{
            padding: 0 28.75px;
        }
        .helpgent-btn-submit{
            width: 100%;
            justify-content: center;
        }
        .helpgent-form__element{
            min-height: 44px;
            padding: 7px 16px 8px;
            border-radius: var(--helpgent-btn-radius);
            background-color: var(--helpgent-input-background);
        }
        textarea.helpgent-form-group__element{
            resize: none;
            min-height: 100px;
            padding-top: 11px;
            padding-bottom: 15px;
            font-family: inherit;
        }
        .helpgent-question-element__option-count{
            display: block;
            width: 100%;
            text-align: end;
            margin-top: 10px;
            font-size: 13px;
            color: var(--helpgent-color-light-gray);
        }
        .helpgent-single-select,
        .helpgent-multi-select{
            display: flex;
            align-items: center;
            margin-inline-start: -20px;
            .helpgent-option-number{
                font-size: 13px;
                font-weight: 400;
                color: var(--helpgent-color-extra-light);
                display: block;
                width: 20px;
            }
        }
        .helpgent-multi-select--last,
        .helpgent-single-select--last{
            margin-bottom: 0;
        }
        .helpgent-question-element__item{
            &:not(:last-child){
                margin-bottom: 20px;
                border-bottom: 1px solid var(--helpgent-color-border-light);
            }
        }
        &--alter{
            .helpgent-single-select,
            .helpgent-multi-select{
                margin-inline-start: 0;
            }
        }
    }
    .helpgent-form-icon-left{
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-extra-light)
            }
        }
        .helpgent-form__element{
            padding-inline-start: 40px;
        }
    }
    .helpgent-question-time{
        display: flex;
        align-items: center;
        margin-top: 20px;
        svg{
            margin-inline-end: 8px;
        }
        span{
            font-size: 13px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
        }
        .helpgent-estimated-time{
            display: inline-block;
            margin-left: 5px;
        }
    }

    .helpgent-form-group{
        margin-bottom: 10px;
        &--inline{
            display: flex;
            align-items: center;
            .helpgent-form-group__element{
                width: auto;
            }
        }
    }

    .helpgent-form-group__element{
        min-height: 44px;
        border-radius: 10px;
    }
    .helpgent-form-group__label{
        margin-bottom: 10px;
        word-wrap: wrap;
        word-break: break-word;
    }
    .helpgent-select__control{
        height: 44px;
        border-radius: 10px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .helpgent-select__placeholder{
        font-size: 14px;
        font-weight: 400;
        color: var(--helpgent-color-gray);
    }
    .helpgent-select__single-value{
        font-size: 14px;
        font-weight: 500;
        color: var(--helpgent-color-dark);
    }
    .helpgent-form__element-inline--yes-no-toggler{
        padding: 12px 16px;
        border-radius: 10px;
        background: var(--helpgent-color-bg-light);
        width: 100%;
        max-width: 300px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-sizing: border-box;
        .helpgent-toggle{
            display: flex;
        }
        .components-form-toggle{
            display: inline-flex;
        }
        .helpgent-form__label{
            font-size: 13px;
            display: block;
        }
    }

    //Picture Select Question
    .helpgent-select-picture-list{
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 15px;
    }
    .helpgent-select-picture-single{
        width: 160px;
        border: 2px solid transparent;
        border-radius: 12px;
        padding: 6px;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        box-shadow: 0 0 0 1px var(--helpgent-color-bg-gray);
        &--selected{
            border-color: var(--helpgent-color-primary);
            box-shadow: none;
        }
        &__remove{
            width: 22px;
            height: 22px;
            background: var(--helpgent-color-danger);
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset-inline-end: -9px;
            top: -11px;
            border-radius: 50%;
            visibility: hidden;
            opacity: 0;
            transition: var(--helpgent-transition);
            svg{
                path{
                    fill: #fff;
                }
            }
        }
        &__img{
            position: relative;
            img{
                border-radius: 10px;
                width: 100%;
                height: 120px;
                object-fit: cover;
            }
        }
        &__action{
            position: absolute;
            inset-inline-end: 8px;
            top: 8px;
            display: flex;
            align-items: center;
            gap: 5px;
            visibility: hidden;
            opacity: 0;
            transition: var(--helpgent-transition);
            &__btn{
                padding: 0;
                margin: 0;
                background: #fff;
                border-radius: 6px;
                width: 30px;
                height: 30px;
                align-items: center;
                justify-content: center;
                border: 0 none;
                display: flex;
                cursor: pointer;
                transition: var(--helpgent-transition);
                svg{
                    width: 13px;
                    path{
                        transition: var(--helpgent-transition);
                        fill: var(--helpgent-color-light-gray);
                    }
                }
                &:hover{
                    svg{
                        path{
                            fill: #fff;
                        }
                    }
                }
                &--replace{
                    &:hover{
                        background: var(--helpgent-color-primary);
                    }
                }
                &--remove{
                    &:hover{
                        background: var(--helpgent-color-danger);
                    }
                }
            }
        }
        &__caption{
            font-size: 13px;
            margin-top: 5px;
            color: var(--helpgent-color-gray);
            word-break: break-all;
            word-wrap: break-word;
            cursor: text;
        }
        &--add-new{
            border: 2px dashed var(--helpgent-color-border-light);
            border-width: 2px;
            min-height: 166px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: none;
        }
        &__add-picture{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0;
            margin: 0;
            cursor: pointer;
            background: none;
            border: 0 none;
            color: var(--helpgent-color-gray);
            font-size: 13px;
            &::after{
                position: absolute;
                content: '';
                inset-inline-start: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
            span{
                display: block;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                margin-bottom: 10px;
                background: var(--helpgent-color-extra-light);
                svg{
                    width: 10px;
                    path{
                        fill: #fff;
                    }
                }
            }
        }
        &__selected{
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: var(--helpgent-color-primary);
            top: 5px;
            right: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                width: 12px;
                path{
                    fill: #fff;
                }
            }
        }
        &:hover{
            .helpgent-select-picture-single__remove,
            .helpgent-select-picture-single__action
            {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    //Open-ended question
    .helpgent-question-element__chat-title,
    .helpgent-question-element__chat-title-text{
        font-size: var(--helpgent-chatTtile-font-size);
        font-weight: var(--helpgent-chatTtile-font-weight);
        color: var(--helpgent-chatTtile-color);
        margin: 0;
        word-break: break-word;
        word-wrap: break-word;
        margin-bottom: 16px;
        .block-editor-rich-text__editable,
        [data-rich-text-placeholder]:after{
            font-size: var(--helpgent-chatTtile-font-size);
            font-weight: var(--helpgent-chatTtile-font-weight);
            color: var(--helpgent-chatTtile-color);
            word-break: break-word;
            word-wrap: break-word;
        }
        p{
            font-size: var(--helpgent-chatTtile-font-size);
            font-weight: var(--helpgent-chatTtile-font-weight);
            color: var(--helpgent-chatTtile-color);
            margin: 0;
            word-break: break-word;
            word-wrap: break-word;
        }
    }
    .helpgent-question-element__footer,
    .helpgent-question-element__footer-text{
        margin-top: 12px;
        font-size: var(--helpgent-footerText-font-size);
        font-weight: var(--helpgent-footerText-font-weight);
        color: var(--helpgent-footerText-color);
        .block-editor-rich-text__editable,
        [data-rich-text-placeholder]:after{
            font-size: var(--helpgent-footerText-font-size);
            font-weight: var(--helpgent-footerText-font-weight);
            color: var(--helpgent-footerText-color);
            word-break: break-word;
            word-wrap: break-word;
        }
        p{
            font-size: var(--helpgent-footerText-font-size);
            font-weight: var(--helpgent-footerText-font-weight);
            color: var(--helpgent-footerText-color);
            margin: 0;
        }
    }
    .helpgent-open-ended-question-types{
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        .helpgent-open-ended-btn{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--helpgent-btn-text-color);
            background: var(--helpgent-btn-color);
            border-radius: var(--helpgent-btn-radius);
            min-width: 85px;
            min-height: 85px;
            border: 0 none;
            cursor: pointer;
            pointer-events: none;
            &:focus{
                outline: 0;
                border: 0 none;
            }
            svg{
                width: 24px;
                path{
                    fill: var(--helpgent-btn-text-color);
                }
            }
            span{
                font-size: var(--helpgent-btn-font-size);
                font-weight: 500;
                margin-top: 12px;
                line-height: 1;
                color: var(--helpgent-btn-text-color);
                text-transform: capitalize;
            }
        }
    }

    //Rating Question
    .helpgent-rating-wrapper{
        display: flex;
        align-items: center;
        gap: 6px;
        .helpgent-rating-single{
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            svg{
                width: 24px;
                height: 24px;
            }
            .helpgent-rating-value{
                display: block;
                margin-top: 8px;
                font-size: 14px;
                color: var(--helpgent-color-gray);
            }
            &--selected{
                svg{
                    path, ellipse{
                        fill: var(--helpgent-color-primary);
                    }
                }
            }
        }
    }
    .helpgent-btn-back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        transition: var(--helpgent-transition);
        background-color: var(--helpgent-color-bg-gray);
        cursor: pointer;
        svg{
            width: 14px;
            height: 14px;
            path{
                fill: var(--helpgent-color-gray);
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
`;

const SingleSelectStyle = Styled.div`
    line-height: 1.25;
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='radio']{
        display: none;
        &:checked {
            & + .helpgent-single-select__option{
                font-weight: 500;
                color: var(--helpgent-color-dark);
                &:before{
                    border: 5px solid var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-single-select__option{
        position: relative;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        min-height: 18px;
        display: flex;
        align-items: center;
        max-width: 290px;
        background-color: var(--helpgent-color-bg-light);
        color: var(--helpgent-color-gray);
        font-size: 14px;
        &:before{
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            inset-inline-start: 24px;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 2px solid #a2a2a2;
            z-index: 10;
            box-sizing: border-box;
        }
    }
`;
const MultiSelectStyle = Styled.div`
    &:not(last-child){
        margin-bottom: 10px;
    }
    input[type='checkbox']{
        display: none;
        &:checked {
            & + .helpgent-multi-select__option{
                svg{
                    display: block;
                }
                &:before{
                    border-color: var(--helpgent-color-primary);
                    background-color: var(--helpgent-color-primary);
                }
            }
        }
    }
    .helpgent-multi-select__option{
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 14px 15px 14px 45px;
        width: 100%;
        max-width: 290px;
        min-height: 18px;
        background-color: var(--helpgent-color-bg-light);
        font-size: 14px;
        &:before{
            position: absolute;
            inset-inline-start: 15px;
            width: 18px;
            height: 18px;
            border-radius: 5px;
            background-color: transparent;
            content: '';
            border: 2px solid var(--helpgent-color-extra-light);
            top: 50%;
            transform: translateY(-50%);
            box-sizing: border-box;
        }
        svg{
            position: absolute;
            width: 8px;
            height: 8px;
            inset-inline-start: 20px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
`;

const CountryDialerControl = Styled.div`
    .helpgent-select__control{
        min-height: 44px;
    }
    .helpgent-select__menu{
        min-width: 220px;
        padding: 8px;
    }
    .helpgent-select__option{
        font-size: 13px;
        padding: 4px 5px;
    }
    .helpgent-select__single-value{
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;
        margin: 0 12px 0 0;
    }
    .helpgent-select__indicator{
        padding: 0 10px 0 0;
        svg{
            width: 18px;
            height: 18px;
        }
    }
    .helpgent-form-group--inline{
        gap: 8px;
        flex-wrap: nowrap;
        .helpgent-select{
            width: 80px;
        }
        .helpgent-form-group__element{
            width: 100%;
        }
    }
    .helpgent-form-group__element{
        flex: 1;
    }
    .helpgent-form-group__dialer{
        position: relative;
        flex: 1;
        .helpgent-form-group__dialer__code{
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            font-weight: 500;
        }
        .helpgent-form-group__element{
            padding-left: 66px;
            width: 100% !important;
        }
    }
    .helpgent-form-group-phone{
        display: flex;
        gap: 10px;
        width: 100%;
    }
`;

const ColorPickerStyle = Styled.div`
    position: relative;
    .helpgent-color-picker__trigger{
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    input[type=color]{
        position: absolute;
        flex: none;
        appearance: none;
        padding: 0;
        border-radius: 50%;
        opacity: 0;
        cursor: pointer;
        z-index: 10;
        width: 100%;
        height: 100%;
    }
`;

const MediaPreviewStyle = Styled.div`
    flex: 1 1 0%;
    overflow: hidden;
    position: relative;
    .helpgent-media-preview{
        height: 100%;
        position: relative;
        max-height: 550px;
        &:hover{
            .helpgent-video-control{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .helpgent-media-src{
        height: 100%;
        &--loading{
            position: relative;
            &:before{
                position: absolute;
                content: '';
                left: 50%;
                top: 50%;
                width: 30px;
                height: 30px;
                border: 2px solid var(--helpgent-color-dark);
                border-radius: 50%;
                border-top-color: transparent;
                animation: helpgentSpinner 900ms infinite linear forwards;
            }
            .helpgent-media-src__video{
                display: none;
            }
        }
    }
    .helpgent-media-empty{
        width: 100%;
        height: 100%;
        border-radius: 20px 0 0 20px;
        background-color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        span{
            color: #565656;
            font-size: 14px;
        }
        svg{
            width: 80px;
            height: 80px;
            path{
                fill: #565656;
            }
        }
    }
    .helpgent-media-src__image{
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
            border-radius: 20px 0 0 20px;
        }
    }
    .helpgent-media-src__video{
        height: 100%;
        video{
            width: 100%;
            height: 100%;
            border-radius: 20px 0 0 20px;
            object-fit: cover;
        }
    }
    .helpgent-media-src__image,
    .helpgent-media-src__video{
        position: relative;
        animation: fadeIn 0.4s ease-in;
        img,
        video{
            animation: fadeIn 0.4s ease-in;
            transition: 0.4s ease;
        }
        .helpgent-media-src__overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: var(--helpgent-overlay-color);
            opacity: var(--helpgent-overlay-opacity);
            border-radius: 0;
            animation: fadeIn 0.4s ease-in;
        }
    }
    .helpgent-video-visualization{
        position: absolute;
        inset-inline-end: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        z-index: 1;
        &__timer{
            color: #fff;
            font-size: 12px;
            font-weight: 600;
            display: block;
        }
        &__fullScreen{
            display: block;
            line-height: 0;
        }
    }
    .helpgent-video-control{
        position: absolute;
        width: 76px;
        height: 76px;
        border-radius: 50%;
        inset-inline-start: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--helpgent-transition);
        z-index: 2;
        svg{
            width: 20px;
            height: 20px;
            path{
                fill: #000;
            }
        }
    }
    .helpgent-media-action{
        position: absolute;
        inset-inline-start: 20px;
        top: 20px;
        display: flex;
        align-items: center;
        gap: 6px;
        &__item{
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(0,0,0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--helpgent-transition);
            svg{
                width: 15px;
                height: 15px;
                path{
                    fill: #fff;
                }
            }
            &:hover{
                background: #000;
            }
        }
    }
    .helpgent-video-visualization__fullScreen{
        cursor: pointer;
    }
`;

const SearchableDropdownStyle = Styled.div`

`;

const LayoutStyle = Styled.div`
    padding: 30px;
    display: flex;
    @media only screen and (max-width: 400px){
        padding: 15px;
    }
    aside{
        width: 350px;
        height: calc(100vh - 100px);
        margin-right: 30px;
        @media only screen and (max-width: 1199px){
            width: 250px;
        }
        &.helpgent-sidebar--active{
            display: block !important;
            width: 100%;
            margin-right: 0;
            height: 100%;
        }
    }
    .helpgent-sidebar__top{
        margin-bottom: 17px;
        min-height: 140px;
    }
    .helpgent-sidebar__back{
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        color: var(--helpgent-color-gray);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--helpgent-transition);
        svg{
            width: 12px;
            height: 12px;
            path{
                fill: var(--helpgent-color-gray);
                transition: var(--helpgent-transition);
            }
        }
        &:hover{
            color: var(--helpgent-color-primary);
            svg path{
                fill: var(--helpgent-color-primary);
            }
        }
    }
    .helpgent-sidebar__content{
        margin: 20px 0 25px;
        align-items: center;
    }
    .helpgent-sidebar__question{
        align-items: center;
        min-height: 50px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 10px;
        }
        .helpgent-sidebar__question-title{
            font-size: 18px;
            font-weight: 600;
            line-height: 1.5;
            margin-left: 15px;
            color: var(--helpgent-color-dark);
        }
    }
    .helpgent-form-color-box{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        flex: none;
    }
    .helpgent-sidebar__action{
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background-color: var(--helpgent-color-white);
            transition: var(--helpgent-transition);
            svg{
                width: 16px;
                height: 16px;
                path{
                    fill: var(--helpgent-color-gray);
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

    }
    .helpgent-sidebar__navigation-wrap{
        justify-content: space-between;
        align-items: center;
    }
    .helpgent-sidebar__quick-action{
        display: flex;
        align-items: center;
        gap: 7px;
        margin-right: -7.5px;
    }
    .helpgent-sidebar__quick-action-link{
        &.helpgent-sidebar__quick-action-refresh{
            padding: 0 7.5px;
            svg path{
                transition: var(--helpgent-transition);
            }
            &:hover{
                svg path{
                    fill: var(--helpgent-color-gray);
                }
            }
        }
        .helpgent-dropdown__toggle{
            padding: 0 7.5px;
            &:hover{
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
        }
        .helpgent-dropdown__content{
            width: 180px;
            padding: 3px 0;
            right: 0;
            a{
                color: var(--helpgent-color-gray);
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
                &:hover{
                    background: none;
                }
                .helpgent-dropdown-item-icon{
                    margin: 0;
                }
                svg{
                    path{
                        fill: var(--helpgent-color-gray);
                    }
                }
            }
        }
    }
    .helpgent-sidebar__navigation{
        display: flex;
        margin: -7.5px;
        a{
            position: relative;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            margin: 7.5px;
            color: var(--helpgent-color-light-gray);
            &.helpgent-active{
                color: var(--helpgent-color-primary);
                &:after{
                    background-color: var(--helpgent-color-primary);
                }
            }
            &:hover{
                color: var(--helpgent-color-primary);
            }
            &:after{
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 100%;
                height: 2px;
                border-radius: 10px;
                content: '';
                background-color: transparent;
            }
        }
    }
    .helpgent-sidebar__archive{
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
        .helpgent-sidebar__archive-title{
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-primary);
            display: flex;
            align-items: center;
            gap: 8px;
            svg{
                path{
                    fill: var(--helpgent-color-primary);
                }
            }
        }
        .helpgent-sidebar__archive-remove{
            cursor: pointer;
            width: 30px;
            height: 30px;
            background: var(--helpgent-color-light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            svg{
                width: 10px;
                height: 10px;
                path{
                    fill: #fff;
                }
            }
        }
    }
    main{
        flex: 1;
        height: calc(100vh - 100px);
        border-radius: 20px;
        background-color: var(--helpgent-color-white);
        display: none;
        @media only screen and (max-width: 1199px){
            width: 400px;
        }
        &.helpgent-conversation-main--active{
            width: 100%;
            display: block;
            .helpgent-user-view{
                .helpgent-back-user-list{
                    display: block;
                    margin-right: 15px;
                    cursor: pointer;
                }
            }
        }
    }
`;

const ContentLoadingStyle = Styled.div`
    &.helpgent-content-loading{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        max-width: 100%;
        min-height: 500px;
        padding: 30px;
        border-radius: 10px;
        margin: 15px;
        box-sizing: border-box;
        background-color: var(--helpgent-color-white);
        flex: 1 1 0%;
        .helpgent-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            background: #f6f7f8;
            background-image: -webkit-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: -o-linear-gradient(left,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-image: linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: shimmerEffect;
            animation-timing-function: linear;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
    }
`;

const InlineFieldStyle = Styled.div`
    &.helpgent-field-element--inline{
        .helpgent-form-group--has-extension{
            .helpgent-select{
                min-width: auto;
            }

            .helpgent-select__option{
                padding: 4px;
            }

            .helpgent-select__control{
                padding: 0 4px;
                background-color: var(--helpgent-color-white);
            }
            .helpgent-select__value-container{
                width: 25px;
            }
        }
        .helpgent-form-group__extension{
            max-width: 60px;
            .helpgent-select__menu{
                padding: 6px;
            }
            .helpgent-select__control{
                height: 26px;
                min-height: 26px;
            }
            .helpgent-select .helpgent-select__indicator{
                height: auto;
            }
        }
        .helpgent-select {
            .helpgent-select__value-container{
                padding: 0;
            }
            .helpgent-select__indicator{
                width: 16px;
                height: 16px;
                padding-inline-end: 0;
            }
        }
    }
`;

const UserMediaStyle = Styled.div`
    .helpgent-user-block__left{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        img{
            max-width: 30px;
            border-radius: 50%;
        }
    }
    .helpgent-user-block__username{
        font-size: 15px;
        font-weight: 500;
        color: #030308;
        margin-right: 8px;
    }
    .helpgent-user-block__date-meta{
        color: var(--helpgent-color-light-gray);
        font-size: 13px;
    }
    .helpgent-user-block__content{
        p{
            font-size; 15px;
            font-weight: 400;
            color: var(--helpgent-color-gray);
            margin: 0;
        }
        .helpgent-user-block__content-attachment{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 5px;
        }
    }
`;
const ModalAlertStyle = Styled.div`
    padding: 84px 0 0;
    .helpgent-modal-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        background-color: var(--helpgent-color-bg-light);
        .helpgent-btn{
            margin: 0 5px;
        }
        &.helpgent-modal-filter-action{
            .helpgent-modal-action__cancel{
                background: transparent;
                border: 0 none;
                padding: 0;
                color: var(--helpgent-color-light-gray);
                &:hover{
                    color: var(--helpgent-color-dark);
                }
            }
        }
        &.helpgent-delete-alert-modal-action,
        &.helpgent-conversation-delete-action,
        &.helpgent-form-delete-alert-action,
        &.helpgent-response-delete-alert-action,
        &.helpgent-delete-tag-alert-action{
            justify-content: flex-end;
            .helpgent-btn{
                border-radius: 10px;
                min-height: 40px;
            }
        }
    }

    //filter modal
    .helpgent-modal-filter-inner{
        padding: 0 30px 30px;
        .helpgent-modal-filter__tags-label{
            font-size: 16px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin-bottom: 20px;
            display: block;
        }
        .helpgent-modal-filter__tags-list{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            max-height: 170px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .helpgent-modal-filter__tags-item{
            flex: 0 0 50%;
            margin-bottom: 18px;
            .helpgent-checkbox{
                display: flex;
                gap: 12px;
                label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--helpgent-color-gray);
                }
            }
        }
        .helpgent-show-more{
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
            margin-top: 0;
            text-decoration: underline;
            cursor: pointer;
            &--active{
                margin-top: 18px;
            }
        }
    }
    .helpgent-modal-action{}

    .helpgent-session-expired__content{
        margin-top: -84px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        h2{
            margin: 30px 0 20px;
            font-size: 24px;
            font-weight: 500;
            color: var(--helpgent-color-dark);
        }
        p{
            margin: 0 0 50px;
        }
    }
`;
const ProgressBarStyle = Styled.div`
    &.helpgent-progress-bar{
        width: 100%;
        height: 6px;
        position: relative;
        border-radius: 20px;
        background-color: var(--helpgent-color-bg-gray);
        .helpgent-progress-bar__status{
            display: block;
            height: 100%;
            width: 50%;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-size: 15px 15px;
            position: relative;
            overflow: hidden;
        }
        &.helpgent-progress-bar-dark{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-dark);
            }
        }
        &.helpgent-progress-bar-primary{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-primary);
            }
        }
        &.helpgent-progress-bar-success{
            .helpgent-progress-bar__status{
                background-color: var(--helpgent-color-success);
            }
        }
        &.helpgent-progress-bar-animate{
            .helpgent-progress-bar__status{
                background-image: linear-gradient(-45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
                animation: wpwaxProgressBar 1.5s linear infinite;
            }
        }
    }
`;
const CrudLayoutStyle = Styled.div`
    .helpgent-crud-header {
        align-items: center;
        margin-bottom: 30px;
        justify-content: space-between;
    }
    .helpgent-crud-header__left{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .helpgent-crud-header__title{
        font-size: 24px;
        font-weight: 500;
        line-height: 1.5;
        color: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
        .helpgent-count{
            color: var(--helpgent-color-light-gray);
            font-size: 18px;
            font-weight: 500;
        }
    }
    .helpgent-crud-header__right{
        width: 300px;
        .helpgent-form-group{
            margin: 0;
        }
        .helpgent-form-group__element{
            background: var(--helpgent-color-bg-deep);
            border-radius: 10px;
        }
    }
    .helpgent-crud-main{
        padding: 20px;
        border-radius: 12px;
        background-color: var(--helpgent-color-white);
        margin-bottom: 30px;
    }
`;
const HelpgentTableStyle = Styled.table`
    &.helpgent-table {
        display: table;
        border-collapse: collapse;
        width: 100%;
        text-align: start;
        border-spacing: 0;
        empty-cells: show;
        margin-bottom: 0;
        margin-top: 0;
        overflow: visible;

        thead {
            border-radius: 6px;
            border-bottom: 10px solid transparent;
            tr {
                background: #e8e8e8;
                border-radius: 10px;
                th {
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    padding: 16px 15px 10px;
                    text-align: start;
                    color: var(--helpgent-color-light-gray);
                    @media only screen and (max-width: 1399px){
                        padding: 16px 5px 10px;
                    }
                }
                @media only screen and (max-width: 1399px){
                    th:first-child{
                        padding-left: 15px;
                    }
                    th:last-child{
                        padding-right: 15px;
                    }
                }
            }
        }

        tbody {
            transition: var(--helpgent-transition);
            tr {
                transition: var(--helpgent-transition);
                &:hover {
                    background-color: var(--helpgent-color-bg-light);
                }

                td {
                    font-size: 14px;
                    font-weight: 500;
                    padding: 11px 15px;
                    @media only screen and (max-width: 1399px){
                        padding: 11px 5px;
                    }
                }

                @media only screen and (max-width: 1399px){
                    td:first-child{
                        padding-left: 15px;
                    }
                    td:last-child{
                        padding-right: 15px;
                    }
                }
            }
        }

        tr {
            th,
            td {
                display: table-cell;
                &:first-child {
                    border-radius: 10px 0 0 10px;
                }

                &:last-child {
                    border-radius: 0 10px 10px 0;
                }
            }
        }
    }
    .helpgent-table-action {
        display: flex;
        align-items: center;
        gap: 0 20px;
        @media only screen and (max-width: 1399px){
            gap: 0 10px;
        }
        .helpgent-btn{
            padding: 0 15px;
            min-height: 34px;
            font-size: 14px;
            font-weight: 500;
            gap: 8px;
            color: var(--helpgent-color-gray);
            svg{
                width: 14px;
                height: 14px;
                path{
                    fill: var(--helpgent-color-light-gray);
                    transition: var(--helpgent-transition);
                }
            }

            &:hover{
                background: var(--helpgent-color-dark);
                color: var(--helpgent-color-white);
                border-color: var(--helpgent-color-dark);
                svg path{
                    fill: var(--helpgent-color-white);
                }
            }
        }
        .helpgent-dropdown{
            line-height: 0;
            .helpgent-dropdown__toggle{
                height: 35px;
                padding: 0 10px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &.helpgent-dropdown-open{
                .helpgent-dropdown__toggle{
                    background: var(--helpgent-color-bg-deep);
                }
            }
            &__content{
                min-width: 240px;
                box-sizing: border-box;
                padding: 12px;
                li{
                    margin-bottom: 0;
                    a{
                        padding: 13px 15px;
                        gap: 12px;
                        font-weight: 500;
                        color: var(--helpgent-color-gray);
                    }
                    .helpgent-dropdown-item-icon{
                        line-height: 0;
                        margin: 0;
                    }
                    .helpgent-dropdown-item-icon svg{
                        width: 16px;
                        height: 16px;
                        path{
                            fill: var(--helpgent-color-light-gray);
                        }
                    }
                    &:hover{
                        a{
                            background: var(--helpgent-color-bg-gray);
                            color: var(--helpgent-color-dark);
                            svg{
                                path, circle{
                                    fill: var(--helpgent-color-dark);
                                }
                            }
                        }
                    }
                li:last-child{
                    border-top: 1px solid #e6e6e6;
                    a{
                        margin-top: 5px;
                    }
                }
            }
        }
    }
    .helpgent-table{
        &.helpgent-table-striped{
            background-color: var(--helpgent-color-white);
            thead {
                background-color: transparent;
                tr {
                    th{
                        padding: 10px 0;
                        border-bottom: 1px solid var(--helpgent-color-border-light);
                    }
                }
            }
            tbody{
                tr{
                    td{
                        padding: 10px 0;
                    }
                    &:not(:last-child){
                        td{
                            border-bottom: 1px solid var(--helpgent-color-border-light);
                        }
                    }
                }
            }
        }
    }
`;
const ChatBubbleStyle = Styled.div`
    cursor: pointer;
    &.helpgent-chat-bubble{
        position: absolute;
        bottom: var(--helpgent-bubble-offset-y);
        background: var(--helpgent-bubble-bg-color);
        border: 4px solid var(--helpgent-bubble-border-color);
        //transition: var(--helpgent-transition);
        box-shadow: var(--helpgent-bubble-box-shadow);
        overflow: hidden;
        box-sizing: border-box;
        .helpgent-chat-bubble__overlay-text{
            display: flex;
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 15px 28px;
            font-size: 15px;
            font-weight: 700;
            box-sizing: border-box;
            text-align: left;
            align-items: center;
            justify-content: center;
            word-break: break-word;
            word-wrap: break-word;
            z-index: 2;
            color: var(--helpgent-color-white);
            line-height: 1.2;

        }
        &--left{
            left: var(--helpgent-bubble-offset-x);
        }
        &--right{
            right: var(--helpgent-bubble-offset-x);
        }
        &--circle{
            border-radius: 50%;
        }
        &--small{
            width: 100px;
            height: 100px;
            .helpgent-chat-bubble__overlay-text{
                font-size: 13px;
                padding: 15px 18px;
            }
        }
        &--medium{
            width: 130px;
            height: 130px;
        }
        &--large{
            width: 150px;
            height: 150px;
            .helpgent-chat-bubble__overlay-text{
                font-size: 18px;
                padding: 15px 30px;
            }
        }
        &--boxed-horizontal{
            width: 180px;
            border-radius: 10px;
        }
        &--boxed-vertical{
            height: 180px;
            border-radius: 10px;
        }
        .helpgent-chat-bubble__background{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            left: 0;
            top: 0;
            &:after{
                position: absolute;
                content: '';
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border-radius: inherit;
                background: rgba(0,0,0,0.32);
            }
            &--image{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--video{
                video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--placeholder{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &--colored{
                &:after{
                    content: none;
                }
            }
        }
    }
`;
const PreviewCopyright = Styled.div`
    position: sticky;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    padding: 18px;
    box-sizing: border-box;
    background: rgba(255,255,255,0.85);
    border-radius: 0 0 20px 0;
    .helpgent-copyright__button{
        font-size: 12px;
        font-weight: 600;
        color: #707070;
        background: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 8px;
        transition: var(--helpgent-transition);
        height: 32px;
        text-decoration: none;
        padding: 0 14px;
        svg{
            width: 80px;
            height: 18px;
        }
        &:hover{
            background: #3a3a3a;
        }
    }
    &.helpgent-form__copyright--media{
        background: 0;
        position: absolute;
        z-index: 1;
    }
`;
const DeleteAlertStyle = Styled.div`
    padding: 0 30px 25px;
    .helpgent-delete-alert-text{
        p{
            font-size: 14px;
            color: var(--helpgent-color-gray);
            margin: 0 0 27px;
        }
    }
`;
const ProModalContentStyle = Styled.div`
    padding: 0 40px 40px;
    text-align: center;
    .helpgent-badge-extended{
        width: fit-content;
        line-height: 1.4;
        padding: 3px 6px;
        margin: 0 auto;
    }
    .helpgent-pro-modal__title{
        font-size: 22px;
        font-weight: 600;
        margin: 20px 0 18px;
        color: var(--helpgent-color-dark);
    }
    p{
        font-size: 15px;
        font-weight: 400;
        margin: 0 0 40px;
        color: var(--helpgent-color-text);
    }
    .helpgent-pro-modal__bottom{
        display: flex;
        flex-direction: column;
        button{
            border-radius: 10px;
            text-align: center;
            justify-content: center;
        }
        .helpgent-btn-link{
            font-size: 15px;
            font-weight: 500;
            background-color: transparent;
            box-shadow: 0 0;
            border: 0 none;
            margin-top: 15px;
            cursor: pointer;
            color: var(--helpgent-color-light-gray);
            &:hover{
                color: var(--helpgent-color-primary);
            }
        }
    }
`;

const PreviewDeviceControlStyle = Styled.div`
    margin-top: 40px;
    .helpgent-device-action{
        cursor: pointer;
        &.helpgent-active{
            svg{
                path{
                    fill: var(--helpgent-color-dark);
                }
            }
        }
    }
`;

const ChatFormStyle = Styled.div`
    &.helpgent-answer-loading{
        .helpgent-navigation,
        .helpgent-question-element-wrapper{
            user-select: none;
            opacity: .5;
        }
    }
    .helpgent-chatForm-back-btn,
    .helpgent-chatForm-close-btn{
        position: absolute;
        right: -10px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: var(--helpgent-color-dark);
        z-index: 2;
        svg{
            width: 10px;
            height: 10px;
            path{
                fill: var(--helpgent-color-white);
            }
        }
    }
    .helpgent-chatForm-back-btn{
        right: auto;
        left: 0;
        top: 0;
        background-color: var(--helpgent-color-white);
        width: 40px;
        height: inherit;
        border-radius: 20px 0 0 20px;
        background: var(--helpgent-color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        svg{
            width: 14px;
            path{
                fill: #fff;
            }
        }
    }
    .helpgent-question-element-wrapper--user_validation,
    .helpgent-question-element-wrapper--date,
    .helpgent-question-element-wrapper--long_text,
    .helpgent-question-element-wrapper--short_text,
    .helpgent-question-element-wrapper--email,
    .helpgent-question-element-wrapper--dropdown,
    .helpgent-question-element-wrapper--multi_select,
    .helpgent-question-element-wrapper--single_select{
        .helpgent-validate-danger{
            display: block;
        }
    }
`;

const SharePopupStyle = Styled.div`
    position: relative;
    .helpgent-share-popup{
        position: absolute;
        right: -85px;
        top: 50px;
        background: #fff;
        border-radius: 10px;
        padding: 12px;
        box-shadow: 0 0 15px rgba(0,0,0,0.15);
        width: 205px;
        box-sizing: border-box;
        &:before{
            position: absolute;
            content: '';
            width: 10px;
            height: 10px;
            background: #fff;
            left: 50%;
            top: -5px;
            transform: translateX(-50%) rotate(45deg);
        }
        input{
            border: 0 none;
            background: var(--helpgent-color-bg-gray);
            color: var(--helpgent-color-dark);
            border-radius: 5px;
            text-align: center;
            cursor: copy;
            font-size: 12px;
            font-weight: 400;
            width: 100%;
            &:focus{
                border: 1px solid var(--helpgent-color-dark);
                box-shadow: none;
                outline: 0;
            }
        }
    }
`;

export {
	QuestionPreviewStyle,
	SingleSelectStyle,
	MultiSelectStyle,
	CountryDialerControl,
	ColorPickerStyle,
	MediaPreviewStyle,
	SearchableDropdownStyle,
	ContentLoadingStyle,
	LayoutStyle,
	ModalAlertStyle,
	UserMediaStyle,
	InlineFieldStyle,
	ProgressBarStyle,
	CrudLayoutStyle,
	HelpgentTableStyle,
	ChatBubbleStyle,
	PreviewCopyright,
	DeleteAlertStyle,
	PreviewDeviceControlStyle,
	ProModalContentStyle,
	ChatFormStyle,
	SharePopupStyle,
};
