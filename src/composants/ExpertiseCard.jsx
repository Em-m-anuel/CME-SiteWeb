import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import '../style/ExpertiseCard.css';


function ExpertiseCard({ 
  title, 
  excerpt, 
  imageUrl, 
  link, 
  icon
 
}) {
  return (
    <div className="w-100 mb-4">
      <div 
        className="service-card"
        
      >
        <Link to={link} className="service-card-link">
          
          <div className="service-image-container">
            <img 
              src={imageUrl}
              alt={title}
              className="service-image"
              loading="lazy"
            />
          </div>

          <div className="service-content">
            <h3 className="service-title">{title}</h3>
            <p className="service-excerpt">{excerpt}</p>

            
            <div className="service-footer">
              <span className="see-more">
                Voir plus
                <BsArrowRightShort size={20} className="arrow-icon" />
              </span>
            </div>
          </div>

          <div className="service-icon-overlay">
            <div className="service-icon">
              {icon}
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default ExpertiseCard;