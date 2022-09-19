import { Link, NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav className="navbar">

                <Link to="/home" >
                    <h1>STAR WARS</h1>
                </Link>
                <div>
                    <Link to="/log-in">
                        log in
                    </Link>
                    //
                    <Link to="/sign-up">
                        sign up
                    </Link>
                </div>

            </nav>

            <div className="lowerNavbar">
                <NavLink activeClassName="active" to="/home">
                    <h2>HOME</h2>
                </NavLink>
                <NavLink activeClassName="active" to="/main">
                    <h2>STARSHIPS</h2>
                </NavLink>
            </div>

        </>
    )
}

export default Navbar;