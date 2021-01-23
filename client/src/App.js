import React, { Component } from "react";
import "./App.css";

/*import Navbar from './components/Navbar.js';*/
import Form from "./components/Form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <div className="App">
                <div className="Blanc">
                    <div className="menu">
                    <button >Contact</button>
                    <button>A propos</button>
                    <button>Fonctionnalités</button>
                    </div>
                    <div className="Accueil">
                    <h1>
                        L'assistan vocal qui comprend les comptes-rendus des chirurgiens
                    </h1>
                    <button>Tester</button>
                    
                    </div>
                </div>

                <div className="Bleu">
                    <div className="Propos">
                    <h1>A propos</h1>
                    <p>Ce projet est né du Centre de Recherche Interdisciplinaires de Paris et vise à alléger le travail des chirurgiens praticiens hospitalier.</p>
                    </div>
                </div>
                
                <div className="Blanc">
                    <div className="Fonctionnalités">
                    <h1>Fonctionnalités</h1>
                    <div className="Bloc">
                        <div className="bloc1">
                        <h3>Reconnaissance vocale</h3>
                        <p>SHIRO est capable de reconnaître la voix d'un chirurgien lorsqu'il est invoqué</p>
                        </div>
                        <div className="bloc2">
                        <h3>Transcription de la voix en texte</h3>
                        </div>
                        <div className="bloc2">
                        <h3>Enregistrement dans une BDD</h3>
                        </div>
                    </div>
                    <div className="Bloc">
                        <div className="bloc3">
                        <h3>Feedbacks</h3>
                        <p>SHIRO est capable de répondre lorsqu'on lui pose une question</p>
                        </div>
                        <div className="bloc4">
                        <h3>Modification d'un CRO</h3>
                        </div>
                        <div className="bloc4">
                        <h3>Suivie des anciens CRO</h3>
                        </div>
                    </div>
                    </div>
                </div>

                

                <div className="Bleu">
                    <div className="Prototype">
                    <h1>Prototype</h1>
                    </div>
                </div>
                

                </div>
        );
    }
}

export default App;
