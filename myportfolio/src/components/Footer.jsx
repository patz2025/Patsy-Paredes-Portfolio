import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Patsy Paredes</h3>
          <p>Orlando, FL | patsyparedes@gmail.com</p>
          <div className="social-links">
            <a href="https://instagram.com/patsyparedess" className="social-icon">Instagram</a>
            <a href="https://linkedin.com/in/patsy-paredes-968a89268/" className="social-icon">in</a>
          </div>
        </div>
        
        <div className="footer-right">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Me</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/contact" className="footer-link">Contact Me</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;