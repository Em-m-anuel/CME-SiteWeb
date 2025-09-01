import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Service4(){
    return (
        <>

            <Navbar props={"Services"}/>
            <Title 
            texth1="Gestion des Litiges"
            links={[{to:"/ServicesScreens",text :"Services"},{to:"",text:"Gestion des Litiges"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
            src="/assets/img/services-expertises/Signature2.jpg"
            alt="Salle d'audience ou avocat consultant ses dossiers avant une audience"
            title="Gestion des Litiges"
            subtitle="PRESTATIONS"
            paragraphe="Prise en charge complète des conflits : élaboration de la stratégie processuelle, représentation devant les juridictions, et recours aux modes alternatifs (médiation, arbitrage) lorsque c’est pertinent."
            extrap={[
                "Évaluation stratégique et chiffrage des risques liés au litige.",
                "Rédaction des actes de procédure et représentation en justice.",
                "Recours à la médiation et à l’arbitrage pour résoudre rapidement les différends.",
                "Accompagnement post-jugement (exécution des décisions, recouvrement)."
            ]}
            />


            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Services"}/>
        </>
    )
}

export default Service4;