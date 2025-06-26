import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Megha Papola</div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>Resume</Link></li>
          <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
