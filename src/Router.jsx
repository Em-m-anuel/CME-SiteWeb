import { BrowserRouter,Routes,Route} from 'react-router-dom';
import RefreshScroll from './RefreshScroll';
import AccueilPage from './screens/AccueilPage';
import Contact from './screens/Contact';
import Error404 from './screens/templatePages/404';
import Blog from './screens/Blog';
import Pricing from './screens/templatePages/Pricing';
import Authors from './screens/templatePages/Authors';
import Article1 from './screens/subScreens/Article-1';
import About from './screens/About';
import ServicesScreens from './screens/Services';
import Expertises from './screens/Expertises';
import Expertise1 from './screens/subScreens/Expertise-1';
import Service1 from './screens/subScreens/Services-1';
import Service2 from './screens/subScreens/Services-2';
import Service3 from './screens/subScreens/Services-3';
import Service4 from './screens/subScreens/Services-4';
import Expertise2 from './screens/subScreens/Expertise2';
import Expertise3 from './screens/subScreens/Expertise3';
import Expertise4 from './screens/subScreens/Expertise4';
function Router(){
    return (
        <BrowserRouter>
            <RefreshScroll/>
            <Routes>
                <Route path={"/" || "/Accueil"} element={<AccueilPage/>} />
                <Route path={"/Contact"} element={<Contact/>} />
                <Route path={"/404"} element={<Error404/>} />
                <Route path={"/Blog"} element={<Blog/>} />
                <Route path={"/Pricing"} element={<Pricing/>} />
                <Route path={"/Authors"} element={<Authors/>} />
                <Route path={"/Blog/Article-1"} element={<Article1/>} />
                <Route path={"/About"} element={<About/>} />
                <Route path={"/ServicesScreens"} element={<ServicesScreens/>} />
                <Route path={"/Expertises"} element={<Expertises/>} />
                <Route path={"/Expertises/Droits-Societes"} element={<Expertise1/>} />
                <Route path={"/Expertises/Contrats-Negociations"} element={<Expertise2/>} />
                <Route path={"/Expertises/Contentieux-Arbitrages"} element={<Expertise3/>} />
                <Route path={"/Expertises/Fusions-Acquisitions"} element={<Expertise4/>} />
                <Route path={"/ServicesScreens/Creation-Entreprises"} element={<Service1/>} />
                <Route path={"/ServicesScreens/Audit-Juridique"} element={<Service2/>} />
                <Route path={"/ServicesScreens/Redactions-Negociations"} element={<Service3/>} />
                <Route path={"/ServicesScreens/Gestions-Litiges"} element={<Service4/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;