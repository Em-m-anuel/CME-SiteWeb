import { BsArrowRightShort } from "react-icons/bs";
import { FaBuilding, FaHandshake, FaGavel } from "react-icons/fa";
import ServicesCard from "../composants/serviceCard";
import { Link } from "react-router-dom";

function ServicesAccueil(){
    const services = [
        {
            title: "Droit des Sociétés",
            description: "Création, restructuration et accompagnement juridique des entreprises.",
            color: "bg-info-subtle",
            icon: <FaBuilding className="text-primary" size={48} />,
            to: "/Expertises/Expertise1"
        },
        {
            title: "Contrats & Négociations",
            description: "Rédaction et sécurisation de vos contrats commerciaux et partenariats.",
            color: "bg-success-subtle",
            icon: <FaHandshake className="text-success" size={48} />,
            to: "/Expertises/contrats"
        },
        {
            title: "Contentieux & Arbitrage",
            description: "Représentation devant les juridictions et résolution des litiges.",
            color: "bg-warning-subtle",
            icon: <FaGavel className="text-danger" size={48} />,
            to: "/Expertises/contentieux"
        }
    ];

    return(
        <section className="py-5">
            <div className="container py-5">
                
                <div className="row mb-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <div className="mb-4">
                            <h2 className="display-6 fw-bold mb-4 text-primary">
                                Nos Services
                            </h2>
                            <p className="lead text-muted mb-4">
                                Des solutions complètes et innovantes pour accompagner 
                                votre transformation digitale et développer votre présence en ligne.
                            </p>
                        </div>
                        
                        <Link to="/ServicesScreens" className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link">
                            <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" type="button">
                                Découvrir tous nos services&nbsp;
                                <BsArrowRightShort size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="col-xl-12 mx-auto">
                        <div className="row gy-5 row-cols-1 row-cols-md-3 mx-auto">
                            {services.map((service, index) => (
                                <div key={index} className="col">
                                    <ServicesCard 
                                        className={`card ${service.color} border-0 h-100 shadow-sm`}
                                        title={service.title}
                                        description={service.description}
                                        icon={service.icon}
                                        to={service.to}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesAccueil;