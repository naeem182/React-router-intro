import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                <span>my website:</span>
                <Link to="./">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/user">User</Link>

                <Link to="/contact">Contact</Link>
            </nav>

        </div>
    )
}

export default Header
