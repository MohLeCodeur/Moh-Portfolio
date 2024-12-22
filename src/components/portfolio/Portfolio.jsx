import { Component, Fragment, createRef } from 'react';
import { gsap } from 'gsap';
import './_portfolio.scss';
import Popup from '../popup/Popup';


import portfolioProjet1 from '../../img/portfolio-projet1-findyourwave.png';
import portfolioProjet2 from '../../img/portfolio-projet2-portfolio-web-developper.png';
import thumbProjet1 from '../../img/thumb-portfolio-projet1-findyourwave.png';
import thumbProjet2 from '../../img/thumb-portfolio-projet2-portfolio-dev-web.png'
import portfolioProjet3 from '../../img/portfolio-projet3-Markdown-previewer.png';
import portfolioProjet4 from '../../img/portfolio-projet4-Drum-machine.png';
import portfolioProjet5 from '../../img/portfolio-projet5-Calculator-machine.png';


class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            popups: [
                {
                    id: 1,
                    trigger: false,                 
                    title: 'Find Your Wave | application SPA',
                    thumbInsight: "Projet de formation",
                    content: "Application pour surfers et bodyboarders. Aprés création du profil, permet de consulter les prévisions météos et marées partout dans le monde et les enregistrer. Archivage des sessions de surf et infos associées.",
                    imageProjet: portfolioProjet1,
                    thumbProjet: thumbProjet1,
                    content2:"Single Page Application développée dans le cadre de mon projet de formation, que je continue à développer en autonomie. Données utilisateurs enregistrées et sécurisées en base de données mySQL, Serveur API Express/NodeJS avec architecture REST et gestion du CRUD, avec entre autres un panel Admin. ",
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
                    skillsBack: ["Node.JS", "Express", "MySQL", "API externes"],
                },
                {
                    id: 2,
                    trigger: false,
                    title: 'Portfolio | application SPA',
                    thumbInsight: "Site web développeur",
                    content: "Site sur lequel vous êtes actuellement, et toujours en cours d'évolution",
                    imageProjet: portfolioProjet2,
                    thumbProjet: thumbProjet2,
                    content2:"Single Page Application développée sous Framework React.JS, animations avec librairies GSAP ou VanillaJS.",
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
                    skillsBack: [],
                },
                {
                    id: 3,
                    trigger: false,
                    title: 'Front-End | Markdown Previewer',
                    thumbInsight: "Site pour traduction Markdown",
                    content: 'Application développée pour certification FreeCodeCamp, accessible en ligne via le bouton ci-dessous :',
                    url: "https://benbishop40.github.io/markdown-previewer/",
                    imageProjet: portfolioProjet3,
                    thumbProjet: portfolioProjet3,
                    content2:"Single Page Application développée avec React.JS, traduction Markdown avec librairie Marked.",
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
                    skillsBack: [],
                },
                {
                    id: 4,
                    trigger: false,
                    title: 'Front-End | Drum Machine',
                    thumbInsight: "Application machine à samples",
                    content: "Application développée pour certification FreeCodeCamp, permettant de jouer avec une boîte à sample et 2 librairies de sons pré-enregistrés. Elle est accessible en ligne via le bouton ci-dessous :",
                    url: "https://benbishop40.github.io/drum-machine/",
                    imageProjet: portfolioProjet4,
                    thumbProjet: portfolioProjet4,
                    content2:"Single Page Application développée sous Framework React.JS.",
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
                    skillsBack: [],
                },
                {
                    id: 5,
                    trigger: false,
                    title: 'Front-End | Calculator',
                    thumbInsight: "Application calculatrice",
                    content: "Application développée pour certification FreeCodeCamp, permettant de réaliser des calculs simples. Elle est accessible en ligne via le bouton ci-dessous :",
                    url: "https://benbishop40.github.io/javascript-calculator/",
                    imageProjet: portfolioProjet5,
                    thumbProjet: portfolioProjet5,
                    content2:"Single Page Application développée sous Framework React.JS, librairie MathJS.",
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
                    skillsBack: [],
                },
            ]
        };

        this.handleTogglePopup = this.handleTogglePopup.bind(this);
    
        this.textRef = createRef();
    }

    componentDidMount() {
        const timeline = gsap.timeline({ repeat: -1 });
        const chars = Array.from(this.textRef.current.querySelectorAll(".display-dots"));
        
        timeline.from(chars, {opacity: 0, stagger: 0.5})
        .to(chars, {opacity: 1, stagger: 0.5, delay: 0})
        .from(chars.reverse(), {opacity: 1, stagger: 0.5})
        .to(chars.reverse(), {opacity: 0, stagger: 0.5, delay: 0});
        this.timeline = timeline;
    }
    componentWillUnmount() {
        this.timeline.kill();
    }
    handleTogglePopup(id) {
        const popups = [...this.state.popups];
        const index = popups.findIndex(p => p.id === id);
        popups[index].trigger = !popups[index].trigger;
        this.setState({ popups });
    }
    randomKey() {
        const keyRandomNumber = Math.random()/1000;
        return keyRandomNumber;
    }
    imageFrontToDisplay (skill) {
        if (skill === "React.JS") {
            return (<i className="fa-brands fa-react fa-beat-fade"></i>)
        } else if (skill === "JavaScript") {
            return (<i className="fa-brands fa-square-js fa-beat-fade"></i>)
        } else if (skill === "HTML") {
            return (<i className="fa-brands fa-html5 fa-beat-fade"></i>)
        } else if (skill === "CSS/SCSS") {
            return (<i className="fa-brands fa-css3-alt fa-beat-fade"></i>)
        }
    }

    imageBackToDisplay (skill) {
        if (skill === "Node.JS") {
            return (<i className="fa-brands fa-node fa-beat-fade"></i>)
        } else if (skill === "MySQL") {
            return (<i className="fa-solid fa-database fa-beat-fade"><span>mySQL</span></i>)
        } else if (skill === "API externes") {
            return (<i className="fa-solid fa-gears fa-beat-fade"><span>API</span></i>)
        } else if (skill === "Express") {
            return (<i className="fa-solid fa-server fa-beat-fade"></i>)
        }
    }

    render() {
        return (
            <>
                <section id='portfolio'>
                    <h2 className='title'>Portfolio<span ref={this.textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span></h2>
                    <div className='thumbs-container'>
                        {this.state.popups.map((popup) => (
                            <div className="thumb-container" key={popup.id}>
                                <div className="thumb">
                                    <div className="thumb-preview" onClick={() => this.handleTogglePopup(popup.id)}>
                                        <p>{popup.title}</p>
                                        <p>{popup.thumbInsight}</p>
                                    </div>
                                    <img src={popup.thumbProjet} alt='thumb-project-portfolio' className='img-thumb'></img>
                                    <Popup trigger={popup.trigger} closePopup={() => this.handleTogglePopup(popup.id)}>
                                        <h3>{popup.title}</h3>
                                        <p>{popup.content}</p>
                                        {popup.url ? <a className='close-btn lightdark-btn' href={popup.url} target='_blank' rel='noreferrer'> Cliquez ici</a> : <Fragment></Fragment>}
                                        <div className='thumb-image-content2'>
                                            <img className='img-project' src={popup.imageProjet} alt='project-insight'></img>
                                            <p>{popup.content2}</p>
                                        </div>
                                        <div className="stacks-container">
                                            <div className="stackFront-container">
                                                <div className="skill-container">
                                                <h4>Stacks Front :</h4>
                                                <em>{popup.skillsFront.map((skill) => (
                                                    <div key={this.randomKey()}>
                                                        <p>{`#${skill}`}</p>
                                                        {this.imageFrontToDisplay(skill)}
                                                    </div>
                                                ))}</em>
                                                </div>
                                            </div>
                                            <div className="stackBack-container">
                                                <div className="skill-container">
                                                    <h4>Stacks Back :</h4>
                                                    <em>{popup.skillsBack.map((skill) => (
                                                        <div key={this.randomKey()}>
                                                            <p>{`#${skill}`}</p>
                                                            {this.imageBackToDisplay(skill)}
                                                        </div>
                                                    ))}</em>
                                                </div>    
                                            </div>
                                        </div>  
                                    </Popup>
                                </div>
                                <div className="thumb-bottom">
                                    <p>{popup.title}</p>
                                    <p>{popup.thumbInsight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        )
    }
}

export default Portfolio;