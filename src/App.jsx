import logo from './ball.avif';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const handleClick = () => {
    toast('BALLS (but prettier)');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="balls_text">balls</p>
        <button className="balls" onClick={handleClick}></button>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
