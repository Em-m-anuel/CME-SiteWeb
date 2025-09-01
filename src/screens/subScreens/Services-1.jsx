import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Service1(){
    return (
        <>

            <Navbar props={"Services"}/>
            <Title 
            texth1="Création d'Entreprise"
            links={[{to:"/ServicesScreens",text :"Services"},{to:"",text:"Création d'Entreprise"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
            src="/assets/img/services-expertises/Reunion.jpg" 
            alt="Documents administratifs et tampons pour création d'entreprise"
            title="Création d'Entreprise"
            subtitle="PRESTATIONS"
            paragraphe="Accompagnement complet et personnalisé pour la constitution de votre société : choix de la structure, rédaction des statuts et accomplissement des formalités d’immatriculation afin de démarrer votre activité sereinement."
            extrap={[
                "Conseil sur le choix de la forme juridique (SARL, SA, GIE, etc.).",
                "Rédaction des statuts et pactes d’actionnaires.",
                "Formalités d’immatriculation et obtention des autorisations nécessaires.",
                "Assistance pour la mise en place des premières obligations fiscales et sociales."
            ]}/>


            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Services"}/>
        </>
    )
}

export default Service1;