import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Service2(){
    return (
        <>

            <Navbar props={"Services"}/>
            <Title 
            texth1="Audit Juridique"
            links={[{to:"/ServicesScreens",text :"Services"},{to:"",text:"Audit Juridique"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
            src="/assets/img/services-expertises/Signature.jpg"
            alt="Expert analysant des contrats et documents pour un audit juridique"
            title="Audit Juridique"
            subtitle="PRESTATIONS"
            paragraphe="Diagnostic juridique approfondi destiné à identifier les risques, non-conformités et opportunités d’amélioration. Rapport synthétique et plan d’action concret pour sécuriser vos opérations."
            extrap={[
                "Revue et audit des contrats commerciaux et documents internes.",
                "Vérification de la conformité réglementaire (OHADA, fiscale, sociale).",
                "Due diligence pour opérations capitalistiques et cession d’actifs.",
                "Recommandations pratiques et plan de mise en conformité."
            ]}
            />


            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Services"}/>
        </>
    )
}

export default Service2;