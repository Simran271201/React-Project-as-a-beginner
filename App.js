import React,{ useState } from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';


function App() 
{
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert = (message, type) =>
  {
    setalert
    ({
      msg : message,
      type: type

    })
    setTimeout(() =>
    {
      setalert(null);
    },3000);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3a3941';
      showalert("Dark mode is enabled ", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Dark mode is disabled ", "success")
    }
  }
  return (
  <> 
    <NavBar title="Learn Coding" mode = {mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm  heading=" Enter your text" mode = {mode}/>


   </div>
  </>
    
  );
}

export default App;
