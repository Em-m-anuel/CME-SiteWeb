function FAQform({buttonData,divclass,buttonText,textp}){

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" role="tab">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={buttonData} aria-expanded="true" aria-controls={buttonData}>{buttonText}</button>
                </h2>
                <div className={divclass} role="tabpanel" data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                        <p className="mb-0">{textp}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQform;