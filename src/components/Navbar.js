import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <Link to="/" >
                    <h1>STAR WARS</h1>
                </Link>
                <Link to="/log-in">
                    LOGIN
                </Link>
                <Link to="/sign-up">
                    sign-up
                </Link>
            </nav>

            <div className="lowerNavbar">
                <Link to="/">
                    <h2>HOME</h2>
                </Link>
                <Link to="/main">
                    <h2>STARSHIPS</h2>
                </Link>
            </div>

        </>
    )
}

export default Navbar;