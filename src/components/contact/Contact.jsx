import React, { useRef, useEffect, useState, Fragment } from "react";
import { gsap } from "gsap";
import './_contact.scss';
import emailjs from '@emailjs/browser';
import Alert from "../alert/Alert";



const Contact = () => {

    // Var d'état stockage input formulaire nom user
    const [user_name, setUser_Name] = useState("");
    // Var d'état pour afficher la fenetre de confirmation
    const [confirmation, setConfirmation] = useState(false);

    // Ref formulaire
    const form = useRef();
    // Fonction envoimail viaEmail.js
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_ugapd72',     // Remplacez par votre Service ID
            'template_ctumlyg',    // Remplacez par votre Template ID
            form.current,
            'jazdjC859PnG_THFw'    // Remplacez par votre clé publique EmailJS
        ).then(
            (result) => {
                console.log(result.text);
                // Réinitialisation des champs du formulaire
                form.current.reset();
                // Affichage de la confirmation
                setConfirmation(true);
            },
            (error) => {
                console.log(error.text);
                alert('Erreur lors de l\'envoi du message.');
            }
        );
    };
    

    

    // animation ... infinie
    const textRef = useRef(null);
    useEffect(() => {
        const timeline = gsap.timeline({repeat: -1});

        const chars = Array.from(textRef.current.querySelectorAll('.display-dots'));

        timeline.from(chars, {opacity: 0, stagger: 0.5})
        .to(chars, {opacity: 1, stagger: 0.5, delay: 0})
        .from(chars.reverse(), {opacity: 1, stagger: 0.5})
        .to(chars.reverse(), {opacity: 0, stagger: 0.5, delay: 0})

        return () => {
            timeline.kill();
        };
    }, []);



    return (
        <>
            <section id="contact">
                <h2 className='title'>Contactez-moi<span ref={textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2>
                <p className="contact-description">Vous pouvez me contacter via le formulaire ou les liens proposés, je vous répondrai dans les meilleurs délais.</p>
                <form ref={form} onSubmit={sendEmail} className="form-box">
                    <div className="form-content">
                        <div className="form-content-detail">
                            <input type="text" name="user_name" placeholder=" " required onChange={(e) => setUser_Name(e.target.value)}></input>
                            <label>nom *</label>
                        </div>
                        <div className="form-content-detail">
                            <input type="text" name="user_society" placeholder=" "></input>
                            <label>société</label>
                        </div>
                        <div className="form-content-detail"> 
                            <input type="tel" name="user_phone" placeholder=" "></input>
                            <label>téléphone</label>
                        </div>
                        <div className="form-content-detail">
                            <input type="email" name="user_email" id="mail-box" placeholder=" " required></input>
                            <label>email *</label>
                        </div>
                        <div className="form-content-detail">
                            <textarea name="user_message" placeholder=" " required></textarea>
                            <label>message *</label>
                        </div>
                        <button className="btn lightblue-btn submit-form-btn" type="submit">Soumettre</button>
                    </div>
                    <div className="form-content-right">
                        <div className="contact-box">
                            <div className="contact-detail-item">
                                <i className="fa-regular fa-envelope"></i>
                                <a href="mailto:contact@mohlecodeur.com">contact@mohlecodeur.com</a>
                            </div>
                            <div className="contact-detail-item">
                                <i className="fa-solid fa-phone-flip"></i>
                                <a href="tel:+22389767399">+223 89 76 73 99</a>
                            </div>
                            <div className="contact-detail-item">
                                <i className="fa-solid fa-house-chimney"></i>
                                <a  target="_blank" rel="noreferrer">Bamako Mali</a>
                            </div>
                            <div className="contact-detail-item">
                                <div className="contact-icon-container">
                                    <div className="icon-outline">
                                        <a href="https://www.linkedin.com/in/mohamed-coulibaly-tec/" target="_blank" rel="noreferrer">
                                            <i className="fa-brands fa-linkedin __social-icon"></i>
                                        </a>
                                    </div>
                                    <div className="icon-outline">
                                        <a href="https://github.com/MohLeCodeur" target="_blank" rel="noreferrer">
                                            <i className="fa-brands fa-github __social-icon"></i>
                                        </a>
                                    </div>
                                    
    <div className="icon-outline">
        <a href="https://wa.me/22389767399?text=Bonjour%20je%20veux%20vous%20contacter" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp __social-icon"></i>
        </a>
    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {confirmation && <Alert user_name={user_name} closeAlert={() => {setConfirmation(false)}}/>}
            </section>
        </>
    )
}

export default Contact;