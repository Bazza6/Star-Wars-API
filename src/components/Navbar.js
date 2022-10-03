import logo from "./img/star-wars-logo.png"
import { Link, NavLink } from "react-router-dom"
import {
    Styled_LowerNav, Styled_TopNav, Styled_Hidden, Styled_Span,
    Logo, Styled_Link, Styled_NavLink
} from "../styled-component/styled";

function Navbar() {

    return (
        <div>
            <Styled_TopNav>
                <Styled_Hidden>log in // sign up</Styled_Hidden>

                <Link to="/home" >
                    <Logo src={logo}></Logo>
                </Link>
                <div>
                    <Styled_Link to="/log-in">
                        <Styled_Span className="gatto">log in</Styled_Span>
                    </Styled_Link>
                    <Styled_Span>{' '}//{' '}</Styled_Span>
                    <Styled_Link to="/sign-up">
                        <Styled_Span>sign up</Styled_Span>

                    </Styled_Link>
                </div>
            </Styled_TopNav>

            <Styled_LowerNav>

                <Styled_NavLink

                    className={({ isActive }) => isActive ? "active" : ""}
                    to="/home">
                    <h3>HOME</h3>
                </Styled_NavLink>

                <Styled_NavLink

                    className={({ isActive }) => isActive ? "active" : ""}

                    to="/main">
                    <h3>STARSHIPS</h3>
                </Styled_NavLink>
            </Styled_LowerNav>

        </div>
    )
}

export default Navbar;