import ProcessSteps from "./processSteps";
function AboutSection(){
    const valeurs=[
        {className:"card bg-transparent border-0",
            bodyclassName:"card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4",
            number:"01",
            texth5:"Intégrité",
            textp:"Nous agissons avec honnêteté et transparence dans chacune de nos actions."
        },{className:"card bg-transparent border-0",
            bodyclassName:"card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4",
            number:"02",
            texth5:"Excellence",
            textp:"Chaque dossier est traité avec rigueur et un souci constant de qualité."

        },{className:"card bg-transparent border-0",
            bodyclassName:"card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4",
            number:"03",
            texth5:"Proximité",
            textp:"Nous plaçons la relation humaine au cœur de notre accompagnement."

        },{className:"card bg-transparent border-0",
            bodyclassName:"card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4",
            number:"04",
            texth5:"Innovation",
            textp:"Nous adaptons nos stratégies pour répondre aux enjeux modernes du droit."

        }
    ]
    return (
        
        <main id="kng-main" className="py-5 bg-light">
            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
            <div className="container py-5">
                
                <section className="row align-items-center mb-5">
                    
                    <div className="col-md-6 mb-4 mb-md-0">
                        <span className="text-primary fw-semibold d-block mb-2">
                            Nous connaître
                        </span>
                        <h2 className="fw-bold mb-3">Votre partenaire juridique de confiance</h2>
                        <p className="text-muted">
                            Basé à Libreville, notre cabinet accompagne entreprises, institutions et particuliers
                            dans la gestion de leurs enjeux juridiques stratégiques. Nous mettons à votre service
                            une expertise reconnue en droit des affaires, droit fiscal, droit social et en contentieux.
                        </p>
                    </div>

                    <div className="col-md-6 position-relative text-center">
                        <img
                            src="/assets/img/services-expertises/Groupe1.jpg"
                            alt="Cabinet"
                            className="img-fluid rounded shadow-lg"
                            style={{ width: "300px", transition: "0.5s" }}
                        />
                    </div>
                </section>

                <section className="row align-items-center mb-5">
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <img
                            src="/assets/img/services-expertises/Groupe1.jpg"
                            alt="Notre Mission"
                            className="img-fluid rounded shadow-lg"
                            style={{ width: "300px" }}
                        />
                    </div>

                    <div className="col-md-6">
                        <span className="text-primary fw-semibold d-block mb-2">
                            Notre Mission
                        </span>
                        <h2 className="fw-bold mb-3">Protéger vos intérêts</h2>
                        <p className="text-muted">
                            Nous nous engageons à offrir des solutions juridiques efficaces, fiables et adaptées
                            à vos besoins spécifiques. Notre mission : défendre vos droits avec rigueur et
                            anticiper vos risques pour sécuriser vos projets.
                        </p>
                    </div>
                </section>
                
                <section > 
                    <div className="text-center mb-4"> <h2 className="fw-bold">Nos Valeurs :</h2> 
                    </div> 
                    <div className="row"> 
                        <div className="col col-xl-12 mx-auto"> 
                            <div className="card border-0 hero" data-bs-theme="light"> 
                                <div className="card-body py-md-4"> 
                                    <div className="row gy-4 gy-lg-0 row-cols-1 row-cols-md-2 mx-auto"> 
                                        {valeurs.map((valeur) =>(
                                            <ProcessSteps
                                            className={valeur.className}
                                            bodyclassName={valeur.bodyclassName}
                                            number={valeur.number}
                                            texth5={valeur.texth5}
                                            textp={valeur.textp}
                                            />
                                        ))}
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </section>

            </div>

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
        </main>
       
    )
}

export default AboutSection;