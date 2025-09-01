import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Expertise1(){
    return (
        <>

            <Navbar props={"Expertises"}/>
            <Title 
            texth1="Droits des Sociétés"
            links={[{to:"/Expertises",text :"Expertises"},{to:"",text:"Droits des Sociétés"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
                src="/assets/img/services-expertises/Reunion.jpg" 
                alt="Réunion d'entreprise juridique"
                title="Droit des Sociétés"
                subtitle="Domaines d’intervention"
                paragraphe="Nous accompagnons nos clients dans la création, la restructuration et la gestion juridique de leurs entreprises, en assurant la conformité avec les réglementations locales et internationales."
                extrap={[
                    "Constitution et transformation des sociétés (SARL, SA, GIE…).",
                    "Rédaction des statuts, pactes d’actionnaires et conventions entre associés.",
                    "Assistance en gouvernance d’entreprise et conformité réglementaire.",
                    "Fusions, scissions, apports partiels d’actifs et réorganisations."
                ]}
                />

                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>

            <Footer props={"Expertises"}/>
        </>
    )
}

export default Expertise1;