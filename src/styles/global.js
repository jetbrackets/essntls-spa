import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body, h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --background: #E5E5E5;
    background: var(--background);
  }

  a {
    text-decoration: none
  }

  img {
    display: block;
    max-width: 100%;
  }

`
export default GlobalStyles
