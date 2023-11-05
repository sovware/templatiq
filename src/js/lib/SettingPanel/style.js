import Styled from 'styled-components';

const SettingPanelStyle = Styled.div`
    &.template-market-settings-panel {
        border-radius: 20px;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto 30px auto;
    }
    .template-market-settings-panel-header,
    .template-market-settings-panel-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        background: #000000;
        padding: 15px 30px 15px 25px;
    }

    .template-market-settings-panel-footer {
        justify-content: end;
    }

    .template-market-settings-panel-search {
        position: relative;
        z-index: 8;
    }

    .template-market-settings-panel-search-input {
        min-width: 250px;
        padding: 0 20px;
        color: #fff;
        border: none;
        background: rgba(255,255,255, 0.2);
        min-height: 40px;
        border-radius: 8px;
    }

    .template-market-settings-panel-search-results {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(0px, 100%);
        box-shadow: 0 0 20px -8px rgba(0,0,0,0.3);
        background: #fff;
    }

    .template-market-settings-panel-search-result-link {
        text-decoration: none;
        padding: 10px 10px;
        display: block;
        transition: all ease-in-out 300ms;

        &:hover {
            background: #e8e8e8;
        }
    }

    .template-market-settings-panel-search-result-label {
        margin: 0;
        color: #000;
    }

    .template-market-settings-panel-search-result-breadcrumb {
        margin: 0;
        color: gray;
    }

    .template-market-settings-panel-field-item {
        margin-bottom: 20px;
    }

    .template-market-form-input-error-message {
        padding: 10px 0;
        color: red;
    }

    .template-market-settings-panel-body {
        display: flex;
        background: #ffffff;
    }

    .template-market-settings-panel-nav {
        min-height: 500px;
        background: #E6E6E6;
    }

    .template-market-settings-panel-nav-menu {

    }

    .template-market-settings-panel-nav-menu-item {
        min-width: 250px;
        position: relative;
        &.--has-dropdown {
            display: block;
            > .template-market-settings-panel-nav-menu-link.--is-active {
                z-index: 2;
                .template-market-settings-panel-nav-menu-action{
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

    .template-market-settings-panel-nav-menu-link {
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
            border-left: 2px solid var(--template-market-primary-button-bg );
            box-shadow: 0 5px 20px rgba(161, 168, 198 , 0.2);
            background: #ffffff;
            + .template-market-settings-panel-nav-menu-dropdown {
                display: block;
            }
        }
    }

    .template-market-settings-panel-nav-menu-icon {
        line-height: 0;
        svg{
            width: 18px;
        }
    }

    .template-market-settings-panel-nav-menu-action {
        line-height: 0;
        margin-left: auto;
    }

    .template-market-settings-panel-nav-menu-dropdown {
        display: none;
        .template-market-settings-panel-nav-menu-link {
            padding-left: 55px;
            &.--is-active {
                border-left: unset;
                box-shadow: unset;
                color: var(--template-market-primary-button-bg );
            }

        }
    }

    .template-market-settings-panel-contents {
        flex-grow: 1;
        padding: 20px;
    }

    .template-market-settings-panel-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .template-market-settings-panel-save-action {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .template-market-settings-panel-save-status {
        padding: 0 30px;
        color: #fff;
        &.--has-success {
            color: #86f224;
        }
        &.--has-error {
            color: #ff6060;
        }
    }

    .template-market-settings-panel-breadcrumb {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        display: flex;
    }

    .template-market-breadcrumb-label {
        display: inline-block;
        color: rgba( 255,255,255, 0.6 );
        &.--is-active {
            color: #fff;
        }
    }

    .template-market-breadcrumb-separator {
        padding: 0 5px;
    }

    .template-market-settings-panel-field-group {
        // border: 1px solid #E3E6EF;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .template-market-settings-panel-field-group-header {
        padding: 20px;
        // border-bottom: 1px solid #E3E6EF;

        h1, h2, h3, h4, h5, h5 {
            margin: 0;
        }
        h2{
            font-size: 20px;
            font-weight: 600;
            color: var(--template-market-color-dark);
        }
    }

    .template-market-settings-panel-field-group-contents {
        padding: 10px 20px;
    }

    .template-market-form-row {
        display: flex;
        flex-wrap: wrap;
        align-items: start;
    }

    .template-market-form-row-left {
        flex-basis: 34%;
    }

    .template-market-form-row-right {
        flex-basis: 66%;
    }

    .template-market-form__label {
        display: block;
        font-size: 15px;
        font-weight: 500;
        color: #272b41;
        margin-bottom: 0;
    }

    .template-market-icon {
        &.icon-primary svg path {
            fill: var(--template-market-color-primary);
        }

        &.icon-warning-deep svg path {
            fill: var(--template-market-color-warning-deep);
        }
    }

    .template-market-title {
        display: block;
    }

    .template-market-user-profile {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .template-market-user-profile-thumbnail {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 15px;
        background: #A2A2A2;
    }

    .template-market-user-profile-thumbnail-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .template-market-user-profile-meta {
        flex-grow: 1;
    }

    .template-market-user-profile-meta-title {
        margin: 0 0 5px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--template-market-color-dark);
    }

    .template-market-user-profile-meta-subtitle {
        color: var(--template-market-color-gray);
        font-size: 14px;
        margin: 0;
    }
    .template-market-storage-status-bar-label{
        color: var(--template-market-color-gray);
        font-size: 13px;
        font-weight: 500;
    }
    .template-market-storage-status-bar {
        position: relative;
        height: 8px;
        background: #D5D5D5;
        border-radius: 10px;
        overflow: hidden;
    }

    .template-market-storage-status-bar-fill {
        width: 0%;
        height: 100%;
        background: var(--template-market-color-primary);
        transition: all ease-in-out 300ms;
    }

    .template-market-dropdown__content li a.template-market-danger {
        color: var(--template-market-color-danger);

        .template-market-dropdown-item-icon svg path {
            fill: var(--template-market-color-danger);
        }
    }

    .template-market-danger svg path {
        fill: var(--template-market-color-danger);
    }

    .template-market-dropdown-btn.template-market-btn-dark {
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
