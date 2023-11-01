import Styled from 'styled-components';

const ConnectMediaDriveStyle = Styled.div`
    &.helpgent-media-driver-connect {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background: #EFEFEF;
        border-radius: 20px;
        padding: 20px 20px;
    }

    .helpgent-media-driver-connect-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-grow: 1;
    }

    .helpgent-media-driver-connect-meta-icon {
        width: 30px;
        height: 30px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        margin-right: 20px;
    }

    .helpgent-media-driver-connect-meta-info {
        flex-grow: 1;
    }

    .helpgent-media-driver-connect-meta-title {
        color: #000;
        font-weight: bold;
        margin: 0;
    }

    .helpgent-media-driver-connect-meta-description {
        margin: 10px 0 0 0;
        color: gray;
    }
`;

export default ConnectMediaDriveStyle;
