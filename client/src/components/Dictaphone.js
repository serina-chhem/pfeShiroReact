import React from "react";
import SpeechRecognition from "react-speech-recognition";

const Dictaphone = ({ listening }) => {

    return (
        <div>
            <button
                onClick={() =>
                    SpeechRecognition.startListening({ language: "fr-FR"})
                }
                disabled={listening}
            >

                Appuyez pour parler

                Start
                
            </button>
        </div>
    );
};
export default Dictaphone;
