function PresentationCard(){
    return (
        <section className="py-5 bg-light" >
            <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
                
                <div className="col-md-6 text-center">
                    <figure>
                        <div
                        className="rounded shadow-lg bg-light"
                        style={{
                            backgroundImage: "url('/assets/img/projects/Law.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "400px"
                        }}
                        ></div>
                        <figcaption className="text-muted mt-2">
                            Image du maître
                        </figcaption>
                    </figure>
                </div>
                
                <div className="col-md-6 text-center text-md-start">
                    <h1 className="display-5 fw-bold mb-3">
                        Votre Partenaire Juridique <span className="text-primary">de Confiance</span>
                    </h1>
                    <p id="dynamic-subtitle" className="text-muted mb-3"></p>
                    <p className="text-muted mb-4">
                        Depuis 2010, CME offre des solutions juridiques sur mesure, alliant expertise et intégrité pour protéger vos intérêts.
                    </p>
                    
                </div>

                <div className="section-divider"></div>
            </div>     
        </section>
    )
}

export default PresentationCard;