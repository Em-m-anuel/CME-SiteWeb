function FAQform({buttonData, divClass, buttonText, textp}){
    return (
        <div className="accordion-item border-0 mb-3 rounded-3 shadow-sm">
            <h2 className="accordion-header" role="tab">
                <button 
                    className="accordion-button fw-semibold text-dark bg-white rounded-3" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={buttonData} 
                    aria-expanded="true" 
                    aria-controls={buttonData}
                >
                    {buttonText}
                </button>
            </h2>
            <div className={divClass} role="tabpanel" data-bs-parent="#accordion-1">
                <div className="accordion-body bg-light">
                    <p className="mb-0 text-muted lh-base">{textp}</p>
                </div>
            </div>
        </div>
    )
}

export default FAQform;