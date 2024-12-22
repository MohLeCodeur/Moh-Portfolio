import './_profil.scss';
// import pictCartoon from '../../img/PicID5.jpg'
import pictProfile from '../../img/Capture.png'
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const slideInTop = (elem) => {
    gsap.fromTo(
        elem,
        {
            opacity: 0,
            y: 100,
        },
        {
            opacity: 1,
            y: 0,
            delay: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center",
        }, 
    }
    )
}
const Profil = () => {
    
    // Slide section profil
    useEffect(() => {
        slideInTop('#profil');
    }, [])


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
        <section id='profil'>
            <div className='profil-container'>
                <div className="profil-presentation">
                    <div className="title">
                        <h2 className='profil-title'>A propos de moi<span ref={textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2>
                    </div>
                    <div className='profil-pict'>
                        <img className="profil-pict-main" src={pictProfile} alt='Benjamin Leveque'/>
                    </div>
                    <div className="profil-presentation-txt">
                    <p>Bonjour,</p>
<p>Je suis un <span>développeur Web Fullstack</span> basé à Bamako, passionné par le code et les nouvelles technologies. J'ai de l'expérience avec des frameworks comme <span>React.js</span> et <span>Laravel</span>, et je maîtrise des langages comme <span>HTML, CSS, JavaScript</span>, et <span>PHP</span>. Je crée aussi des <span>applications mobiles</span>, des <span>logiciels</span>, et je gère des <span>bases de données</span> comme MySQL.</p>
<p>J’aime travailler sur des projets innovants, notamment dans les domaines de la <span>crypto-monnaie</span>, de l’<span>éducation</span>, et de la <span>finance</span>. Avec des outils comme UML et Merise, je m’assure que tout soit bien structuré et fonctionne comme il faut. Curieux et motivé, je suis toujours à la recherche de nouveaux défis à relever.</p>
<p>Passionné par l’<span>informatique</span> et l’<span>intelligence artificielle</span>, je suis convaincu que la tech peut vraiment transformer notre quotidien. Si vous cherchez quelqu’un de dynamique pour collaborer sur des projets intéressants, n’hésitez pas à me contacter !</p>

                            </div>
                </div>
            </div>
        </section>
    )

}
export default Profil;
