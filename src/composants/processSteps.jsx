function ProcessSteps({number,texth5,textp,className,bodyclassName}){
    return (
        <div>
            <div className={className} data-bs-theme="light">
                <div className={bodyclassName}>
                    <div>
                        <div className="text-white bg-primary rounded-circle d-flex justify-content-center align-items-center step">
                            <span className="fs-2 fw-bold">{number}</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="fw-bold">{texth5}</h5>
                        <p className="text-muted mb-0">{textp}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProcessSteps;


