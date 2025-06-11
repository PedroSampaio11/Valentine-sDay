import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    font-size: 10px;
background: 
  linear-gradient(135deg, #FFF5F7, #FFE9EC),
  url('/hearts-bg.svg');
background-repeat: repeat;
background-size: 200px;
background-blend-mode: lighten;

    letter-spacing: -1px;
    line-height: 1;
    h1,h2,h3,h4{
        color: #CB869A;
        font-family: 'Dancing Script';
        margin: 0;
        padding: 0;
    }
    p, span{
       color: #4A4A4A;
        font-family: 'Lato';
        margin: 0;
         padding: 0;
    }
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
