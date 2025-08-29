function AuthorsInfo({span,textp,src}){
    return (
        <div className="author-billy-thomas" data-bss-type="author-loop-item">
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <img className="rounded-circle object-fit-cover border border-5 border-light-subtle mb-3" alt="Venom" width="150" height="150" src={src}/>
                <div className="ps-3">
                    <h1 className="fw-bold mb-1"><span>{span}</span></h1>
                    <p className="lead mb-0">{textp}</p>
                </div>
            </div>
        </div>
    )
}

export default AuthorsInfo;