import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import Form from "./components/Form.js";
import Cro from "./components/Cro.js";
import Navbar from "./components/Navbar.js";
import "./App.css";
// import logo from "./images/logo.png";
// import proto from "./images/proto.png";
// import {ReactComponent as Surgeons} from './images/surgeons.svg';
// import Fonctionnalite1 from './images/func1.svg';
// import Fonctionnalite2 from './images/func2.svg';
// import Fonctionnalite3 from './images/func3.svg';
// import Fonctionnalite4 from './images/func4.svg';
// import Fonctionnalite5 from './images/func5.svg';
// import Fonctionnalite6 from './images/func6.svg';

// import Form from "./components/Form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (

            <Router>
                <div className="App">
                    <Navbar />
                    <div className="Container">
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/form" component={Form} />
                        <Route exact path="/cro" component={Cro} />

            {/*<div className="App">*/}
            {/*    <div className="Blanc">*/}
            {/*        <div className="menu">*/}
            {/*            <div className="Carre">*/}
            {/*                <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*            </div>*/}
            {/*            <div className="Rectangle"></div>*/}
            {/*            <div className="Carre">*/}
            {/*                <button >Contact</button>*/}
            {/*                <button>Fonctionnalités</button>*/}
            {/*                <button>A propos</button>*/}
            {/*            </div>*/}
            {/*            */}
            {/*            */}
            {/*        </div>*/}
            {/*        <div className="Accueil">*/}
            {/*            <h1>*/}
            {/*                L'assistant vocal qui comprend les comptes-rendus des chirurgiens*/}
            {/*            </h1>*/}
            {/*            <Surgeons />*/}
            {/*            <button>Tester</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="Bleu">*/}
            {/*        <div className="Propos">*/}
            {/*        <h1>A propos</h1>*/}
            {/*        <p>*/}
            {/*            <span class="marge">Ce projet baptisé SHIRO est né du Centre de Recherche Interdisciplinaires de Paris et vise à alléger le travail des chirurgiens praticiens hospitalier */}
            {/*            lors de la rédaction de comptes-rendus.</span><br/> */}
            {/*            <span class="marge">En effet, un chirurgien passe en moyenne une heure par jour à rédiger des comptes-rendus opératoires alors que son temps pourrait être utilisé pour */}
            {/*            sauver des vies.</span><br/>*/}
            {/*            <span class="marge">En partant de ce constat, nous nous sommes dit que nous devions trouver un moyen de soulager les chirurgiens de ce poids, et c’est pour cela que nous */}
            {/*            avons décidé de créer un assistant vocal permettant la rédaction d’in compte-rendu opératoire.</span>*/}
            {/*        </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    */}
            {/*    <div className="Blanc">*/}
            {/*        <div className="Fonctionnalités">*/}
            {/*        <h1>Fonctionnalités</h1>*/}
            {/*        <div className="Bloc">*/}
            {/*            <div className="bloc1">*/}
            {/*            <img src={Fonctionnalite1} alt="Reconnaissance vocale" />*/}
            {/*            <h3>Reconnaissance vocale</h3>*/}
            {/*            <p>SHIRO est capable de reconnaître la voix d'un chirurgien lorsqu'il est invoqué</p>*/}
            {/*            </div>*/}
            {/*            <div className="bloc2">*/}
            {/*            <img src={Fonctionnalite2} alt="Transcription" />*/}
            {/*            <h3>Transcription de la voix en texte</h3>*/}
            {/*            <p>Shiro est capable de retranscrire la voix en texte</p>*/}
            {/*            </div>*/}
            {/*            <div className="bloc2">*/}
            {/*            <img src={Fonctionnalite3} alt="enregistrement" />*/}
            {/*            <h3>Enregistrement dans une BDD</h3>*/}
            {/*            <p>SHIRO est capable d'enregistrer les CRO dans une BDD</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="Bloc">*/}
            {/*            <div className="bloc3">*/}
            {/*            <img src={Fonctionnalite4} alt="Reconnaissance vocale" />*/}
            {/*            <h3>Feedbacks</h3>*/}
            {/*            <p>SHIRO est capable de répondre lorsqu'on lui pose une question</p>*/}
            {/*            </div>*/}
            {/*            <div className="bloc4">*/}
            {/*            <img src={Fonctionnalite5} alt="Reconnaissance vocale" />*/}
            {/*            <h3>Modification d'un CRO</h3>*/}
            {/*            <p>Il est possible d'effectuer une modification directement sur le site</p>*/}
            {/*            </div>*/}
            {/*            <div className="bloc4">*/}
            {/*            <img src={Fonctionnalite6} alt="Reconnaissance vocale" />*/}
            {/*            <h3>Suivie des anciens CRO</h3>*/}
            {/*            <p>Il est possible de consulter les anciens CRO enregistrés via SHIRO</p>*/}
            {/*            </div>*/}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
