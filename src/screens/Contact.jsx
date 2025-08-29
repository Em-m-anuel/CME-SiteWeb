// Contact.jsx
import Navbar from "../composants/Navbar";
import Footer from "../composants/Footer";
import Contactform from "../composants/contactForm";
import FAQform from "../composants/faqForm";
import Title from "../composants/Title";

function Contact(){
    return(
        <>
            <Navbar props="Contact"/>

            <Title 
                texth1="Contactez-nous"
                links={[{to:"/",text :"Accueil"}, {to:"#",text :"Contact"}]}
                bgImage={"/assets/img/projects/Law.jpg"}
            />

            <Contactform 
                texth1="Parlons de votre projet" 
                textp="Vous avez un projet en tête ? Une question sur nos services ? Notre équipe est là pour vous accompagner. Contactez-nous dès maintenant pour échanger sur vos besoins." 
                textb="Envoyer le message"
            />
            
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
                            <FAQform 
                                buttonData="#accordion-1 .item-1"  
                                divClass="accordion-collapse collapse show item-1"  
                                buttonText="Combien de temps faut-il pour développer un site web ?" 
                                textp="Le délai de développement varie selon la complexité du projet. Pour un site vitrine standard, comptez 2 à 4 semaines. Pour une application web plus complexe avec fonctionnalités spécifiques, cela peut prendre de 6 à 12 semaines. Nous établissons toujours un planning détaillé lors de notre première rencontre." 
                            />
                            <FAQform 
                                buttonData="#accordion-1 .item-2"  
                                divClass="accordion-collapse collapse item-2"  
                                buttonText="Proposez-vous la maintenance après livraison ?" 
                                textp="Absolument ! Nous proposons différents contrats de maintenance : mise à jour de sécurité, sauvegarde automatique, monitoring, support technique et évolutions fonctionnelles. Votre site reste performant et sécurisé dans la durée." 
                            />
                            <FAQform 
                                buttonData="#accordion-1 .item-3"  
                                divClass="accordion-collapse collapse item-3"  
                                buttonText="Travaillez-vous avec des entreprises de toutes tailles ?" 
                                textp="Oui, nous accompagnons aussi bien les startups que les PME et grandes entreprises. Chaque projet est unique et nous adaptons notre approche selon vos besoins, votre budget et vos objectifs business." 
                            />
                            <FAQform 
                                buttonData="#accordion-1 .item-4"  
                                divClass="accordion-collapse collapse item-4"  
                                buttonText="Comment se déroule un projet avec CME ?" 
                                textp="Notre processus en 5 étapes : 1) Analyse de vos besoins et audit, 2) Proposition technique et devis, 3) Design et prototypage, 4) Développement et tests, 5) Livraison et formation. Vous êtes impliqué à chaque étape avec des points réguliers." 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer props="Contact"/>
        </>
    )
}

export default Contact;