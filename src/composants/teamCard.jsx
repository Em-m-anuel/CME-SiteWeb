function TeamCard({texth5,textp,src}){
    return (
        <div className="mb-4">
            <div className="text-center"><img className="rounded object-fit-cover mb-3" width="200" height="200" src={src} alt="Devonte"/>
                <h5 className="fw-bold mb-0"><strong>{texth5}</strong></h5>
                <p className="text-muted mb-2">{textp}</p>
            </div>
        </div>
    )
}
export default TeamCard;