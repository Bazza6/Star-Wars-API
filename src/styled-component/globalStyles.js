import { createGlobalStyle } from "styled-components";
import background from "./img/background-stars-desktop.jpeg"


const GlobalStyle = createGlobalStyle`

* {
   font-family: "monospace", arial, verdana, sans-serif;
  letter-spacing: 1.5px;
  font-weight: lighter;
}

html {
	box-sizing: border-box;
}

body{
	margin: 0;
	padding: 0;
	background-image: url(${background});
	color: lightgray;
}

/* esto sirve para dar estilo a los lik activos (los NavLink)*/
.active{
	color: white;
}

`;
export default GlobalStyle;