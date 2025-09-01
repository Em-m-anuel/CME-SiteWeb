import { useState } from "react";
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Contactform from "../composants/contactForm";
import FAQform from "../composants/faqForm";
import Title from "../composants/Title";

function Contact() {
    
    const faqs = [
    {
        question: "Quels types de services juridiques proposez-vous ?",
        reponse: "Nous offrons une gamme complète de services juridiques, incluant le droit des affaires, le droit fiscal, le droit du travail, le droit immobilier et le contentieux. Que vous soyez une entreprise ou un particulier, nous vous accompagnons avec des solutions sur mesure adaptées à vos besoins."
    },
    {
        question: "Comment garantissez-vous la confidentialité de mes informations ?",
        reponse: "La confidentialité est au cœur de notre déontologie. Toutes vos informations sont protégées par le secret professionnel et stockées de manière sécurisée. Nous mettons en place des protocoles stricts pour garantir la protection de vos données sensibles."
    },
    {
        question: "Quels sont les délais pour obtenir un conseil juridique ou une représentation ?",
        reponse: "Les délais dépendent de la complexité de votre dossier. Pour un conseil juridique simple, une réponse peut être fournie sous 24 à 48 heures. Pour des affaires nécessitant une analyse approfondie ou une représentation en justice, nous établissons un calendrier précis lors de notre premier rendez-vous."
    },
    {
        question: "Comment se déroule une collaboration avec votre cabinet ?",
        reponse: "Notre processus comprend 5 étapes : 1) Consultation initiale pour comprendre vos besoins, 2) Analyse juridique et stratégie, 3) Proposition d’accompagnement et devis, 4) Mise en œuvre des solutions juridiques, 5) Suivi et support post-intervention. Vous êtes tenu informé à chaque étape."
    }
];

   
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <Navbar props="Contact" />

            <Title
                texth1="Contactez-nous"
                links={""}
                bgImage={"/assets/img/services-expertises/Statue.jpg"}
            />

            <div className="py-5">
                <hr style={{ width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff' }} />
            </div>

            <Contactform
                texth1="Parlons de votre projet"
                textp="Vous avez un projet en tête ? Une question sur nos services ? Notre équipe est là pour vous accompagner. Contactez-nous dès maintenant pour échanger sur vos besoins."
                textb="Envoyer le message"
            />

            <div className="py-5">
                <hr style={{ width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff' }} />
            </div>

            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2 className="display-6 fw-bold text-primary mb-4">Questions Fréquentes</h2>
                        <p className="lead text-muted">
                            Retrouvez les réponses aux questions les plus courantes concernant nos services
                            et notre façon de travailler.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-md-10 col-lg-8 mx-auto">
                        <div className="accordion shadow-sm" role="tablist" id="accordion-1">
                            {faqs.map((faq, index) => (
                                <FAQform
                                    key={index}
                                    buttonData={`#accordion-1 .item-${index + 1}`}
                                    divClass={`accordion-collapse collapse ${activeIndex === index ? "show" : ""} item-${index + 1}`}
                                    buttonText={faq.question}
                                    textp={faq.reponse}
                                    onClick={() => toggleFAQ(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <hr style={{ width: '80%', margin: '8px auto', border: 'none', borderTop: '3px dashed #020202ff' }} />
            </div>

            <Footer props="Contact" />
        </>
    );
}

export default Contact;
