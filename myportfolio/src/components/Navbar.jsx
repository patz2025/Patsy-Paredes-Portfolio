import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="name">PATSY PAREDES</Link>
      </div>
      <div className="navbar-right">
        <Link to="/about" className="nav-link">ABOUT ME</Link>
        <Link to="/projects" className="nav-link">PROJECTS</Link>
        <Link to="/contact" className="nav-link contact-button">CONTACT ME</Link>
      </div>
    </nav>
  );
}

export default Navbar;