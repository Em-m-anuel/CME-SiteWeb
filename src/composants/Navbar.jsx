import {Link} from "react-router-dom";

function Navbar({props}){
     
    return (
        <nav className="navbar navbar-expand-md py-3">
            <div className="container"><Link className="navbar-brand fs-4 d-flex align-items-center" to="#">CME</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol">
                    <ul className="navbar-nav me-auto mb-4 mb-md-0">
                        <li className="nav-item"><Link className={`${props === "Accueil"? "active":""} nav-link`} to="/">Accueil</Link></li>
                        <li className="nav-item"><Link className={`${props === "A propos"? "active":""} nav-link`} to="">A propos</Link></li>
                        <li className="nav-item"><Link className={`${props === "Services"? "active":""} nav-link`} to="">Services</Link></li>
                        <li className="nav-item"><Link className={`${props === "Expertises"? "active":""} nav-link`} to="">Expertises</Link></li>
                        <li className="nav-item"><Link className={`${props === "Actualites"? "active":""} nav-link`} to="">Actualites</Link></li>
                        <li className="nav-item"><Link className={`${props === "Contact"? "active":""} nav-link`} to="/Contact">Contact</Link></li>
                    </ul>
                    <Link className="btn btn-primary" role="button" to=""> +241 078 87 87 20</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;