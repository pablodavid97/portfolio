import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section about">
                <p>
                    Thank you for visiting my blog react application. I’m Pablo Llanes, a software engineer based in Quito. This site will be used to build my portfolio. If you have any questions or want to collaborate, feel free to reach out.
                </p>
            </div>
            <div className="footer-section links">
            <h2>Quick Links</h2>
                <ul className="quick-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="footer-section social">
            <h2>Connect with Me</h2>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/pablo-llanes-334635111/" target='_blank' rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/pablodavid97" target='_blank' rel="noreferrer">GitHub</a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Pablo Llanes. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;
