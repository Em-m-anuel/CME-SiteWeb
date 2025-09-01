import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import ExpertiseCard from "../composants/ExpertiseCard";
import Title from "../composants/Title";
import { FaBalanceScale, FaBuilding, FaHandshake, FaGavel } from "react-icons/fa";

function Expertises(){
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
    imageUrl: "/assets/img/services-expertises/Juge.jpg",
    to: "/Expertises/Expertise3",
    icon: <FaBalanceScale className="text-primary" size={35} />,
    alt: "Représentation devant les juridictions lors d'un contentieux"
  },
  {
    title: "Fusions & Acquisitions",
    excerpt: "Accompagnement stratégique dans les opérations de croissance externe.",
    imageUrl: "/assets/img/services-expertises/Signature2.jpg",
    to: "/Expertises/Expertise4",
    icon: <FaGavel className="text-primary" size={35} />,
    alt: "Réunion d'experts pour une opération de fusion-acquisition d'entreprise"
  }
];


    return (
        <>
            <Navbar props="Expertises"/>

            <Title 
                texth1="Expertises"
                links={""}
                bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <section>
                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 mx-auto">
                            <div className="row mb-5">
                                <div className="col-md-10 col-xl-8 text-center mx-auto py-2">
                                    <h1 className="display-5 fw-bold mb-4 text-primary">Nos Expertises</h1>
                                    <p className="lead text-muted lh-base">Voici une liste des differents domaines dans lesquels excelle notre cabinet : </p>
                                </div>
                            </div>
                            <div className="row g-4 row-cols-1 row-cols-md-3 mx-auto">
                               
                                {expertises.map((exp,index) => (
                                    <div key={index} className="col">
                                        <ExpertiseCard
                                        title={exp.title}
                                        excerpt={exp.excerpt}
                                        imageUrl={exp.imageUrl}
                                        link={exp.to}
                                        icon={exp.icon}
                                        />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>
            </section>

            <Footer props="Expertises"/>
        </>
    )
}

export default Expertises;
