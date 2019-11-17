import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      letter-spacing: 1px;
      font-family: "'Segoe UI', 'Helvetica Neue',sansserif";
      min-height: 100vh;
    }
`;