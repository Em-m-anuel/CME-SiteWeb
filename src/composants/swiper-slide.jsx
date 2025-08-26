function Swiper({Alt,Src,Height,Texth4,Textp,Imgclass,Width}){
    return (
        <>
            <div className="card border-0 project-item">
                <img className={Imgclass} alt={Alt} src={Src} height={Height} width={Width? Width: ""}/>
                <div className="card-img-overlay text-white">
                    <h4 className="fs-5 fw-bold">{Texth4}</h4>
                    <p>{Textp}</p>
                </div>
            </div>
        </>
    )
}

export default Swiper;