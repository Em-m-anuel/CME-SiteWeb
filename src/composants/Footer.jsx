import {FaInstagram,FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Link} from "react-router-dom";

function Footer({props}){
    const currentYear = new Date().getFullYear();
    
    return(
       <footer className="bg-body-tertiary mt-5 py-5">
            <div className="container">
                
                <div className="d-flex flex-column justify-content-between align-items-center flex-lg-row mb-4">
                    <div className="text-center text-lg-start mb-5 mb-lg-0">
                        <h3 className="fw-bold text-primary">CME</h3>
                        <p className="mt-3 mb-4 text-muted lh-base">
                            Votre partenaire de confiance pour des solutions innovantes.<br/>
                            Nous vous accompagnons dans la réalisation de vos projets<br/>
                            avec expertise et professionnalisme.
                        </p>
                        <Link 
                            className="btn btn-primary border-0 px-4 py-2 rounded-pill" 
                            role="button" 
                            to="/contact"
                            aria-label="Nous contacter"
                        >
                            Nous contacter
                        </Link>
                    </div>
                    
                    <div className="text-center text-lg-end">
                        
                        <nav aria-label="Navigation du footer">
                            <ul className="nav d-flex justify-content-center mb-3 flex-wrap">
                                <li className="nav-item">
                                    <Link className={`${props === "Home" ? "active text-primary" : ""} nav-link fw-bold link-body-emphasis`} to="/">
                                        Accueil
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${props === "A propos" ? "active text-primary" : ""} nav-link fw-bold link-body-emphasis`} to="/About">
                                        A propos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${props === "Services" ? "active text-primary" : ""} nav-link fw-bold link-body-emphasis`} to="/ServicesScreens">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${props === "Expertises" ? "active text-primary" : ""} nav-link fw-bold link-body-emphasis`} to="/Expertises">
                                        Expertises
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${props === "Blog" ? "active text-primary" : ""} nav-link fw-bold link-body-emphasis`} to="/Blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`${props === "Contact" ? "active text-primary" : ""} nav-link fw-bold link-body-emphasis`} to="/Contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        
                        
                        <div className="fs-4 d-flex justify-content-center align-items-center gap-3 justify-content-lg-end mb-3">
                            <Link 
                                className="link-body-emphasis text-decoration-none" 
                                to="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Suivez-nous sur Instagram"
                            >
                                <FaInstagram className="social-icon"/>
                            </Link>
                            <Link 
                                className="link-body-emphasis text-decoration-none" 
                                to="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Suivez-nous sur X (Twitter)"
                            >
                                <FaXTwitter className="social-icon"/>
                            </Link>
                            <Link 
                                className="link-body-emphasis text-decoration-none" 
                                to="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Suivez-nous sur TikTok"
                            >
                                <FaTiktok className="social-icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
                
                
                <hr className="border-secondary"/>
                
                
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
                    <div className="mb-3 mb-md-0">
                        <p className="text-muted mb-1">
                            © {currentYear} CME Inc. Tous droits réservés.
                        </p>
                    </div>
                    
                    <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
                        <Link 
                            to="#" 
                            className="text-muted text-decoration-none small"
                            aria-label="Consulter les mentions légales"
                        >
                            Mentions légales
                        </Link>
                        <Link 
                            to="#" 
                            className="text-muted text-decoration-none small"
                            aria-label="Consulter la politique de confidentialité"
                        >
                            Politique de confidentialité
                        </Link>
                        <Link 
                            to="#" 
                            className="text-muted text-decoration-none small"
                            aria-label="Consulter les conditions d'utilisation"
                        >
                            Conditions d'utilisation
                        </Link>
                        <Link 
                            to="#" 
                            className="text-muted text-decoration-none small"
                            aria-label="Consulter la politique des cookies"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
            
            
            <style jsx>{`
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-2px);
                    color: var(--bs-primary) !important;
                }
                .nav-link {
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--bs-primary) !important;
                }
            `}</style>
        </footer> 
    )
}

export default Footer;