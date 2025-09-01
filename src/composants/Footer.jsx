import { Link } from "react-router-dom";
import '../style/Footer.css';

function Footer({ props }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer mt-5 ">
      <div className="container">
  
        <div className="row g-4 mb-4">
          
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold footer-logo mb-3">
              <span className="accent-text">CME</span> Cabinet
            </h3>
            <p className="footer-text mb-3">
              Votre partenaire de confiance pour des solutions juridiques et
              innovantes. Nous vous accompagnons avec professionnalisme.
            </p>
            <Link
              className="btn custom-btn px-4 py-2"
              role="button"
              to="/Contact"
              aria-label="Nous contacter"
            >
              Nous contacter
            </Link>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 footer-title">Coordonnées</h5>
            <div className="contact-info">
              <div className="contact-item mb-2">
                <strong>Adresse :</strong>
                <span className="footer-text d-block">Pompidou, Libreville, Gabon</span>
              </div>
              <div className="contact-item mb-2">
                <strong>Téléphone :</strong>
                <span className="footer-text d-block">+241 078 87 87 20</span>
              </div>
              <div className="contact-item mb-2">
                <strong>Email :</strong>
                <span className="footer-text d-block">contact@cme-cabinet.com</span>
              </div>
              <div className="contact-item">
                <strong>Horaires :</strong>
                <span className="footer-text d-block">Lun - Ven : 08h00 - 18h00</span>
              </div>
            </div>
          </div>

          
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3 footer-title">Navigation</h5>
            <ul className="list-unstyled footer-nav">
              <li className="mb-2">
                <Link
                  className={`footer-link ${props === "Accueil" ? "active" : ""}`}
                  to="/"
                >
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className={`footer-link ${props === "A propos" ? "active" : ""}`}
                  to="/About"
                >
                  À propos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className={`footer-link ${props === "Services" ? "active" : ""}`}
                  to="/ServicesScreens"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3 footer-title">Expertise</h5>
            <ul className="list-unstyled footer-nav">
              <li className="mb-2">
                <Link
                  className={`footer-link ${props === "Expertises" ? "active" : ""}`}
                  to="/Expertises"
                >
                  Expertises
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className={`footer-link ${props === "Actualites" ? "active" : ""}`}
                  to="/Blog"
                >
                  Actualités
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className={`footer-link ${props === "Contact" ? "active" : ""}`}
                  to="/Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
        <hr className="footer-divider" />

        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="footer-text mb-2 mb-md-0">
              © {currentYear} CME Inc. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3 small-links">
              <Link to="#" className="footer-link small">
                Mentions légales
              </Link>
              <Link to="#" className="footer-link small">
                Politique de confidentialité
              </Link>
              <Link to="#" className="footer-link small">
                Conditions d'utilisation
              </Link>
              <Link to="#" className="footer-link small">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;