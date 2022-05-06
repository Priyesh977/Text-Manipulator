// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}

    <Navbar title="Text-Toggler" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextArea showAlert={showAlert} heading="Enter your text below to analyze" mode={mode}/>
    {/* <Routes>
        <Route exact path="/" element={}/>
        <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>

    </Router> */}
    </>

  );
}

export default App;
