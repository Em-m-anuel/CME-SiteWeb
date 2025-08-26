import TeamCard from "./teamCard"
function Team(){
    return (
        <section>
            <div className="container py-5">
                <div className="row mb-4 mb-lg-5">
                    <div className="col-md-8 col-xl-5 text-center mx-auto"><small className="text-uppercase">All star talent</small>
                        <h3 className="fs-2 fw-bold mb-4 heading">Our Team</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xl-7 mx-auto">
                        <div className="row row-cols-2 row-cols-md-3 mx-auto">
                            <TeamCard texth5="John Smith" textp="Erat netus" src="assets/img/team/avatar1.jpg" />
                            <TeamCard texth5="John Smith" textp="Erat netus" src="assets/img/team/avatar2.jpg" />
                            <TeamCard texth5="John Smith" textp="Erat netus" src="assets/img/team/avatar3.jpg" />
                            <TeamCard texth5="John Smith" textp="Erat netus" src="assets/img/team/avatar4.jpg" />
                            <TeamCard texth5="John Smith" textp="Erat netus" src="assets/img/team/avatar5.jpg" />
                            <TeamCard texth5="John Smith" textp="Erat netus" src="assets/img/team/avatar6.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;