import { Link } from "react-router-dom";
import { IoIosCheckmark } from "react-icons/io";
function PricingCard({divClass,span=null,forfait,price,advantages=null,to,linkText}){
    return (
        <div className="col">
            <div className={divClass}>
                <div className="card-body text-center p-4">
                    {span && (<span className="badge rounded-pill bg-primary position-absolute top-0 start-50 translate-middle text-uppercase">{span}</span>)}
                    
                    <h6 className="text-uppercase text-muted card-subtitle">{forfait}</h6>
                    <h4 className="display-4 fw-bold card-title">{price}</h4>
                </div>
                <div className="card-footer p-4">
                    <div>
                        <ul className="list-unstyled">
                            {advantages.map((advantage,index) =>(
                                <li className="d-flex mb-2" key={index}>
                                    <span className="bs-icon-xs me-2 bs-icon">
                                        <IoIosCheckmark />
                                    </span>
                                    <span>{advantage}</span>
                                </li>
                            ))}
                        </ul>
                    </div><Link className="btn btn-primary d-block w-100" role="button" to={to}>{linkText}</Link>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;