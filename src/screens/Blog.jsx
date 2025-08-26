import PostCard from "../composants/postCard";
import {Link} from "react-router-dom";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
function Blog(){
    return(
        <>

            <Navbar props="Blog"/>
            <section>
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-md-8 col-xl-5 text-center mx-auto">
                            <h1 className="display-5 fw-bold mb-3 heading">Blog</h1>
                            <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                        </div>
                    </div>
                    <div className="row mb-4 mb-lg-5">
                        <div className="col-md-8 col-xl-5 mx-auto">
                            <ul className="nav nav-pills d-flex justify-content-center flex-wrap" data-bss-type="tag-nav" data-bss-sync-url="true">
                                <li className="nav-item tag-all" data-bss-type="tag-loop-item" data-bss-to="" data-bss-filter="blog" data-bss-filter-param="tag" data-bss-filter-value="" data-bss-tag=""><Link className="nav-link" to="" data-bss-state-node=""><span>All</span></Link></li>
                                <li className="nav-item tag-design" data-bss-type="tag-loop-item" data-bss-to="" data-bss-filter="blog" data-bss-filter-param="tag" data-bss-filter-value="design" data-bss-tag="design"><Link className="nav-link" to="" data-bss-state-node=""><span>Design</span></Link></li>
                                <li className="nav-item tag-digital" data-bss-type="tag-loop-item" data-bss-to="" data-bss-filter="blog" data-bss-filter-param="tag" data-bss-filter-value="digital" data-bss-tag="digital"><Link className="nav-link" to="" data-bss-state-node=""><span>Digital</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div data-bss-type="blog-loop" data-bss-filters="[&quot;tag&quot;]" data-bss-empty-filter-actions="[{&quot;filter&quot;:&quot;tag&quot;,&quot;value&quot;:&quot;show-all&quot;}]"  style={{display : "none !important" }}>
                        <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3" data-bss-type="blog-loop-base">
                            <PostCard texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                            <PostCard texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                            <PostCard texth4="Reimagining Digital Design Once Again" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" tags={["Design","Digital"]} />
                            <PostCard texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" tags={["Design","Digital"]} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer props="Blog"/>
        </>
    )
}

export default Blog;