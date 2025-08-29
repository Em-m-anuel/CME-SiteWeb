import PostCard from "./postCard";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
function Posts(){
   
    return (
         <section>
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
                        <PostCard className="post-tag-design post-author-billy-thomas post-author-jenny-doe" texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="/Blog" />
                        <PostCard className="post-tag-design post-author-billy-thomas post-author-jenny-doe" texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="/Blog" />
                        <PostCard className="post-tag-design post-author-billy-thomas post-author-jenny-doe" texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="/Blog" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;