import PostCard from "../composants/postCard";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Title from "../composants/Title";

function Blog(){
    return(
        <>
            <Navbar props="Actualites"/>

            <Title 
                texth1="Blog & Actualités Juridiques"
                links={[{to:"/",text :"Accueil"}, {to:"#",text :"Blog"}]}
                bgImage={"/assets/img/projects/Law.jpg"}
            />
            
            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-md-10 col-xl-8 text-center mx-auto">
                            <h1 className="display-5 fw-bold mb-4 text-primary">Nos Dernières Actualités Juridiques</h1>
                            <p className="lead text-muted lh-base">
                                Retrouvez les dernières analyses juridiques, les évolutions législatives, les conseils de nos experts 
                                et des éclairages pratiques pour sécuriser vos projets.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <PostCard 
                            texth4="Réforme OHADA : Ce que les entreprises doivent savoir" 
                            textp="Analyse des dernières modifications apportées à l'Acte uniforme OHADA et leurs impacts sur la gouvernance des entreprises." 
                            alt="Réforme OHADA" 
                            src="assets/img/projects/project1.webp" 
                            time="15 Mars, 2025" 
                            datetime="2025-03-15" 
                            to="/Blog/Article-1" 
                            tags={["OHADA","Droit des sociétés"]}
                        />
                        
                        <PostCard 
                            texth4="Fiscalité 2025 : Nouvelles obligations pour les PME" 
                            textp="Découvrez les changements fiscaux en vigueur cette année et les stratégies pour rester en conformité." 
                            alt="Fiscalité PME" 
                            src="assets/img/projects/project1.webp" 
                            time="10 Mars, 2025" 
                            datetime="2025-03-10" 
                            to="#" 
                            tags={["Fiscalité","PME"]}
                        />
                        
                        <PostCard 
                            texth4="Protection des données : Comment éviter les sanctions ?" 
                            textp="Les bonnes pratiques pour se conformer aux réglementations en matière de protection des données personnelles." 
                            alt="Protection des données" 
                            src="assets/img/projects/project1.webp" 
                            time="5 Mars, 2025" 
                            datetime="2025-03-05" 
                            to="#" 
                            tags={["RGPD","Compliance"]}
                        />
                        
                        <PostCard 
                            texth4="Contrats commerciaux : Clauses essentielles à maîtriser" 
                            textp="Un guide complet pour sécuriser vos transactions et éviter les litiges." 
                            alt="Contrats commerciaux" 
                            src="assets/img/projects/project1.webp" 
                            time="28 Février, 2025" 
                            datetime="2025-02-28" 
                            to="#" 
                            tags={["Contrats","Business"]}
                        />
                        
                        <PostCard 
                            texth4="Arbitrage international : Une solution pour vos litiges" 
                            textp="Pourquoi et comment recourir à l'arbitrage pour régler vos différends commerciaux ?" 
                            alt="Arbitrage international" 
                            src="assets/img/projects/project1.webp" 
                            time="22 Février, 2025" 
                            datetime="2025-02-22" 
                            to="#" 
                            tags={["Litiges","Arbitrage"]}
                        />
                        
                        <PostCard 
                            texth4="Jurisprudence récente en droit du travail" 
                            textp="Tour d'horizon des décisions récentes impactant les relations employeurs-salariés." 
                            alt="Droit du travail" 
                            src="assets/img/projects/project1.webp" 
                            time="18 Février, 2025" 
                            datetime="2025-02-18" 
                            to="#" 
                            tags={["Droit du travail","Jurisprudence"]}
                        />
                    </div>
                    
                </div>
            </section>

            <style jsx>
                {`
                .hover-link {
                    transition: all 0.3s ease;
                }
                .hover-link:hover {
                    color: var(--bs-primary) !important;
                    transform: translateX(4px);
                }
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
                .hover-link:hover .arrow-icon {
                    transform: translateX(4px);
                }
                .card {
                    transition: all 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                }
                .letter-spacing-1 {
                    letter-spacing: 1px;
                }
            `}</style> 

            <Footer props="Blog"/>
        </>
    )
}

export default Blog;
