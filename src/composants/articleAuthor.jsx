import { Link } from "react-router-dom"
function ArticleAuthors({linkClass,to,src,spanText,Textp,linkDhref,filterValue}){
    return (
        <Link class={linkClass} data-bss-type="author-loop-item" data-bss-href={linkDhref} data-bss-filter="blog" data-bss-filter-param="author" data-bss-filter-value={filterValue} to={to}>
            <div class="d-flex gap-2">
                <img class="rounded-circle object-fit-cover border border-3 border-light flex-shrink-0" alt="Brujah" width="60" height="60" src={src}/>
                <div class="d-flex flex-column"><span class="fw-bold">{spanText}</span>
                    <p class="text-muted mb-0">{Textp}</p>
                </div>
            </div>
        </Link>
    )
}

export default ArticleAuthors;