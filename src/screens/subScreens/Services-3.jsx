import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Service3(){
    return (
        <>

            <Navbar props={"Services"}/>
            <Title 
            texth1="Rédaction & Négociation de Contrats"
            links={[{to:"/ServicesScreens",text :"Services"},{to:"",text:"Rédaction & Négociation de Contrats"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
            src="/assets/img/services-expertises/Juge.jpg"
            alt="Deux personnes signant un contrat commercial sur une table"
            title="Rédaction & Négociation de Contrats"
            subtitle="PRESTATIONS"
            paragraphe="Rédaction sur-mesure et sécurisation juridique de vos accords (clients, fournisseurs, partenaires). Nous veillons à protéger vos intérêts tout au long de la négociation et de l’exécution."
            extrap={[
                "Rédaction et adaptation de contrats commerciaux, de distribution et de prestation.",
                "Clauses de garanties, responsabilité, confidentialité et non-concurrence.",
                "Négociation stratégique pour limiter l’exposition au risque.",
                "Mise en place de mécanismes de gouvernance contractuelle et d’exécution."
            ]}
            />


            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Services"}/>
        </>
    )
}

export default Service3;