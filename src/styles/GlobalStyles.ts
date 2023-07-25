import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: #100E1D;
    --bg-card: #1E213A;
    --primary-1: #3C47E9;
    --primary-2: #FFEC65;
    --text-1: #E7E7EB;
    --text-2: #A09FB1;
    --text-3: #88869D;
    --text-4: #616475;
    --bg-button-menu: rgba(110, 112, 122, 0.3);
    --bg-button-search: #6E707A;
  }

  *{
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: var(--background);
    color: var(--text-1);
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
