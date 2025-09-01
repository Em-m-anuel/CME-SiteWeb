function PresentationCard(){
    return (
        <section className="py-5 bg-light" >
            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
            <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
                <div className="col-md-6 text-center">
                    <figure>
                        <div
                        className="rounded shadow-lg bg-light"
                        style={{
                            backgroundImage: "url('/assets/img/services-expertises/Perso.jpg')",
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
                    <blockquote className="fst-italic text-muted mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                        « Chez CME, nous croyons que chaque client mérite bien plus qu’une simple assistance juridique.
                        Nous défendons vos droits avec passion, nous anticipons vos risques avec rigueur
                        et nous bâtissons avec vous des solutions solides pour l’avenir. »
                    </blockquote>
                    <p className="fw-semibold text-dark mb-4">
                        — Maître [Nom du Fondateur], Fondateur du Cabinet
                    </p>
                </div>

                <div className="section-divider"></div>
            </div>     
        </section>
    )
}

export default PresentationCard;