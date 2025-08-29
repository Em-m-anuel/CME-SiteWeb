import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import ExpertiseCard from "../../composants/ExpertiseCard";
function Service1(){
    return (
        <>

            <Navbar props={"Services"}/>
            <Title 
            texth1="A propos"
            links={[{to:"/Expertises",text :"Expertises"},{to:"",text:"Expertises-1"}]}
            bgImage={"/assets/img/projects/Law.jpg"}
            />

            <ExpertiseCard 
                src="/assets/img/team/avatar2.jpg" 
                alt="African people shaking hand"
                title="Droit des Sociétés, Fusion et Acquisition "
                subtitle="DOMAINE D’INTERVENTION"
                paragraphe="Grâce à notre connaissance approfondie de la culture d’entreprise
                    et de l’écosystème de nos clients, entreprises OHADA, étrangères
                    et publiques et privées, nous accompagnons toutes les opérations
                    de fusions-acquisitions, en garantissant un service de haute
                    valeur juridique et stratégique."
                extrap={["Fusion et Acquisition, transfert restructurations, coentreprises,partenariats et alliances stratégiques, capital investissement,capital-risque et restructuration de fonds.",
                    "Réorganisation des actifs, pactes d’actionnaires conformité,gouvernance et diligence raisonnable, litige, médiation et arbitrage entre actionnaire, direction et clients de la garantie."
                ]}
            />

            <Footer/>
        </>
    )
}

export default Service1;