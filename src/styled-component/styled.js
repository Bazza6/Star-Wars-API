import styled from "styled-components"
import { Link, NavLink } from "react-router-dom";

const Styled_TopNav = styled.div`
  height: 150px;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Styled_LowerNav = styled.div`
  //box-sizing: border-box;
  border: solid grey 1px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Styled_Span = styled.span`
color: lightgrey;
`;
const Styled_P = styled.p`
color: lightgrey;
text-decoration: none;
`;
const Styled_H3 = styled.h3`
color: lightgrey;
text-decoration: none;
`;

const Styled_Hidden = styled(Styled_P)`
  visibility: hidden;
`;
const Logo = styled.img`
height: 80px;
`;
const Styled_SmallCard = styled.div`
border: solid red 3px;
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
height: 200vh;
background-image: url("./background-stars-desktop.jpeg");
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
const Styled_WelcomePage = styled.div`
padding: 30px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
color: lightgrey;
`;
const Styled_Container = styled.div`
margin-top: 30px;;
background-color: grey;
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

export {
  Styled_LowerNav,
  Styled_TopNav,
  Styled_Hidden,
  Styled_Span,
  Styled_P,
  Styled_H3,
  Logo,
  Styled_Link,
  Styled_NavLink,
  Styled_background,
  Styled_SmallCard,
  Styled_ButtonContainer,
  Styled_Button,
  Styled_WelcomePage,
  Styled_Container
};