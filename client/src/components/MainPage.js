import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import proto from "../proto.png";

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

                <div className="Bleu">
                    <div className="Propos" id="propos">
                        <h1>A propos</h1>
                        <p>
                            <span class="marge">
                                Ce projet baptisé SHIRO est né du Centre de
                                Recherche Interdisciplinaires de Paris et vise à
                                alléger le travail des chirurgiens praticiens
                                hospitalier lors de la rédaction de
                                comptes-rendus.
                            </span>
                            <br />
                            <span class="marge">
                                En effet, un chirurgien passe en moyenne une
                                heure par jour à rédiger des comptes-rendus
                                opératoires alors que son temps pourrait être
                                utilisé pour sauver des vies.
                            </span>
                            <br />
                            <span class="marge">
                                En partant de ce constat, nous nous sommes dit
                                que nous devions trouver un moyen de soulager
                                les chirurgiens de ce poids, et c’est pour cela
                                que nous avons décidé de créer un assistant
                                vocal permettant la rédaction d’un compte-rendu
                                opératoire.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="Blanc">
                    <div className="Fonctionnalités" id="fonctionnalites">
                        <h1>Fonctionnalités</h1>
                        <div className="Bloc">
                            <div className="bloc1">
                                <h3>Reconnaissance vocale</h3>
                                <p>
                                    SHIRO est capable de reconnaître la voix
                                    d'un chirurgien lorsqu'il est invoqué
                                </p>
                            </div>
                            <div className="bloc2">
                                <h3>Transcription de la voix en texte</h3>
                                <p>
                                    Shiro est capable de retranscrire la voix en
                                    texte
                                </p>
                            </div>
                            <div className="bloc2">
                                <h3>Enregistrement dans une BDD</h3>
                                <p>
                                    SHIRO est capable d'enregistrer les CRO dans
                                    une BDD
                                </p>
                            </div>
                        </div>
                        <div className="Bloc">
                            <div className="bloc3">
                                <h3>Feedbacks</h3>
                                <p>
                                    SHIRO est capable de répondre lorsqu'on lui
                                    pose une question
                                </p>
                            </div>
                            <div className="bloc4">
                                <h3>Modification d'un CRO</h3>
                                <p>
                                    Il est possible d'effectuer une modification
                                    directement sur le site
                                </p>
                            </div>
                            <div className="bloc4">
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
                    <div className="Prototype">
                        <h1>Prototype</h1>
                        <img src={proto} className="App-proto" alt="logo" />
                    </div>
                </div>
                <div className="Blanc">
                    <div className="Contact" id="contact">
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        );
    }
}
