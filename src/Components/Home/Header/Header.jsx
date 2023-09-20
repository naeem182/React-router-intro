import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                <span>my website:</span>
                <NavLink to="./">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </nav>

        </div>
    )
}

export default Header
