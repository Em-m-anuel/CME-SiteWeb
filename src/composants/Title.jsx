import { Link } from "react-router-dom";

function Title({ texth1, links = null, bgImage }) {
  return (
    <section
      id="home"
      className="title-section d-flex align-items-center"
      style={{
        backgroundImage: bgImage
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "350px",
        color: "#fff",
        textAlign: "center",
        position: "relative"
      }}
    >
      <div className="container">
        <h1 className="display-5 fw-bold mb-3 animate__animated animate__fadeInDown">
          {texth1}
        </h1>

        {links && (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              {links.map((link, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === links.length - 1 ? "active" : ""
                  }`}
                  style={{
                    color: index === links.length - 1 ? "#f8f9fa" : "#ddd",
                    fontWeight: index === links.length - 1 ? "bold" : "normal"
                  }}
                >
                  {index === links.length - 1 ? (
                    link.text
                  ) : (
                    <Link
                      to={link.to}
                      className="text-decoration-none"
                      style={{ color: "#f8f9fa" }}
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

    </section>
  );
}

export default Title;
