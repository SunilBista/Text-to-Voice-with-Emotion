import React from "react";
import "./App.css";
import TextToSpeech from "./component/TextToSpeech";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text to Speech with Emotion</h1>
        <TextToSpeech />
      </header>
    </div>
  );
}

export default App;
