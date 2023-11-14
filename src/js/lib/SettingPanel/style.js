import Styled from 'styled-components';

const SettingPanelStyle = Styled.div`
    &.templatiq-settings-panel {
        border-radius: 20px;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto 30px auto;
    }
    .templatiq-settings-panel-header,
    .templatiq-settings-panel-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background: #000000;
        padding: 15px 30px 15px 25px;
    }

    .templatiq-settings-panel-footer {
        justify-content: end;
    }

    .templatiq-settings-panel-search {
        position: relative;
        z-index: 8;
    }

    .templatiq-settings-panel-search-input {
        min-width: 250px;
        padding: 0 20px;
        color: var(--templatiq-white-color);
        border: none;
        background: rgba(255,255,255, 0.2);
        min-height: 40px;
        border-radius: 8px;
    }

    .templatiq-settings-panel-search-results {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(0px, 100%);
        box-shadow: 0 0 20px -8px rgba(0,0,0,0.3);
        background: var(--templatiq-white-color);
    }

    .templatiq-settings-panel-search-result-link {
        text-decoration: none;
        padding: 10px 10px;
        display: block;
        transition: all ease-in-out 300ms;

        &:hover {
            background: #e8e8e8;
        }
    }

    .templatiq-settings-panel-search-result-label {
        margin: 0;
        color: #000;
    }

    .templatiq-settings-panel-search-result-breadcrumb {
        margin: 0;
        color: gray;
    }

    .templatiq-settings-panel-field-item {
        margin-bottom: 20px;
    }

    .templatiq-form-input-error-message {
        padding: 10px 0;
        color: red;
    }

    .templatiq-settings-panel-body {
        display: flex;
        background: var(--templatiq-white-color);
    }

    .templatiq-settings-panel-nav {
        min-height: 500px;
        background: #E6E6E6;
    }

    .templatiq-settings-panel-nav-menu {

    }

    .templatiq-settings-panel-nav-menu-item {
        min-width: 250px;
        position: relative;
        &.--has-dropdown {
            display: block;
            > .templatiq-settings-panel-nav-menu-link.--is-active {
                z-index: 2;
                .templatiq-settings-panel-nav-menu-action{
                    svg{
                        transform: rotate(180deg);
                        path{
                            fill: #030308;
                        }
                    }
                }
            }
        }
    }

    .templatiq-settings-panel-nav-menu-link {
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        color: #030308;
        padding: 15px 25px;
        box-shadow: none;
        outline: none;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 15px;
        &.--is-active {
            border-left: 2px solid var(--templatiq-primary-button-bg );
            box-shadow: 0 5px 20px rgba(161, 168, 198 , 0.2);
            background: var(--templatiq-white-color);
            + .templatiq-settings-panel-nav-menu-dropdown {
                display: block;
            }
        }
    }

    .templatiq-settings-panel-nav-menu-icon {
        line-height: 0;
        svg{
            width: 18px;
        }
    }

    .templatiq-settings-panel-nav-menu-action {
        line-height: 0;
        margin-left: auto;
    }

    .templatiq-settings-panel-nav-menu-dropdown {
        display: none;
        .templatiq-settings-panel-nav-menu-link {
            padding-left: 55px;
            &.--is-active {
                border-left: unset;
                box-shadow: unset;
                color: var(--templatiq-primary-button-bg );
            }

        }
    }

    .templatiq-settings-panel-contents {
        flex-grow: 1;
        padding: 20px;
    }

    .templatiq-settings-panel-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .templatiq-settings-panel-save-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .templatiq-settings-panel-save-status {
        padding: 0 30px;
        color: var(--templatiq-white-color);
        &.--has-success {
            color: #86f224;
        }
        &.--has-error {
            color: #ff6060;
        }
    }

    .templatiq-settings-panel-breadcrumb {
        color: var(--templatiq-white-color);
        font-size: 14px;
        font-weight: 500;
        display: flex;
    }

    .templatiq-breadcrumb-label {
        display: inline-block;
        color: rgba( 255,255,255, 0.6 );
        &.--is-active {
            color: var(--templatiq-white-color);
        }
    }

    .templatiq-breadcrumb-separator {
        padding: 0 5px;
    }

    .templatiq-settings-panel-field-group {
        // border: 1px solid #E3E6EF;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .templatiq-settings-panel-field-group-header {
        padding: 20px;
        // border-bottom: 1px solid #E3E6EF;

        h1, h2, h3, h4, h5, h5 {
            margin: 0;
        }
        h2{
            font-size: 20px;
            font-weight: 600;
            color: var(--templatiq-color-dark);
        }
    }

    .templatiq-settings-panel-field-group-contents {
        padding: 10px 20px;
    }

    .templatiq-form-row {
        display: flex;
        flex-wrap: wrap;
        align-items: start;
    }

    .templatiq-form-row-left {
        flex-basis: 34%;
    }

    .templatiq-form-row-right {
        flex-basis: 66%;
    }

    .templatiq-form__label {
        display: block;
        font-size: 15px;
        font-weight: 500;
        color: #272b41;
        margin-bottom: 0;
    }

    .templatiq-icon {
        &.icon-primary svg path {
            fill: var(--templatiq-color-primary);
        }

        &.icon-warning-deep svg path {
            fill: var(--templatiq-color-warning-deep);
        }
    }

    .templatiq-title {
        display: block;
    }

    .templatiq-user-profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .templatiq-user-profile-thumbnail {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 15px;
        background: #A2A2A2;
    }

    .templatiq-user-profile-thumbnail-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .templatiq-user-profile-meta {
        flex-grow: 1;
    }

    .templatiq-user-profile-meta-title {
        margin: 0 0 5px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--templatiq-color-dark);
    }

    .templatiq-user-profile-meta-subtitle {
        color: var(--templatiq-color-gray);
        font-size: 14px;
        margin: 0;
    }
    .templatiq-storage-status-bar-label{
        color: var(--templatiq-color-gray);
        font-size: 13px;
        font-weight: 500;
    }
    .templatiq-storage-status-bar {
        position: relative;
        height: 8px;
        background: #D5D5D5;
        border-radius: 10px;
        overflow: hidden;
    }

    .templatiq-storage-status-bar-fill {
        width: 0%;
        height: 100%;
        background: var(--templatiq-color-primary);
        transition: all ease-in-out 300ms;
    }

    .templatiq-dropdown__content li a.templatiq-danger {
        color: var(--templatiq-color-danger);

        .templatiq-dropdown-item-icon svg path {
            fill: var(--templatiq-color-danger);
        }
    }

    .templatiq-danger svg path {
        fill: var(--templatiq-color-danger);
    }

    .templatiq-dropdown-btn.templatiq-btn-dark {
        svg path {
            fill: var(--templatiq-white-color);
        }

        &:hover {
            svg path {
                fill: #000;
            }
        }
    }
`;

export { SettingPanelStyle };
