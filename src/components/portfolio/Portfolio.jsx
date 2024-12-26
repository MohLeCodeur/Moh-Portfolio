import { Component, Fragment, createRef } from 'react';
import { gsap } from 'gsap';
import './_portfolio.scss';
import Popup from '../popup/Popup';


import portfolioProjet1 from '../../img/exchange.png';
import portfolioProjet2 from '../../img/devweb.png';
import thumbProjet1 from '../../img/exchange.png';
import thumbProjet2 from '../../img/devweb.png'
import portfolioProjet3 from '../../img/etudiant.png';
import portfolioProjet4 from '../../img/music.png';
// import portfolioProjet5 from '../../img/portfolio-projet5-Calculator-machine.png';


class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            popups: [
                {
                    id: 1,
                    trigger: false,
                    title: 'Echange Crypto | Conversion',
                    thumbInsight: "Projet de refonte de sites web existants", // Précision ajoutée
                    content: "Application d'échange de crypto-monnaies permettant aux utilisateurs d'acheter, de vendre et de gérer leurs actifs numériques.", 
                    url: "https://exchangeff.netlify.app/",
                    imageProjet: portfolioProjet1,
                    thumbProjet: thumbProjet1,
                    content2:"Single Page Application développée dans le cadre de mon projet de formation, que je continue à développer en autonomie. ", // Contenu modifié et précisé
                    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS", "Bibliothèque de graphiques (ex: Chart.js, Recharts)"], // Ajout d'une bibliothèque de graphiques
                    skillsBack: ["Node.JS", "Express", "Base de données (ex: PostgreSQL, MongoDB)", "API externes (ex: CoinGecko, Binance API)", "Sécurité (ex: JWT, OAuth)"], // Précisions et ajouts importants
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
                    title: 'Gestion des Étudiants',
                    thumbInsight: "Application web : Gestion des étudiants",
                    content: "Application complète pour la gestion des informations des étudiants (inscriptions, notes, absences, etc.).",
                    url: "https://etudiant.mohlecodeur.com/",
                    imageProjet: portfolioProjet3,
                    thumbProjet: portfolioProjet3,
                    content2:"Application full-stack développée avec React.JS pour l'interface utilisateur et Laravel pour l'API et la gestion de la base de données. Gère les CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les étudiants, les cours et les enseignants. Inclut un système d'authentification et d'autorisation.", // Plus concis et précis
    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS"],
    skillsBack: ["Laravel", "PHP", "MySQL ", "API REST"], // Ajout des technologies backend
},
                {
                    id: 4,
    trigger: false,
    title: 'Lecteur de Musique Personnalisé',
    thumbInsight: "Application lecteur de musique",
    content: "Application web permettant de lire des fichiers audio, de créer et gérer des playlists, et d'afficher des visualisations audio.", // Contenu plus descriptif
    url: "https://music-beatiful-player.vercel.app/",
    imageProjet: portfolioProjet4,
    thumbProjet: portfolioProjet4,
    content2:"Single Page Application développée avec React.JS. Utilise l'API Web Audio pour la lecture et le traitement audio. Intègre la gestion de playlists et potentiellement des visualisations audio dynamiques.", // Détails techniques ajoutés
    skillsFront: ["React.JS", "JavaScript", "HTML", "CSS/SCSS", "API Web Audio"], // Ajout de l'API Web Audio
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