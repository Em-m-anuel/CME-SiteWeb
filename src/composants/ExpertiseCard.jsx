function ExpertiseCard({src,alt,title,paragraphe,extrap=null,subtitle}){
    return(
        <section>
            <div className="container  my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                        <div className="card shadow-sm mb-4 shadow-lg border-0">
                            <img
                            src={src}
                            alt={alt}
                            className="card-img-top"
                            style={{ maxHeight: "300px", objectFit: "cover" }}
                            />

                            <div className="card-body text-center">
                            <h3 className="card-title fw-bold mb-3">
                                {title}
                            </h3>
                            <div className="card-text  text-muted text-start">
                                <p>
                                 {paragraphe}
                                </p>
                                <p>
                                <strong>
                                    {subtitle}
                                </strong>
                                </p>

                                {extrap.map((extra,index) => (
                                    <p key={index}>
                                        {extra}
                                    </p>
                                    ) )
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default ExpertiseCard;