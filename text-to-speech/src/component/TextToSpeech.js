import React, { useState } from "react";
import makeAPICall from "../api/apiClient";
import "./TextToSpeech.css";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [emotion, setEmotion] = useState("Surprised");
  const [audioSrc, setAudioSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleEmotionChange = (e) => {
    setEmotion(e.target.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // setError(null);
    // var emotionID = 4;
    // emotionID =
    //   emotion === "Angry"
    //     ? 1
    //     : emotion === "Neutral"
    //     ? 2
    //     : emotion === "Sad"
    //     ? 3
    //     : 4;
    // try {
    //   const response = await makeAPICall({
    //     method: "POST",
    //     endpoint: "/generate_audio",
    //     payload: {
    //       sentence: text,
    //       emotion_id: emotionID,
    //     },
    //   });
    //   setAudioSrc(response.audioUrl);
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }

    //Testing audio
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      setAudioSrc(
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      );
      setLoading(false);
    }, 2000);
  };

  const handleRedo = () => {
    setText("");
    setEmotion("Surprised");
    setAudioSrc(null);
    setError(null);
  };

  return (
    <div className="text-to-speech-form">
      {error && <div className="error">Error: {error}</div>}
      {audioSrc ? (
        <div>
          <audio controls src={audioSrc}></audio>
          <button onClick={handleRedo} className="btn">
            Redo
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <textarea
              id="text"
              value={text}
              onChange={handleTextChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emotion">Emotion:</label>
            <select
              id="emotion"
              value={emotion}
              onChange={handleEmotionChange}
              className="form-control"
            >
              <option value="Surprised">Surprised</option>
              <option value="Neutral">Neutral</option>
              <option value="Angry">Angry</option>
              <option value="Sad">Sad</option>
            </select>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>
      )}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
