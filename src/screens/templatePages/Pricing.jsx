import PricingCard from "../../composants/composantTemplate/pricingCard";
import Navbar from "../../composants/Navbar";
import Footer from "../../composants/Footer";
function Pricing(){
    return (
        
        <>
            <Navbar/>
            <section>
                <div class="container py-4 py-xl-5">
                    <div class="row mb-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h1 class="fw-bold">Pricing</h1>
                            <p>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
                        </div>
                    </div>
                    <div class="row gy-4 gy-xl-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-xl-flex align-items-xl-center">
                        <PricingCard 
                            divClass="card"
                            forfait="standard"
                            price="$15"
                            advantages={["Lectus ut nibh quam, felis porttitor.","Ante nec venenatis etiam lacinia.","Porta suscipit netus ad ac."]}
                            to="#"
                            linkText="Button"
                        />

                        <PricingCard 
                            divClass="card"
                            span="Most Popular"
                            forfait="Pro"
                            price="$38"
                            advantages={["Lectus ut nibh quam, felis porttitor.","Ante nec venenatis etiam lacinia.","Porta suscipit netus ad ac.","Morbi praesent aptent integer at.","Morbi praesent aptent integer at."]}
                            to="#"
                            linkText="Button"
                        />

                        <PricingCard 
                            divClass="card"
                            forfait="Entreprise"
                            price="$70"
                            advantages={["Lectus ut nibh quam, felis porttitor.","Ante nec venenatis etiam lacinia.","Porta suscipit netus ad ac."]}
                            to="#"
                            linkText="Button"
                        />
                    </div>
                </div>
            </section>

            <Footer props="Pricing"/>
        </>
    )
}

export default Pricing;