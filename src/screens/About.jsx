import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Title from "../composants/Title";
import AboutSection from "../composants/AboutSection";

function About(){
    return (
        <>
            <Navbar props="A propos"/>

            <Title 
                texth1="À propos de notre Cabinet"
                links={[{to:"/A propos",text :"À propos"}]}
                bgImage={"/assets/img/projects/Law.jpg"}
            />

            <AboutSection/>
            
            <Footer props="Home"/>
        </>
    )
}

export default About;
