import Styled from 'styled-components';

const SettingPanelStyle = Styled.div`
    &.helpgent-settings-panel {
        border-radius: 20px;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto 30px auto;
    }
    .helpgent-settings-panel-header,
    .helpgent-settings-panel-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background: #000000;
        padding: 15px 30px 15px 25px;
    }

    .helpgent-settings-panel-footer {
        justify-content: end;
    }

    .helpgent-settings-panel-search {
        position: relative;
        z-index: 8;
    }

    .helpgent-settings-panel-search-input {
        min-width: 250px;
        padding: 0 20px;
        color: #fff;
        border: none;
        background: rgba(255,255,255, 0.2);
        min-height: 40px;
        border-radius: 8px;
    }

    .helpgent-settings-panel-search-results {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(0px, 100%);
        box-shadow: 0 0 20px -8px rgba(0,0,0,0.3);
        background: #fff;
    }

    .helpgent-settings-panel-search-result-link {
        text-decoration: none;
        padding: 10px 10px;
        display: block;
        transition: all ease-in-out 300ms;

        &:hover {
            background: #e8e8e8;
        }
    }

    .helpgent-settings-panel-search-result-label {
        margin: 0;
        color: #000;
    }

    .helpgent-settings-panel-search-result-breadcrumb {
        margin: 0;
        color: gray;
    }

    .helpgent-settings-panel-field-item {
        margin-bottom: 20px;
    }

    .helpgent-form-input-error-message {
        padding: 10px 0;
        color: red;
    }

    .helpgent-settings-panel-body {
        display: flex;
        background: #ffffff;
    }

    .helpgent-settings-panel-nav {
        min-height: 500px;
        background: #E6E6E6;
    }

    .helpgent-settings-panel-nav-menu {

    }

    .helpgent-settings-panel-nav-menu-item {
        min-width: 250px;
        position: relative;
        &.--has-dropdown {
            display: block;
            > .helpgent-settings-panel-nav-menu-link.--is-active {
                z-index: 2;
                .helpgent-settings-panel-nav-menu-action{
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

    .helpgent-settings-panel-nav-menu-link {
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
            border-left: 2px solid var(--helpgent-primary-button-bg );
            box-shadow: 0 5px 20px rgba(161, 168, 198 , 0.2);
            background: #ffffff;
            + .helpgent-settings-panel-nav-menu-dropdown {
                display: block;
            }
        }
    }

    .helpgent-settings-panel-nav-menu-icon {
        line-height: 0;
        svg{
            width: 18px;
        }
    }

    .helpgent-settings-panel-nav-menu-action {
        line-height: 0;
        margin-left: auto;
    }

    .helpgent-settings-panel-nav-menu-dropdown {
        display: none;
        .helpgent-settings-panel-nav-menu-link {
            padding-left: 55px;
            &.--is-active {
                border-left: unset;
                box-shadow: unset;
                color: var(--helpgent-primary-button-bg );
            }

        }
    }

    .helpgent-settings-panel-contents {
        flex-grow: 1;
        padding: 20px;
    }

    .helpgent-settings-panel-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpgent-settings-panel-save-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpgent-settings-panel-save-status {
        padding: 0 30px;
        color: #fff;
        &.--has-success {
            color: #86f224;
        }
        &.--has-error {
            color: #ff6060;
        }
    }

    .helpgent-settings-panel-breadcrumb {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        display: flex;
    }

    .helpgent-breadcrumb-label {
        display: inline-block;
        color: rgba( 255,255,255, 0.6 );
        &.--is-active {
            color: #fff;
        }
    }

    .helpgent-breadcrumb-separator {
        padding: 0 5px;
    }

    .helpgent-settings-panel-field-group {
        // border: 1px solid #E3E6EF;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .helpgent-settings-panel-field-group-header {
        padding: 20px;
        // border-bottom: 1px solid #E3E6EF;

        h1, h2, h3, h4, h5, h5 {
            margin: 0;
        }
        h2{
            font-size: 20px;
            font-weight: 600;
            color: var(--helpgent-color-dark);
        }
    }

    .helpgent-settings-panel-field-group-contents {
        padding: 10px 20px;
    }

    .helpgent-form-row {
        display: flex;
        flex-wrap: wrap;
        align-items: start;
    }

    .helpgent-form-row-left {
        flex-basis: 34%;
    }

    .helpgent-form-row-right {
        flex-basis: 66%;
    }

    .helpgent-form__label {
        display: block;
        font-size: 15px;
        font-weight: 500;
        color: #272b41;
        margin-bottom: 0;
    }

    .helpgent-icon {
        &.icon-primary svg path {
            fill: var(--helpgent-color-primary);
        }

        &.icon-warning-deep svg path {
            fill: var(--helpgent-color-warning-deep);
        }
    }

    .helpgent-title {
        display: block;
    }

    .helpgent-user-profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .helpgent-user-profile-thumbnail {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 15px;
        background: #A2A2A2;
    }

    .helpgent-user-profile-thumbnail-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .helpgent-user-profile-meta {
        flex-grow: 1;
    }

    .helpgent-user-profile-meta-title {
        margin: 0 0 5px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--helpgent-color-dark);
    }

    .helpgent-user-profile-meta-subtitle {
        color: var(--helpgent-color-gray);
        font-size: 14px;
        margin: 0;
    }
    .helpgent-storage-status-bar-label{
        color: var(--helpgent-color-gray);
        font-size: 13px;
        font-weight: 500;
    }
    .helpgent-storage-status-bar {
        position: relative;
        height: 8px;
        background: #D5D5D5;
        border-radius: 10px;
        overflow: hidden;
    }

    .helpgent-storage-status-bar-fill {
        width: 0%;
        height: 100%;
        background: var(--helpgent-color-primary);
        transition: all ease-in-out 300ms;
    }

    .helpgent-dropdown__content li a.helpgent-danger {
        color: var(--helpgent-color-danger);

        .helpgent-dropdown-item-icon svg path {
            fill: var(--helpgent-color-danger);
        }
    }

    .helpgent-danger svg path {
        fill: var(--helpgent-color-danger);
    }

    .helpgent-dropdown-btn.helpgent-btn-dark {
        svg path {
            fill: #fff;
        }

        &:hover {
            svg path {
                fill: #000;
            }
        }
    }
`;

export { SettingPanelStyle };
