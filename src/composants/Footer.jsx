import {FaInstagram,FaTiktok} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Link} from "react-router-dom";
function Footer({props}){

    
    return(
       <footer className="bg-body-tertiary mt-5 py-5">
            <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row">
                <div className="text-center text-lg-start mb-5 mb-lg-0">
                    <h3>CME</h3>
                    <p className="mt-1 mb-4">Ullamcorper at massa himenaeos vel. Vel laoreet eget semper <br/>commodo, ac habitasse venenatis. Porta aliquet ornare, nec.</p>
                    <Link className="btn btn-primary border-0" role="button" to="/contacts.html">Get in touch</Link>
                </div>
                <div className="text-center text-lg-end">
                    <ul className="nav d-flex justify-content-center mb-1">
                        <li className="nav-item"><Link className={`${props === "Home" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/">Home</Link></li>
                        <li className="nav-item"><Link className={`${props === "Pricing" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/Pricing">Pricing</Link></li>
                        <li className="nav-item"><Link className={`${props === "Blog" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/Blog">Blog</Link></li>
                        <li className="nav-item"><Link className={`${props === "Privacy" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/Authors">Privacy</Link></li>
                        <li className="nav-item"><Link className={`${props === "Contact" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/Contact">Contact</Link></li>
                        <li className="nav-item"><Link className={`${props === "404" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/404">404</Link></li>
                        <li className="nav-item"><Link className={`${props === "Article" ? "active" : ""} nav-link fw-bold link-body-emphasis`} to="/Article-1">Article</Link></li>
                    </ul>
                    <p className="text-muted mb-2">Copyright © CME Inc</p>
                    <div className="fs-4 d-flex justify-content-center align-items-center gap-2 justify-content-lg-end mb-lg-2">
                        <Link className="link-body-emphasis" to="#">
                            <FaInstagram/>
                        </Link>
                        <Link className="link-body-emphasis" to="#">
                            <FaXTwitter/>
                        </Link>
                        <Link className="link-body-emphasis" to="#">
                            <FaTiktok />
                        </Link>
                    </div>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;