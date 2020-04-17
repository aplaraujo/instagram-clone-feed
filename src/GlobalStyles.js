import { createGlobalStyle } from 'styled-components';
import OpenSansWoff from './Fonts/Open Sans.woff';
import OpenSansWoff2 from './Fonts/Open Sans.woff2';
import OpenSansBoldWoff from './Fonts/Open Sans Bold.woff';
import OpenSansBoldWoff2 from './Fonts/Open Sans Bold.woff2';


const GlobalStyles = createGlobalStyle `
    @font-face {
        font-family: 'Open Sans';
        src: local('Open Sans'), local('OpenSans'),
        url(${OpenSansWoff2}) format('woff2'),
        url(${OpenSansWoff}) format('woff');
        font-weight: 400;
        font-style: regular;
    }

    @font-face {
        font-family: 'Open Sans Bold';
        src: local('Open Sans Bold'), local('OpenSansBold'),
        url(${OpenSansBoldWoff2}) format('woff2'),
        url(${OpenSansBoldWoff}) format('woff');
        font-weight: 600;
        font-style: bold;
    }
    

    body, h1, h2, h3, p, ul, li, a {
        margin: 0;
        padding: 0;
    }

    body {
        padding-top: 56px;
        font-family: 'Open Sans', sans-serif;
        font-size: 10px;
        background-color: #FAFAFA;
        color: #000;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;


export default GlobalStyles;