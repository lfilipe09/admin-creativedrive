import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'),  local('Montserrat-Regular'),
       url('/fonts/montserrat-v24-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('Montserrat Semibold'),  local('Montserrat-Semibold'),
       url('/fonts/montserrat-v24-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src:local('Montserrat Bold'),  local('Montserrat-Bold'),
       url('/fonts/montserrat-v24-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
