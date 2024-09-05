import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <nav className="header">
        <ul>
            <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Home
                </NavLink>
            </li> 
            <li>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Header;
