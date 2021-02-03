import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Serina from "../images/serina.JPG";
import Etienne from "../images/etienne.jpg";
import Nathan from "../images/nathan.jpg";
import Jordan from "../images/jordan.jpg";
import Thomas from "../images/thomas.jpg";

import Surgeons from "../images/surgeons.svg";
import Fonctionnalite1 from "../images/func1.svg";
import Fonctionnalite2 from "../images/func2.svg";
import Fonctionnalite3 from "../images/func3.svg";
import Fonctionnalite4 from "../images/func4.svg";
import Fonctionnalite5 from "../images/func5.svg";
import Fonctionnalite6 from "../images/func6.svg";

export default class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="Blanc">
                    <div className="Accueil">
                        <h1>
                            L'assistant vocal qui comprend les comptes-rendus
                            des chirurgiens
                        </h1>
                        <img
                            src={Surgeons}
                            alt="surgeonsAccueil"
                            className="imgAccueil"
                        />

                        <div className="buttonAccueil">
                            <button>
                                <Link to="/form" className="nav-link">
                                    Enregistrement d'un CRO
                                </Link>
                            </button>

                            <button>
                                <Link to="/cro" className="nav-link">
                                    Suivi des CROs
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="Bleu">
                    <div className="Propos" id="propos">
                        <h1>À propos</h1>
                        <p>
                            <span class="marge">
                                Ce projet baptisé SHIRO est né du Centre de
                                Recherche Interdisciplinaires de Paris et vise à
                                alléger le travail des chirurgiens praticiens
                                hospitaliers lors de la rédaction de
                                comptes-rendus opératoires.
                            </span>
                            <br />
                            <br />
                            <span class="marge">
                                En effet, des chirurgiens peuvent passer en
                                moyenne une heure par jour à rédiger
                                manuellement des comptes-rendus et les font
                                valider par un secrétariat. D'autres
                                enregistrent leurs comptes-rendus sur un
                                dictaphone et les font transcrire en texte par
                                un tiers.
                            </span>
                            <br />
                            <br />
                            <span class="marge">
                                En partant de ce constat, nous avons eu
                                l'intention de supprimer toute étape de
                                validation par un tiers et ainsi d'optimiser les
                                tâches secondaires du corps chirugical. Nous
                                avons donc décidé de créer un assistant vocal
                                permettant l'automatisation de la rédaction d’un
                                compte-rendu opératoire.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="Blanc">
                    <div className="Fonctionnalités" id="fonctionnalites">
                        <h1>Fonctionnalités de Shiro</h1>
                        <div className="Bloc">
                            <div className="bloc1">
                                <img
                                    src={Fonctionnalite1}
                                    alt="Reconnaissance vocale"
                                />
                                <h3>Reconnaissance vocale</h3>
                                <p>
                                    SHIRO est capable de reconnaître la voix
                                    d'un chirurgien lorsqu'il est invoqué
                                </p>
                            </div>
                            <div className="bloc2">
                                <img
                                    src={Fonctionnalite2}
                                    alt="Transcription"
                                />
                                <h3>Transcription de la voix en texte</h3>
                                <p>
                                    Shiro est capable de retranscrire la voix en
                                    texte
                                </p>
                            </div>
                            <div className="bloc2">
                                <img
                                    src={Fonctionnalite3}
                                    alt="enregistrement"
                                />
                                <h3>Enregistrement dans une BDD</h3>
                                <p>
                                    SHIRO est capable d'enregistrer les CRO dans
                                    une BDD
                                </p>
                            </div>
                        </div>
                        <div className="Bloc">
                            <div className="bloc3">
                                <img
                                    src={Fonctionnalite4}
                                    alt="Reconnaissance vocale"
                                />
                                <h3>Feedbacks</h3>
                                <p>
                                    SHIRO est capable de répondre lorsqu'on lui
                                    pose une question
                                </p>
                            </div>
                            <div className="bloc4">
                                <img
                                    src={Fonctionnalite5}
                                    alt="Reconnaissance vocale"
                                />
                                <h3>Modification d'un CRO</h3>
                                <p>
                                    Il est possible d'effectuer une modification
                                    directement sur le site
                                </p>
                            </div>
                            <div className="bloc4">
                                <img
                                    src={Fonctionnalite6}
                                    alt="Reconnaissance vocale"
                                />
                                <h3>Suivi des anciens CRO</h3>
                                <p>
                                    Il est possible de consulter les anciens CRO
                                    enregistrés via SHIRO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Bleu">
                    <div className="Contact" id="contact">
                        <h1>Créateurs</h1>

                        <div className="membresGroupe">
                            <div className="membre">
                                <img src={Serina} className="imgMembre"></img>
                                <h3>Sérina CHHEM</h3>
                                <p>Chef de projet</p>
                            </div>
                            <div className="membre">
                                <img src={Etienne} className="imgMembre"></img>
                                <h3>Etienne GALLAIS</h3>
                                <p>Responsable partenariats</p>
                            </div>
                            <div className="membre">
                                <img src={Thomas} className="imgMembre"></img>
                                <h3>Thomas GEORGE</h3>
                                <p>Développeur front-end</p>
                            </div>
                            <div className="membre">
                                <img src={Jordan} className="imgMembre"></img>
                                <h3>Jordan DO BARREIRO</h3>
                                <p>Développeur back-end</p>
                            </div>
                            <div className="membre">
                                <img src={Nathan} className="imgMembre"></img>
                                <h3>Nathan LANCMAN</h3>
                                <p>Responsable produit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
