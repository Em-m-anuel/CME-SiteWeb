import Navbar from "../composants/Navbar"
import Footer from "../composants/Footer";
import ServicesAccueil from "../composants/ServicesAccueil";
import TextPresentation from "../composants/TextPresentation";
import Posts from "../composants/posts";
import TeamPresentation from "../composants/teamPresentation";
import { Link } from "react-router-dom";
import PresentationCard from "../composants/PresentationCard";
import ExpertiseAccueil from "../composants/ExpertisesAccueil";

function AccueilPage(){
    return (
        <>
            <Navbar props="Accueil"/>
            <section id="home" className="py-5 ">
                <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-5 fw-bold mb-3">
                            Votre Partenaire Juridique <span className="text-primary">de Confiance</span>
                        </h1>
                        <p id="dynamic-subtitle" className="text-muted mb-3"></p>
                        <p className="text-muted mb-4">
                            Depuis 2010, CME offre des solutions juridiques sur mesure, alliant expertise et intégrité pour protéger vos intérêts.
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            <Link to="/Contact" className="btn btn-primary d-flex align-items-center">
                                Prendre rendez-vous <i className="fas fa-chevron-right ms-2"></i>
                            </Link>
                            <Link to="/About" className="btn btn-outline-primary">
                                En savoir plus
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <figure>
                            <div
                            className="rounded shadow-lg bg-light"
                            style={{
                                backgroundImage: "url('/assets/img/projects/Law.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "400px"
                            }}
                            ></div>
                            <figcaption className="text-muted mt-2">
                                Balance de justice symbolisant l’expertise de CME
                            </figcaption>
                        </figure>
                    </div>
                    
                </div> 
                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>
                
            </section>

            <TextPresentation/>
            
            <ServicesAccueil/>

            <ExpertiseAccueil/>

            <TeamPresentation/>
                
            <Posts/>

            <Footer props="Accueil"/>
        </>
    )
}

export default AccueilPage;