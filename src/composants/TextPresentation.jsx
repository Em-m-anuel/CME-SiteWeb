function TextPresentation(){
    return (
        <div className="container pt-4 pt-xl-5">
            <div className="row mb-5">
                <div className="col-md-10 col-lg-8 text-center text-md-start mx-auto">
                    <div className="text-center">
                        <h1 className="display-5 mb-4 heading">
                            Nous sommes <strong>CME</strong> et nous<br/>
                            <strong>Transformons vos Idées en Réalité</strong>
                        </h1>
                        <p className="mb-4 lead text-muted">
                            Expertise technologique, innovation et créativité au service de votre réussite. 
                            Découvrez comment nos solutions sur mesure peuvent propulser votre entreprise 
                            vers de nouveaux sommets.
                        </p>
                        <div className="d-flex flex-column flex-grow-0 align-items-center">
                            <button className="btn btn-primary px-4 py-3 rounded-pill fw-bold" type="submit">
                                Démarrer votre projet
                            </button>
                            <small className="text-muted mt-2">
                                Consultation gratuite • Devis personnalisé
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextPresentation;