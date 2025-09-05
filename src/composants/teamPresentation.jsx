import Team from "./team";
function TeamPresentation(){
    return (
        <section> 
                <div>
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>

                <Team/>
                <div className="author-principal text-center d-flex flex-column justify-content-center align-items-center">
                    <img 
                        className="rounded-circle object-fit-cover border border-5 border-light-subtle mb-3" 
                        alt="Maître Aurélie ESSOH" 
                        width="200" 
                        height="200" 
                        src="assets/img/team/avatar1.jpg"
                    />
                    <div className="ps-3">
                        <h1 className="fw-bold mb-1">
                            <span>Me. Aurélie ESSOH</span>
                        </h1>
                        <p className="lead mb-1 text-primary">Fondatrice & Associée principale</p>
                        <p className="text-muted" style={{ maxWidth: "500px" }}>
                            Avocate inscrite au Barreau depuis 2008, spécialiste en droit des affaires, fusions-acquisitions et gouvernance
                            d’entreprise. Forte de plus de 15 ans d’expérience, elle accompagne les grandes entreprises et institutions dans
                            leurs opérations stratégiques complexes. Diplômée de l’Université Paris 1 Panthéon-Sorbonne.
                        </p>
                    </div>
                </div>

            </section>
    )
}

export default TeamPresentation;