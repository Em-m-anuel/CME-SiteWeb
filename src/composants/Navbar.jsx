import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";
import '../style/Navbar.css';

function Navbar({ props }) {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-md sticky-top custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        
        <Link className="navbar-brand fw-bold custom-logo" to="/">
          <span className="accent-text">C</span>ME
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navcol"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navcol">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-3">
            <li className="nav-item">
              <Link className={`${props === "Accueil" ? "active" : ""} nav-link custom-link`} to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${props === "A propos" ? "active" : ""} nav-link custom-link`} to="/About">
                À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${props === "Services" ? "active" : ""} nav-link custom-link`} to="/ServicesScreens">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${props === "Expertises" ? "active" : ""} nav-link custom-link`} to="/Expertises">
                Expertises
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${props === "Actualites" ? "active" : ""} nav-link custom-link`} to="/blog">
                Actualités
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${props === "Contact" ? "active" : ""} nav-link custom-link`} to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
 
          <Link className="btn custom-btn ms-lg-3 px-3 py-2" to="tel:+24107887872">
            <FaPhoneAlt className="me-2" /> +241 078 87 87 20
          </Link>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;