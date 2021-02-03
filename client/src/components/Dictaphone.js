import React from "react";
import SpeechRecognition from "react-speech-recognition";
import{MdKeyboardVoice} from 'react-icons/md';

const Dictaphone = ({ listening }) => {

    function helloworld() {
        SpeechRecognition.startListening({ language: "fr-FR" });
        speechSynthesis.speak(new SpeechSynthesisUtterance("Parlez, je vous écoute"));
    }
    return (
        <div>
            <button
                onClick={() =>
                    helloworld()
                    // SpeechRecognition.startListening({ language: "fr-FR" });
                }
                disabled={listening}
                className="buttonStart"
            >
                <MdKeyboardVoice className="logoVoice"/>
                Commencer
            </button>
        </div>
    );
};
export default Dictaphone;
