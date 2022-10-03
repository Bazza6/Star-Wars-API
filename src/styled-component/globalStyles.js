import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
	box-sizing: border-box;
	height: 100%;
}
/* *,
*:before,
*:after {
	box-sizing: inherit;
} */

body{
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	height: 100%
}
.active{
	color: white;
	border-bottom: 2px solid blue;
}

h2 {
	color: lightgray;
}
/* p{
	color: yellow;
} */
`;
export default GlobalStyle;