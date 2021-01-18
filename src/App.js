import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Header from './components/Header'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    
    <div>
      <Header/>
      <button onClick={SpeechRecognition.startListening({ language: 'fr-FR' })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone;
