import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    min-height: 100vh;
    background: #fff8f9;
    font-family: 'Lato', sans-serif;
    letter-spacing: normal;
    line-height: 1.4;

    /* Permite scroll vertical normalmente, evita scroll horizontal */
    overflow-x: hidden;
    overflow-y: auto;

    /* Scrollbar estilizada */
    scrollbar-width: thin;
    scrollbar-color: #9b497a #ffe9ec;
  }

  /* Webkit scrollbars */
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #ffe9ec;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9b497a;
    border-radius: 6px;
    border: 3px solid #ffe9ec;
  }

  h1,h2,h3,h4 {
    color: #CB869A;
    font-family: 'Dancing Script', cursive;
    margin: 0;
    padding: 0;
  }

  p, span {
    color: #4A4A4A;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
