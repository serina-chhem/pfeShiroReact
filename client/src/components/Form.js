/*import DictaphoneInput from "./DictaphoneInput.js";*/
import Dictaphone from "./Dictaphone.js";
import { useEffect, useState, useRef } from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const Form = () => {
    const { transcript, listening } = useSpeechRecognition();
    const hasBeenUpdated = useRef(false);
    const [cro, setCro] = useState("");
    /*const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");*/
    const [pat_id, setPatId] = useState("");
    const [med_id, setMedId] = useState("");
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
                /*SEARCH FOR PAT ID WITH WRITTEN NAME
                body: JSON.stringify({ pat: 1, med: lastname, cro: text }),
                */
                body: JSON.stringify({
                    pat: pat_id,
                    med: med_id,
                    cro: cro,
                }),
            });
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div>
            <Dictaphone listening={listening} />
            <form onSubmit={handleSubmit}>
                {/* <input value={firstname} name="firstname" onChange={(e) => setFirstname(e.target.value)} />
            <input value={lastname} name="lastname" onChange={(e) => setLastname(e.target.value)} /> */}
                <input
                    value={pat_id}
                    name="pat_id"
                    onChange={(e) => setPatId(e.target.value)}
                />
                <input
                    value={med_id}
                    name="med_id"
                    onChange={(e) => setMedId(e.target.value)}
                />
                <textarea
                    value={cro}
                    onChange={(e) => setCro(e.target.value)}
                    disabled={listening}
                ></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default Form;
