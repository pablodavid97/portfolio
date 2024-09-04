import { NavLink } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <NavLink exact to="/" className={styles.link} activeClassName={styles.active}>
                    Home
                </NavLink>
            </li> 
            <li className={styles.li}>
                <NavLink to="/about" className={styles.link} activeClassName={styles.active}>
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Header;
