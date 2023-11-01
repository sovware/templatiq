import Styled from 'styled-components';

const MigrationProgressStyle = Styled.div`
    &.helpgent-media-driver-migration-progress {
        background: #fff;
        border-radius: 20px;
        padding: 20px 25px;
        border-top: 3px solid var(--helpgent-color-warning-deep);
        margin-top: 25px;
        box-shadow: 0 5px 30px rgba(0,0,0,0.2);

        .helpgent-media-driver-migration-progress-header {
            margin: 5px 0 20px;   
        }

        .helpgent-media-driver-migration-progress-header-title {
            margin: 0;
        }

        .helpgent-media-driver-migration-progress-status {
            padding: 10px 0;
            display: flex;
            align-items: center;
        }

        .helpgent-media-driver-migration-progress-status-content {
            flex-grow: 1;
        }

        .helpgent-media-driver-migration-progress-status-content-header {
            display: flex;
            justify-content: space-between;
        }

        .helpgent-media-driver-migration-progress-status-text {
            color: var(--helpgent-color-light-gray);
            font-weight: 500;
            display: flex;
            align-items: center;
            &.--is-success {
                color: var(--helpgent-color-success);
            }
        }

        .helpgent-media-driver-migration-progress-status-content-body {
            margin: 10px 0;
        }

        .helpgent-media-driver-migration-progress-status-bar {
            height: 10px;
            border-radius: 10px;
            overflow: hidden;
            background: var(--helpgent-color-bg-deep);
        }

        .helpgent-media-driver-migration-progress-status-bar-fill {
            width: 0%;
            height: 100%;
            border-radius: 10px;
            background: var(--helpgent-color-success);
        }

        .helpgent-media-driver-migration-progress-status-action {
            margin-left: 20px;
        }

        .helpgent-media-driver-migration-progress-action-link {
            display: block;
            text-decoration: none;
            cursor: pointer;
        }

        .helpgent-media-driver-migration-progress-close-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background: var(--helpgent-color-bg-badge-gray);
            color: #fff;
            box-sizing: border-box;

            svg path {
                fill: #fff;
            }
        }

        .helpgent-media-driver-migration-progress-status-footer {
            display: block;
        }

        .helpgent-media-driver-migration-progress-description {
            margin-top: 10px;
            color: var(--helpgent-color-gray);
        }

        .helpgent-media-driver-migration-progress-text-icon {
            display: inline-block;
            padding: 0 5px 0 0;
            width: 20px;
            height: 20px;

            &.--is-success {
                svg path {
                    fill: var(--helpgent-color-success);
                }
            }
        }

        .helpgent-status {
            display: flex;
            padding: 15px 20px;
            border-radius: 10px;
            margin: 15px 0;
            font-size: 15px;
            align-items: center;
            background: #f2f2f2;
            &.--is-success {
                background: #d2f5c7;
                .helpgent-status-icon {
                    background: var(--helpgent-color-success);
                }
            }
            &.--is-error {
                background: #FCE3E4;
                .helpgent-status-icon {
                    background: red;
                }
            }
        }

        .helpgent-status-icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 25px;
            height: 25px;
            border-radius: 100%;
            padding: 7px;
            box-sizing: border-box;
            margin-right: 8px;
            background: gray;
            svg path {
                fill: #fff;
            }
        }

        .helpgent-media-driver-migration-progress-footer-actions {
            margin-top: 20px;
        }
    }
`;

export default MigrationProgressStyle;
