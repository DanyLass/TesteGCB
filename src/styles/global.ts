import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #ffff;
  --blue: #1d164d;
  --white: #ffffff;
  --green:#a7df63;
  --lavender: #c9e2f4;
  

  
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font size :16px
html { 
  @media (max-width: 1080px) {
    font-size: 93.75% //15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%  //14px
  }
}


body {
  background: var(--background);
}

body, input,textarea,button,title {
  font-family: "Red Hat Display";
  font-weight: 800;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight:800;
}

button { 
  cursor: pointer;
}

`;
