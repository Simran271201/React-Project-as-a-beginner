import './App.css';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';

function App() {
  
  return (
  <> 
    <NavBar title="Learn Coding" style={{color: "Green"}}/>
    <div className="container my-3">
   <TextForm heading = "Enter your text"/>
   </div>
  </>
    
  );
}

export default App;
