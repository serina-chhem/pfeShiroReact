import Dictaphone from "./Dictaphone.js";
import { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const Form = () => {
    const { transcript, listening } = useSpeechRecognition();
    const hasBeenUpdated = useRef(false);
    const [cro, setCro] = useState("");
    const [firstname_pat, setFirstname_pat] = useState("");
    const [lastname_pat, setLastname_pat] = useState("");
    const [firstname_med, setFirstname_med] = useState("");
    const [lastname_med, setLastname_med] = useState("");
    useEffect(() => {
        console.log(listening, transcript, hasBeenUpdated);
        if (!transcript) return;
        if (listening) return (hasBeenUpdated.current = false);
        if (hasBeenUpdated.current) return;
        hasBeenUpdated.current = true;
        setCro(cro + "\n" + transcript);
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
    return (
        <div>
            <div className="Blanc">
                <Dictaphone listening={listening} />
                <form onSubmit={handleSubmit}>
                    <p>Nom du patient:</p>
                    <input
                        value={lastname_pat}
                        name="lastname_pat"
                        onChange={(e) => setLastname_pat(e.target.value)}
                    />
                    <p>Prénom du patient:</p>
                    <input
                        value={firstname_pat}
                        name="firstname_pat"
                        onChange={(e) => setFirstname_pat(e.target.value)}
                    />
                    <p>Nom du médecin:</p>
                    <input
                        value={lastname_med}
                        name="lastname_med"
                        onChange={(e) => setLastname_med(e.target.value)}
                    />
                    <p>Prénom du médecin:</p>
                    <input
                        value={firstname_med}
                        name="firstname_med"
                        onChange={(e) => setFirstname_med(e.target.value)}
                    />
                    <p>Parlez pour remplir le CRO:</p>
                    <textarea
                        value={cro}
                        onChange={(e) => setCro(e.target.value)}
                        disabled={listening}
                    ></textarea>
                    <p></p>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    );
};

export default Form;
