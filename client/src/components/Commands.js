import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Commands = () => {

    const [message, setMessage] = useState('')
    const date = new Date().getDate();
    const day = new Date().getDay();

    const month = new Date().getMonth();

    const commands = [
        {
            command: ["C'est parti", 'Ok Shiro', 'Shiro'],
            callback: () => setMessage(`Bonjour, je suis Shiro. Quel est votre nom Docteur ?`)
        },
        {
            command: ["Je suis docteur *"],
            callback: (nomDocteur) => setMessage(`Alors enchanté docteur ${nomDocteur}`)
        },
        {
            command: ['Je veux enregistrer un compte rendu', 'Compte-rendu', 'CRO', 'Enregistrer un compte-rendu'],
            callback:() =>  setMessage("D'accord, quels sont les noms et prénoms de votre patient")
        },
        {
            command: [, "Mon patient est *", "Il s'appelle * *", "Son nom est * et son prénom est *"],
            callback: (nomPatient, prenomPatient) => setMessage(`D'accord, vous venez d'opérer ${prenomPatient} ${nomPatient} aujourd'hui ${day} ${date} ${month}`)
        },
    ]

    const {transcript} = useSpeechRecognition({commands})


    return (
       
        <div>
            <p>{transcript}</p>

            <p>{message}</p>
        </div>
    )
}

export default Commands
