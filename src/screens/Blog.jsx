import PostCard from "../composants/postCard";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Title from "../composants/Title";
import { postcards } from "../data/Actualites";


function Blog(){

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
