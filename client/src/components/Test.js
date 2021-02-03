import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {MdKeyboardVoice} from "react-icons/md";

// const startBtn = document.createElement("button");
// startBtn.innerHTML = "Start listening";
const result = document.createElement("div");
const processing = document.createElement("p");
document.write("<body><h1>Test</h1><p>Parlez bonjour etc </p></body>");
// document.body.append(startBtn);
document.body.append(result);
document.body.append(processing);

// speech to text
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let toggleBtn = null;
if (typeof SpeechRecognition === "undefined") {
    // startBtn.remove();
    result.innerHTML = "<b>Browser does not support Speech API. Please download latest chrome.<b>";
} else {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = event => {
        const last = event.results.length - 1;
        const res = event.results[last];
        const text = res[0].transcript;
        if (res.isFinal) {
            processing.innerHTML = "processing ....";

            const response = process(text);
            const p = document.createElement("p");
            p.innerHTML = `nathan: ${text} </br>reponse: ${response}`;
            processing.innerHTML = "";
            result.appendChild(p);

            // text to speech
            speechSynthesis.speak(new SpeechSynthesisUtterance(response));
        } else {
            processing.innerHTML = `ecoute: ${text}`;
        }
    }
    let listening = false;
    toggleBtn = () => {
        if (listening) {
            recognition.stop();
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
            response = "bonjour mr nathan?"; break;
        case "enregistrerlecompterendu":
            response = "ok c'est fait.";  break;
        case "ilestquelleheure":
            response = new Date().toLocaleTimeString(); break;
        case "stop":
            response = "Bye!!";
            toggleBtn(); break;
        default:
            response = "avez vous terminé l'enregistrement.";
            toggleBtn();

    }
    if (!response) {
        window.open(`http://google.com/search?q=${rawText.replace("search", "")}`, "_blank");
        return `I found some information for ${rawText}`;
    }
    return response;
}

export default class Test extends Component {
    render() {
        return (
            <div className="App">
                fuck off
                <button
                    onClick={toggleBtn}
                    className="buttonStart"
                >
                    <MdKeyboardVoice className="logoVoice"/>
                    Commencer
                </button>
            </div>
        );
    }
}
