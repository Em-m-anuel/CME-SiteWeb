import PostCard from "../composants/postCard";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Title from "../composants/Title";

function Blog(){

    const postcards=[
        {texth4:"Réforme OHADA : Ce que les entreprises doivent savoir" ,
            textp:"Analyse des dernières modifications apportées à l'Acte uniforme OHADA et leurs impacts sur la gouvernance des entreprises." ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["OHADA","Droit des sociétés"]
        },
        {texth4:"Fiscalité 2025 : Nouvelles obligations pour les PME" ,
            textp:"Découvrez les changements fiscaux en vigueur cette année et les stratégies pour rester en conformité."  ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["Fiscalité","PME"]
        },
        {texth4:"Protection des données : Comment éviter les sanctions ?"  ,
            textp:"Les bonnes pratiques pour se conformer aux réglementations en matière de protection des données personnelles."  ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["RGPD","Compliance"]
        },
        {texth4:"Contrats commerciaux : Clauses essentielles à maîtriser"  ,
            textp:"Un guide complet pour sécuriser vos transactions et éviter les litiges."  ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["Contrats","Business"]
        },
        {texth4:"Arbitrage international : Une solution pour vos litiges"  ,
            textp:"Pourquoi et comment recourir à l'arbitrage pour régler vos différends commerciaux ?" ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["Litiges","Arbitrage"]
        },
        {texth4:"Jurisprudence récente en droit du travail"  ,
            textp:"Tour d'horizon des décisions récentes impactant les relations employeurs-salariés."  ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["Droit du travail","Jurisprudence"]
        },
    ]
    return(
        <>
            <Navbar props="Actualites"/>

            <Title 
                texth1="Blog & Actualités Juridiques"
                links={""}
                bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />
            
            <section className="py-5 bg-light">
                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
                </div>

                <div className="container">
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

                        {postcards.map((post,index) =>(
                            <PostCard
                            texth4={post.texth4}
                            textp={post.textp}
                            alt={post.alt}
                            src={post.src}
                            time={post.time}
                            datetime={post.datetime}
                            to={post.to}
                            tags={post.tags}
                            />
                        ))}
                                        
                    </div>
                    
                </div>

                <div className="py-5">
                    <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
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

            <Footer props="Actualites"/>
        </>
    )
}

export default Blog;
