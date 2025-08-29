import ArticleAuthors from "../../composants/articleAuthor";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
import Title from "../../composants/Title";

function Article1(){
    return(
        <>
            <Navbar props="Actualites"/>
            <Title 
                texth1="Actualités"
                links={[{to:"/Blog",text :"Actualité"},{to:"#",text:"Article-1"}]}
                bgImage={"/assets/img/projects/Law.jpg"}
            />
            <section class="py-4 py-xl-5">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-9 col-xl-8 mx-auto">
                            <div class="text-center">
                                <div class="d-flex justify-content-center flex-wrap gap-1 mb-2" data-bss-type="tag-loop"><a class="tag-design" data-bss-type="tag-loop-item" data-bss-href="/blog.html?tag=design" data-bss-filter="blog" data-bss-filter-param="tag" data-bss-filter-value="design" href="/blog.html?tag=design"><span class="badge rounded-pill bg-light px-3 py-2"><span>Design</span></span></a></div>
                                <h1 class="display-4 fw-bold mb-md-3">Reimagining Digital Design</h1>
                                <p class="lead fw-light mb-3">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><time class="fw-semibold" datetime="2025-01-12">Jan 12, 2025</time>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mx-auto">
                            <img class="rounded img-fluid aspect-ratio-16x9 object-fit-cover w-100 my-4 my-xl-5" alt="The peak iOS mockup" width="1024" height="1024" src="../assets/img/projects/project1.webp"/>
                        </div>
                    </div>
                    <div class="row row-cols-1 justify-content-center mb-5">
                        <div class="col-md-10 col-lg-9 col-xl-8">
                            <div>
                                <h2 class="fw-bold" id="section-2">A vitae quisque litora</h2>
                                <p>Eleifend placerat sed phasellus suspendisse, phasellus ultrices aliquam scelerisque. Proin vestibulum dui vehicula consectetur. Malesuada vestibulum etiam gravida faucibus. Ultrices ante consequat pellentesque, posuere sollicitudin. Molestie lorem ultricies fusce odio.</p>
                                <ul>
                                    <li>Imperdiet diam quam mauris nisl, praesent blandit ut.</li>
                                    <li>Faucibus faucibus sapien mollis morbi.</li>
                                    <li>Class diam aliquam justo, vehicula id mi.</li>
                                </ul>
                                <p>Egestas augue vulputate, consequat vulputate nec risus dictum. Habitasse scelerisque non lacus, et nullam nisi mauris. Duis odio quam conubia commodo, erat nisi sem ullamcorper.</p>
                                <h2 class="fw-bold">Sed vitae</h2>
                                <p>Fermentum gravida aptent platea sit gravida, enim donec. Sapien nisl venenatis, hendrerit lectus purus. Aliquam aliquam nibh aptent ullamcorper, condimentum donec quisque. Augue blandit proin justo pretium, amet viverra vestibulum vulputate. Sociosqu aliquam varius iaculis, dapibus eget. Himenaeos pulvinar fermentum nunc fermentum massa, lectus duis. Vehicula platea lectus quisque posuere.</p>
                                <figure class="text-center">
                                    <blockquote class="blockquote">
                                        <p class="mb-0">Pellentesque dui egestas, ornare platea maecenas. Fusce nam eros mauris.</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">Someone famous</figcaption>
                                </figure>
                                <p>Fermentum gravida aptent platea sit gravida, enim donec. Sapien nisl venenatis, hendrerit lectus purus. Aliquam aliquam nibh aptent ullamcorper, condimentum donec quisque. Augue blandit proin justo pretium, amet viverra vestibulum vulputate. Sociosqu aliquam varius iaculis, dapibus eget. Himenaeos pulvinar fermentum nunc fermentum massa, lectus duis. Vehicula platea lectus quisque posuere.</p>
                            </div>
                        </div>
                        <div class="col col-lg-10 col-xl-9">
                            <figure class="figure text-center w-100 my-3">
                                <img class="rounded img-fluid aspect-ratio-16x9 object-fit-cover figure-img w-100 mb-2 mb-xl-2" alt="Planet Sky" width="1024" height="1024" src="../assets/img/projects/project2.webp"/>
                                <figcaption class="figure-caption">Credit: John Smith</figcaption>
                            </figure>
                        </div>
                        <div class="col-md-10 col-lg-9 col-xl-8">
                            <div>
                                <p>Fermentum gravida aptent platea sit gravida, enim donec. Sapien nisl venenatis, hendrerit lectus purus. Aliquam aliquam nibh aptent ullamcorper, condimentum donec quisque. Augue blandit proin justo pretium, amet viverra vestibulum vulputate. Sociosqu aliquam varius iaculis, dapibus eget. Himenaeos pulvinar fermentum nunc fermentum massa, lectus duis. Vehicula platea lectus quisque posuere.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-md-10 col-lg-8 mx-auto">
                            <h5>Written by</h5>
                            <div class="d-flex flex-column gap-3 py-3 border-top" data-bss-type="author-loop">
                                <ArticleAuthors 
                                linkClass="author-billy-thomas text-decoration-none text-body"
                                linkDhref="/authors.html?author=billy-thomas"
                                filterValue="billy-thomas"
                                to="/authors.html?author=billy-thomas"
                                src="../assets/img/team/avatar2.jpg"
                                spanText="Billy Thomas"
                                Textp="Dapibus donec suscipit dictumst, ac ligula ante. Blandit suspendisse nullam sagittis sapien phasellus, phasellus placerat."
                                />
                                <ArticleAuthors 
                                linkClass="author-jenny-doe text-decoration-none text-body"
                                linkDhref="/authors.html?author=jenny-doe"
                                filterValue="jenny-doe"
                                to="/authors.html?author=jenny-doe"
                                src="../assets/img/team/avatar2.jpg"
                                spanText="Jenny Doe"
                                Textp="Dapibus donec suscipit dictumst, ac ligula ante. Blandit suspendisse nullam sagittis sapien phasellus, phasellus placerat."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer props="Article"/>
        </>
    )
}

export default Article1;