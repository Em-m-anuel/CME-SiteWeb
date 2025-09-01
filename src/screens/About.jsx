import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Title from "../composants/Title";
import AboutSection from "../composants/AboutSection";
import PresentationCard from "../composants/PresentationCard";

function About(){
    return (
        <>
            <Navbar props="A propos"/>

            <Title 
                texth1="À propos de notre Cabinet"
                links={""}
                bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <PresentationCard/>

            <AboutSection/>
            
            <Footer props="A propos"/>
        </>
    )
}

export default About;
