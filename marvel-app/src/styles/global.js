import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
}

body {
   background: #121214;
   color: #fff;
   -webkit-font-smothing: antialiased;
}

body, input, button {

  font-family: 'Bangers', cursive, sans-serif;
}

button, a {
  cursor: pointer;
}

`;
