import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {

    }

    body, button, div,
    h1, h2, h3, h4, h5, h6, 
    input, li, ol, p, textarea, ul {
        margin:0;
        padding:0;
        box-sizing: border-box;
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.bgColor};
        /* transition: all 0.5s; */
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color : transparent;
        
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    input, textarea {
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }
`;

export default GlobalStyle;
