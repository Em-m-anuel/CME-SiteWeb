import ArticleAuthors from "../../composants/articleAuthor";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";
import InfoCard from "../../composants/InfoCard";

function Article1(){
    const authors=[
        {linkClass:"author-billy-thomas text-decoration-none text-body",
            linkDhref:"/authors.html?author=billy-thomas",
            filterValue:"billy-thomas",
            to:"#",
            src:"../assets/img/team/avatar2.jpg",
            spanText:"Billy Thomas",
            Textp:"Dapibus donec suscipit dictumst, ac ligula ante. Blandit suspendisse nullam sagittis sapien phasellus, phasellus placerat.",
        },{linkClass:"author-jenny-doe text-decoration-none text-body",
            linkDhref:"/authors.html?author=jenny-doe",
            filterValue:"jenny-doe",
            to:"#",
            src:"../assets/img/team/avatar2.jpg",
            spanText:"Jenny Doe",
            Textp:"Dapibus donec suscipit dictumst, ac ligula ante. Blandit suspendisse nullam sagittis sapien phasellus, phasellus placerat."

        }
    ]
    return(
        <>
            <Navbar props="Actualites"/>
            <Title 
                texth1="Actualités"
                links={[{to:"/Blog",text :"Actualité"},{to:"#",text:"Réformes OHADA"}]}
                bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />
            
           <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>

            <InfoCard
                src="/assets/img/services-expertises/Signature.jpg"
                alt="Signature d'un contrat juridique"
                title="Réformes OHADA"
                subtitle="Domaines d’intervention"
                paragraphe="Nous assurons la rédaction, la révision et la négociation de tous types de contrats afin de sécuriser vos relations commerciales et partenariats stratégiques."
                extrap={[
                    "Rédaction et validation des contrats commerciaux, de distribution, d’approvisionnement.",
                    "Négociation de contrats de prestation de services, sous-traitance et partenariats.",
                    "Audit contractuel et mise en conformité avec les normes légales.",
                    "Prévention des risques liés à l’exécution des contrats."
                ]}
            />
            
            <div class="row">
                <div class="col col-md-10 col-lg-8 mx-auto">
                    <h5>Written by</h5>
                    <div class="d-flex flex-column gap-3 py-3 border-top" data-bss-type="author-loop">

                        {authors.map((author) =>(
                            <ArticleAuthors
                            linkClass={author.linkClass}
                            linkDhref={author.linkDhref}
                            filterValue={author.filterValue}
                            to={author.to}
                            src={author.src}
                            spanText={author.spanText}
                            Textp={author.Textp}
                            />))
                        }
                       
                    </div>
                </div>
            </div>

            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
                
            <Footer props="Actualités"/>
        </>
    )
}

export default Article1;