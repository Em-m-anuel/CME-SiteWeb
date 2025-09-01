import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";
function Expertise2(){
    return (
        <>

            <Navbar props={"Expertises"}/>
            <Title 
            texth1="Contrats & Négociations"
            links={[{to:"/Expertises",text :"Expertises"},{to:"",text:"Contrats & Négociations"}]}
            bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
                src="/assets/img/services-expertises/Signature.jpg"
                alt="Signature d'un contrat juridique"
                title="Contrats & Négociations"
                subtitle="Domaines d’intervention"
                paragraphe="Nous assurons la rédaction, la révision et la négociation de tous types de contrats afin de sécuriser vos relations commerciales et partenariats stratégiques."
                extrap={[
                    "Rédaction et validation des contrats commerciaux, de distribution, d’approvisionnement.",
                    "Négociation de contrats de prestation de services, sous-traitance et partenariats.",
                    "Audit contractuel et mise en conformité avec les normes légales.",
                    "Prévention des risques liés à l’exécution des contrats."
                ]}
            />

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <Footer props={"Expertises"}/>
        </>
    )
}

export default Expertise2;