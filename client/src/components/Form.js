import Dictaphone from "./Dictaphone.js";
import { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const Form = () => {


    const SpeechRecognitionz = window.SpeechRecognition || window.webkitSpeechRecognition;
    let resp = false;

    function process(rawText) {
        resp = false;
        console.log(rawText);
        let text = rawText.replace(/\s/g, "");
        text = text.toLowerCase();
        console.log("text = ",text);
        let response = null;
        switch(text) {
            case "bonjour":
                response = "bonjour"; break;
            case "relislecompte-rendu":
                response = cro; break;
            case "recommence":
                response = "j'ai supprimé le texte du compte-rendu";
                setCro("");
                break;
            case "merci":
                response = "de rien";
                break;
            // toggleBtn();
        }
        if (!response) {
            // window.open(`http://google.com/search?q=${rawText.replace("search", "")}`, "_blank");
            resp = true;
            return "C'est noté";
        }
        return response;
    }

    const hasBeenUpdated = useRef(false);
    const [cro, setCro] = useState("");
    const [firstname_pat, setFirstname_pat] = useState("");
    const [lastname_pat, setLastname_pat] = useState("");
    const [firstname_med, setFirstname_med] = useState("");
    const [lastname_med, setLastname_med] = useState("");
    const [message, setMessage] = useState([]);
    const commands = [
        {
            command: ["C'est parti", "Ok Shiro", "Shiro"],
            callback: () =>
                setMessage(
                    `Bonjour, je suis Shiro. Quel est votre nom Docteur ?`
                ),
        },
        {
            command: ["Je suis docteur *"],
            callback: (nomDocteur) =>
                setMessage(`Alors enchanté docteur ${nomDocteur}`),
        },
        {
            command: [
                "Je veux enregistrer un compte rendu",
                "Compte-rendu",
                "CRO",
                "Enregistrer un compte-rendu",
            ],
            callback: () =>
                setMessage(
                    "D'accord, quels sont les noms et prénoms de votre patient"
                ),
        },
        {
            command: [
                ,
                "Mon patient est *",
                "Il s'appelle *",
                "Son nom est * et son prénom est *",
            ],
            callback: (nomPatient) =>
                setMessage(
                    `D'accord, vous venez d'opérer ${nomPatient} aujourd'hui`
                ),
        },
    ];
    const { transcript, listening } = useSpeechRecognition();
    useEffect(() => {
        console.log(listening, transcript, hasBeenUpdated);
        if (!transcript) return;
        if (listening) return (hasBeenUpdated.current = false);
        if (hasBeenUpdated.current) return;
        hasBeenUpdated.current = true;
        const response = process(transcript);
        speechSynthesis.speak(new SpeechSynthesisUtterance(response));
        if (resp) setCro(cro + "\n" + transcript);
    }, [cro, transcript, listening]);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }



    const handleSubmit = () => {
        try {
            fetch("http://localhost:9000/api/cro", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fn_pat: firstname_pat,
                    ln_pat: lastname_pat,
                    fn_med: firstname_med,
                    ln_med: lastname_med,
                    cro: cro,
                }),
            });
        } catch (e) {
            console.error(e);
        }
    };
    const dateComplete = new Date();
    const year = dateComplete.getFullYear();
    const month = dateComplete.getMonth() + 1;
    const date = dateComplete.getDate();

    return (
        <div>
            <div className="croPage">
                <section className="glass">
                    <div className="cro-Surgeon">
                        <Dictaphone listening={listening} />

                        <form onSubmit={handleSubmit}>
                            <h1>Chirurgien opérateur</h1>
                            <p>Nom :</p>
                            <input
                                value={lastname_med}
                                name="lastname_med"
                                onChange={(e) =>
                                    setLastname_med(e.target.value)
                                }
                            />
                            <p>Prénom :</p>
                            <input
                                value={firstname_med}
                                name="firstname_med"
                                onChange={(e) =>
                                    setFirstname_med(e.target.value)
                                }
                            />
                            <p>
                                0{date}/0{month}/{year}
                            </p>
                        </form>
                    </div>

                    <div className="cro-Patient">
                        <h1>Compte-rendu opératoire</h1>
                        <form onSubmit={handleSubmit}>
                            <p>Nom du patient :</p>
                            <input
                                value={lastname_pat}
                                name="lastname_pat"
                                onChange={(e) =>
                                    setLastname_pat(e.target.value)
                                }
                            />
                            <p>Prénom du patient :</p>
                            <input
                                value={firstname_pat}
                                name="firstname_pat"
                                onChange={(e) =>
                                    setFirstname_pat(e.target.value)
                                }
                            />
                        </form>

                        <form onSubmit={handleSubmit}>
                            <p>Parlez pour remplir le CRO :</p>
                            <textarea
                                value={cro}
                                onChange={(e) => setCro(e.target.value)}
                                disabled={listening}
                            ></textarea>
                            <div>
                                <input
                                    type="submit"
                                    value="Valider"
                                    className="buttonValider"
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            <div className="circle1"> </div>
            <div className="circle2"> </div>
            <div className="circle3"> </div>
            <div className="circle4"> </div>
        </div>
    );
};

export default Form;
