import { BsArrowRightShort } from "react-icons/bs";
import ServicesCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { useState, useEffect } from "react";

function ServicesAccueil(){

    const [ServicesAccueil, SetService] =useState([]);

    const randomServices = (tab,nbre = 3) =>{
        if (tab.length <= nbre){
            return tab;
        }
        const randomServicesX = [...tab].sort(()=>0.5-Math.random());
        return randomServicesX.slice(0,nbre);
    }

    useEffect(()=>{
        const serviceX = randomServices(services);
        SetService(serviceX);
    },[])

    return(
        <section className="py-5">

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <div className="container py-5">

                <div className="row mb-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <div className="mb-4">
                            <h2 className="display-6 fw-bold mb-4 text-primary">
                                Nos Services
                            </h2>
                            <p className="lead text-muted mb-4">
                                Une gamme complète de services juridiques adaptés à vos besoins :
                                conseil, rédaction de contrats, contentieux, arbitrage et bien plus encore
                                pour défendre et sécuriser vos activités.
                            </p>
                        </div>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="col-xl-12 mx-auto">
                        <div className="row gy-5 row-cols-1 row-cols-md-3 mx-auto">
                            
                            {ServicesAccueil.map((service, index) => (
                                <div key={index} className="col">
                                    <Link to={service.to}>
                                        <ServicesCard 
                                        className={`card ${service.color} border-0 h-100 shadow-sm`}
                                        title={service.title}
                                        description={service.description}
                                        icon={service.icon}
                                        to={service.to}
                                        />
                                    </Link>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mb-5 py-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <Link to="/ServicesScreens" className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link">
                            <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" type="button">
                                Découvrir tous nos services&nbsp;
                                <BsArrowRightShort size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServicesAccueil;