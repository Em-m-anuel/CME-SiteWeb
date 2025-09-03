import ExpertiseCard from "./ExpertiseCard";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { expertises } from "../data/expertises";
import { useState, useEffect } from "react";

function ExpertiseAccueil(){

    const [ExpertiseAccueil,SetExpertise] = useState([]);

    const randomExpertise = (tab,nbre = 3) =>{
        if (tab.length <= nbre) {
            return tab;
        }

        const random = [...tab].sort(()=>0.5-Math.random());
        return random.slice(0,nbre)
    }

    useEffect(() =>{
        const randomExpertiseX = randomExpertise(expertises);
        SetExpertise(randomExpertiseX); 
    },[])

    return (
        <section>
            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <div className="mb-4">
                            <h2 className="display-6 fw-bold mb-4 text-primary">
                                Nos Expertises
                            </h2>
                            <p className="lead text-muted mb-4">
                                Des compétences pointues en droit des sociétés, fusions-acquisitions,
                                négociations contractuelles et règlement des litiges, pour vous offrir
                                un accompagnement stratégique et sécurisé à chaque étape.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xl-12 mx-auto">
                        <div className="row gy-4 row-cols-1 row-cols-md-3 mx-auto">
                           {ExpertiseAccueil.map((expertise, index) => (
                                <div key={index} className="col">
                                    <ExpertiseCard 
                                        imageUrl={expertise.imageUrl}
                                        title={expertise.title}
                                        excerpt={expertise.excerpt}
                                        icon={expertise.icon}
                                        link={expertise.to}
                                        alt={expertise.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mb-5 py-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <Link to="/Expertises" className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link">
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
export default ExpertiseAccueil;