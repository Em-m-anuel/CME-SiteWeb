import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import ServicesCard from "../composants/ServiceCard";
import Title from "../composants/Title";
import { FaBalanceScale, FaBuilding, FaSearch,FaFileContract } from "react-icons/fa";
function ServicesScreens(){
    const services = [
    {
        title: "Création d'Entreprise",
        description: "Accompagnement pour la constitution et le lancement de votre société.",
        color: "bg-info-subtle",
        icon: <FaBuilding className="text-primary" size={48} />,
        to: "/ServicesScreens/Service1"
    },
    {
        title: "Audit Juridique",
        description: "Diagnostic complet pour sécuriser vos opérations et prévenir les risques.",
        color: "bg-success-subtle",
        icon: <FaSearch className="text-success" size={48} />,
        to: "/ServicesScreens/Service2"
    },
    {
        title: "Rédaction & Négociation de Contrats",
        description: "Rédaction sur-mesure et sécurisation juridique de vos accords.",
        color: "bg-warning-subtle",
        icon: <FaFileContract className="text-warning" size={48} />,
        to: "/ServicesScreens/Service3"
    },
    {
        title: "Gestion des Litiges",
        description: "Représentation devant les juridictions et solutions amiables.",
        color: "bg-danger-subtle",
        icon: <FaBalanceScale className="text-danger" size={48} />,
        to: "/ServicesScreens/Service4"
    }
];

    return (
        <>
            <Navbar props="Services"/>

            <Title 
                texth1="Services"
                links={[{to:"",text :""}]}
                bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <section>
                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>
                <div className="container ">
                    <div className="row">
                        <div className="col col-xl-11 mx-auto">
                            <div className="row mb-5">
                                <div className="col-md-10 col-xl-8 text-center mx-auto py-2">
                                    <h1 className="display-5 fw-bold mb-4 text-primary">Nos Services</h1>
                                    <p className="lead text-muted lh-base">Voici une liste des differents services que propose notre cabinet : </p>
                                </div>
                            </div>
                            <div className="row g-5 row-cols-1 row-cols-md-2 mx-auto">
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

                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>

            </section>

            <Footer props="Services"/>
        </>
    )
}

export default ServicesScreens;