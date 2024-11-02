import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

// This whole project is done with the help of function based components 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; /* setting whole background color */
      showAlert("Successfully: Dark Mode Enabled!!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Successfully: Light Mode Enabled!!", "warning");
    }
  }
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <><Navbar title='TextUtils' aboutTextUtils='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} /><About mode={mode} /></>
    },
    {
      path: "/",
      element: <><Navbar title='TextUtils' aboutTextUtils='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} /><TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /></>
    }
  ]);
  return (
    <>
      {/* <BrowserRouter>
        <Navbar title='TextUtils' aboutTextUtils='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
          // use {exact} keyword is important react perform particial matching so it can cause issues 
            <Route exact path="/about" element={<About mode={mode} />}/>
          </Routes>
          <Routes>
            <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
          </Routes>
        </div>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </>

  );
}
// #0c0e0d5c
export default App;
