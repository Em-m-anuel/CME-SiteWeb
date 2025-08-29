import { BsArrowRightShort } from "react-icons/bs";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
function Error404(){
    return (
        <>
            <Navbar/>
            <section className="py-5">
                <div className="container py-5">
                    <div className="row justify-content-center mx-auto">
                        <div className="col-lg-6 text-center"><span className="badge rounded-pill bg-light mb-3 px-3 py-2">Error 404</span>
                            <h1 className="display-5 fw-bold">Page Not Found</h1>
                            <p className="text-muted mb-4">We couldn't find the file or page you are looking for. It may have been <br/>removed from our website or you may have a broken link.</p>
                            <button className="btn btn-primary" type="button">Back to site
                                <BsArrowRightShort />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer props="404"/>
        </>
    )
}

export default Error404;