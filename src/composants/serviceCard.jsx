import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

function ServicesCard({ className, title, description, icon, to = "#" }){
    return (
        <div className="h-100">
            <div className={className} data-bs-theme="light">
                <div className="card-body d-flex flex-column justify-content-between p-4 h-100">
                    
                    <div className="mb-4">
                        {icon && <div className="mb-3">{icon}</div>}
                        <h3 className="h4 fw-bold mb-3 text-dark">{title}</h3>
                        <p className="text-muted mb-4 lh-base">{description}</p>
                    </div>
                    
                    
                    <div className="mt-auto">
                        <Link 
                            className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link" 
                            to={to}
                            aria-label={`En savoir plus sur ${title}`}
                        >
                            <span>En savoir plus</span>
                            <BsArrowRightShort size={20} className="ms-1 arrow-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            
            
             <style jsx>{`
                .hover-link {
                    transition: all 0.3s ease;
                }
                .hover-link:hover {
                    color: var(--bs-primary) !important;
                    transform: translateX(4px);
                }
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
                .hover-link:hover .arrow-icon {
                    transform: translateX(4px);
                }
                .card {
                    transition: all 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                }
                .letter-spacing-1 {
                    letter-spacing: 1px;
                }
            `}</style> 
        </div>
    )
}

export default ServicesCard;