import ExpertiseCard from "./ExpertiseCard";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBuilding, FaHandshake, FaBalanceScale } from "react-icons/fa";

function ExpertiseAccueil(){

    const expertises = [
        {
    title: "Droit des Sociétés",
    excerpt: "Structuration juridique des entreprises et optimisation de la gouvernance.",
    imageUrl: "/assets/img/services-expertises/Reunion.jpg",
    to: "/Expertises/Expertise1",
    icon: <FaBuilding className="text-primary" size={35} />,
    alt: "Signature de documents juridiques pour la création d'une société"
  },
  {
    title: "Contrats & Négociations",
    excerpt: "Sécurisation juridique des relations contractuelles et stratégie de négociation.",
    imageUrl: "/assets/img/services-expertises/Signature.jpg",
    to: "/Expertises/Expertise2",
    icon: <FaHandshake className="text-primary" size={35} />,
    alt: "Négociation et signature de contrats commerciaux entre deux parties"
  },
  {
    title: "Contentieux & Arbitrage",
    excerpt: "Gestion proactive des litiges et arbitrage national ou international.",
    imageUrl: "./assets/img/services-expertises/Juge.jpg",
    to: "/Expertises/Expertise3",
    icon: <FaBalanceScale className="text-primary" size={35} />,
    alt: "Représentation devant les juridictions lors d'un contentieux"
  }
    ];
    return (
        <section>
            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <div className="mb-4">
                            <h2 className="display-6 fw-bold mb-4 text-primary">
                                Expertises :
                            </h2>
                            <p className="lead text-muted mb-4">
                                Des solutions complètes et innovantes pour accompagner 
                                votre transformation digitale et développer votre présence en ligne.
                            </p>
                        </div>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xl-12 mx-auto">
                        <div className="row gy-4 row-cols-1 row-cols-md-3 mx-auto">
                           {expertises.map((expertise, index) => (
                                <div key={index} className="col">
                                    <ExpertiseCard 
                                        imageUrl={expertise.imageUrl}
                                        title={expertise.title}
                                        excerpt={expertise.excerpt}
                                        icon={expertise.icon}
                                        link={expertise.to}
                                        alt={expertise.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mb-5 py-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <Link to="/Expertises" className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link">
                            <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" type="button">
                                Découvrir tous nos services&nbsp;
                                <BsArrowRightShort size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>           
    )
}
export default ExpertiseAccueil;