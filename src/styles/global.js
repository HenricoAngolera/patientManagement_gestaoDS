import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.LETTER};
    -webkit-font-smoothing: antialiased; /* deixar as fontes mais suaves */
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.SOURCE_SANS};
    font-size: 16px;
    outline: none;
  }

  a { 
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;