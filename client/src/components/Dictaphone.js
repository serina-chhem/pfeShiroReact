import React from "react";
import SpeechRecognition from "react-speech-recognition";

const Dictaphone = ({ listening }) => {
    return (
        <div>
            <button
                onClick={() =>
                    SpeechRecognition.startListening({ language: "fr-FR" })
                }
                disabled={listening}
            >
                Start
            </button>
            {/* <button onClick={() => SpeechRecognition.stopListening()}>
                Stop
            </button>
            <button onClick={() => resetTranscript()}>Reset</button> */}
        </div>
    );
};
export default Dictaphone;
