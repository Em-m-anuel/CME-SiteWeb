import { BrowserRouter,Routes,Route} from 'react-router-dom';
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
                <Route path={"/Expertises/Expertise1"} element={<Expertise1/>} />
                <Route path={"/ServicesScreens/Service1"} element={<Service1/>} />
                <Route path={"/ServicesScreens/Service2"} element={<Service2/>} />
                <Route path={"/ServicesScreens/Service3"} element={<Service3/>} />
                <Route path={"/ServicesScreens/Service4"} element={<Service4/>} />
                <Route path={"/Expertises/Expertise2"} element={<Expertise2/>} />
                <Route path={"/Expertises/Expertise3"} element={<Expertise3/>} />
                <Route path={"/Expertises/Expertise4"} element={<Expertise4/>} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default Router;