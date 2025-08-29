// Contactform.jsx
function Contactform({texth1, textp, textb}){
    return (
        <section className="py-5 bg-light">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-10 col-xl-8 text-center mx-auto">
                        <h1 className="display-5 fw-bold mb-4 text-primary">{texth1}</h1>
                        <p className="lead text-muted lh-base">{textp}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card shadow-sm border-0">
                            <div className="card-body p-4">
                                <form method="post">
                                    <div className="mb-4">
                                        <label htmlFor="name-2" className="form-label fw-semibold text-dark">
                                            Nom complet
                                        </label>
                                        <input 
                                            className="form-control form-control-lg border-0 bg-light" 
                                            type="text" 
                                            id="name-2" 
                                            name="name" 
                                            placeholder="Votre nom et prénom"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email-2" className="form-label fw-semibold text-dark">
                                            Adresse email
                                        </label>
                                        <input 
                                            className="form-control form-control-lg border-0 bg-light" 
                                            type="email" 
                                            id="email-2" 
                                            name="email" 
                                            placeholder="votre.email@exemple.com"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message-2" className="form-label fw-semibold text-dark">
                                            Votre message
                                        </label>
                                        <textarea 
                                            className="form-control form-control-lg border-0 bg-light" 
                                            id="message-2" 
                                            name="message" 
                                            rows="6" 
                                            placeholder="Parlez-nous de votre projet, vos besoins, vos objectifs..."
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button 
                                            className="btn btn-primary btn-lg w-100 fw-semibold rounded-pill shadow-sm" 
                                            type="submit"
                                        >
                                            {textb}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactform;
