import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Expertise3(){
    return (
        <>

            <Navbar props={"Expertises"}/>
            <Title 
            texth1="Contentieux & Arbitrage"
            links={[{to:"/Expertises",text :"Expertises"},{to:"",text:"Contentieux & Arbitrage"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
                src="/assets/img/services-expertises/Juge.jpg"
                alt="Salle d'audience avec juge"
                title="Contentieux & Arbitrage"
                subtitle="Domaines d’intervention"
                paragraphe="Nous représentons nos clients devant les juridictions nationales et internationales, et privilégions les modes alternatifs de règlement des différends."
                extrap={[
                    "Contentieux commercial, civil et administratif.",
                    "Procédures judiciaires et arbitrales (OHADA, CCI…).",
                    "Résolution amiable des litiges (médiation, conciliation).",
                    "Exécution des décisions judiciaires et arbitrales."
                ]}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Expertises"}/>
        </>
    )
}

export default Expertise3;