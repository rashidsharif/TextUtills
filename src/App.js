import './App.css';
import TextForms from './components/TextForms.js';
import About from './components/About.js';
import Navbar from './components/NavBar.js';
import { useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode is Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', 'success');
    }
  };

  return (
    <BrowserRouter basename='/NewsMonkey'>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" aboutText="About Us" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
