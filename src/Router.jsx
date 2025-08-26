import { BrowserRouter,Routes,Route} from 'react-router-dom';
import AccueilPage from './screens/AccueilPage';
import Contact from './screens/Contact';
import Error404 from './screens/404';
import Blog from './screens/Blog';
import Pricing from './screens/Pricing';
import Authors from './screens/Authors';
import Article from './screens/Article-1';
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
                <Route path={"/Article-1"} element={<Article/>} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default Router;