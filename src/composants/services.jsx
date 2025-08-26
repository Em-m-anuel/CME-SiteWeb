import ServicesCard from "../composants/serviceCard"
function Services(){

    return (
        <section>
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-md-8 col-xl-5 text-center mx-auto"><small className="text-uppercase">What we offer</small>
                        <h3 className="fs-2 fw-bold mb-4 heading">Our Services</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xl-10 mx-auto">
                        <div className="row gy-4 row-cols-1 row-cols-md-2 mx-auto">
                            <ServicesCard className="card bg-info-subtle border-0" texth5="Graphic Design" textp="Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames." />
                            <ServicesCard className="card bg-success-subtle border-0" texth5="Interface Design" textp="Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames." />
                            <ServicesCard className="card bg-danger-subtle border-0" texth5="Branding" textp="Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames." />
                            <ServicesCard className="card bg-warning-subtle border-0" texth5="Video Production" textp="Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;