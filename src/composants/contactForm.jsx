function Contactform({texth1,textp,textb}){
    return (
        <section>
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-md-8 col-xl-5 text-center mx-auto">
                        <h1 className="display-5 fw-bold mb-3 heading">{texth1}</h1>
                        <p>{textp}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <form method="post">
                            <div className="mb-3"><input className="form-control" type="text" id="name-2" name="name" placeholder="Name"/></div>
                            <div className="mb-3"><input className="form-control" type="email" id="email-2" name="email" placeholder="Email"/></div>
                            <div className="mb-3"><textarea className="form-control" id="message-2" name="message" rows="6" placeholder="Message"></textarea></div>
                            <div><button className="btn btn-primary w-100 d-block" type="submit">{textb}</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactform;