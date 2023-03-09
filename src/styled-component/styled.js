import styled, { keyframes } from "styled-components"
import { Link, NavLink } from "react-router-dom";
import background from "./img/background-stars-desktop.jpeg"

const Styled_TopNav = styled.div`
  height: 150px;
  width: 100%;
  background-color: rgb(0,0,0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 2;

`;
const Styled_LowerNav = styled.div`
  border-top: solid grey 1px;
  border-bottom: solid grey 1px;
  background-color: rgb(0,0,0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2rem;
  z-index: 2;

`;
const Styled_Span = styled.span`
color: lightgrey;
`;
const Styled_P = styled.p`
text-decoration: none;
color: ${props => props.yellow ? " #ff6" : "lightgrey"};
`;
const Styled_H3 = styled.h3`
color: lightgrey;
text-decoration: none;
`;

const Styled_Hidden = styled(Styled_P)`
  visibility: hidden;
`;
const Logo = styled.img`
height: 82px;
`;
const Styled_SmallCard = styled.div`
background-color: rgb(41, 41, 41);
  border: solid rgb(21, 21, 21) 1px;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  width: 70%;
`;
const Styled_background = styled.div`
background-image: url(${background});
`;

const Styled_Link = styled(Link)`
text-decoration: none;
`;

const Styled_NavLink = styled(NavLink)`
box-sizing: border-box;
color: grey;
text-decoration: none;
padding: 0px 30px 0px 30px;
border-left: solid grey 1px;
border-right: solid grey 1px;
`;

const Styled_ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

const Styled_Button = styled.button`
  text-decoration: none;
  color:lightgrey;
  background-color: Transparent;
  border: none;
  font-size: 2rem;
  padding: 24px;
  cursor: pointer;
&:hover{
  color:white
}
`;
const Styled_ButtonLog = styled.button`
  //text-decoration: none;
  width: 150px;
  text-align: center;
  margin-top: 2rem;
  color:lightgrey;
  background-color: black;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  padding: 10px 10px;
  cursor: pointer;
&:hover{
  background-color: yellow;

  color:black
}
`;
const Styled_WelcomePage = styled.div`
padding: 30px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color: lightgrey;
`;
const Styled_Container = styled.div`
border-radius: 5px;
margin-top: 30px;;
background-color: rgb(41, 41, 41);
margin-left: auto;
margin-right: auto;
width: 300px;
padding: 30px;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: lightgrey;
`;

const Styled_Card = styled.div`
color: darkgray;
font-size: 0.9rem;
max-width: 700px;
width: 60%;
border-radius: 12px;
padding: 18px;
background-color: black;
margin-top: 50px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
box-shadow: 0px 0px 186px -32px rgba(255,255,255,0.74);
`;

const Styled_Img = styled.img`
  width: 100%;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: red solid 3px;
  `;

const Styled_ContainerDetails = styled.div`
display:flex;
flex-wrap: no-wrap;
gap:20px;
`;

const Styled_PilotsAndMoviesCard = styled.div`
color: lightgray;
width: 100%;
background-color: rgb(41, 41, 41);
border-radius: 5px;
padding: 12px;
`;
const Styled_GreyText = styled.span`
color: rgb(70,70,70);
font-size:large;
`;

// STAR-WARS style stuff
// los keyframes tienen que ir primero!
const intro = keyframes`
0% {
     opacity: 1;
   }
   90% {
     opacity: 1;
    }
   100% {
     opacity: 0;
   }
`;

const logo = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
50% {
  opacity: 1;
}
100% {
  transform: scale(0.1);
  opacity: 0;
}
`;

const Styled_IntroAzul = styled.p`
  text-align: center;
  color: #ff6;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 18em;
  font-size: 200%;
  font-weight: 400;
  color: #4ee;
  opacity: 0;
  z-index: 1;
  animation: ${intro} 1.5s ease-out;
  `;

const Styled_TitleLogo = styled.h1`
  color: #ff6;
  position: absolute;
  width: 2.6em;
  left: 50%;
  top: 20%;
  font-size: 10em;
  text-align: center;
  line-height: 0.8em;
  margin-left: -1.3em;
  letter-spacing: -0.05em;
  color: #000;
  text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
  opacity: 0;
  z-index: 1;
  animation: ${logo} 5s ease-out 2.5s;
  `;

const Styled_Titles = styled.div`
color:green;
position: absolute;
width: 18em;
height: 50em;
bottom: 0;
left: 50%;
margin-left: -9em;
font-size: 350%;
text-align: justify;
overflow: hidden;
transform-origin: 50% 100%;
transform: perspective(300px) rotateX(25deg);

&:after {
  position: absolute;
  content: " ";
  left: 0;
  right: 0;
  top: 0;
  bottom: 60%;
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 1) 0%,
    transparent 100%
    );
    background-image: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 1) 0%,
      transparent 100%
      );
      background-image: -ms-linear-gradient(
        top,
        rgba(0, 0, 0, 1) 0%,
    transparent 100%
  );
  background-image: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 1) 0%,
    transparent 100%
  );
  background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
  pointer-events: none;
}
`;
const scroll = keyframes`
  0% {
    top: 100%;
  }
  100% {
    top: -170%;
  }
`;

const Styled_TitlesContent = styled.div`
  position: absolute;
  top: 100%;
  animation: ${scroll} 100s linear 4s infinite;
`;

const hourglass = keyframes` 
0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const Loading = styled.div`
  margin: auto;
  width: 80px;
  height: 80px;
  &:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  margin-top: 100px;

  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ${hourglass} 1.2s infinite;
}
`;

export {
  Styled_LowerNav,
  Styled_TopNav,
  Styled_Hidden,
  Styled_Span,
  Styled_P,
  Styled_H3,
  Logo,
  Styled_GreyText,
  Styled_Link,
  Styled_NavLink,
  Styled_background,
  Styled_SmallCard,
  Styled_ButtonContainer,
  Styled_Button,
  Styled_ButtonLog,
  Styled_WelcomePage,
  Styled_Container,
  Styled_Card,
  Styled_Img,
  Styled_IntroAzul,
  Styled_TitleLogo,
  Styled_Titles,
  Styled_TitlesContent,
  Loading,
  Styled_ContainerDetails,
  Styled_PilotsAndMoviesCard,
};