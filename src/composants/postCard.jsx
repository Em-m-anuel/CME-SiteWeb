import { Link } from "react-router-dom";
function PostCard({texth4,textp,alt,src,to,time,datetime,tags=null,className}){
    return (
        <div className={className} data-bss-type="blog-loop-item">
            <div className="card border-0">
                <a className="position-relative" href="blog/article-1.html">
                    <img className="rounded img-fluid aspect-ratio-4x3 object-fit-cover w-100 card-img-top" alt={alt} width="1024" height="1024" src={src}/>
                    <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute p-2 me-3 mb-3 px-3 bottom-0 end-0">
                        <time datetime={datetime}>{time}</time>
                    </span>
                </a>
                <div className="card-body">
                    {tags && tags.length > 0 && (
                        <div className="d-flex flex-wrap gap-1 mb-2" data-bss-type="tag-loop">
                            {tags.map((tag,index) => (
                            <span className="tag-design" data-bss-type="tag-loop-item" key={index}>
                                    <span className="badge bg-primary">
                                        <span>{tag}</span>
                                    </span>
                                </span> 
                            ))}
                        </div>
                        )
                    }
                    <Link to={to}>
                        <h4 className="fs-5 fw-semibold text-body">{texth4}</h4>
                    </Link>
                    <p className="card-text">{textp}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard;