import Swiper from "./swiper-slide";
import { BsArrowRightShort } from "react-icons/bs";
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";

function ProjectG() {
   
    return (
        <section>
            <div className="container py-5">
                <div className="row mb-4 mb-lg-5">
                    <div className="col-md-8 col-xl-5 text-center mx-auto">
                        <small className="text-uppercase">Our best work</small>
                        <h3 className="fs-2 fw-bold mb-4 heading">Project Gallery</h3>
                        <button className="btn btn-primary" type="button">
                            See all&nbsp;
                            <BsArrowRightShort />
                        </button>
                    </div>
                </div>
                
                <div className="row">
                    <div>
                        <div className="position-relative px-sm-5">
                            
                            <div className="swiper d-flex flex-column" id="swiper-3" data-bss-swiper="{&quot;direction&quot;:&quot;horizontal&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;spaceBetween&quot;:20,&quot;breakpoints&quot;:{&quot;768&quot;:{&quot;slidesPerView&quot;:2},&quot;992&quot;:{&quot;slidesPerView&quot;:3}}}">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <Swiper 
                                            alt="The peak iOS mockup" 
                                            Src="assets/img/projects/project1.webp" 
                                            Height={500} 
                                        
                                            texth4="Project" 
                                            textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." 
                                            imgclass="object-fit-cover card-img w-100 d-block" 
                                        />
                                    </div>
                                    <div className="swiper-slide">
                                        <Swiper 
                                            Alt="Planet Sky" 
                                            Src="assets/img/projects/project2.webp" 
                                            Height={500} 
                                        
                                            Texth4="Project" 
                                            Textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." 
                                            Imgclass="object-fit-cover card-img w-100 d-block" 
                                        />
                                    </div>
                                    <div className="swiper-slide">
                                        <Swiper 
                                            Alt="Designer Project" 
                                            Src="assets/img/projects/Designer.jpeg" 
                                            Height={500} 
                                        
                                            Texth4="Project" 
                                            Textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." 
                                            Imgclass="object-fit-cover card-img w-100 d-block" 
                                        />
                                    </div>
                                    <div className="swiper-slide">
                                        <Swiper 
                                            Alt="Project 4" 
                                            Src="assets/img/projects/project4.webp" 
                                            Height={500} 
                                        
                                            Texth4="Project" 
                                            Textp="Tincidunt quisque tincidunt, nam iaculis nisi fames." 
                                            Imgclass="object-fit-cover card-img w-100 d-block" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-nav-standalone position-absolute d-flex w-100 h-100 justify-content-between align-items-center top-0 start-0">
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
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default ProjectG;