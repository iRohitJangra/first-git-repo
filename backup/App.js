import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Lightmode is enabled', 'info')
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#044061'
      showAlert('Darkmode is enabled', 'primary')
    }
  }

  return (
    <>
      <Navbar title='My React App' mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        {/* <AboutUs  mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
