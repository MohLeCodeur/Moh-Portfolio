import './_skills.scss'
import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin( ScrollToPlugin, ScrollTrigger);

const Skills = () => {

    const textRef = useRef(null);
    useEffect(() => {
        const timeline = gsap.timeline({ repeat: -1 });

        const chars = Array.from(textRef.current.querySelectorAll('.display-dots'));

        timeline.from(chars, {opacity: 0, stagger: 0.5})
        .to(chars, {opacity: 1, stagger: 0.5, delay: 0})
        .from(chars.reverse(), {opacity: 1, stagger: 0.5})
        .to(chars.reverse(), {opacity: 0, stagger: 0.5, delay: 0})

        return () => {
            timeline.kill();
        };
    }, []);

    const slideInTop = (elem) => {
        gsap.fromTo(
            elem,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                delay: .2,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                },
            }
        )
    }

    const fullfillBars = (elem, options) => {
        gsap.fromTo(
            elem,
            {
                opacity: 1,
                width: "0%",
            },
            {
                opacity: 1,
                width: options,
                delay: 1,
                duration: 2,
                ease: "power4",
                scrollTrigger: {
                    trigger: elem,
                    start: "-500 center",
                    end: "bottom center",
                }
            }
        )
    }

    useEffect(() => {
        slideInTop("#skills");
    })

    useEffect(() => {
        fullfillBars(".html_skill", "70%");
        fullfillBars(".css_skill", "70%");
        fullfillBars(".bootstrap_skill", "50%");
        fullfillBars(".javascript_skill", "70%");
        fullfillBars(".react_skill", "70%");
        fullfillBars(".node_skill", "60%");
        fullfillBars(".sql_skill", "60%");
        fullfillBars(".adobe_XD_skill", "60%");
        fullfillBars(".adobe_PS_skill", "50%");
        fullfillBars(".adobe_IL_skill", "50%");
        fullfillBars(".erp_skill", "70%");
        fullfillBars(".catia_skill", "70%");
        fullfillBars(".office_skill", "90%");
    }, []);

    return (
        <section id='skills'>
            <div className='skills-title'>
                <h2>Compétences<span ref={textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2>
            </div>
            <div className='skills-container'>
                <div className="skill-box">
                    <div className="box">
                        <h3>Front-end</h3>
                        <div className="skill-item">
                            <p>HTML</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled html_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>CSS / SCSS</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled css_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Bootstrap/ Tailwind</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Javascript</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled javascript_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>React JS</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled react_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Angular</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Flutter/ReactNative</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <h3>Back-end</h3>
                        <div className="skill-item">
                            <p>Laravel</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled node_skill"></div>
                            </div>
                        </div>
                        
                        <div className="skill-item">
                            <p>mySQL</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled sql_skill"></div>
                            </div>
                            <div className="skill-item">
                            <p>mongo DB</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Node js</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Spring Boot</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Design</h3>
                        {/* <div className="skill-item">
                            <p>Adobe XD</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled adobe_XD_skill"></div>
                            </div>
                        </div> */}
                        <div className="skill-item">
                            <p>Adobe Photohop</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled adobe_PS_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>Adobe Illustrator</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled adobe_IL_skill"></div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h3>DevOps</h3>
                        <div className="skill-item">
                            <p>Git/GIthub</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled erp_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>GitLab</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled catia_skill"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* <div className='cv-download'>
                    <img src='./capture-cv-benjamin-leveque.JPG' alt="CV Benjamin Leveque" className='cv-download-img'></img>
                    <button className='btn lightblue-btn'><a href="./CV B.LEVEQUE 2023-blue.pdf" alt="CV en ligne de Benjamin Leveque" target="_blank" download>Télécharger CV</a></button>
                </div> */}
            </div>
        </section>
    )
}
export default Skills;