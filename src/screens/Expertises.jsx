import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import ServicesCard from "../composants/serviceCard";
import Title from "../composants/Title";
import { FaBalanceScale, FaBuilding, FaHandshake, FaGavel } from "react-icons/fa";

function Expertises(){
    const expertises = [
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
        },
        {
            title: "Fusions & Acquisitions",
            description: "Conseil stratégique et accompagnement dans les opérations M&A.",
            color: "bg-danger-subtle",
            icon: <FaBalanceScale className="text-warning" size={48} />,
            to: "/Expertises/fusions-acquisitions"
        }
    ];

    return (
        <>
            <Navbar props="Expertises"/>

            <Title 
                texth1="Nos Expertises"
                links={[{to:"/Expertises",text :"Expertises"}]}
                bgImage={"/assets/img/projects/Law.jpg"}
            />

            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col col-xl-11 mx-auto">
                            <div className="row g-5 row-cols-1 row-cols-md-2 mx-auto">
                                {expertises.map((expertise, index) => (
                                    <div key={index} className="col">
                                        <ServicesCard 
                                            className={`card ${expertise.color} border-0 h-100 shadow-sm`}
                                            title={expertise.title}
                                            description={expertise.description}
                                            icon={expertise.icon}
                                            to={expertise.to}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer props="Home"/>
        </>
    )
}

export default Expertises;
