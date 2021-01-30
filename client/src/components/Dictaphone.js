import React from "react";
import SpeechRecognition from "react-speech-recognition";
import{MdKeyboardVoice} from 'react-icons/md';

const Dictaphone = ({ listening }) => {
    return (
        <div>
            <button
                onClick={() =>
                    SpeechRecognition.startListening({ language: "fr-FR" })
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
