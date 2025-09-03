import PostCard from "./postCard";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { postcards } from "../data/Actualites";
function Posts(){

    const [actualites,setActualites] =useState([]);
    const randomActu = (tab,nbre =3) =>{
        if (tab.length <= nbre){
            return tab;
        }
        const randomActuX= [...tab].sort(()=>0.5-Math.random());
        return randomActuX.slice(0,nbre);
    }
    useEffect(()=>{
        const randomX=randomActu(postcards);
        setActualites(randomX);
    },[])
   
    return (
        <section className="py-5">
            <div className="py-5">
                <hr style={{width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff'}}/>
            </div>
            <div className="container py-5">
                <div className="row mb-5 mb-lg-4">
                    <div className="col text-center d-flex justify-content-between align-items-center mx-auto">
                        <h3 className="fs-3 fw-bold mb-0 heading">Dernières Actualités</h3>
                        
                            <Link to="/Blog" className="fw-semibold text-decoration-none d-inline-flex align-items-center text-primary hover-link">
                                <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" type="button">
                                    Voir plus&nbsp;
                                    <BsArrowRightShort size={20} />
                                </button>
                            </Link>
                    </div>
                </div>
                <div data-bss-type="blog-loop">
                    <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3" data-bss-type="blog-loop-base">
                        {actualites.map((post)=>(
                            <PostCard
                            className={post.className}
                            texth4={post.texth4}
                            textp={post.textp}
                            alt={post.alt}
                            src={post.src}
                            time={post.time}
                            datetime={post.datetime}
                            to={post.to}
                            tags={post.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts;