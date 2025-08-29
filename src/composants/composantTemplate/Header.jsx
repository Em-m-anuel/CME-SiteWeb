import Swiper from "./swiper-slide";
import { BiSolidLeftArrowCircle,BiSolidRightArrowCircle } from "react-icons/bi";
function Header(){
    return (
        <>
            <header>
                <div className="container pt-4 pt-xl-5">
                    <div className="row mb-5">
                        <div className="col-md-10 col-lg-8 text-center text-md-start mx-auto">
                            <div className="text-center"><span className="badge rounded-pill bg-light text-dark mb-4 px-3 py-2">Voted Best Agency of 2025&nbsp;</span>
                                <h1 className="display-5 mb-4 heading">We are <strong>Agency Creative</strong> and<br/><strong>We Help You Succeed</strong></h1>
                                <p className="mb-4">Rhoncus dui amet augue justo condimentum erat, est quisque. Sem aptent ante ultrices curabitur. Sagittis venenatis dolor dapibus, lectus phasellus.</p>
                                <div className="d-flex flex-column flex-grow-0 align-items-center"><button className="btn btn-primary" type="submit">Let's Work Together</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="d-flex justify-content-between align-items-center mb-3"><small className="text-uppercase">Featured projects</small>
                                <div className="swiper-nav-standalone d-flex" data-bss-swiper-target="#swiper-1">
                                    <div className="swiper-button-prev me-2">
                                        <button className="btn btn-primary btn-circle" type="button">
                                            <BiSolidLeftArrowCircle />
                                        </button>
                                    </div>
                                    <div className="swiper-button-next">
                                        <button className="btn btn-primary btn-circle" type="button">
                                            <BiSolidRightArrowCircle />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper d-flex flex-column" id="swiper-1" data-bss-swiper="{&quot;direction&quot;:&quot;horizontal&quot;,&quot;effect&quot;:&quot;slide&quot;}">
                                <div className="swiper-wrapper">  
                                    <div className="swiper-slide">
                                        <Swiper Alt="The peak iOS mockup" Src="assets/img/projects/project1.webp" Height="500" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." Imgclass="object-fit-cover card-img w-100 d-block" />
                                    </div>
                                    <div className="swiper-slide">
                                        <Swiper Alt="Planet Sky" Src="assets/img/projects/project2.webp" Height="500" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." Imgclass="object-fit-cover card-img w-100 d-block" />
                                    </div>
                                    <div className="swiper-slide">
                                        <Swiper Alt="Planet Sky" Src="assets/img/projects/Designer.jpeg" Height="500" Texth4="Project" Textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." Imgclass="object-fit-cover card-img w-100 d-block" />
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;