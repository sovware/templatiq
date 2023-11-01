import Styled from 'styled-components';

const MigrationConfirmationModalContentStyle = Styled.div`
    &.helpgent-media-migration-confirmation-modal-content {
        width: 100%;
        max-width: 350px;
        padding: 20px;
        box-sizing: border-box;

        .helpgent-media-migration-confirmation-modal-icons {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .helpgent-media-migration-confirmation-modal-drive-icon {
            display: block;
            width: 80px;
            height: 80px;
            background: #f2f2f2;
            border-radius: 50px;
            overflow: hidden;
            padding: 20px;
            box-sizing: border-box;
            margin: 10px 20px;

            &.icon-primary {
                background: #e7e5fd;
            }

            &.icon-warning-deep {
                background: #f281002b;
            }
        }

        .helpgent-media-migration-confirmation-modal-arrow-icon {
            display: block;
            width: 16px;

            svg path {
                fill: gray;
            }
        }

        .helpgent-media-migration-confirmation-modal-description {
            text-align: center;
            margin: 25px 0;
        }

        .helpgent-media-migration-confirmation-modal-actions {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .helpgent-media-migration-confirmation-modal-action {
            margin: 0 10px;
        }

        .helpgent-media-migration-confirmation-modal-status-message {
            margin: 30px 0 15px 0;
            text-align: center;
            color: red;
            border-radius: 8px;

            &.--has-error {
                color: red;
            }
        }
    }
`;

export default MigrationConfirmationModalContentStyle;
