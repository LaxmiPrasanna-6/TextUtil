
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from "./components/About"
import React,{useState} from 'react';
// import { BrowserRouter as Router,
//   Routes,
//   Route
//  } from 'react-router-dom';
// import About from './components/About';
function App() {
  let [alert,setAlert]=useState(null)
  function showAlert(message,type)
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null)
    },3000)
  }
  let [mode,setMode]=useState('dark')
   function toggleMode()
   {
    if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="grey"
    showAlert("Success","dark mode is enabled")
    }    
    else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Success","light mode is enabled")
    }
   }
  return (
    <>
        {/* <Router> */}
              <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
              <Alert alert={alert}/>
              <div className='container'>
              {/* <Routes> */}
              {/* <Route path="/about" element={<About />} /> */}
              <TextForm showAlert={showAlert} />
              {/* </Routes> */}
              </div>
        {/* </Router> */}
      
     
    </>
  );
}

export default App;
