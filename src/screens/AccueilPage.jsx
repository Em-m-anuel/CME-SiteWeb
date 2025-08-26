import Navbar from "../composants/Navbar"
import Footer from "../composants/Footer";
import Header from "../composants/Header";
import Project from "../composants/project";
import ProjectG from "../composants/projectGallery";
import Services from "../composants/services";
import Process from "../composants/process";
import Temoins from "../composants/Temoins";
import InfoContact from "../composants/InfoContact";
import Posts from "../composants/posts";
import Team from "../composants/team";


function AccueilPage(){
    return (
        <>
            <Navbar props="Accueil"/>
            <Header/>
            <Project/>
            <ProjectG/>
            <Services/>
            <Process/>
            <Temoins/>
            <InfoContact/>
            <Posts/>
            <Team/>
            <Footer props="Home"/>
        </>
    )
}

export default AccueilPage;