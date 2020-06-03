import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


* , *::before , *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family:Arial;
}
body , html , #root {
  width: 100%;
  min-height: 100vh;
}




`;
export default GlobalStyle;