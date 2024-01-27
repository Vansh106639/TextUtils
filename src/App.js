import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setDarkModeStyles();
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode('light');
      setLightModeStyles();
      showAlert("Light mode Enabled", "success");
    }
  };

  const setDarkModeStyles = () => {
    document.body.style.backgroundColor = "#042743";
    document.body.style.color = "white";
    // Add more styles if needed
  };

  const setLightModeStyles = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // Add more styles if needed
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about"   element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm heading="Enter The text to analyze" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
