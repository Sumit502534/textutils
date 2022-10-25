import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm"; // ( for project 1 :for Textform.js--->)
// import About from "./components/About";//( for project 2 :for About.js--->)

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Textutils - Dark Mode' // tittle changing
      // setInterval(() => {
      //   document.title = 'Textutils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils now'
      // }, 1500);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = 'Textutils - Light Mode' // tittle changing

    }
    
  };
  return (
    <>
      {/* <Navbar title = "Textutils" aboutText = "About Textutils"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
          <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
            <Alert alert= {alert}/>
          <div className="container my-3">
            {/* <Routes> */}

            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"     mode = {mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below"     mode = {mode}/>
            
            {/* </Routes> */}

        
            {/* project 1 :for Textform.js---> */}

            {/* project 2 :for About.js---> */}
            {/* <About/> */}
          </div>
      {/* </Router> */}
    </>

  );
}

export default App;
