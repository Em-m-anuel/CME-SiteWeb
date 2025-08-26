import PostCard from "./postCard";
import { BsArrowRightShort } from "react-icons/bs";
function Posts(){
    return (
         <section>
            <div className="container py-5">
                <div className="row mb-4 mb-lg-5">
                    <div className="col-md-8 col-xl-5 text-center mb-4 mx-auto"><small className="text-uppercase">from our blog</small>
                        <h3 className="fs-2 fw-bold mb-4 heading">Latest Posts</h3>
                        <button className="btn btn-primary" type="button">See all&nbsp;
                            <BsArrowRightShort />
                        </button>
                    </div>
                </div>
                <div data-bss-type="blog-loop">
                    <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3" data-bss-type="blog-loop-base">
                        <PostCard className="post-tag-design post-author-billy-thomas post-author-jenny-doe" texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                        <PostCard className="post-tag-design post-author-billy-thomas post-author-jenny-doe" texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                        <PostCard className="post-tag-design post-author-billy-thomas post-author-jenny-doe" texth4="Reimagining Digital Design" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." alt="The peak iOS mockup" src="assets/img/projects/project1.webp" time="Jan 12, 2025" datetime="2025-01-12" to="blog/article-1.html" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;