import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar({ props }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm sticky-top py-3">
      <div className="container">
        
        <Link className="navbar-brand fs-4 fw-bold" to="/">
          CME
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navcol"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navcol">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-3">
            <li className="nav-item">
              <Link
                className={`${props === "Accueil" ? "active" : ""} nav-link`}
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${props === "A propos" ? "active" : ""} nav-link`}
                to="/About"
              >
                A propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${props === "Services" ? "active" : ""} nav-link`}
                to="/ServicesScreens"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${props === "Expertises" ? "active" : ""} nav-link`}
                to="/Expertises"
              >
                Expertises
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${props === "Actualites" ? "active" : ""} nav-link`}
                to="/blog"
              >
                Actualites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${props === "Contact" ? "active" : ""} nav-link`}
                to="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Bouton téléphone */}
          <Link className="btn btn-primary ms-lg-3 px-3" to="#">
            <FaPhoneAlt className="me-2" /> +241 078 87 87 20
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
