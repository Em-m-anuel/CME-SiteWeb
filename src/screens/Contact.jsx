import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Contactform from "../composants/contactForm";
import FAQform from "../composants/faqForm";
function Contact(){
    return(
        <>
            <Navbar props="Contact"/>

            <Contactform texth1="Contact Us" textp="Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean." textb="Send"/>
            
            <div className="container py-4">
                <div className="row mb-4">
                    <div className="col-md-8 col-xl-5 text-center mx-auto">
                        <h3 className="display-6 text-uppercase fw-bold">FAQ</h3>
                        <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-10 col-lg-7 mx-auto">
                        <div className="accordion" role="tablist" id="accordion-1">
                            <FAQform buttonData="#accordion-1 .item-1"  divClass="accordion-collapse collapse show item-1"  buttonText="Aenean arcu euismod aliquam, volutpat consequat?" textp="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." />
                            <FAQform buttonData="#accordion-1 .item-2"  divClass="accordion-collapse collapse show item-2"  buttonText="Aenean arcu euismod aliquam, volutpat consequat?" textp="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." />
                            <FAQform buttonData="#accordion-1 .item-3"  divClass="accordion-collapse collapse show item-3"  buttonText="Aenean arcu euismod aliquam, volutpat consequat?" textp="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." />
                            <FAQform buttonData="#accordion-1 .item-4"  divClass="accordion-collapse collapse show item-4"  buttonText="Aenean arcu euismod aliquam, volutpat consequat?" textp="Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus." />
                        </div>
                    </div>
                </div>
            </div>

            <Footer props="Contact"/>
        </>
    )
}

export default Contact;