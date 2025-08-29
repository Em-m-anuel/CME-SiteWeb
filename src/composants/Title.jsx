import { Link } from "react-router-dom";
function Title({texth1,links=null,bgImage}){
    return (
        <section id="home" className="py-5 bg-light" 
            style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
            backgroundRepeat: "no-repeat"}}>

            <div className=" py-4 mb-4" >
                <div className="container">
                    
                    <div className="text-start" style={{
                        backgroundColor: "rgba(143, 140, 140, 0.49)", 
                        padding: "15px",
                        borderRadius: "8px",
                        display: "inline-block"}} >
                       
                        <h1 className="display-8 fw-bold mb-2" >
                            {texth1}
                        </h1>

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                {links &&(
                                    links.map((link,index)=>(
                                        <li className="breadcrumb-item" key={index}>
                                            <Link to={link.to} className="text-decoration-none text-primary">
                                            {link.text}
                                            </Link>
                                        </li>) 
                                    )
                                )}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Title;