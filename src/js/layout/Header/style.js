import Styled from 'styled-components';

console.log( 'Styled' );

const HeaderStyle = Styled.div`
    background: #ffffff;
    .templatiq__header__logo {
        flex: 0 0 200px;
        max-width: 200px;
        img {
            max-width: 100%;
        }
    }
`;
const HeaderNavStyle = Styled.div`

`;
const HeaderActionStyle = Styled.div`

`;

console.log( 'Styled Header: ', HeaderStyle, HeaderNavStyle, HeaderActionStyle );

export { HeaderStyle, HeaderNavStyle, HeaderActionStyle };
