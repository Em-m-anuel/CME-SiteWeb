import ProcessSteps from "./processSteps"
function Process(){
    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-md-8 col-xl-5 text-center mx-auto"><small className="text-uppercase">How we work</small>
                            <h3 className="fs-2 fw-bold mb-4 heading">Our Process</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xl-10 mx-auto">
                            <div className="row gy-4 row-cols-1 row-cols-md-2 mx-auto">
                                <ProcessSteps className="card bg-body-tertiary border-0" bodyclassName="card-body text-center text-sm-start d-flex flex-column align-items-center gap-3 flex-sm-row p-4" number="01" texth5="Lorem ipsum dolor sit&nbsp;" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." />
                                <ProcessSteps className="card bg-body-tertiary border-0" bodyclassName="card-body text-center text-sm-start d-flex flex-column align-items-center gap-3 flex-sm-row p-4" number="02" texth5="Lorem ipsum dolor sit&nbsp;" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." />
                                <ProcessSteps className="card bg-body-tertiary border-0" bodyclassName="card-body text-center text-sm-start d-flex flex-column align-items-center gap-3 flex-sm-row p-4" number="03" texth5="Lorem ipsum dolor sit&nbsp;" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." />
                                <ProcessSteps className="card bg-body-tertiary border-0" bodyclassName="card-body text-center text-sm-start d-flex flex-column align-items-center gap-3 flex-sm-row p-4" number="04" texth5="Lorem ipsum dolor sit&nbsp;" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-10 mx-auto">
                            <div className="card border-0 hero" data-bs-theme="light">
                                <div className="card-body py-md-4">
                                    <div className="row gy-4 gy-lg-0 row-cols-1 row-cols-md-2 mx-auto">
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="01" texth5="Discovery Phase" textp="Understanding the client's needs and goals. Preparing a project proposal." />
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="02" texth5="Concept Development" textp="Starting work. Creating initial design ideas and concepts for client approval." />
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="03" texth5="Refinement" textp="Collaborating with the client to refine and finalize designs." />
                                        <ProcessSteps className="card bg-transparent border-0" bodyclassName="card-body text-center text-lg-start d-flex flex-column align-items-center gap-3 flex-lg-row p-0 p-lg-4" number="04" texth5="Final Delivery" textp="Producing final deliverables and handing off to the client." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process;