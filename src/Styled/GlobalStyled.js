import {createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


* , *::before , *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body , html , #root {
  width: 100%;
  min-height: 100%;
}




`;
export default GlobalStyle;