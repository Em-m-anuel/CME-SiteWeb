import ProcessSteps from "./processSteps";
function AboutSection(){
    return (
        
        <main id="kng-main">
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
                            src="https://bitanga-lawfirm.com/wp-content/uploads/2025/01/10a8f472-1e9d-45cc-9281-5aa5433c2223.jpg"
                            alt="Cabinet"
                            className="img-fluid rounded shadow-lg"
                            style={{ width: "300px", transition: "0.5s" }}
                        />
                        <img
                            src="https://bitanga-lawfirm.com/wp-content/uploads/2021/10/about-2.jpg"
                            alt=""
                            className="img-fluid rounded shadow position-absolute"
                            style={{
                                width: "150px",
                                top: "20%",
                                left: "60%",
                                transform: "rotate(5deg)"
                            }}
                        />
                    </div>
                </section>

                <section className="row align-items-center mb-5">
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <img
                            src="https://bitanga-lawfirm.com/wp-content/uploads/2025/01/c739bae3-b457-4cef-96e2-6708526a7f4a.jpg"
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
                
                <section className="bg-light py-5 rounded"> 
                    <div className="text-center mb-4"> <h2 className="fw-bold">Nos Valeurs :</h2> 
                    </div> 
                    <div className="row"> 
                        <div className="col col-xl-12 mx-auto"> 
                            <div className="card border-0 hero" data-bs-theme="light"> 
                                <div className="card-body py-md-4"> 
                                    <div className="row gy-4 gy-lg-0 row-cols-1 row-cols-md-2 mx-auto"> 
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="01" texth5="Discovery Phase" textp="Understanding the client's needs and goals. Preparing a project proposal." />
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="02" texth5="Concept Development" textp="Starting work. Creating initial design ideas and concepts for client approval." /> 
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="03" texth5="Refinement" textp="Collaborating with the client to refine and finalize designs." /> 
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="04" texth5="Final Delivery" textp="Producing final deliverables and handing off to the client." /> 
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="03" texth5="Refinement" textp="Collaborating with the client to refine and finalize designs." /> 
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="04" texth5="Final Delivery" textp="Producing final deliverables and handing off to the client." /> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </section>

            </div>
        </main>
       
    )
}

export default AboutSection;