import TeamCard from "./teamCard";

function Team() {
    return (
        <section>
            <div className="container py-5">
                
                <div className="row mb-4 mb-lg-5">
                    <div className="col-md-8 col-xl-5 text-center mx-auto">
                        <h3 className="fs-2 fw-bold mb-4 heading">Notre Équipe d’Experts Juridiques</h3>
                        <p className="text-muted">
                            Des professionnels qualifiés pour défendre vos intérêts avec rigueur et expertise.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-xl-10 mx-auto">
                        <div className="row row-cols-2 row-cols-md-3 mx-auto">
                            <TeamCard 
                                texth5="Me. Aurélie ESSOH" 
                                textp="Avocate fondatrice – Spécialiste en droit des affaires et fusions-acquisitions." 
                                src="assets/img/team/avatar1.jpg" 
                            />
                            <TeamCard 
                                texth5="Me. Jean-Claude MBOUMBA" 
                                textp="Associé – Expert en droit fiscal et conformité réglementaire." 
                                src="assets/img/team/avatar2.jpg" 
                            />
                            <TeamCard 
                                texth5="Me. Sarah NTOUTOUME" 
                                textp="Avocate senior – Droit du travail et contentieux social." 
                                src="assets/img/team/avatar3.jpg" 
                            />
                            <TeamCard 
                                texth5="Me. Alain OBAME" 
                                textp="Conseiller juridique – Arbitrage, médiation et règlement des litiges." 
                                src="assets/img/team/avatar4.jpg" 
                            />
                            <TeamCard 
                                texth5="Me. Léa ONDO" 
                                textp="Responsable conformité – Gouvernance d’entreprise et audits juridiques." 
                                src="assets/img/team/avatar5.jpg" 
                            />
                            <TeamCard 
                                texth5="Me. Patrick NGUI" 
                                textp="Juriste senior – Droit international et investissements étrangers." 
                                src="assets/img/team/avatar6.jpg" 
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
