import PostCard from "./postCard";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
function Posts(){

    const posts=[
        {className:"post-tag-design post-author-billy-thomas post-author-jenny-doe",
            texth4:"Réforme OHADA : Ce que les entreprises doivent savoir" ,
            textp:"Analyse des dernières modifications apportées à l'Acte uniforme OHADA et leurs impacts sur la gouvernance des entreprises." ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["OHADA","Droit des sociétés"]
        },
        {className:"post-tag-design post-author-billy-thomas post-author-jenny-doe" ,
            texth4:"Fiscalité 2025 : Nouvelles obligations pour les PME" ,
            textp:"Découvrez les changements fiscaux en vigueur cette année et les stratégies pour rester en conformité."  ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["Fiscalité","PME"]
        },
        {className:"post-tag-design post-author-billy-thomas post-author-jenny-doe" ,
            texth4:"Protection des données : Comment éviter les sanctions ?"  ,
            textp:"Les bonnes pratiques pour se conformer aux réglementations en matière de protection des données personnelles."  ,
            alt:"Réforme OHADA" ,
            src:"assets/img/projects/project1.webp" ,
            time:"15 Mars, 2025" ,
            datetime:"2025-03-15" ,
            to:"/Blog/Article-1" ,
            tags:["RGPD","Compliance"]
        }
    ]
   
    return (
        <section className="py-5">
            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
            <div className="container py-5">
                <div className="row mb-5 mb-lg-4">
                    <div className="col text-center d-flex justify-content-between align-items-center mx-auto">
                        <h3 className="fs-3 fw-bold mb-0 heading">Dernières Actualités</h3>
                        
                            <Link to="/Blog" className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link">
                                <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" type="button">
                                    Voir plus&nbsp;
                                    <BsArrowRightShort size={20} />
                                </button>
                            </Link>
                    </div>
                </div>
                <div data-bss-type="blog-loop">
                    <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3" data-bss-type="blog-loop-base">
                        {posts.map((post)=>(
                            <PostCard
                            className={post.className}
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
            </div>
        </section>
    )
}

export default Posts;