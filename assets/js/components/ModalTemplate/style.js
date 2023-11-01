import Styled from 'styled-components';

const ModalStyle = Styled.div`
    &.helpgent-modal.helpgent-default-modal {
        border-radius: 20px;
        overflow: hidden;
        width: 500px;
        .helpgent-modal-header {
            display: flex;
            background: #efefef;
            padding: 10px 15px;
        }

        .helpgent-modal-header-title-area {
            flex-grow: 1;
        }

        .helpgent-modal-header-title {
            padding: 20px 30px;
            font-size: 18px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
            margin: 0;
        }

        .helpgent-modal-header-action-area {
            display: flex;
            align-items: center;
            justify-content: end;
            padding-left: 30px;
        }

        .helpgent-modal-action-close-link {
            display: block;
            cursor: pointer;
            text-decoration: none;
        }

        .helpgent-modal-action-close-icon {
            display: flex;
            width: 26px;
            height: 26px;
            border-radius: 100%;
            background: #d5d5d5;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            padding: 8px;
        }

        .helpgent-modal-body {
            display: block;
            background: #fff;
            padding: 20px;
        }
    }
`;

export { ModalStyle };
