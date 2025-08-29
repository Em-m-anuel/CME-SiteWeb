import PostCard from "../../composants/postCard";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
function Authors(){
    return (
        <>
            <Navbar/>
            <section>
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col col-md-8 text-center mx-auto">
                            <div className="mb-3" data-bss-type="author-nav" data-bss-filters="[&quot;author&quot;]" style={{display: "none !important"}}>
                                <div className="author-billy-thomas" data-bss-type="author-loop-item">
                                    <div className="text-center d-flex flex-column justify-content-center align-items-center">
                                        <img className="rounded-circle object-fit-cover border border-5 border-light-subtle mb-3" alt="Venom" width="150" height="150" src="assets/img/team/avatar2.jpg"/>
                                        <div className="ps-3">
                                            <h1 className="fw-bold mb-1"><span>Billy Thomas</span></h1>
                                            <p className="lead mb-0">Dapibus donec suscipit dictumst, ac ligula ante. Blandit suspendisse nullam sagittis sapien phasellus, phasellus placerat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="author-jenny-doe" data-bss-type="author-loop-item">
                                    <div className="text-center d-flex flex-column justify-content-center align-items-center">
                                        <img className="rounded-circle object-fit-cover border border-5 border-light-subtle mb-3" alt="Venom" width="150" height="150" src="assets/img/team/avatar3.jpg"/>
                                        <div className="ps-3">
                                            <h1 className="fw-bold mb-1"><span>Jenny Doe</span></h1>
                                            <p className="lead mb-0">Dapibus donec suscipit dictumst, ac ligula ante. Blandit suspendisse nullam sagittis sapien phasellus, phasellus placerat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-bss-type="blog-loop" data-bss-filters="[&quot;author&quot;]" data-bss-empty-filter-actions="[{&quot;filter&quot;:&quot;author&quot;,&quot;value&quot;:&quot;show-all&quot;}]" style={{display: "none !important"}}>
                        <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3" data-bss-type="blog-loop-base">
                            <PostCard texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                            <PostCard texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                            <PostCard texth4="Reimagining Digital Design Once Again" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" tags={["Design","Digital"]} />
                            <PostCard texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" tags={["Design","Digital"]} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer props="Authors"/>
        </>
    )
}

export default Authors;