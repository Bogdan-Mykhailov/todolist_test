import {createGlobalStyle, css} from 'styled-components'
import LexendLight from '../assets/fonts/lexend/LexendLight.ttf'

const fontFaces = css`
  
  @font-face {
    font-family: 'Lexend300';
    src: url(${LexendLight});
    font-style: normal;
  }
`

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  html {
    font-family: LexendRegular, Roboto, Oxygen, sans-serif;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul, menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    height: auto;
  }
`

export default GlobalStyle
