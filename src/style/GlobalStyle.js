import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
    --Grayscale10: #FFF;
    --Grayscale20: #F9F9F9;
    --Grayscale30: #CFCFCF;
    --Grayscale40: #818181;
    --Grayscale50: #515151;
    --Grayscale60: #000;

    --Brown10: #F5F1EE;
    --Brown20: #E4D5C9;
    --Brown30: #C7BBB5;
    --Brown40: #542F1A;
    --Brown50: #341909;

    --Blue50: #1877F2;
    --Yellow50: #FEE500;
    --Red50: #B93333;
    --shadow-small: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
    --shadow-medium: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    --shadow-large: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      font-family: "Pretendard";
      word-break: keep-all;
  }

  html,
  body {
      font-size: 62.5%;
      -webkit-tap-highlight-color : transparent;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background: var(--Grayscale20, #F9F9F9);
  }

  h1 {
      color: var(--Grayscale60);
      font-family: "Actor";
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 40px;
      font-weight: 400;
  }

  h2 {
      color: var(--Grayscale60);
      font-family: "Actor";
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 32px;
      font-weight: 400;
  }

  h3 {
      color: var(--Grayscale60);
      font-family: "Actor";
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 24px;
      font-weight: 400;
  }

  ol, ul {
      list-style: none;
  }

  a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
  }

  input:focus {
      outline: none;
  }

  button {
      padding: unset;
      border: none;
      background-color: unset;
      cursor: pointer;
  }
`

export default GlobalStyle
