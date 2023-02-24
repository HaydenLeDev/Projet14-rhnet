import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import "./Header.scss"

/**
 * Header of our application contains the navigation menu.
 * @returns Header
 */
const Header = () => {
    return (
        <header className="Header">
            <img src={logo} alt="Logo RHnet" className="Header_Logo"></img>
            <nav className="Header_nav">
                <Link to="/" className="Header_nav_link">Create Employee</Link>
                <Link to="/currentEmployee" className="Header_nav_link">Current Employee</Link>
            </nav>
        </header>
    )
}

export default Header