import logo from './ball.avif';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  function getRandomVoice(voices) {
    if (!voices || voices.length === 0) return null;

    const englishVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));

    const pool = englishVoices.length > 0 ? englishVoices : voices;
    const index = Math.floor(Math.random() * pool.length);
    return pool[index];
  }

  const handleClick = (text) => {
    toast('BALLS (but prettier)');

    const voices = window.speechSynthesis.getVoices();
    const voice = getRandomVoice(voices);
    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="balls_text">balls</p>
        <button className="balls" onClick={() => handleClick('Balls, but prettier')}>
          balls
        </button>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
