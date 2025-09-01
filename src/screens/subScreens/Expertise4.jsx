import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Expertise4(){
    return (
        <>

            <Navbar props={"Expertises"}/>
            <Title 
            texth1="Fusions & Acquisitions"
            links={[{to:"/Expertises",text :"Expertises"},{to:"",text:"Fusions & Acquisitions"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
                src="/assets/img/services-expertises/Signature2.jpg"
                alt="Négociation de fusion d'entreprises"
                title="Fusions & Acquisitions"
                subtitle="Domaines d’intervention"
                paragraphe="Nous accompagnons les entreprises dans leurs opérations de fusion, acquisition et restructuration, en garantissant sécurité juridique et efficacité stratégique."
                extrap={[
                    "Due diligence légale et audit de conformité.",
                    "Négociation et rédaction des accords de fusion et acquisition.",
                    "Structuration juridique et fiscale des opérations.",
                    "Accompagnement post-acquisition et gouvernance."
                ]}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Expertises"}/>
        </>
    )
}

export default Expertise4;