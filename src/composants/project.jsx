import Swiper from "./swiper-slide";
import { BsArrowRightShort } from "react-icons/bs";
function Project(){

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row mb-4 mb-lg-5">
                        <div className="col-md-8 col-xl-5 text-center mx-auto"><small className="text-uppercase">Our best work</small>
                            <h3 className="fs-2 fw-bold mb-4 heading">Project Gallery</h3>
                            <button className="btn btn-primary" type="button">See all&nbsp;
                                <BsArrowRightShort />
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-10 col-xl-9 mx-auto">
                            <div className="card border-0 hero" data-bs-theme="light">
                                <div className="card-body p-4 p-md-5">
                                    <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                                        <div>
                                            <Swiper Alt="Planet Sky" Src="assets/img/projects/Designer%20(1).jpeg" Height="1024" Width="1024" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis." Imgclass="img-fluid aspect-ratio-1x1 object-fit-cover card-img w-100 d-block" />
                                        </div>
                                        <div>
                                            <Swiper Alt="Planet Sky" Src="assets/img/projects/project2.webp" Height="1024" Width="1024" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis." Imgclass="img-fluid aspect-ratio-1x1 object-fit-cover card-img w-100 d-block" />
                                        </div>
                                        <div>
                                            <Swiper Alt="Planet Sky" Src="assets/img/projects/Designer.jpeg" Height="1024" Width="1024" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis." Imgclass="img-fluid aspect-ratio-1x1 object-fit-cover card-img w-100 d-block" />
                                        </div>
                                        <div>
                                            <Swiper Alt="Planet Sky" Src="assets/img/projects/project1.webp" Height="1024" Width="1024" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis." Imgclass="img-fluid aspect-ratio-1x1 object-fit-cover card-img w-100 d-block" />
                                        </div>
                                        <div>
                                            <Swiper Alt="Planet Sky" Src="assets/img/projects/Designer-1.jpeg" Height="1024" Width="1024" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis." Imgclass="img-fluid aspect-ratio-1x1 object-fit-cover card-img w-100 d-block" />  
                                        </div>
                                        <div>
                                            <Swiper Alt="Planet Sky" Src="assets/img/projects/project.jpeg" Height="1024" Width="1024" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis." Imgclass="img-fluid aspect-ratio-1x1 object-fit-cover card-img w-100 d-block" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;