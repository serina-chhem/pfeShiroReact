import Dictaphone from "./Dictaphone.js";
import { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
    // useSpeechRecognition,
} from "react-speech-recognition";
import {MdKeyboardVoice} from "react-icons/md";



const TestCro = () => {

    const SpeechRecognitionz = window.SpeechRecognition || window.webkitSpeechRecognition;
    const hasBeenUpdated = useRef(false);
    const [cro, setCro] = useState("");
    const [firstname_pat, setFirstname_pat] = useState("");
    const [lastname_pat, setLastname_pat] = useState("");
    const [firstname_med, setFirstname_med] = useState("");
    const [lastname_med, setLastname_med] = useState("");
    // const [message, setMessage] = useState([]);
    let [text, setText] = useState("ta mere");

    let toggleBtn = null;
    let listening = false;
    if (typeof SpeechRecognition === "undefined") {
        // startBtn.remove();

    } else {
        const recognition = new SpeechRecognitionz();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.onresult = event => {
            const last = event.results.length - 1;
            const res = event.results[last];
            text = res[0].transcript;
            console.log(res[0].transcript);
            if (res.isFinal) {
                const response = process(text);
                // text to speech
                speechSynthesis.speak(new SpeechSynthesisUtterance(response));
            } else {
                // processing.innerHTML = `ecoute: ${text}`;
            }
        }

        toggleBtn = () => {
            if (listening) {
                recognition.stop();
                speechSynthesis.speak(new SpeechSynthesisUtterance('stop ecoute'));
                // startBtn.textContent = "Start listening";

            } else {
                recognition.start();
                // startBtn.textContent = "Stop listening";
                speechSynthesis.speak(new SpeechSynthesisUtterance('Indiquez le nom du patient'));
            }
            listening = !listening;
        };
        // startBtn.addEventListener("click", toggleBtn);
    }

    function process(rawText) {
        let text = rawText.replace(/\s/g, "");
        text = text.toLowerCase();
        let response = null;
        switch(text) {
            case "bonjour":
                response = "bonjour c'est moi l'assistant";toggleBtn(); break;
            case "enregistrerlecompterendu":
                response = "ok c'est fait. lol"; toggleBtn(); break;
            case "nomdupatient":
                response = "ok c'est fait. lol"; toggleBtn(); break;
            case "prénomdupatient":
                response = "ok c'est fait. lol"; toggleBtn(); break;
            case "ilestquelleheure":
                response = new Date().toLocaleTimeString();toggleBtn(); break;
            case "stop":
                response = "Bye!!";toggleBtn();
                break;
            default:
                response = "gé pas compris.";
                toggleBtn();

        }
        if (!response) {
            window.open(`http://google.com/search?q=${rawText.replace("search", "")}`, "_blank");
            return `I found some information for ${rawText}`;
        }
        return response;
    }







    // const { transcript, listening } = useSpeechRecognition();
    useEffect(() => {
        console.log("listening = ", listening, "\ntext = ",text,"\n", "hasBeenUpdated = ",hasBeenUpdated);
        if (!text) return;
        if (listening) return (hasBeenUpdated.current = false);
        if (hasBeenUpdated.current) return;
        hasBeenUpdated.current = true;
        setText(cro + "\n" + text);
        // setCro(cro + "\n" + transcript);

    // }, [text, cro]);
    }, [text, cro, listening]);
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
                        <button
                            onClick={toggleBtn}
                            className="buttonStart"
                        >
                            <MdKeyboardVoice className="logoVoice"/>
                            Commencer
                        </button>

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
                                {date}/0{month}/{year}
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
                                disabled={listening}
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
                                value={text}
                                onChange={(e) => setText(e.target.value)}
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

export default TestCro;
