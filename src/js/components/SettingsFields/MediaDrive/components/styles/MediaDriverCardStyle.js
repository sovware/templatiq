import Styled from 'styled-components';

const MediaDriverCardStyle = Styled.div`
    &.helpgent-media-driver-card {
        display: block;
        .helpgent-actions {
            display: flex;
            margin: 0 -5px;
        }

        .helpgent-action-item {
            margin: 0 5px;
        }
    }

    .helpgent-media-driver-card-header {
        display: flex;
        background: #E6E6E6;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        padding: 15px 20px;
        justify-content: space-between;
        align-items: center;
    }

    .helpgent-media-driver-card-header-info {
        display: block;
    }

    .helpgent-media-driver-card-header-title {
        display: flex;
        align-items: center;
    }

    .helpgent-media-driver-card-header-action {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .helpgent-media-driver-card-header-action-item {
        margin: 10px;
    }

    .helpgent-media-driver-card-body {
        background: #EFEFEF;
        padding: 20px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .helpgent-media-driver-icon {
        width: 40px;
        height: 40px;
        background: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        margin-right: 8px;
    }
`;

export default MediaDriverCardStyle;
