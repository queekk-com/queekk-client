import { Link } from "react-router-dom";
import "./Footer.css";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import logoImg from "../assets/svgs/logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mainFoot">
        <div className="footer-brand">
          <div className="logo-section">
            <img src={logoImg} alt="Queekk Logo" className="footer-logo" />
            <h3>Queekk<span>.</span></h3>
          </div>
          <p>Empowering your applications with seamless messaging integration.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
          </div>
        </div>

        <div className="listCont">
          <div className="listHead">
            <h3>Product</h3>
          </div>
          <ul className="lists">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/signup">Get Started</Link></li>
          </ul>
        </div>

        <div className="listCont">
          <div className="listHead">
            <h3>Documentation</h3>
          </div>
          <ul className="lists">
            <li><Link to="/documentation/introduction">Introduction</Link></li>
            <li><Link to="/documentation/getting-started">Quick Start</Link></li>
            <li><Link to="/documentation/integration">Integration</Link></li>
            <li><Link to="/documentation/usage">Usage</Link></li>
          </ul>
        </div>

        <div className="listCont">
          <div className="listHead">
            <h3>Support</h3>
          </div>
          <ul className="lists">
            <li><Link to="/documentation/customization">Customization</Link></li>
            <li><Link to="/documentation/troubleshooting">Troubleshooting</Link></li>
            <li><Link to="/documentation/faqs">FAQs</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>

      <div className="bottomFoot">
        <div className="bottom-content">
          <p>© {currentYear} Queekk. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
