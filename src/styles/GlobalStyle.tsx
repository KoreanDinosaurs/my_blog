import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --colors-white: #FFFFFF;

        --colors-gray900: #464d52;
        --colors-gray800: #5a5a5a;
        --colors-gray700: #868686;
        --colors-gray600: #999999;
        --colors-gray500: #C3C3C3;
        --colors-gray400: #D8D8D8;
        --colors-gray300: #ECECEC;
        --colors-gray200: #F2F4F6;
        --colors-gray100: #F5F5F5;

        --colors-blue500: #5673EB;
        --colors-blue400: #95A7EE;
        --colors-blue300: #CAD3F8;
        --colors-blue200: #D5DBF3;
        --colors-blue100: #EFF2FF;

        --colors-red500: #EB5374;
        --colors-red200: #FFD5DE;
        --colors-red100: #FDEAEE;

        --colors-sky500: #4A9AE5;
        --colors-sky100: #E8F2FC;

        --colors-pink500: #BF2E70;
        --colors-pink100: #F7E5ED;

        --colors-gold500: #cb9110;
        --colors-gold100: #fbf1d8;

        --borderSection: #dedede;
    }

    body, button, div,
    h1, h2, h3, h4, h5, h6, 
    input, li, ol, p, textarea, ul {
        margin:0;
        padding:0;
        box-sizing: border-box;
        color: ${(props) => props.theme.textColor};
        /* background-color: ${(props) => props.theme.bgColor}; */
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
