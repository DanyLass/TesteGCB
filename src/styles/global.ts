import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}


  body {
    background: #ffff;
    color:#1d164d;
  }

  body, input, button,title {
    font-family: "Red Hat Display";
    font-size: 16px;
    
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight:800;
  }

  button { 
    cursor: pointer;
  }


`;
