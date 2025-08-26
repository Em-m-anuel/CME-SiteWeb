import { BsArrowRightShort } from "react-icons/bs";
import {Link} from "react-router-dom";
function ServicesCard({className,texth5,textp}){
    return (
        <div>
            <div className={className} data-bs-theme="light">
                <div className="card-body d-flex align-items-center p-4">
                    <div>
                        <h5 className="fs-3 fw-bold mb-3">{texth5}</h5>
                        <p className="mb-3">{textp}</p>
                            <Link className="fw-semibold" to="#">Learn more&nbsp;
                                <BsArrowRightShort />
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;