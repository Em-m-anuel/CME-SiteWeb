import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import '../style/Navbar.css';

function Navbar({ props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Fermer le menu lors du redimensionnement vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top custom-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          
          <Link className="navbar-brand fw-bold custom-logo" to="/" onClick={closeMenu}>
            <span className="accent-text">C</span>ME
          </Link>

         
          <button
            className="custom-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navcol">
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-3">
              <li className="nav-item">
                <Link 
                  className={`${props === "Accueil" ? "active" : ""} nav-link custom-link`} 
                  to="/"
                  onClick={closeMenu}
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`${props === "A propos" ? "active" : ""} nav-link custom-link`} 
                  to="/About"
                  onClick={closeMenu}
                >
                  À propos
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`${props === "Services" ? "active" : ""} nav-link custom-link`} 
                  to="/ServicesScreens"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`${props === "Expertises" ? "active" : ""} nav-link custom-link`} 
                  to="/Expertises"
                  onClick={closeMenu}
                >
                  Expertises
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`${props === "Actualites" ? "active" : ""} nav-link custom-link`} 
                  to="/blog"
                  onClick={closeMenu}
                >
                  Actualités
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`${props === "Contact" ? "active" : ""} nav-link custom-link`} 
                  to="/Contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
   
            <Link 
              className="btn custom-btn ms-lg-3 px-3 py-2" 
              to="#"
              onClick={closeMenu}
            >
              <FaPhoneAlt className="me-2" /> +241 078 87 87 20
            </Link>
          </div>
        </div>
      </nav>

      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;