import Styled from 'styled-components';

const AuthStyle = Styled.div`
    height: 100vh;
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    .templatiq__auth__title {
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 40px;
        text-align: center;
        color; var(--templatiq-dark-color);
    }
    .templatiq__auth__wrapper {
        width: 500px;
        margin: 0 auto;
        padding: 40px 32px;
        border-radius: 16px;
        background-color: var(--templatiq-white-color);
    }
    .templatiq__auth__info {
        display: flex;
        gap: 28px;
        margin: 0 0 18px;
        flex-direction: column;
    }
    .templatiq__auth__info__single {
        display: flex;
        gap: 8px;
        flex-direction: column;
        label {
            font-size: 15px;
            line-height: 24px;
            font-weight: 500;
        }
        input {
            height: 46px;
            padding: 0 20px;
            border: none;
            box-shadow: none;
            border-radius: 8px;
            background: var(--templatiq-sec-color);
        }
    }
    .templatiq__auth__actions {
        display: flex;
        gap: 20px;
        text-align: center;
        flex-direction: column;
        .templatiq__auth__link {
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
            box-shadow: none;
        }
        .templatiq__auth__btn {
            height: 54px;
            text-align: center;
            justify-content: center;
        }
    }
    .templatiq__auth__actions__wrapper {
        display: flex;
        gap: 20px;
        margin: 0 0 20px;
        align-items: center;
        justify-content: space-between;
    }
    .templatiq__auth__remember {
        margin: 0;
        label {
            font-size: 14px;
            font-weight: 400;
            color: var(--templatiq-body-color);
            padding-inline-start: 26px;
        }
    }
    .templatiq__auth__forgot {
        .templatiq__auth__link {
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
            padding-bottom: 2px;
            color: var(--templatiq-body-color);
            border-bottom: 1px dashed var(--templatiq-body-color);
            transition: color 0.3s ease, border-color 0.3s ease;
            &:hover {
                color: var(--templatiq-primary-color);
                border-color: var(--templatiq-primary-color);
            }
        }
    }
    .templatiq__auth__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        color: var(--templatiq-body-color);
        .templatiq__auth__link {
            padding-inline-start: 4px;
            color: var(--templatiq-primary-color);
        }
    }
`;

export { AuthStyle };
