import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section about">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nesciunt, ducimus cupiditate iusto 
                    impedit beatae maxime ipsa fuga omnis molestias neque placeat repudiandae perspiciatis! Sunt laboriosam 
                    iste nobis dignissimos aspernatur, facere suscipit laudantium ullam sit, ipsa enim, ipsam porro magnam. 
                    Inventore porro quibusdam maxime quo blanditiis unde enim a dicta.
                </p>
            </div>
            <div className="footer-section links">
            <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="footer-section social">
            <h2>Connect with Me</h2>
                <div className="social-links">
                    <Link to="#">
                    Twitter
                    </Link>
                    <Link to="#">
                    GitHub
                    </Link>
                    <Link to="#">
                    LinkedIn
                    </Link>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Pablo Llanes. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;
